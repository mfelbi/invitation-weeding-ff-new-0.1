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
    audio: "/assets/music/imagine.mp3",
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