
import FeatureCard from "@/components/cards/FeatureCard";
import { Building2, Clock, DollarSign, HardHat, Headphones, MapPin, Ruler, ShieldCheck } from "lucide-react";

const FEATURES = [
  {
    icon: Building2,
    title: "20+ Years of Excellence",
    description:
      "Proven experience delivering quality residential, commercial, and infrastructure projects.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Assurance",
    description:
      "Strict quality checks and premium materials used throughout every stage of construction.",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    description:
      "Careful planning and project management to complete construction within agreed timelines.",
  },
  {
    icon: DollarSign,
    title: "Transparent Pricing",
    description:
      "Clear quotations and detailed cost breakdowns with no hidden charges or surprises.",
  },
  {
    icon: HardHat,
    title: "Skilled Professionals",
    description:
      "Experienced engineers, architects, supervisors, and skilled workers managing every project.",
  },
  {
    icon: Ruler,
    title: "Customized Solutions",
    description:
      "Construction solutions tailored to your requirements, budget, design, and project goals.",
  },
  {
    icon: MapPin,
    title: "Project Tracking",
    description:
      "Stay informed with regular updates on construction progress, milestones, and site activities.",
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    description:
      "Responsive communication and dedicated assistance from planning through project completion.",
  },
];


export default function FeatureSection() {
  return (
    <section className="relative bg-white py-14 sm:py-16 lg:py-14 md:px-16">
      <div className="relative mx-auto  max-w-[1350px] px-6">
        
           {/* Heading */}
        <div className="text-center mb-6 lg:mb-8">
          <p className="mb-2 text-sm uppercase tracking-[3px] text-[#FF6118]">
           Key Features
          </p>

          <h2 className="text-2xl uppercase font-normal text-black md:text-5xl" style={{ fontFamily: "Anton, sans-serif" }}>
          Key Features of Our Construction Services
          </h2>

          <p className="mx-auto mt-2 max-w-2xl text-md  text-gray-800">
            Discover the key features that set our construction services apart, ensuring quality, efficiency, and client satisfaction in every project we undertake.
          </p>
        </div>

        <div className="bg-black">
          <div className="mx-auto grid grid-cols-1 border-l border-t border-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {FEATURES.map((feature) => (
              <FeatureCard key={feature.title} {...feature} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
