import {
  Building2,
  PenTool,
  Paintbrush,
  ShieldCheck,
  Hammer,
  FileCheck2,
} from "lucide-react";
import "@fontsource/anton";

import ServiceCard from "../../components/cards/ServiceCard";

const services = [
  {
    icon: Building2,
    image: "https://armsonhomes.in/wp-content/uploads/2025/02/premium-home-construction-in-Kerala.png",
    title: "Residential Construction",
    description:
      "Custom-designed homes built using premium materials and advanced construction standards.",
    
  },
  {
    icon: PenTool,
    image: "https://5.imimg.com/data5/SELLER/Default/2023/5/305717548/LU/DR/EU/64248693/architectural-structural-design.jpg",
    title: "Architectural & Structural Design",
    description:
      "Modern designs, 2D plans, 3D elevations, structural drawings, and Vastu-compliant layouts.",
    
  },
  {
    icon: Paintbrush,
    image: "https://asset.skoiy.com/9b80a6f781ff336f/yrwwqpnyb7ys.jpg?w=970&q=90",
    title: "Interior Design & Execution",
    description:
      "Elegant and functional interior solutions, including kitchens, wardrobes, lighting, and finishes.",
    
  },
  {
    icon: ShieldCheck,
    image: "https://amsindia.co.in/wp-content/uploads/2024/09/43967c71c1.jpg",
    title: "Project Management & Quality Control",
    description:
      "Dedicated managers, site audits, progress tracking, and strict adherence to safety and quality standards.",
   
  },
  {
    icon: Hammer,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlAjtof5zbexQLy55t7MVYDsdMJv6dT1Mzx9ICJYSqmLFzun0llupYI1u3&s=10",
    title: "Material Procurement & Execution",
    description:
      "Premium-grade cement, steel, bricks and fittings sourced from top brands, ensuring lasting durability.",
    
  },
  {
    icon: FileCheck2,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlNQ5mTNDxg90AQWv5Ie_YZ7EOwYzcJef6tmgpb9XeIxXqxAFUU8JpZKk&s=10",
    title: "Regulatory Approvals & Documentation",
    description:
      "Comprehensive assistance with plan approvals, permits, and mandatory construction documentation.",
    
  },
];

export default function ServiceSection() {
  return (
    <section className="relative bg-white py-14 sm:py-16 lg:py-14 md:px-16">
      <div className="relative mx-auto max-w-[1350px] px-6">

        {/* Heading */}
        <div className="text-center mb-6 lg:mb-8">
          <p className="mb-2 text-sm uppercase tracking-[3px] text-[#FF6118]">
           Our Services
          </p>

          <h2 className="text-2xl uppercase font-normal text-black md:text-5xl" style={{ fontFamily: "Anton, sans-serif" }}>
           We Specialize in Construction Solutions
          </h2>

          <p className="mx-auto mt-2 max-w-2xl text-md  text-gray-800">
            Comprehensive solutions tailored to bring your architectural
            vision to quality construction.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};



