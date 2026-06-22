import { Coffee, Croissant, Users, Wifi, Sun, Calendar, UtensilsCrossed, Leaf } from 'lucide-react';
import React from 'react';

const services = [
  { icon: Coffee, title: 'Specialty Coffee', description: 'Expertly brewed from locally sourced beans.' },
  { icon: Croissant, title: 'Fresh Bakery Items', description: 'Baked fresh daily by our artisan chefs.' },
  { icon: Sun, title: 'Breakfast Menu', description: 'Start your day with healthy and delicious options.' },
  { icon: UtensilsCrossed, title: 'Lunch Menu', description: 'Satisfying meals focusing on local ingredients.' },
  { icon: Users, title: 'Catering Services', description: 'Perfect for events and corporate meetings.' },
  { icon: Wifi, title: 'Free Wi-Fi', description: 'High-speed internet for remote workers and students.' },
  { icon: Leaf, title: 'Outdoor Seating', description: 'Enjoy your coffee in the fresh air.' },
  { icon: Calendar, title: 'Event Hosting', description: 'Book our space for your special occasions.' }
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-emerald-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold font-serif tracking-tight text-gray-900 sm:text-4xl">Our Services</h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-600 mx-auto">
            Everything you need for a perfect café experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-emerald-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center mb-4">
                  <Icon size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
