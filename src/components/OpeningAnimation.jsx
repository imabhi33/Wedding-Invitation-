import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const OpeningAnimation = ({ onComplete }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = () => {
        setIsOpen(true);
        setTimeout(onComplete, 1000);
    };

    return (
        <AnimatePresence>
            {!isOpen && (
                <motion.div
                    className="fixed inset-0 z-[100] flex"
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                >
                    {/* Left Curtain */}
                    <motion.div
                        initial={{ x: 0 }}
                        animate={{ x: isOpen ? '-100%' : 0 }}
                        transition={{ duration: 1.5, ease: [0.77, 0, 0.175, 1] }}
                        className="w-1/2 h-full bg-wedding-maroon border-r-2 border-wedding-gold flex items-center justify-end overflow-hidden relative"
                    >
                        <div className="absolute inset-y-0 right-0 w-[1px] bg-wedding-gold/30"></div>
                        <div className="mr-[-50px] md:mr-[-100px] text-center transform rotate-[-90deg]">
                            <h2 className="font-script text-4xl md:text-6xl text-wedding-gold opacity-20 whitespace-nowrap">
                                Invitation • Invitation • Invitation
                            </h2>
                        </div>
                    </motion.div>

                    {/* Right Curtain */}
                    <motion.div
                        initial={{ x: 0 }}
                        animate={{ x: isOpen ? '100%' : 0 }}
                        transition={{ duration: 1.5, ease: [0.77, 0, 0.175, 1] }}
                        className="w-1/2 h-full bg-wedding-maroon border-l-2 border-wedding-gold flex items-center justify-start overflow-hidden relative"
                    >
                        <div className="absolute inset-y-0 left-0 w-[1px] bg-wedding-gold/30"></div>
                        <div className="ml-[-50px] md:ml-[-100px] text-center transform rotate-[90deg]">
                            <h2 className="font-script text-4xl md:text-6xl text-wedding-gold opacity-20 whitespace-nowrap">
                                Invitation • Invitation • Invitation
                            </h2>
                        </div>
                    </motion.div>

                    {/* Center Content / Logo */}
                    <motion.div
                        className="absolute inset-0 flex flex-col items-center justify-center z-20 pointer-events-none"
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.5, delay: 0.5 }}
                            className="mb-12 text-center"
                        >
                            <h2 className="font-script text-5xl md:text-7xl text-wedding-gold mb-2 drop-shadow-2xl">Pallabesh & Sushree</h2>
                            <p className="font-display text-wedding-gold/60 tracking-[0.4em] uppercase text-[10px] md:text-sm">Wednesday, April 19, 2026</p>
                        </motion.div>

                        <motion.button
                            onClick={handleOpen}
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(212,175,55,0.4)" }}
                            whileTap={{ scale: 0.95 }}
                            className="pointer-events-auto group relative px-12 py-5 bg-wedding-dark border border-wedding-gold text-wedding-gold rounded-full font-display text-lg tracking-[0.2em] transition-all hover:bg-wedding-gold hover:text-wedding-dark overflow-hidden"
                        >
                            <span className="relative z-10 font-bold">OPEN INVITATION</span>
                            <motion.div
                                className="absolute inset-x-0 bottom-0 h-0 bg-wedding-gold group-hover:h-full transition-all duration-300"
                                initial={{ height: 0 }}
                            />
                        </motion.button>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default OpeningAnimation;
