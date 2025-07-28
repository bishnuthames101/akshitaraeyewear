import React, { useState } from 'react';
import ProductFilters, { FilterState } from '../components/ProductFilters';
import { useCart } from '../context/CartContext';

export default function Sunglasses() {
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
      id: 'aviator-classic',
      name: "Aviator Classic",
      price: "$149.99",
      image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=600",
      features: ["100% UV protection", "Polarized lenses", "Metal frame"],
      material: "metal",
      color: "gold",
      brand: "rayban",
      faceShape: "oval",
      priceRange: "100-200"
    },
    {
      id: 'wayfarer',
      name: "Wayfarer",
      price: "$129.99",
      image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=600",
      features: ["Classic design", "Lightweight", "Scratch-resistant"],
      material: "acetate",
      color: "black",
      brand: "rayban",
      faceShape: "square",
      priceRange: "100-200"
    },
    {
      id: 'sport-pro',
      name: "Sport Pro",
      price: "$179.99",
      image: "https://images.unsplash.com/photo-1604785846291-944966cb5209?auto=format&fit=crop&w=600",
      features: ["Impact resistant", "Anti-fog coating", "Flexible frame"],
      material: "plastic",
      color: "black",
      brand: "oakley",
      faceShape: "round",
      priceRange: "100-200"
    },
    {
      id: 'classic-aviator',
      name: "Classic Aviator",
      price: "$89.99",
      image: "https://images.unsplash.com/photo-1508296695146-257a814070b4?auto=format&fit=crop&w=600",
      features: ["UV400 protection", "Lightweight frame", "Classic style"],
      material: "metal",
      color: "silver",
      brand: "gucci",
      faceShape: "heart",
      priceRange: "0-100"
    },
    {
      id: 'retro-round',
      name: "Retro Round",
      price: "$299.99",
      image: "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?auto=format&fit=crop&w=600",
      features: ["Premium acetate", "Vintage design", "Gradient lenses"],
      material: "acetate",
      color: "tortoise",
      brand: "prada",
      faceShape: "oval",
      priceRange: "200-300"
    }
  ];

  const filteredProducts = products.filter(product => {
    if (filters.faceShape && product.faceShape !== filters.faceShape) return false;
    if (filters.material && product.material !== filters.material) return false;
    if (filters.color && product.color !== filters.color) return false;
    if (filters.brand && product.brand !== filters.brand) return false;
    if (filters.priceRange && product.priceRange !== filters.priceRange) return false;
    return true;
  });

  return (
    <main className="pt-14 sm:pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8">Sunglasses Collection</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-8">
          <div className="lg:col-span-1">
            <ProductFilters filters={filters} onFilterChange={setFilters} />
          </div>
          
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              {filteredProducts.map((sunglasses) => (
                <div key={sunglasses.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <img src={sunglasses.image} alt={sunglasses.name} className="w-full h-40 sm:h-48 object-cover" />
                  <div className="p-4 sm:p-6">
                    <h2 className="text-lg sm:text-xl font-bold mb-2">{sunglasses.name}</h2>
                    <p className="text-blue-600 font-semibold mb-3 sm:mb-4 text-lg">{sunglasses.price}</p>
                    <ul className="space-y-1.5 sm:space-y-2 mb-4">
                      {sunglasses.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-600 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                          <span className="text-sm sm:text-base text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <button
                      onClick={() => addToCart({
                        id: sunglasses.id,
                        name: sunglasses.name,
                        price: sunglasses.price,
                        image: sunglasses.image
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