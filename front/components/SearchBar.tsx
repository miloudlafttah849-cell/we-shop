
import React, { useState, useEffect, useRef } from 'react';
import { Search, X } from 'lucide-react';
import { products } from '../data/products';
import { Product } from '../types';
import { NavLink } from 'react-router-dom';

interface SearchBarProps {
  onClose: () => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onClose }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Product[]>([]);
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (query.length > 1) {
      const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(query.toLowerCase())
      );
      setResults(filteredProducts.slice(0, 5)); // Limit to 5 results
    } else {
      setResults([]);
    }
  }, [query]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        onClose();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-start pt-20">
      <div ref={searchRef} className="relative w-full max-w-lg mx-4">
        <div className="relative">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="ابحث عن منتج..."
            className="w-full h-12 pe-4 ps-12 text-lg border rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
            autoFocus
          />
          <Search className="absolute top-1/2 -translate-y-1/2 start-4 text-gray-400" size={24} />
          <button onClick={onClose} className="absolute top-1/2 -translate-y-1/2 end-2 p-2 text-gray-500 hover:text-gray-800">
            <X size={24} />
          </button>
        </div>
        {results.length > 0 && (
          <ul className="absolute w-full mt-2 bg-white border rounded-lg shadow-lg overflow-hidden">
            {results.map(product => (
              <li key={product.id}>
                <NavLink 
                  to={`/product/${product.id}`} 
                  onClick={onClose}
                  className="flex items-center p-3 hover:bg-gray-100 transition-colors"
                >
                  <img src={product.imageUrl} alt={product.name} className="w-12 h-12 object-cover rounded-md me-4" />
                  <div className="flex-grow">
                    <p className="font-semibold">{product.name}</p>
                    <p className="text-sm text-yellow-600">{product.price.toFixed(2)} د.أ</p>
                  </div>
                </NavLink>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
