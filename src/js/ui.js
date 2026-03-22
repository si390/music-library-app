import { loadSong, playSong } from './player.js';
import { 
  addFavorite, 
  removeFavorite, 
  isFavorite 
} from './storage.js';

export const renderSongs = (songs, container) => {
  container.innerHTML = '';

   if (songs.length === 0) {
    container.innerHTML = `<p>No results🎧</p>`;
    return;
  }

  songs.forEach(song => {
    console.log("SONG:",song);
    const card = document.createElement('div');
    card.classList.add('card');

    card.innerHTML = `
    <div class="card-image">
      <img src="${song.image}" alt="${song.title}" />
      <button class="fav-btn">
        ${isFavorite(song.id) ? '❤️' : '🤍'}
      </button>
      ${song.preview ? '' : '<span class="no-preview">No preview</span>'}
    </div>
    <h4>${song.title}</h4>
    <p>${song.artist}</p>
    `;

    const favBtn = card.querySelector('.fav-btn');

  favBtn.addEventListener('click', (e) => {
    e.stopPropagation(); 

    if (isFavorite(song.id)) {
      removeFavorite(song.id);
      favBtn.textContent = '🤍';
    } else {
      addFavorite(song);
      favBtn.textContent = '❤️';
    }
  });

    
    card.addEventListener('click', () => {
      loadSong(song);
      playSong(); 
    });

    container.appendChild(card);
  });
};

