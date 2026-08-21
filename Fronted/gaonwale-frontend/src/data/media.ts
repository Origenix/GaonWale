export interface MediaItem {
  id: string;
  title: string;
  alt: string;
  src: string;
}

const rawMedia = import.meta.glob("../assets/media/*.{png,jpg,jpeg,webp}", {
  eager: true,
  as: "url",
}) as Record<string, string>;

const createTitle = (fileName: string): string => {
  const name = fileName.replace(/\.(png|jpe?g|webp)$/i, "");
  return name
    .replace(/[-_]/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase())
    .trim();
};

export const mediaItems: MediaItem[] = Object.entries(rawMedia).map(
  ([filePath, src]) => {
    const fileName = filePath.split("/").pop()?.split("\\").pop() ?? filePath;
    const title = createTitle(fileName);
    return {
      id: title.toLowerCase().replace(/[^a-z0-9]+/gi, "-"),
      title,
      alt: `GaonWale media: ${title}`,
      src,
    };
  },
);
