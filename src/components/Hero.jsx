import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

import coupleImage from '../assets/image.png';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex flex-col items-center justify-between text-center overflow-hidden">
            {/* Background Image with Cinematic Overlay */}
            <div className="absolute inset-0 z-0">
                <motion.img
                    initial={{ scale: 1.15 }}
                    animate={{ scale: 1.05 }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "linear"
                    }}
                    src={coupleImage}
                    alt="Pallabesh & Sushree"
                    className="w-full h-full object-cover object-[center_12%]"
                />
                {/* Cinematic Gradient Overlay - Warm Vignette */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/30 to-black/80"></div>
                <div className="absolute inset-0 bg-radial-vignette opacity-70"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-wedding-dark/60 to-transparent opacity-80"></div>
            </div>

            {/* Top Spacing */}
            <div className="pt-24 z-10 w-full px-4">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="flex flex-col items-center"
                >
                    <span className="text-wedding-gold font-sans tracking-[0.8em] uppercase text-[10px] md:text-xs font-bold opacity-100 block mb-2 drop-shadow-sm">
                        Together with our families
                    </span>
                    <div className="w-16 h-[1.5px] bg-wedding-gold/30 mt-4 mb-16"></div>
                </motion.div>
            </div>

            {/* Main Content - Names & Date */}
            <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 2, ease: "easeOut" }}
                className="z-10 w-full max-w-6xl px-4 flex flex-col items-center justify-center flex-grow -mt-20 md:-mt-28"
            >
                <div className="flex flex-col items-center text-center">
                    <h1 className="font-script text-[5rem] sm:text-[7rem] md:text-[9rem] lg:text-[11rem] text-wedding-gold leading-[0.85] drop-shadow-[0_15px_50px_rgba(0,0,0,0.8)] pb-4 md:pb-6">
                        Pallabesh
                    </h1>
                    <div className="relative flex items-center justify-center -my-4 md:-my-6">
                        <div className="w-10 md:w-20 h-[1px] bg-wedding-gold/20"></div>
                        <span className="font-display italic text-3xl sm:text-4xl md:text-5xl text-wedding-gold/90 px-6">
                            &
                        </span>
                        <div className="w-10 md:w-20 h-[1px] bg-wedding-gold/20"></div>
                    </div>
                    <h1 className="font-script text-[5rem] sm:text-[7rem] md:text-[9rem] lg:text-[11rem] text-wedding-gold leading-[0.85] drop-shadow-[0_15px_50px_rgba(0,0,0,0.8)] pt-4 md:pt-6">
                        Sushree
                    </h1>
                </div>

                <div className="mt-20 md:mt-28 space-y-4">
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1, duration: 1 }}
                        className="font-display text-3xl sm:text-4xl md:text-5xl text-wedding-gold tracking-tight font-light italic drop-shadow-sm"
                    >
                        Sunday, 19 April 2026
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.2, duration: 1 }}
                        className="font-sans text-[10px] sm:text-xs md:text-sm text-wedding-gold/80 tracking-[0.6em] uppercase font-semibold"
                    >
                        Palar, Odisha
                    </motion.p>
                </div>
            </motion.div>

            {/* Decorative Overlay Texture */}
            <div className="absolute inset-0 z-[1] pointer-events-none opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/paper-fibers.png')]"></div>
        </section>
    );
};

export default Hero;
