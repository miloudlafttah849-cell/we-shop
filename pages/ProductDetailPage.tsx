
import React from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { Facebook, Instagram, Share2, Twitter } from 'lucide-react'; // Using Twitter instead of TikTok as an example

const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { addToCart } = useCart();
  const product = products.find(p => p.id === parseInt(id || ''));

  if (!product) {
    return <div className="text-center py-20">المنتج غير موجود.</div>;
  }

  // NOTE: In a real app, these meta tags would be set using React Helmet or similar library
  // to affect the document <head>. This is a simulation.
  const setMetaTags = () => {
    // document.title = product.name;
    // let metaOgImage = document.querySelector('meta[property="og:image"]');
    // if(metaOgImage) metaOgImage.setAttribute("content", product.imageUrl);
  };
  setMetaTags();


  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-white p-8 rounded-lg shadow-xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <img src={product.imageUrl} alt={product.name} className="w-full h-auto object-cover rounded-lg shadow-md" />
          </div>
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-3">{product.name}</h1>
            <p className="text-gray-500 text-lg mb-4">{product.category}</p>
            <p className="text-3xl font-bold text-yellow-600 mb-6">{product.price.toFixed(2)} د.أ</p>
            <p className="text-gray-700 leading-relaxed mb-6">{product.description}</p>
            <button
              onClick={() => addToCart(product)}
              className="w-full bg-gray-800 text-white font-bold py-3 px-6 rounded-lg hover:bg-yellow-500 transition-colors duration-300 text-lg"
            >
              أضف إلى السلة
            </button>
            <div className="mt-8">
                <h3 className="font-semibold mb-3">شارك هذا المنتج:</h3>
                <div className="flex space-x-4 space-x-reverse">
                    <a href="#" className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"><Facebook size={20} /></a>
                    <a href="#" className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"><Instagram size={20} /></a>
                    <a href="#" className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"><Twitter size={20} /></a>
                    <a href="#" className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"><Share2 size={20} /></a>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
