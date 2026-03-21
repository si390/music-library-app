import { getSongs } from './data.js';
import { renderSongs } from './ui.js';

document.addEventListener('DOMContentLoaded', async () => {
  const resultsContainer = document.getElementById('results');

  const songs = await getSongs();

  renderSongs(songs, resultsContainer);
});