const ServiceSectionCard = ({ services }) => {
  return (
    <div className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
      {services.map((service, index) => {
        const Icon = service.icon;

        return (
          <div
            key={index}
            className="
              group
              min-h-[310px]
              rounded-2xl
              border
              border-gray-50
              bg-white
              p-6
              shadow-sm
              transition-all
              duration-300
              hover:-translate-y-1
              hover:shadow-xl
              sm:p-7
            "
          >
            {/* Icon + Title */}
            <div className="mb-5 flex items-center gap-4">

              {/* Icon */}
              <div
                className="
                  flex
                  h-14
                  w-14
                  shrink-0
                  items-center
                  justify-center
                  rounded-2xl
                  bg-sky-500
                  text-white
                  transition-all
                  duration-300
                  group-hover:bg-sky-600
                "
              >
                <Icon size={28} strokeWidth={1.8} />
              </div>

              {/* Title */}
              <h3
                className="
                  text-lg
                  font-bold
                  leading-6
                  text-[#10264b]
                  sm:text-[19px]
                "
              >
                {service.title}
              </h3>
            </div>

            {/* Description */}
            <p
              className="
                mb-5
                text-sm
                font-semibold
                leading-6
                text-gray-500
              "
            >
              {service.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {service.tags.map((tag) => (
                <span
                  key={tag}
                  className="
                    rounded-full
                    bg-gray-100
                    px-2.5
                    py-1
                    text-[11px]
                    font-medium
                    text-[#66758a]
                    sm:text-xs
                  "
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ServiceSectionCard;