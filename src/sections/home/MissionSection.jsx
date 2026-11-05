import { useState } from "react";
import { GripVertical } from "lucide-react";

export default function MissionSection() {
    const [split, setSplit] = useState(50);

    return (
        <section className="bg-[#090909]  py-14 sm:py-16 lg:py-14 md:px-16" aria-label="Project transformation">
            <div className="relative mx-auto aspect-[16/9] w-full max-w-[1350px] px-6 overflow-hidden rounded-md shadow-[0_20px_50px_rgba(0,0,0,0.35)] sm:aspect-[2/1]">
                <img
                    src="/image/mission-2.png"
                    alt="Completed architectural project at dusk"
                    className="absolute inset-0 h-full w-full object-cover"
                />
                <div
                    className="absolute inset-0 overflow-hidden"
                    style={{ clipPath: `inset(0 ${100 - split}% 0 0)` }}
                >
                    <img
                        src="/image/mission-1.png"
                        alt="Architectural line drawing of the project"
                        className="absolute inset-0 h-full w-full object-cover"
                    />
                </div>

                <span className="pointer-events-none absolute left-3 top-3 rounded-full bg-black/80 px-3 py-1 text-xs font-semibold text-white sm:left-4 sm:top-4">
                    Before
                </span>
                <span className="pointer-events-none absolute right-3 top-3 rounded-full bg-black/80 px-3 py-1 text-xs font-semibold text-white sm:right-4 sm:top-4">
                    After
                </span>

                <div
                    className="pointer-events-none absolute bottom-0 top-0 z-10 w-1 -translate-x-1/2 bg-white shadow-[0_0_8px_rgba(0,0,0,0.45)]"
                    style={{ left: `${split}%` }}
                    aria-hidden="true"
                >
                    <span className="absolute left-1/2 top-1/2 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white bg-white text-neutral-800 shadow-md">
                        <GripVertical size={18} strokeWidth={2.5} />
                    </span>
                </div>

                <input
                    type="range"
                    min="0"
                    max="100"
                    value={split}
                    onChange={(event) => setSplit(Number(event.target.value))}
                    aria-label="Compare before and after project images"
                    className="absolute inset-0 z-20 h-full w-full cursor-ew-resize opacity-0 focus-visible:opacity-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-white"
                />
            </div>
        </section>
    );
}
