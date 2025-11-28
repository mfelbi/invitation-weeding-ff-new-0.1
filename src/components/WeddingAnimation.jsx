import React, { useEffect } from 'react';

const WeddingAnimation = ({ isActive, onAnimationComplete }) => {
  useEffect(() => {
    if (!isActive) return;

    // Simple fade transition overlay
    const createSimpleTransition = () => {
      // Create a simple overlay
      const overlay = document.createElement('div');
      overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(135deg, rgba(255, 105, 180, 0.4), rgba(255, 20, 147, 0.4));
        z-index: 9999;
        opacity: 1;
        transition: opacity 0.8s ease-out;
        pointer-events: none;
      `;
      document.body.appendChild(overlay);

      // Simple fade out
      setTimeout(() => {
        overlay.style.opacity = '0';

        // Remove and complete after fade
        setTimeout(() => {
          overlay.remove();
          onAnimationComplete();
        }, 800);
      }, 200);
    };

    // Start simple transition immediately
    createSimpleTransition();

  }, [isActive, onAnimationComplete]);

  return null;
};

export default WeddingAnimation;