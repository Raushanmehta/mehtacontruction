import { motion } from "framer-motion";
import {
  FaBuilding,
  FaHardHat,
  FaDraftingCompass,
  FaTools,
  FaHome,
  FaCity,
  FaRoad,
  FaClipboardCheck,
} from "react-icons/fa";

const services = [
  {
    title: "Building Construction",
    icon: <FaBuilding />,
  },
  {
    title: "Architectural Design",
    icon: <FaDraftingCompass />,
  },
  {
    title: "Residential Projects",
    icon: <FaHome />,
  },
  {
    title: "Commercial Projects",
    icon: <FaCity />,
  },
  {
    title: "Renovation & Remodeling",
    icon: <FaTools />,
  },
  {
    title: "Road & Infrastructure",
    icon: <FaRoad />,
  },
  {
    title: "Project Management",
    icon: <FaClipboardCheck />,
  },
  {
    title: "Civil Engineering",
    icon: <FaHardHat />,
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
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
      duration: 0.5,
    },
  },
};

export default function ServicesSection() {
  return (
    <section className="py-20 bg-white md:px-28">
      <div className="max-w-7xl mx-auto px-5">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-slate-800">
            Building Excellence with Mehta Construction
          </h2>

          <p className="max-w-5xl mx-auto mt-6 text-gray-500 text-md leading-6 ">
            At Mehta Construction Private Limited, we deliver reliable
            construction solutions with a commitment to quality, innovation, and
            timely execution. From residential homes and commercial buildings to
            infrastructure projects, our experienced team ensures every project
            is built with precision, safety, and excellence.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={item}
              className="group border border-gray-200 h-40 flex flex-col items-center justify-center cursor-pointer bg-white hover:bg-sky-500 hover:border-sky-500 transition-all duration-300 p-4"
            >
              {/* Icon */}
              <div className="text-4xl text-sky-500 group-hover:text-white transition-colors duration-300">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="mt-8 text-md font-semibold text-slate-700 group-hover:text-white transition-colors duration-300">
                {service.title}
              </h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
