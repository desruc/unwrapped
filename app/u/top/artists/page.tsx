import { TopArtistsSection } from "@/components/dashboard/TopArtistsSection";
import { getTopArtists } from "@/lib/getAuthenticatedSpotifyApi";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "unwrapped | top artists"
};

export default async function TopArtistsPage() {
  const data = await getTopArtists();

  return (
    <main>
      <TopArtistsSection data={data} hideFooter />
    </main>
  );
}
