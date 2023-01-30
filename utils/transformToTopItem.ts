import { sortBy } from "lodash";

export function transformToTopItem<
  T extends { id: string; name: string; images: SpotifyApi.ImageObject[] }
>(data: T[], hrefBase?: string) {
  return data.map((d) => {
    const sortedImages = sortBy(d.images, "height");

    return {
      id: d.id,
      title: d.name,
      imgSrc: sortedImages[sortedImages.length - 1].url,
      href: hrefBase ? `${hrefBase}/${d.id}` : undefined
    };
  });
}
