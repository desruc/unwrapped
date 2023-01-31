/**
 * Returns a string of the albums full duration (based of individual track lengths)
 * @param {Object} album album object returned by spotify
 */
export function getAlbumDuration(album: SpotifyApi.AlbumObjectFull) {
  const {
    tracks: { items }
  } = album;
  let ms = 0;

  items.forEach((track) => {
    ms += track.duration_ms;
  });

  const s = Math.floor(ms / 1000);
  const m = Math.floor(s / 60);
  const h = Math.floor(m / 60);

  const seconds = s % 60;
  const minutes = m % 60;
  const hours = h % 24;

  return `${hours > 0 ? `${hours}h ` : ""}${minutes > 1 ? `${minutes}m ` : ""}${
    seconds > 1 ? `${seconds}s` : ""
  }`;
}
