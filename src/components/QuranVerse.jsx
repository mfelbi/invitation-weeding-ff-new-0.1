import React from 'react';

const QuranVerse = () => {
  return (
    <section className="bg-light-dark pt-2 pb-4">
      <div className="container text-center">
        <h2 className="font-esthetic pt-2 pb-1 m-0" style={{ fontSize: "2rem" }}>Allah Subhanahu Wa Ta'ala berfirman</h2>

        <div className="bg-theme-auto mt-4 p-3 shadow rounded-4" data-aos="fade-down" data-aos-duration="2000">
          <p className="p-1 mb-2" style={{ fontSize: "0.95rem" }}>Dan segala sesuatu Kami ciptakan berpasang-pasangan agar kamu mengingat (kebesaran Allah).</p>
          <p className="m-0 p-0 text-theme-auto" style={{ fontSize: "0.95rem" }}>QS. Adh-Dhariyat: 49</p>
        </div>

        <div className="bg-theme-auto mt-4 p-3 shadow rounded-4" data-aos="fade-down" data-aos-duration="2000">
          <p className="p-1 mb-2" style={{ fontSize: "0.95rem" }}>dan sesungguhnya Dialah yang menciptakan pasangan laki-laki dan perempuan,</p>
          <p className="m-0 p-0 text-theme-auto" style={{ fontSize: "0.95rem" }}>QS. An-Najm: 45</p>
        </div>
      </div>
    </section>
  );
};

export default QuranVerse;