import React from 'react';
import { Facebook, Instagram, Mail, MapPin, Phone, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Asia Eye Care</h3>
            <p className="text-gray-400 text-sm sm:text-base">Providing quality eyewear solutions since 2000. Your vision is our priority.</p>
          </div>
          
          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Quick Links</h3>
            <ul className="space-y-1.5 sm:space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white text-sm sm:text-base transition-colors">Home</Link></li>
              <li><Link to="/sunglasses" className="text-gray-400 hover:text-white text-sm sm:text-base transition-colors">Sunglasses</Link></li>
              <li><Link to="/eyeglasses" className="text-gray-400 hover:text-white text-sm sm:text-base transition-colors">Eyeglasses</Link></li>
              <li><Link to="/lenses" className="text-gray-400 hover:text-white text-sm sm:text-base transition-colors">Contact Lenses</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white text-sm sm:text-base transition-colors">Contact Us</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Contact Info</h3>
            <ul className="space-y-2 sm:space-y-2">
              <li className="flex items-start">
                <MapPin className="h-4 w-4 sm:h-5 sm:w-5 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-400 text-sm sm:text-base">123 Eye Street, Vision City</span>
              </li>
              <li className="flex items-start">
                <Phone className="h-4 w-4 sm:h-5 sm:w-5 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-400 text-sm sm:text-base">+1 234 567 8900</span>
              </li>
              <li className="flex items-start">
                <Mail className="h-4 w-4 sm:h-5 sm:w-5 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-400 text-sm sm:text-base">info@asiaeyecare.com</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Follow Us</h3>
            <div className="flex space-x-3 sm:space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5 sm:h-6 sm:w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5 sm:h-6 sm:w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5 sm:h-6 sm:w-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center">
          <p className="text-gray-400 text-sm sm:text-base">&copy; {new Date().getFullYear()} Asia Eye Care. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}