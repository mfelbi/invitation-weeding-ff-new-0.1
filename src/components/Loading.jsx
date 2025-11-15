import React from 'react';

const Loading = () => {
  return (
    <div className="loading-page bg-white-black" style={{ opacity: 1 }}>
      <div className="d-flex justify-content-center align-items-center vh-100 overflow-y-auto">
        <div className="d-flex flex-column width-loading text-center">
          <div className="progress" role="progressbar" style={{ height: "0.5rem" }} aria-label="progress bar">
            <div className="progress-bar" style={{ width: "100%" }}></div>
          </div>
          <small className="d-none mt-1 text-theme-auto" style={{ fontSize: "0.8rem" }}>Loading invitation...</small>
        </div>
      </div>
    </div>
  );
};

export default Loading;