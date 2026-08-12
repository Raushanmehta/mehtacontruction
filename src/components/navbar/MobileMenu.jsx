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

import { navLinks } from "./nav-links";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);

  const toggleMenu = (title) => {
    setActiveMenu((prev) => (prev === title ? null : title));
  };

  return (
    <>
      {/* Menu Button */}
      <button onClick={() => setOpen(true)} className="lg:hidden p-2">
        <Menu size={28} />
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
              className="fixed top-0 left-0 h-screen w-[85%] max-w-[350px] bg-white z-50 shadow-2xl overflow-y-auto"
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
              <div className="flex items-center justify-between px-5 py-5 border-b border-gray-200">
                <img
                  src="https://mehtaconstructions.com/wp-content/uploads/2018/02/tata-1.png"
                  alt="Mehta Construction"
                  className="h-14 object-contain"
                />

                <button
                  onClick={() => setOpen(false)}
                  className="hover:text-sky-500 transition"
                >
                  <X size={28} />
                </button>
              </div>

              {/* Navigation */}
              <div className="px-6 py-5">
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
                        <button
                          onClick={() => toggleMenu(item.title)}
                          className="w-full flex items-center justify-between py-4 text-left font-medium text-slate-700 hover:text-sky-500 transition"
                        >
                          <span>{item.title}</span>

                          {activeMenu === item.title ? (
                            <ChevronUp size={18} />
                          ) : (
                            <ChevronDown size={18} />
                          )}
                        </button>

                        <AnimatePresence>
                          {activeMenu === item.title && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.25 }}
                              className="overflow-hidden pl-4 pb-3"
                            >
                              {item.items.map((subItem) => (
                                <Link
                                  key={subItem.title}
                                  to={subItem.href}
                                  onClick={() => setOpen(false)}
                                  className="block py-3 border-l-2 border-sky-500 pl-4 hover:bg-slate-50 rounded-md transition"
                                >
                                  <h4 className="font-medium text-slate-700">
                                    {subItem.title}
                                  </h4>

                                  <p className="text-xs text-gray-500 mt-1">
                                    {subItem.description}
                                  </p>
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
                        className="block py-4 font-medium text-slate-700 hover:text-sky-500 transition"
                      >
                        {item.title}
                      </Link>
                    )}
                  </motion.div>
                ))}

                {/* Contact Button */}
                <Link
                  to="/contact"
                  onClick={() => setOpen(false)}
                  className="mt-8 flex items-center justify-center gap-2 rounded-full bg-sky-500 hover:bg-sky-600 text-white py-3 font-semibold transition"
                >
                  Contact Us
                  <ArrowRight size={18} />
                </Link>

                {/* Social Icons */}

                <div className="flex justify-center mt-10">
                  <a
                    href="https://wa.me/919304137746"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src="https://www.webnx.in/wp-content/uploads/2022/03/whatsapp-min-1.png"
                      alt="Whatsapp"
                      className="w-40 hover:scale-105 transition duration-300"
                    />
                  </a>
                </div>

                <div className="flex justify-center gap-5 text-2xl mt-10">
                  <a href="#" className="hover:text-sky-500 transition">
                    <FaFacebook />
                  </a>

                  <a href="#" className="hover:text-pink-500 transition">
                    <FaInstagram />
                  </a>

                  <a href="#" className="hover:text-sky-400 transition">
                    <FaTwitter />
                  </a>

                  <a href="#" className="hover:text-blue-700 transition">
                    <FaLinkedinIn />
                  </a>

                  <a
                    href="https://wa.me/919304137746"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-green-500 transition"
                  >
                    <FaWhatsapp />
                  </a>
                </div>

                {/* Footer */}

                <div className="mt-10 border-t border-gray-200 pt-6 text-center">
                  <h3 className="font-bold text-slate-800">
                    Mehta Construction Pvt. Ltd.
                  </h3>

                  <p className="text-sm text-gray-500 mt-2">
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
