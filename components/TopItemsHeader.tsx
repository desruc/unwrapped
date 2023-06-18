import type { ReactNode } from "react";
import { RangeButtonProps, RangeButtons } from "./RangeButtons";

interface Props extends RangeButtonProps {
  title?: string | ReactNode;
}

export function TopItemsHeader({ title, timeRange, setTimeRange }: Props) {
  const computedTitle =
    typeof title === "string" ? (
      <h2 className="text-2xl font-bold">{title}</h2>
    ) : (
      title
    );

  return (
    <div className="flex justify-between flex-wrap lg:flex-nowrap mb-4">
      {computedTitle}
      <RangeButtons timeRange={timeRange} setTimeRange={setTimeRange} />
    </div>
  );
}
