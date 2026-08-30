import {
  MapPin,
  Ruler,
  House,
  CheckCircle2,
  Clock3,
} from "lucide-react";

export default function ProjectSectionCard  ({ project })  {
  const isCompleted = project.status === "Completed";

  return (
    <div
      className="
        group
        relative
        h-[400px]
        overflow-hidden
        rounded-[22px]
        bg-black
        shadow-sm
      "
    >
      {/* Background Image */}
      <img
        src={project.image}
        alt={project.title}
        className="
          absolute
          inset-0
          h-full
          w-full
          object-cover
          transition-transform
          duration-700
          group-hover:scale-105
        "
      />

      {/* Dark Overlay */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-t
          from-black
          via-black/55
          to-black/10
        "
      />

      {/* Status */}
      <div
        className={`
          absolute
          right-4
          top-4
          z-10
          flex
          items-center
          gap-2
          rounded-full
          px-4
          py-1.5
          text-sm
          font-semibold
          text-white
          shadow-md
          ${
            isCompleted
              ? "bg-green-500"
              : "bg-[#d1a642]"
          }
        `}
      >
        {isCompleted ? (
          <CheckCircle2 size={15} />
        ) : (
          <Clock3 size={15} />
        )}

        {project.status}
      </div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 z-10 p-6 sm:p-7">

        {/* Title */}
        <h3
          className="
            max-w-[90%]
            text-2xl
            font-bold
            leading-tight
            text-white
            sm:text-[26px]
          "
        >
          {project.title}
        </h3>

        {/* Location */}
        <div className="mt-4 flex items-start gap-3 text-sm text-gray-200">
          <MapPin
            size={18}
            className="mt-0.5 shrink-0 text-[#d5a62f]"
          />

          <span>{project.location}</span>
        </div>

        {/* Plot Area */}
        <div className="mt-3 flex items-center gap-3 text-sm text-gray-200">
          <Ruler
            size={18}
            className="shrink-0 text-[#d5a62f]"
          />

          <span>Plot Area : {project.plotArea}</span>
        </div>

        {/* Built Area */}
        <div className="mt-3 flex items-center gap-3 text-sm text-gray-200">
          <House
            size={18}
            className="shrink-0 text-[#d5a62f]"
          />

          <span>
            Residential Area Built: {project.builtArea}
          </span>
        </div>

      </div>
    </div>
  );
};
