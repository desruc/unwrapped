import clsx from "clsx";

export type CardType = "summary" | "artists" | "albums" | "tracks";

export interface RangeButtonProps {
  cardType: CardType;
  setCardType: (cardType: CardType) => void;
  className?: string;
}

export function CardTypeButtons({ cardType, setCardType }: RangeButtonProps) {
  const getButtonClassName = (type: CardType) =>
    clsx("mx-1 tracking-wide font-semibold transition-colors hover:text-green-500", {
      "text-green-500": cardType === type
    });

  const buttons: CardType[] = ["summary", "artists", "albums", "tracks"];

  return (
    <div className="flex items-center mb-2">
      {buttons.map((type, idx) => (
        <>
          <button
            key={type}
            onClick={() => setCardType(type)}
            className={getButtonClassName(type)}
          >
            {type}
          </button>
          {idx != buttons.length - 1 && "|"}
        </>
      ))}
    </div>
  );
}
