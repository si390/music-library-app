export const getSongs = async () => {
  try {
    const response = await fetch('/src/data/songs.json');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error cargando canciones:', error);
    return [];
  }
};