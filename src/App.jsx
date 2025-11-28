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
Komunikasi kita terus berjalan dan juga semakin baik. Kita sadar bahwa rasa ini tumbuh melampaui persahabatan. Tidak lama kemudian, kedekatan itu berbuah komitmen: Kami memutuskan untuk bersama dan kini siap Melangkah sebagai pasangan seumur hidup, berbagi kebahagiaan dengan orang-orang tercinta.`,

  // Google Calendar Configuration
  googleCalendar: {
    title: "The Wedding of Felbi and Fernandya",
    details: "Tanpa mengurangi rasa hormat, kami mengundang Anda untuk berkenan hadir dalam acara pernikahan kami. Terima kasih atas perhatian dan doa restu Anda, yang menjadi kebahagiaan serta kehormatan besar bagi kami.",
    location: "Sirnabaya, Telukjambe Timur, Karawang, Jawa Barat 41361"
  },

  assets: {
    audio: "/assets/music/You Make Me Smile.mp3",
    mainPhoto: "/assets/images/bg1.webp",
    placeholder: "/assets/images/placeholder.webp",
    video: "/assets/video/265501_tiny.mp4"
  }
};

import React, { useState, useRef, useEffect } from 'react';

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

  useEffect(() => {
    // Countdown logic
    const calculateCountdown = () => {
      const now = new Date().getTime();
      const eventTime = new Date(weddingData.event.dateTime).getTime();
      const difference = eventTime - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setCountdown({ days, hours, minutes, seconds });
      }
    };

    const interval = setInterval(calculateCountdown, 1000);
    calculateCountdown();

    // Simulate loading
    setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const handleOpenInvitation = () => {
    setShowWelcome(false);
    setShowInvitation(true);
    setTimeout(() => {
      setShowWeddingAnimation(true);
    }, 500);
  };

  const toggleMusic = () => {
    if (audioRef.current) {
      if (musicPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setMusicPlaying(!musicPlaying);
    }
  };

  if (loading) {
    return (
      <div className="loading-screen">
        <div className="loading-content">
          <h1>The Wedding</h1>
          <p>Felbi & Fernandya</p>
        </div>
      </div>
    );
  }

  return (
    <div className="app">
      <audio ref={audioRef} src={weddingData.assets.audio} loop />

      {showWelcome && (
        <div className="welcome-screen">
          <div className="welcome-content">
            <h1>The Wedding</h1>
            <p>Felbi & Fernandya</p>
            <p>{weddingData.event.dayName}, {weddingData.event.date}</p>
            <button onClick={handleOpenInvitation}>
              Buka Undangan
            </button>
          </div>
        </div>
      )}

      {showInvitation && (
        <div className="invitation-content">
          {/* Add your invitation components here */}
          <h1>Selamat Datang</h1>
          <p>Di Pernikahan Kami</p>
        </div>
      )}
    </div>
  );
}

export default App;