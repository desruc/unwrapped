export function transformToTopItem<
  T extends { id: string; name: string; images: SpotifyApi.ImageObject[] }
>(data: T[], hrefBase?: string) {
  return data.map((d) => ({
    id: d.id,
    title: d.name,
    imgSrc: d.images[0].url,
    href: hrefBase ? `${hrefBase}/${d.id}` : undefined
  }));
}
