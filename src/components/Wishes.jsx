import React from 'react';

const Wishes = () => {
  return (
    <>
      <section className="bg-light-dark my-0 pb-0 pt-3" id="wishes">
        <div className="container">
          <div className="border rounded-5 shadow p-3 mb-2">
            <h2 className="font-esthetic text-center mt-2 mb-4" style={{ fontSize: "2.25rem" }}>Ucapan & Doa</h2>

            <div className="text-center py-5">
              <i className="fa-solid fa-heart fa-3x text-danger mb-3"></i>
              <h4>Terima Kasih</h4>
              <p className="text-muted">Atas perhatian dan doa restu Anda, yang menjadi kebahagiaan serta kehormatan besar bagi kami.</p>
              <p className="small text-muted">Silakan hubungi kami langsung untuk memberikan ucapan dan konfirmasi kehadiran.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Wave Separator */}
      <div className="svg-wrapper">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="color-theme-svg no-gap-bottom">
          <path fill="currentColor" fillOpacity="1" d="M0,224L34.3,234.7C68.6,245,137,267,206,266.7C274.3,267,343,245,411,234.7C480,224,549,224,617,213.3C685.7,203,754,181,823,197.3C891.4,213,960,267,1029,266.7C1097.1,267,1166,213,1234,192C1302.9,171,1371,181,1406,186.7L1440,192L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path>
        </svg>
      </div>
    </>
  );
};

export default Wishes;