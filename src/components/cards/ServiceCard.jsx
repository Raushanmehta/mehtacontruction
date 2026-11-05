
const ServiceCard = ({ service }) => {
  const Icon = service.icon;

  return (
    <article className="group overflow-hidden rounded-2xl border-l border-r border-5 border-gray-200 bg-white transition-all hover:border-[#FF6118]">
      <div className="flex h-[220px] items-center justify-center bg-gray-50 transition-all duration-300 object-contain group-hover:bg-[#FF6118]/10">
        {service.image ? (
          <img
            src={service.image}
            alt={service.title}
            className="h-full w-full object-cover object-contain"
          />
        ) : (
          <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-[#FF6118] text-white transition-all duration-300 group-hover:scale-105 group-hover:bg-black">
            <Icon size={38} strokeWidth={1.8} />
          </div>
        )}
      </div>

      <div className="p-4">
        <h3 className="mb-3 text-xl leading-7 text-black transition-colors duration-300 group-hover:text-[#FF6118] font-base">
          {service.title}
        </h3>

        <p className="mb-5 text-sm leading-6 text-gray-800">
          {service.description}
        </p>

        {service.tags?.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {service.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-gray-100 px-3 py-1.5 text-[11px] font-medium text-black transition-colors duration-300 group-hover:bg-[#FF6118]/10 group-hover:text-[#FF6118] sm:text-xs"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </article>
  );
};

export default ServiceCard;
