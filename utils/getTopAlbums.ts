/**
 * Returns a sorted array of key/value pairs. The key being to album name and the value being the
 * amount of times it appears within the array of track objects.
 * @param {Array} data An array of track objects returned from spotify
 * @returns {Array} An array of tuples containing the album and the amount of times it appears
 */
export const getTopAlbumsFromTracks = (
  tracks: SpotifyApi.TrackObjectFull[]
): SpotifyApi.AlbumObjectSimplified[] => {
  if (!tracks) return [];

  const albums = tracks.map((d) => d.album);

  const counts: Record<string, number> = {};

  albums.forEach((a) => {
    const { id } = a;
    counts[id] = (counts[id] || 0) + 1;
  });

  const sortable: [SpotifyApi.AlbumObjectSimplified, number][] = [];

  const keys = Object.keys(counts);

  keys.forEach((k) => {
    const album = albums.find((a) => a.id === k);

    // This will always be true, but TS doesn't know that
    if (album) {
      sortable.push([album, counts[k]]);
    }
  });

  return sortable.sort((a, b) => b[1] - a[1]).map((a) => a[0]);
};
