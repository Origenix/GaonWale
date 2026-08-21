import type { User, AnonymousIdentity } from '../types';

export const currentUser: User = {
  id: 'u1',
  fullName: 'Sagar Kushwaha',
  username: 'sagar_27',
  avatar: '/assets/avatars/sagar.jpg',
  village: 'Rampur Gaon',
  bio: 'Apne gaon ki baatein, updates aur masti sab yahin! ❤️\nVillage life • Travel • Comedy • Farming 🌾',
  level: 12,
  title: 'Digital Creator',
  isVerified: true,
  isOnline: true,
  posts: 186,
  followers: 2456,
  following: 1234,
  coins: 1250,
  website: 'gaonwale.com/sagar_27',
  interests: ['Comedy', 'Farming', 'Travel', 'Village Life'],
};

export const anonymousIdentities: AnonymousIdentity[] = [
  { id: 'a1', displayName: 'Padosi No. 27', avatar: '/assets/avatars/padosi27.jpg', colorRing: 'blue', characterStyle: 'Old man with mustache' },
  { id: 'a2', displayName: 'Chachi No. 12', avatar: '/assets/avatars/chachi12.jpg', colorRing: 'pink', characterStyle: 'Village aunt' },
  { id: 'a3', displayName: 'Kaka Ji', avatar: '/assets/avatars/kakaji.jpg', colorRing: 'orange', characterStyle: 'Elderly wise man' },
  { id: 'a4', displayName: 'Comedy King', avatar: '/assets/avatars/comedyking.jpg', colorRing: 'gradient', characterStyle: 'Fun character' },
  { id: 'a5', displayName: 'Bhains Wale Bhaiya', avatar: '/assets/avatars/bhainswale.jpg', colorRing: 'purple', characterStyle: 'Farmer with buffalo' },
  { id: 'a6', displayName: 'Naujawan Group', avatar: '/assets/avatars/naujawan.jpg', colorRing: 'gradient', characterStyle: 'Young friends' },
];

export const mockUsers: User[] = [
  currentUser,
  {
    id: 'u2', fullName: 'Rajesh Patel', username: 'rajesh_farmer', avatar: '/assets/avatars/rajesh.jpg',
    village: 'Rampur Gaon', bio: 'Kisan aur proud 🌾', level: 8, title: 'Farmer', isVerified: false,
    isOnline: true, posts: 45, followers: 890, following: 234, coins: 800, interests: ['Farming', 'Weather'],
  },
  {
    id: 'u3', fullName: 'Suman Devi', username: 'suman_devi', avatar: '/assets/avatars/suman.jpg',
    village: 'Rampur Gaon', bio: 'Mahila Samuh ki leader 💪', level: 15, title: 'Community Leader', isVerified: true,
    isOnline: false, posts: 312, followers: 5600, following: 450, coins: 3200, interests: ['Community', 'Education'],
  },
  {
    id: 'u4', fullName: 'DJ Sharma', username: 'dj_sharma', avatar: '/assets/avatars/djsharma.jpg',
    village: 'Rampur Gaon', bio: 'Shaadi ka DJ 🎶', level: 6, title: 'DJ / Events', isVerified: false,
    isOnline: true, posts: 78, followers: 1200, following: 567, coins: 600, interests: ['Music', 'Events'],
  },
];
