import React from 'react';
import { TeamMember } from '../types';

const team: TeamMember[] = [
  { 
    id: '1', 
    name: 'Aarav Sharma', 
    role: 'Owner & Head Barista',
    imageUrl: 'https://images.unsplash.com/photo-1583336214300-80de67a351ee?auto=format&fit=crop&q=80&w=1964&ixlib=rb-4.0.3'
  },
  { 
    id: '2', 
    name: 'Priya Nair', 
    role: 'Bakery Chef',
    imageUrl: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&q=80&w=2154&ixlib=rb-4.0.3'
  },
  { 
    id: '3', 
    name: 'Rahul Verma', 
    role: 'Café Manager',
    imageUrl: 'https://images.unsplash.com/photo-1600486913747-55e5470d6f40?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3'
  }
];

export default function Team() {
  return (
    <section id="team" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold font-serif tracking-tight text-gray-900 sm:text-4xl">Meet Our Team</h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-600 mx-auto">
            The passionate people behind your favorite coffee and pastries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {team.map(member => (
            <div key={member.id} className="text-center group">
              <div className="relative inline-block mb-6 overflow-hidden rounded-full p-2 bg-white shadow-sm border border-gray-100">
                <img 
                  src={member.imageUrl} 
                  alt={member.name} 
                  className="w-48 h-48 rounded-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
              <p className="text-emerald-600 font-medium">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
