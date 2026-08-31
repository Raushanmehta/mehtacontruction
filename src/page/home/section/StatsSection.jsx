import { motion } from "framer-motion";
import {
  FaHome,
  FaCity,
  FaStopwatch,
  FaDraftingCompass,
} from "react-icons/fa";

const stats = [
  {
    icon: FaHome,
    number: "10,142+",
    title: "Homes",
    subtitle: "Built and handed over",
  },
  {
    icon: FaCity,
    number: "10+",
    title: "Cities",
    subtitle: "Operational presence",
  },
  {
    icon: FaStopwatch,
    number: "8",
    title: "Months",
    subtitle: "Express execution",
  },
  {
    icon: FaDraftingCompass,
    number: "14,247",
    title: "Design Plans",
    subtitle: "Ready-to-build options",
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
    },
  },
};

export default function StatsSection() {
  return (
     <section className="relative bg-gray-50 py-12 md:px-26">
      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-12"
        >
          {stats.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                variants={item}
                className="text-center cursor-pointer"
              >
                {/* Icon */}
                <div className="flex justify-center mb-1">
                  <Icon className="text-gray-500 text-4xl" />
                </div>

                {/* Number */}
                <h2 className="text-2xl font-bold text-slate-800">
                  {item.number}
                </h2>

                {/* Title */}
                <h3 className=" text-md font-semibold text-slate-700">
                  {item.title}
                </h3>

                {/* Subtitle */}
                <p className=" text-md text-gray-500">
                  {item.subtitle}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}