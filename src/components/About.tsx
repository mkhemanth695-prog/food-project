import React from 'react';
import { Coffee, MapPin, Users } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&q=80&w=2071&ixlib=rb-4.0.3" 
              alt="Café Interior" 
              className="rounded-2xl shadow-2xl object-cover h-[500px] w-full"
            />
            <div className="absolute -bottom-8 -right-8 bg-emerald-600 p-8 rounded-2xl shadow-xl hidden md:block">
              <div className="text-white text-center">
                <span className="block text-4xl font-bold mb-1">2019</span>
                <span className="text-emerald-100 text-sm font-medium uppercase tracking-wider">Established</span>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-3xl font-bold font-serif tracking-tight text-gray-900 sm:text-4xl mb-6">
              Your Neighborhood Spot
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              GreenLeaf Café & Bakery is a neighborhood coffee shop serving specialty coffee, artisan pastries, breakfast items, and healthy lunch options. We focus on locally sourced ingredients and creating a welcoming, warm atmosphere for students, remote workers, and families alike.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-emerald-50 flex items-center justify-center shrink-0">
                  <Coffee className="text-emerald-600" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Locally Sourced</h4>
                  <p className="text-sm text-gray-600">The finest beans and freshest ingredients.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-emerald-50 flex items-center justify-center shrink-0">
                  <Users className="text-emerald-600" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Community First</h4>
                  <p className="text-sm text-gray-600">A cozy space to connect and create.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
