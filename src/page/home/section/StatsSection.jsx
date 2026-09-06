import React from "react";

export default function StatsSection() {
    const leftSteps = [
        { id: 1, title: "Discovery & Research" },
        { id: 2, title: "Strategy & Planning" },
        { id: 3, title: "Wireframing & UX Design" },
        { id: 4, title: "Visual Design (UI Design)" }
    ];

    const rightSteps = [
        { id: 5, title: "Design Review & Feedback" },
        { id: 6, title: "Handoff To Development" },
        { id: 7, title: "Testing & Quality Assurance" },
        { id: 8, title: "Launch & Post-Launch Review" }
    ];

    return (
        <section className="relative bg-black py-20 px-4 sm:px-8 lg:px-12 overflow-hidden">
            <div className="mx-auto max-w-6xl">
                
                {/* Main Grid Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative">
                    
                    {/* ================= LEFT SIDE STEPS (Col Span 4) ================= */}
                    <div className="lg:col-span-4 flex flex-col space-y-6 lg:items-end">
                        {leftSteps.map((step) => (
                            <div key={step.id} className="relative flex items-center">
                                
                                {/* Pill Button */}
                                <div className="relative z-10 flex items-center justify-center w-[220px] sm:w-[240px] rounded-full bg-[#0081CD] py-3 px-4 shadow-lg text-white">
                                    <span className="font-medium text-xs sm:text-sm tracking-wide text-center">
                                        {step.title}
                                    </span>
                                </div>

                                {/* Number Circle attached next to pill */}
                                <div className="relative -ml-3 z-20 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white shadow-xl border-4 border-gray-100 text-gray-900 font-bold text-xs">
                                    {step.id}
                                </div>

                                {/* Connecting Node Line extending towards the center hub */}
                                <div className="absolute right-[-45px] top-1/2 w-[45px] h-[2px] bg-[#0081CD] hidden lg:block z-0" />
                            </div>
                        ))}
                    </div>

                    {/* ================= CENTER HUB CIRCLE (Col Span 4) ================= */}
                    <div className="lg:col-span-4 flex items-center justify-center my-8 lg:my-0 relative z-30">
                        <div className="relative h-60 w-60 sm:h-68 sm:w-68 rounded-full bg-white shadow-[0_0_50px_rgba(0,129,205,0.25)] border-8 border-black flex flex-col items-center justify-center text-center p-6 text-black">
                            <h3 className="font-bold text-lg sm:text-xl leading-snug">
                                Web Design Workflow:
                            </h3>
                            <p className="font-semibold text-base sm:text-lg text-gray-800 mt-1">
                                Step-By-Step Process
                            </p>
                        </div>
                    </div>

                    {/* ================= RIGHT SIDE STEPS (Col Span 4) ================= */}
                    <div className="lg:col-span-4 flex flex-col space-y-6 lg:items-start">
                        {rightSteps.map((step) => (
                            <div key={step.id} className="relative flex items-center">
                                
                                {/* Connecting Node Line extending towards the center hub */}
                                <div className="absolute left-[-45px] top-1/2 w-[45px] h-[2px] bg-[#0081CD] hidden lg:block z-0" />

                                {/* Number Circle attached next to pill */}
                                <div className="relative -mr-3 z-20 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white shadow-xl border-4 border-gray-100 text-gray-900 font-bold text-xs">
                                    {step.id}
                                </div>

                                {/* Pill Button */}
                                <div className="relative z-10 flex items-center justify-center w-[220px] sm:w-[240px] rounded-full bg-[#0081CD] py-3 px-4 shadow-lg text-white">
                                    <span className="font-medium text-xs sm:text-sm tracking-wide text-center">
                                        {step.title}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>

            </div>
        </section>
    );
}