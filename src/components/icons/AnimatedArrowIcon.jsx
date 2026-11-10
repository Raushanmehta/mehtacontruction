export default function AnimatedArrowIcon({ className = "" }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      className={`h-4 w-4 shrink-0 transition-transform duration-300 ease-out group-hover/button:translate-x-1 group-hover/button:-translate-y-1 group-active/button:translate-x-1.5 group-active/button:-translate-y-1.5 ${className}`}
    >
      <path
        d="M7 17 17 7M8 7h9v9"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
