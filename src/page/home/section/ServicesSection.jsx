import { motion } from "framer-motion";
import {
  FaPaintBrush,
  FaPenNib,
  FaDesktop,
  FaPalette,
  FaLaptopCode,
  FaShoppingCart,
  FaMobileAlt,
  FaCogs,
  FaShareAlt,
  FaSearch,
  FaBullhorn,
  FaCode,
} from "react-icons/fa";

const services = [
  { title: "Brand Identity", icon: <FaPaintBrush /> },
  { title: "Logo Design", icon: <FaPenNib /> },
  { title: "UI/UX Design", icon: <FaDesktop /> },
  { title: "Graphic Design", icon: <FaPalette /> },
  { title: "Website Design", icon: <FaLaptopCode /> },
  { title: "eCommerce Store", icon: <FaShoppingCart /> },
  { title: "Mobile App", icon: <FaMobileAlt /> },
  { title: "Software", icon: <FaCogs /> },
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
            Empowering Digital Innovation
          </h2>

          <p className="max-w-5xl mx-auto mt-6 text-gray-500 text-md leading-6 ">
            At WebNX, we specialize in transforming ideas into powerful digital
            solutions. From eye-catching design to seamless development, our
            services drive growth and success for startups, SMEs, and
            enterprises alike.
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
              whileHover={{
                y: -8,
                scale: 1.03,
              }}
              transition={{
                type: "spring",
                stiffness: 250,
              }}
              className="group border border-gray-200 h-40 flex flex-col items-center justify-center cursor-pointer bg-white hover:bg-sky-500 hover:border-sky-500 transition-all duration-300 p-4"
            >
              {/* Icon */}
              <div className="text-4xl text-sky-500 group-hover:text-white transition-colors duration-300">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="mt-8 text-xl font-semibold text-slate-700 group-hover:text-white transition-colors duration-300">
                {service.title}
              </h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
