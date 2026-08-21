import type { TrendingHashtag } from '../types';
import { mockPosts } from './posts';

export const trendingPosts = mockPosts.slice(0, 4);

export const trendingHashtags: TrendingHashtag[] = [
  { id: 'th1', tag: '#KakaJi', posts: '12.4K posts', avatar: '/assets/avatars/kakaji.jpg' },
  { id: 'th2', tag: '#GaonKiMasti', posts: '8.7K posts', avatar: '/assets/avatars/comedyking.jpg' },
  { id: 'th3', tag: '#ShaadiKaScene', posts: '6.1K posts', avatar: '/assets/avatars/shaadi-events.jpg' },
  { id: 'th4', tag: '#DesiJugaad', posts: '4.8K posts', avatar: '/assets/avatars/padosi27.jpg' },
];

export const trendingTabs = ['For You', 'Trending', 'My Village', 'Nearby', 'Block', 'District'];
