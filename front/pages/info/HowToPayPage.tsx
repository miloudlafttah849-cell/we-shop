
import React from 'react';
import { CreditCard } from 'lucide-react';

const HowToPayPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">كيفية الدفع</h1>
        <div className="text-lg text-gray-700 leading-relaxed space-y-6">
            <div className="flex items-center p-6 bg-gray-50 rounded-lg">
                <CreditCard className="w-12 h-12 text-yellow-600 me-6" />
                <div>
                    <h2 className="text-2xl font-bold mb-2">الدفع عند الاستلام</h2>
                    <p>
                        لتسهيل عملية الشراء عليكم، نقدم خدمة "الدفع عند الاستلام" كوسيلة دفع أساسية.
                    </p>
                    <ul className="list-disc list-inside mt-4 space-y-2">
                        <li>تأكد من تواجدك في عنوان التوصيل المحدد لاستلام الطلب.</li>
                        <li>قم بتجهيز المبلغ الإجمالي للطلب نقدًا.</li>
                        <li>سيقوم مندوب التوصيل بتسليم الطلب واستلام المبلغ.</li>
                    </ul>
                    <p className="mt-4 text-sm text-gray-500">
                        نحن نعمل على إضافة طرق دفع إلكترونية قريبًا لتوفير المزيد من الخيارات لكم. شكرًا لتفهمكم.
                    </p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default HowToPayPage;
