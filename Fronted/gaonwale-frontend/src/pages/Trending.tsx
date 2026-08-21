import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { classNames } from '../utils/helpers';
import { trendingPosts, trendingHashtags, trendingTabs } from '../data/trending';
import { PostCard } from '../components/feed/PostCard';
import { ArrowRight, ChevronRight, Flame } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Trending: React.FC = () => {
  const { theme } = useTheme();
  const [activeTab, setActiveTab] = useState('Trending');

  return (
    <div className="flex w-full">
      <div className="flex-1 max-w-2xl mx-auto w-full border-r-0 md:border-r border-gray-200 dark:border-[#252952] min-h-screen">
        
        {/* Tabs */}
        <div className={classNames(
          "w-full overflow-x-auto hide-scrollbar border-b sticky top-[60px] z-30",
          theme === 'dark' ? "bg-[#050711]/90 backdrop-blur-md border-[#252952]" : "bg-white/90 backdrop-blur-md border-gray-200"
        )}>
          <div className="flex px-2">
            {trendingTabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={classNames(
                  "px-4 py-3 text-sm font-medium whitespace-nowrap transition-colors relative",
                  activeTab === tab 
                    ? (theme === 'dark' ? "text-white" : "text-gray-900") 
                    : (theme === 'dark' ? "text-gray-400 hover:text-gray-200" : "text-gray-500 hover:text-gray-700")
                )}
              >
                {tab}
                {activeTab === tab && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#7C3AED] to-[#F97316]" />
                )}
              </button>
            ))}
          </div>
        </div>

        <div className="p-4 space-y-6 pb-24">
          
          {/* Hero Banner */}
          <div className="w-full rounded-2xl overflow-hidden relative shadow-lg group cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-r from-[#C026D3]/80 to-transparent z-10 p-5 flex flex-col justify-between">
              <div>
                <span className="flex items-center gap-1.5 text-xs font-bold text-white uppercase tracking-wider bg-white/20 backdrop-blur-sm w-max px-2.5 py-1 rounded-full mb-2">
                  <Flame size={14} className="text-yellow-400" />
                  Today's Trending
                </span>
                <h2 className="text-2xl font-bold text-white leading-tight max-w-[60%]">
                  Kaka Ji vs Google Maps 😂
                </h2>
              </div>
              <button className="flex items-center gap-2 bg-white text-gray-900 px-4 py-2 rounded-xl text-sm font-bold w-max hover:bg-gray-100 transition-colors">
                See Full Story <ArrowRight size={16} />
              </button>
            </div>
            <img 
              src="/assets/posts/kakaji-google-maps.jpg" 
              alt="Trending Hero" 
              className="w-full h-48 object-cover object-right group-hover:scale-105 transition-transform duration-700" 
            />
          </div>

          {/* Trending Posts List */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold flex items-center gap-2 text-lg">
                <Flame className="text-[#F97316]" size={20} />
                Top Trending Posts
              </h3>
              <Link to="/search" className="text-[#7C3AED] text-sm font-medium flex items-center hover:underline">
                View All <ChevronRight size={16} />
              </Link>
            </div>
            
            <div className="space-y-4">
              {trendingPosts.map((post, index) => (
                <PostCard key={post.id} post={post} rank={index + 1} />
              ))}
            </div>
          </div>

          {/* Trending Hashtags */}
          <div className="pt-4 border-t border-gray-200 dark:border-[#252952]">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold flex items-center gap-2 text-lg">
                <Flame className="text-[#F97316]" size={20} />
                Trending Hashtags
              </h3>
              <Link to="/search" className="text-[#7C3AED] text-sm font-medium flex items-center hover:underline">
                View All <ChevronRight size={16} />
              </Link>
            </div>
            
            <div className="grid grid-cols-2 gap-3">
              {trendingHashtags.map((hashtag) => (
                <div key={hashtag.id} className={classNames(
                  "p-3 rounded-xl flex items-center gap-3 border transition-colors cursor-pointer",
                  theme === 'dark' ? "bg-[#151835] border-[#252952] hover:bg-[#1C1F45]" : "bg-white border-gray-200 hover:bg-gray-50"
                )}>
                  <img src={hashtag.avatar} alt={hashtag.tag} className="w-10 h-10 rounded-full object-cover border border-gray-200 dark:border-gray-700" />
                  <div className="flex flex-col truncate">
                    <span className="font-bold text-sm truncate">{hashtag.tag}</span>
                    <span className="text-xs text-gray-500">{hashtag.posts}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
      
      {/* Desktop Right Sidebar Spacer (Empty for this design, or reuse components from Home) */}
      <div className="hidden lg:block w-80 p-6 flex-shrink-0" />
    </div>
  );
};
