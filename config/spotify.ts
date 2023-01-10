const scopes = [
  "user-read-private",
  "user-read-email",
  "user-read-recently-played",
  "user-top-read",
  "user-follow-modify",
  "playlist-read-private",
  "playlist-read-collaborative",
  "playlist-modify-public",
].join(",");

const params = {
  scope: scopes,
};

const query = new URLSearchParams(params);

export const SPOTIFY_LOGIN_URL = `https://accounts.spotify.com/authorize?${query.toString()}`;
