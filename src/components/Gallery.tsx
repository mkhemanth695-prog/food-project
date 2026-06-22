import React from 'react';

const images = [
  'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&q=80&w=2071&ixlib=rb-4.0.3', // Coffee pour
  'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=2072&ixlib=rb-4.0.3', // Bread/bakery
  'https://images.unsplash.com/photo-1484242857719-4b9144542727?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3', // Avocado toast
  'https://images.unsplash.com/photo-1445116572660-236099ec97a0?auto=format&fit=crop&q=80&w=2071&ixlib=rb-4.0.3', // Cafe exterior/vibe
  'https://images.unsplash.com/photo-1550461716-281ad12ab480?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3', // Croissant
  'https://images.unsplash.com/photo-1559560416-dd4afbf6e72d?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3'  // Interior seating
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold font-serif tracking-tight text-gray-900 sm:text-4xl">Gallery</h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-600 mx-auto">
            A glimpse into our space and our creations.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
          {images.map((src, index) => (
             <div key={index} className="overflow-hidden rounded-2xl aspect-square bg-gray-100">
               <img 
                 src={src} 
                 alt={`Gallery image ${index + 1}`}
                 className="w-full h-full object-cover hover:scale-110 transition-transform duration-700 ease-in-out cursor-pointer"
               />
             </div>
          ))}
        </div>
      </div>
    </section>
  );
}
