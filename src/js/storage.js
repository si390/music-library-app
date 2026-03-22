const FAVORITES_KEY = 'musicapp_favorites';

// Obtener favoritos
export const getFavorites = () => {
  const data = localStorage.getItem(FAVORITES_KEY);
  return data ? JSON.parse(data) : [];
};

// Guardar favoritos
export const saveFavorites = (favorites) => {
  localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
};

// Agregar a favoritos
export const addFavorite = (song) => {
  const favorites = getFavorites();

  // evitar duplicados
  const exists = favorites.find(fav => fav.id === song.id);
  if (exists) return;

  favorites.push(song);
  saveFavorites(favorites);
};

// Eliminar de favoritos
export const removeFavorite = (songId) => {
  const favorites = getFavorites().filter(song => song.id !== songId);
  saveFavorites(favorites);
};

// Verificar si es favorito
export const isFavorite = (songId) => {
  const favorites = getFavorites();
  return favorites.some(song => song.id === songId);
};