import React from 'react';
import type { AIMagicOption } from '../../types';
import { classNames } from '../../utils/helpers';
import { useTheme } from '../../context/ThemeContext';

interface AIMagicCardProps {
  option: AIMagicOption;
  onClick: () => void;
}

export const AIMagicCard: React.FC<AIMagicCardProps> = ({ option, onClick }) => {
  const { theme } = useTheme();

  return (
    <button 
      onClick={onClick}
      className={classNames(
        "flex flex-col items-center justify-center p-4 rounded-[20px] text-center transition-all hover:scale-[1.02] active:scale-95 shadow-sm border",
        theme === 'dark' ? "bg-[#151835] border-[#252952]" : "bg-white border-transparent bg-gradient-to-br"
      )}
      style={{
        ...(theme === 'light' ? { background: `linear-gradient(to bottom right, var(--tw-gradient-stops))` } : {})
      }}
    >
      <div className={theme === 'light' ? option.gradient.split(' ').map(c => `var(--${c})`).join(' ') : ''}></div>
      <div className={classNames(
        "w-14 h-14 rounded-full flex items-center justify-center text-3xl mb-3 shadow-sm",
        theme === 'dark' ? "bg-[#1C1F45]" : "bg-white/80 backdrop-blur-sm"
      )}>
        {option.icon}
      </div>
      
      <h4 className={classNames("font-bold text-sm mb-1", theme === 'dark' ? "text-white" : "text-gray-900")}>
        {option.title}
      </h4>
      
      <p className="text-[10px] text-gray-500 mb-3 leading-snug h-8 flex items-center justify-center">
        {option.description}
      </p>
      
      <div className="flex items-center justify-center gap-1.5 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-500 px-3 py-1 rounded-full text-xs font-bold w-max mx-auto">
        <span>🪙</span> {option.coinCost}
      </div>
    </button>
  );
};
