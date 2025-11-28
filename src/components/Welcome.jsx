import React from 'react';

const Welcome = ({ data, onOpen }) => {
  return (
    <div className="loading-page bg-white-black" style={{ opacity: 1 }}>
      <div className="d-flex justify-content-center align-items-center vh-100 overflow-y-auto">
        <div className="d-flex flex-column text-center">
          <div style={{ opacity: 0, animation: 'fadeIn 1s ease-out forwards' }}>
            <h2 className="font-esthetic mb-4" style={{ fontSize: "2.25rem" }}>
              <i className="fa-solid fa-heart text-danger mx-1"></i>
              The Wedding Of
              <i className="fa-solid fa-heart text-danger mx-1"></i>
            </h2>
          </div>

          <div style={{ opacity: 0, animation: 'fadeIn 1s ease-out 0.3s forwards' }}>
            <img
              src={data.assets.mainPhoto}
              alt="background"
              className="img-center-crop rounded-circle border border-3 border-light shadow mb-4 mx-auto"
              style={{ width: "200px", height: "200px", objectFit: "cover" }}
            />
          </div>

          <div style={{ opacity: 0, animation: 'fadeIn 1s ease-out 0.6s forwards' }}>
            <h2 className="font-esthetic mb-4" style={{ fontSize: "2.25rem" }}>
              <i className="fa-solid fa-heart text-danger mx-1"></i>
              Felbi & Fernandya
              <i className="fa-solid fa-heart text-danger mx-1"></i>
            </h2>
          </div>

          <div style={{ opacity: 0, animation: 'fadeIn 1s ease-out 0.9s forwards' }}>
            <div className="mb-4">
              <p className="mb-1" style={{ fontSize: "1.2rem" }}>
                <i className="fa-solid fa-users me-2"></i>
                Kepada Yth Bapak/Ibu/Saudara/i
              </p>
              <p className="m-0" style={{ fontSize: "1rem", fontStyle: "italic" }}>
                <i className="fa-solid fa-envelope me-2"></i>
                Tanpa mengurangi rasa hormat, kami mengundang Anda untuk berkenan hadir dalam acara pernikahan kami.
              </p>
            </div>
          </div>

          <div style={{ opacity: 0, animation: 'fadeIn 1s ease-out 1.2s forwards' }}>
            <button
              type="button"
              className="btn btn-light shadow rounded-4 mt-3 mx-auto px-4 py-2"
              onClick={onOpen}
              style={{
                background: "linear-gradient(45deg, #ff69b4, #ff1493)",
                border: "none",
                color: "white",
                fontWeight: "bold",
                transition: 'transform 0.3s ease'
              }}
              onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
              onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
            >
              <i className="fa-solid fa-envelope-open me-2"></i>
              Open Invitation
              <i className="fa-solid fa-heart ms-2"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;