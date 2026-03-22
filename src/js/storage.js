const FAVORITES_KEY = 'musicapp_favorites';


export const getFavorites = () => {
  const data = localStorage.getItem(FAVORITES_KEY);
  return data ? JSON.parse(data) : [];
};


export const saveFavorites = (favorites) => {
  localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
};


export const addFavorite = (song) => {
  const favorites = getFavorites();

  
  const exists = favorites.find(fav => fav.id === song.id);
  if (exists) return;

  favorites.push(song);
  saveFavorites(favorites);
};


export const removeFavorite = (songId) => {
  const favorites = getFavorites().filter(song => song.id !== songId);
  saveFavorites(favorites);
};


export const isFavorite = (songId) => {
  const favorites = getFavorites();
  return favorites.some(song => song.id === songId);
};