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

