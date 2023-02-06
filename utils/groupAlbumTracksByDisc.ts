import { groupBy } from "lodash";

export function groupAlbumTracksByDisc(
  tracks: SpotifyApi.TrackObjectSimplified[]
): Record<number, SpotifyApi.TrackObjectSimplified[]> {
  return groupBy(tracks, (t) => t.disc_number);
}
