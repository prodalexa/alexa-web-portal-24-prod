"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";

// Timer component with improved responsiveness
const CountdownTimer = ({ targetDate }: {
    targetDate: Date;
}) => {
    const [timeRemaining, setTimeRemaining] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    useEffect(() => {
        const calculateTimeRemaining = () => {
            const now = new Date();
            const difference = targetDate.getTime() - now.getTime();

            if (difference > 0) {
                const days = Math.floor(difference / (1000 * 60 * 60 * 24));
                const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
                const minutes = Math.floor((difference / (1000 * 60)) % 60);
                const seconds = Math.floor((difference / 1000) % 60);

                setTimeRemaining({ days, hours, minutes, seconds });
            }
        };

        // Calculate initial time
        calculateTimeRemaining();

        // Update every second
        const timer = setInterval(calculateTimeRemaining, 1000);

        // Cleanup interval on unmount
        return () => clearInterval(timer);
    }, [targetDate]);

    // Format numbers to always have two digits
    const formatNumber = (num: number) => {
        return num.toString().padStart(2, '0');
    };

    const timeUnits = [
        { label: "Days", value: formatNumber(timeRemaining.days) },
        { label: "Hours", value: formatNumber(timeRemaining.hours) },
        { label: "Minutes", value: formatNumber(timeRemaining.minutes) },
        { label: "Seconds", value: formatNumber(timeRemaining.seconds) }
    ];

    return (
        <div className="grid grid-cols-4 gap-2 sm:gap-4 md:gap-6 w-full max-w-lg mx-auto">
            {timeUnits.map((unit) => (
                <div key={unit.label} className="flex flex-col items-center">
                    <div className="bg-gaming_form_bg border border-white/30 rounded-lg w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 flex items-center justify-center text-white text-base sm:text-xl md:text-2xl font-bold">
                        {unit.value}
                    </div>
                    <span className="text-white/80 text-xs sm:text-sm mt-1 md:mt-2">{unit.label}</span>
                </div>
            ))}
        </div>
    );
};

const ComingSoon = () => {

    // target date is 13th March 2025
    const targetDate = new Date("2025-03-13T00:05:30Z");
    targetDate.setDate(targetDate.getDate());

    return (
        <div className="relative w-screen md:min-h-screen flex flex-col overflow-hidden -mt-72 md:mt-0">
            <div className="relative h-[25vh] md:h-[50vh] flex items-center justify-center">
                <Image
                    src="/carrynclutch/Border.png"
                    alt="Border"
                    width={1920}
                    height={1080}
                    className="absolute w-[75%] md:w-[50%] h-[120%] object-contain pointer-events-none"
                    priority
                />
                <h1 className="relative z-10 text-white text-4xl md:text-6xl font-valorant text-center font-monsterrat tracking-wider px-16">
                    COMING SOON
                </h1>
            </div>

            <div className="relative z-10 w-full max-w-4xl mx-auto px-4 md:px-8 flex flex-col items-center">
                <div className="text-center mb-12">
                    <h2 className="text-white text-2xl md:text-3xl font-bold mb-6 font-monsterrat">
                        Registration Opens Soon
                    </h2>
                    <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto font-monsterrat">
                        Stay tuned for our upcoming tournament. Get ready for an epic gaming experience!
                    </p>
                </div>

                <div className="w-full max-w-md space-y-8 font-monsterrat mb-12">
                    {/* Dynamic countdown timer */}
                    <CountdownTimer targetDate={targetDate} />
                </div>
            </div>
        </div>
    );
};

export default ComingSoon;