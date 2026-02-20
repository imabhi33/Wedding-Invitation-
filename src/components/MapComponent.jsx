import React from 'react';
import { MapPin } from 'lucide-react';

const MapComponent = () => {
    const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

    return (
        <section className="py-20 bg-wedding-dark/50">
            <div className="max-w-6xl mx-auto px-4">
                <div className="text-center mb-12">
                    <MapPin className="w-10 h-10 text-wedding-gold mx-auto mb-4" />
                    <h2 className="font-display text-3xl text-wedding-gold italic">Our Location</h2>
                    <p className="text-wedding-cream/60 mt-2">Find your way to our celebration in Udaipur</p>
                </div>

                <div className="aspect-[21/9] w-full bg-wedding-maroon/20 rounded-3xl border border-wedding-gold/20 overflow-hidden relative group shadow-2xl">
                    <iframe
                        width="100%"
                        height="100%"
                        style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(95%) contrast(90%)' }}
                        loading="lazy"
                        allowFullScreen
                        referrerPolicy="no-referrer-when-downgrade"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1502.5000000000002!2d86.1276342!3d20.7619125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a195c81c873a659%3A0x21987e11dfcfbfa0!2sPalar%2C%20Odisha!5e0!3m2!1sen!2sin!4v1708450000000!5m2!1sen!2sin"
                    ></iframe>
                    <div className="absolute inset-0 pointer-events-none border-[10px] border-wedding-dark/10 rounded-3xl"></div>
                </div>
            </div>
        </section>
    );
};

export default MapComponent;
