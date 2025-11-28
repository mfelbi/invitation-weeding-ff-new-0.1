import React, { useState, useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Bride from './components/Bride';
import QuranVerse from './components/QuranVerse';
import LoveStory from './components/LoveStory';
import WeddingDate from './components/WeddingDate';
import Gallery from './components/Gallery';
import Wishes from './components/Wishes';
import Footer from './components/Footer';
import Welcome from './components/Welcome';
import Loading from './components/Loading';
import FloatingButtons from './components/FloatingButtons';
import ImageModal from './components/ImageModal';
import WeddingAnimation from './components/WeddingAnimation';

// Wedding Configuration
const weddingData = {
  couple: {
    male: {
      name: "Muhammad Felbi Ramdhani",
      nickname: "Felbi",
      father: "Bapak Muhdi",
      mother: "Ibu Ine Sarita",
      childOrder: "Putra ke-1",
      photo: "/assets/images/cowo1.webp"
    },
    female: {
      name: "Fernandya Bigena Yuko",
      nickname: "Fernandya",
      father: "Bapak Imam Febi Yuko",
      mother: "Ibu Sunarti Woso",
      childOrder: "Putri ke-1",
      photo: "/assets/images/cewe1.webp"
    }
  },
  event: {
    date: "2025-12-06",
    dayName: "Sabtu",
    time: "10:00:00",
    dateTime: "2025-12-06 10:00:00",
    akadTime: "10.00 WIB - Selesai",
    resepsiTime: "13.00 WIB - Selesai",
    location: {
      name: "Masjid Raya Puri Teluk Jambe",
      address: "Sirnabaya, Telukjambe Timur, Karawang, Jawa Barat 41361",
      mapsUrl: "https://maps.google.com/?q=Masjid+Raya+Puri+Teluk+Jambe"
    }
  },
  story: `Sejak duduk di bangku SMP hingga SMA, Felbi dan Fernandya sudah saling mengenal namun tidak ada obrolan yang spesifik, kita hanya berteman di sekolah.
Setelah lulus sekolah dan kuliah, kita kembali dipertemukan dan berkomunikasi melalui Instagram, bertanya kabar sampai akhirnya kita memutuskan untuk bertemu dan menonton film di bioskop.
Komunikasi kita terus berjalan dan juga semakin baik.
Kita sadar bahwa rasa ini tumbuh melampaui persahabatan. Tidak lama kemudian, kedekatan itu berbuah
komitmen: Kami memutuskan untuk bersama dan kini siap melangkah sebagai pasangan seumur hidup, berbagi kebahagiaan dengan
orang-orang tercinta.`,

  // Google Calendar Configuration
  googleCalendar: {
    title: "The Wedding of Felbi and Fernandya",
    details: "Tanpa mengurangi rasa hormat, kami mengundang Anda untuk berkenan menghadiri acara pernikahan kami. Terima kasih atas perhatian dan doa restu Anda, yang menjadi kebahagiaan serta kehormatan besar bagi kami.",
    location: "Sirnabaya, Telukjambe Timur, Karawang, Jawa Barat 41361"
  },

  assets: {
    audio: "/assets/music/You Make Me Smile.mp3",
    mainPhoto: "/assets/images/bg1.webp",
    placeholder: "/assets/images/placeholder.webp",
    video: "/assets/video/265501_tiny.mp4"
  }
};

function App() {
  const [loading, setLoading] = useState(true);
  const [showWelcome, setShowWelcome] = useState(true);
  const [showInvitation, setShowInvitation] = useState(false);
  const [showWeddingAnimation, setShowWeddingAnimation] = useState(false);
  const [animationCompleted, setAnimationCompleted] = useState(false);
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [modalImage, setModalImage] = useState(null);
  const [musicPlaying, setMusicPlaying] = useState(false);
  const [theme, setTheme] = useState('auto');
  const audioRef = useRef(null);

  // Countdown effect
  useEffect(() => {
    const targetDate = new Date(weddingData.event.dateTime).getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance > 0) {
        setCountdown({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Loading simulation
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  // Initialize theme
  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialTheme = theme === 'auto' ? (prefersDark ? 'dark' : 'light') : theme;
    document.body.setAttribute('data-bs-theme', initialTheme);
  }, []);

  // Handle music
  useEffect(() => {
    if (audioRef.current) {
      if (musicPlaying) {
        // Try to play audio (may be blocked by browser autoplay policy)
        audioRef.current.play().catch(err => {
          console.log('Auto-play prevented by browser:', err);
          // Fallback: show user prompt or handle gracefully
          setMusicPlaying(false); // Reset state if play fails
        });
      } else {
        audioRef.current.pause();
      }
    }
  }, [musicPlaying]);

  // Prepare audio for better playback
  useEffect(() => {
    if (audioRef.current) {
      // Preload the audio
      audioRef.current.load();
    }
  }, []);

  const openInvitation = () => {
    setShowWelcome(false);
    // Reset animation state
    setShowWeddingAnimation(false);
    setAnimationCompleted(false);
    setShowInvitation(false);

    // Start wedding animation immediately for better responsiveness
    setTimeout(() => {
      setShowWeddingAnimation(true);
    }, 100);
  };

  const handleAnimationComplete = () => {
    setAnimationCompleted(true);
    // Show the main invitation with romantic entrance
    setTimeout(() => {
      setShowInvitation(true);
      activateWeddingEntrance();

      // Start music automatically when invitation opens
      setTimeout(() => {
        if (audioRef.current) {
          audioRef.current.volume = 0.3;
          audioRef.current.play().then(() => {
            setMusicPlaying(true);
          }).catch(err => {
            console.log('Auto-play failed:', err);
            // User will need to manually click music button
          });
        } else {
          setMusicPlaying(false);
        }
      }, 1000); // Start music after 1 second for dramatic effect

      // Reset animation state after completion
      setTimeout(() => {
        setShowWeddingAnimation(false);
      }, 2000);
    }, 300);
  };

  const activateWeddingEntrance = () => {
    // Add entrance animations to main elements
    setTimeout(() => {
      const elements = document.querySelectorAll('.wedding-entrance');
      elements.forEach((el, index) => {
        setTimeout(() => {
          el.classList.add('active');
        }, index * 200);
      });
    }, 200);

    // Initialize audio playback on first user interaction
    const initAudio = () => {
      if (audioRef.current && !audioRef.current.played) {
        // Create a user interaction to enable audio
        audioRef.current.volume = 0.3;
        audioRef.current.played = true;

        // Play a short silent sound to "warm up" the audio context
        audioRef.current.play().then(() => {
          audioRef.current.pause();
        }).catch(() => {
          // Ignore errors, just trying to initialize audio context
        });
      }
    };

    // Initialize audio on any user interaction
    document.addEventListener('click', initAudio, { once: true });
    document.addEventListener('touchstart', initAudio, { once: true });
    document.addEventListener('keydown', initAudio, { once: true });
  };

  const openModal = (imageSrc) => {
    setModalImage(imageSrc);
  };

  const closeModal = () => {
    setModalImage(null);
  };

  const toggleTheme = () => {
    const newTheme = theme === 'auto' ? 'light' : theme === 'light' ? 'dark' : 'auto';
    setTheme(newTheme);

    if (newTheme === 'auto') {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      document.body.setAttribute('data-bs-theme', prefersDark ? 'dark' : 'light');
    } else {
      document.body.setAttribute('data-bs-theme', newTheme);
    }
  };

  const toggleMusic = () => {
    const newMusicState = !musicPlaying;

    if (audioRef.current) {
      if (newMusicState) {
        audioRef.current.volume = 0.3;
        audioRef.current.play().catch(err => {
          console.log('Music play failed:', err);
          setMusicPlaying(false); // Reset state if play fails
        });
        setMusicPlaying(true); // Set state optimistically
      } else {
        audioRef.current.pause();
        setMusicPlaying(false);
      }
    } else {
      setMusicPlaying(newMusicState);
    }
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div className={`App ${theme}`}>
      {showWelcome && !showInvitation && (
        <Welcome
          data={weddingData}
          onOpen={openInvitation}
        />
      )}

      {showInvitation && (
        <>
          <div className="row m-0 p-0 opacity-0" id="root">
            {/* Desktop mode */}
            <div className="sticky-top vh-100 d-none d-sm-block col-sm-5 col-md-6 col-lg-7 col-xl-8 col-xxl-9 overflow-y-hidden m-0 p-0 wedding-entrance wedding-entrance-delay-1">
              <div className="position-relative bg-white-black d-flex justify-content-center align-items-center vh-100">
                <div className="d-flex position-absolute w-100 h-100">
                  <div className="position-relative overflow-hidden vw-100">
                    <div className="position-absolute h-100 w-100" style={{ opacity: 0.3 }}>
                      <img src={weddingData.assets.placeholder} alt="bg" className="w-100 h-100 object-fit-cover" />
                    </div>
                  </div>
                </div>
                <div className="text-center p-4 bg-overlay-auto rounded-5 position-relative z-10 wedding-bounce">
                  <h2 className="font-esthetic mb-4" style={{ fontSize: "2rem" }}>Felbi & Fernandya</h2>
                  <p className="m-0" style={{ fontSize: "1rem" }}>Sabtu, 6 Desember 2025</p>
                </div>
              </div>
            </div>

            {/* Smartphone mode */}
            <div className="col-sm-7 col-md-6 col-lg-5 col-xl-4 col-xxl-3 m-0 p-0">
              {/* Main Content */}
              <main data-bs-spy="scroll" data-bs-target="#navbar-menu" data-bs-root-margin="25% 0% 0% 0%" data-bs-smooth-scroll="true" tabIndex="0">
                <Home data={weddingData} openModal={openModal} />
                <Bride data={weddingData} openModal={openModal} />
                <QuranVerse />
                <LoveStory data={weddingData} />
                <WeddingDate
                  data={weddingData}
                  countdown={countdown}
                />
                <Gallery data={weddingData} openModal={openModal} />
                <Wishes />
                <Footer data={weddingData} />
                <Navbar />
              </main>
            </div>
          </div>

          {/* Hidden Audio Element */}
          <audio
            ref={audioRef}
            src={weddingData.assets.audio}
            loop
            preload="auto"
            playsInline
            muted={false}
            crossOrigin="anonymous"
          />

          <FloatingButtons
            onThemeToggle={toggleTheme}
            onMusicToggle={toggleMusic}
            musicPlaying={musicPlaying}
            theme={theme}
          />
        </>
      )}

      {/* Wedding Animation */}
      <WeddingAnimation
        isActive={showWeddingAnimation}
        onAnimationComplete={handleAnimationComplete}
      />

      <ImageModal
        image={modalImage}
        onClose={closeModal}
      />
    </div>
  );
}

export default App;