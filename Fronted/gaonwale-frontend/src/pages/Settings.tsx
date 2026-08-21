import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { useAuth } from '../context/AuthContext';
import { classNames } from '../utils/helpers';
import { Moon, Sun, Settings as SettingsIcon, Bell, Shield, HelpCircle, LogOut, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const Settings: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const { logout, user } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const settingItems = [
    { icon: <Bell size={20} />, label: 'Notifications', description: 'Messages, tones' },
    { icon: <Shield size={20} />, label: 'Privacy & Security', description: 'Block, hide profile' },
    { icon: <HelpCircle size={20} />, label: 'Help & Support', description: 'FAQ, contact us' },
  ];

  return (
    <div className="flex w-full min-h-screen">
      <div className="flex-1 max-w-2xl mx-auto w-full md:border-x border-gray-200 dark:border-[#252952]">
        
        <div className={classNames(
          "sticky top-[60px] z-30 p-4 border-b flex items-center gap-2",
          theme === 'dark' ? "bg-[#050711]/90 backdrop-blur-md border-[#252952]" : "bg-white/90 backdrop-blur-md border-gray-200"
        )}>
          <SettingsIcon className="text-[#7C3AED]" />
          <h2 className="font-bold text-xl">Settings</h2>
        </div>

        <div className="p-4 space-y-6 pb-24">
          
          {/* Profile Quick Link */}
          <div className={classNames(
            "p-4 rounded-2xl flex items-center justify-between border cursor-pointer hover:shadow-md transition-shadow",
            theme === 'dark' ? "bg-[#151835] border-[#252952]" : "bg-white border-gray-200"
          )} onClick={() => navigate('/profile')}>
            <div className="flex items-center gap-3">
              <img src={user?.avatar || '/assets/avatars/default.png'} className="w-14 h-14 rounded-full object-cover" alt="Profile" />
              <div>
                <h3 className="font-bold text-lg">{user?.fullName}</h3>
                <p className="text-sm text-gray-500">Edit Profile</p>
              </div>
            </div>
            <ChevronRight className="text-gray-400" />
          </div>

          {/* Preferences */}
          <div>
            <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-3 px-2">Preferences</h3>
            <div className={classNames(
              "rounded-2xl border overflow-hidden",
              theme === 'dark' ? "bg-[#151835] border-[#252952]" : "bg-white border-gray-200"
            )}>
              <div className="p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {theme === 'dark' ? <Moon size={20} className="text-[#7C3AED]" /> : <Sun size={20} className="text-[#F97316]" />}
                  <div>
                    <h4 className="font-medium">Dark Mode</h4>
                    <p className="text-xs text-gray-500">Easier on the eyes</p>
                  </div>
                </div>
                
                {/* Toggle Switch */}
                <button 
                  onClick={toggleTheme}
                  className={classNames(
                    "w-12 h-6 rounded-full relative transition-colors duration-300",
                    theme === 'dark' ? "bg-[#7C3AED]" : "bg-gray-300"
                  )}
                >
                  <div className={classNames(
                    "absolute top-1 w-4 h-4 rounded-full bg-white transition-transform duration-300",
                    theme === 'dark' ? "left-7" : "left-1"
                  )} />
                </button>
              </div>
            </div>
          </div>

          {/* General */}
          <div>
            <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-3 px-2">General</h3>
            <div className={classNames(
              "rounded-2xl border overflow-hidden",
              theme === 'dark' ? "bg-[#151835] border-[#252952]" : "bg-white border-gray-200"
            )}>
              {settingItems.map((item, idx) => (
                <div key={idx} className={classNames(
                  "p-4 flex items-center justify-between cursor-pointer transition-colors",
                  theme === 'dark' ? "hover:bg-[#1C1F45]" : "hover:bg-gray-50",
                  idx !== settingItems.length - 1 ? (theme === 'dark' ? "border-b border-[#252952]" : "border-b border-gray-100") : ""
                )}>
                  <div className="flex items-center gap-3">
                    <div className="text-gray-500">{item.icon}</div>
                    <div>
                      <h4 className="font-medium">{item.label}</h4>
                      <p className="text-xs text-gray-500">{item.description}</p>
                    </div>
                  </div>
                  <ChevronRight className="text-gray-400" />
                </div>
              ))}
            </div>
          </div>

          {/* Danger Zone */}
          <button 
            onClick={handleLogout}
            className={classNames(
              "w-full p-4 rounded-2xl border flex items-center justify-center gap-2 font-bold text-red-500 hover:bg-red-50 transition-colors",
              theme === 'dark' ? "bg-[#151835] border-[#252952] hover:bg-red-900/20" : "bg-white border-gray-200"
            )}
          >
            <LogOut size={20} />
            Log Out
          </button>

          <p className="text-center text-xs text-gray-500 mt-8">
            GaonWale App v1.0.0
          </p>
        </div>
      </div>
    </div>
  );
};
