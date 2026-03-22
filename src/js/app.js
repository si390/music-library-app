import { getSongs } from './data.js';
import { renderSongs } from './ui.js';
import { filterSongs } from './filter.js';
import { playSong, pauseSong } from './player.js';
import { getFavorites } from './storage.js';
import { searchSongs } from './api.js';
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
  let timeout;


  renderSongs(songs, resultsContainer);

  resultsContainer.innerHTML = "<p>Searching for music... 🎧</p>";
  
  searchInput.addEventListener('input', async (e) => {
    clearTimeout(timeout);
    const query = e.target.value;

    if (query.length < 2) return;

    const songs = await searchSongs(query);
    renderSongs(songs, resultsContainer);
  });

   
  playBtn.addEventListener('click', playSong);
  pauseBtn.addEventListener('click', pauseSong);
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