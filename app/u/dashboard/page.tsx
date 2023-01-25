import { TopAlbumsSection } from "@/components/dashboard/TopAlbumsSection";
import { TopArtistsSection } from "@/components/dashboard/TopArtistsSection";
import { TopItemsLoading } from "@/components/dashboard/TopItemsLoading";
import { getTopArtists, getTopTracks } from "@/lib/getAuthenticatedSpotifyApi";
import { Suspense } from "react";

export default async function Dashboard() {
  return (
    <main>
      Dashboard
      <Suspense fallback={<TopItemsLoading title="Top artists" />}>
        {/* @ts-expect-error Async Server Component */}
        <FeaturedArtists />
      </Suspense>
      <Suspense fallback={<TopItemsLoading title="Top albums" />}>
        {/* @ts-expect-error Async Server Component */}
        <FeaturedAlbums />
      </Suspense>
    </main>
  );
}

async function FeaturedArtists() {
  const data = await getTopArtists(8);
  return <TopArtistsSection data={data} />;
}

async function FeaturedAlbums() {
  const data = await getTopTracks();
  return <TopAlbumsSection data={data} />;
}
