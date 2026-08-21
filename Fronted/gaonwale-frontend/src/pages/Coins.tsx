import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { classNames } from '../utils/helpers';
import { coinBalance, coinTransactions, earnMethods, referralStats } from '../data/coins';
import { Coins as CoinsIcon, ArrowUpRight, ArrowDownRight, History, Gift, Copy, Check, Users } from 'lucide-react';

export const Coins: React.FC = () => {
  const { theme } = useTheme();
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState('Earn');

  const copyCode = () => {
    navigator.clipboard.writeText(referralStats.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex w-full min-h-screen">
      <div className="flex-1 max-w-2xl mx-auto w-full md:border-x border-gray-200 dark:border-[#252952] pb-24">
        
        {/* Header/Balance Card */}
        <div className="p-4 bg-gradient-to-b from-[#7C3AED]/10 to-transparent">
          <h2 className="font-bold text-xl mb-4">Coins Wallet</h2>
          
          <div className="w-full rounded-[24px] bg-gradient-to-br from-[#7C3AED] to-[#F97316] p-[2px] shadow-lg mb-6">
            <div className="w-full h-full bg-[#151835] dark:bg-[#050711] rounded-[22px] p-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl -mr-10 -mt-10 pointer-events-none"></div>
              
              <div className="flex items-center gap-2 text-white/80 mb-2 font-medium">
                <CoinsIcon size={18} className="text-yellow-400" />
                Available Balance
              </div>
              <div className="text-4xl font-extrabold text-white mb-6">
                {coinBalance.toLocaleString()} <span className="text-xl text-white/60 font-medium">Coins</span>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <button className="bg-white/10 hover:bg-white/20 text-white py-2.5 rounded-xl text-sm font-bold backdrop-blur-sm transition-colors border border-white/10">
                  Buy Coins
                </button>
                <button className="bg-white text-gray-900 py-2.5 rounded-xl text-sm font-bold transition-colors shadow-md hover:bg-gray-100">
                  Withdraw
                </button>
              </div>
            </div>
          </div>
          
          {/* Refer & Earn Banner */}
          <div className={classNames(
            "rounded-2xl p-4 flex items-center justify-between border shadow-sm",
            theme === 'dark' ? "bg-[#151835] border-[#252952]" : "bg-white border-yellow-200"
          )}>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-yellow-100 dark:bg-yellow-900/30 flex items-center justify-center text-2xl border border-yellow-200 dark:border-yellow-700">
                🎁
              </div>
              <div>
                <h3 className="font-bold">Refer & Earn</h3>
                <p className="text-xs text-gray-500">Get 200 coins per friend</p>
              </div>
            </div>
            
            <div className="flex flex-col items-end gap-2">
              <div className="flex items-center bg-gray-100 dark:bg-[#1C1F45] rounded-lg p-1 pr-3">
                <span className="text-xs font-mono font-bold px-3 py-1.5">{referralStats.code}</span>
                <button 
                  onClick={copyCode}
                  className="p-1.5 bg-white dark:bg-[#252952] rounded-md shadow-sm hover:text-[#7C3AED] transition-colors"
                >
                  {copied ? <Check size={14} className="text-green-500" /> : <Copy size={14} />}
                </button>
              </div>
              <div className="text-[10px] text-gray-500 font-medium flex items-center gap-1">
                <Users size={12} /> {referralStats.friendsInvited} friends joined
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-gray-200 dark:border-[#252952]">
          {['Earn', 'History'].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={classNames(
                "flex-1 py-3 text-sm font-bold transition-colors relative",
                activeTab === tab 
                  ? (theme === 'dark' ? "text-white" : "text-gray-900") 
                  : "text-gray-500 hover:bg-gray-50 dark:hover:bg-[#151835]"
              )}
            >
              {tab === 'Earn' ? <span className="flex items-center justify-center gap-2"><Gift size={16} /> Earn Coins</span> : <span className="flex items-center justify-center gap-2"><History size={16} /> History</span>}
              {activeTab === tab && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#7C3AED]" />
              )}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="p-4">
          {activeTab === 'Earn' ? (
            <div className="space-y-3">
              {earnMethods.map(method => (
                <div key={method.id} className={classNames(
                  "p-4 rounded-xl border flex items-center justify-between",
                  theme === 'dark' ? "bg-[#151835] border-[#252952]" : "bg-white border-gray-100"
                )}>
                  <div className="flex items-center gap-3">
                    <div className="text-2xl">{method.icon}</div>
                    <div>
                      <h4 className="font-bold text-sm">{method.title}</h4>
                      <p className="text-xs text-gray-500">{method.description}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 font-bold text-[#F97316]">
                    +{method.coins} <span className="text-xs">🪙</span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-3">
              {coinTransactions.map(tx => (
                <div key={tx.id} className={classNames(
                  "p-4 rounded-xl border flex items-center justify-between",
                  theme === 'dark' ? "bg-[#151835] border-[#252952]" : "bg-white border-gray-100"
                )}>
                  <div className="flex items-center gap-3">
                    <div className={classNames(
                      "w-10 h-10 rounded-full flex items-center justify-center",
                      tx.type === 'earned' 
                        ? "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-500" 
                        : "bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-500"
                    )}>
                      {tx.type === 'earned' ? <ArrowDownRight size={20} /> : <ArrowUpRight size={20} />}
                    </div>
                    <div>
                      <h4 className="font-bold text-sm">{tx.description}</h4>
                      <p className="text-xs text-gray-500">{tx.timestamp}</p>
                    </div>
                  </div>
                  <div className={classNames(
                    "font-bold",
                    tx.type === 'earned' ? "text-green-500" : "text-gray-900 dark:text-white"
                  )}>
                    {tx.type === 'earned' ? '+' : '-'}{tx.amount}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
