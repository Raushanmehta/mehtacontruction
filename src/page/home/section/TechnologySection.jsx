import { motion } from "framer-motion";
import {
  FaClipboardList,
  FaHammer,
  FaCamera,
  FaBell,
  FaHome,
} from "react-icons/fa";

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

export default function TechnologySection() {
  return (
    <section className=" overflow-visible py-20 bg-gray-50 md:px-28">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800">
            Built With Technology
          </h2>

          <p className="max-w-4xl mx-auto mt-4 text-gray-500 text-sm font-semibold">
            Real-time project visibility that keeps you informed,
            involved and in control every step of the way.
          </p>
        </motion.div>

        {/* Cards */}

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-4 md:grid-cols-2 xl:grid-cols-5"
        >
          {technologies.map((item) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.id}
                variants={card}
                whileHover={{
                  y: -10,
                  scale: 1.03,
                }}
                transition={{
                  type: "spring",
                  stiffness: 250,
                }}
                className="relative overflow-visible rounded-lg border border-gray-200 bg-white group"
              >
                {/* Grid Background */}

                <div
                  className="absolute inset-0 rounded-[28px] opacity-30"
                  style={{
                    backgroundImage: `
                      linear-gradient(#ece8df 1px, transparent 1px),
                      linear-gradient(90deg,#ece8df 1px, transparent 1px)
                    `,
                    backgroundSize: "28px 28px",
                  }}
                />

                {/* Number */}

                <div className="absolute left-1/2 -top-7 -translate-x-1/2 z-[999]">
                  <div className="w-10 h-10 rounded-full bg-[#112b57] text-white font-bold text-md flex items-center justify-center shadow-2xl border-4 border-white">
                    {item.id}
                  </div>
                </div>

                {/* Content */}

                <div className="relative z-20 px-4 pt-10 pb-10">

                  {/* Icon */}

                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-[24px] border border-[#eadfc8] bg-[#fbf7ef] transition-all duration-300 group-hover:rotate-6">
                    <Icon className="text-3xl text-sky-500" />
                  </div>

                  {/* Title */}

                  <h3 className="text-center text-sm font-bold leading-snug text-slate-800">
                    {item.title}
                  </h3>

                  {/* Heading */}

                  <h4 className="mt-2 whitespace-pre-line text-center text-sm font-bold uppercase leading-6 text-sky-500">
                    {item.heading}
                  </h4>

                  {/* List */}

                  <ul className="mt-4 ">
                    {item.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-3 text-gray-500 text-[16px] "
                      >
                        <span className="mt-2 h-1 w-1 rounded-full bg-sky-500" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}