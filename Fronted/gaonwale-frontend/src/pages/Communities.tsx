import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { classNames, formatNumber } from '../utils/helpers';
import { mockCommunities } from '../data/communities';
import { Users, Search, Plus, MapPin } from 'lucide-react';

export const Communities: React.FC = () => {
  const { theme } = useTheme();

  return (
    <div className="flex w-full min-h-screen">
      <div className="flex-1 max-w-3xl mx-auto w-full md:border-x border-gray-200 dark:border-[#252952]">
        
        {/* Header */}
        <div className={classNames(
          "sticky top-[60px] z-30 p-4 border-b flex items-center justify-between",
          theme === 'dark' ? "bg-[#050711]/90 backdrop-blur-md border-[#252952]" : "bg-white/90 backdrop-blur-md border-gray-200"
        )}>
          <div>
            <h2 className="font-bold text-xl flex items-center gap-2">
              <Users className="text-[#7C3AED]" />
              Communities
            </h2>
            <p className="text-xs text-gray-500">Connect with your gaon & district</p>
          </div>
          <button className="bg-gradient-to-r from-[#7C3AED] to-[#F97316] text-white px-4 py-2 rounded-xl text-sm font-bold flex items-center gap-1.5 shadow-md hover:opacity-90 transition-opacity">
            <Plus size={18} />
            Create
          </button>
        </div>

        {/* Search */}
        <div className="p-4 bg-gray-50 dark:bg-transparent">
          <div className={classNames(
            "flex items-center px-4 py-3 rounded-xl border shadow-sm",
            theme === 'dark' ? "bg-[#151835] border-[#252952]" : "bg-white border-gray-200"
          )}>
            <Search size={20} className="text-gray-400 mr-2" />
            <input 
              type="text" 
              placeholder="Find your village group..."
              className="bg-transparent border-none outline-none w-full text-sm placeholder-gray-500"
            />
          </div>
        </div>

        {/* Communities List */}
        <div className="p-4 space-y-4 pb-24">
          {mockCommunities.map((community) => (
            <div key={community.id} className={classNames(
              "rounded-2xl border overflow-hidden shadow-sm hover:shadow-md transition-shadow",
              theme === 'dark' ? "bg-[#151835] border-[#252952]" : "bg-white border-gray-200"
            )}>
              {/* Banner */}
              <div className="h-24 w-full relative">
                <img src={community.banner} alt="Banner" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              
              <div className="px-4 pb-4 relative">
                {/* Avatar */}
                <div className="absolute -top-10 left-4">
                  <img 
                    src={community.avatar} 
                    alt={community.name} 
                    className="w-20 h-20 rounded-2xl object-cover border-4 border-white dark:border-[#151835] bg-white dark:bg-[#151835]" 
                  />
                </div>

                {/* Join Button */}
                <div className="flex justify-end pt-3">
                  <button className={classNames(
                    "px-6 py-1.5 rounded-full text-sm font-bold border-2 transition-colors",
                    community.isJoined 
                      ? "border-gray-200 text-gray-500 dark:border-[#252952] dark:text-gray-400" 
                      : "border-[#7C3AED] text-[#7C3AED] hover:bg-[#7C3AED]/10"
                  )}>
                    {community.isJoined ? 'Joined' : 'Join'}
                  </button>
                </div>

                <div className="mt-2">
                  <div className="flex items-center gap-2">
                    <h3 className="font-bold text-lg">{community.name}</h3>
                    {community.isVerified && (
                      <span className="bg-blue-500 text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">✓</span>
                    )}
                  </div>
                  
                  <div className="flex items-center gap-4 text-xs text-gray-500 mt-1 mb-3 font-medium">
                    <span className="flex items-center gap-1">
                      <Users size={14} />
                      {formatNumber(community.members)} members
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin size={14} className="text-[#F97316]" />
                      {community.location}
                    </span>
                  </div>

                  <p className={classNames("text-sm", theme === 'dark' ? "text-gray-300" : "text-gray-600")}>
                    {community.description}
                  </p>
                </div>
                
                {/* Active Members Preview */}
                <div className="mt-4 flex items-center gap-2 pt-4 border-t border-gray-100 dark:border-[#252952]">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map(i => (
                      <img key={i} src={`/assets/avatars/default.png`} className="w-6 h-6 rounded-full border border-white dark:border-[#151835] bg-gray-200" alt="Member" />
                    ))}
                  </div>
                  <span className="text-xs text-gray-500">12 members active now</span>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
