import type { CoinTransaction, AIMagicOption } from '../types';

export const coinBalance = 1250;

export const coinTransactions: CoinTransaction[] = [
  { id: 'ct1', type: 'earned', amount: 50, description: 'Daily Login Reward', timestamp: 'Today, 8:00 AM', source: 'daily' },
  { id: 'ct2', type: 'spent', amount: 100, description: 'AI Meme Generation', timestamp: 'Yesterday, 3:30 PM', source: 'ai' },
  { id: 'ct3', type: 'earned', amount: 25, description: 'Post Liked by 100+ users', timestamp: 'Yesterday, 1:00 PM', source: 'engagement' },
  { id: 'ct4', type: 'earned', amount: 200, description: 'Referral Bonus — Rajesh joined!', timestamp: '2 days ago', source: 'referral' },
  { id: 'ct5', type: 'spent', amount: 80, description: 'AI Image Generation', timestamp: '3 days ago', source: 'ai' },
  { id: 'ct6', type: 'earned', amount: 100, description: 'Daily Challenge Winner 🏆', timestamp: '3 days ago', source: 'challenge' },
  { id: 'ct7', type: 'earned', amount: 50, description: 'Daily Login Reward', timestamp: '4 days ago', source: 'daily' },
  { id: 'ct8', type: 'spent', amount: 150, description: 'AI Comic Generation', timestamp: '5 days ago', source: 'ai' },
];

export const aiMagicOptions: AIMagicOption[] = [
  { id: 'ai1', title: 'Make Meme', description: 'Convert story into funny meme', icon: '😎', coinCost: 100, gradient: 'from-yellow-400 to-orange-500' },
  { id: 'ai2', title: 'Make Image', description: 'Create AI image from your story', icon: '🎨', coinCost: 80, gradient: 'from-pink-400 to-purple-500' },
  { id: 'ai3', title: 'Make Comic', description: 'Turn story into funny comic', icon: '🖼️', coinCost: 150, gradient: 'from-blue-400 to-cyan-500' },
  { id: 'ai4', title: 'Make Video', description: 'Generate short video from your story', icon: '🎬', coinCost: 250, gradient: 'from-red-400 to-pink-500' },
  { id: 'ai5', title: 'Make Cartoon', description: 'Create cartoon character scene', icon: '👤', coinCost: 120, gradient: 'from-purple-400 to-indigo-500' },
  { id: 'ai6', title: 'Make Voice Story', description: 'Convert story into voice narration', icon: '🎙️', coinCost: 60, gradient: 'from-emerald-400 to-teal-500' },
];

export const earnMethods = [
  { id: 'em1', title: 'Daily Login', description: 'Login daily to earn 50 coins', coins: 50, icon: '📅' },
  { id: 'em2', title: 'Post Content', description: 'Share a story to earn 10 coins', coins: 10, icon: '✍️' },
  { id: 'em3', title: 'Get Likes', description: 'Earn 1 coin per 10 likes', coins: 1, icon: '❤️' },
  { id: 'em4', title: 'Refer Friends', description: 'Earn 200 coins per referral', coins: 200, icon: '👥' },
  { id: 'em5', title: 'Win Challenges', description: 'Win daily challenges for 100 coins', coins: 100, icon: '🏆' },
  { id: 'em6', title: 'Community Active', description: 'Be active in communities', coins: 25, icon: '💬' },
];

export const referralStats = {
  code: 'SAGAR27GW',
  friendsInvited: 12,
  coinsEarned: 2400,
};
