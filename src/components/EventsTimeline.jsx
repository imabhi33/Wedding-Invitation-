import React from 'react';
import { motion } from 'framer-motion';
import { Gem, Music, Clock, MapPin } from 'lucide-react';

const events = [
    {
        title: "The Wedding",
        date: "April 19, 2026 | 6:00 PM Onwards",
        location: "Palara, Jaraka, Jajpur, Odisha 755050",
        description: "SACRED CEREMONY",
        icon: <Gem className="w-8 h-8 text-wedding-gold" />,
        side: "left"
    },
    {
        title: "The Reception",
        date: "April 21, 2026 | 6:00 PM Onwards",
        location: "Palara, Jaraka, Jajpur, Odisha 755050",
        description: "CELEBRATION DINNER",
        icon: <Music className="w-8 h-8 text-wedding-gold" />,
        side: "right"
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3
        }
    }
};

const itemVariants = (side) => ({
    hidden: { opacity: 0, x: side === 'left' ? -50 : 50 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.8, ease: "easeOut" }
    }
});

const EventsTimeline = () => {
    return (
        <section className="py-20 relative px-4 sm:px-6 md:px-8 overflow-hidden">
            <div className="max-w-6xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center font-script text-5xl md:text-7xl text-wedding-gold mb-24 px-4"
                >
                    Our Wedding Events
                </motion.h2>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="relative"
                >
                    {/* Central Line - Hidden on small mobile, visible on md+ */}
                    <div className="absolute left-[20px] md:left-1/2 transform md:-translate-x-1/2 h-full w-[1px] bg-gradient-to-b from-wedding-gold/0 via-wedding-gold/30 to-wedding-gold/0"></div>

                    <div className="space-y-16 md:space-y-32">
                        {events.map((event, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants(event.side)}
                                className={`flex flex-col md:flex-row items-center justify-between w-full relative pl-12 md:pl-0 ${event.side === 'left' ? 'md:flex-row' : 'md:flex-row-reverse'
                                    }`}
                            >
                                {/* Content */}
                                <div className={`w-full md:w-5/12 ${event.side === 'left' ? 'md:text-right' : 'md:text-left'}`}>
                                    <div className="p-6 md:p-8 rounded-2xl md:rounded-3xl bg-wedding-maroon/20 border border-wedding-gold/20 backdrop-blur-md hover:bg-wedding-maroon/40 transition-all duration-500 group shadow-[0_10px_30px_rgba(0,0,0,0.3)] hover:shadow-wedding-gold/10">
                                        <div className="flex items-center gap-4 mb-4 md:hidden">
                                            <div className="p-2.5 bg-wedding-gold/10 rounded-full border border-wedding-gold/20">
                                                {/* Smaller icon for mobile mobile */}
                                                {React.cloneElement(event.icon, { className: "w-6 h-6 text-wedding-gold" })}
                                            </div>
                                        </div>
                                        <h3 className="font-display text-xl sm:text-2xl md:text-3xl text-wedding-gold mb-3 tracking-wide">{event.title}</h3>
                                        <p className="text-wedding-cream text-base md:text-xl font-light mb-2">{event.date}</p>
                                        <p className="text-wedding-gold/70 text-xs md:text-sm tracking-[0.1em] md:tracking-[0.2em] uppercase mb-6 leading-relaxed">{event.location}</p>
                                        <div className={`h-[1px] w-12 md:w-16 bg-wedding-gold/40 transition-all duration-700 group-hover:w-full ${event.side === 'left' ? 'md:ml-auto' : 'md:mr-auto'}`}></div>
                                        <p className="text-wedding-cream/40 text-[9px] md:text-[10px] tracking-[0.3em] md:tracking-[0.4em] uppercase mt-6 font-semibold">{event.description}</p>
                                    </div>
                                </div>

                                {/* Dot (Mobile & Tablet/Desktop) */}
                                <div className="absolute left-[20px] md:left-1/2 top-8 md:top-1/2 transform -translate-x-1/2 md:-translate-y-1/2 z-10 flex items-center justify-center w-3 h-3 md:w-4 md:h-4 bg-wedding-dark border border-wedding-gold rounded-full shadow-[0_0_15px_rgba(212,175,55,0.5)]">
                                    <motion.div
                                        animate={{ scale: [1, 1.5, 1] }}
                                        transition={{ duration: 3, repeat: Infinity }}
                                        className="w-1 md:w-1.5 h-1 md:h-1.5 bg-wedding-gold rounded-full"
                                    ></motion.div>
                                </div>

                                {/* Spacer / Icon (Desktop Only) */}
                                <div className="w-5/12 hidden md:block relative">
                                    <motion.div
                                        whileHover={{ scale: 1.1, rotate: 5 }}
                                        className="absolute top-1/2 transform -translate-y-1/2 w-full flex items-center justify-center"
                                    >
                                        <div className="p-6 md:p-8 rounded-full bg-wedding-gold/5 border border-wedding-gold/10 backdrop-blur-sm shadow-xl">
                                            {event.icon}
                                        </div>
                                    </motion.div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default EventsTimeline;
