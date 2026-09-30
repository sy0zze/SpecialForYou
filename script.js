/* =========================
   PASSWORD
========================= */

/*
   Ganti angka di bawah dengan
   password yang kamu mau.
*/

const correctPassword = "0705";


/* =========================
   PINDAH HALAMAN
========================= */

function nextPage(number) {

    const currentPage =
        document.querySelector(".page.active");

    if (currentPage) {
        currentPage.classList.remove("active");
    }

    const nextPage =
        document.getElementById("page" + number);

    if (nextPage) {
        nextPage.classList.add("active");
    }

}


/* =========================
   CEK PASSWORD
========================= */

function checkPassword() {

    const password =
        document.getElementById("password").value;

    const message =
        document.getElementById("wrongPassword");


    if (password === correctPassword) {

        message.innerText =
            "nah, bener 😭";

        setTimeout(function () {

            nextPage(3);

        }, 600);

    } else {

        message.innerText =
            "salah 😭 coba inget-inget lagi.";

    }

}


/* =========================
   BUKA HADIAH
========================= */

function openGift() {

    const gift =
        document.querySelector(".gift");

    const text =
        document.getElementById("giftText");


    gift.classList.add("open");

    text.innerText =
        "tunggu... ada isinya 😭";


    setTimeout(function () {

        nextPage(4);

    }, 1300);

}


/* =========================
   MUSIK
========================= */

const music =
    document.getElementById("music");

const musicButton =
    document.getElementById("musicButton");


function toggleMusic() {

    if (music.paused) {

        music.play();

        musicButton.innerText =
            "❚❚ Pause";

    } else {

        music.pause();

        musicButton.innerText =
            "▶ Putar lagi";

    }

}


/* =========================
   ISI TOPLES
========================= */

const reasons = [

    "kamu ternyata seru juga kalau diajak ngobrol 😭",

    "makasih udah sering bikin obrolan jadi nggak ngebosenin.",

    "aku suka cara kamu bercanda.",

    "ternyata ngobrol sama kamu bisa bikin hari jadi lebih seru.",

    "makasih udah jadi salah satu orang yang menyenangkan buat dikenal.",

    "semoga kamu tahu kalau keberadaan kamu cukup berarti.",

    "tetap jadi diri kamu sendiri ya.",

    "makasih buat semua hal kecil yang mungkin nggak kamu sadari."

];


let reasonIndex = 0;


function showReason() {

    const box =
        document.getElementById("reasonBox");


    box.style.opacity = "0";


    setTimeout(function () {

        box.innerText =
            reasons[reasonIndex];

        box.style.opacity = "1";


        reasonIndex++;


        if (reasonIndex >= reasons.length) {

            reasonIndex = 0;

        }

    }, 200);

}


/* =========================
   ULANG DARI AWAL
========================= */

function restart() {

    music.pause();

    music.currentTime = 0;


    document
        .getElementById("password")
        .value = "";


    document
        .getElementById("wrongPassword")
        .innerText = "";


    document
        .querySelector(".gift")
        .classList.remove("open");


    document
        .getElementById("giftText")
        .innerText =
            "coba pencet hadiahnya";


    document
        .getElementById("musicButton")
        .innerText =
            "▶ Putar lagu";


    reasonIndex = 0;


    document
        .getElementById("reasonBox")
        .innerText =
            "pencet toplesnya 😭";


    nextPage(1);

}