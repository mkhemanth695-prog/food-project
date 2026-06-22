import React from 'react';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center bg-gray-900">
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=2047&ixlib=rb-4.0.3")',
          opacity: 0.6
        }}
      />
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-16">
        <h1 className="text-5xl md:text-7xl font-bold font-serif text-white mb-6 drop-shadow-lg tracking-tight">
          HEMANTH GreenLeaf <br className="hidden md:block"/> Café & Bakery
        </h1>
        <p className="text-xl md:text-3xl text-emerald-100 font-medium mb-10 drop-shadow">
          Freshly Brewed. Freshly Baked.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#menu" className="btn px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full font-medium text-lg transition-transform hover:scale-105 inline-block">
            View Menu
          </a>
          <a href="#contact" className="btn px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/30 hover:bg-white/20 text-white rounded-full font-medium text-lg transition-colors inline-block">
            Find Us
          </a>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 rounded-full border-2 border-white flex justify-center p-2">
          <div className="w-1 h-3 bg-white rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
