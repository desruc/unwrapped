import { TopArtists } from "@/components/dashboard/TopArtists";
import { TopAlbums } from "@/components/dashboard/TopAlbums";

export default async function Dashboard() {
  return (
    <main>
      Dashboard
      <section className="mb-12">
        <h2>Top Artists</h2>
        <div className="rounded-lg bg-gray-800">
          {/* @ts-expect-error Async Server Component */}
          <TopArtists />
        </div>
      </section>
      <section>
        <h2>Top Albums</h2>
        <div className="rounded-lg bg-gray-800">
          {/* @ts-expect-error Async Server Component */}
          <TopAlbums maxAlbums={8} timeRange="longTerm" />
        </div>
      </section>
    </main>
  );
}
