import { TopArtists } from "@/components/dashboard/TopArtists";

export default async function Dashboard() {
  return (
    <main>
      Dashboard
      {/* @ts-expect-error Async Server Component */}
      <TopArtists />
    </main>
  );
}
