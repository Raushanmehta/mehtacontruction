import { motion } from "framer-motion";

const topLogos = [
  "https://www.webnx.in/wp-content/uploads/2024/03/iso-27001-1.png",
  "https://www.webnx.in/wp-content/uploads/2024/03/ISO-9001.png",
  "https://www.webnx.in/wp-content/uploads/2024/03/D-U-N-S.png",
  "https://www.webnx.in/wp-content/uploads/2024/03/MSME.png",
  "https://www.webnx.in/wp-content/uploads/2024/03/DGFT.png",
  "https://www.webnx.in/wp-content/uploads/2024/03/DPIIT-Startup-1.png",
];

const firstLinks = [
  "Our Infrastructure",
  "Our Culture",
  "Women at WebNX",
  "Outsourcing Approach",
  "Discovery Phase",
  "Engagement Models",
  "Life at WebNX",
  "Company Profile",
];

const secondLinks = [
  "Offshore Development Model",
  "Case Studies",
  "Careers",
  "Blog",
  "Zero Tolerance Policy",
  "Terms of Service",
  "GDPR",
  "Contact Us",
];

export default function Footer() {
  return (
    <footer className="bg-[#2d3038] text-gray-400 md:px-28">
      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Top Logos */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-10 items-center justify-items-center border-b border-gray-700 pb-4"
        >
          {topLogos.map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt=""
              className="h-30 object-contain opacity-70 hover:opacity-100 transition"
            />
          ))}
        </motion.div>

        {/* First Links */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: .2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-x-6 text-[16px] gap-y-2 py-2 border-b border-gray-700"
        >
          {firstLinks.map((item) => (
            <a
              key={item}
              href="#"
              className="hover:text-white transition"
            >
              {item}
            </a>
          ))}
        </motion.div>

        {/* Second Links */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: .4 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center text-[16px] gap-x-6 gap-y-2 py-2 border-b border-gray-700"
        >
          {secondLinks.map((item) => (
            <a
              key={item}
              href="#"
              className="hover:text-white transition"
            >
              {item}
            </a>
          ))}
        </motion.div>

        {/* Terms */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: .5 }}
          viewport={{ once: true }}
          className="text-center py-2 text-[16px] border-b border-gray-700"
        >
          By exploring this site, you acknowledge and agree to be bound by these{" "}
          <a href="#" className="underline hover:text-white">
            Universal Terms of Service
          </a>.
        </motion.div>

        {/* Policy Links */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: .6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-10 py-2 text-[16px]"
        >
          <a href="#" className="hover:text-white">
            Privacy Policy
          </a>

          <a href="#" className="hover:text-white">
            Refund and Cancellation Policy
          </a>

          <a href="#" className="hover:text-white">
            Hiring Terms
          </a>
        </motion.div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: .7 }}
          viewport={{ once: true }}
          className="text-center text-[16px]  text-gray-500"
        >
          <p>
            Copyright © 2008–2025 WebNX Global Services Private Limited.
            All Rights Reserved.
          </p>

          <p>
            CIN: U62012GJ2025PTC164802 |
            D-U-N-S®: 771662965 |
            GSTIN: 24AAECW1715B1ZW
          </p>

          <p>
            MSME: UDYAM-GJ-01-0533592 |
            IEC: AAECW1715B
          </p>
        </motion.div>
      </div>
    </footer>
  );
}