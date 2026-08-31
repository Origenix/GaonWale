import React from 'react';
import { mockStories } from '../../data/stories';
import { Plus } from 'lucide-react';
import { classNames, getRingColorClass } from '../../utils/helpers';
import { useTheme } from '../../context/ThemeContext';
import { useAuth } from '../../context/AuthContext';
import { Link } from 'react-router-dom';

export const StoryBar: React.FC = () => {
  const { theme } = useTheme();
  const { user } = useAuth();
  const storyBorder = theme === 'dark' ? 'border-[#252952]' : 'border-gray-100';

  return (
    <section className={classNames('w-full border-b', storyBorder)} aria-label="Stories">
      <div className="flex gap-3.5 overflow-x-auto px-4 py-3.5 hide-scrollbar">
        <Link to="/create?type=story" className="group flex w-[68px] shrink-0 flex-col items-center gap-1.5">
          <div className="relative h-[68px] w-[68px] rounded-full bg-gray-200 p-[2px] dark:bg-[#252952]">
            <div className="h-full w-full overflow-hidden rounded-full border-2 border-white bg-gray-100 dark:border-[#050711] dark:bg-[#151835]">
              <img src={user?.avatar || '/assets/avatars/default.png'} alt="Your Story" className="h-full w-full object-cover" />
            </div>
            <span className="absolute bottom-0 right-0 grid h-5 w-5 place-items-center rounded-full bg-gw-purple text-white ring-2 ring-white dark:ring-[#050711]">
              <Plus size={13} strokeWidth={3} />
            </span>
          </div>
          <span className="w-full truncate text-center text-[11px] font-medium text-gray-600 dark:text-gray-300">Your Story</span>
        </Link>

        {mockStories.filter(s => s.id !== 's0').map((story) => {
          const name = story.user.id.startsWith('a') ? (story.user as any).displayName : (story.user as any).fullName;
          return (
            <Link to={`/story/${story.id}`} key={story.id} className="flex w-[68px] shrink-0 flex-col items-center gap-1.5">
              <div className={classNames('h-[68px] w-[68px] rounded-full p-[2.5px]', !story.viewed ? getRingColorClass(story.colorRing) : 'bg-gray-300 dark:bg-[#252952]')}>
                <div className="h-full w-full overflow-hidden rounded-full border-2 border-white bg-gray-100 dark:border-[#050711] dark:bg-[#151835]">
                  <img src={story.thumbnail} alt={name} className="h-full w-full object-cover" />
                </div>
              </div>
              <span className="w-full truncate text-center text-[11px] font-medium text-gray-600 dark:text-gray-300">{name}</span>
            </Link>
          );
        })}
      </div>
    </section>
  );
};
