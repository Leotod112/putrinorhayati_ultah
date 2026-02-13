// Music Player
const music = document.getElementById('bg-music');
const musicIcon = document.getElementById('music-icon');
let isPlaying = false;

// Coba mainkan musik saat halaman dimuat
window.addEventListener('load', () => {
    music.play().catch(() => {
        // Browser blocking autoplay - user harus klik tombol
        isPlaying = false;
    });
    isPlaying = true;
});

// Jika user interaksi dengan halaman, mainkan musik
document.addEventListener('click', () => {
    if (!isPlaying) {
        music.play().catch(() => {});
        isPlaying = true;
    }
});

function toggleMusic() {
    if (isPlaying) {
        music.pause();
        musicIcon.textContent = 'music_note';
    } else {
        music.play().catch(() => {});
        musicIcon.textContent = 'pause';
    }
    isPlaying = !isPlaying;
}
