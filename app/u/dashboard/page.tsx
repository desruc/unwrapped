import { TopAlbumsSection } from "@/components/dashboard/TopAlbumsSection";
import { TopArtistsSection } from "@/components/dashboard/TopArtistsSection";
import { TopItemsLoading } from "@/components/dashboard/TopItemsLoading";
import {
  TopTrackSection,
  TopTracksSectionLoading
} from "@/components/dashboard/TopTracksSection";
import { getTopArtists, getTopTracks } from "@/lib/getAuthenticatedSpotifyApi";
import { Suspense } from "react";

export default async function Dashboard() {
  return (
    <main>
      <Suspense fallback={<TopTracksSectionLoading />}>
        {/* @ts-expect-error Async Server Component */}
        <FeaturedTracks />
      </Suspense>
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

async function FeaturedTracks() {
  const data = await getTopTracks(10);
  return <TopTrackSection data={data} />;
}

async function FeaturedArtists() {
  const data = await getTopArtists(8);
  return <TopArtistsSection data={data} />;
}

async function FeaturedAlbums() {
  const data = await getTopTracks();
  return <TopAlbumsSection data={data} />;
}
