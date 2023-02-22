import { TopItemsGridLoading } from "../TopItemsGrid";

interface Props {
  title: string;
  items?: number;
}

export function TopItemsLoading({ title, items = 8 }: Props) {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <div className="rounded-lg bg-card-500">
        <TopItemsGridLoading items={items} />
      </div>
    </section>
  );
}
