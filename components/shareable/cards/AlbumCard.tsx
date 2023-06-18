import { transformAlbumsToTopItems } from "utils/transformToTopItem";
import { AlbumItem } from "./AlbumItem";
import { ShareableCardBase, type ShareableCardBaseProps } from "./ShareableCardBase";

interface Props extends ShareableCardBaseProps {
  albums: SpotifyApi.AlbumObjectSimplified[];
}

export function AlbumCard({ elementId, user, range, albums }: Props) {
  const parsedAlbums = transformAlbumsToTopItems(albums);

  return (
    <ShareableCardBase
      elementId={elementId}
      title="Top Albums"
      user={user}
      range={range}
    >
      <div className="mb-2">
        <ul>
          {parsedAlbums.map((item) => (
            <AlbumItem
              key={item.id}
              artist={item.subtitle}
              album={item.title}
              image={item.imgSrc}
            />
          ))}
        </ul>
      </div>
    </ShareableCardBase>
  );
}
