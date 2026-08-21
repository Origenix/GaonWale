import type { Community, CommunityGroup } from '../types';

export const mockCommunities: Community[] = [
  { id: 'com1', name: 'Rampur Gaon Community', avatar: '/assets/avatars/rampur-community.jpg', type: 'public', members: 1200, description: 'Apne gaon ki baatein, updates, madad aur masti sab yahin! ❤️', lastPost: 'Bijli kal 6 baje aayegi', unreadCount: 8 },
  { id: 'com2', name: 'Rampur Kisan Samuh', avatar: '/assets/avatars/kisan-samuh.jpg', type: 'public', members: 560, description: 'Kisano ke liye updates aur madad 🌾', lastPost: 'Rajesh: Kheti ke naye upay', unreadCount: 3 },
  { id: 'com3', name: 'Shaadi & Events Rampur', avatar: '/assets/avatars/shaadi-events.jpg', type: 'public', members: 890, description: 'Shaadi, events aur celebrations! 🎉', lastPost: 'New vendor added', unreadCount: 2 },
];

export const mockCommunityGroups: CommunityGroup[] = [
  { id: 'cg1', communityId: 'com1', name: 'Announcements', icon: '📢', lastMessage: 'Admin: Aaj raat 8 baje panchayat baithak hai.', lastMessageTime: '9:00 AM', unreadCount: 2 },
  { id: 'cg2', communityId: 'com1', name: 'General Chat', icon: '💬', lastMessage: 'Rohit: Kya haal chal sabke?', lastMessageTime: '8:50 AM', unreadCount: 12 },
  { id: 'cg3', communityId: 'com1', name: 'Help & Support', icon: '🤝', lastMessage: 'Suman: Kisine electrician ka number hai?', lastMessageTime: 'Yesterday', unreadCount: 4 },
  { id: 'cg4', communityId: 'com1', name: 'Buy & Sell', icon: '🏪', lastMessage: 'Ramesh: Tractor for sale, 2018 model', lastMessageTime: 'Yesterday', unreadCount: 6 },
  { id: 'cg5', communityId: 'com1', name: 'Events', icon: '🎊', lastMessage: 'Pooja: Holi Milan Samaroh ki tayari shuru', lastMessageTime: '2d ago', unreadCount: 3 },
];
