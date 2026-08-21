import type { Service, DashboardMetric } from '../types';

export const mockServices: Service[] = [
  { id: 'sv1', name: 'Digital Marketing', category: 'Marketing', icon: '📣', count: 12 },
  { id: 'sv2', name: 'Web Development', category: 'Technology', icon: '🌐', count: 8 },
  { id: 'sv3', name: 'Branding Design', category: 'Design', icon: '🎨', count: 6 },
  { id: 'sv4', name: 'Video Editing', category: 'Media', icon: '🎬', count: 15 },
  { id: 'sv5', name: 'Photography', category: 'Media', icon: '📷', count: 10 },
  { id: 'sv6', name: 'Social Media Management', category: 'Marketing', icon: '📱', count: 9 },
];

export const mockDashboardMetrics: DashboardMetric[] = [
  { label: 'Profile Views', value: '23.4K', change: '↑ 18%', icon: '👁️' },
  { label: 'Reach', value: '1,234', change: '↑ 12%', icon: '👥' },
  { label: 'Engagement', value: '567', change: '↑ 24%', icon: '📊' },
  { label: 'Website Clicks', value: '345', change: '↑ 15%', icon: '🔗' },
];
