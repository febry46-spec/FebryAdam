// ==============================
// Perpindahan Halaman
// ==============================

const pages = document.querySelectorAll(".page");

function showPage(pageNumber){

    pages.forEach(page=>{
        page.classList.remove("active");
    });

    document
        .getElementById("page"+pageNumber)
        .classList.add("active");
}

// ==============================
// Musik
// ==============================

const music = document.getElementById("music");
const musicBtn = document.getElementById("musicBtn");

// Mencoba memutar musik saat halaman dibuka.
// Catatan: Banyak browser akan memblokir autoplay
// sampai pengguna berinteraksi dengan halaman.
window.addEventListener("load", ()=>{

    music.volume = 0.5;

    music.play().catch(()=>{

        console.log("Autoplay diblokir browser.");

    });

});

let playing = true;

musicBtn.addEventListener("click", ()=>{

    if(playing){

        music.pause();

        musicBtn.innerHTML =
        '<i class="fa-solid fa-volume-xmark"></i>';

    }else{

        music.play();

        musicBtn.innerHTML =
        '<i class="fa-solid fa-music"></i>';

    }

    playing = !playing;

});

// ==============================
// Animasi saat ganti halaman
// ==============================

pages.forEach(page=>{

    page.addEventListener("transitionend",()=>{

        page.style.transform = "scale(1)";

    });

});