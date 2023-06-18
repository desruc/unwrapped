import { ShareableCardSection } from "@/components/shareable/ShareableCardSection";
import {
  getMe,
  getTopArtists,
  getTopTracks
} from "@/lib/getAuthenticatedSpotifyApi";

export default async function Shareable() {
  const me = await getMe();
  const topArtists = await getTopArtists();
  const topTracks = await getTopTracks();

  return <ShareableCardSection user={me} artists={topArtists} tracks={topTracks} />;
}
