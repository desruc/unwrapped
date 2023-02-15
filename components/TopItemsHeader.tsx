import type { TimeRange } from "@/lib/getAuthenticatedSpotifyApi";
import clsx from "clsx";
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

  const getButtonClassName = (range: TimeRange) =>
    clsx("mx-1 tracking-wide font-semibold transition-colors hover:text-green-400", {
      "text-green-400": timeRange === range
    });

  return (
    <div className="flex justify-between mb-4">
      {computedTitle}
      <div className="flex items-center">
        <button
          onClick={() => setTimeRange("short")}
          className={getButtonClassName("short")}
        >
          short
        </button>
        |
        <button
          onClick={() => setTimeRange("medium")}
          className={getButtonClassName("medium")}
        >
          medium
        </button>
        |
        <button
          onClick={() => setTimeRange("long")}
          className={getButtonClassName("long")}
        >
          long
        </button>
      </div>
    </div>
  );
}
