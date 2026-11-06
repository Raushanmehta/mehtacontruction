
import { Button } from "@/components/ui/button";

export default function WhyChooseUsSection() {
    const features = [
        {
            number: "01",
            shapeBg: "bg-[#FF6118]", // Cyan / Teal accent shape
            text: "And residence for met the estimable disposing. Mean if he they been no hold mr. Is at much do made took held help."
        },
        {
            number: "02",
            shapeBg: "bg-[#FF6118]", // Orange accent shape
            text: "Up maids me an ample stood given. Certainty say suffering his him collected intention promotion."
        },
        {
            number: "03",
            shapeBg: "bg-[#000000]", // Green accent shape
            text: "Good draw knew bred ham busy his hour. Ask agreed answer rather joy nature admire wisdom."
        }
    ];

    return (
        <section className="relative bg-white py-14 sm:py-16 lg:py-14 md:px-16">
            <div className="relative mx-auto  max-w-[1350px] px-6">
                
                {/* ================= TOP ROW: INTRO & MAIN HEADING ================= */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
                    
                    {/* Left Column: Intro Description & Explore Button */}
                    <div className="lg:col-span-5 space-y-6 ">
                        <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
                            Blessing welcomed ladyship she met humoured sir breeding her. Six curiosity day assurance bed necessary.
                        </p>
                        <div>
                            <Button
                                type="button"
                                onClick={() => alert("Explore clicked!")}
                                variant="cta"
                                size="lg"
                                className="h-auto rounded-full px-8 py-3.5 text-sm shadow-lg shadow-black/10"
                            >
                                Explore
                            </Button>
                        </div>
                    </div>

                    {/* Right Column: Main Heading */}
                    <div className="lg:col-span-7">
                         <h1 className="text-2xl uppercase font-normal text-black md:text-5xl" style={{ fontFamily: "Anton, sans-serif" }}>
                            Why Choose us for best forever Design construction experience
                        </h1>
                    </div>

                </div>

                {/* ================= BOTTOM ROW: CURVED IMAGE & FEATURES ================= */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    
                    {/* Left Column: Large Curved Construction Image */}
                    <div className="lg:col-span-6 relative">
                        <div className="relative h-[420px] sm:h-[500px] w-full rounded-tr-[140px] sm:rounded-tr-[200px] rounded-bl-3xl rounded-br-3xl overflow-hidden shadow-2xl bg-gray-900">
                            <img
                                src="https://i.pinimg.com/736x/96/9e/29/969e29466c4040aa181f7d80e6cac331.jpg" // Apni construction image ka path yahan dein
                                alt="Construction site with skyscrapers and cranes"
                                fill
                                className="object-cover object-center"
                            />
                        </div>
                    </div>

                    {/* Right Column: Numbered Features List */}
                    <div className="lg:col-span-6 space-y-10 lg:pl-6">
                        {features.map((item, index) => (
                            <div key={index} className="flex items-start gap-6 group">
                                
                                {/* Number & Background Accent Shape */}
                                <div className="relative flex items-center shrink-0">
                                    <div className={`absolute -left-3 -top-3 h-10 w-10 rounded-tl-2xl rounded-br-2xl ${item.shapeBg} opacity-85 shadow-sm`} />
                                    <span className="relative text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight z-10">
                                        {item.number}
                                    </span>
                                </div>

                                {/* Description Text */}
                                <div className="pt-1">
                                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                                        {item.text}
                                    </p>
                                </div>

                            </div>
                        ))}
                    </div>

                </div>

            </div>
        </section>
    );
}