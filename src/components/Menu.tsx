import React from 'react';
import { MenuItem } from '../types';

const menuItems: MenuItem[] = [
  { id: '1', category: 'Coffee', name: 'Espresso', price: 120 },
  { id: '2', category: 'Coffee', name: 'Cappuccino', price: 180 },
  { id: '3', category: 'Coffee', name: 'Latte', price: 200 },
  { id: '4', category: 'Coffee', name: 'Cold Brew', price: 220 },
  { id: '5', category: 'Bakery', name: 'Croissant', price: 150 },
  { id: '6', category: 'Bakery', name: 'Blueberry Muffin', price: 140 },
  { id: '7', category: 'Bakery', name: 'Chocolate Cake Slice', price: 180 },
  { id: '8', category: 'Food', name: 'Avocado Toast', price: 280 },
  { id: '9', category: 'Food', name: 'Veg Sandwich', price: 220 },
  { id: '10', category: 'Food', name: 'Chicken Wrap', price: 320 },
  { id: '11', category: 'Food', name: 'Caesar Salad', price: 290 },
];

export default function Menu() {
  const categories = ['Coffee', 'Bakery', 'Food'] as const;

  return (
    <section id="menu" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold font-serif tracking-tight text-gray-900 sm:text-4xl">Our Menu</h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-600 mx-auto">
            Freshly brewed and baked with love.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {categories.map(category => (
            <div key={category} className="space-y-6">
              <h3 className="text-2xl font-bold text-emerald-800 border-b-2 border-emerald-100 pb-2 flex items-center">
                {category}
              </h3>
              <ul className="space-y-4">
                {menuItems
                  .filter(item => item.category === category)
                  .map(item => (
                    <li key={item.id} className="flex justify-between items-baseline group hover:bg-emerald-50 rounded p-2 -mx-2 transition-colors">
                      <span className="text-lg font-medium text-gray-800">{item.name}</span>
                      <span className="text-emerald-700 font-medium">₹{item.price}</span>
                    </li>
                  ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
