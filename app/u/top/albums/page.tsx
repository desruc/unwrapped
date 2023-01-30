import { TopAlbumsSection } from "@/components/dashboard/TopAlbumsSection";
import { getTopTracks } from "@/lib/getAuthenticatedSpotifyApi";

export default async function TopAlbumsPage() {
  const data = await getTopTracks();

  return (
    <main>
      <TopAlbumsSection data={data} hideFooter />
    </main>
  );
}
