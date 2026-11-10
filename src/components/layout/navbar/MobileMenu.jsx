import { useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ArrowRight, ChevronUp, ChevronDown } from "lucide-react";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";

import { navLinks } from "./nav-links";
import { Button } from "@/components/ui/button";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);

  const toggleMenu = (title) => {
    setActiveMenu((prev) => (prev === title ? null : title));
  };

  return (
    <>
      {/* Menu Button */}
      <button
        type="button"
        variant="ghost"
        size="icon-xl"
        onClick={() => setOpen(true)}
        className="lg:hidden "
        aria-label="Open menu"
      >
        <Menu size={24} />
      </button>
      <AnimatePresence>
        {open && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 bg-black/50 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />

            {/* Sidebar */}
            <motion.div
              className="fixed top-0 left-0 z-50 h-screen w-[85%] max-w-[350px] overflow-y-auto bg-white shadow-2xl [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 28,
              }}
            >
              {/* Header */}
              <div className="flex items-center justify-between px-4 py-4 border-b border-gray-200">
                <img
                  src="/image/mehta-contruction-logo-blue.png"
                  alt="Mehta Construction"
                  className="h-14 object-contain"
                />

                <Button
                  type="button"
                  onClick={() => setOpen(false)}
                    variant="ghost"
                    size="icon-lg"
                    className="hover:text-[#FF6118] rounded-full"
                    aria-label="Close menu"
                >
                  <X size={28} />
                </Button>
              </div>

              {/* Navigation */}
              <div className="px-5 py-5">
                {navLinks.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.08 }}
                    className="border-b border-gray-200"
                  >
                    {item.megaMenu ? (
                      <>
                        <Button
                          type="button"
                          onClick={() => toggleMenu(item.title)}
                          variant="ghost"
                          size="lg"
                          className="h-auto w-full justify-between rounded-none px-2 py-4 text-left font-medium text-black hover:text-[#FF6118]"
                        >
                          <span>{item.title}</span>

                          {activeMenu === item.title ? (
                            <ChevronUp size={18} />
                          ) : (
                            <ChevronDown size={18} />
                          )}
                        </Button>

                        <AnimatePresence>
                          {activeMenu === item.title && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.25 }}
                              className="overflow-hidden pb-3 "
                            >
                              {item.items.map((subItem) => (
                                <Link
                                  key={subItem.title}
                                  to={subItem.href}
                                  onClick={() => setOpen(false)}
                                  className="group block rounded-md px-2 py-2 transition-colors hover:bg-slate-50"
                                >
                                  <h4 className="flex items-center justify-between gap-3 text-sm font-medium  text-black">
                                    {subItem.title}
                                    <FiArrowUpRight className="shrink-0 text-base text-[#FF6118] transition-transform duration-300 ease-out group-hover:translate-x-1 group-hover:-translate-y-1" />
                                  </h4>

                                  {subItem.description && (
                                    <p className="mt-1 text-xs text-gray-500">
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
                        onClick={() => setOpen(false)}
                        className="block px-2 py-4 text-sm font-medium text-black transition hover:text-[#FF6118]"
                      >
                        {item.title}
                      </Link>
                    )}
                  </motion.div>
                ))}

                {/* Contact Button */}
                <Button
                  render={<Link to="/contact" />}
                  onClick={() => setOpen(false)}
                  variant="cta"
                  size="lg"
                  className="mt-8 h-auto w-full rounded-full py-3"
                >
                  Contact Us
                  <ArrowRight size={18} />
                </Button>

                {/* Social Icons */}

                

                <div className="flex justify-center gap-5 text-2xl mt-6">
                  <a href="#" className="hover:text-[#FF6118] transition">
                    <FaFacebook />
                  </a>

                  <a href="#" className="hover:text-[#FF6118] transition">
                    <FaInstagram />
                  </a>

                  <a href="#" className="hover:text-[#FF6118] transition">
                    <FaTwitter />
                  </a>

                  <a href="#" className="hover:text-[#FF6118] transition">
                    <FaLinkedinIn />
                  </a>

                  <a
                    href="https://wa.me/919304137746"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-[#FF6118] transition"
                  >
                    <FaWhatsapp />
                  </a>
                </div>

                {/* Footer */}

                <div className="mt-6 border-t border-gray-200 pt-6 text-center">
                  <h3 className="font-poppins font-semibold text-slate-800">
                    Mehta Construction Pvt. Ltd.
                  </h3>

                  <p className="text-xs text-gray-500">
                    Building Dreams with Quality & Trust
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
