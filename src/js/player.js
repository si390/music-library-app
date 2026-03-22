let audio = new Audio();
let currentSong = null;

export const loadSong = (song) => {
  currentSong = song;

  if (song.preview) {
    audio.src = song.preview;
  } else {
    audio.src = '';
  }

  
  document.getElementById('songTitle').textContent = `${song.title} - ${song.artist}`;
};

export const playSong = () => {
  if (audio.src) {
    audio.play();
  }
};

export const pauseSong = () => {
  audio.pause();
};