import React from 'react';
import { X, Minus, Plus, ShoppingBag, CreditCard, MapPin, Phone, User, Mail } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useState } from 'react';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CartDrawer({ isOpen, onClose }: CartDrawerProps) {
  const { items, removeFromCart, updateQuantity, total } = useCart();
  const [showCheckout, setShowCheckout] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    zipCode: ''
  });

  if (!isOpen) return null;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setOrderPlaced(true);
    setTimeout(() => {
      setOrderPlaced(false);
      setShowCheckout(false);
      onClose();
    }, 3000);
  };

  if (orderPlaced) {
    return (
      <div className="fixed inset-0 z-50 overflow-hidden lg:overflow-visible">
        <div className="absolute inset-0 bg-black bg-opacity-50" onClick={onClose} />
        
        <div className="absolute right-0 top-0 h-full w-full sm:max-w-md bg-white shadow-xl flex items-center justify-center">
          <div className="text-center p-8">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-xl font-bold text-gray-900 mb-2">Order Placed Successfully!</h2>
            <p className="text-gray-600 mb-4">Your order will be delivered within 3-5 business days.</p>
            <p className="text-sm text-gray-500">Payment: Cash on Delivery</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 overflow-hidden lg:overflow-visible">
      <div className="absolute inset-0 bg-black bg-opacity-50" onClick={onClose} />
      
      <div className="absolute right-0 top-0 h-full w-full sm:max-w-md bg-white shadow-xl">
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between p-4 sm:p-4 border-b">
            <div className="flex items-center gap-2">
              {showCheckout ? (
                <>
                  <CreditCard className="h-5 w-5 sm:h-6 sm:w-6" />
                  <h2 className="text-base sm:text-lg font-semibold">Checkout</h2>
                </>
              ) : (
                <>
                  <ShoppingBag className="h-5 w-5 sm:h-6 sm:w-6" />
                  <h2 className="text-base sm:text-lg font-semibold">Shopping Cart</h2>
                </>
              )}
            </div>
            <div className="flex items-center gap-2">
              {showCheckout && (
                <button 
                  onClick={() => setShowCheckout(false)} 
                  className="p-1.5 sm:p-2 hover:bg-gray-100 rounded-full text-gray-600"
                >
                  ←
                </button>
              )}
              <button onClick={onClose} className="p-1.5 sm:p-2 hover:bg-gray-100 rounded-full">
              <X className="h-5 w-5" />
            </button>
            </div>
          </div>

          {showCheckout ? (
            <form onSubmit={handlePlaceOrder} className="flex-1 overflow-y-auto p-4 sm:p-4">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    <User className="w-4 h-4 inline mr-1" />
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    <Mail className="w-4 h-4 inline mr-1" />
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    <Phone className="w-4 h-4 inline mr-1" />
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    <MapPin className="w-4 h-4 inline mr-1" />
                    Address *
                  </label>
                  <textarea
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    required
                    rows={3}
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
                    placeholder="Enter your complete address"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">City *</label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      required
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="City"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">ZIP Code *</label>
                    <input
                      type="text"
                      name="zipCode"
                      value={formData.zipCode}
                      onChange={handleInputChange}
                      required
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="ZIP"
                    />
                  </div>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Payment Method</h3>
                  <div className="flex items-center gap-2">
                    <input type="radio" id="cod" name="payment" value="cod" defaultChecked className="text-blue-600" />
                    <label htmlFor="cod" className="text-sm text-gray-700">Cash on Delivery (COD)</label>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">Pay when your order is delivered to your doorstep</p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Order Summary</h3>
                  {items.map((item) => (
                    <div key={item.id} className="flex justify-between text-sm mb-1">
                      <span>{item.name} x{item.quantity}</span>
                      <span>${(parseFloat(item.price.replace('$', '')) * item.quantity).toFixed(2)}</span>
                    </div>
                  ))}
                  <div className="border-t pt-2 mt-2">
                    <div className="flex justify-between font-semibold">
                      <span>Total</span>
                      <span>${total.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          ) : (
            <div className="flex-1 overflow-y-auto p-4 sm:p-4">
            {items.length === 0 ? (
              <div className="text-center py-8 sm:py-12">
                <ShoppingBag className="h-10 w-10 sm:h-12 sm:w-12 mx-auto text-gray-400 mb-4" />
                <p className="text-gray-500 text-sm sm:text-base">Your cart is empty</p>
              </div>
            ) : (
              <div className="space-y-3 sm:space-y-4">
                {items.map((item) => (
                  <div key={item.id} className="flex gap-3 sm:gap-4 bg-gray-50 p-3 sm:p-4 rounded-lg">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-16 w-16 sm:h-20 sm:w-20 object-cover rounded flex-shrink-0"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold text-sm sm:text-base">{item.name}</h3>
                      <p className="text-blue-600 text-sm sm:text-base font-medium">{item.price}</p>
                      <div className="flex items-center gap-2 mt-2 sm:mt-3">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-1 hover:bg-gray-200 rounded text-gray-600"
                        >
                          <Minus className="h-4 w-4" />
                        </button>
                        <span className="text-sm sm:text-base font-medium min-w-[2rem] text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-1 hover:bg-gray-200 rounded text-gray-600"
                        >
                          <Plus className="h-4 w-4" />
                        </button>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="ml-auto text-red-500 hover:text-red-600 text-xs sm:text-sm"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
            </div>
          )}

          <div className="border-t p-4 sm:p-4">
            {showCheckout ? (
              <button
                type="submit"
                form="checkout-form"
                onClick={handlePlaceOrder}
                className="w-full bg-green-600 text-white py-3 sm:py-2.5 rounded-md hover:bg-green-700 transition duration-300 text-sm sm:text-base font-medium"
                disabled={items.length === 0}
              >
                Place Order (COD)
              </button>
            ) : (
              <>
            <div className="flex justify-between mb-3 sm:mb-4">
              <span className="font-semibold text-base sm:text-lg">Total</span>
              <span className="font-semibold text-base sm:text-lg">${total.toFixed(2)}</span>
            </div>
            <button
                onClick={() => setShowCheckout(true)}
              className="w-full bg-blue-600 text-white py-3 sm:py-2.5 rounded-md hover:bg-blue-700 transition duration-300 text-sm sm:text-base font-medium"
              disabled={items.length === 0}
            >
              Checkout
            </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}