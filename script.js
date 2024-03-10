
// Scroll efek
document.addEventListener('DOMContentLoaded', function () {
    let sections = document.querySelectorAll('section');
    let navLinks = document.querySelectorAll('header nav a');
  
    function isElementInViewport(el) {
      const rect = el.getBoundingClientRect();
      return (
        rect.top <= (window.innerHeight - (rect.height * 0.2)) &&
        rect.bottom >= (rect.height * 0.2)
      );
    }
  
    function updateActiveSection() {
      let currentSection = '';
  
      sections.forEach(function (section) {
        if (isElementInViewport(section)) {
          currentSection = section.getAttribute('id');
        }
      });
  
      navLinks.forEach(function (link) {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
          link.classList.add('active');
        }
      });
    }
  
    window.addEventListener('scroll', function () {
      updateActiveSection();
    });
  
    // Call the function on page load to set initial state
    updateActiveSection();
  });

  
// on off navbar
document.addEventListener('DOMContentLoaded', function () {
    let menuicon = document.querySelector('#menu-icon');
    let navbar = document.querySelector('.navbar');
    let navLinks = document.querySelectorAll('header nav a');
  
    menuicon.onclick = () => {
      menuicon.classList.toggle('bx-x');
      navbar.classList.toggle('active');
    }
  
    // Tambahkan event listener untuk setiap link navbar
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        // Hapus kelas 'active' dari navbar saat link diklik
        navbar.classList.remove('active');
        // Hapus kelas 'bx-x' dari icon jika navbar tidak aktif
        if (!navbar.classList.contains('active')) {
          menuicon.classList.remove('bx-x');
        }
        // Jika diperlukan, Anda dapat menambahkan logika lain di sini, misalnya untuk menggulir ke bagian tertentu
      });
    });
  });
  
  
  