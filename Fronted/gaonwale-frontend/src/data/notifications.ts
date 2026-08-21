import type { Notification } from '../types';

export const mockNotifications: Notification[] = [
  { id: 'n1', type: 'like', title: 'Padosi No. 27', message: 'liked your post "Aaj gaon mein..."', avatar: '/assets/avatars/padosi27.jpg', timestamp: '2m ago', isRead: false },
  { id: 'n2', type: 'comment', title: 'Chachi No. 12', message: 'commented: "Bahut sahi baat! 😂"', avatar: '/assets/avatars/chachi12.jpg', timestamp: '15m ago', isRead: false },
  { id: 'n3', type: 'follow', title: 'Comedy King', message: 'started following you', avatar: '/assets/avatars/comedyking.jpg', timestamp: '1h ago', isRead: false },
  { id: 'n4', type: 'coin', title: '🪙 Daily Reward', message: 'You earned 50 coins! Keep posting.', avatar: '/assets/logo/gaonwale-logo.png', timestamp: '2h ago', isRead: true },
  { id: 'n5', type: 'community', title: 'Rampur Gaon Community', message: 'New announcement posted', avatar: '/assets/avatars/rampur-community.jpg', timestamp: '3h ago', isRead: true },
  { id: 'n6', type: 'mention', title: 'Kaka Ji', message: 'mentioned you in a comment', avatar: '/assets/avatars/kakaji.jpg', timestamp: '4h ago', isRead: true },
  { id: 'n7', type: 'challenge', title: '🎯 Daily Challenge', message: '"Best Gaon Joke" — Participate now!', avatar: '/assets/logo/gaonwale-logo.png', timestamp: '5h ago', isRead: true },
  { id: 'n8', type: 'like', title: 'Bhains Wale Bhaiya', message: 'and 23 others liked your post', avatar: '/assets/avatars/bhainswale.jpg', timestamp: '6h ago', isRead: true },
  { id: 'n9', type: 'business', title: 'Sharma Kirana Store', message: 'New offer: 20% off on groceries!', avatar: '/assets/avatars/kirana.jpg', timestamp: 'Yesterday', isRead: true },
  { id: 'n10', type: 'follow', title: 'DJ Sharma', message: 'started following you', avatar: '/assets/avatars/djsharma.jpg', timestamp: 'Yesterday', isRead: true },
];
