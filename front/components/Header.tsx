
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ShoppingCart, Search, Menu, X } from 'lucide-react';
import { useCart } from '../context/CartContext';
import SearchBar from './SearchBar';

const Header: React.FC = () => {
  const { cartCount } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `py-2 px-3 rounded-lg transition-colors duration-200 ${
      isActive ? 'bg-gray-800 text-white' : 'hover:bg-gray-700 hover:text-white'
    }`;

  return (
    <>
      <header className="bg-gray-900 text-white shadow-md sticky top-0 z-40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <NavLink to="/" className="text-2xl font-bold text-white">
                We Shop
              </NavLink>
              <nav className="hidden md:flex items-baseline ms-10 space-x-4 space-x-reverse">
                <NavLink to="/" className={navLinkClass}>الرئيسية</NavLink>
                <NavLink to="/shop" className={navLinkClass}>المتجر</NavLink>
                <NavLink to="/contact" className={navLinkClass}>تواصل معنا</NavLink>
              </nav>
            </div>
            <div className="flex items-center space-x-4 space-x-reverse">
              <button onClick={() => setIsSearchOpen(true)} className="p-2 rounded-full hover:bg-gray-700 transition-colors">
                <Search size={22} />
              </button>
              <NavLink to="/cart" className="relative p-2 rounded-full hover:bg-gray-700 transition-colors">
                <ShoppingCart size={22} />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -start-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </NavLink>
              <div className="hidden md:flex items-center space-x-2 space-x-reverse text-sm">
                <button className="font-semibold hover:text-gray-300">Fr</button>
                <span>|</span>
                <button className="font-semibold text-yellow-400 hover:text-yellow-300">ع</button>
              </div>
              <div className="md:hidden">
                <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 rounded-md hover:bg-gray-700">
                  {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
            </div>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavLink to="/" className={navLinkClass} onClick={() => setIsMenuOpen(false)}>الرئيسية</NavLink>
            <NavLink to="/shop" className={navLinkClass} onClick={() => setIsMenuOpen(false)}>المتجر</NavLink>
            <NavLink to="/contact" className={navLinkClass} onClick={() => setIsMenuOpen(false)}>تواصل معنا</NavLink>
            <div className="flex items-center space-x-2 space-x-reverse text-sm pt-2 border-t border-gray-700">
              <button className="font-semibold hover:text-gray-300">Fr</button>
              <span>|</span>
              <button className="font-semibold text-yellow-400 hover:text-yellow-300">ع</button>
            </div>
          </div>
        )}
      </header>
      {isSearchOpen && <SearchBar onClose={() => setIsSearchOpen(false)} />}
    </>
  );
};

export default Header;
