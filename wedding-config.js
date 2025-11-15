// Wedding Configuration
const weddingData = {
    couple: {
        male: {
            name: "Muhammad Felbi Ramdhani",
            nickname: "Felbi",
            father: "Bapak Muhdi",
            mother: "Ibu Ine Sarita",
            childOrder: "Putra ke-1"
        },
        female: {
            name: "Fernandya Bigena Yuko",
            nickname: "Fernandya",
            father: "Bapak Imam Febi Yuko",
            mother: "Ibu Sunarti Woso",
            childOrder: "Putri ke-1"
        }
    },
    event: {
        date: "2025-12-06",
        dayName: "Sabtu",
        time: "10:00:00",
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
        details: "Tanpa mengurangi rasa hormat, kami mengundang Anda untuk berkenan menghadiri acara pernikahan kami. Terima kasih atas perhatian dan doa restu Anda, yang menjadi kebahagiaan serta kehormatan besar bagi kami."
    }
};

// Update HTML elements with wedding data
document.addEventListener('DOMContentLoaded', function() {
    // Update couple names
    document.querySelectorAll('.couple-male-name').forEach(el => {
        el.textContent = weddingData.couple.male.name;
    });
    document.querySelectorAll('.couple-female-name').forEach(el => {
        el.textContent = weddingData.couple.female.name;
    });

    // Update event date
    const eventDate = new Date(weddingData.event.date + 'T' + weddingData.event.time);
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

    document.querySelectorAll('.event-date').forEach(el => {
        el.textContent = eventDate.toLocaleDateString('id-ID', options);
    });

    // Update countdown
    const countdownElement = document.querySelector('body[data-time]');
    if (countdownElement) {
        countdownElement.setAttribute('data-time', weddingData.event.date + ' ' + weddingData.event.time);
    }

    // Update story
    const storyElement = document.querySelector('.story-content');
    if (storyElement) {
        storyElement.textContent = weddingData.story;
    }
});