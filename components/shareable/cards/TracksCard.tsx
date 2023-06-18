import { Track } from "@/components/Track";
import { ShareableCardBase, type ShareableCardBaseProps } from "./ShareableCardBase";

interface Props extends ShareableCardBaseProps {
  tracks: SpotifyApi.TrackObjectFull[];
}

export function TracksCard({ elementId, user, range, tracks }: Props) {
  return (
    <ShareableCardBase
      elementId={elementId}
      title="Top Tracks"
      user={user}
      range={range}
    >
      <div className="mb-2">
        <ul>
          {tracks.map((item) => (
            <Track key={item.id} track={item} useImgTag />
          ))}
        </ul>
      </div>
    </ShareableCardBase>
  );
}
