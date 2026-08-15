import { motion } from "framer-motion";
import {
  FaClipboardList,
  FaHammer,
  FaCamera,
  FaBell,
  FaHome,
} from "react-icons/fa";

import TechnologySectionCard from "./TechnologySectionCard";

const technologies = [
  {
    id: "01",
    icon: FaClipboardList,
    title: "Digital Planning Access",
    heading: "YOUR VISION,\nDIGITALLY ENABLED",
    points: [
      "Live project timelines",
      "Online approvals",
      "3D Building Views",
    ],
  },
  {
    id: "02",
    icon: FaHammer,
    title: "Material & Labor Tracking",
    heading: "KNOW ONSITE\nACTIVITIES CLEARLY",
    points: [
      "Activity Reports",
      "Material Tracking",
      "Quality Updates",
    ],
  },
  {
    id: "03",
    icon: FaCamera,
    title: "Live Site Updates",
    heading: "SEE PROGRESS\nCLEARLY DAILY",
    points: [
      "Daily Site Photos",
      "Progress Videos",
      "Milestone Alerts",
    ],
  },
  {
    id: "04",
    icon: FaBell,
    title: "Smart Project Control",
    heading: "COMPLETE PROJECT\nTRANSPARENCY",
    points: [
      "Smart Alerts",
      "Real-time Progress",
      "Budget Tracking",
    ],
  },
  {
    id: "05",
    icon: FaHome,
    title: "Digital Handover Care",
    heading: "EVERYTHING SAFELY\nDOCUMENTED",
    points: [
      "24×7 Project Access",
      "Digital Records",
      "Lifetime Support",
    ],
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

const card = {
  hidden: {
    opacity: 0,
    y: 60,
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

const TechnologySection = () => {
  return (
    <section className="overflow-visible bg-gray-50 py-20 md:px-28">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <p className="mb-2 text-sm uppercase tracking-[3px] text-sky-500">
            Smart Construction
          </p>

          <h2 className="text-2xl font-bold text-slate-800 md:text-3xl">
            Built With Technology
          </h2>

          <div className="mx-auto mt-4 h-[2px] w-16 bg-sky-500" />

          <p className="mx-auto mt-4 max-w-4xl text-sm font-semibold text-gray-500">
            Real-time project visibility that keeps you informed,
            involved and in control every step of the way.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="
            grid
            grid-cols-1
            gap-6
            md:grid-cols-2
            lg:grid-cols-4
          "
        >
          {technologies.map((technology) => (
            <TechnologySectionCard
              key={technology.id}
              technology={technology}
              variants={card}
            />
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default TechnologySection;