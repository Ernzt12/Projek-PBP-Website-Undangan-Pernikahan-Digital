document.addEventListener('DOMContentLoaded', function() {

    const btnOpen = document.getElementById('btn-open');
    const coverPage = document.getElementById('cover-page');
    const mainContent = document.getElementById('main-content');
    const bgMusic = document.getElementById('bg-music');
    const musicControl = document.getElementById('music-control');
    const musicIcon = document.getElementById('music-icon');
    let isPlaying = false;

    // Logika buka undangan
    btnOpen.addEventListener('click', function() {
        // Animasi buka cover
        coverPage.classList.add('open');

        // 
        document.body.style.overflow = 'auto';

        // Menampilkan konten utama
        mainContent.classList.add('visible');

        // Menampilkan kontrol music
        musicControl.classList.remove('d-none');

        // Memutar musik
        bgMusic.play().then(() => {
            isPlaying = true;
        }).catch((err) => {
            console.log("Audio autoplay dicegah oleh browser", err);
            musicIcon.classList.remove('spin-icon');
            musicIcon.classList.remove('fa-compact-disc');
            musicIcon.classList.add('fa-play');
        })
    });

    // Logika Kontrol Musik
    musicControl.addEventListener('click', function() {
        if (isPlaying) {
            bgMusic.pause();
            musicIcon.classList.remove('spin-icon');
            musicIcon.classList.remove('fa-compact-disc');
            musicIcon.classList.add('fa-play');
        } else {
            bgMusic.play();
            musicIcon.classList.add('spin-icon');
            musicIcon.classList.remove('fa-play');
            musicIcon.classList.add('fa-compact-disc');
        }
        isPlaying = !isPlaying;
    });

    // Logika Countdown Timer
    // Target tanggal statis (25 Desember 2026)
    const countDownDate = new Date("Dec 25, 2026 08:00:00").getTime();

    const timeInterval = setInterval(function() {
        const now = new Date().getTime();
        const distance = countDownDate - now;

        // Perhitungan waktu D, H, M, and S
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60))  / 1000);

        // Output
        document.getElementById("hari").innerHTML = days < 10 ? '0' + days : days;
        document.getElementById("jam").innerHTML = hours < 10 ? '0' + hours : hours;
        document.getElementById("menit").innerHTML = minutes < 10 ? '0' + minutes : minutes;
        document.getElementById("detik").innerHTML = seconds < 10 ? '0' + seconds : seconds;

        // Jika hitung mundur selesai
        if (distance < 0) {
            clearInterval(timeInterval);
            document.getElementById("hari").innerHTML = "00";
            document.getElementById("jam").innerHTML = "00";
            document.getElementById("menit").innerHTML = "00";
            document.getElementById("detik").innerHTML = "00";
        }
    }, 1000);

    // Logika Pencegahan Default Submit
    const rsvpForm = document.getElementById('rsvp-form');
    const rsvpSuccess = document.getElementById('rsvp-success');

    rsvpForm.addEventListener('submit', function(e) {
        e.preventDefault();

        rsvpForm.reset();
        rsvpSuccess.classList.remove('d-none');

        setTimeout(() => {
            rsvpSuccess.classList.add('d-none');
        }, 5000);
    });

});