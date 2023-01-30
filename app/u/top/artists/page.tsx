import { TopArtistsSection } from "@/components/dashboard/TopArtistsSection";
import { getTopArtists } from "@/lib/getAuthenticatedSpotifyApi";

export default async function TopArtistsPage() {
  const data = await getTopArtists();

  return (
    <main>
      <TopArtistsSection data={data} hideFooter />
    </main>
  );
}
