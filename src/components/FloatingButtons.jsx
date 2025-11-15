import React, { useEffect } from 'react';

const FloatingButtons = ({ onThemeToggle, onMusicToggle, musicPlaying, theme }) => {
  useEffect(() => {
    // Show floating buttons when invitation is open
    const buttons = document.querySelectorAll('.floating-button');
    buttons.forEach(button => {
      button.classList.remove('d-none');
    });
  }, []);

  const getThemeIcon = () => {
    if (theme === 'auto') return 'fa-circle-half-stroke';
    return theme === 'light' ? 'fa-moon' : 'fa-sun';
  };

  return (
    <div className="d-flex position-fixed flex-column" style={{ bottom: "10vh", right: "2vh", zIndex: 1030 }}>
      {/* Theme Button */}
      <button
        type="button"
        className="btn btn-outline-light bg-light-dark border btn-sm rounded-circle floating-button shadow-sm mb-2"
        aria-label="Change theme"
        onClick={onThemeToggle}
        style={{ display: 'block' }}
      >
        <i className={`fa-solid ${getThemeIcon()}`}></i>
      </button>

      {/* Audio Button */}
      <button
        type="button"
        className="btn btn-outline-light bg-light-dark border btn-sm rounded-circle floating-button shadow-sm"
        aria-label="Change audio"
        onClick={onMusicToggle}
        style={{ display: 'block' }}
      >
        <i className={`fa-solid ${musicPlaying ? 'fa-circle-pause' : 'fa-circle-play'}`}></i>
      </button>
    </div>
  );
};

export default FloatingButtons;