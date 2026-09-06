import React from "react";
import { motion } from "framer-motion";
import {
  FaClipboardList,
  FaHammer,
  FaCamera,
  FaBell,
  FaHome,
} from "react-icons/fa";

export default function TechnologySection() {
  const steps = [
    {
      number: "01",
      title: "Digital Planning Access",
      theme: "green",
      icon: <FaClipboardList className="h-6 w-6 text-[#0081CD]" />,
      heading: "YOUR VISION,\nDIGITALLY ENABLED",
      points: [
        "Live project timelines",
        "Online approvals",
        "3D Building Views",
      ],
    },
    {
      number: "02",
      title: "Material & Labor Tracking",
      theme: "blue",
      icon: <FaHammer className="h-6 w-6 text-[#0081CD]" />,
      heading: "KNOW ONSITE\nACTIVITIES CLEARLY",
      points: [
        "Activity Reports",
        "Material Tracking",
        "Quality Updates",
      ],
    },
    {
      number: "03",
      title: "Live Site Updates",
      theme: "green",
      icon: <FaCamera className="h-6 w-6 text-[#0081CD]" />,
      heading: "SEE PROGRESS\nCLEARLY DAILY",
      points: [
        "Daily Site Photos",
        "Progress Videos",
        "Milestone Alerts",
      ],
    },
    {
      number: "04",
      title: "Smart Project Control",
      theme: "blue",
      icon: <FaBell className="h-6 w-6 text-[#0081CD]" />,
      heading: "COMPLETE PROJECT\nTRANSPARENCY",
      points: [
        "Smart Alerts",
        "Real-time Progress",
        "Budget Tracking",
      ],
    },
    {
      number: "05",
      title: "Digital Handover Care",
      theme: "green",
      icon: <FaHome className="h-6 w-6 text-[#0081CD]" />,
      heading: "EVERYTHING SAFELY\nDOCUMENTED",
      points: [
        "24×7 Project Access",
        "Digital Records",
        "Lifetime Support",
      ],
    },
  ];

  /* =========================
     MAIN CONTAINER ANIMATION
  ========================== */
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  /* =========================
     CARD ANIMATION
  ========================== */
  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 70,
      scale: 0.95,
    },

    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  /* =========================
     ICON ANIMATION
  ========================== */
  const iconVariants = {
    hidden: {
      opacity: 0,
      scale: 0,
      y: -20,
    },

    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 180,
        damping: 12,
      },
    },
  };

  /* =========================
     ARROW ANIMATION
  ========================== */
  const arrowVariants = {
    hidden: {
      opacity: 0,
      y: -8,
    },

    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        delay: 0.2,
      },
    },
  };

  return (
    <section className="relative overflow-hidden bg-black px-4 py-16 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">

        {/* =========================
            MAIN CONTAINER
        ========================== */}
        <div className="relative">

          {/* =========================
              SECTION TITLE
          ========================== */}
          <motion.div
            initial={{
              opacity: 0,
              y: -40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            className="relative z-30 flex justify-center"
          >
            <motion.div
              initial={{
                scale: 0.8,
                opacity: 0,
              }}
              whileInView={{
                scale: 1,
                opacity: 1,
              }}
              transition={{
                duration: 0.6,
                delay: 0.2,
                ease: "easeOut",
              }}
              viewport={{
                once: true,
              }}
              className="rounded-2xl border border-[#0081CD] bg-black px-8 py-3 text-center shadow-lg"
            >
              <h3 className="text-xl font-bold text-white sm:text-4xl">
                Built With Technology
              </h3>
            </motion.div>
          </motion.div>

          {/* =========================
              MAIN BACKGROUND BOX
          ========================== */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.96,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: "easeOut",
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            className="relative z-10 -mt-5 rounded-2xl border-2 border-[#0081CD] bg-black px-6 pb-8 pt-12 shadow-lg sm:px-8"
          >
            <motion.div
              initial={{
                opacity: 0,
                y: 10,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.5,
                delay: 0.4,
              }}
              viewport={{
                once: true,
              }}
              className="text-center text-lg font-semibold text-gray-400"
            >
              Smart Construction
            </motion.div>
          </motion.div>

          {/* =========================
              TIMELINE
          ========================== */}
          <div className="relative z-20 -mt-8 pt-8">

            {/* =========================
                STEPS GRID
            ========================== */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.15,
              }}
              className="relative z-20 grid grid-cols-1 gap-8 md:grid-cols-3 xl:grid-cols-5"
            >
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  className="relative flex flex-col items-center"
                >

                  {/* =========================
                      ICON + ARROW
                  ========================== */}
                  <div className="relative z-50 -mt-6 flex flex-col items-center">

                    {/* ICON */}
                    <motion.div
                      variants={iconVariants}
                      whileHover={{
                        scale: 1.12,
                        rotate: 5,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 15,
                      }}
                      className="relative z-50 flex h-16 w-16 cursor-pointer items-center justify-center rounded-full border-2 border-[#0081CD] bg-black shadow-lg"
                    >
                      {step.icon}
                    </motion.div>

                    {/* DOWN ARROW */}
                    <motion.div
                      variants={arrowVariants}
                      className="relative z-50 -mt-1"
                    >
                      <div
                        className="
                          mt-4
                          h-0
                          w-0
                          border-l-[8px]
                          border-r-[8px]
                          border-t-[12px]
                          border-l-transparent
                          border-r-transparent
                          border-t-sky-500
                        "
                      />
                    </motion.div>

                  </div>

                  {/* =========================
                      CARD
                  ========================== */}
                  <motion.div
                    whileHover={{
                      y: -8,
                      scale: 1.02,
                    }}
                    transition={{
                      duration: 0.25,
                      ease: "easeOut",
                    }}
                    className="relative z-40 mt-2 w-full"
                  >

                    {/* CARD TITLE */}
                    <div
                      className={`w-full rounded-t-xl px-4 py-3.5 text-center text-sm font-semibold text-black shadow-md sm:text-base ${
                        step.theme === "green"
                          ? "bg-black"
                          : "bg-[#0081CD]"
                      }`}
                    >
                      {step.number}. {step.title}
                    </div>

                    {/* CARD CONTENT */}
                    <div className="min-h-[220px] w-full rounded-b-xl border border-[#0081CD] bg-black p-5">

                      {/* HEADING */}
                      <h4 className="mb-5 whitespace-pre-line text-sm font-bold leading-relaxed tracking-wide text-white">
                        {step.heading}
                      </h4>

                      {/* POINTS */}
                      <ul className="space-y-3 text-xs leading-relaxed text-white sm:text-sm">

                        {step.points.map((point, pIndex) => (
                          <motion.li
                            key={pIndex}
                            initial={{
                              opacity: 0,
                              x: -15,
                            }}
                            whileInView={{
                              opacity: 1,
                              x: 0,
                            }}
                            transition={{
                              duration: 0.4,
                              delay: 0.15 * pIndex,
                            }}
                            viewport={{
                              once: true,
                            }}
                            className="flex items-start gap-2.5"
                          >
                            {/* BULLET */}
                            <span
                              className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${
                                step.theme === "green"
                                  ? "bg-black"
                                  : "bg-[#0081CD]"
                              }`}
                            />

                            {/* TEXT */}
                            <span>{point}</span>
                          </motion.li>
                        ))}

                      </ul>

                    </div>
                  </motion.div>

                </motion.div>
              ))}
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}