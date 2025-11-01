
import React, { useState } from 'react';

const TrackOrderPage: React.FC = () => {
    const [orderId, setOrderId] = useState('');
    const [status, setStatus] = useState('');

    const handleTrackOrder = (e: React.FormEvent) => {
        e.preventDefault();
        if(orderId.trim() === '') {
            setStatus('الرجاء إدخال رقم الطلب.');
            return;
        }
        // Dummy tracking logic
        setStatus(`جاري البحث عن حالة الطلب رقم ${orderId}...`);
        setTimeout(() => {
             // This is a mock response. In a real app, you would make an API call.
            const randomStatus = ['قيد التجهيز', 'تم الشحن', 'في الطريق للتسليم', 'تم التسليم'];
            const randomIndex = Math.floor(Math.random() * randomStatus.length);
            setStatus(`حالة الطلب رقم ${orderId}: ${randomStatus[randomIndex]}.`);
        }, 2000);
    }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">تتبع طلبك</h1>
        <p className="text-gray-600 mb-8">أدخل رقم طلبك أدناه لتتبع حالته.</p>
        <form onSubmit={handleTrackOrder} className="flex flex-col sm:flex-row gap-4">
          <input 
            type="text" 
            value={orderId}
            onChange={(e) => setOrderId(e.target.value)}
            placeholder="مثال: WS123456" 
            className="flex-grow w-full px-4 py-3 text-lg border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500" 
            />
          <button 
            type="submit" 
            className="bg-gray-800 text-white font-semibold py-3 px-8 rounded-md hover:bg-yellow-500 transition-colors"
          >
            تتبع
          </button>
        </form>
        {status && (
            <div className="mt-8 p-4 bg-gray-100 rounded-md text-lg font-semibold">
                {status}
            </div>
        )}
      </div>
    </div>
  );
};

export default TrackOrderPage;
