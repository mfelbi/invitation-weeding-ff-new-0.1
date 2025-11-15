export async function onRequest(context) {
  const { request, next, env } = context;
  const url = new URL(request.url);
  const pathname = url.pathname;

  // Check if it's a static asset
  if (pathname.startsWith('/assets/') ||
      pathname.startsWith('/css/') ||
      pathname.startsWith('/dist/') ||
      pathname.startsWith('/js/') ||
      pathname.endsWith('.js') ||
      pathname.endsWith('.css') ||
      pathname.endsWith('.png') ||
      pathname.endsWith('.jpg') ||
      pathname.endsWith('.jpeg') ||
      pathname.endsWith('.gif') ||
      pathname.endsWith('.svg') ||
      pathname.endsWith('.ico') ||
      pathname.endsWith('.webp') ||
      pathname.endsWith('.mp3') ||
      pathname.endsWith('.mp4') ||
      pathname.endsWith('.woff') ||
      pathname.endsWith('.woff2') ||
      pathname.endsWith('.ttf') ||
      pathname.endsWith('.eot')) {

    // Serve static assets directly
    return next();
  }

  // For all other routes, serve index.html (SPA fallback)
  const indexResponse = await context.env.ASSETS.fetch(new Request('https://example.com/index.html'));
  return new Response(await indexResponse.text(), {
    headers: {
      'Content-Type': 'text/html',
      'Cache-Control': 'public, max-age=0, must-revalidate'
    }
  });
}