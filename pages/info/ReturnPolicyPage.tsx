
import React from 'react';
import { Link } from 'react-router-dom';

const ReturnPolicyPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">سياسة الاسترجاع والاستبدال</h1>
        <div className="text-gray-700 leading-relaxed space-y-4">
          <p>
            نحن في We Shop نهتم برضا عملائنا. إذا لم تكن راضيًا تمامًا عن مشترياتك، يسعدنا مساعدتك في عملية الاسترجاع أو الاستبدال.
          </p>
          <h2 className="text-2xl font-semibold mt-4 mb-2">شروط الاسترجاع والاستبدال:</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>يمكن طلب الاسترجاع أو الاستبدال خلال 14 يومًا من تاريخ استلام الطلب.</li>
            <li>يجب أن يكون المنتج في حالته الأصلية، غير مستخدم، وفي عبوته الأصلية مع جميع الملحقات والبطاقات.</li>
            <li>المنتجات التي لا يمكن إرجاعها تشمل (على سبيل المثال لا الحصر): مستحضرات التجميل المفتوحة، الملابس الداخلية.</li>
            <li>يتحمل العميل تكاليف الشحن في حالة الاسترجاع أو الاستبدال لأسباب غير متعلقة بوجود عيب في المنتج.</li>
          </ul>
          <h2 className="text-2xl font-semibold mt-4 mb-2">كيفية تقديم طلب:</h2>
          <p>
            لتقديم طلب استرجاع أو استبدال، يرجى التواصل مع فريق خدمة العملاء عبر صفحة <Link to="/contact" className="text-yellow-600 hover:underline">اتصل بنا</Link> مع توضيح رقم الطلب والمنتج الذي ترغب في إرجاعه أو استبداله.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReturnPolicyPage;
