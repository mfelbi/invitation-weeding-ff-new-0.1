import React, { useState } from 'react';

const LoveStory = ({ data }) => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <section className="bg-light-dark pt-2 pb-4">
      <div className="container">
        <div className="bg-theme-auto rounded-5 shadow p-3">
          <h2 className="font-esthetic text-center py-2 mb-2" style={{ fontSize: "2.125rem" }}>Kisah Cinta</h2>

          <div className="position-relative rounded-4 mb-1 pb-0">
            {!showVideo ? (
              <>
                <div className="position-relative">
                  <img
                    src={data.assets.placeholder}
                    alt="story preview"
                    className="w-100 rounded-4 shadow-sm m-0 p-0"
                    style={{ height: "300px", objectFit: "cover" }}
                  />
                  <div className="position-absolute d-flex justify-content-center align-items-center top-50 start-50 translate-middle w-100 h-100 bg-overlay-auto rounded-4">
                    <button
                      className="btn btn-outline-auto btn-sm rounded-4 shadow-sm"
                      onClick={() => setShowVideo(true)}
                    >
                      <i className="fa-solid fa-heart fa-bounce me-2"></i>Lihat Story
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <video
                src={data.assets.video}
                controls
                className="w-100 rounded-4 shadow-sm m-0 p-0"
                style={{ maxHeight: "300px" }}
              />
            )}
          </div>

          <div className="position-relative">
            <div className="overflow-y-scroll overflow-x-hidden p-2 with-scrollbar" style={{ height: "15rem" }}>
              <div className="row">
                <div className="col-auto position-relative">
                  <p className="position-relative d-flex justify-content-center align-items-center bg-theme-auto border border-secondary border-2 opacity-100 rounded-circle m-0 p-0 z-1" style={{ width: "2rem", height: "2rem" }}></p>
                  <hr className="position-absolute top-0 start-50 translate-middle-x border border-secondary h-100 z-0 opacity-100 m-0 rounded-4 shadow-none" />
                </div>
                <div className="col mt-1 mb-3 ps-0">
                  <p className="fw-bold mb-2">Love Story</p>
                  <p className="small mb-0 story-content">
                    {data.story}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoveStory;