export default function FeatureCard({ icon: Icon, title, description }) {
    return (
        <div
      className="
        group relative overflow-hidden
        border-b border-r border-white/10
        px-8 py-10
        transition-colors duration-300
        hover:bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.08),transparent_70%)]
      "
    >
      {/* left accent bar, brightens on hover */}
      <span
        className="
          pointer-events-none absolute left-0 top-1/2 h-10 w-[3px] -translate-y-1/2
          rounded-full bg-white/10
          transition-all duration-300
          group-hover:h-16 group-hover:bg-white/60
        "
      />

      <Icon
        className="mb-5 h-6 w-6 text-neutral-400 transition-colors duration-300 group-hover:text-white"
        strokeWidth={1.5}
      />

      <h3 className="mb-2 text-lg font-semibold text-white">{title}</h3>

      <p className="text-sm leading-relaxed text-neutral-400">
        {description}
      </p>
    </div>
    )
}