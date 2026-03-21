export const renderSongs = (songs, container) => {
  container.innerHTML = '';

   if (songs.length === 0) {
    container.innerHTML = `<p>No se encontraron resultados 🎧</p>`;
    return;
  }

  songs.forEach(song => {
    const card = document.createElement('div');
    card.classList.add('card');

    card.innerHTML = `
      <img src="${song.image}" alt="${song.title}" />
      <h4>${song.title}</h4>
      <p>${song.artist}</p>
    `;

    // Evento click (lo conectaremos al player luego)
    card.addEventListener('click', () => {
      console.log('Seleccionaste:', song.title);
    });

    container.appendChild(card);
  });
};