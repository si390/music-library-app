import { renderSongs } from './ui.js';
import { getFavorites } from './storage.js';
import { searchSongs } from './api.js';
import '../css/variables.css';
import '../css/styles.css';
import { togglePlay } from './player.js';

document.addEventListener('DOMContentLoaded', async () => {
  const resultsContainer = document.getElementById('results');
  const searchInput = document.getElementById('searchInput');
  let showingFavorites = false;
  const favoritesBtn = document.getElementById('favoritesBtn');
  let songs = [];
  let timeout;
  const playPauseBtn = document.getElementById('playPauseBtn');

  renderSongs(songs, resultsContainer);

  
  
  searchInput.addEventListener('input', async (e) => {
    clearTimeout(timeout);
    const query = e.target.value;

     timeout = setTimeout(async () => {
      if (query.length < 2) {
        resultsContainer.innerHTML = "<p> Searching... 🎧</p>";
        return;
      }

      resultsContainer.innerHTML = "<p>Searching for music... 🎧</p>";

      songs = await searchSongs(query);

      renderSongs(songs, resultsContainer);
    }, 400);
  });

   
  playPauseBtn.addEventListener('click', togglePlay);
  favoritesBtn.addEventListener('click', () => {
    showingFavorites = !showingFavorites;
    if (showingFavorites) {
      const favorites = getFavorites();
      renderSongs(favorites, resultsContainer);
      favoritesBtn.textContent = '🏠'; 
    } else {
      renderSongs(songs, resultsContainer);
      favoritesBtn.textContent = '❤️';
    }
  });
});