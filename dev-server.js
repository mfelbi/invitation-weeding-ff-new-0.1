const http = require('http');
const fs = require('fs');
const path = require('path');
const { WebSocketServer } = require('ws');
const chokidar = require('chokidar');

// Create HTTP server
const server = http.createServer((req, res) => {
  let filePath = '.' + req.url;
  if (filePath === './') filePath = './index.html';

  const extname = String(path.extname(filePath)).toLowerCase();
  const mimeTypes = {
    '.html': 'text/html',
    '.js': 'text/javascript',
    '.css': 'text/css',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.wav': 'audio/wav',
    '.mp4': 'video/mp4',
    '.woff': 'application/font-woff',
    '.ttf': 'application/font-ttf',
    '.eot': 'application/vnd.ms-fontobject',
    '.otf': 'application/font-otf',
    '.wasm': 'application/wasm',
    '.webp': 'image/webp',
    '.mp3': 'audio/mpeg'
  };

  const contentType = mimeTypes[extname] || 'application/octet-stream';

  // Set security headers
  const cspHeader = "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://cdn.jsdelivr.net https://fonts.googleapis.com https://fonts.gstatic.com; style-src 'self' 'unsafe-inline' https://cdn.jsdelivr.net https://fonts.googleapis.com https://fonts.gstatic.com; font-src 'self' https://fonts.gstatic.com https://cdn.jsdelivr.net; img-src 'self' data: https:; media-src 'self' https:; connect-src 'self' ws: wss: https://cdn.jsdelivr.net;";

  fs.readFile(filePath, (error, content) => {
    if (error) {
      if(error.code === 'ENOENT') {
        fs.readFile('./index.html', (error, content) => {
          res.writeHead(200, {
            'Content-Type': 'text/html',
            'Content-Security-Policy': cspHeader
          });
          res.end(content, 'utf-8');
        });
      } else {
        res.writeHead(500);
        res.end('Sorry, check with the site admin for error: '+error.code+' ..\n');
      }
    } else {
      res.writeHead(200, {
        'Content-Type': contentType,
        'Content-Security-Policy': cspHeader
      });
      res.end(content, 'utf-8');
    }
  });
});

// Create WebSocket server for hot reload
const wss = new WebSocketServer({ port: 8081 }, () => {
    console.log('🔌 WebSocket server running on ws://localhost:8081');
});

wss.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
        console.log('🔌 WebSocket port 8081 already in use, trying another port...');
        // Try alternative port
        const wssAlt = new WebSocketServer({ port: 8082 }, () => {
            console.log('🔌 WebSocket server running on ws://localhost:8082');
            setupWebSocketServer(wssAlt);
        });

        wssAlt.on('error', (err) => {
            console.log('❌ WebSocket server could not start:', err.message);
        });
    }
});

const clients = new Set();
let wsPort = 8081;

const setupWebSocketServer = (wssInstance) => {
  wssInstance.on('connection', (ws) => {
    clients.add(ws);
    console.log('👤 Client connected for hot reload');

    ws.on('close', () => {
      clients.delete(ws);
      console.log('👤 Client disconnected');
    });
  });

  // Watch for file changes
  const watcher = chokidar.watch([
    'index.html',
    'wedding-config.js',
    'css/**/*.css',
    'js/**/*.js',
    'assets/**/*'
  ], {
    ignored: /node_modules|dist|public/,
    persistent: true
  });

  watcher.on('change', (path) => {
    console.log(`📝 File changed: ${path}`);

    // Notify all connected clients
    clients.forEach(client => {
      if (client.readyState === 1) { // WebSocket.OPEN
        client.send(JSON.stringify({
          type: 'reload',
          path: path
        }));
      }
    });
  });

  watcher.on('add', (path) => {
    console.log(`➕ File added: ${path}`);

    clients.forEach(client => {
      if (client.readyState === 1) {
        client.send(JSON.stringify({
          type: 'reload',
          path: path
        }));
      }
    });
  });
};

// Initial WebSocket setup
setupWebSocketServer(wss);

// Start HTTP server with port fallback
const tryPort = (port) => {
  server.listen(port, () => {
    console.log(`🚀 Server running at http://localhost:${port}/`);
    console.log('📋 Press Ctrl+C to stop the server');
    console.log('🔄 Hot reload enabled - files will auto-reload on change!');
  });

  server.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
      console.log(`🔌 Port ${port} already in use, trying another port...`);
      if (port < 3010) {
        tryPort(port + 1);
      } else {
        console.log('❌ Could not find an available port');
      }
    } else {
      console.log('❌ Server error:', err.message);
    }
  });
};

tryPort(3000);