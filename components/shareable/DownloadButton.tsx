"use client";

import { toPng } from "html-to-image";
import download from "downloadjs";

interface Props {
  elementId: string;
  filename?: string;
  label?: string;
}

export default function DownloadImageButton({
  elementId,
  filename = "unwrapped-share",
  label = "Download"
}: Props) {
  const onDownload = async () => {
    const element = document.getElementById(elementId);
    if (element) {
      var dataUrl = await toPng(element);
      download(dataUrl, `${filename}.png`);
    }
  };

  return (
    <button
      className="rounded-md font-bold bg-green-600 py-2 px-4 text-white"
      onClick={onDownload}
    >
      {label}
    </button>
  );
}
