// Music Player
const music = document.getElementById('bg-music');
const musicIcon = document.getElementById('music-icon');
let isPlaying = false;

function toggleMusic() {
    if (isPlaying) {
        music.pause();
        musicIcon.textContent = 'music_note';
    } else {
        music.play();
        musicIcon.textContent = 'pause';
    }
    isPlaying = !isPlaying;
}
