import { TopItemsGridLoading } from "../TopItemsGrid";

interface Props {
  title: string;
}

export function TopItemsLoading({ title }: Props) {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <div className="rounded-lg bg-gray-800">
        <TopItemsGridLoading />
      </div>
    </section>
  );
}
