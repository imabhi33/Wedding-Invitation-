import React, { useState } from 'react';
import Hero from './components/Hero';
import Countdown from './components/Countdown';
import OpeningAnimation from './components/OpeningAnimation';
import PetalsEffect from './components/PetalsEffect';
import Gallery from './components/Gallery';
import FloralDecor from './components/FloralDecor';
import EventsTimeline from './components/EventsTimeline';
import MapComponent from './components/MapComponent';
import { motion } from 'framer-motion';
import { Volume2, VolumeX, Heart } from 'lucide-react';

function App() {
  const weddingDate = "2026-04-19T10:00:00";
  const [hasOpened, setHasOpened] = useState(false);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const audioRef = React.useRef(null);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isMusicPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(err => console.log("Music play failed:", err));
      }
      setIsMusicPlaying(!isMusicPlaying);
    }
  };

  return (
    <div className="bg-wedding-dark min-h-screen selection:bg-wedding-gold/30 text-wedding-cream overflow-x-hidden">
      <OpeningAnimation onComplete={() => setHasOpened(true)} />

      {/* Background Music */}
      <audio
        ref={audioRef}
        loop
        src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-13.mp3"
      />

      {hasOpened && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <PetalsEffect />
          <FloralDecor />

          {/* Music Toggle */}
          <button
            onClick={toggleMusic}
            className="fixed bottom-6 right-6 z-50 p-4 bg-wedding-gold/20 backdrop-blur-md rounded-full border border-wedding-gold/40 text-wedding-gold hover:bg-wedding-gold/40 transition-all shadow-lg group"
          >
            {isMusicPlaying ? (
              <motion.div animate={{ rotate: 360 }} transition={{ duration: 4, repeat: Infinity, ease: "linear" }}>
                <Volume2 size={24} />
              </motion.div>
            ) : (
              <VolumeX size={24} />
            )}
            <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-wedding-gold text-wedding-dark px-3 py-1 rounded text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
              {isMusicPlaying ? "PAUSE MUSIC" : "PLAY MUSIC"}
            </span>
          </button>

          <Hero />

          {/* Countdown Section */}
          <section className="py-32 relative overflow-hidden">
            <div className="absolute inset-0 bg-wedding-maroon/20 -z-10"></div>
            <div className="max-w-4xl mx-auto px-4 text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <div className="flex items-center justify-center gap-4 mb-8">
                  <div className="h-[1px] w-12 bg-wedding-gold/30"></div>
                  <Heart className="text-wedding-gold fill-wedding-gold/20 animate-pulse" />
                  <div className="h-[1px] w-12 bg-wedding-gold/30"></div>
                </div>
                <h2 className="font-display text-4xl md:text-6xl text-wedding-gold italic mb-6">Counting down to our forever</h2>
              </motion.div>

              <Countdown targetDate={weddingDate} />
            </div>
          </section>

          <Gallery />

          <EventsTimeline />

          <MapComponent />

          {/* Footer */}
          <footer className="py-24 text-center border-t border-wedding-gold/10 relative overflow-hidden">
            <div className="absolute bottom-[-50px] left-1/2 -translate-x-1/2 w-[600px] h-[150px] bg-wedding-gold/10 blur-[120px] -z-10"></div>
            <p className="font-script text-6xl md:text-8xl text-wedding-gold mb-8 italic">See you there!</p>
            <p className="font-sans text-[10px] md:text-xs tracking-[0.6em] uppercase text-wedding-cream/30">Pallabesh & Sushree • 2026</p>
          </footer>
        </motion.div>
      )}
    </div>
  );
}

export default App;
