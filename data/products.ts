
import { Product } from '../types';

export const products: Product[] = [
  { id: 1, name: "كريم أساس فاخر", category: "cosmetics", price: 120.50, description: "كريم أساس بتغطية كاملة يدوم طوال اليوم.", imageUrl: "https://picsum.photos/seed/p1/400/400" },
  { id: 2, name: "قميص قطني", category: "wears", price: 89.99, description: "قميص كاجوال مصنوع من القطن المصري الفاخر.", imageUrl: "https://picsum.photos/seed/p2/400/400" },
  { id: 3, name: "حذاء رياضي", category: "shoes", price: 250.00, description: "حذاء رياضي مريح للجري والأنشطة اليومية.", imageUrl: "https://picsum.photos/seed/p3/400/400" },
  { id: 4, name: "سخان مياه فوري", category: "appliances", price: 450.00, description: "سخان مياه كهربائي يوفر الماء الساخن فوراً.", imageUrl: "https://picsum.photos/seed/p4/400/400" },
  { id: 5, name: "مجفف شعر احترافي", category: "appliances", price: 180.75, description: "مجفف شعر بقوة 2200 واط لنتائج سريعة.", imageUrl: "https://picsum.photos/seed/p5/400/400" },
  { id: 6, name: "عكاز طبي لكبار السن", category: "elderly-aids", price: 75.00, description: "عكاز قابل للتعديل يوفر الدعم والثبات.", imageUrl: "https://picsum.photos/seed/p6/400/400" },
  { id: 7, name: "مرحاض متنقل", category: "elderly-aids", price: 320.00, description: "مرحاض متنقل لكبار السن والمرضى لسهولة الاستخدام.", imageUrl: "https://picsum.photos/seed/p7/400/400" },
  { id: 8, name: "سرير طبي كهربائي", category: "elderly-aids", price: 2800.00, description: "سرير طبي مع جهاز تحكم لتغيير الوضعيات بسهولة.", imageUrl: "https://picsum.photos/seed/p8/400/400" },
  { id: 9, name: "أحمر شفاه مات", category: "cosmetics", price: 65.00, description: "أحمر شفاه بلون غني وثبات يدوم لساعات.", imageUrl: "https://picsum.photos/seed/p9/400/400" },
  { id: 10, name: "فستان سهرة", category: "wears", price: 450.00, description: "فستان أنيق للمناسبات الخاصة بتصميم عصري.", imageUrl: "https://picsum.photos/seed/p10/400/400" },
  { id: 11, name: "صندل صيفي", category: "shoes", price: 150.00, description: "صندل جلدي مريح ومثالي لفصل الصيف.", imageUrl: "https://picsum.photos/seed/p11/400/400" },
  { id: 12, name: "مساعد مشي", category: "elderly-aids", price: 220.00, description: "مساعد مشي خفيف الوزن وقابل للطي لكبار السن.", imageUrl: "https://picsum.photos/seed/p12/400/400" },
];

export const categories = [
  { key: 'all', name: 'الكل' },
  { key: 'cosmetics', name: 'مستحضرات تجميل' },
  { key: 'wears', name: 'ملابس' },
  { key: 'shoes', name: 'أحذية' },
  { key: 'appliances', name: 'أجهزة' },
  { key: 'elderly-aids', name: 'مساعدات كبار السن' },
];
