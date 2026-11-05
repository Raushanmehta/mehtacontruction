import { useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { navLinks } from "./nav-links";
import { Button } from "@/components/ui/button";

export default function NavMenu() {
  const [openMenu, setOpenMenu] = useState(null);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [serviceMenuLeft, setServiceMenuLeft] = useState(0);

  return (
    <nav className="flex items-center gap-8 text-black ">
      {navLinks.map((item) => (
        <div
          key={item.title}
          className="relative"
          onMouseEnter={(event) => {
            setOpenMenu(item.title);

            if (item.title === "Services") {
              setServiceMenuLeft(-event.currentTarget.getBoundingClientRect().left);
            }

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
              <Button type="button" variant="ghost" size="lg" className="h-auto gap-1 rounded-none px-0 py-0 uppercase text-[15px] font-medium hover:text-[#FF6118]">
                {item.title}

                <motion.span
                  animate={{
                    rotate: openMenu === item.title ? 180 : 0,
                  }}
                  transition={{ duration: 0.25 }}
                >
                  <ChevronDown size={16} />
                </motion.span>
              </Button>

              <AnimatePresence>
                {openMenu === item.title && (
                  <motion.div
                    initial={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
                    animate={{ opacity: 1, clipPath: "inset(0 0 0% 0)" }}
                    exit={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
                    transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                    style={{
                      transformOrigin: "top",
                      ...(item.title === "Services" && { left: serviceMenuLeft }),
                    }}
                    className={`
                      absolute
                      ${item.title === "Services" ? "w-screen p-0" : "left-0 p-4"}
                      top-full
                      mt-7
                      bg-slate-50
                      shadow-lg
                      z-50
                      ${
                        item.title === "Services"
                          ? ""
                          : item.columns === 1
                          ? "w-42"
                          : "w-[800px]"
                      }
                    `}
                  >
                    {item.title === "Services" ? (
                      <div className="w-full bg-[#f3f3f3] px-6 py-8 sm:px-8 lg:px-11 lg:py-10">
                        <div className="mx-auto grid max-w-[1840px] grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-[minmax(240px,325px)_repeat(3,minmax(0,1fr))] lg:gap-10">
                          <aside className="rounded-[20px] bg-white p-6 sm:p-7">
                            <p className="mb-6 max-w-[250px] text-base leading-6 text-[#555]">
                              {item.intro}
                            </p>
                            <div className="grid gap-3">
                              {item.highlights.map((highlight) => (
                                <span
                                  key={highlight}
                                  className="flex min-h-12 items-center justify-center rounded-full border border-[#dedede] px-4 text-center text-xs font-bold uppercase tracking-[0.04em] text-black"
                                >
                                  {highlight}
                                </span>
                              ))}
                            </div>
                          </aside>

                          {item.serviceGroups.map((group) => (
                            <section key={group.title} className="min-w-0 px-1 py-1">
                              <Link
                                to={group.href}
                                className="group mb-5 flex items-center gap-4"
                              >
                                <span className="grid size-[50px] shrink-0 place-items-center rounded-full border border-[#FF6118] text-black transition-colors group-hover:bg-[#FF6118] hover:!text-white">
                                  <ArrowUpRight size={29} strokeWidth={1.7} />
                                </span>
                                <h3 className="text-lg font-semibold leading-6 text-black transition-colors group-hover:text-[#FF6118] sm:text-xl">
                                  {group.title}
                                </h3>
                              </Link>
                              <ul className="space-y-2">
                                {group.items.map((service) => (
                                  <li key={service}>
                                    <Link
                                      to={`${group.href}#${service.toLowerCase().replaceAll(/[^a-z0-9]+/g, "-").replaceAll(/(^-|-$)/g, "")}`}
                                      className="block rounded-sm py-0.5 text-[15px] leading-6 text-black transition-colors hover:text-[#FF6118]"
                                    >
                                      {service}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </section>
                          ))}
                        </div>
                      </div>
                    ) : item.columns === 1 ? (
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
                            <h3 className="text-sm  text-black group-hover:text-[#FF6118] transition-colors">
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
                              className="flex items-center gap-3  hover:bg-[#FF6118]/10 transition-colors rounded-lg p-2"
                            >
                              <h3 className=" text-sm text-black group-hover:text-[#FF6118] transition-colors">
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
              className="uppercase text-[15px] font-medium hover:text-[#FF6118] transition-colors"
            >
              {item.title}
            </Link>
          )}
        </div>
      ))}
    </nav>
  );
}