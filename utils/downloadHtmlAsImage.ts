import download from "downloadjs";
import { toPng } from "html-to-image";

export async function downloadHtmlAsImage(
  elementId: string,
  filename = "unwrapped"
) {
  const element = document.getElementById(elementId);
  if (element) {
    var dataUrl = await toPng(element);
    download(dataUrl, `${filename}.png`);
  }
}
