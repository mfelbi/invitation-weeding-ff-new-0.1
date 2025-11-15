import React from 'react';

const WeddingDate = ({ data, countdown }) => {
  const mapsEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.460709298039!2d107.30444309999997!3d-6.334314299999991!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69763a90bca871%3A0xc922ad78439a482b!2sMasjid%20Raya%20Puri%20Teluk%20Jambe!5e0!3m2!1sid!2sid!4v1759216753290!5m2!1sid!2sid";

  return (
    <>
      <section className="bg-white-black pb-2" id="wedding-date">
        <div className="container text-center">
          <h2 className="font-esthetic py-4 m-0" style={{ fontSize: "2.25rem" }}>Moment Bahagia</h2>

          <div className="border rounded-pill shadow py-2 px-4 mt-2 mb-4">
            <div className="row justify-content-center">
              <div className="col-3 p-1">
                <p className="d-inline m-0 p-0" style={{ fontSize: "1.25rem" }}>{countdown.days}</p>
                <small className="ms-1 me-0 my-0 p-0 d-inline">Hari</small>
              </div>
              <div className="col-3 p-1">
                <p className="d-inline m-0 p-0" style={{ fontSize: "1.25rem" }}>{countdown.hours}</p>
                <small className="ms-1 me-0 my-0 p-0 d-inline">Jam</small>
              </div>
              <div className="col-3 p-1">
                <p className="d-inline m-0 p-0" style={{ fontSize: "1.25rem" }}>{countdown.minutes}</p>
                <small className="ms-1 me-0 my-0 p-0 d-inline">Menit</small>
              </div>
              <div className="col-3 p-1">
                <p className="d-inline m-0 p-0" style={{ fontSize: "1.25rem" }}>{countdown.seconds}</p>
                <small className="ms-1 me-0 my-0 p-0 d-inline">Detik</small>
              </div>
            </div>
          </div>

          <p className="py-2 m-0" style={{ fontSize: "0.95rem" }}>
            Dengan memohon rahmat dan ridho Allah Subhanahu Wa Ta'ala, insyaAllah kami akan menyelenggarakan acara:
          </p>

          {/* Love animation */}
          <div className="position-relative">
            <div className="position-absolute" style={{ top: "0%", right: "5%" }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="opacity-50 animate-love" viewBox="0 0 16 16">
                <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
              </svg>
            </div>
          </div>

          <div className="overflow-x-hidden">
            <div className="py-2" data-aos="fade-right" data-aos-duration="1500">
              <h2 className="font-esthetic m-0 py-2" style={{ fontSize: "2rem" }}>Akad</h2>
              <p style={{ fontSize: "0.95rem" }}>{data.event.akadTime}</p>
            </div>

            <div className="py-2" data-aos="fade-left" data-aos-duration="1500">
              <h2 className="font-esthetic m-0 py-2" style={{ fontSize: "2rem" }}>Resepsi</h2>
              <p style={{ fontSize: "0.95rem" }}>{data.event.resepsiTime}</p>
            </div>
          </div>

          {/* Tombol Maps */}
          <button
            type="button"
            className="btn btn-outline-auto btn-sm rounded-pill shadow mb-2 px-3"
            data-bs-toggle="modal"
            data-bs-target="#mapsModal"
          >
            <i className="fa-solid fa-map-location-dot me-2"></i>Lihat Google Maps
          </button>

          {/* Modal Maps */}
          <div className="modal fade" id="mapsModal" tabIndex="-1" aria-hidden="true">
            <div className="modal-dialog modal-lg modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Lokasi Google Maps</h5>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body p-0">
                  <iframe
                    src={mapsEmbedUrl}
                    width="100%"
                    height="450"
                    style={{ border: "0" }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Wedding Location Map"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WeddingDate;