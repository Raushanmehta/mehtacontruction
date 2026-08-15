import { motion } from "framer-motion";

const TechnologySectionCard = ({ technology, variants }) => {
  const Icon = technology.icon;

  return (
    <motion.div
      variants={variants}
      className="
        group
        relative
        overflow-hidden
        rounded-2xl
        border
        border-[#18345e]
        bg-white
        p-7
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-2
        hover:shadow-xl
      "
    >
      {/* Number */}
      <div className="absolute right-5 top-5 text-4xl font-black text-gray-100">
        {technology.id}
      </div>

      {/* Icon */}
      <div
        className="
          mb-6
          flex
          h-14
          w-14
          items-center
          justify-center
          rounded-2xl
          bg-sky-500
          text-white
          transition-all
          duration-300
          group-hover:bg-[#d3a033]
        "
      >
        <Icon size={25} />
      </div>

      {/* Title */}
      <h3 className="mb-4 text-xl font-bold text-[#10264b]">
        {technology.title}
      </h3>

      {/* Heading */}
      <h4 className="mb-5 whitespace-pre-line text-lg font-bold leading-6 text-slate-700">
        {technology.heading}
      </h4>

      {/* Points */}
      <div className="space-y-3">
        {technology.points.map((point) => (
          <div
            key={point}
            className="flex items-center gap-3 text-sm font-medium text-gray-500"
          >
            <span className="h-2 w-2 shrink-0 rounded-full bg-sky-500" />

            <span>{point}</span>
          </div>
        ))}
      </div>

      {/* Bottom Line */}
      <div className="mt-7 h-[2px] w-10 bg-sky-500 transition-all duration-300 group-hover:w-full" />
    </motion.div>
  );
};

export default TechnologySectionCard;