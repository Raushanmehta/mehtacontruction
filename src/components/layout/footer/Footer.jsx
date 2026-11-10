import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const footerLinks = [
  "Privacy Policy",
  "Case Studies",
  "Terms & Conditions",
  "Cookie Policy",
  "Disclaimer",
  "Quality Control",
  "Quality Assurance",
  "Site Safety",
];

export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-6 px-4 sm:px-4 lg:px-8 xl:px-12">
      <div className="mx-auto w-full max-w-[1300px]">
        {/* ================= TOP SECTION ================= */}
        <div className="min-h-[72px] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 py-5 sm:py-0 border-b border-gray-800">
          {/* LOGO */}
          <Link href="/" className="flex items-center">
            <img
              src="/image/mehta-contruction-logo-white.png"
              alt="Mehta Construction"
              className="h-16 w-auto"
            />
          </Link>

          {/* PHONE */}
          <div className="mr-0 sm:mr-[5%] lg:mr-[10%]">
            <p className="text-[14px] uppercase tracking-[2px] text-gray-500">
              Call
            </p>

              <Button
                render={<a href="tel:+911244396000" />}
                variant="cta"
                size="lg"
                className="h-auto rounded-full px-4 py-2 text-[16px] tracking-[2px]"
            >
              +91 124 4396 000
              </Button>
          </div>
        </div>

        {/* ================= MAIN LINKS ================= */}
        <div className="relative py-6 sm:py-7">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16 pr-0 lg:pr-[180px]">
            {/* COMPANY */}
            <div>
              <FooterHeading title="Company" />

              <FooterLink to="/about">Who We Are</FooterLink>

              <FooterLink to="/chairman-message">Chairman's Message</FooterLink>

              <FooterLink to="/leadership">Leadership</FooterLink>

              <FooterLink to="/sustainability">Sustainability</FooterLink>

              <FooterLink to="/foundation">Mehta Foundation</FooterLink>
            </div>

            {/* MEHTA CONSTRUCTION */}
            <div>
              <FooterHeading title="Mehta Construction" />

              <FooterLink to="/homes">Homes</FooterLink>

              <FooterLink to="/about-us">About Us</FooterLink>

              <FooterLink to="/services">Services</FooterLink>

              <FooterLink to="/projects">Projects</FooterLink>

              <FooterLink to="/our-team">Our Team</FooterLink>

              <FooterLink to="/careers">Careers</FooterLink>
            </div>

            {/* USEFUL LINKS */}
            <div>
              <FooterHeading title="Useful Links" />

              <FooterLink to="/latest-news">Latest News</FooterLink>

              <FooterLink to="/blogs">Blogs</FooterLink>

              <FooterLink to="/faqs">FAQs</FooterLink>

              <FooterLink to="/testimonials">Testimonials</FooterLink>

              <FooterLink to="/case-studies">Case Studies</FooterLink>
            </div>

            {/* SAFETY & QUALITY */}
            <div>
              <FooterHeading title="Safety & Quality" />

              <FooterLink to="/safety">Safety Standards</FooterLink>

              <FooterLink to="/quality-control">Quality Control</FooterLink>

              <FooterLink to="/quality-assurance">Quality Assurance</FooterLink>

              <FooterLink to="/site-safety">Site Safety</FooterLink>

              <FooterLink to="/environment">
                Environmental Responsibility
              </FooterLink>
            </div>
          </div>

          {/* BUILDING IMAGE */}
          <div className="hidden lg:block absolute right-0 xl:right-[3%] bottom-0 w-[120px] xl:w-[150px] h-[240px] xl:h-[270px] pointer-events-none">
            <img
              src="https://www.dlf.in/images/dlf-ship-building.png"
              alt="Mehta Construction"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>

      {/* ================= CERTIFICATION LOGOS ================= */}
      <div className="">
        

        {/* ================= LEGAL LINKS ================= */}
        <motion.div
          className="
            flex
            flex-wrap
            justify-center
            gap-x-6
            text-[16px]
            gap-y-2
            py-3
            border-b
            border-gray-700
          "
        >
          {footerLinks.map((item) => (
            <FooterLink key={item} to="#" className="inline-block">
              {item}
            </FooterLink>
          ))}
        </motion.div>

        {/* ================= TERMS ================= */}
        <motion.div className="text-center py-3 text-[16px] border-b border-gray-700">
          By exploring this site, you acknowledge and agree to be bound by these{" "}
          <FooterLink to="/terms" className="inline underline">
            Universal Terms of Service
          </FooterLink>
          .
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 0.85, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative flex w-full select-none justify-center overflow-hidden pt-4 pb-2"
        >
          <svg
            viewBox="0 0 1200 240"
            className="pointer-events-none h-auto max-h-[190px] w-full select-none "
            preserveAspectRatio="xMidYMid meet"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="footer-watermark-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#FF911F" />
                <stop offset="100%" stopColor="#FF5B16" />
              </linearGradient>
              <filter id="footer-watermark-glow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="5" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            <text
              x="50%"
              y="78%"
              textAnchor="middle"
              fill="transparent"
              stroke="url(#footer-watermark-gradient)"
              strokeOpacity="0.9"
              strokeWidth="2.2"
              className="font-black tracking-[0.08em] text-[230px] font-sans"
            >
              MEHTA
            </text>
          </svg>
        </motion.div>
      </div>
    </footer>
  );
}

/* =========================================================
   FOOTER HEADING
========================================================= */

function FooterHeading({ title }) {
  return (
    <div className="mb-4">
      <h3 className="text-[14px] uppercase tracking-[2px] text-gray-500">
        {title}
      </h3>

      <div className="mt-2 w-6 h-[4px] bg-gray-700" />
    </div>
  );
}

/* =========================================================
   FOOTER LINK
========================================================= */

function FooterLink({ to, children, className = "" }) {
  return (
    <Link
      to={to}
      className={`
        block
        w-fit
        text-[14px]
        tracking-[1px]
        leading-6
        text-gray-400
        hover:text-white
        transition-colors
        ${className}
      `}
    >
      {children}
    </Link>
  );
}
