import React, { useState, useEffect, useRef } from 'react';
import { Search, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface Product {
  id: string;
  name: string;
  type: 'sunglasses' | 'eyeglasses' | 'lenses';
  image: string;
}

export default function SearchBar() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Product[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  // Sample product data - in a real app, this would come from your backend
  const products: Product[] = [
    { id: 'aviator-classic', name: 'Aviator Classic', type: 'sunglasses', image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=200' },
    { id: 'wayfarer', name: 'Wayfarer', type: 'sunglasses', image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=200' },
    { id: 'sport-pro', name: 'Sport Pro', type: 'sunglasses', image: 'https://images.unsplash.com/photo-1604785846291-944966cb5209?auto=format&fit=crop&w=200' },
    { id: 'modern-rectangle', name: 'Modern Rectangle', type: 'eyeglasses', image: 'https://images.unsplash.com/photo-1574258495973-f010dfbb5371?auto=format&fit=crop&w=200' },
    { id: 'round-classic', name: 'Round Classic', type: 'eyeglasses', image: 'https://images.unsplash.com/photo-1591076482161-42ce6da69f67?auto=format&fit=crop&w=200' },
    { id: 'cat-eye', name: 'Cat Eye', type: 'eyeglasses', image: 'https://images.unsplash.com/photo-1574258495973-f010dfbb5371?auto=format&fit=crop&w=200' },
    { id: 'daily-disposable', name: 'Daily Disposable', type: 'lenses', image: 'https://images.unsplash.com/photo-1587400988341-0263a5d37a6f?auto=format&fit=crop&w=200' },
    { id: 'monthly-disposable', name: 'Monthly Disposable', type: 'lenses', image: 'https://images.unsplash.com/photo-1591375275624-c2f9daafadb9?auto=format&fit=crop&w=200' },
    { id: 'color-lenses', name: 'Color Lenses', type: 'lenses', image: 'https://images.unsplash.com/photo-1586944176523-c86976b42432?auto=format&fit=crop&w=200' },
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleInputFocus = () => {
    if (query.length >= 2 && results.length > 0) {
      setIsOpen(true);
    }
  };

  useEffect(() => {
    if (query.length >= 2) {
      const filtered = products.filter(product =>
        product.name.toLowerCase().includes(query.toLowerCase())
      );
      setResults(filtered);
      setIsOpen(true);
    } else {
      setResults([]);
      setIsOpen(false);
    }
  }, [query, products]);

  const handleSelect = (product: Product) => {
    setQuery('');
    setIsOpen(false);
    navigate(`/${product.type}`);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && results.length > 0) {
      handleSelect(results[0]);
    } else if (e.key === 'Escape') {
      setIsOpen(false);
    }
  };

  return (
    <div ref={searchRef} className="relative">
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={handleInputFocus}
          onKeyDown={handleKeyDown}
          placeholder="Search eyewear..."
          className="w-full pl-10 pr-10 py-2.5 sm:py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-sm text-gray-900 placeholder-gray-500 bg-white shadow-sm hover:shadow-md focus:shadow-lg"
        />
        <Search className="absolute left-3 top-2.5 sm:top-3.5 h-4 w-4 text-gray-400" />
        {query && (
          <button
            onClick={() => {
              setQuery('');
              setIsOpen(false);
            }}
            className="absolute right-3 top-2.5 sm:top-3.5 text-gray-400 hover:text-gray-600 transition-colors duration-200"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>

      {isOpen && results.length > 0 && (
        <div className="absolute z-[9999] w-full mt-1 bg-white rounded-lg shadow-xl border border-gray-200 max-h-64 sm:max-h-80 overflow-y-auto">
          {results.map((product) => (
            <div
              key={product.id}
              onClick={() => handleSelect(product)}
              className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 hover:bg-blue-50 cursor-pointer transition-colors duration-200 border-b border-gray-100 last:border-b-0"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-12 h-12 sm:w-14 sm:h-14 object-cover rounded-lg shadow-sm flex-shrink-0"
              />
              <div>
                <div className="font-semibold text-gray-900 text-sm sm:text-base">{product.name}</div>
                <div className="text-xs sm:text-sm text-blue-600 capitalize font-medium">{product.type.replace('lenses', 'contact lenses')}</div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}