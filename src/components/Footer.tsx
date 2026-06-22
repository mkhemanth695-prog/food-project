import React from 'react';
import { Instagram, Leaf, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-6">
              <Leaf className="h-8 w-8 text-emerald-500" />
              <span className="ml-2 text-2xl font-bold tracking-tight text-white">
                GreenLeaf
              </span>
            </div>
            <p className="text-gray-400 mb-6 max-w-sm">
              Your neighborhood spot for freshly brewed coffee, artisan pastries, and a warm community atmosphere.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/hemanth_mk_45/?__pwa=1#" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-emerald-600 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://wa.me/919663773972" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-emerald-600 hover:text-white transition-colors">
                 <MessageCircle size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-emerald-600 hover:text-white transition-colors font-bold">
                 X
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-emerald-600 hover:text-white transition-colors font-bold">
                 f
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#about" className="hover:text-emerald-400 transition-colors">About Us</a></li>
              <li><a href="#menu" className="hover:text-emerald-400 transition-colors">Menu</a></li>
              <li><a href="#services" className="hover:text-emerald-400 transition-colors">Services</a></li>
              <li><a href="#gallery" className="hover:text-emerald-400 transition-colors">Gallery</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Features</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex justify-between border-b border-gray-800 pb-2">
                <span>Capacity</span>
                <span className="text-white">60 Seats</span>
              </li>
              <li className="flex justify-between border-b border-gray-800 pb-2">
                <span>Daily Visitors</span>
                <span className="text-white">150-200</span>
              </li>
              <li className="flex justify-between border-b border-gray-800 pb-2">
                <span>Delivery</span>
                <span className="text-emerald-400">Available</span>
              </li>
              <li className="flex justify-between border-b border-gray-800 pb-2">
                <span>Parking</span>
                <span className="text-emerald-400">Available</span>
              </li>
              <li className="flex justify-between border-b border-gray-800 pb-2">
                <span>Pet Friendly</span>
                <span className="text-emerald-400">Yes</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} HEMANTH GreenLeaf Café & Bakery. All rights reserved.</p>
          <div className="mt-4 md:mt-0">
             <a href="https://www.greenleafcafe.com" target="_blank" className="hover:text-emerald-400">www.greenleafcafe.com</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
