export const filterSongs = (songs, query) => {
  const lowerQuery = query.toLowerCase();

  return songs.filter(song =>
    song.title.toLowerCase().includes(lowerQuery) ||
    song.artist.toLowerCase().includes(lowerQuery)
  );
};