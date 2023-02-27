import {
  RecentlyPlayedSection,
  RecentlyPlayedSectionLoading
} from "@/components/dashboard/RecentlyPlayedSection";
import { TopAlbumsSection } from "@/components/dashboard/TopAlbumsSection";
import { TopArtistsSection } from "@/components/dashboard/TopArtistsSection";
import {
  TopGenresSection,
  TopGenresLoading
} from "@/components/dashboard/TopGenres";
import { TopItemsLoading } from "@/components/dashboard/TopItemsLoading";
import {
  TopTrackSection,
  TopTracksSectionLoading
} from "@/components/dashboard/TopTracksSection";
import {
  getRecentlyPlayedTracks,
  getTopArtists,
  getTopTracks
} from "@/lib/getAuthenticatedSpotifyApi";
import { Suspense } from "react";

export default async function Dashboard() {
  return (
    <main>
      <div className="grid grid-cols-1 lg:gap-4 lg:grid-cols-3">
        <Suspense fallback={<RecentlyPlayedSectionLoading />}>
          {/* @ts-expect-error Async Server Component */}
          <RecentlyPlayed />
        </Suspense>
        <Suspense fallback={<TopTracksSectionLoading />}>
          {/* @ts-expect-error Async Server Component */}
          <FeaturedTracks />
        </Suspense>
      </div>
      <Suspense fallback={<TopItemsLoading title="Top artists" />}>
        {/* @ts-expect-error Async Server Component */}
        <FeaturedArtists />
      </Suspense>
      <Suspense fallback={<TopItemsLoading title="Top albums" />}>
        {/* @ts-expect-error Async Server Component */}
        <FeaturedAlbums />
      </Suspense>
      <Suspense fallback={<TopGenresLoading />}>
        {/* @ts-expect-error Async Server Component */}
        <TopGenres />
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
  return <TopAlbumsSection data={data} albumsToShow={8} />;
}

async function RecentlyPlayed() {
  const data = await getRecentlyPlayedTracks();
  return <RecentlyPlayedSection tracks={data} />;
}

async function TopGenres() {
  const data = await getTopArtists();
  return <TopGenresSection artists={data} />;
}
