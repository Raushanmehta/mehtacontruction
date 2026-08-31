import { useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { navLinks } from "./nav-links";

export default function NavMenu() {
  const [openMenu, setOpenMenu] = useState(null);
  const [hoveredItem, setHoveredItem] = useState(null);

  return (
    <nav className="flex items-center gap-8 text-black ">
      {navLinks.map((item) => (
        <div
          key={item.title}
          className="relative"
          onMouseEnter={() => {
            setOpenMenu(item.title);

            // First child ki image default show hogi
            if (item.items?.length > 0) {
              setHoveredItem(item.items[0]);
            }
          }}
          onMouseLeave={() => {
            setOpenMenu(null);
            setHoveredItem(null);
          }}
        >
          {item.megaMenu ? (
            <>
              {/* MENU BUTTON */}
              <button className="flex items-center gap-1 uppercase text-[15px] font-medium hover:text-[#42E442] transition-colors">
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
                      shadow-lg
                      p-4
                      z-50
                      ${
                        item.columns === 1
                          ? "w-42"
                          : "w-[800px]"
                      }
                    `}
                  >
                    {item.columns === 1 ? (
                      /* =========================
                         SINGLE COLUMN MENU
                      ========================== */
                      <div className="flex flex-col gap-4">
                        {item.items.map((subItem) => (
                          <Link
                            key={subItem.title}
                            to={subItem.href}
                            className="group"
                          >
                            <h3 className="text-sm  text-gray-900 group-hover:text-[#42E442] transition-colors">
                              {subItem.title}
                            </h3>
                          </Link>
                        ))}
                      </div>
                    ) : (
                      /* =========================
                         MEGA MENU
                      ========================== */
                      <div className="flex gap-8">
                        {/* LEFT - CHILDREN */}
                        <div className="flex flex-col gap-x-6 gap-y-0">
                          {item.items.map((subItem) => (
                            <Link
                              key={subItem.title}
                              to={subItem.href}
                              onMouseEnter={() =>
                                setHoveredItem(subItem)
                              }
                              className="flex items-center gap-3  hover:bg-sky-100 transition-colors rounded-lg p-2"
                            >
                              <h3 className=" text-sm text-gray-900 group-hover:text-[#42E442] transition-colors">
                                {subItem.title}
                              </h3>
                            </Link>
                          ))}
                        </div>

                        {/* RIGHT - IMAGE */}
                        <div className="w-[578px] h-64 shrink-0">
                          <AnimatePresence mode="wait">
                            {hoveredItem?.image && (
                              <motion.img
                                key={hoveredItem.image}
                                src={hoveredItem.image}
                                alt={hoveredItem.title}
                                initial={{
                                  opacity: 0,
                                  x: 10,
                                }}
                                animate={{
                                  opacity: 1,
                                  x: 0,
                                }}
                                exit={{
                                  opacity: 0,
                                  x: -10,
                                }}
                                transition={{
                                  duration: 0.2,
                                }}
                                className="w-full h-full object-cover rounded-lg"
                              />
                            )}
                          </AnimatePresence>
                        </div>
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </>
          ) : (
            <Link
              to={item.href}
              className="uppercase text-[15px] font-medium hover:text-[#42E442] transition-colors"
            >
              {item.title}
            </Link>
          )}
        </div>
      ))}
    </nav>
  );
}