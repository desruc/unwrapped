import { TopItemsLoading } from "@/components/dashboard/TopItemsLoading";

export default async function TopAlbumsLoading() {
  return (
    <main>
      <TopItemsLoading title="Top albums" items={16} />
    </main>
  );
}
