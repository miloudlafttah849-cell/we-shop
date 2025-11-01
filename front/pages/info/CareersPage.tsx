
import React from 'react';

const CareersPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">الوظائف</h1>
        <div className="text-lg text-gray-700 leading-relaxed space-y-4">
          <p>
            نحن دائمًا نبحث عن المواهب للانضمام إلى فريقنا المتميز.
          </p>
          <p>
            حاليًا، لا توجد وظائف شاغرة. ومع ذلك، نحن نشجعك على إرسال سيرتك الذاتية إلى <a href="mailto:careers@weshop.com" className="text-yellow-600 hover:underline">careers@weshop.com</a> وسنحتفظ بها للفرص المستقبلية.
          </p>
          <p>
            شكرًا لاهتمامك بالانضمام إلى We Shop!
          </p>
        </div>
      </div>
    </div>
  );
};

export default CareersPage;
