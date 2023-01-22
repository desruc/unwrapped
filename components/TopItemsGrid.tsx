import Image from "next/image";

interface TopItem {
  id: string;
  title: string;
  imgSrc: string;
}

interface Props {
  items: TopItem[];
}

export function TopItemsGrid({ items }: Props) {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
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
            style={{ objectFit: "cover" }}
            className="rounded-md"
          />
        </div>
      </div>
    </a>
  );
}
