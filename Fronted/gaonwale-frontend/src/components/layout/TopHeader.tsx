import React from 'react';
import { Search, Bell, Menu } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { classNames } from '../../utils/helpers';
import { Link } from 'react-router-dom';

interface TopHeaderProps {
  onMenuClick?: () => void;
  title?: string;
  showSearch?: boolean;
}

export const TopHeader: React.FC<TopHeaderProps> = ({ onMenuClick, title, showSearch = true }) => {
  const { theme } = useTheme();

  return (
    <header className={classNames(
      "sticky top-0 z-40 w-full px-4 py-3 flex items-center justify-between border-b transition-colors",
      theme === 'dark' ? "bg-[#050711]/90 backdrop-blur-md border-[#252952]" : "bg-white/90 backdrop-blur-md border-gray-200"
    )}>
      <div className="flex items-center gap-3">
        <Link to="/home" className="flex items-center gap-2">
          <img src="/assets/logo/gaonwale-logo.png" alt="GaonWale" className="w-8 h-8 object-contain rounded-md" />
          {!title && (
            <span className={classNames(
              "font-bold text-xl tracking-tight",
              theme === 'dark' ? "text-white" : "text-gray-900"
            )}>
              GaonWale
            </span>
          )}
        </Link>
        {title && (
          <h1 className={classNames(
            "text-lg font-semibold ml-2",
            theme === 'dark' ? "text-white" : "text-gray-900"
          )}>
            {title}
          </h1>
        )}
      </div>

      <div className="flex items-center gap-4">
        {showSearch && (
          <button className={theme === 'dark' ? "text-gray-300 hover:text-white" : "text-gray-600 hover:text-gray-900"}>
            <Search size={22} />
          </button>
        )}
        <Link to="/notifications" className={classNames("relative", theme === 'dark' ? "text-gray-300 hover:text-white" : "text-gray-600 hover:text-gray-900")}>
          <Bell size={22} />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full border border-transparent">
            3
          </span>
        </Link>
        <button onClick={onMenuClick} className={classNames("md:hidden", theme === 'dark' ? "text-gray-300 hover:text-white" : "text-gray-600 hover:text-gray-900")}>
          <Menu size={24} />
        </button>
      </div>
    </header>
  );
};
