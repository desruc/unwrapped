import { TopItemsLoading } from "@/components/dashboard/TopItemsLoading";

export default async function TopArtistsLoading() {
  return (
    <main>
      <TopItemsLoading title="Top artists" items={16} />
    </main>
  );
}
