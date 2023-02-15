import { TopTrackSection } from "@/components/dashboard/TopTracksSection";
import { getTopTracks } from "@/lib/getAuthenticatedSpotifyApi";

export default async function TopTracks() {
  const tracks = await getTopTracks();

  return (
    <main>
      <TopTrackSection data={tracks} />
    </main>
  );
}
