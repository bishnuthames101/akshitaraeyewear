import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Lenses from './pages/Lenses';
import Sunglasses from './pages/Sunglasses';
import Eyeglasses from './pages/Eyeglasses';
import Contact from './pages/Contact';
import CartDrawer from './components/CartDrawer';
import { CartProvider } from './context/CartContext';
import ScrollToTop from './components/ScrollToTop';
import InstallPrompt from './components/InstallPrompt';
import OfflineIndicator from './components/OfflineIndicator';

export default function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <CartProvider>
      <div className="min-h-screen bg-gray-50">
        <ScrollToTop />
        <Navbar onCartClick={() => setIsCartOpen(true)} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/lenses" element={<Lenses />} />
          <Route path="/sunglasses" element={<Sunglasses />} />
          <Route path="/eyeglasses" element={<Eyeglasses />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
        <Footer />
        <InstallPrompt />
        <OfflineIndicator />
      </div>
    </CartProvider>
  );
}