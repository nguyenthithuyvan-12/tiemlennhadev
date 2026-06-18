export interface Product {
  id: string;
  name: string;
  price: number;
  category: 'flower' | 'keychain' | 'animal' | 'other';
  images: string[];
  description: string;
  inStock: boolean;
  badge?: string;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  price: number | 'free';
  level: 'beginner' | 'intermediate' | 'advanced';
  zaloLink?: string;
  messengerLink?: string;
  googleMeetLink?: string;
  thumbnail?: string;
}

export interface ChartItem {
  id: string;
  title: string;
  category: string;
  driveUrl: string;
  thumbnail?: string;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location?: string;
  content: string;
  rating: number;
  avatar?: string;
  date: string;
}
