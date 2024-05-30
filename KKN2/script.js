// Ambil elemen navbar
var navbar = document.querySelector('.header');

// Inisialisasi variabel untuk menyimpan posisi scroll sebelumnya
var prevScrollPos = window.pageYOffset;

// Tambahkan event listener untuk peristiwa scroll
window.addEventListener('scroll', function() {
    // Ambil posisi scroll saat ini
    var currentScrollPos = window.pageYOffset;

    // Jika posisi scroll saat ini lebih besar dari posisi scroll sebelumnya, sembunyikan navbar
    if (prevScrollPos < currentScrollPos) {
        navbar.classList.add('hidden');
    } else {
        // Jika posisi scroll saat ini lebih kecil dari posisi scroll sebelumnya, tampilkan navbar kembali
        navbar.classList.remove('hidden');
    }

    // Simpan posisi scroll saat ini sebagai posisi scroll sebelumnya untuk digunakan pada pergerakan berikutnya
    prevScrollPos = currentScrollPos;
});

// Ambil semua tautan navigasi
var navLinks = document.querySelectorAll('.nav-menu a');

// Tambahkan event listener untuk setiap tautan navigasi
navLinks.forEach(function(navLink) {
  navLink.addEventListener('click', function(e) {
    // Hentikan perilaku default dari tautan
    e.preventDefault();

    // Ambil target id dari tautan
    var targetId = this.getAttribute('href');

    // Scroll ke bagian yang sesuai dengan targetId dengan efek lembut
    document.querySelector(targetId).scrollIntoView({
      behavior: 'smooth'
    });
  });
});x