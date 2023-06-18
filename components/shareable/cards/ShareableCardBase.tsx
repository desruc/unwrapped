import { type TimeRange } from "@/lib/getAuthenticatedSpotifyApi";
import { getCurrentDate } from "utils/getCurrentDate";

interface Props {
  elementId: string;
  title: string;
  user: SpotifyApi.CurrentUsersProfileResponse;
  children: React.ReactNode;
  range: TimeRange;
}

export type ShareableCardBaseProps = Omit<Props, "children" | "title">;

const rangeDescription: Record<TimeRange, string> = {
  short: "for the last 4 weeks",
  medium: "for the last 6 months",
  long: "for the last several years"
};

export function ShareableCardBase({
  elementId,
  user,
  title,
  range,
  children
}: Props) {
  return (
    <div id={elementId} className="w-[400px] rounded-md bg-card-500 px-4 py-2">
      <div className="text-center mb-2">
        <h2 className="font-bold text-lg">{title}</h2>
        <p className="text-sm text-paragraph-600">{rangeDescription[range]}</p>
      </div>
      {children}
      <div className="text-center mb-4">
        <p className="text-xs">Thanks for visiting</p>
        <p className="text-heading font-bold">unwrapped.jmscmrn.com</p>
        <p className="text-center text-xs">powered by Spotify</p>
      </div>
      <div className="text-xs flex justify-between">
        {user.display_name && <p>{user.display_name}</p>}
        <p>{getCurrentDate()}</p>
      </div>
    </div>
  );
}
