import React, { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { useAuth } from "../context/AuthContext";
import { classNames } from "../utils/helpers";
import { aiMagicOptions, coinBalance } from "../data/coins";
import { AIMagicCard } from "../components/create/AIMagicCard";
import {
  X,
  MapPin,
  Image,
  Video,
  Mic,
  BarChart2,
  Edit3,
  ArrowRight,
  Sparkles,
  Megaphone,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export const Create: React.FC = () => {
  const { theme } = useTheme();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [content, setContent] = useState("");

  return (
    <div
      className={classNames(
        "min-h-screen pb-24 w-full md:max-w-2xl md:mx-auto md:border-x",
        theme === "dark"
          ? "bg-[#050711] border-[#252952]"
          : "bg-[#FAFAFE] border-gray-200",
      )}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-4 sticky top-[60px] z-30 bg-inherit backdrop-blur-md">
        <button
          onClick={() => navigate(-1)}
          className="p-2 -ml-2 rounded-full hover:bg-gray-100 dark:hover:bg-[#151835] transition-colors"
        >
          <X
            size={24}
            className={theme === "dark" ? "text-gray-300" : "text-gray-600"}
          />
        </button>
        <div className="flex flex-col items-center">
          <h2 className="font-bold text-lg">Create</h2>
          <p className="text-xs text-gray-500">
            Share your story, make people smile 😄
          </p>
        </div>
        <div className="flex items-center gap-1.5 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-500 px-3 py-1.5 rounded-full text-sm font-bold shadow-sm">
          🪙 {coinBalance}
        </div>
      </div>

      <div className="p-4 space-y-8">
        {/* Main Composer */}
        <div
          className={classNames(
            "rounded-[24px] p-5 shadow-sm border relative overflow-hidden",
            theme === "dark"
              ? "bg-[#151835] border-[#252952]"
              : "bg-white border-purple-100",
          )}
        >
          {/* Subtle gradient bg in light mode */}
          {theme === "light" && (
            <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 to-transparent pointer-events-none" />
          )}

          <div className="relative z-10 flex items-start gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center flex-shrink-0 text-[#7C3AED]">
              <Edit3 size={20} />
            </div>
            <div className="flex-1">
              <h3 className="font-bold">What's happening in your gaon?</h3>
              <p className="text-xs text-gray-500">
                Share something funny, interesting or important.
              </p>
            </div>
          </div>

          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Write your story here..."
            className="w-full min-h-[120px] bg-transparent resize-none outline-none text-sm relative z-10 placeholder-gray-400"
          />

          <div className="relative z-10 flex items-center justify-between border-t border-gray-100 dark:border-[#252952] pt-3 mb-4 mt-2">
            <button className="flex items-center gap-1 text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200">
              <MapPin size={16} className="text-[#F97316]" />
              {user?.village || "Rampur Gaon"}
            </button>
            <span className="text-xs text-gray-400">{content.length}/500</span>
          </div>

          <div className="relative z-10 grid grid-cols-4 gap-2">
            <button className="flex items-center justify-center gap-2 py-2.5 rounded-xl border border-gray-100 dark:border-[#252952] hover:bg-gray-50 dark:hover:bg-[#1C1F45] transition-colors">
              <Image size={18} className="text-emerald-500" />{" "}
              <span className="text-sm font-medium hidden sm:inline">
                Photo
              </span>
            </button>
            <button className="flex items-center justify-center gap-2 py-2.5 rounded-xl border border-gray-100 dark:border-[#252952] hover:bg-gray-50 dark:hover:bg-[#1C1F45] transition-colors">
              <Video size={18} className="text-[#7C3AED]" />{" "}
              <span className="text-sm font-medium hidden sm:inline">
                Video
              </span>
            </button>
            <button className="flex items-center justify-center gap-2 py-2.5 rounded-xl border border-gray-100 dark:border-[#252952] hover:bg-gray-50 dark:hover:bg-[#1C1F45] transition-colors">
              <Mic size={18} className="text-orange-500" />{" "}
              <span className="text-sm font-medium hidden sm:inline">
                Voice
              </span>
            </button>
            <button className="flex items-center justify-center gap-2 py-2.5 rounded-xl border border-gray-100 dark:border-[#252952] hover:bg-gray-50 dark:hover:bg-[#1C1F45] transition-colors">
              <BarChart2 size={18} className="text-pink-500" />{" "}
              <span className="text-sm font-medium hidden sm:inline">Poll</span>
            </button>
          </div>
        </div>

        {/* AI Magic Section */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold flex items-center gap-2">
              <Sparkles className="text-yellow-500" size={20} />
              AI Magic — Turn your story into fun
            </h3>
            <button className="text-[#3B82F6] text-sm font-medium flex items-center hover:underline">
              My Creations <ArrowRight size={16} />
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {aiMagicOptions.map((option) => (
              <AIMagicCard
                key={option.id}
                option={option}
                onClick={() => alert(`Opening AI Magic: ${option.title}`)}
              />
            ))}
          </div>
        </div>

        {/* Other Options */}
        <div>
          <h3 className="font-bold mb-4">Other Post Options</h3>
          <div className="flex gap-3 overflow-x-auto hide-scrollbar pb-2">
            {[
              {
                icon: <Edit3 size={24} />,
                label: "Text Post",
                color: "bg-[#7C3AED]",
              },
              {
                icon: <Image size={24} />,
                label: "Photo Post",
                color: "bg-emerald-500",
              },
              {
                icon: <Video size={24} />,
                label: "Video Post",
                color: "bg-[#C026D3]",
              },
              {
                icon: <Mic size={24} />,
                label: "Voice Post",
                color: "bg-orange-500",
              },
              {
                icon: <Megaphone size={24} />,
                label: "Announcement",
                color: "bg-blue-500",
              },
            ].map((opt, i) => (
              <button
                key={i}
                className={classNames(
                  "flex flex-col items-center justify-center p-3 w-[100px] flex-shrink-0 rounded-[16px] transition-colors border",
                  theme === "dark"
                    ? "bg-[#151835] border-[#252952] hover:bg-[#1C1F45]"
                    : "bg-white border-gray-100 hover:bg-gray-50",
                )}
              >
                <div
                  className={`w-12 h-12 rounded-2xl flex items-center justify-center text-white mb-2 shadow-sm ${opt.color}`}
                >
                  {opt.icon}
                </div>
                <span className="text-xs font-medium">{opt.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Daily Challenge */}
        <div className="w-full rounded-[20px] bg-gradient-to-r from-[#7C3AED] via-[#C026D3] to-[#F97316] p-[2px] shadow-lg">
          <div className="w-full h-full bg-[#151835] dark:bg-[#050711] rounded-[18px] p-4 flex items-center justify-between overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-r from-[#7C3AED]/20 to-transparent pointer-events-none"></div>

            <div className="flex items-center gap-4 relative z-10">
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-2xl backdrop-blur-md">
                🎁
              </div>
              <div>
                <h3 className="font-bold text-white mb-0.5">Daily Challenge</h3>
                <p className="text-xs text-white/80">
                  Participate in today's challenge and win coins!
                </p>
              </div>
            </div>

            <button className="bg-white text-gray-900 font-bold px-4 py-2 rounded-xl text-sm flex items-center gap-2 hover:bg-gray-100 transition-colors relative z-10">
              Join Now <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
