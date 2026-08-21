import type { ChatContact, Message } from '../types';

export const mockChatContacts: ChatContact[] = [
  { id: 'c1', name: 'Sagar Kushwaha', avatar: '/assets/avatars/sagar.jpg', lastMessage: 'Bhai aaj ka post mast tha 🎉', lastMessageTime: '9:40 AM', unreadCount: 2, isOnline: true, isGroup: false },
  { id: 'c2', name: 'Kaka Ji', avatar: '/assets/avatars/kakaji.jpg', lastMessage: 'Arey bilkul sahi bola tumne 😄', lastMessageTime: '9:32 AM', unreadCount: 1, isOnline: false, isGroup: false },
  { id: 'c3', name: 'Chachi No. 12', avatar: '/assets/avatars/chachi12.jpg', lastMessage: 'Aaj ke samose mast the 😋', lastMessageTime: '9:15 AM', unreadCount: 0, isOnline: false, isGroup: false },
  { id: 'c4', name: 'Padosi No. 27', avatar: '/assets/avatars/padosi27.jpg', lastMessage: '📸 Photo', lastMessageTime: '8:45 AM', unreadCount: 0, isOnline: true, isGroup: false, lastMessageType: 'photo' },
  { id: 'c5', name: 'Comedy King', avatar: '/assets/avatars/comedyking.jpg', lastMessage: 'Hahaha 😂😂', lastMessageTime: '8:20 AM', unreadCount: 0, isOnline: false, isGroup: false },
  { id: 'c6', name: 'Bhains Wale Bhaiya', avatar: '/assets/avatars/bhainswale.jpg', lastMessage: '🎤 Voice Message', lastMessageTime: '7:50 AM', unreadCount: 0, isOnline: false, isGroup: false, lastMessageType: 'voice' },
  { id: 'c7', name: 'Naujawan Group', avatar: '/assets/avatars/naujawan.jpg', lastMessage: 'Rohit: Chalo match khelte...', lastMessageTime: 'Yesterday', unreadCount: 5, isOnline: false, isGroup: true },
  { id: 'c8', name: 'DJ Sharma', avatar: '/assets/avatars/djsharma.jpg', lastMessage: 'Booking confirm 👍', lastMessageTime: 'Yesterday', unreadCount: 0, isOnline: true, isGroup: false },
];

export const mockMessages: Message[] = [
  { id: 'm1', senderId: 'u1', senderName: 'Sagar Kushwaha', senderAvatar: '/assets/avatars/sagar.jpg', content: 'Kya haal hai bhai? 😊', type: 'text', timestamp: '9:30 AM', isRead: true, isSent: false },
  { id: 'm2', senderId: 'me', senderName: 'You', senderAvatar: '', content: 'Mast bhai! Aaj gaon mein bahut maza aaya', type: 'text', timestamp: '9:32 AM', isRead: true, isSent: true },
  { id: 'm3', senderId: 'u1', senderName: 'Sagar Kushwaha', senderAvatar: '/assets/avatars/sagar.jpg', content: 'Haan yaar, teri post dekhi maine 😂', type: 'text', timestamp: '9:35 AM', isRead: true, isSent: false },
  { id: 'm4', senderId: 'me', senderName: 'You', senderAvatar: '', content: 'Haha thanks! Kaka ji wali post viral ho gayi', type: 'text', timestamp: '9:37 AM', isRead: true, isSent: true },
  { id: 'm5', senderId: 'u1', senderName: 'Sagar Kushwaha', senderAvatar: '/assets/avatars/sagar.jpg', content: 'Bhai aaj ka post mast tha 🎉', type: 'text', timestamp: '9:40 AM', isRead: false, isSent: false },
];
