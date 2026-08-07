import { motion } from "framer-motion";
import image from "@/page/home/section/whychooesus.png";
const features = [
  {
    id: "1",
    title: "Expert Team",
    desc: "A team of experienced professionals with over a decade of industry expertise.",
  },
  {
    id: "2",
    title: "End-to-End Solutions",
    desc: "From concept to execution, we handle all your development, design, and marketing needs.",
  },
  {
    id: "3",
    title: "Proven Results",
    desc: "Demonstrated success in driving growth, increasing conversions, and building strong digital brands.",
  },
];

// Fade Up Animation
const fadeUp = {
  hidden: {
    opacity: 0,
    y: 60,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

// Stagger Animation
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export default function WhyChoose() {
  return (
    <section className="min-h-screen flex items-center py-20 bg-white overflow-hidden md:px-28">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT IMAGE */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="relative flex justify-center"
          >
            
            {/* Image */}
            <motion.img
              src={image}
              alt="Construction"
              
              className="relative z-10 w-64 sm:w-72 lg:w-80"
            />
          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* Heading Line */}
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="h-2 rounded-full bg-gradient-to-r from-blue-300 to-blue-600 mb-8"
            />

            <motion.h2
              variants={fadeUp}
              className="text-3xl lg:text-4xl font-bold text-slate-800 mb-2"
            >
              Why Choose Mehta Construction?
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="text-gray-500  mb-10 text-base lg:text-md"
            >
              Our process ensures a structured, transparent and collaborative
              approach, allowing us to deliver high-quality solutions that meet
              your business objectives.
            </motion.p>

            {/* Timeline */}
            <motion.div
              className="relative"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {/* Vertical Line */}
              <div className="absolute left-5 top-5 bottom-5 w-[2px]  bg-gray-200"></div>

              {features.map((item) => (
                <motion.div
                  key={item.id}
                  variants={fadeUp}
                  className="relative flex gap-6 pb-8"
                >
                  {/* Number */}
                  <div className="w-10 h-10 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center font-bold text-sky-500 text-lg shrink-0 z-10">
                    {item.id}
                  </div>

                  {/* Text */}
                  <div>
                    <h3 className="text-xl lg:text-xl font-semibold text-slate-800 mb-2">
                      {item.title}
                    </h3>

                    <p className="text-gray-500 text-base">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}