import React from 'react';
import { Star } from 'lucide-react';
import { Review } from '../types';

const reviews: Review[] = [
  { id: '1', name: 'Neha S.', rating: 5, text: "Amazing coffee and cozy atmosphere." },
  { id: '2', name: 'Karan M.', rating: 4, text: "Fresh pastries and friendly staff." },
  { id: '3', name: 'Ananya P.', rating: 5, text: "Perfect place to work remotely." }
];

export default function Reviews() {
  return (
    <section className="py-20 bg-emerald-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold font-serif tracking-tight sm:text-4xl text-white">What Our Customers Say</h2>
          <div className="mt-8 flex justify-center items-center gap-4">
            <div className="text-5xl font-bold">4.8</div>
            <div className="flex flex-col items-start">
              <div className="flex text-yellow-400 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} fill="currentColor" />
                ))}
              </div>
              <p className="text-emerald-100 text-sm">Based on 324 reviews</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map(review => (
            <div key={review.id} className="bg-emerald-800/50 p-8 rounded-2xl border border-emerald-700/50 backdrop-blur-sm">
              <div className="flex text-yellow-400 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="text-emerald-50 text-lg mb-6 italic">"{review.text}"</p>
              <p className="font-semibold text-white">{review.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
