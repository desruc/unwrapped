import type { TimeRange } from "@/lib/getAuthenticatedSpotifyApi";
import type { ReactNode } from "react";

interface Props {
  title?: string | ReactNode;
  timeRange: TimeRange;
  setTimeRange: (range: TimeRange) => void;
}

export function TopItemsHeader({ title, timeRange, setTimeRange }: Props) {
  const computedTitle =
    typeof title === "string" ? (
      <h2 className="text-2xl font-bold">{title}</h2>
    ) : (
      title
    );

  return (
    <div className="flex justify-between mb-4">
      {computedTitle}
      <div className="flex items-center">
        <button
          onClick={() => setTimeRange("short")}
          className={timeRange === "short" ? "font-bold" : ""}
        >
          short
        </button>
        <button
          onClick={() => setTimeRange("medium")}
          className={timeRange === "medium" ? "font-bold" : ""}
        >
          medium
        </button>
        <button
          onClick={() => setTimeRange("long")}
          className={timeRange === "long" ? "font-bold" : ""}
        >
          long
        </button>
      </div>
    </div>
  );
}
