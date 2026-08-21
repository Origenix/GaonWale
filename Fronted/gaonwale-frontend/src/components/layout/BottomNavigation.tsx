import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Flame, PlusCircle, MessageCircle, User } from 'lucide-react';
import { classNames } from '../../utils/helpers';
import { useTheme } from '../../context/ThemeContext';

export const BottomNavigation: React.FC = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames(
      "fixed bottom-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-3 pb-safe border-t md:hidden transition-colors",
      theme === 'dark' ? "bg-[#050711] border-[#252952]" : "bg-white border-gray-200"
    )}>
      <NavLink to="/home" className={({ isActive }) => classNames("flex flex-col items-center gap-1", isActive ? "text-[#7C3AED]" : "text-gray-400")}>
        <Home size={24} />
        <span className="text-[10px] font-medium">Home</span>
      </NavLink>

      <NavLink to="/trending" className={({ isActive }) => classNames("flex flex-col items-center gap-1", isActive ? "text-[#7C3AED]" : "text-gray-400")}>
        <Flame size={24} />
        <span className="text-[10px] font-medium">Trending</span>
      </NavLink>

      <NavLink to="/create" className="flex flex-col items-center justify-center -mt-8 relative">
        <div className="w-14 h-14 rounded-full bg-gradient-to-r from-[#7C3AED] via-[#C026D3] to-[#F97316] flex items-center justify-center shadow-[0_4px_20px_rgba(192,38,211,0.4)] text-white relative z-10 border-[4px] border-[#050711] dark:border-[#050711] light:border-white">
          <PlusCircle size={28} className="text-white" strokeWidth={2.5} />
        </div>
        <span className="text-[10px] font-medium mt-1 text-[#7C3AED]">Create</span>
      </NavLink>

      <NavLink to="/chat" className={({ isActive }) => classNames("flex flex-col items-center gap-1 relative", isActive ? "text-[#7C3AED]" : "text-gray-400")}>
        <div className="relative">
          <MessageCircle size={24} />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[9px] font-bold px-1.5 py-0.5 rounded-full border border-[#050711]">2</span>
        </div>
        <span className="text-[10px] font-medium">Chat</span>
      </NavLink>

      <NavLink to="/profile" className={({ isActive }) => classNames("flex flex-col items-center gap-1", isActive ? "text-[#7C3AED]" : "text-gray-400")}>
        <User size={24} />
        <span className="text-[10px] font-medium">Profile</span>
      </NavLink>
    </div>
  );
};
