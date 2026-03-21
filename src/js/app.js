import { getSongs } from './data.js';
import { renderSongs } from './ui.js';
import { filterSongs } from './filter.js';

document.addEventListener('DOMContentLoaded', async () => {
  const resultsContainer = document.getElementById('results');
  const searchInput = document.getElementById('searchInput');

  const songs = await getSongs();

  // Render inicial
  renderSongs(songs, resultsContainer);

  // 🔎 Evento de búsqueda en tiempo real
  searchInput.addEventListener('input', (e) => {
    const query = e.target.value;

    const filteredSongs = filterSongs(songs, query);

    renderSongs(filteredSongs, resultsContainer);
  });
});