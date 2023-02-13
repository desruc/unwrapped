import { unstable_getServerSession } from "next-auth";
import { authOptions } from "./auth";
import { spotifyApi } from "./spotify";

export type TimeRange = "short" | "medium" | "long";

export async function getAuthenticatedSpotifyApi() {
  const session = await unstable_getServerSession(authOptions);

  if (session?.user.accessToken) {
    spotifyApi.setAccessToken(session.user.accessToken);
  }

  return spotifyApi;
}

export async function getTopTracks(
  limit = 50
): Promise<Record<TimeRange, SpotifyApi.TrackObjectFull[]>> {
  const spotifyApi = await getAuthenticatedSpotifyApi();

  const longTermRequest = spotifyApi.getMyTopTracks({
    time_range: "long_term",
    limit
  });

  const mediumTermRequest = spotifyApi.getMyTopTracks({
    time_range: "medium_term",
    limit
  });

  const shortTermRequest = spotifyApi.getMyTopTracks({
    time_range: "short_term",
    limit
  });

  return {
    short: (await shortTermRequest).body.items,
    medium: (await mediumTermRequest).body.items,
    long: (await longTermRequest).body.items
  };
}

export async function getTopArtists(
  limit = 50
): Promise<Record<TimeRange, SpotifyApi.ArtistObjectFull[]>> {
  const spotifyApi = await getAuthenticatedSpotifyApi();

  const longTermRequest = spotifyApi.getMyTopArtists({
    time_range: "long_term",
    limit
  });

  const mediumTermRequest = spotifyApi.getMyTopArtists({
    time_range: "medium_term",
    limit
  });

  const shortTermRequest = spotifyApi.getMyTopArtists({
    time_range: "short_term",
    limit
  });

  return {
    short: (await shortTermRequest).body.items,
    medium: (await mediumTermRequest).body.items,
    long: (await longTermRequest).body.items
  };
}

export async function getAlbum(id: string): Promise<SpotifyApi.SingleAlbumResponse> {
  const spotifyApi = await getAuthenticatedSpotifyApi();
  const { body } = await spotifyApi.getAlbum(id);
  return body;
}

export async function getArtist(
  id: string
): Promise<SpotifyApi.SingleArtistResponse> {
  const spotifyApi = await getAuthenticatedSpotifyApi();
  const { body } = await spotifyApi.getArtist(id);
  return body;
}

export async function getArtistAlbums(
  id: string,
  country?: string,
  groups?: string
) {
  const spotifyApi = await getAuthenticatedSpotifyApi();
  const { body } = await spotifyApi.getArtistAlbums(id, {
    country,
    include_groups: groups
  });
  return body.items;
}

export async function getArtistPopularTracks(artistId: string) {
  const spotifyApi = await getAuthenticatedSpotifyApi();
  const { body } = await spotifyApi.getArtistTopTracks(artistId, "AU");
  return body.tracks;
}

export async function getRelatedArtists(artistId: string) {
  const spotifyApi = await getAuthenticatedSpotifyApi();
  const { body } = await spotifyApi.getArtistRelatedArtists(artistId);
  return body.artists;
}

export async function getTrack(trackId: string) {
  const spotifyApi = await getAuthenticatedSpotifyApi();
  const { body } = await spotifyApi.getTrack(trackId);
  return body;
}

export async function getSimilarTracks(trackId: string) {
  const spotifyApi = await getAuthenticatedSpotifyApi();
  const { body } = await spotifyApi.getRecommendations({ seed_tracks: [trackId] });
  return body.tracks;
}
