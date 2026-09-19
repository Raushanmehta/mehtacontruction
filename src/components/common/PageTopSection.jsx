import React from "react";
import { Link } from "react-router-dom";
import { FiChevronRight } from "react-icons/fi";
import { GradientBackground } from "../ui/bloom-field-grident";


export default function PageTopSection({
  title,
  breadcrumbs = [],
}) {
  const finalBreadcrumbs =
    breadcrumbs.length > 0
      ? breadcrumbs
      : [
          { label: "Home", href: "/" },
          { label: title },
        ];

  return (
    <section className="relative flex h-72 w-full items-center justify-center overflow-hidden bg-slate-900 font-sans sm:h-54 lg:h-64">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <GradientBackground className="h-full w-full" />
        <img
          src="https://i.pinimg.com/736x/59/60/84/59608403897c82d13be0f127278c9c91.jpg"
          alt="Background"
          className="h-full w-full object-cover object-center opacity-90 grayscale-[0.08] contrast-110"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/65 via-sky-100/35 to-sky-300/30" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.9),transparent_22%),radial-gradient(circle_at_left,rgba(125,211,252,0.28),transparent_30%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:26px_26px]" />
      </div>

      <div className="relative z-20 flex flex-col items-center justify-center space-y-3 px-4 text-center sm:px-6 lg:px-8">
        <h1 className="text-3xl font-black tracking-tight text-white drop-shadow-md sm:text-4xl lg:text-5xl">
          {title}
        </h1>

        <nav className="flex items-center justify-center space-x-2 text-xs font-medium text-black sm:text-sm">
          {finalBreadcrumbs.map((item, index) => {
            const isLast = index === finalBreadcrumbs.length - 1;

            return (
              <React.Fragment key={`${item.label}-${index}`}>
                {index > 0 && (
                  <FiChevronRight className="text-xs text-black/70" />
                )}

                {item.href && !isLast ? (
                  <Link
                    to={item.href}
                    className="transition-colors hover:text-black"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span className="font-semibold text-black">
                    {item.label}
                  </span>
                )}
              </React.Fragment>
            );
          })}
        </nav>
      </div>
    </section>
  );
}






