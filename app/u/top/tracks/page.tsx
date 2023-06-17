import { TopTrackSection } from "@/components/dashboard/TopTracksSection";
import { getTopTracks } from "@/lib/getAuthenticatedSpotifyApi";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "unwrapped | top tracks"
};

export default async function TopTracks() {
  const tracks = await getTopTracks();

  return (
    <main>
      <TopTrackSection data={tracks} />
    </main>
  );
}
