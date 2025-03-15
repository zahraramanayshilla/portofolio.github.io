 // navbar
 const navbar = document.getElementsByTagName('nav')[0];
 window.addEventListener('scroll', function () {
     console.log(window.scrollY);
     if (window.scrollY > 1) {
         navbar.classList.replace('berubah', 'nav-color');
     } else if (this.window.scrollY <= 0) {
         navbar.classList.replace('nav-color', 'berubah')
     }
 });

 // animasi
 AOS.init({
     once: true, // Animasi hanya terjadi sekali
     offset: 120, // Jarak trigger animasi dari bagian atas layar (dalam piksel)
     delay: 200, // Delay animasi (dalam milidetik)
 });

// Fungsi untuk mengirim pesan ke WhatsApp
document.getElementById('whatsappForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Mencegah form submit default

    // Ambil nilai dari form
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Format pesan untuk WhatsApp
    const whatsappMessage = `Name: ${name}%0AEmail: ${email}%0AMessage: ${message}`;

    // Nomor WhatsApp tujuan (ganti dengan nomor Anda)
    const phoneNumber = "6281288951726"; // Contoh: +62 812-8895-1726

    // Buat link WhatsApp
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;

    // Buka link WhatsApp di tab baru
    window.open(whatsappUrl, '_blank');
});

//scrol
document.addEventListener("DOMContentLoaded", function () {
    const timelineCards = document.querySelectorAll(".timeline-card-wrapper");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                } else {
                    entry.target.classList.remove("visible");
                }
            });
        },
        {
            threshold: 0.5, // Card akan muncul saat 50% terlihat
        }
    );

    timelineCards.forEach((card) => {
        observer.observe(card);
    });
});