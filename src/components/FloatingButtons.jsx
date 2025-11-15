import React from 'react';

const FloatingButtons = ({ onThemeToggle, onMusicToggle, musicPlaying, theme }) => {
  return (
    <div className="d-flex position-fixed flex-column" style={{ bottom: "10vh", right: "2vh", zIndex: 1030 }}>
      {/* Theme Button */}
      <button
        type="button"
        className="btn bg-light-dark border btn-sm rounded-circle d-none btn-transparent shadow-sm mt-3"
        aria-label="Change theme"
        onClick={onThemeToggle}
      >
        <i className={`fa-solid ${theme === 'light' ? 'fa-moon' : 'fa-sun'}`}></i>
      </button>

      {/* Audio Button */}
      <button
        type="button"
        className="btn bg-light-dark border btn-sm rounded-circle d-none btn-transparent shadow-sm mt-3"
        aria-label="Change audio"
        onClick={onMusicToggle}
      >
        <i className={`fa-solid ${musicPlaying ? 'fa-circle-pause' : 'fa-circle-play'} spin-button`}></i>
      </button>
    </div>
  );
};

export default FloatingButtons;