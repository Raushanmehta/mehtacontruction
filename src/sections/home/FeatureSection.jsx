
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
    <section className="relative py-24 bg-white py-14 sm:py-16 lg:py-20 md:px-28">
      {/* Gray Dot Background */}
      <div className="relative max-w-7xl mx-auto px-6 ">
        <div className="mb-10 text-center sm:mb-14">
          <p className="mb-2 text-sm uppercase tracking-[3px] text-[#0081CD]">
            Key Features
          </p>

          <h2 className="text-2xl font-bold text-slate-800 md:text-4xl">
            Key Features
          </h2>

          <div className="mx-auto mt-4 h-[2px] w-16 bg-[#0081CD]" />

          <p className="mx-auto mt-4 max-w-4xl text-sm  text-gray-800">
            we capture the joy and care we provide to our furry friends
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
