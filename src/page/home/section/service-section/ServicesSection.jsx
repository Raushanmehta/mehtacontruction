import {
  Building2,
  PenTool,
  Paintbrush,
  ShieldCheck,
  Hammer,
  FileCheck2,
} from "lucide-react";

import ServiceSectionCard from "./ServiceSectionCard";

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

const ServicesSection = () => {
  return (
    <section className="relative bg-gray-50 py-12 md:px-26">
      <div className="relative mx-auto max-w-7xl px-6">

        {/* Heading */}
        <div className="mb-10 text-center sm:mb-14">
          <p className="mb-2 text-sm uppercase tracking-[3px] text-sky-500">
            What We Offer
          </p>

          <h2 className="text-2xl font-bold text-slate-800 md:text-4xl">
            Our Services
          </h2>

          <div className="mx-auto mt-4 h-[2px] w-16 bg-sky-500" />

          <p className="mx-auto mt-4 max-w-4xl text-sm  text-gray-800">
            Comprehensive solutions tailored to bring your architectural
            vision to life through quality construction.
          </p>
        </div>

        {/* Cards */}
        <ServiceSectionCard services={services} />
      </div>
    </section>
  );
};

export default ServicesSection;

