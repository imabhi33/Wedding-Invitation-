import React, { useEffect, useState } from 'react';

const PetalsEffect = () => {
    const [petals, setPetals] = useState([]);

    useEffect(() => {
        const createPetal = () => {
            const id = Math.random();
            const left = Math.random() * 100 + '%';
            const size = (Math.random() * 8 + 4) + 'px';
            const duration = (Math.random() * 10 + 10) + 's';
            const delay = (Math.random() * 10) + 's';
            const type = Math.random() > 0.5 ? 'circle' : 'leaf';
            const blur = (Math.random() * 2) + 'px';

            const newPetal = { id, left, size, duration, delay, type, blur };
            setPetals(prev => [...prev.slice(-30), newPetal]);
        };

        const interval = setInterval(createPetal, 400);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-40">
            {petals.map(petal => (
                <div
                    key={petal.id}
                    className={`petal ${petal.type === 'leaf' ? 'bg-wedding-gold/20 rounded-tl-full rounded-br-full' : 'bg-wedding-gold/30 rounded-full'}`}
                    style={{
                        left: petal.left,
                        width: petal.size,
                        height: petal.size,
                        filter: `blur(${petal.blur})`,
                        animationDuration: petal.duration,
                        animationDelay: petal.delay
                    }}
                />
            ))}
        </div>
    );
};

export default PetalsEffect;
