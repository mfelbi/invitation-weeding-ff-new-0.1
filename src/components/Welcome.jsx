import React from 'react';

const Welcome = ({ data, onOpen }) => {
  return (
    <div className="loading-page bg-white-black" style={{ opacity: 1 }}>
      <div className="d-flex justify-content-center align-items-center vh-100 overflow-y-auto">
        <div className="d-flex flex-column text-center">
          <h2 className="font-esthetic mb-4" style={{ fontSize: "2.25rem" }}>The Wedding Of</h2>

          <img
            src={data.assets.mainPhoto}
            alt="background"
            className="img-center-crop rounded-circle border border-3 border-light shadow mb-4 mx-auto"
            style={{ width: "200px", height: "200px", objectFit: "cover" }}
          />

          <h2 className="font-esthetic mb-4" style={{ fontSize: "2.25rem" }}>Felbi & Fernandya</h2>
          <div className="mb-4">
            <p className="mb-1" style={{ fontSize: "1.2rem" }}>Kepada Yth Bapak/Ibu/Saudara/i</p>
            <p className="m-0" style={{ fontSize: "1rem", fontStyle: "italic" }}>Tanpa mengurangi rasa hormat, kami mengundang Anda untuk berkenan hadir dalam acara pernikahan kami.</p>
          </div>

          <button
            type="button"
            className="btn btn-light shadow rounded-4 mt-3 mx-auto px-4 py-2"
            onClick={onOpen}
          >
            <i className="fa-solid fa-envelope-open fa-bounce me-2"></i>Open Invitation
          </button>
        </div>
      </div>
    </div>
  );
};

export default Welcome;