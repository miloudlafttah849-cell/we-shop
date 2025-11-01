
import React from 'react';
import { Facebook, Instagram, Youtube, Linkedin } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">خدمة العملاء</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">اتصل بنا</a></li>
              <li><a href="#" className="hover:text-white transition-colors">الأسئلة الشائعة</a></li>
              <li><a href="#" className="hover:text-white transition-colors">سياسة الاسترجاع والاستبدال</a></li>
              <li><a href="#" className="hover:text-white transition-colors">تتبع طلبك</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">عن We Shop</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">من نحن</a></li>
              <li><a href="#" className="hover:text-white transition-colors">الوظائف</a></li>
              <li><a href="#" className="hover:text-white transition-colors">الشروط والأحكام</a></li>
              <li><a href="#" className="hover:text-white transition-colors">سياسة الخصوصية</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">كن على تواصل</h3>
            <p className="text-gray-300 mb-4">اشترك في نشرتنا الإخبارية للحصول على آخر التحديثات والعروض.</p>
            <form className="flex">
              <input type="email" placeholder="بريدك الإلكتروني" className="w-full px-3 py-2 text-gray-800 rounded-s-md focus:outline-none" />
              <button type="submit" className="bg-yellow-500 text-white px-4 py-2 rounded-e-md hover:bg-yellow-600 transition-colors">إشتراك</button>
            </form>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">تابعنا</h3>
            <div className="flex space-x-4 space-x-reverse">
              <a href="#" className="text-gray-300 hover:text-white"><Facebook /></a>
              <a href="#" className="text-gray-300 hover:text-white"><Instagram /></a>
              <a href="#" className="text-gray-300 hover:text-white"><Youtube /></a>
              <a href="#" className="text-gray-300 hover:text-white"><Linkedin /></a>
            </div>
            <div className="mt-6">
                <h3 className="text-lg font-semibold mb-4">وسائل الدفع</h3>
                <div className="bg-white p-2 rounded-md flex items-center justify-center">
                    <span className="text-gray-800 font-bold">الدفع عند الاستلام</span>
                </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-900 py-4">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} We Shop. جميع الحقوق محفوظة.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
