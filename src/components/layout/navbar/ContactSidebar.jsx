import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedArrowIcon from "@/components/icons/AnimatedArrowIcon";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";

const socialLinks = [
  { name: "Facebook", href: "https://facebook.com/yourpage", icon: FaFacebook },
  { name: "Instagram", href: "https://instagram.com/yourpage", icon: FaInstagram },
  { name: "Twitter", href: "https://twitter.com/yourpage", icon: FaTwitter },
  { name: "LinkedIn", href: "https://linkedin.com/company/yourpage", icon: FaLinkedinIn },
  { name: "WhatsApp", href: "https://wa.me/919304137746", icon: FaWhatsapp },
];

export default function ContactSidebar({ open, onClose }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = `${formData.get("firstName")} ${formData.get("lastName")}`;
    const body = [
      `Name: ${name}`,
      `Email: ${formData.get("email")}`,
      `Phone: ${formData.get("phone")}`,
      "",
      `Message: ${formData.get("message")}`,
    ].join("\n");
    const params = new URLSearchParams({ subject: "Project inquiry", body });

    window.location.href = `mailto:info@mehtaconstruction.in?${params.toString()}`;
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            className="fixed inset-0 z-40 bg-black/50  backdrop-blur-xs"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          <motion.aside
            className="fixed right-0 top-0 z-50 h-dvh w-[min(100vw,450px)] overflow-y-auto bg-black text-white shadow-2xl"
            
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 100, damping: 18 }}
            aria-label="Contact Mehta Construction"
          >
            <Button
              type="button"
              onClick={onClose}
              variant="ghost"
              size="icon-lg"
              className="absolute right-5 top-5 z-10 rounded-full text-white hover:bg-white/10 hover:text-[#FF6118]"
              aria-label="Close contact sidebar"
            >
              <X size={24} />
            </Button>

            <div className="flex min-h-full flex-col px-7 pb-7 pt-8 sm:px-9 sm:pb-9 sm:pt-10 text-center item-center justify-center ">
              <img
                src="/image/mehta-contruction-logo-white.png"
                className="h-12 w-auto self-center object-contain"
                alt="Mehta Construction"
              />

              <h2 className="mt-6 text-xl uppercase font-semibold text-center item-center leading-tight text-white">
               Contact Us
              </h2>
              <p className="mt-2 text-sm leading-6 text-white/60">
                Tell us a little about what you have in mind.
              </p>

              <form onSubmit={handleSubmit} className="mt-7 space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="sr-only" htmlFor="contact-first-name">First name</label>
                    <input
                      id="contact-first-name"
                      name="firstName"
                      autoComplete="given-name"
                      placeholder="First name"
                      required
                      className="h-10 w-full rounded-lg border border-white/20 bg-white/[0.06] px-2 text-sm text-white outline-none transition-colors placeholder:text-white/45 focus:border-[#FF6118]"
                    />
                  </div>
                  <div>
                    <label className="sr-only" htmlFor="contact-last-name">Last name</label>
                    <input
                      id="contact-last-name"
                      name="lastName"
                      autoComplete="family-name"
                      placeholder="Last name"
                      required
                      className="h-10 w-full rounded-lg border border-white/20 bg-white/[0.06] px-2 text-sm text-white outline-none transition-colors placeholder:text-white/45 focus:border-[#FF6118]"
                    />
                  </div>
                </div>

                <div>
                  <label className="sr-only" htmlFor="contact-email">Email</label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="Email address"
                    required
                    className="h-10 w-full rounded-lg border border-white/20 bg-white/[0.06] px-2 text-sm text-white outline-none transition-colors placeholder:text-white/45 focus:border-[#FF6118]"
                  />
                </div>

                <div>
                  <label className="sr-only" htmlFor="contact-phone">Phone</label>
                  <input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    placeholder="Phone number"
                    required
                    className="h-10 w-full rounded-lg border border-white/20 bg-white/[0.06] px-2 text-sm text-white outline-none transition-colors placeholder:text-white/45 focus:border-[#FF6118]"
                  />
                </div>

                <div>
                  <label className="sr-only" htmlFor="contact-message">Message</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    placeholder="Tell us about your project"
                    required
                    className="w-full h-20 rounded-lg border border-white/20 bg-white/[0.06] px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-white/45 focus:border-[#FF6118]"
                  />
                </div>

                <Button
                  type="submit"
                  className="h-10 w-full rounded-lg bg-[#FF6118] text-sm font-semibold text-black transition-colors hover:bg-white"
                >
                  <span>Submit</span>
                  <AnimatedArrowIcon />
                </Button>
              </form>

              <div className="mt-auto border-t border-white/15 pt-6">
                <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-white/50">
                  Follow us
                </p>
                <div className="flex items-center gap-5 text-xl text-white/75 items-center justify-center">
                  {socialLinks.map(({ name, href, icon: Icon }) => (
                    <a
                      key={name}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={name}
                      className="transition-colors hover:text-[#FF6118]"
                    >
                      <Icon />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
