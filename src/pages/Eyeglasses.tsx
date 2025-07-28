import React, { useState } from 'react';
import ProductFilters, { FilterState } from '../components/ProductFilters';
import { useCart } from '../context/CartContext';

export default function Eyeglasses() {
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
      id: 'modern-rectangle',
      name: "Modern Rectangle",
      price: "$199.99",
      image: "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?auto=format&fit=crop&w=600",
      features: ["Lightweight titanium", "Anti-reflective coating", "Spring hinges"],
      material: "titanium",
      color: "silver",
      brand: "rayban",
      faceShape: "square",
      priceRange: "100-200"
    },
    {
      id: 'round-classic',
      name: "Round Classic",
      price: "$159.99",
      image: "https://images.unsplash.com/photo-1591076482161-42ce6da69f67?auto=format&fit=crop&w=600",
      features: ["Acetate frame", "Blue light filter", "Adjustable nose pads"],
      material: "acetate",
      color: "tortoise",
      brand: "gucci",
      faceShape: "round",
      priceRange: "100-200"
    },
    {
      id: 'cat-eye',
      name: "Cat Eye",
      price: "$179.99",
      image: "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?auto=format&fit=crop&w=600",
      features: ["Premium acetate", "Progressive ready", "Scratch-resistant coating"],
      material: "acetate",
      color: "black",
      brand: "prada",
      faceShape: "heart",
      priceRange: "100-200"
    },
    {
      id: 'vintage-round',
      name: "Vintage Round",
      price: "$129.99",
      image: "https://images.unsplash.com/photo-1586944176523-c86976b42432?auto=format&fit=crop&w=600",
      features: ["Metal frame", "Vintage style", "Clear lenses"],
      material: "metal",
      color: "gold",
      brand: "tomford",
      faceShape: "oval",
      priceRange: "100-200"
    },
    {
      id: 'designer-square',
      name: "Designer Square",
      price: "$349.99",
      image: "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?auto=format&fit=crop&w=600",
      features: ["Premium materials", "Designer brand", "Anti-glare coating"],
      material: "acetate",
      color: "black",
      brand: "gucci",
      faceShape: "diamond",
      priceRange: "300+"
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
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8">Eyeglasses Collection</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-8">
          <div className="lg:col-span-1">
            <ProductFilters filters={filters} onFilterChange={setFilters} />
          </div>
          
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              {filteredProducts.map((glasses) => (
                <div key={glasses.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <img src={glasses.image} alt={glasses.name} className="w-full h-40 sm:h-48 object-cover" />
                  <div className="p-4 sm:p-6">
                    <h2 className="text-lg sm:text-xl font-bold mb-2">{glasses.name}</h2>
                    <p className="text-blue-600 font-semibold mb-3 sm:mb-4 text-lg">{glasses.price}</p>
                    <ul className="space-y-1.5 sm:space-y-2 mb-4">
                      {glasses.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-600 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                          <span className="text-sm sm:text-base text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <button
                      onClick={() => addToCart({
                        id: glasses.id,
                        name: glasses.name,
                        price: glasses.price,
                        image: glasses.image
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