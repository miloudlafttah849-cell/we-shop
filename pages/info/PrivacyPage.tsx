
import React from 'react';

const PrivacyPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">سياسة الخصوصية</h1>
        <div className="text-gray-700 leading-relaxed space-y-4">
          <h2 className="text-2xl font-semibold mt-4 mb-2">1. المعلومات التي نجمعها</h2>
          <p>
            نحن نجمع المعلومات التي تقدمها لنا مباشرة عند إنشاء حساب أو إجراء عملية شراء، مثل اسمك وعنوان بريدك الإلكتروني ورقم هاتفك وعنوان الشحن.
          </p>

          <h2 className="text-2xl font-semibold mt-4 mb-2">2. كيف نستخدم معلوماتك</h2>
          <p>
            نستخدم المعلومات التي نجمعها لمعالجة طلباتك، والتواصل معك بشأن طلبك، وتحسين خدماتنا، وإرسال العروض الترويجية إذا وافقت على ذلك.
          </p>

          <h2 className="text-2xl font-semibold mt-4 mb-2">3. مشاركة المعلومات</h2>
          <p>
            نحن لا نبيع أو نؤجر معلوماتك الشخصية لأطراف ثالثة. قد نشارك معلوماتك مع شركاء الشحن لتوصيل طلبك ومع مزودي الخدمات الذين يساعدوننا في عملياتنا التجارية.
          </p>
          
          <h2 className="text-2xl font-semibold mt-4 mb-2">4. أمان البيانات</h2>
          <p>
            نتخذ تدابير أمنية معقولة لحماية معلوماتك الشخصية من الوصول غير المصرح به أو الاستخدام أو الكشف.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPage;
