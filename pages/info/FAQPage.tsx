
import React from 'react';

const faqs = [
  {
    question: "ما هي طرق الدفع المتاحة؟",
    answer: "حاليًا، نحن ندعم الدفع عند الاستلام فقط. يمكنك دفع قيمة طلبك نقدًا لمندوب التوصيل عند استلام المنتجات."
  },
  {
    question: "كم تستغرق مدة الشحن؟",
    answer: "تستغرق مدة الشحن عادة من 3 إلى 5 أيام عمل داخل المدن الرئيسية. قد تستغرق وقتاً أطول للمناطق النائية."
  },
  {
    question: "هل يمكنني إرجاع أو استبدال منتج؟",
    answer: "نعم، يمكنك طلب إرجاع أو استبدال المنتج خلال 14 يومًا من تاريخ الاستلام، بشرط أن يكون المنتج في حالته الأصلية وغير مستخدم. يرجى مراجعة صفحة سياسة الاسترجاع والاستبدال لمزيد من التفاصيل."
  },
  {
    question: "كيف يمكنني تتبع طلبي؟",
    answer: "بمجرد شحن طلبك، ستتلقى رسالة نصية أو بريدًا إلكترونيًا يحتوي على معلومات التتبع. يمكنك أيضًا استخدام صفحة 'تتبع طلبك' على موقعنا لمتابعة حالة طلبك."
  }
];

const FAQPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">الأسئلة الشائعة</h1>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b pb-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{faq.question}</h3>
              <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQPage;
