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

AOS.init({
    once: false,     // biar animasi bisa terjadi setiap elemen masuk viewport
    mirror: true,    // optional: supaya animasi jalan juga saat keluar viewport (efek balik)
    offset: 120,
    delay: 200,
});

const themeToggle = document.getElementById("themeToggle");
const mobileToggle = document.getElementById("mobileToggle");
const closeMenu = document.getElementById("closeMenu");
const mobileMenu = document.getElementById("mobileMenu");

themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    themeToggle.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
});

mobileToggle.addEventListener("click", () => {
    mobileMenu.classList.remove("hidden");
    mobileMenu.classList.add("flex");
});
closeMenu.addEventListener("click", () => {
    mobileMenu.classList.add("hidden");
    mobileMenu.classList.remove("flex");
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