/**
 * Converts milliseconds into a string showing minutes and seconds.
 * @param {Number} ms number of milliseconds
 */
export const formatDuration = (ms: number) => {
  const minutes = Math.floor(ms / 60000);
  const seconds = Number(((ms % 60000) / 1000).toFixed(0));
  return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
};
