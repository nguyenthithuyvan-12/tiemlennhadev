import type { Course } from '../types/index';

const COURSES: Course[] = [
  {
    id: 'kh-001',
    title: 'Móc Len Căn Bản cho Người Mới',
    description: 'Khóa học từ zero — không cần biết gì trước. Học cầm kim, các mũi cơ bản, và hoàn thành sản phẩm đầu tiên của bạn trong 4 buổi.',
    price: 'free',
    level: 'beginner',
    googleMeetLink: 'https://meet.google.com/placeholder',
    zaloLink: 'https://zalo.me/placeholder',
    messengerLink: 'https://m.me/placeholder',
    thumbnail: '',
  },
  {
    id: 'kh-002',
    title: 'Móc Hoa Len 5 Mẫu Phổ Biến',
    description: 'Học 5 mẫu hoa được yêu thích nhất: hướng dương, hồng, cúc, tulip và baby breath. Phù hợp cho người đã biết mũi cơ bản.',
    price: 150000,
    level: 'beginner',
    googleMeetLink: 'https://meet.google.com/placeholder',
    zaloLink: 'https://zalo.me/placeholder',
    messengerLink: 'https://m.me/placeholder',
    thumbnail: '',
  },
  {
    id: 'kh-003',
    title: 'Amigurumi Thú Bông Từ A-Z',
    description: 'Nắm vững kỹ thuật amigurumi: vòng ma thuật, tăng giảm mũi, ghép chi tiết, nhồi bông đúng cách. Ra về với 3 con thú hoàn chỉnh.',
    price: 280000,
    level: 'intermediate',
    googleMeetLink: 'https://meet.google.com/placeholder',
    zaloLink: 'https://zalo.me/placeholder',
    messengerLink: 'https://m.me/placeholder',
    thumbnail: '',
  },
  {
    id: 'kh-004',
    title: 'Thiết Kế Mẫu Len Riêng',
    description: 'Dành cho người đã có nền tảng. Học cách đọc và viết pattern, tự thiết kế mẫu theo ý tưởng, scale size theo yêu cầu.',
    price: 450000,
    level: 'advanced',
    googleMeetLink: 'https://meet.google.com/placeholder',
    zaloLink: 'https://zalo.me/placeholder',
    messengerLink: 'https://m.me/placeholder',
    thumbnail: '',
  },
];

export default COURSES;

export const LEVEL_LABELS: Record<Course['level'], string> = {
  beginner: 'Người mới',
  intermediate: 'Trung cấp',
  advanced: 'Nâng cao',
};

export const LEVEL_COLORS: Record<Course['level'], string> = {
  beginner: '#E8487A',   // Hồng đậm nổi bật
  intermediate: '#3D7A7F', // Xanh ngọc đậm
  advanced: '#E6A817',    // Vàng gold nổi bật
};
