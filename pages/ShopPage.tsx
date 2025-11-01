
import React, { useState, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { products, categories } from '../data/products';

const ShopPage: React.FC = () => {
  const { category: categoryParam } = useParams<{ category?: string }>();
  const [activeCategory, setActiveCategory] = useState(categoryParam || 'all');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = useMemo(() => {
    return products
      .filter(product => activeCategory === 'all' || product.category === activeCategory)
      .filter(product => product.name.toLowerCase().includes(searchTerm.toLowerCase()));
  }, [activeCategory, searchTerm]);

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="lg:flex lg:space-x-8 lg:space-x-reverse">
        <aside className="w-full lg:w-1/4 mb-8 lg:mb-0">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4 border-b pb-2">الفئات</h3>
            <ul className="space-y-2">
              {categories.map(cat => (
                <li key={cat.key}>
                  <button
                    onClick={() => setActiveCategory(cat.key)}
                    className={`w-full text-start p-2 rounded-md transition-colors ${
                      activeCategory === cat.key
                        ? 'bg-yellow-500 text-white font-semibold'
                        : 'hover:bg-gray-100'
                    }`}
                  >
                    {cat.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        <main className="w-full lg:w-3/4">
          <div className="mb-6">
            <input
              type="text"
              placeholder="ابحث في المنتجات..."
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>
          {filteredProducts.length > 0 ? (
             <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-white rounded-lg shadow-md">
                <p className="text-xl text-gray-600">لم يتم العثور على منتجات تطابق بحثك.</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default ShopPage;
