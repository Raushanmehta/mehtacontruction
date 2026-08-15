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
    title: "Residential Construction",
    description:
      "Custom-designed homes built using premium materials and advanced construction standards.",
    tags: ["Custom Designs", "Premium Materials", "Advanced Standards"],
  },
  {
    icon: PenTool,
    title: "Architectural & Structural Design",
    description:
      "Modern designs, 2D plans, 3D elevations, structural drawings, and Vastu-compliant layouts.",
    tags: ["2D/3D Plans", "Structural Drawings", "Vastu Compliant"],
  },
  {
    icon: Paintbrush,
    title: "Interior Design & Execution",
    description:
      "Elegant and functional interior solutions, including kitchens, wardrobes, lighting, and finishes.",
    tags: ["Modular Kitchens", "Lighting Solutions", "Premium Finishes"],
  },
  {
    icon: ShieldCheck,
    title: "Project Management & Quality Control",
    description:
      "Dedicated managers, site audits, progress tracking, and strict adherence to safety and quality standards.",
    tags: ["Site Audits", "Progress Tracking", "Safety Standards"],
  },
  {
    icon: Hammer,
    title: "Material Procurement & Execution",
    description:
      "Premium-grade cement, steel, bricks and fittings sourced from top brands, ensuring lasting durability.",
    tags: ["Top Brand Sourcing", "Quality Testing", "Durability Assurance"],
  },
  {
    icon: FileCheck2,
    title: "Regulatory Approvals & Documentation",
    description:
      "Comprehensive assistance with plan approvals, permits, and mandatory construction documentation.",
    tags: ["Plan Approvals", "Building Permits", "Legal Documentation"],
  },
];

const ServicesSection = () => {
  return (
    <section className="relative py-12 bg-gray-50 md:px-28">
      <div className="relative max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="mb-10 text-center sm:mb-14">
          <p className="mb-2 text-sm uppercase tracking-[3px] text-sky-500">
            What We Offer
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-slate-800">
            Our Services
          </h2>

          <div className="mx-auto mt-4 h-[2px] w-16 bg-sky-500" />

          <p className="max-w-4xl mx-auto mt-4 text-gray-500 text-sm font-semibold">
            Comprehensive solutions tailored to bring your architectural
            vision to life through quality construction, innovative design,
            and professional execution.
          </p>
        </div>

        {/* Cards */}
         <ServiceSectionCard services={services} />

      </div>
    </section>
  );
};

export default ServicesSection;