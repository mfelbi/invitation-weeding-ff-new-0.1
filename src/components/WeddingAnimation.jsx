import React, { useEffect } from 'react';

const WeddingAnimation = ({ isActive, onAnimationComplete }) => {
  useEffect(() => {
    if (!isActive) return;

    // Clear any existing animations first
    const clearExistingAnimations = () => {
      const existingCurtains = document.querySelectorAll('.wedding-curtain');
      const existingHearts = document.querySelectorAll('.floating-heart');
      const existingPetals = document.querySelectorAll('.falling-petal');
      const existingSparkles = document.querySelectorAll('.sparkle');

      [...existingCurtains, ...existingHearts, ...existingPetals, ...existingSparkles].forEach(el => el.remove());
    };

    clearExistingAnimations();

    // Create wedding curtain effect that opens from center
    const createCurtainEffect = () => {
      // Create overlay first with lower opacity
      const overlay = document.createElement('div');
      overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(45deg, rgba(255, 105, 180, 0.6), rgba(255, 20, 147, 0.6));
        z-index: 10000;
        transition: opacity 0.2s ease;
      `;
      document.body.appendChild(overlay);

      // Start curtain opening almost immediately
      setTimeout(() => {
        overlay.style.opacity = '0';

        // Remove overlay after transition
        setTimeout(() => {
          overlay.remove();
          onAnimationComplete();
        }, 200);
      }, 100); // Very short delay - just 100ms
    };

    // Create floating hearts (shorter duration, fewer elements)
    const createFloatingHearts = () => {
      const heartSymbols = ['❤️', '💕', '💖'];

      for (let i = 0; i < 3; i++) { // Reduced from 5 to 3
        setTimeout(() => {
          const heart = document.createElement('div');
          heart.className = 'floating-heart';
          heart.innerHTML = heartSymbols[Math.floor(Math.random() * heartSymbols.length)];
          heart.style.left = Math.random() * 100 + '%';
          heart.style.animationDelay = Math.random() * 0.5 + 's'; // Reduced delay
          heart.style.fontSize = (Math.random() * 5 + 12) + 'px'; // Smaller size
          heart.style.zIndex = '9998';

          document.body.appendChild(heart);

          setTimeout(() => heart.remove(), 2000); // Reduced from 4000 to 2000
        }, i * 100); // Reduced interval
      }
    };

    // Create sparkles (quick and fewer)
    const createSparkles = () => {
      for (let i = 0; i < 5; i++) { // Reduced from 8 to 5
        setTimeout(() => {
          const sparkle = document.createElement('div');
          sparkle.className = 'sparkle';
          sparkle.innerHTML = '✨';
          sparkle.style.left = Math.random() * 100 + '%';
          sparkle.style.top = Math.random() * 100 + '%';
          sparkle.style.animationDelay = Math.random() * 0.2 + 's'; // Reduced delay
          sparkle.style.zIndex = '9997';

          document.body.appendChild(sparkle);

          setTimeout(() => sparkle.remove(), 500); // Reduced from 1000 to 500
        }, i * 30); // Reduced interval
      }
    };

    // Start animations in sequence
    createCurtainEffect();

    // Start decorative elements almost immediately with curtain
    setTimeout(() => {
      createFloatingHearts();
      createSparkles();
    }, 100); // Reduced from 400 to 100

  }, [isActive, onAnimationComplete]);

  return null;
};

export default WeddingAnimation;