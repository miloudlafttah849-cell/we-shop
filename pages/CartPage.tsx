
import React from 'react';
import { useCart } from '../context/CartContext';
import { NavLink } from 'react-router-dom';
import { Plus, Minus, Trash2 } from 'lucide-react';

const CartPage: React.FC = () => {
  const { cartItems, removeFromCart, updateQuantity, totalPrice, cartCount } = useCart();

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">سلة التسوق الخاصة بك</h1>
      {cartCount === 0 ? (
        <div className="text-center py-16 bg-white rounded-lg shadow-md">
          <p className="text-xl text-gray-600 mb-4">سلتك فارغة.</p>
          <NavLink to="/shop" className="bg-yellow-500 text-white font-semibold py-2 px-6 rounded-md hover:bg-yellow-600 transition-colors">
            ابدأ التسوق
          </NavLink>
        </div>
      ) : (
        <div className="lg:flex lg:space-x-8 lg:space-x-reverse">
          <div className="w-full lg:w-2/3">
            <div className="bg-white rounded-lg shadow-md">
              <ul className="divide-y divide-gray-200">
                {cartItems.map(item => (
                  <li key={item.id} className="flex items-center p-4 sm:p-6">
                    <img src={item.imageUrl} alt={item.name} className="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-md me-4 sm:me-6" />
                    <div className="flex-grow">
                      <h3 className="font-semibold text-lg">{item.name}</h3>
                      <p className="text-gray-600">{item.price.toFixed(2)} د.أ</p>
                      <div className="flex items-center mt-3">
                        <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="p-1 border rounded-md hover:bg-gray-100"><Minus size={16} /></button>
                        <span className="w-12 text-center font-semibold">{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="p-1 border rounded-md hover:bg-gray-100"><Plus size={16} /></button>
                      </div>
                    </div>
                    <button onClick={() => removeFromCart(item.id)} className="text-gray-500 hover:text-red-500 transition-colors ms-4">
                      <Trash2 size={20} />
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <aside className="w-full lg:w-1/3 mt-8 lg:mt-0">
            <div className="bg-white p-6 rounded-lg shadow-md sticky top-24">
              <h2 className="text-xl font-bold mb-4 border-b pb-2">ملخص الطلب</h2>
              <div className="flex justify-between mb-2">
                <span>المجموع الفرعي</span>
                <span>{totalPrice.toFixed(2)} د.أ</span>
              </div>
              <div className="flex justify-between mb-4">
                <span>الشحن</span>
                <span>سيتم تحديده</span>
              </div>
              <div className="flex justify-between font-bold text-lg border-t pt-4">
                <span>المجموع الكلي</span>
                <span>{totalPrice.toFixed(2)} د.أ</span>
              </div>
              <NavLink to="/checkout" className="mt-6 w-full bg-gray-800 text-white text-center font-bold py-3 px-6 rounded-lg hover:bg-yellow-500 transition-colors duration-300 block">
                التقدم لإتمام الطلب
              </NavLink>
            </div>
          </aside>
        </div>
      )}
    </div>
  );
};

export default CartPage;
