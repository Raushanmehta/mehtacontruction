import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";

const socialLinks = [
  {
    name: "Facebook",
    href: "https://facebook.com/yourpage",
    icon: FaFacebook,
  },
  {
    name: "Instagram",
    href: "https://instagram.com/yourpage",
    icon: FaInstagram,
  },
  {
    name: "Twitter",
    href: "https://twitter.com/yourpage",
    icon: FaTwitter,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/company/yourpage",
    icon: FaLinkedinIn,
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/919304137746",
    icon: FaWhatsapp,
  },
];

export default function ContactSidebar({ open, onClose }) {
  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Background Overlay */}
          <motion.div
            className="fixed inset-0 bg-black/30 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Sidebar */}
          <motion.div
            className="fixed top-0 right-0 h-screen w-[430px] bg-white z-50 shadow-2xl"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 18,
            }}
            onMouseEnter={() => onOpen?.()} // optional
            onMouseLeave={onClose}
          >
            <button onClick={onClose} className="absolute top-6 right-6">
              <X size={28} />
            </button>

            <div className="p-12">
              <img
                src="image/mehta-contruction-logo-blue.png"
                className="h-16 "
                alt=""
              />

              <h2 className="text-4xl py-4 text-gray-800 hover:text-[#42E442]"><a href="/contact">Contact Us</a></h2>

              <p className="text-gray-500 text-sm mb-8 text-gray-800">
                Our friendly and knowledgeable staff is waiting to hear from
                you.
              </p>

              <hr className="border-gray-200" />

              <div className="mt-4 space-y-4">
                <div>
                  <h5 className="uppercase text-[12px] text-gray-400 font-semibold">
                    Need Help?
                  </h5>
                </div>

                <div>
                  <p className="uppercase text-[12px] text-gray-400 font-semibold">
                    Email Us Directly
                  </p>

                  <h3 className="text-2xl font-semibold mt-2 text-gray-800">
                    <a
                      href="mailto:info@mehtaconstruction.in"
                      className="transition-colors hover:text-[#42E442]"
                    >
                      info@mehtacontructuion.in
                    </a>
                  </h3>
                </div>

                <div>
                  <p className="uppercase text-[12px] text-gray-400 font-semibold">
                    Call Us Directly
                  </p>

                  <h3 className="text-2xl font-semibold mt-2 text-gray-800">
                    <a
                      href="tel:+919304137746"
                      className="transition-colors hover:text-[#42E442]"
                    >
                      +91 9304137746
                    </a>
                  </h3>
                </div>

                <div>
                  <p className="uppercase text-[12px] text-gray-400 font-semibold mb-4">
                    Social Network
                  </p>

                  <div className="flex items-center gap-5 text-2xl text-gray-800">
                    {socialLinks.map(({ name, href, icon: Icon }) => (
                      <a
                        key={name}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={name}
                        className="transition-all duration-200 hover:-translate-y-1 hover:text-[#42E442]"
                      >
                        <Icon />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
