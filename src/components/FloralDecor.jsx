import React from 'react';
import { motion } from 'framer-motion';

const FloralDecor = () => {
    return (
        <div className="fixed inset-0 pointer-events-none z-30 overflow-hidden">
            {/* Top Left Flower */}
            <motion.div
                initial={{ opacity: 0, rotate: -45, scale: 0.8 }}
                whileInView={{ opacity: 0.6, rotate: 0, scale: 1 }}
                transition={{ duration: 2 }}
                className="absolute -top-20 -left-20 w-64 h-64 opacity-40 select-none"
            >
                <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 100C120 60 180 60 100 20C20 60 80 60 100 100Z" fill="#D4AF37" fillOpacity="0.3" />
                    <path d="M100 100C140 120 140 180 180 100C140 20 140 80 100 100Z" fill="#D4AF37" fillOpacity="0.2" />
                    <path d="M100 100C60 140 0 140 80 180C160 140 100 140 100 100Z" fill="#D4AF37" fillOpacity="0.3" />
                    <circle cx="100" cy="100" r="10" fill="#D4AF37" fillOpacity="0.5" />
                </svg>
            </motion.div>

            {/* Bottom Right Flower */}
            <motion.div
                initial={{ opacity: 0, rotate: 45, scale: 0.8 }}
                whileInView={{ opacity: 0.6, rotate: 0, scale: 1 }}
                transition={{ duration: 2 }}
                className="absolute -bottom-20 -right-20 w-64 h-64 opacity-40 select-none"
            >
                <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 100C120 60 180 60 100 20C20 60 80 60 100 100Z" fill="#D4AF37" fillOpacity="0.3" />
                    <path d="M100 100C140 120 140 180 180 100C140 20 140 80 100 100Z" fill="#D4AF37" fillOpacity="0.2" />
                    <path d="M100 100C60 140 0 140 80 180C160 140 100 140 100 100Z" fill="#D4AF37" fillOpacity="0.3" />
                    <circle cx="100" cy="100" r="10" fill="#D4AF37" fillOpacity="0.5" />
                </svg>
            </motion.div>
        </div>
    );
};

export default FloralDecor;
