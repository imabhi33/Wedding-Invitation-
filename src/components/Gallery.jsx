import React from 'react';
import { motion } from 'framer-motion';
import img1 from '../assets/image copy.png';
import img2 from '../assets/image copy 2.png';
import img3 from '../assets/image copy 3.png';

const images = [
    { src: img1, title: "Pure Elegance", rotation: "md:-rotate-2", size: "w-full md:w-80", aspect: "aspect-square", objectPos: "object-left" },
    { src: img2, title: "Our Love Story", rotation: "md:rotate-1", size: "w-full md:w-[28rem]", aspect: "aspect-[4/5]", objectPos: "object-center" },
    { src: img3, title: "Forever & Always", rotation: "md:-rotate-1", size: "w-full md:w-80", aspect: "aspect-[4/5]", objectPos: "object-center" }
];

const Gallery = () => {
    return (
        <section className="py-32 relative px-6 md:px-12 bg-wedding-dark/50 overflow-hidden flex flex-col items-center">
            <div className="max-w-7xl w-full mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-24"
                >
                    <span className="text-wedding-gold font-sans tracking-[0.3em] uppercase text-xs mb-4 block opacity-60">Memory Lane</span>
                    <h2 className="font-script text-6xl md:text-8xl text-wedding-gold mb-8">Our Moments</h2>
                </motion.div>

                <div className="flex flex-col md:flex-row flex-wrap justify-center items-center gap-16 md:gap-24">
                    {images.map((img, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.8, y: 50 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: index * 0.3 }}
                            className={`${img.rotation} ${img.size} group relative flex justify-center`}
                        >
                            {/* Polaroid Frame */}
                            <div className="bg-white p-4 pb-14 shadow-[0_30px_60px_rgba(0,0,0,0.6)] transform hover:rotate-0 transition-transform duration-700 w-full">
                                <div className={`${img.aspect} overflow-hidden bg-wedding-dark relative`}>
                                    <img
                                        src={img.src}
                                        alt={img.title}
                                        className={`w-full h-full object-cover ${img.objectPos} transition-transform duration-1000 group-hover:scale-105`}
                                    />
                                    {/* Glossy Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none"></div>
                                </div>

                                <div className="mt-6 text-center">
                                    <p className="font-script text-4xl text-wedding-dark/80 tracking-tight">{img.title}</p>
                                </div>
                            </div>

                            {/* Tape Effect */}
                            <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-32 h-10 bg-wedding-gold/20 backdrop-blur-md -rotate-2 opacity-60 group-hover:opacity-100 transition-opacity z-10 shadow-sm border border-wedding-gold/10"></div>

                            {/* Glow Effect */}
                            <div className="absolute -inset-6 bg-wedding-gold/5 blur-3xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Background Texture Overlay */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/paper-fibers.png')]"></div>
        </section>
    );
};

export default Gallery;
