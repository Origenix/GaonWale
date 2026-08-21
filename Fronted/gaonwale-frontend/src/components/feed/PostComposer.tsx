import React from 'react';
import { Edit3, Image, Mic } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { useTheme } from '../../context/ThemeContext';
import { classNames } from '../../utils/helpers';
import { Link } from 'react-router-dom';

export const PostComposer: React.FC = () => {
  const { user } = useAuth();
  const { theme } = useTheme();

  return (
    <div className={classNames(
      "m-4 p-4 rounded-2xl shadow-sm border",
      theme === 'dark' ? "bg-[#151835] border-[#252952]" : "bg-white border-gray-200"
    )}>
      <div className="flex gap-3 mb-4">
        <img 
          src={user?.avatar || '/assets/avatars/default.png'} 
          alt="Avatar" 
          className="w-10 h-10 rounded-full object-cover" 
        />
        <div className="flex-1 bg-transparent">
          <Link to="/create" className={classNames(
            "w-full h-full flex items-center text-sm px-2",
            theme === 'dark' ? "text-gray-400" : "text-gray-500"
          )}>
            Aaj gaon mein kya chal raha hai? 😊
          </Link>
        </div>
      </div>
      
      <div className={classNames("h-px w-full mb-3", theme === 'dark' ? "bg-[#252952]" : "bg-gray-100")} />
      
      <div className="flex items-center justify-between px-2">
        <Link to="/create?type=text" className="flex items-center gap-2 text-sm font-medium text-[#7C3AED] hover:opacity-80 transition-opacity">
          <Edit3 size={18} />
          <span>Text</span>
        </Link>
        <Link to="/create?type=photo" className="flex items-center gap-2 text-sm font-medium text-emerald-500 hover:opacity-80 transition-opacity">
          <Image size={18} />
          <span>Photo</span>
        </Link>
        <Link to="/create?type=voice" className="flex items-center gap-2 text-sm font-medium text-orange-500 hover:opacity-80 transition-opacity">
          <Mic size={18} />
          <span>Voice</span>
        </Link>
      </div>
    </div>
  );
};
