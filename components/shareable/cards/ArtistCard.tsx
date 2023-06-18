import { transformArtistsToTopItems } from "utils/transformToTopItem";
import { ArtistItem } from "./ArtistItem";
import { ShareableCardBase, type ShareableCardBaseProps } from "./ShareableCardBase";

interface Props extends ShareableCardBaseProps {
  artists: SpotifyApi.ArtistObjectFull[];
}

export function ArtistCard({ elementId, user, range, artists }: Props) {
  const parsedArtists = transformArtistsToTopItems(artists);

  return (
    <ShareableCardBase
      elementId={elementId}
      title="Top Artists"
      user={user}
      range={range}
    >
      <div className="mb-2">
        <ul>
          {parsedArtists.map((item) => (
            <ArtistItem key={item.id} artist={item.title} image={item.imgSrc} />
          ))}
        </ul>
      </div>
    </ShareableCardBase>
  );
}
