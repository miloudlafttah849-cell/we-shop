
import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

const CheckoutPage: React.FC = () => {
    const { cartItems, totalPrice, clearCart } = useCart();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phone: '',
        address: '',
        city: '',
        state: '',
        notes: '',
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would typically send the order to your backend
        console.log('Order submitted:', {
            customer: formData,
            items: cartItems,
            total: totalPrice,
            paymentMethod: 'Cash on Delivery'
        });
        alert('شكراً لك! تم استلام طلبك بنجاح. سنتواصل معك قريباً للتأكيد.');
        clearCart();
        navigate('/');
    };

    if (cartItems.length === 0) {
        return (
            <div className="container mx-auto px-4 py-12 text-center">
                <h1 className="text-2xl">سلتك فارغة. لا يمكنك إتمام الطلب.</h1>
            </div>
        );
    }

    return (
        <div className="bg-gray-100 py-12">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold text-center mb-8">إتمام الطلب</h1>
                <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2 bg-white p-8 rounded-lg shadow-md">
                        <h2 className="text-2xl font-bold mb-6">تفاصيل الفاتورة</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block font-semibold mb-1">الاسم الأول *</label>
                                <input type="text" name="firstName" value={formData.firstName} onChange={handleInputChange} className="w-full p-2 border rounded-md" required />
                            </div>
                            <div>
                                <label className="block font-semibold mb-1">الاسم الأخير *</label>
                                <input type="text" name="lastName" value={formData.lastName} onChange={handleInputChange} className="w-full p-2 border rounded-md" required />
                            </div>
                        </div>
                        <div className="mt-6">
                            <label className="block font-semibold mb-1">رقم الهاتف *</label>
                            <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} className="w-full p-2 border rounded-md" required />
                        </div>
                        <div className="mt-6">
                            <label className="block font-semibold mb-1">عنوان الشارع *</label>
                            <input type="text" name="address" value={formData.address} onChange={handleInputChange} className="w-full p-2 border rounded-md" placeholder="اسم الشارع ورقم المنزل" required />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                             <div>
                                <label className="block font-semibold mb-1">المدينة *</label>
                                <input type="text" name="city" value={formData.city} onChange={handleInputChange} className="w-full p-2 border rounded-md" required />
                            </div>
                             <div>
                                <label className="block font-semibold mb-1">المنطقة / المحافظة *</label>
                                <input type="text" name="state" value={formData.state} onChange={handleInputChange} className="w-full p-2 border rounded-md" required />
                            </div>
                        </div>
                        <div className="mt-6">
                            <label className="block font-semibold mb-1">ملاحظات الطلب (اختياري)</label>
                            <textarea name="notes" value={formData.notes} onChange={handleInputChange} className="w-full p-2 border rounded-md" rows={4} placeholder="ملاحظات حول طلبك، مثل ملاحظات خاصة للتسليم."></textarea>
                        </div>
                    </div>
                    
                    <div className="lg:col-span-1">
                         <div className="bg-white p-8 rounded-lg shadow-md">
                            <h2 className="text-2xl font-bold mb-6">طلبك</h2>
                            <ul className="space-y-4 border-b pb-4">
                                {cartItems.map(item => (
                                    <li key={item.id} className="flex justify-between text-sm">
                                        <span>{item.name} × {item.quantity}</span>
                                        <span className="font-semibold">{(item.price * item.quantity).toFixed(2)} د.أ</span>
                                    </li>
                                ))}
                            </ul>
                            <div className="flex justify-between font-semibold my-4">
                                <span>المجموع الفرعي</span>
                                <span>{totalPrice.toFixed(2)} د.أ</span>
                            </div>
                             <div className="flex justify-between font-semibold border-b pb-4">
                                <span>الشحن</span>
                                <span>سعر ثابت</span>
                            </div>
                            <div className="flex justify-between font-bold text-xl my-4">
                                <span>المجموع الكلي</span>
                                <span>{totalPrice.toFixed(2)} د.أ</span>
                            </div>
                            <div className="mt-6 bg-gray-50 p-4 rounded-md">
                                <h3 className="font-semibold">الدفع عند الاستلام</h3>
                                <p className="text-sm text-gray-600 mt-2">ادفع نقدًا عند استلامك للطلب.</p>
                            </div>
                            <button type="submit" className="mt-6 w-full bg-gray-800 text-white font-bold py-3 px-6 rounded-lg hover:bg-yellow-500 transition-colors duration-300 text-lg">
                                تأكيد الطلب
                            </button>
                         </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CheckoutPage;
