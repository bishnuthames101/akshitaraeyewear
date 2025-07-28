import React from 'react';
import { useState } from 'react';
import ProductFilters, { FilterState } from '../components/ProductFilters';
import { useCart } from '../context/CartContext';

export default function Lenses() {
  const [filters, setFilters] = useState<FilterState>({
    faceShape: '',
    material: '',
    priceRange: '',
    color: '',
    brand: ''
  });

  const { addToCart } = useCart();

  const products = [
    {
      id: 'daily-disposable',
      name: "Daily Disposable",
      price: "$30/box",
      image: "https://images.unsplash.com/photo-1587400988341-0263a5d37a6f?auto=format&fit=crop&w=600",
      features: ["Fresh lens every day", "No cleaning required", "Perfect for occasional wear"],
      material: "silicone",
      color: "clear",
      brand: "acuvue",
      faceShape: "all",
      priceRange: "0-100"
    },
    {
      id: 'monthly-disposable',
      name: "Monthly Disposable",
      price: "$45/box",
      image: "https://images.unsplash.com/photo-1591375275624-c2f9daafadb9?auto=format&fit=crop&w=600",
      features: ["Durable material", "Cost-effective", "Includes cleaning kit"],
      material: "hydrogel",
      color: "clear",
      brand: "biofinity",
      faceShape: "all",
      priceRange: "0-100"
    },
    {
      id: 'color-lenses',
      name: "Color Lenses",
      price: "$35/box",
      image: "https://images.unsplash.com/photo-1586944176523-c86976b42432?auto=format&fit=crop&w=600",
      features: ["Natural colors", "UV protection", "Breathable material"],
      material: "silicone",
      color: "colored",
      brand: "freshlook",
      faceShape: "all",
      priceRange: "0-100"
    },
    {
      id: 'extended-wear',
      name: "Extended Wear",
      price: "$65/box",
      image: "https://images.unsplash.com/photo-1587400988341-0263a5d37a6f?auto=format&fit=crop&w=600",
      features: ["30-day continuous wear", "High oxygen permeability", "FDA approved"],
      material: "silicone",
      color: "clear",
      brand: "airoptix",
      faceShape: "all",
      priceRange: "0-100"
    },
    {
      id: 'toric-astigmatism',
      name: "Toric for Astigmatism",
      price: "$85/box",
      image: "https://images.unsplash.com/photo-1591375275624-c2f9daafadb9?auto=format&fit=crop&w=600",
      features: ["Corrects astigmatism", "Stable vision", "Comfortable fit"],
      material: "hydrogel",
      color: "clear",
      brand: "acuvue",
      faceShape: "all",
      priceRange: "0-100"
    }
  ];

  const filteredProducts = products.filter(product => {
    if (filters.material && product.material !== filters.material) return false;
    if (filters.color && product.color !== filters.color) return false;
    if (filters.brand && product.brand !== filters.brand) return false;
    if (filters.priceRange && product.priceRange !== filters.priceRange) return false;
    return true;
  });

  return (
    <main className="pt-14 sm:pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8">Contact Lenses</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-8">
          <div className="lg:col-span-1">
            <ProductFilters filters={filters} onFilterChange={setFilters} />
          </div>
          
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              {filteredProducts.map((lens) => (
                <div key={lens.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <img src={lens.image} alt={lens.name} className="w-full h-40 sm:h-48 object-cover" />
                  <div className="p-4 sm:p-6">
                    <h2 className="text-lg sm:text-xl font-bold mb-2">{lens.name}</h2>
                    <p className="text-blue-600 font-semibold mb-3 sm:mb-4 text-lg">{lens.price}</p>
                    <ul className="space-y-1.5 sm:space-y-2 mb-4">
                      {lens.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-600 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                          <span className="text-sm sm:text-base text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <button
                      onClick={() => addToCart({
                        id: lens.id,
                        name: lens.name,
                        price: lens.price,
                        image: lens.image
                      })}
                      className="w-full bg-blue-600 text-white py-2.5 sm:py-2 rounded-md hover:bg-blue-700 transition duration-300 text-sm sm:text-base font-medium"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}