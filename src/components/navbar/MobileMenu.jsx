import { useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import { navLinks } from "./nav-links";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Menu Button */}
      <button
        onClick={() => setOpen(true)}
        className="lg:hidden p-2"
      >
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
              className="fixed top-0 left-0 w-[85%] max-w-[340px] h-screen bg-white z-50 shadow-xl"
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
              <div className="flex items-center justify-between p-6 border-b">
                <img
                  src="/logo.png"
                  alt="Logo"
                  className="h-10"
                />

                <button onClick={() => setOpen(false)}>
                  <X size={28} />
                </button>
              </div>

              {/* Navigation */}
              <nav className="flex flex-col p-6">

                {navLinks.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: -25 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: index * 0.08,
                    }}
                  >
                    <Link
                      to={item.href}
                      onClick={() => setOpen(false)}
                      className="block py-4 border-b hover:text-blue-600 font-medium"
                    >
                      {item.title}
                    </Link>
                  </motion.div>
                ))}

                <Link
                  to="/contact"
                  onClick={() => setOpen(false)}
                  className="mt-8 flex items-center justify-center gap-2 rounded-full bg-blue-600 text-white py-3"
                >
                  Contact Us
                  <ArrowRight size={18} />
                </Link>

              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}