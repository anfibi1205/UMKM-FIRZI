// ==================================
// PENGATURAN USAHA
// ==================================

const nomorWhatsApp = "083831802733";
const emailUsaha = "firzi123@gmail.com";
const alamatUsaha = "swembat";
const namaUsaha = "Spider Gorengan";


// ==================================
// MENU NAVIGASI HP
// ==================================

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", function () {
        navMenu.classList.toggle("active");

        const terbuka = navMenu.classList.contains("active");

        menuToggle.textContent = terbuka ? "✕" : "☰";
        menuToggle.setAttribute("aria-expanded", terbuka);
    });

    navMenu.querySelectorAll("a").forEach(function (link) {
        link.addEventListener("click", function () {
            navMenu.classList.remove("active");
            menuToggle.textContent = "☰";
            menuToggle.setAttribute("aria-expanded", "false");
        });
    });
}


// ==================================
// ANIMASI SAAT SCROLL
// ==================================

const elemenReveal = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.08,
        rootMargin: "0px 0px -20px 0px"
    });

    elemenReveal.forEach(function (elemen) {
        observer.observe(elemen);
    });
} else {
    elemenReveal.forEach(function (elemen) {
        elemen.classList.add("show");
    });
}


// ==================================
// FUNGSI LINK WHATSAPP
// ==================================

function buatLinkWhatsApp(pesan) {
    return "https://wa.me/" + nomorWhatsApp +
        "?text=" + encodeURIComponent(pesan);
}


// ==================================
// TOMBOL PESAN PRODUK
// ==================================

document.querySelectorAll(".order-btn").forEach(function (tombol) {
    tombol.addEventListener("click", function () {
        const produk = tombol.dataset.product;

        if (
            nomorWhatsApp === "+62083831802733" ||
            nomorWhatsApp.trim() === ""
        ) {
            alert(
                "Ganti nomorWhatsApp di script.js dengan nomor usaha kamu."
            );
            return;
        }

        const pesan = "Halo " + namaUsaha +
            ", saya ingin memesan " + produk +
            ". Apakah masih tersedia?";

        window.open(
            buatLinkWhatsApp(pesan),
            "_blank"
        );
    });
});


// ==================================
// WHATSAPP KONTAK DAN TOMBOL MELAYANG
// ==================================

const waLink = document.getElementById("waLink");
const floatingWa = document.getElementById("floatingWa");

const pesanUmum = "Halo " + namaUsaha +
    ", saya ingin bertanya tentang menu gorengan.";

function aturWhatsApp(elemen) {
    if (!elemen) return;

    elemen.href = buatLinkWhatsApp(pesanUmum);
    elemen.target = "_blank";
    elemen.rel = "noopener noreferrer";

    elemen.addEventListener("click", function (event) {
        if (
            nomorWhatsApp === "+62083831802733" ||
            nomorWhatsApp.trim() === ""
        ) {
            event.preventDefault();
            alert("Ganti nomor WhatsApp di script.js terlebih dahulu.");
        }
    });
}

aturWhatsApp(waLink);
aturWhatsApp(floatingWa);


// ==================================
// EMAIL USAHA
// ==================================

const emailLink = document.getElementById("emailLink");

if (emailLink) {
    emailLink.href = "mailto:" + emailUsaha +
        "?subject=" +
        encodeURIComponent("Pertanyaan tentang " + namaUsaha);

    emailLink.addEventListener("click", function (event) {
        if (emailUsaha === "emailkamu@example.com") {
            event.preventDefault();
            alert("firzi123@gmail.com.");
        }
    });
}


// ==================================
// ALAMAT USAHA
// ==================================

const addressDisplay = document.getElementById("addressDisplay");

if (
    addressDisplay &&
    alamatUsaha !== "swembat"
) {
    addressDisplay.textContent = alamatUsaha;
}


// ==================================
// TAHUN OTOMATIS
// ==================================

const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}


// ==================================
// PESAN DI CONSOLE
// ==================================

console.log("Spider Gorengan berhasil dimuat!");