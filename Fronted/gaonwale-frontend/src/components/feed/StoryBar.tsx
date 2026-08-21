import React from 'react';
import { mockStories } from '../../data/stories';
import { Plus } from 'lucide-react';
import { classNames, getRingColorClass } from '../../utils/helpers';
import { useTheme } from '../../context/ThemeContext';
import { useAuth } from '../../context/AuthContext';

export const StoryBar: React.FC = () => {
  const { theme } = useTheme();
  const { user } = useAuth();

  return (
    <div className={classNames(
      "w-full py-4 border-b overflow-hidden",
      theme === 'dark' ? "border-[#252952]" : "border-gray-200"
    )}>
      <div className="flex gap-4 px-4 overflow-x-auto hide-scrollbar pb-2">
        {/* Current User Add Story */}
        <div className="flex flex-col items-center gap-1.5 flex-shrink-0 cursor-pointer">
          <div className="relative w-16 h-16 rounded-full p-[2px] bg-gray-200 dark:bg-[#252952]">
            <div className="w-full h-full rounded-full border-2 border-white dark:border-[#050711] overflow-hidden">
              <img 
                src={user?.avatar || '/assets/avatars/default.png'} 
                alt="Your Story" 
                className="w-full h-full object-cover" 
              />
            </div>
            <div className="absolute bottom-0 right-0 w-5 h-5 bg-[#7C3AED] rounded-full border-2 border-white dark:border-[#050711] flex items-center justify-center">
              <Plus size={12} className="text-white" />
            </div>
          </div>
          <span className={classNames(
            "text-xs font-medium w-16 text-center truncate",
            theme === 'dark' ? "text-gray-300" : "text-gray-700"
          )}>
            Your Story
          </span>
        </div>

        {/* Stories */}
        {mockStories.filter(s => s.id !== 's0').map((story) => (
          <div key={story.id} className="flex flex-col items-center gap-1.5 flex-shrink-0 cursor-pointer">
            <div className={classNames(
              "w-16 h-16 rounded-full p-[2px]",
              !story.viewed ? getRingColorClass(story.colorRing) : "bg-gray-300 dark:bg-[#252952]"
            )}>
              <div className="w-full h-full rounded-full border-2 border-white dark:border-[#050711] overflow-hidden">
                <img 
                  src={story.thumbnail} 
                  alt={story.user.id.startsWith('a') ? (story.user as any).displayName : (story.user as any).fullName} 
                  className="w-full h-full object-cover" 
                />
              </div>
            </div>
            <span className={classNames(
              "text-xs font-medium w-16 text-center truncate",
              theme === 'dark' ? "text-gray-300" : "text-gray-700"
            )}>
              {story.user.id.startsWith('a') ? (story.user as any).displayName : (story.user as any).fullName}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
