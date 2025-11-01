
import React from 'react';
import { NavLink } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="group border rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 bg-white">
      <NavLink to={`/product/${product.id}`} className="block">
        <div className="overflow-hidden">
          <img 
            src={product.imageUrl} 
            alt={product.name} 
            className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300" 
          />
        </div>
      </NavLink>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 truncate">{product.name}</h3>
        <p className="text-sm text-gray-500 mb-3">{product.category}</p>
        <div className="flex items-center justify-between">
          <p className="text-xl font-bold text-gray-900">{product.price.toFixed(2)} د.أ</p>
          <button 
            onClick={() => addToCart(product)} 
            className="bg-gray-800 text-white p-2 rounded-full hover:bg-yellow-500 transition-colors duration-200"
            aria-label={`إضافة ${product.name} إلى السلة`}
          >
            <ShoppingCart size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
