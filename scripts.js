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

 // ketikan welcome
//  const sentences = [
//      "Welcome to my personal Website 👋",
//      "I am a web developer.",
//      "I love me and me.",
//      "Feel free to explore my work."
//  ];

//  const typingElement = document.querySelector('.typing');
//  let index = 0;

//  function typeSentence(sentence, element, delay) {
//      let i = 0;
//      element.textContent = "";
//      const interval = setInterval(() => {
//          if (i < sentence.length) {
//              element.textContent += sentence.charAt(i);
//              i++;
//          } else {
//              clearInterval(interval);
//              setTimeout(() => deleteSentence(element, delay), 1000);
//          }
//      }, 100);
//  }

//  function deleteSentence(element, delay) {
//      let sentence = element.textContent;
//      const interval = setInterval(() => {
//          if (sentence.length > 0) {
//              sentence = sentence.slice(0, -1);
//              element.textContent = sentence;
//          } else {
//              clearInterval(interval);
//              index = (index + 1) % sentences.length;
//              setTimeout(() => typeSentence(sentences[index], element, delay), 500);
//          }
//      }, 50);
//  }

//  typeSentence(sentences[index], typingElement, 1000);

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