import React from "react";
import { StoryBar } from "../components/feed/StoryBar";
import { PostComposer } from "../components/feed/PostComposer";
import { PostCard } from "../components/feed/PostCard";
import { MediaGallery } from "../components/common/MediaGallery";
import { mockPosts } from "../data/posts";
import { useTheme } from "../context/ThemeContext";
import { classNames } from "../utils/helpers";
import { Users, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

export const Home: React.FC = () => {
  const { theme } = useTheme();

  return (
    <div className="flex w-full">
      {/* Main Feed Column */}
      <div className="flex-1 max-w-2xl mx-auto w-full border-r-0 md:border-r border-gray-200 dark:border-[#252952] min-h-screen">
        <StoryBar />
        <PostComposer />

        <div className="px-4 md:px-0 mb-6">
          <div
            className={classNames(
              "rounded-3xl p-5 shadow-sm",
              theme === "dark"
                ? "bg-[#151835] border border-[#252952]"
                : "bg-white border border-gray-200",
            )}
          >
            <h2 className="font-bold text-xl mb-2">
              Latest from GaonWale media
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              These snapshots are pulled directly from the app's media folder so
              your screen always feels lively and real.
            </p>
          </div>
        </div>

        <MediaGallery />

        <div className="pb-10">
          {mockPosts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </div>

      {/* Desktop Right Sidebar (Suggested content) */}
      <div className="hidden lg:block w-80 p-6 flex-shrink-0">
        <div
          className={classNames(
            "rounded-2xl p-4 border shadow-sm mb-6",
            theme === "dark"
              ? "bg-[#151835] border-[#252952]"
              : "bg-white border-gray-200",
          )}
        >
          <h3 className="font-bold mb-4 flex items-center gap-2">
            <TrendingUp size={18} className="text-[#F97316]" />
            Trending near you
          </h3>
          <div className="space-y-4">
            <Link
              to="/trending"
              className="flex flex-col gap-1 hover:opacity-80 transition-opacity"
            >
              <span className="text-sm font-semibold">#KakaJiKiComedy</span>
              <span className="text-xs text-gray-500">12.4K posts</span>
            </Link>
            <Link
              to="/trending"
              className="flex flex-col gap-1 hover:opacity-80 transition-opacity"
            >
              <span className="text-sm font-semibold">#RampurMela</span>
              <span className="text-xs text-gray-500">8.2K posts</span>
            </Link>
          </div>
        </div>

        <div
          className={classNames(
            "rounded-2xl p-4 border shadow-sm",
            theme === "dark"
              ? "bg-[#151835] border-[#252952]"
              : "bg-white border-gray-200",
          )}
        >
          <h3 className="font-bold mb-4 flex items-center gap-2">
            <Users size={18} className="text-[#7C3AED]" />
            People you may know
          </h3>
          <div className="space-y-4">
            {/* Suggested user mock */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <img
                  src="/assets/avatars/rajesh.jpg"
                  className="w-10 h-10 rounded-full object-cover"
                  alt="Rajesh"
                />
                <div className="flex flex-col">
                  <span className="text-sm font-bold">Rajesh Patel</span>
                  <span className="text-xs text-gray-500">Rampur Gaon</span>
                </div>
              </div>
              <button className="text-xs font-bold text-[#3B82F6] bg-blue-50 dark:bg-blue-900/30 px-3 py-1.5 rounded-full">
                Add
              </button>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <img
                  src="/assets/avatars/suman.jpg"
                  className="w-10 h-10 rounded-full object-cover"
                  alt="Suman"
                />
                <div className="flex flex-col">
                  <span className="text-sm font-bold">Suman Devi</span>
                  <span className="text-xs text-gray-500">Rampur Gaon</span>
                </div>
              </div>
              <button className="text-xs font-bold text-[#3B82F6] bg-blue-50 dark:bg-blue-900/30 px-3 py-1.5 rounded-full">
                Add
              </button>
            </div>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-2 text-xs text-gray-500">
          <Link to="/about" className="hover:underline">
            About
          </Link>{" "}
          •
          <Link to="/help" className="hover:underline">
            Help
          </Link>{" "}
          •
          <Link to="/settings" className="hover:underline">
            Privacy
          </Link>{" "}
          •<span>© 2026 GaonWale</span>
        </div>
      </div>
    </div>
  );
};
