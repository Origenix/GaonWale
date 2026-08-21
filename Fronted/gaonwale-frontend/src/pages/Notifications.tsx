import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { classNames } from '../utils/helpers';
import { mockNotifications } from '../data/notifications';
import { Bell, Heart, MessageCircle, UserPlus, Gift } from 'lucide-react';

export const Notifications: React.FC = () => {
  const { theme } = useTheme();

  const getIcon = (type: string) => {
    switch (type) {
      case 'like': return <Heart size={16} className="text-white" />;
      case 'comment': return <MessageCircle size={16} className="text-white" />;
      case 'follow': return <UserPlus size={16} className="text-white" />;
      case 'system': return <Gift size={16} className="text-white" />;
      default: return <Bell size={16} className="text-white" />;
    }
  };

  const getIconColor = (type: string) => {
    switch (type) {
      case 'like': return 'bg-red-500';
      case 'comment': return 'bg-blue-500';
      case 'follow': return 'bg-[#7C3AED]';
      case 'system': return 'bg-gradient-to-r from-yellow-400 to-orange-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="flex w-full min-h-screen">
      <div className="flex-1 max-w-2xl mx-auto w-full md:border-x border-gray-200 dark:border-[#252952]">
        
        <div className={classNames(
          "sticky top-[60px] z-30 p-4 border-b flex items-center justify-between",
          theme === 'dark' ? "bg-[#050711]/90 backdrop-blur-md border-[#252952]" : "bg-white/90 backdrop-blur-md border-gray-200"
        )}>
          <h2 className="font-bold text-xl flex items-center gap-2">
            <Bell className="text-[#F97316]" />
            Notifications
          </h2>
          <button className="text-sm font-medium text-[#7C3AED] hover:underline">
            Mark all as read
          </button>
        </div>

        <div className="pb-24">
          {mockNotifications.map(notif => (
            <div key={notif.id} className={classNames(
              "p-4 border-b flex items-start gap-4 transition-colors cursor-pointer hover:bg-gray-50 dark:hover:bg-[#151835]",
              theme === 'dark' ? "border-[#252952]" : "border-gray-100",
              !notif.isRead ? (theme === 'dark' ? "bg-[#151835]/50" : "bg-[#7C3AED]/5") : ""
            )}>
              <div className="relative">
                <img 
                  src={notif.user?.avatar || '/assets/avatars/default.png'} 
                  alt={notif.user?.fullName || 'User'} 
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className={classNames(
                  "absolute -bottom-1 -right-1 w-6 h-6 rounded-full flex items-center justify-center border-2",
                  getIconColor(notif.type),
                  theme === 'dark' ? "border-[#050711]" : "border-white"
                )}>
                  {getIcon(notif.type)}
                </div>
              </div>

              <div className="flex-1">
                <p className="text-sm text-gray-800 dark:text-gray-200">
                  <span className="font-bold">{notif.user?.fullName || 'Someone'}</span> {notif.content || notif.message}
                </p>
                <p className="text-xs text-gray-500 mt-1">{notif.timestamp}</p>
              </div>

              {!notif.isRead && (
                <div className="w-2 h-2 rounded-full bg-[#7C3AED] mt-2 flex-shrink-0" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
