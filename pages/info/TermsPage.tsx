
import React from 'react';

const TermsPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">الشروط والأحكام</h1>
        <div className="text-gray-700 leading-relaxed space-y-4">
          <h2 className="text-2xl font-semibold mt-4 mb-2">1. القبول</h2>
          <p>
            باستخدامك لموقع We Shop، فإنك توافق على الالتزام بهذه الشروط والأحكام. إذا كنت لا توافق على أي جزء من هذه الشروط، يجب عليك عدم استخدام موقعنا.
          </p>
          <h2 className="text-2xl font-semibold mt-4 mb-2">2. استخدام الموقع</h2>
          <p>
            أنت توافق على استخدام الموقع لأغراض مشروعة فقط. يُحظر عليك استخدام الموقع بأي طريقة قد تلحق الضرر بالموقع أو تعطل إتاحته للآخرين.
          </p>
          <h2 className="text-2xl font-semibold mt-4 mb-2">3. المنتجات والأسعار</h2>
          <p>
            نحن نسعى جاهدين لعرض معلومات دقيقة عن المنتجات والأسعار، ولكن قد تحدث أخطاء. نحتفظ بالحق في تصحيح أي أخطاء وتغيير الأسعار في أي وقت دون إشعار مسبق.
          </p>
          <h2 className="text-2xl font-semibold mt-4 mb-2">4. الملكية الفكرية</h2>
          <p>
            جميع المحتويات على هذا الموقع، بما في ذلك النصوص والرسومات والشعارات والصور، هي ملك لـ We Shop ومحمية بموجب قوانين حقوق النشر.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsPage;
