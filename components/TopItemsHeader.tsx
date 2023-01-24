import type { TimeRange } from "@/lib/getAuthenticatedSpotifyApi";

export function TopItemsHeader({
  title,
  timeRange,
  setTimeRange
}: {
  title: string;
  timeRange: TimeRange;
  setTimeRange: (range: TimeRange) => void;
}) {
  return (
    <div className="flex justify-between">
      <h2 className="text-2xl font-bold">{title}</h2>
      <div>
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
