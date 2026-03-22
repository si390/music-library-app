import { getSongs } from './data.js';
import { renderSongs } from './ui.js';
import { filterSongs } from './filter.js';
import { playSong, pauseSong } from './player.js';
import { getFavorites } from './storage.js';
import '../css/variables.css';
import '../css/styles.css';

document.addEventListener('DOMContentLoaded', async () => {
  const resultsContainer = document.getElementById('results');
  const searchInput = document.getElementById('searchInput');
  let showingFavorites = false;
  const playBtn = document.getElementById('playBtn');
  const pauseBtn = document.getElementById('pauseBtn');
  const favoritesBtn = document.getElementById('favoritesBtn');
  const songs = await getSongs();

  // Render inicial
  renderSongs(songs, resultsContainer);

  // 🔎 Evento de búsqueda en tiempo real
  searchInput.addEventListener('input', (e) => {
    const query = e.target.value;

    const source = showingFavorites ? getFavorites() : songs;
    const filteredSongs = filterSongs(source, query);

    renderSongs(filteredSongs, resultsContainer);
  });

   // 🎧 Controles del player
  playBtn.addEventListener('click', playSong);
  pauseBtn.addEventListener('click', pauseSong);
  favoritesBtn.addEventListener('click', () => {
    showingFavorites = !showingFavorites;

    if (showingFavorites) {
      const favorites = getFavorites();
      renderSongs(favorites, resultsContainer);
      favoritesBtn.textContent = '🏠'; // volver a inicio
    } else {
      renderSongs(songs, resultsContainer);
      favoritesBtn.textContent = '❤️';
    }
  });
});