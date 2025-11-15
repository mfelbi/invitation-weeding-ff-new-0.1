// Static Wedding Invitation JavaScript

// Countdown Timer
const countdownDate = () => {
    const timeElement = document.body.getAttribute('data-time');
    if (!timeElement) return;

    const count = new Date(timeElement.replace(' ', 'T')).getTime();

    const pad = (num) => num < 10 ? `0${num}` : `${num}`;

    const day = document.getElementById('day');
    const hour = document.getElementById('hour');
    const minute = document.getElementById('minute');
    const second = document.getElementById('second');

    if (!day || !hour || !minute || !second) return;

    const updateCountdown = () => {
        const distance = Math.abs(count - Date.now());

        day.textContent = pad(Math.floor(distance / (1000 * 60 * 60 * 24)));
        hour.textContent = pad(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
        minute.textContent = pad(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
        second.textContent = pad(Math.floor((distance % (1000 * 60)) / 1000));

        setTimeout(updateCountdown, 1000);
    };

    updateCountdown();
};

// Theme Toggle
const theme = {
    init: () => {
        const buttonTheme = document.getElementById('button-theme');
        if (!buttonTheme) return;

        const setTheme = (themeMode) => {
            const html = document.documentElement;
            html.setAttribute('data-bs-theme', themeMode);
            localStorage.setItem('theme', themeMode);

            // Update button icon
            const icon = buttonTheme.querySelector('i');
            if (icon) {
                icon.className = themeMode === 'dark' ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
            }
        };

        buttonTheme.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-bs-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            setTheme(newTheme);
        });

        // Auto-detect system preference
        const detectSystemTheme = () => {
            if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                return 'dark';
            }
            return 'light';
        };

        // Load saved theme or auto-detect
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme && savedTheme !== 'auto') {
            setTheme(savedTheme);
        } else {
            setTheme(detectSystemTheme());
        }

        // Listen for system theme changes
        if (window.matchMedia) {
            window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
                const savedTheme = localStorage.getItem('theme');
                if (!savedTheme || savedTheme === 'auto') {
                    setTheme(e.matches ? 'dark' : 'light');
                }
            });
        }

        // Show theme button immediately
        buttonTheme.classList.remove('d-none');
    }
};

// Audio Player
const audio = {
    init: () => {
        const audioUrl = document.body.getAttribute('data-audio');
        const buttonMusic = document.getElementById('button-music');

        if (!audioUrl || !buttonMusic) return;

        let audioEl = new Audio(audioUrl);
        audioEl.loop = true;
        audioEl.muted = false;
        audioEl.autoplay = false;
        audioEl.controls = false;

        let isPlay = false;

        const play = async () => {
            try {
                await audioEl.play();
                isPlay = true;
                buttonMusic.innerHTML = '<i class="fa-solid fa-circle-pause spin-button"></i>';
            } catch (err) {
                console.log('Audio play failed:', err);
            }
        };

        const pause = () => {
            isPlay = false;
            audioEl.pause();
            buttonMusic.innerHTML = '<i class="fa-solid fa-circle-play"></i>';
        };

        buttonMusic.addEventListener('click', () => {
            isPlay ? pause() : play();
        });

        // Show music button after invitation opens
        document.addEventListener('undangan.open', () => {
            buttonMusic.classList.remove('d-none');
            play(); // Auto play when invitation opens
        });
    }
};

// Guest Name from URL
const showGuestName = () => {
    const raw = window.location.search.split('to=');
    let name = null;

    if (raw.length > 1 && raw[1].length >= 1) {
        name = window.decodeURIComponent(raw[1]);
    }

    if (name) {
        const guestName = document.getElementById('guest-name');
        if (guestName) {
            const message = guestName.getAttribute('data-message') || 'Kepada Yth Bapak/Ibu/Saudara/i';
            guestName.innerHTML = `
                <div class="m-2">
                    <small class="mt-0 mb-1 mx-0 p-0">${message}</small>
                    <p class="m-0 p-0" style="font-size: 1.25rem">${name}</p>
                </div>
            `;
        }

        // Fill form name if exists
        const formName = document.getElementById('form-name');
        if (formName) {
            formName.value = name;
        }
    }
};

// Welcome Screen
const welcome = {
    open: (button) => {
        button.disabled = true;
        document.body.scrollIntoView({ behavior: 'instant' });
        document.getElementById('root').classList.remove('opacity-0');

        // Show theme button if auto mode
        if (document.body.getAttribute('data-bs-theme') === 'auto') {
            const buttonTheme = document.getElementById('button-theme');
            if (buttonTheme) buttonTheme.classList.remove('d-none');
        }

        // Open invitation
        document.dispatchEvent(new Event('undangan.open'));

        // Hide welcome screen
        const welcomeEl = document.getElementById('welcome');
        if (welcomeEl) {
            welcomeEl.style.opacity = '0';
            setTimeout(() => welcomeEl.remove(), 500);
        }

        // Start confetti
        confetti.basicAnimation();
        setTimeout(() => confetti.openAnimation(), 1500);
    }
};

// Modal Image
const modal = {
    init: () => {
        // Image modal functionality
        document.querySelectorAll('img[onclick*="modal"]').forEach(img => {
            img.addEventListener('click', (e) => {
                const src = e.target.src;
                const modalImage = document.getElementById('show-modal-image');
                const modalLink = document.getElementById('button-modal-click');
                const modalDownload = document.getElementById('button-modal-download');

                if (modalImage) modalImage.src = src;
                if (modalLink) modalLink.href = src;
                if (modalDownload) modalDownload.setAttribute('data-src', src);

                const modal = document.getElementById('modal-image');
                if (modal) {
                    modal.classList.add('show');
                    modal.style.display = 'block';
                }
            });
        });

        // Close modal
        document.querySelectorAll('[data-bs-dismiss="modal"]').forEach(btn => {
            btn.addEventListener('click', () => {
                const modal = document.getElementById('modal-image');
                if (modal) {
                    modal.classList.remove('show');
                    modal.style.display = 'none';
                }
            });
        });
    }
};

// Confetti Animation
const confetti = {
    basicAnimation: () => {
        // Basic confetti implementation
        const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'];
        const confettiCount = 100;

        for (let i = 0; i < confettiCount; i++) {
            const confetti = document.createElement('div');
            confetti.style.position = 'fixed';
            confetti.style.width = '10px';
            confetti.style.height = '10px';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.top = '-10px';
            confetti.style.opacity = Math.random();
            confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
            confetti.style.transition = 'all 3s ease-out';
            confetti.style.pointerEvents = 'none';
            confetti.style.zIndex = '9999';

            document.body.appendChild(confetti);

            setTimeout(() => {
                confetti.style.top = '100%';
                confetti.style.transform = `rotate(${Math.random() * 720}deg)`;
                confetti.style.opacity = '0';
            }, Math.random() * 1000);

            setTimeout(() => confetti.remove(), 3000);
        }
    },

    openAnimation: () => {
        // Additional confetti on open
        setTimeout(() => confetti.basicAnimation(), 2000);
    }
};

// Hot Reload functionality
const hotReload = {
    init: () => {
        // Only enable in development
        if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
            // Try different ports for WebSocket
            const tryWebSocketPorts = [8081, 8082, 8083];
            let ws = null;
            let portIndex = 0;

            const connectWebSocket = () => {
                if (portIndex >= tryWebSocketPorts.length) {
                    console.log('🔌 Hot reload not available');
                    return;
                }

                const port = tryWebSocketPorts[portIndex];
                try {
                    ws = new WebSocket(`ws://localhost:${port}`);

                    ws.onopen = () => {
                        console.log(`🔌 Hot reload connected on port ${port}`);
                    };

                    ws.onmessage = (event) => {
                        const data = JSON.parse(event.data);
                        if (data.type === 'reload') {
                            console.log(`🔄 File changed: ${data.path}`);

                            // Show reload notification
                            hotReload.showNotification();

                            // Reload the page after a short delay
                            setTimeout(() => {
                                window.location.reload();
                            }, 300);
                        }
                    };

                    ws.onclose = () => {
                        console.log(`🔌 Hot reload disconnected from port ${port}`);
                    };

                    ws.onerror = () => {
                        portIndex++;
                        connectWebSocket();
                    };
                } catch (error) {
                    portIndex++;
                    connectWebSocket();
                }
            };

            connectWebSocket();
        }
    },

    showNotification: () => {
        const notification = document.createElement('div');
        notification.id = 'hot-reload-notification';
        notification.innerHTML = `
            <div style="
                position: fixed;
                top: 20px;
                right: 20px;
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                color: white;
                padding: 12px 20px;
                border-radius: 8px;
                font-family: system-ui, -apple-system, sans-serif;
                font-size: 14px;
                box-shadow: 0 4px 15px rgba(0,0,0,0.2);
                z-index: 9999;
                display: flex;
                align-items: center;
                gap: 10px;
                animation: slideInRight 0.3s ease-out;
            ">
                <div style="
                    width: 8px;
                    height: 8px;
                    background: #4ade80;
                    border-radius: 50%;
                    animation: pulse 1s infinite;
                "></div>
                <span>🔄 Reloading...</span>
            </div>
            <style>
                @keyframes slideInRight {
                    from { transform: translateX(100%); opacity: 0; }
                    to { transform: translateX(0); opacity: 1; }
                }
                @keyframes pulse {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0.5; }
                }
            </style>
        `;

        document.body.appendChild(notification);

        // Remove notification after reload
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 2000);
    }
};

// Initialize everything
document.addEventListener('DOMContentLoaded', () => {
    countdownDate();
    showGuestName();
    theme.init();
    audio.init();
    modal.init();
    hotReload.init();

    // Show welcome screen
    const welcomeEl = document.getElementById('welcome');
    if (welcomeEl) {
        welcomeEl.style.opacity = '1';
    }

    // Hide loading screen
    const loadingEl = document.getElementById('loading');
    if (loadingEl) {
        loadingEl.style.opacity = '0';
        setTimeout(() => loadingEl.remove(), 500);
    }

    // Smooth scroll for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// Expose functions globally for onclick handlers
window.undangan = {
    guest: {
        open: welcome.open,
        modal: (img) => {
            const modalImage = document.getElementById('show-modal-image');
            const modalLink = document.getElementById('button-modal-click');
            const modalDownload = document.getElementById('button-modal-download');

            if (modalImage) modalImage.src = img.src;
            if (modalLink) modalLink.href = img.src;
            if (modalDownload) modalDownload.setAttribute('data-src', img.src);

            const modal = document.getElementById('modal-image');
            if (modal) {
                modal.classList.add('show');
                modal.style.display = 'block';
            }
        },
        showStory: (div) => {
            if (navigator.vibrate) {
                navigator.vibrate(500);
            }
            confetti.tapTapAnimation = confetti.tapTapAnimation || confetti.basicAnimation;
            confetti.tapTapAnimation(div, 100);
            div.style.opacity = '0';
            setTimeout(() => div.remove(), 500);
        }
    },
    theme: {
        change: () => {
            const buttonTheme = document.getElementById('button-theme');
            if (buttonTheme) buttonTheme.click();
        }
    }
};