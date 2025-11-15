import React from 'react';

const Welcome = ({ data, onOpen }) => {
  return (
    <div className="loading-page bg-white-black" style={{ opacity: 1 }}>
      <div className="d-flex justify-content-center align-items-center vh-100 overflow-y-auto">
        <div className="d-flex flex-column text-center">
          <div className="fade-in">
            <h2 className="font-esthetic mb-4" style={{ fontSize: "2.25rem" }}>
              <i className="fa-solid fa-heart text-danger mx-1 heartbeat"></i>
              The Wedding Of
              <i className="fa-solid fa-heart text-danger mx-1 heartbeat"></i>
            </h2>
          </div>

          <div className="slide-in-up">
            <img
              src={data.assets.mainPhoto}
              alt="background"
              className="img-center-crop rounded-circle border border-3 border-light shadow mb-4 mx-auto love-pulse"
              style={{ width: "200px", height: "200px", objectFit: "cover" }}
            />
          </div>

          <div className="slide-in-up" style={{ animationDelay: "0.3s" }}>
            <h2 className="font-esthetic mb-4 wedding-bounce" style={{ fontSize: "2.25rem" }}>
              <i className="fa-solid fa-heart text-danger mx-1"></i>
              Felbi & Fernandya
              <i className="fa-solid fa-heart text-danger mx-1"></i>
            </h2>
          </div>

          <div className="slide-in-up" style={{ animationDelay: "0.6s" }}>
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

          <div className="slide-in-up" style={{ animationDelay: "0.9s" }}>
            <button
              type="button"
              className="btn btn-light shadow rounded-4 mt-3 mx-auto px-4 py-2 wedding-bounce"
              onClick={onOpen}
              style={{
                background: "linear-gradient(45deg, #ff69b4, #ff1493)",
                border: "none",
                color: "white",
                fontWeight: "bold"
              }}
            >
              <i className="fa-solid fa-envelope-open fa-bounce me-2"></i>
              Open Invitation
              <i className="fa-solid fa-heart fa-pulse ms-2"></i>
            </button>
          </div>

          {/* Floating decorative elements */}
          <div className="position-absolute top-10 start-10 text-danger" style={{ fontSize: "30px", animation: "floatingHeart 8s infinite", animationDelay: "0s" }}>
            💖
          </div>
          <div className="position-absolute top-20 end-10 text-pink" style={{ fontSize: "25px", animation: "floatingHeart 8s infinite", animationDelay: "2s" }}>
            💕
          </div>
          <div className="position-absolute bottom-20 start-20 text-danger" style={{ fontSize: "28px", animation: "floatingHeart 8s infinite", animationDelay: "4s" }}>
            💗
          </div>
          <div className="position-absolute bottom-10 end-20 text-pink" style={{ fontSize: "32px", animation: "floatingHeart 8s infinite", animationDelay: "6s" }}>
            💝
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;