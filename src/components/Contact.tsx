import React from 'react';
import { Phone, Mail, MapPin, Map, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold font-serif tracking-tight text-gray-900 sm:text-4xl">Visit Us</h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-600 mx-auto">
            We'd love to hear from you and see you in person.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-10">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-emerald-100 text-emerald-600">
                  <MapPin size={24} />
                </div>
              </div>
              <div className="ml-6">
                <h3 className="text-lg font-medium text-gray-900">Our Location</h3>
                <p className="mt-2 text-base text-gray-600">
                  ulavi appu cercul , Whitefield<br />
                  ulavi, shivamogga<br />
                  Karnataka 560066
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-emerald-100 text-emerald-600">
                  <Phone size={24} />
                </div>
              </div>
              <div className="ml-6">
                <h3 className="text-lg font-medium text-gray-900">Phone</h3>
                <p className="mt-2 text-base text-gray-600">
                  <a href="tel:+919663773972" className="hover:text-emerald-600 transition-colors">+91 9663773972</a>
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-emerald-100 text-emerald-600">
                  <Mail size={24} />
                </div>
              </div>
              <div className="ml-6">
                <h3 className="text-lg font-medium text-gray-900">Email</h3>
                <p className="mt-2 text-base text-gray-600">
                  <a href="mailto:hemanthmk93@gmail.com" className="hover:text-emerald-600 transition-colors">hemanthmk93@gmail.com</a>
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-emerald-100 text-emerald-600">
                  <Clock size={24} />
                </div>
              </div>
              <div className="ml-6">
                <h3 className="text-lg font-medium text-gray-900">Business Hours</h3>
                <div className="mt-2 text-base text-gray-600 grid grid-cols-2 gap-x-4">
                  <span>Monday - Thursday:</span> <span>7:00 AM – 9:00 PM</span>
                  <span>Friday:</span> <span>7:00 AM – 10:00 PM</span>
                  <span>Saturday:</span> <span>8:00 AM – 10:00 PM</span>
                  <span>Sunday:</span> <span>8:00 AM – 8:00 PM</span>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-lg h-[400px] lg:h-auto border border-gray-200 relative bg-gray-200">
             {/* Map Placeholder, using an image for visual */}
             <div className="absolute inset-0 flex items-center justify-center flex-col text-gray-500 bg-gray-100 z-10">
               <Map size={48} className="mb-4 text-emerald-300" />
               <p>Interactive Map View</p>
             </div>
             {/* Embed Google maps optionally later, for now visual placeholder is cleaner */}
             <iframe 
                title="Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15552.0123!2d77.72!3d12.97!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae11f3!2sWhitefield%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v162!5m2!1sen!2sin" 
                className="absolute inset-0 w-full h-full z-20 opacity-80 mix-blend-multiply" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
             ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
