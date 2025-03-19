
  function bukaMenu() {
    document.querySelector('.isi-menu').classList.toggle('h');
}

function tutupMenu() {
    document.querySelector('.isi-menu').classList.add('h');
}

function shareLink(button) {
    const link = button.getAttribute('data-link');
    if (navigator.share) {
        navigator.share({
            title: 'Egiagan AI',
            url: link
        }).catch((error) => console.error('Error sharing', error));
    } else {
        navigator.clipboard.writeText(link).then(() => {
            alert('Link telah disalin!');
        }).catch((err) => console.error('Gagal menyalin link', err));
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.getElementById("menuButton");
    const menu = document.getElementById("menu");

    // Toggle menu saat tombol diklik
    menuButton.addEventListener("click", function (event) {
        event.stopPropagation(); // Mencegah event bubbling
        menu.classList.toggle("show");
    });

    // Tutup menu saat klik di luar area menu
    document.addEventListener("click", function (event) {
        if (!menu.contains(event.target) && !menuButton.contains(event.target)) {
            menu.classList.remove("show");
        }
    });

    // Pastikan klik di dalam menu tidak menutup menu
    menu.addEventListener("click", function (event) {
        event.stopPropagation();
    });
});


    
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // Jika pengguna sudah login
      document.querySelectorAll('.belumLog').forEach(el => el.style.display = 'none');
      document.querySelectorAll('.sudahLog').forEach(el => el.style.display = 'block');
    } else {
      // Jika pengguna belum login
      document.querySelectorAll('.belumLog').forEach(el => el.style.display = 'block');
      document.querySelectorAll('.sudahLog').forEach(el => el.style.display = 'none');
    }
  });
  // Fungsi untuk membuka popup "Tentang"
  window.infoAI = function () {
      console.log("infoAI() dipanggil");
      document.querySelector(".overlay-popup").classList.remove("h");
      document.querySelector(".bungkus-tentang").classList.remove("h");
  };

  // Fungsi untuk menutup popup "Tentang"
  window.closeAI = function () {
      console.log("closeAI() dipanggil");
      document.querySelector(".overlay-popup").classList.add("h");
      document.querySelector(".bungkus-tentang").classList.add("h");
  };

  // Fungsi untuk membuka popup "Riwayat"
  window.viewHistory = function () {
      console.log("viewHistory() dipanggil");
      document.querySelector(".overlay-popup").classList.remove("h");
      document.querySelector(".bungkus-history").classList.remove("h");
  };

  // Fungsi untuk menutup popup "Riwayat"
  window.closeHistory = function () {
      console.log("closeHistory() dipanggil");
      document.querySelector(".overlay-popup").classList.add("h");
      document.querySelector(".bungkus-history").classList.add("h");
  };

