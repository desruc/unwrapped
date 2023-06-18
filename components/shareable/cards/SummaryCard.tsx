import {
  transformAlbumsToTopItems,
  transformArtistsToTopItems
} from "utils/transformToTopItem";
import { Track } from "../../Track";
import { AlbumItem } from "./AlbumItem";
import { ArtistItem } from "./ArtistItem";
import { ShareableCardBase, type ShareableCardBaseProps } from "./ShareableCardBase";

interface Props extends ShareableCardBaseProps {
  artists: SpotifyApi.ArtistObjectFull[];
  albums: SpotifyApi.AlbumObjectSimplified[];
  tracks: SpotifyApi.TrackObjectFull[];
}

export function SummaryCard({
  elementId,
  user,
  range,
  artists,
  albums,
  tracks
}: Props) {
  const parsedArtists = transformArtistsToTopItems(artists);
  const parsedAlbums = transformAlbumsToTopItems(albums);

  return (
    <ShareableCardBase
      elementId={elementId}
      title="Spotify Summary"
      user={user}
      range={range}
    >
      <div className="mb-2">
        <h2 className="mb-2 font-bold">Artists:</h2>
        <ul>
          {parsedArtists.map((item, idx) => (
            <ArtistItem key={item.id} artist={item.title} image={item.imgSrc} />
          ))}
        </ul>
      </div>
      <div className="mb-2">
        <h2 className="mb-2 font-bold">Albums:</h2>
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
      <div className="mb-2">
        <h2 className="mb-2 font-bold">Tracks:</h2>
        <ul>
          {tracks.map((item, idx) => (
            <Track key={item.id} track={item} />
          ))}
        </ul>
      </div>
    </ShareableCardBase>
  );
}
