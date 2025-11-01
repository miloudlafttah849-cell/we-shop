
import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">من نحن</h1>
        <div className="text-lg text-gray-700 leading-relaxed space-y-4">
          <p>
            مرحبًا بكم في We Shop! نحن وجهتكم الأولى لكل ما تحتاجونه من مستحضرات التجميل، الملابس العصرية، الأحذية الأنيقة، الأجهزة المنزلية الحديثة، ومساعدات كبار السن.
          </p>
          <p>
            في We Shop، نؤمن بأن التسوق يجب أن يكون تجربة سهلة وممتعة. لهذا السبب، قمنا بجمع تشكيلة واسعة من المنتجات عالية الجودة من أفضل العلامات التجارية لنقدمها لكم بأسعار تنافسية.
          </p>
          <p>
            مهمتنا هي توفير منتجات تلبي احتياجات جميع أفراد الأسرة، مع التركيز على الجودة، التنوع، وخدمة العملاء الممتازة. فريقنا يعمل بجد لضمان رضاكم التام عن كل عملية شراء.
          </p>
          <p>
            شكرًا لثقتكم بنا. نتطلع لخدمتكم!
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
