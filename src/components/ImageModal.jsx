import React from 'react';

const ImageModal = ({ image, onClose }) => {
  if (!image) return null;

  return (
    <div
      className="modal fade show d-block"
      tabIndex="-1"
      style={{ backgroundColor: 'rgba(0,0,0,0.8)' }}
      onClick={onClose}
    >
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content bg-transparent border-0">
          <div className="modal-body p-0">
            <div className="d-flex position-absolute top-0 end-0">
              <a
                className="btn d-flex justify-content-center align-items-center bg-overlay-auto p-2 m-1 rounded-circle border shadow-sm z-1"
                role="button"
                href={image}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
              >
                <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </a>
              <button
                className="btn d-flex justify-content-center align-items-center bg-overlay-auto p-2 m-1 rounded-circle border shadow-sm z-1"
                onClick={(e) => {
                  e.stopPropagation();
                  const link = document.createElement('a');
                  link.href = image;
                  link.download = 'wedding-image.jpg';
                  link.click();
                }}
              >
                <i className="fa-solid fa-download"></i>
              </button>
              <button
                className="btn d-flex justify-content-center align-items-center bg-overlay-auto p-2 m-1 rounded-circle border shadow-sm z-1"
                onClick={onClose}
              >
                <i className="fa-solid fa-circle-xmark"></i>
              </button>
            </div>

            <img
              src={image}
              className="img-fluid w-100 rounded-4 cursor-pointer"
              alt="Wedding photo"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageModal;