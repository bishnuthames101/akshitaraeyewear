import React from 'react';
import { Link } from 'react-router-dom';
import { Glasses, Menu, ShoppingCart, X } from 'lucide-react';
import { useState } from 'react';
import { useCart } from '../context/CartContext';

interface NavbarProps {
  onCartClick: () => void;
}

export default function Navbar({ onCartClick }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { items } = useCart();

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="bg-white shadow-md fixed w-full z-50 top-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-14 sm:h-16 items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Glasses className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600" />
              <span className="ml-2 text-lg sm:text-xl font-bold text-gray-800">AkshiTara Eyewear</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <Link to="/" className="text-gray-600 hover:text-blue-600 text-sm lg:text-base py-2">Home</Link>
            <Link to="/sunglasses" className="text-gray-600 hover:text-blue-600 text-sm lg:text-base py-2">Sunglasses</Link>
            <Link to="/eyeglasses" className="text-gray-600 hover:text-blue-600 text-sm lg:text-base py-2">Eyeglasses</Link>
            <Link to="/lenses" className="text-gray-600 hover:text-blue-600 text-sm lg:text-base py-2">Lenses</Link>
            <Link to="/contact" className="text-gray-600 hover:text-blue-600 text-sm lg:text-base py-2">Contact</Link>
            
            <button 
              onClick={onCartClick}
              className="flex items-center text-gray-600 hover:text-blue-600 text-sm lg:text-base py-2"
            >
              <ShoppingCart className="h-5 w-5 lg:h-6 lg:w-6" />
              <span className="ml-1 hidden lg:inline">Cart ({totalItems})</span>
              <span className="ml-1 lg:hidden">({totalItems})</span>
            </button>
          </div>

          <div className="md:hidden flex items-center space-x-3">
            <button 
              onClick={onCartClick}
              className="flex items-center text-gray-600 hover:text-blue-600 relative"
            >
              <ShoppingCart className="h-6 w-6" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-1"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
          <div className="px-4 pt-2 pb-3 space-y-1">
            <Link 
              to="/" 
              className="block px-3 py-3 text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-md text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/sunglasses" 
              className="block px-3 py-3 text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-md text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Sunglasses
            </Link>
            <Link 
              to="/eyeglasses" 
              className="block px-3 py-3 text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-md text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Eyeglasses
            </Link>
            <Link 
              to="/lenses" 
              className="block px-3 py-3 text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-md text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Lenses
            </Link>
            <Link 
              to="/contact" 
              className="block px-3 py-3 text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-md text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}