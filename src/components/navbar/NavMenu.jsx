import { useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import { navLinks } from "./nav-links";

export default function NavMenu() {
  const [openMenu, setOpenMenu] = useState(null);

  return (
    <nav className="flex items-center gap-8">
      {navLinks.map((item) => (
        <div
          key={item.title}
          className="relative"
          onMouseEnter={() => setOpenMenu(item.title)}
          onMouseLeave={() => setOpenMenu(null)}
        >
          {item.megaMenu ? (
            <>
              <button
                className="flex items-center gap-1 uppercase text-[15px] font-medium hover:text-sky-600 transition-colors"
              >
                {item.title}

                <motion.span
                  animate={{
                    rotate: openMenu === item.title ? 180 : 0,
                  }}
                  transition={{ duration: 0.25 }}
                >
                  <ChevronDown size={16} />
                </motion.span>
              </button>

              <AnimatePresence>
                {openMenu === item.title && (
                  <motion.div
                    initial={{
                      opacity: 0,
                      y: 15,
                      scale: 0.97,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      scale: 1,
                    }}
                    exit={{
                      opacity: 0,
                      y: 10,
                      scale: 0.97,
                    }}
                    transition={{
                      duration: 0.22,
                      ease: "easeOut",
                    }}
                    className={`
                      absolute
                      left-0
                      top-full
                      mt-7
                      bg-slate-50 
                      
                      p-6
                      z-50
                      ${
                        item.columns === 1
                          ? "w-54 text-sm hover:text-sky-600"
                          : "w-[700px] grid grid-cols-3 gap-6"
                      }
                    `}
                  >
                    {item.items.map((subItem) => (
                      <Link
                        key={subItem.title}
                        to={subItem.href}
                        className=" "
                      >
                        <h3 className="font-semibold text-gray-900">
                          {subItem.title}
                        </h3>

                        {subItem.description && (
                          <p className="mt-2 text-sm text-slate-500">
                            {subItem.description}
                          </p>
                        )}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </>
          ) : (
            <Link
              to={item.href}
              className="uppercase text-[15px] font-medium hover:text-sky-600"
            >
              {item.title}
            </Link>
          )}
        </div>
      ))}
    </nav>
  );
}