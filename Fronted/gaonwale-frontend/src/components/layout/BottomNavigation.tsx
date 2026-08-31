import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Flame, Plus, MessageCircle, User } from 'lucide-react';
import { classNames } from '../../utils/helpers';
import { useTheme } from '../../context/ThemeContext';

export const BottomNavigation: React.FC = () => {
  const { theme } = useTheme();
  const inactive = theme === 'dark' ? 'text-gray-400' : 'text-gray-500';
  const active = 'text-gw-purple';

  return (
    <nav
      aria-label="Primary mobile navigation"
      className={classNames(
        'fixed inset-x-0 bottom-0 z-50 md:hidden border-t backdrop-blur-xl bg-opacity-95',
        'px-5 pt-2 pb-[calc(0.5rem+env(safe-area-inset-bottom))]',
        theme === 'dark' ? 'bg-[#050711]/95 border-[#252952]' : 'bg-white/95 border-gray-200'
      )}
    >
      <div className="mx-auto flex max-w-md items-center justify-between">
        <NavLink aria-label="Home" to="/home" className={({ isActive }) => classNames('grid h-10 w-10 place-items-center transition-transform active:scale-90', isActive ? active : inactive)}>
          {({ isActive }) => <Home size={25} strokeWidth={isActive ? 2.4 : 2} fill={isActive ? 'currentColor' : 'none'} />}
        </NavLink>
        <NavLink aria-label="Trending" to="/trending" className={({ isActive }) => classNames('grid h-10 w-10 place-items-center transition-transform active:scale-90', isActive ? active : inactive)}>
          <Flame size={25} strokeWidth={2} />
        </NavLink>
        <NavLink aria-label="Create" to="/create" className="grid h-10 w-10 place-items-center rounded-xl text-gw-purple transition-transform active:scale-90">
          <span className="grid h-8 w-8 place-items-center rounded-lg border-2 border-current">
            <Plus size={22} strokeWidth={2.3} />
          </span>
        </NavLink>
        <NavLink aria-label="Chat" to="/chat" className={({ isActive }) => classNames('relative grid h-10 w-10 place-items-center transition-transform active:scale-90', isActive ? active : inactive)}>
          <MessageCircle size={25} strokeWidth={2} />
          <span className="absolute right-0.5 top-0.5 grid h-4 min-w-4 place-items-center rounded-full bg-red-500 px-1 text-[9px] font-bold text-white ring-2 ring-white dark:ring-[#050711]">2</span>
        </NavLink>
        <NavLink aria-label="Profile" to="/profile" className={({ isActive }) => classNames('grid h-10 w-10 place-items-center transition-transform active:scale-90', isActive ? active : inactive)}>
          {({ isActive }) => <User size={25} strokeWidth={isActive ? 2.4 : 2} fill={isActive ? 'currentColor' : 'none'} />}
        </NavLink>
      </div>
    </nav>
  );
};
