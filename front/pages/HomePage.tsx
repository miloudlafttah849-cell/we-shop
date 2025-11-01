
import React from 'react';
import ImageSlider from '../components/ImageSlider';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';
import { NavLink } from 'react-router-dom';

const HomePage: React.FC = () => {
  const featuredProducts = products.slice(0, 4);

  return (
    <div>
      <ImageSlider />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">المنتجات المميزة</h2>
          <p className="text-gray-600 mt-2">تصفح مجموعتنا المختارة من أفضل المنتجات</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="text-center mt-12">
            <NavLink to="/shop" className="bg-gray-800 text-white font-semibold py-3 px-8 rounded-md hover:bg-yellow-500 transition-transform duration-300 transform hover:-translate-y-1">
                عرض كل المنتجات
            </NavLink>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
