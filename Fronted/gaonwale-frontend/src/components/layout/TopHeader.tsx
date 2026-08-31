import React from 'react';
import { Search, Heart } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { classNames } from '../../utils/helpers';
import { Link } from 'react-router-dom';

interface TopHeaderProps { onMenuClick?: () => void; title?: string; showSearch?: boolean; }

export const TopHeader: React.FC<TopHeaderProps> = ({ title, showSearch = true }) => {
  const { theme } = useTheme();

  return (
    <header className={classNames('sticky top-0 z-40 w-full border-b backdrop-blur-xl', theme === 'dark' ? 'bg-[#050711]/90 border-[#252952]' : 'bg-white/90 border-gray-100')}>
      <div className="mx-auto flex h-14 max-w-[630px] items-center justify-between px-4">
        <Link to="/home" aria-label="GaonWale home" className="flex items-center gap-2">
          <img src="/assets/logo/gaonwale-logo.png" alt="GaonWale" className="h-8 w-8 rounded-lg object-contain" />
          {!title && <span className={classNames('text-xl font-extrabold tracking-tight', theme === 'dark' ? 'text-white' : 'text-gray-900')}>GaonWale</span>}
          {title && <h1 className={classNames('ml-1 text-lg font-bold', theme === 'dark' ? 'text-white' : 'text-gray-900')}>{title}</h1>}
        </Link>

        <div className="flex items-center gap-1">
          {showSearch && <Link aria-label="Search" to="/search" className="grid h-10 w-10 place-items-center rounded-full text-gray-600 transition hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-[#151835]"><Search size={23} strokeWidth={2} /></Link>}
          <Link aria-label="Notifications" to="/notifications" className="relative grid h-10 w-10 place-items-center rounded-full text-gray-600 transition hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-[#151835]">
            <Heart size={23} strokeWidth={2} />
            <span className="absolute right-1 top-1 grid h-3.5 min-w-3.5 place-items-center rounded-full bg-red-500 px-0.5 text-[8px] font-bold text-white ring-2 ring-white dark:ring-[#050711]">3</span>
          </Link>
        </div>
      </div>
    </header>
  );
};
