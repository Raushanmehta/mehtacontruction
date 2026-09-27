import { useEffect, useState } from "react";

function AnimatedNumber({ value, suffix = "", duration = 2000 }) {
    const [count, setCount] = useState(0);
    const decimalPlaces = String(value).split(".")[1]?.length ?? 0;

    useEffect(() => {
        let animationFrame;
        const startTime = performance.now();

        const animate = (currentTime) => {
            const progress = Math.min((currentTime - startTime) / duration, 1);
            setCount(value * progress);

            if (progress < 1) {
                animationFrame = requestAnimationFrame(animate);
            }
        };

        animationFrame = requestAnimationFrame(animate);

        return () => cancelAnimationFrame(animationFrame);
    }, [duration, value]);

    return `${count.toFixed(decimalPlaces)}${suffix}`;
}

export default function StatsSection() {
    const statsData = [
        {
            value: 100,
            suffix: "M+",
            label: "Active Users"
        },
        {
            value: 500,
            suffix: "K+",
            label: "Downloads"
        },
        {
            value: 4.8,
            label: "Average Rating"
        },
        {
            value: 500,
            suffix: "+",
            label: "Countries"
        }
    ];

    return (
                <section className="relative  py-14 sm:py-16 lg:py-14 md:px-16">
            <div className="relative mx-auto  max-w-[1350px] px-6">
                
                {/* 4 Cards Grid Layout */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {statsData.map((stat, index) => (
                        <div 
                            key={index}
                            className="bg-white rounded-sm border border-gray-100 shadow-[0_4px_25px_rgba(0,0,0,0.04)] p-4 flex flex-col items-center justify-center text-center space-y-3 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                        >
                          
                            {/* Stat Value */}
                            <h3 className="text-2xl font-bold text-slate-800 md:text-4xl text-gray-900 tracking-tight">
                                <AnimatedNumber value={stat.value} suffix={stat.suffix} />
                            </h3>

                            {/* Stat Label */}
                            <p className="text-xs sm:text-sm font-medium text-gray-500">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}