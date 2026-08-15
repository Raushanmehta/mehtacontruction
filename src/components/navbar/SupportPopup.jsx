import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

export default function SupportPopup({ isOpen, onClose }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[9999] bg-white overflow-y-auto"
          initial={{ y: "-100%" }}
          animate={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1], // smooth easing
          }}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-8 right-8 p-2 rounded-full hover:bg-gray-100"
          >
            <X size={28} />
          </button>

          <div className="max-w-6xl mx-auto h-screen flex items-center px-10">
            <div className="grid grid-cols-2 gap-24 w-full">
              {/* Left */}
              <div>
                <h1 className="text-6xl font-semibold mb-10">
                  Our Service & Support
                </h1>

                <h2 className="text-2xl font-semibold mb-4">
                  General Enquiries
                </h2>

                <p className="text-gray-500 mb-8">
                  We're here to answer any questions you may have.
                </p>

                <div className="space-y-5 text-lg font-semibold">
                  <p>INDIA: +91-9304137746</p>
                  <p>Email: mehtacontruction@gmail.com</p>
                  <p>Address:Patna city, Bihar 800008 </p>


                </div>
              </div>

              {/* Right */}
              <div>
                <h2 className="text-2xl font-semibold mb-4">
                  WhatsApp Chat Support
                </h2>

                <p className="text-gray-500 mb-8">
                  Chat with our sales & support team for quick answers on
                  product features, pricing and more.
                </p>

                <p className="font-semibold text-lg mb-8">
                  WhatsApp at +91 9304137746
                </p>

                <a
                  href="https://wa.me/919304137746"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="https://www.webnx.in/wp-content/uploads/2022/03/whatsapp-min-1.png"
                    alt="Whatsapp"
                    className="w-40"
                  />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}