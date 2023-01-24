import Image from "next/image";

export interface TopItem {
  id: string;
  title: string;
  imgSrc: string;
}

interface Props {
  items: TopItem[];
}

export function TopItemsGrid({ items }: Props) {
  return (
    <div className="p-2 grid grid-cols-2 lg:grid-cols-4 gap-2">
      {items.map((i) => (
        <ImageCard key={i.id} title={i.title} imgSrc={i.imgSrc} />
      ))}
    </div>
  );
}

interface ImageCardProps {
  title: string;
  imgSrc: string;
  href?: string;
}

function ImageCard({ title, imgSrc, href }: ImageCardProps) {
  return (
    <a className="relative" href={href} target="_blank" rel="noreferrer">
      <div className="absolute z-10 transition-all opacity-0 hover:opacity-100 h-full w-full p-2 flex items-end bg-black/50">
        <h3 className="text-2xl font-bold tracking-wide">{title}</h3>
      </div>
      <div className="h-[0px] pb-[100%] w-full">
        <div className="h-full w-full absolute">
          <Image
            alt={title}
            src={imgSrc}
            fill
            sizes="100%"
            style={{ objectFit: "cover" }}
            className="rounded-md"
          />
        </div>
      </div>
    </a>
  );
}

export function TopItemsGridLoading({ items = 8 }: { items?: number }) {
  return (
    <div className="p-2 grid grid-cols-2 lg:grid-cols-4 gap-2">
      {[...Array(items)].map((_, i) => (
        <div
          key={`loading-${i}`}
          className="h-[0px] pb-[100%] w-full bg-gray-400 rounded-md"
        />
      ))}
    </div>
  );
}
