import { motion } from "framer-motion";
import {
  FaShieldAlt,
  FaCompass,
  FaBullhorn,
  FaFeatherAlt,
  FaChartPie,
  FaHandshake,
} from "react-icons/fa";

const services = [
  {
    icon: FaShieldAlt,
    title: "20+ Years Excellence",
    desc: "Award-winning architectural design and construction expertise.",
  },
  {
    icon: FaCompass,
    title: "450+ Quality Checks",
    desc: "Comprehensive quality assurance at every stage ensuring exceptional standards.",
  },
  {
    icon: FaBullhorn,
    title: "On-Time Delivery",
    desc: "98% of projects completed on schedule. We value your time and commitments.",
  },
  {
    icon: FaFeatherAlt,
    title: "Transparent Pricing",
    desc: "No hidden costs. Complete cost breakdown provided upfront with detailed quotations.",
  },
  {
    icon: FaChartPie,
    title: "Expert Team",
    desc: "50+ skilled professionals including licensed architects and certified contractors.",
  },
  {
    icon: FaHandshake,
    title: "Live Tracking",
    desc: "Real-time construction updates enabling clients to monitor progress anytime.",
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function KeyFeatures() {
  return (
    <section className="relative py-24 bg-white md:px-28">
      {/* Gray Dot Background */}
      

      <div className="relative max-w-7xl mx-auto px-6 ">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-12 "
        >

            <div
        className="absolute inset-0 opacity-60 "
        style={{
          backgroundImage:
            "radial-gradient(circle, #d1d5db 1px, transparent 1px)",
          backgroundSize: "16px 16px",
        }}
      ></div>

          <h2 className="text-2xl md:text-3xl font-bold text-slate-800">
            Key Features
          </h2>

          <p className="max-w-4xl mx-auto mt-4 text-gray-500 text-sm font-semibold">
            Elevate your brand with our essential services designed to align
            strategy, enhance visibility, and foster meaningful connections.
            Discover how we can help you stand out and thrive in today's
            competitive market.
          </p>
        </motion.div>

        {/* Services */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 xl:grid-cols-3 gap-x-10 gap-y-10"
        >
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={index}
                variants={item}
                whileHover={{
                  x: 10,
                }}
                transition={{
                  type: "spring",
                  stiffness: 250,
                }}
                className="flex items-start gap-4 group cursor-pointer"
              >
                {/* Icon */}
                <div className="w-12 h-12 min-w-[64px] min-h-[64px] rounded-full bg-[#3a3a3a] flex items-center justify-center transition-all duration-300 group-hover:bg-sky-500">
                  <Icon className="text-white text-3xl" />
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-md font-bold text-slate-800 uppercase group-hover:text-sky-500 transition-colors duration-300">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm text-gray-600 font-semibold ">
                    {service.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}