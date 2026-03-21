import { getSongs } from './data.js';
import { renderSongs } from './ui.js';
import { filterSongs } from './filter.js';
import { playSong, pauseSong } from './player.js';

document.addEventListener('DOMContentLoaded', async () => {
  const resultsContainer = document.getElementById('results');
  const searchInput = document.getElementById('searchInput');

  const playBtn = document.getElementById('playBtn');
  const pauseBtn = document.getElementById('pauseBtn');

  const songs = await getSongs();

  // Render inicial
  renderSongs(songs, resultsContainer);

  // 🔎 Evento de búsqueda en tiempo real
  searchInput.addEventListener('input', (e) => {
    const query = e.target.value;

    const filteredSongs = filterSongs(songs, query);

    renderSongs(filteredSongs, resultsContainer);
  });

   // 🎧 Controles del player
  playBtn.addEventListener('click', playSong);
  pauseBtn.addEventListener('click', pauseSong);
});