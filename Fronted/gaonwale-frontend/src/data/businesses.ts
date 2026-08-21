import type { Business } from '../types';

export const mockBusinesses: Business[] = [
  { id: 'b1', name: 'Sharma Kirana Store', category: 'Kirana Store', description: 'Fresh groceries delivered near your village', image: '/assets/posts/kirana-store.jpg', rating: 4.5, village: 'Rampur Gaon', phone: '+91-9876543210', tags: ['Groceries', 'Daily Needs', 'Delivery'] },
  { id: 'b2', name: 'Ramesh Tractor Booking', category: 'Tractor Booking', description: 'Reliable tractor service for farming needs', image: '/assets/posts/tractor.jpg', rating: 4.2, village: 'Rampur Gaon', phone: '+91-9876543211', tags: ['Farming', 'Tractor', 'Agriculture'] },
  { id: 'b3', name: 'DJ Sharma Entertainment', category: 'DJ Booking', description: 'Best DJ for weddings and events', image: '/assets/posts/dj-booking.jpg', rating: 4.8, village: 'Rampur Gaon', phone: '+91-9876543212', tags: ['DJ', 'Wedding', 'Events'] },
  { id: 'b4', name: 'Pooja Wedding Services', category: 'Wedding Services', description: 'Complete wedding planning and decoration', image: '/assets/posts/wedding-service.jpg', rating: 4.6, village: 'Rampur Gaon', tags: ['Wedding', 'Decoration', 'Catering'] },
  { id: 'b5', name: 'Raju Electrician', category: 'Electrician', description: 'Quick electrical repairs and installation', image: '/assets/posts/electrician.jpg', rating: 4.3, village: 'Rampur Gaon', phone: '+91-9876543214', tags: ['Electrical', 'Repair', 'Installation'] },
  { id: 'b6', name: 'Kumar Medical Store', category: 'Medical Store', description: '24/7 medical supplies and medicines', image: '/assets/posts/medical-store.jpg', rating: 4.7, village: 'Rampur Gaon', phone: '+91-9876543215', tags: ['Medical', 'Pharmacy', '24/7'] },
  { id: 'b7', name: 'Village Restaurant', category: 'Restaurant', description: 'Authentic village food and chai', image: '/assets/posts/restaurant.jpg', rating: 4.4, village: 'Rampur Gaon', tags: ['Food', 'Restaurant', 'Chai'] },
  { id: 'b8', name: 'Gaon Mobile Shop', category: 'Mobile Shop', description: 'New & used phones, repairs and accessories', image: '/assets/posts/mobile-shop.jpg', rating: 4.1, village: 'Rampur Gaon', phone: '+91-9876543217', tags: ['Mobile', 'Repair', 'Accessories'] },
];

export const businessCategories = [
  'Kirana Store', 'Tractor Booking', 'DJ Booking', 'Wedding Services',
  'Electrician', 'Plumber', 'Mechanic', 'Medical Store', 'Restaurant',
  'Hotel', 'Coaching', 'Mobile Shop', 'Clothing Store', 'Agriculture Services',
  'Farm Equipment', 'Local Transport',
];
