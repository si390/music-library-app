let audio = new Audio();
let currentSong = null;
let isPlaying = false;
const playPauseBtn = document.getElementById('playPauseBtn');

export const loadSong = (song) => {
  currentSong = song;

  if (!song.preview) {
    audio.pause();
    audio.src = '';
    document.getElementById('songTitle').textContent =
      `${song.title} - ${song.artist} (No preview)`;
    
    return;
  }
  audio.src = song.preview;
  document.getElementById('songTitle').textContent =
    `${song.title} - ${song.artist}`;

};

export const playSong = () => {
  if (!audio.src) return;

  audio.play();
  isPlaying = true;
  playPauseBtn.textContent = '⏸️';

};

export const pauseSong = () => {
  audio.pause();
  isPlaying = false;
   playPauseBtn.textContent = '▶️';
};

export const togglePlay = () => {
  if (!audio.src) return;

  if (isPlaying) {
    pauseSong();
  } else {
    playSong();
  }
};

audio.addEventListener('ended', () => {
  isPlaying = false;
  playPauseBtn.textContent = '▶️';
});