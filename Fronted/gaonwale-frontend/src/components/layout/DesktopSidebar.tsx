import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Flame, PlusCircle, MessageCircle, User, MapPin, Coins, Award, Bookmark, FileText, FileEdit, Users, UserPlus, ShoppingBag, Settings, HelpCircle, MessageSquare, Info, LogOut } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { classNames } from '../../utils/helpers';
import { useAuth } from '../../context/AuthContext';

export const DesktopSidebar: React.FC = () => {
  const { theme } = useTheme();
  const { user, logout } = useAuth();

  const menuItems = [
    { icon: <User size={20} />, label: 'My Profile', to: '/profile' },
    { icon: <MapPin size={20} />, label: 'My Village', to: '/home', extra: <span className="text-sm text-gw-purple font-medium">{user?.village || 'Rampur'}</span> },
    { icon: <Coins size={20} className="text-yellow-500" />, label: 'Coins Wallet', to: '/coins', extra: <span className="text-sm text-gw-purple font-bold">1,250</span> },
    { icon: <Award size={20} />, label: 'My Badges', to: '/badges' },
    { icon: <Bookmark size={20} />, label: 'Saved Posts', to: '/saved' },
    { icon: <FileText size={20} />, label: 'My Posts', to: '/my-posts' },
    { icon: <FileEdit size={20} />, label: 'Drafts', to: '/drafts' },
    { divider: true },
    { icon: <Users size={20} />, label: 'My Groups', to: '/communities' },
    { icon: <UserPlus size={20} />, label: 'Invite Friends', to: '/invite', extra: <span className="bg-[#7C3AED] text-white text-xs px-2 py-0.5 rounded-full">100</span> },
    { icon: <ShoppingBag size={20} />, label: 'GaonWale Shop', to: '/shop', extra: <span className="bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">New</span> },
    { divider: true },
    { icon: <Settings size={20} />, label: 'Settings', to: '/settings' },
    { icon: <HelpCircle size={20} />, label: 'Help & Support', to: '/help' },
    { icon: <MessageSquare size={20} />, label: 'Feedback', to: '/feedback' },
    { icon: <Info size={20} />, label: 'About GaonWale', to: '/about' },
  ];

  return (
    <aside className={classNames(
      "hidden md:flex flex-col w-64 h-[calc(100vh-60px)] sticky top-[60px] border-r overflow-y-auto hide-scrollbar transition-colors",
      theme === 'dark' ? "bg-[#050711] border-[#252952] text-gray-300" : "bg-white border-gray-200 text-gray-700"
    )}>
      {user && (
        <div className="p-4 flex items-center gap-3 mb-2">
          <img src={user.avatar} alt={user.fullName} className="w-12 h-12 rounded-full object-cover border-2 border-[#7C3AED]" />
          <div className="flex flex-col">
            <span className={classNames("font-bold text-sm", theme === 'dark' ? 'text-white' : 'text-gray-900')}>{user.fullName}</span>
            <span className="text-xs text-gray-500">@{user.username}</span>
          </div>
        </div>
      )}

      <nav className="flex-1 px-3 space-y-1">
        {/* Desktop Main Navigation */}
        <div className="mb-4 space-y-1 md:block hidden">
           <NavLink to="/home" className={({isActive}) => classNames("flex items-center gap-3 px-3 py-2.5 rounded-xl font-medium transition-colors", isActive ? "bg-[#7C3AED]/10 text-[#7C3AED]" : "hover:bg-gray-100 dark:hover:bg-[#151835]")}>
             <Home size={22} /> Home
           </NavLink>
           <NavLink to="/trending" className={({isActive}) => classNames("flex items-center gap-3 px-3 py-2.5 rounded-xl font-medium transition-colors", isActive ? "bg-[#7C3AED]/10 text-[#7C3AED]" : "hover:bg-gray-100 dark:hover:bg-[#151835]")}>
             <Flame size={22} /> Trending
           </NavLink>
           <NavLink to="/create" className={({isActive}) => classNames("flex items-center gap-3 px-3 py-2.5 rounded-xl font-medium transition-colors", isActive ? "bg-[#7C3AED]/10 text-[#7C3AED]" : "hover:bg-gray-100 dark:hover:bg-[#151835]")}>
             <PlusCircle size={22} /> Create
           </NavLink>
           <NavLink to="/chat" className={({isActive}) => classNames("flex items-center gap-3 px-3 py-2.5 rounded-xl font-medium transition-colors", isActive ? "bg-[#7C3AED]/10 text-[#7C3AED]" : "hover:bg-gray-100 dark:hover:bg-[#151835]")}>
             <MessageCircle size={22} /> Chat
           </NavLink>
        </div>

        {menuItems.map((item, index) => {
          if (item.divider) {
            return <div key={`div-${index}`} className={classNames("h-px my-2", theme === 'dark' ? "bg-[#252952]" : "bg-gray-200")} />;
          }

          return (
            <NavLink
              key={item.label}
              to={item.to || '#'}
              className={({ isActive }) => classNames(
                "flex items-center justify-between px-3 py-2.5 rounded-xl font-medium text-sm transition-colors",
                isActive ? "bg-[#7C3AED]/10 text-[#7C3AED]" : "hover:bg-gray-100 dark:hover:bg-[#151835]",
                theme === 'dark' ? "text-gray-300" : "text-gray-700"
              )}
            >
              <div className="flex items-center gap-3">
                {item.icon}
                <span>{item.label}</span>
              </div>
              {item.extra && <div>{item.extra}</div>}
            </NavLink>
          );
        })}

        <div className={classNames("h-px my-2", theme === 'dark' ? "bg-[#252952]" : "bg-gray-200")} />
        
        <button 
          onClick={logout}
          className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl font-medium text-sm text-red-500 hover:bg-red-50 dark:hover:bg-red-500/10 transition-colors"
        >
          <LogOut size={20} />
          <span>Logout</span>
        </button>
      </nav>
      
      <div className="p-4 text-center mt-auto">
        <p className="text-[10px] text-gray-500">© 2026 GaonWale App</p>
      </div>
    </aside>
  );
};
