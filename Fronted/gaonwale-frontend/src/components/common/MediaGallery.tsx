import React from "react";
import { mediaItems } from "../../data/media";
import { classNames } from "../../utils/helpers";

export const MediaGallery: React.FC = () => {
  const featured = mediaItems.slice(0, 4);

  return (
    <div className="rounded-2xl p-4 border shadow-sm bg-white dark:bg-[#151835] border-gray-200 dark:border-[#252952]">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="font-bold">GaonWale Moments</h3>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            Live snapshots from the media folder, refreshed automatically.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2">
        {featured.map((item) => (
          <div
            key={item.id}
            className={classNames(
              "rounded-2xl overflow-hidden border border-gray-100 dark:border-[#252952]",
              "bg-gray-50 dark:bg-[#0D1133]",
            )}
          >
            <img
              src={item.src}
              alt={item.alt}
              className="w-full h-28 object-cover transition-transform duration-300 hover:scale-105"
            />
            <div className="p-2">
              <p className="text-xs font-semibold text-gray-700 dark:text-gray-200 truncate">
                {item.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
