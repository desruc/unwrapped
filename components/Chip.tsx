interface Props {
  text: string;
  colorWeight?: 200 | 300 | 400 | 500 | 600 | 700 | 800;
  size?: "small" | "large";
}

export function Chip({ text, colorWeight = 500, size = "small" }: Props) {
  const py = size === "small" ? "py-2" : "py-4";
  const px = size === "small" ? "px-4" : "px-6";
  const textClass = size === "small" ? "text-sm" : "text-lg font-semibold";
  return (
    <div
      className={`[word-wrap: break-word] my-[5px] mr-4 flex h-[32px] items-center justify-between rounded-[16px] border border-green-${colorWeight} text-paragraph bg-[transparent] ${px} ${py} ${textClass}`}
    >
      {text}
    </div>
  );
}
