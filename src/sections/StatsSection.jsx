import React from "react";
import { FaUsers, FaDownload, FaStar, FaGlobe } from "react-icons/fa";

export default function StatsSection() {
    const statsData = [
        {
            icon: <FaUsers className="text-blue-600 text-2xl" />,
            value: "1M+",
            label: "Active Users"
        },
        {
            icon: <FaDownload className="text-emerald-500 text-2xl" />,
            value: "5M+",
            label: "Downloads"
        },
        {
            icon: <FaStar className="text-amber-400 text-2xl" />,
            value: "4.8",
            label: "Average Rating"
        },
        {
            icon: <FaGlobe className="text-sky-500 text-2xl" />,
            value: "50+",
            label: "Countries"
        }
    ];

    return (
                <section className="relative  bg-white py-14 sm:py-16 lg:py-14 md:px-16">
            <div className="relative mx-auto  max-w-[1350px] px-6">
                
                {/* 4 Cards Grid Layout */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {statsData.map((stat, index) => (
                        <div 
                            key={index}
                            className="bg-white rounded-sm border border-gray-100 shadow-[0_4px_25px_rgba(0,0,0,0.04)] p-8 flex flex-col items-center justify-center text-center space-y-3 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                        >
                            {/* Icon */}
                            <div className="mb-1">
                                {stat.icon}
                            </div>

                            {/* Stat Value */}
                            <h3 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
                                {stat.value}
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