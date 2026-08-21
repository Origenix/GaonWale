import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';
import { classNames, formatNumber } from '../utils/helpers';
import { MapPin, Calendar, Edit3, Settings, Grid, Bookmark, Award, Shield } from 'lucide-react';
import { mockPosts } from '../data/posts';
import { PostCard } from '../components/feed/PostCard';

export const Profile: React.FC = () => {
  const { user } = useAuth();
  const { theme } = useTheme();
  const [activeTab, setActiveTab] = useState('Posts');

  if (!user) return null;

  const userPosts = mockPosts.filter(p => p.author.id === user.id);

  return (
    <div className="flex w-full min-h-screen">
      <div className="flex-1 max-w-3xl mx-auto w-full md:border-x border-gray-200 dark:border-[#252952] pb-20 md:pb-0">
        
        {/* Header/Cover */}
        <div className="relative h-48 md:h-64 bg-gradient-to-r from-[#7C3AED] via-[#C026D3] to-[#F97316]">
          {/* Cover Photo would go here if provided, fallback to gradient */}
          <div className="absolute top-4 right-4 flex gap-2">
            <button className="p-2 bg-black/30 backdrop-blur-md rounded-full text-white hover:bg-black/50 transition-colors">
              <Edit3 size={18} />
            </button>
            <button className="p-2 bg-black/30 backdrop-blur-md rounded-full text-white hover:bg-black/50 transition-colors">
              <Settings size={18} />
            </button>
          </div>
        </div>

        {/* Profile Info */}
        <div className={classNames("px-4 relative", theme === 'dark' ? "bg-[#050711]" : "bg-white")}>
          <div className="flex justify-between items-end -mt-12 md:-mt-16 mb-4">
            <div className="relative">
              <img 
                src={user.avatar} 
                alt={user.fullName} 
                className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover border-4 border-white dark:border-[#050711]"
              />
              <div className="absolute bottom-1 right-1 w-6 h-6 bg-blue-500 rounded-full border-2 border-white dark:border-[#050711] flex items-center justify-center">
                <Shield size={12} className="text-white" />
              </div>
            </div>
            <button className="px-6 py-2 rounded-full border-2 border-gray-200 dark:border-[#252952] font-bold text-sm hover:bg-gray-50 dark:hover:bg-[#151835] transition-colors mb-2 md:mb-4">
              Edit Profile
            </button>
          </div>

          <div className="mb-6">
            <h1 className="text-2xl font-bold">{user.fullName}</h1>
            <p className="text-gray-500 text-sm mb-3">@{user.username}</p>
            
            <p className="text-sm mb-4 max-w-lg">
              {user.bio}
            </p>

            <div className="flex flex-wrap gap-4 text-sm text-gray-500 font-medium">
              <div className="flex items-center gap-1.5">
                <MapPin size={16} className="text-[#F97316]" />
                {user.village}, {user.district}
              </div>
              <div className="flex items-center gap-1.5">
                <Calendar size={16} />
                Joined {user.joinedAt}
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="flex gap-6 py-4 border-y border-gray-200 dark:border-[#252952] mb-2">
            <div className="flex flex-col">
              <span className="font-bold text-lg">{formatNumber(user.followers)}</span>
              <span className="text-xs text-gray-500">Followers</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg">{formatNumber(user.following)}</span>
              <span className="text-xs text-gray-500">Following</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg text-yellow-500 flex items-center gap-1">🪙 1,250</span>
              <span className="text-xs text-gray-500">GaonWale Coins</span>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className={classNames(
          "flex sticky top-[60px] z-30 border-b",
          theme === 'dark' ? "bg-[#050711]/90 backdrop-blur-md border-[#252952]" : "bg-white/90 backdrop-blur-md border-gray-200"
        )}>
          {[
            { id: 'Posts', icon: <Grid size={18} /> },
            { id: 'Saved', icon: <Bookmark size={18} /> },
            { id: 'Badges', icon: <Award size={18} /> }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={classNames(
                "flex-1 flex items-center justify-center gap-2 py-4 text-sm font-bold transition-colors relative",
                activeTab === tab.id
                  ? (theme === 'dark' ? "text-white" : "text-gray-900")
                  : "text-gray-500 hover:bg-gray-50 dark:hover:bg-[#151835]"
              )}
            >
              {tab.icon}
              <span className="hidden sm:inline">{tab.id}</span>
              
              {activeTab === tab.id && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#7C3AED] to-[#F97316]" />
              )}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="bg-gray-50/50 dark:bg-transparent min-h-[50vh]">
          {activeTab === 'Posts' && (
            <div className="py-4 space-y-4">
              {userPosts.length > 0 ? (
                userPosts.map(post => <PostCard key={post.id} post={post} />)
              ) : (
                <div className="p-8 text-center text-gray-500">
                  <p>No posts yet.</p>
                </div>
              )}
            </div>
          )}
          
          {activeTab === 'Saved' && (
            <div className="p-8 text-center text-gray-500">
              <Bookmark size={48} className="mx-auto mb-4 opacity-20" />
              <p>Only you can see what you've saved</p>
            </div>
          )}

          {activeTab === 'Badges' && (
            <div className="p-8 grid grid-cols-3 md:grid-cols-4 gap-4">
              {[
                { name: 'Gaon Ka Star', icon: '🌟', desc: '10K Followers' },
                { name: 'Top Creator', icon: '🎨', desc: '100+ Posts' },
                { name: 'Helpful', icon: '🤝', desc: 'Active in community' }
              ].map((badge, i) => (
                <div key={i} className={classNames(
                  "p-4 rounded-2xl flex flex-col items-center text-center border shadow-sm",
                  theme === 'dark' ? "bg-[#151835] border-[#252952]" : "bg-white border-gray-200"
                )}>
                  <div className="text-4xl mb-2">{badge.icon}</div>
                  <h4 className="font-bold text-sm">{badge.name}</h4>
                  <p className="text-[10px] text-gray-500 mt-1">{badge.desc}</p>
                </div>
              ))}
            </div>
          )}
        </div>
        
      </div>
    </div>
  );
};
