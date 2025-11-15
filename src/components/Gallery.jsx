import React, { useState } from 'react';

const Gallery = ({ data, openModal }) => {
  const [activeIndex1, setActiveIndex1] = useState(0);
  const [activeIndex2, setActiveIndex2] = useState(0);

  // Placeholder images for gallery
  const galleryImages1 = [
    "https://picsum.photos/1280/720?random=1",
    "https://picsum.photos/1280/720?random=2",
    "https://picsum.photos/1280/720?random=3"
  ];

  const galleryImages2 = [
    "https://picsum.photos/1280/720?random=4",
    "https://picsum.photos/1280/720?random=5",
    "https://picsum.photos/1280/720?random=6"
  ];

  const handlePrev = (carouselNumber) => {
    if (carouselNumber === 1) {
      setActiveIndex1((prev) => (prev === 0 ? galleryImages1.length - 1 : prev - 1));
    } else {
      setActiveIndex2((prev) => (prev === 0 ? galleryImages2.length - 1 : prev - 1));
    }
  };

  const handleNext = (carouselNumber) => {
    if (carouselNumber === 1) {
      setActiveIndex1((prev) => (prev === galleryImages1.length - 1 ? 0 : prev + 1));
    } else {
      setActiveIndex2((prev) => (prev === galleryImages2.length - 1 ? 0 : prev + 1));
    }
  };

  return (
    <>
      <section className="bg-white-black pb-5 pt-3" id="gallery">
        <div className="container">
          <div className="border rounded-5 shadow p-3">
            <h2 className="font-esthetic text-center py-2 m-0" style={{ fontSize: "2.25rem" }}>Galeri</h2>

            {/* Carousel 1 */}
            <div className="position-relative mt-4" data-aos="fade-up" data-aos-duration="1500">
              <div className="overflow-hidden rounded-4">
                <div className="position-relative">
                  <img
                    src={galleryImages1[activeIndex1]}
                    alt={`Gallery image ${activeIndex1 + 1}`}
                    className="d-block img-fluid cursor-pointer w-100"
                    onClick={() => openModal(galleryImages1[activeIndex1])}
                    style={{ height: "400px", objectFit: "cover" }}
                  />
                </div>
              </div>

              {/* Indicators */}
              <div className="d-flex justify-content-center mt-3">
                {galleryImages1.map((_, index) => (
                  <button
                    key={index}
                    className={`btn btn-sm mx-1 rounded-circle ${activeIndex1 === index ? 'btn-primary' : 'btn-secondary'}`}
                    style={{ width: "10px", height: "10px" }}
                    onClick={() => setActiveIndex1(index)}
                  />
                ))}
              </div>

              {/* Controls */}
              <button
                className="btn btn-outline-light position-absolute top-50 start-0 translate-middle-y ms-3"
                onClick={() => handlePrev(1)}
                style={{ zIndex: 10 }}
              >
                <i className="fa-solid fa-chevron-left"></i>
              </button>
              <button
                className="btn btn-outline-light position-absolute top-50 end-0 translate-middle-y me-3"
                onClick={() => handleNext(1)}
                style={{ zIndex: 10 }}
              >
                <i className="fa-solid fa-chevron-right"></i>
              </button>
            </div>

            {/* Carousel 2 */}
            <div className="position-relative mt-4" data-aos="fade-up" data-aos-duration="1500">
              <div className="overflow-hidden rounded-4">
                <div className="position-relative">
                  <img
                    src={galleryImages2[activeIndex2]}
                    alt={`Gallery image ${activeIndex2 + 4}`}
                    className="d-block img-fluid cursor-pointer w-100"
                    onClick={() => openModal(galleryImages2[activeIndex2])}
                    style={{ height: "400px", objectFit: "cover" }}
                  />
                </div>
              </div>

              {/* Indicators */}
              <div className="d-flex justify-content-center mt-3">
                {galleryImages2.map((_, index) => (
                  <button
                    key={index}
                    className={`btn btn-sm mx-1 rounded-circle ${activeIndex2 === index ? 'btn-primary' : 'btn-secondary'}`}
                    style={{ width: "10px", height: "10px" }}
                    onClick={() => setActiveIndex2(index)}
                  />
                ))}
              </div>

              {/* Controls */}
              <button
                className="btn btn-outline-light position-absolute top-50 start-0 translate-middle-y ms-3"
                onClick={() => handlePrev(2)}
                style={{ zIndex: 10 }}
              >
                <i className="fa-solid fa-chevron-left"></i>
              </button>
              <button
                className="btn btn-outline-light position-absolute top-50 end-0 translate-middle-y me-3"
                onClick={() => handleNext(2)}
                style={{ zIndex: 10 }}
              >
                <i className="fa-solid fa-chevron-right"></i>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Wave Separator */}
      <div className="svg-wrapper">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="color-theme-svg no-gap-bottom">
          <path fill="currentColor" fillOpacity="1" d="M0,96L30,106.7C60,117,120,139,180,154.7C240,171,300,181,360,186.7C420,192,480,192,540,181.3C600,171,660,149,720,154.7C780,160,840,192,900,208C960,224,1020,224,1080,208C1140,192,1200,160,1260,138.7C1320,117,1380,107,1410,101.3L1440,96L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"></path>
        </svg>
      </div>
    </>
  );
};

export default Gallery;