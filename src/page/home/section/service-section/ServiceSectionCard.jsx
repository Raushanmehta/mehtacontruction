
const ServiceSectionCard = ({ services }) => {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {services.map((service, index) => {
        const Icon = service.icon;

        return (
          <div
            key={index}
            className="
              group
              overflow-hidden
              rounded-2xl
              border-l
              border-r
              border-5
              border-gray-200
              bg-white
              transition-all
             
              hover:border-sky-500
              
            "
          >
            {/* ================= TOP SECTION ================= */}
            <div
              className="
                flex
                h-[220px]
                items-center
                justify-center
                bg-gray-50
                transition-all
                duration-300
                object-contain
                group-hover:bg-sky-50
              "
            >
              {/* Icon / Image */}
              {service.image ? (
                <img
                  src={service.image}
                  alt={service.title}
                  className="
                    h-full
                    w-full
                    object-cover
                    object-contain
                  "
                />
              ) : (
                <div
                  className="
                    flex
                    h-20
                    w-20
                    items-center
                    justify-center
                    rounded-2xl
                    bg-sky-500
                    text-white
                    transition-all
                    duration-300
                    group-hover:scale-105
                    group-hover:bg-sky-600
                  "
                >
                  <Icon size={38} strokeWidth={1.8} />
                </div>
              )}
            </div>

            {/* ================= BOTTOM SECTION ================= */}
            <div className="p-4 sm:p-4">
              {/* Title */}
              <h3
                className="
                  mb-3
                  text-xl
                  leading-7
                  text-[#10264b]
                  transition-colors
                  duration-300
                  group-hover:text-sky-600
                  font-base
                "
              >
                {service.title}
              </h3>

              {/* Description */}
              <p
                className="
                  mb-5
                  text-sm
                  leading-6
                  text-gray-800
                "
              >
                {service.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {service.tags?.map((tag) => (
                  <span
                    key={tag}
                    className="
                      rounded-full
                      bg-gray-100
                      px-3
                      py-1.5
                      text-[11px]
                      font-medium
                      text-[#66758a]
                      transition-colors
                      duration-300
                      group-hover:bg-sky-50
                      group-hover:text-sky-600
                      sm:text-xs
                    "
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ServiceSectionCard;
