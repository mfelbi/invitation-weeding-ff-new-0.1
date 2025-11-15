import React from 'react';

const Footer = ({ data }) => {
  return (
    <section className="bg-white-black py-2 no-gap-bottom">
      <div className="container text-center">
        <p className="pb-2 pt-4" style={{ fontSize: "0.95rem" }}>
          Terima kasih atas perhatian dan doa restu Anda, yang menjadi kebahagiaan serta kehormatan besar bagi kami.
        </p>

        <h2 className="font-esthetic" style={{ fontSize: "2rem" }}>Wassalamualaikum Warahmatullahi Wabarakatuh</h2>
        <h2 className="font-arabic pt-4" style={{ fontSize: "2rem" }}>اَلْحَمْدُ لِلّٰهِ رَبِّ الْعٰلَمِيْنَۙ</h2>

        <hr className="my-3" />

        <div className="row align-items-center justify-content-between flex-column pb-3">
          <div className="col-auto">
            <small>Build with<i className="fa-solid fa-heart mx-1"></i>FF</small>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;