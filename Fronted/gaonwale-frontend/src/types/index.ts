// ============================================
// GaonWale Type Definitions
// ============================================

export interface User {
  id: string;
  fullName: string;
  username: string;
  avatar: string;
  village: string;
  bio: string;
  level: number;
  title: string;
  isVerified: boolean;
  isOnline: boolean;
  posts: number;
  followers: number;
  following: number;
  coins: number;
  website?: string;
  interests: string[];
  district?: string;
  joinedAt?: string;
}

export interface AnonymousIdentity {
  id: string;
  displayName: string;
  avatar: string;
  colorRing: 'purple' | 'pink' | 'blue' | 'orange' | 'gradient';
  characterStyle?: string;
}

export interface Post {
  id: string;
  author: User | AnonymousIdentity;
  isAnonymous: boolean;
  village: string;
  content: string;
  images: string[];
  video?: string;
  createdAt: string;
  likes: number;
  reactions: { emoji: string; count: number }[];
  comments: number;
  shares: number;
  isSaved: boolean;
  isLiked: boolean;
  type: 'text' | 'photo' | 'video' | 'voice' | 'announcement';
}

export interface Story {
  id: string;
  user: User | AnonymousIdentity;
  thumbnail: string;
  media: string;
  mediaType: 'image' | 'video';
  viewed: boolean;
  createdAt: string;
  colorRing: 'purple' | 'pink' | 'blue' | 'orange' | 'gradient';
}

export interface Message {
  id: string;
  senderId: string;
  senderName: string;
  senderAvatar: string;
  content: string;
  type: 'text' | 'image' | 'voice' | 'emoji';
  timestamp: string;
  isRead: boolean;
  isSent: boolean;
}

export interface ChatContact {
  id: string;
  name: string;
  avatar: string;
  lastMessage: string;
  lastMessageTime: string;
  unreadCount: number;
  isOnline: boolean;
  isGroup: boolean;
  lastMessageType?: 'text' | 'photo' | 'voice';
}

export interface Community {
  id: string;
  name: string;
  avatar: string;
  type: 'public' | 'private';
  members: number;
  description: string;
  lastPost?: string;
  unreadCount: number;
  banner?: string;
  isJoined?: boolean;
  isVerified?: boolean;
  location?: string;
}

export interface CommunityGroup {
  id: string;
  communityId: string;
  name: string;
  icon: string;
  lastMessage: string;
  lastMessageTime: string;
  unreadCount: number;
}

export interface Notification {
  id: string;
  type: 'like' | 'comment' | 'follow' | 'mention' | 'community' | 'coin' | 'challenge' | 'business' | 'system';
  title: string;
  message?: string;
  content?: string;
  avatar?: string;
  user?: User;
  timestamp: string;
  isRead: boolean;
  actionUrl?: string;
}

export interface Service {
  id: string;
  name: string;
  category: string;
  icon: string;
  count: number;
}

export interface Business {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
  rating: number;
  village: string;
  phone?: string;
  tags: string[];
}

export interface CoinTransaction {
  id: string;
  type: 'earned' | 'spent';
  amount: number;
  description: string;
  timestamp: string;
  source: string;
}

export interface TrendingHashtag {
  id: string;
  tag: string;
  posts: string;
  avatar: string;
}

export interface AIMagicOption {
  id: string;
  title: string;
  description: string;
  icon: string;
  coinCost: number;
  gradient: string;
}

export interface DashboardMetric {
  label: string;
  value: string;
  change: string;
  icon: string;
}

export type ThemeMode = 'dark' | 'light';
