import { type TimeRange } from "@/lib/getAuthenticatedSpotifyApi";
import clsx from "clsx";

export interface RangeButtonProps {
  timeRange: TimeRange;
  setTimeRange: (range: TimeRange) => void;
}

export function RangeButtons({ timeRange, setTimeRange }: RangeButtonProps) {
  const getButtonClassName = (range: TimeRange) =>
    clsx("mx-1 tracking-wide font-semibold transition-colors hover:text-green-500", {
      "text-green-500": timeRange === range
    });

  return (
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
  );
}
