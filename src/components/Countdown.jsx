import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Countdown = ({ targetDate }) => {
    const calculateTimeLeft = () => {
        const difference = +new Date(targetDate) - +new Date();
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        }

        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearTimeout(timer);
    });

    const timerComponents = [];

    Object.keys(timeLeft).forEach((interval) => {
        timerComponents.push(
            <div key={interval} className="flex flex-col items-center mx-2 md:mx-4">
                <span className="text-3xl md:text-5xl font-display font-bold text-wedding-gold">
                    {timeLeft[interval] < 10 ? `0${timeLeft[interval]}` : timeLeft[interval]}
                </span>
                <span className="text-xs md:text-sm uppercase tracking-widest text-wedding-gold/80 mt-2">
                    {interval}
                </span>
            </div>
        );
    });

    return (
        <div className="grid grid-cols-2 md:flex md:justify-center items-center gap-6 md:gap-12 py-8 max-w-sm md:max-w-none mx-auto">
            {timerComponents.length ? timerComponents : <span className="col-span-2 text-2xl font-display text-wedding-gold italic">The Big Day is Here!</span>}
        </div>
    );
};

export default Countdown;
