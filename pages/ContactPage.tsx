
import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800">تواصل معنا</h1>
        <p className="text-gray-600 mt-2">نحن هنا للمساعدة. أرسل لنا رسالة أو تواصل معنا مباشرة.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-6">أرسل لنا رسالة</h2>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">الاسم</label>
              <input type="text" id="name" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">البريد الإلكتروني</label>
              <input type="email" id="email" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">رسالتك</label>
              <textarea id="message" rows={4} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"></textarea>
            </div>
            <div>
              <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-gray-800 hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 transition-colors">
                إرسال
              </button>
            </div>
          </form>
        </div>
        <div className="space-y-8">
            <h2 className="text-2xl font-bold mb-6">معلومات الاتصال</h2>
            <div className="flex items-start">
                <div className="flex-shrink-0 p-3 bg-yellow-100 rounded-full">
                    <MapPin className="h-6 w-6 text-yellow-600" />
                </div>
                <div className="ms-4">
                    <h3 className="text-lg font-semibold">العنوان</h3>
                    <p className="text-gray-600">123 شارع التجارة، المدينة، الدولة</p>
                </div>
            </div>
             <div className="flex items-start">
                <div className="flex-shrink-0 p-3 bg-yellow-100 rounded-full">
                    <Phone className="h-6 w-6 text-yellow-600" />
                </div>
                <div className="ms-4">
                    <h3 className="text-lg font-semibold">الهاتف</h3>
                    <p className="text-gray-600" dir="ltr">+123 456 7890</p>
                </div>
            </div>
             <div className="flex items-start">
                <div className="flex-shrink-0 p-3 bg-yellow-100 rounded-full">
                    <Mail className="h-6 w-6 text-yellow-600" />
                </div>
                <div className="ms-4">
                    <h3 className="text-lg font-semibold">البريد الإلكتروني</h3>
                    <p className="text-gray-600">contact@weshop.com</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
