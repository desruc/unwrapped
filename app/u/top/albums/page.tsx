import { TopAlbumsSection } from "@/components/dashboard/TopAlbumsSection";
import { getTopTracks } from "@/lib/getAuthenticatedSpotifyApi";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "unwrapped | top albums"
};

export default async function TopAlbumsPage() {
  const data = await getTopTracks();

  return (
    <main>
      <TopAlbumsSection data={data} hideFooter />
    </main>
  );
}
