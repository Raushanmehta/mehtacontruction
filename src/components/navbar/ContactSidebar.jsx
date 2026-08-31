import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";

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

              <h2 className="text-4xl  mb-5">Contact Us</h2>

              <p className="text-gray-500 text-md mb-8">
                Our friendly and knowledgeable staff is waiting to hear from
                you.
              </p>

              <hr className="border-gray-200" />

              <div className="mt-8 space-y-4">
                <div>
                  <h5 className="uppercase text-[12px] text-gray-400 font-semibold">
                    Need Help?
                  </h5>
                </div>

                <div>
                  <p className="uppercase text-[12px] text-gray-400 font-semibold">
                    Email Us Directly
                  </p>

                  <h3 className="text-2xl font-semibold mt-2">
                    mehtacontruction.in
                  </h3>
                </div>

                <div>
                  <p className="uppercase text-[12px] text-gray-400 font-semibold">
                    Call Us Directly
                  </p>

                  <h3 className="text-2xl font-semibold mt-2">
                    +919304137746
                  </h3>
                </div>

                <div>
                  <p className="uppercase text-[12px] text-gray-400 font-semibold mb-4">
                    Social Network
                  </p>

                  <div className="flex gap-5 text-2xl">
                    <FaFacebook />
                    <FaInstagram />
                    <FaTwitter />
                    <FaLinkedinIn />
                    <FaWhatsapp />
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
