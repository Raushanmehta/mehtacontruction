import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const topLogos = [
  "https://www.webnx.in/wp-content/uploads/2024/03/iso-27001-1.png",
  "https://www.webnx.in/wp-content/uploads/2024/03/ISO-9001.png",
  "https://www.webnx.in/wp-content/uploads/2024/03/D-U-N-S.png",
  "https://www.webnx.in/wp-content/uploads/2024/03/MSME.png",
  "https://www.webnx.in/wp-content/uploads/2024/03/DGFT.png",
  "https://www.webnx.in/wp-content/uploads/2024/03/DPIIT-Startup-1.png",
];

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
    <footer className="bg-black text-gray-400 md:px-36 py-6 px-6">
      <div className="w-full">

        {/* ================= TOP SECTION ================= */}
        <div className="min-h-[72px] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 py-5 sm:py-0 border-b border-gray-800">

          {/* LOGO */}
          <Link to="/" className="flex items-center">
            <div className="text-white text-4xl sm:text-5xl font-black italic tracking-[-3px]">
              Mehta <br /> Construction
              <span className="inline-block ml-1 text-2xl sm:text-3xl not-italic">
                △
              </span>
            </div>
          </Link>

          {/* PHONE */}
          <div className="mr-0 sm:mr-[5%] lg:mr-[10%]">
            <p className="text-[14px] uppercase tracking-[2px] text-gray-500">
              Call
            </p>

            <a
              href="tel:+911244396000"
              className="text-[16px] tracking-[2px] text-gray-400 hover:text-white transition"
            >
              +91 124 4396 000
            </a>
          </div>
        </div>

        {/* ================= MAIN LINKS ================= */}
        <div className="relative py-6 sm:py-7">

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16 pr-0 lg:pr-[180px]">

            {/* COMPANY */}
            <div>
              <FooterHeading title="Company" />

              <FooterLink to="/about">
                Who We Are
              </FooterLink>

              <FooterLink to="/chairman-message">
                Chairman's Message
              </FooterLink>

              <FooterLink to="/leadership">
                Leadership
              </FooterLink>

              <FooterLink to="/sustainability">
                Sustainability
              </FooterLink>

              <FooterLink to="/foundation">
                Mehta Foundation
              </FooterLink>
            </div>

            {/* MEHTA CONSTRUCTION */}
            <div>
              <FooterHeading title="Mehta Construction" />

              <FooterLink to="/homes">
                Homes
              </FooterLink>

              <FooterLink to="/about-us">
                About Us
              </FooterLink>

              <FooterLink to="/services">
                Services
              </FooterLink>

              <FooterLink to="/projects">
                Projects
              </FooterLink>

              <FooterLink to="/our-team">
                Our Team
              </FooterLink>

              <FooterLink to="/careers">
                Careers
              </FooterLink>
            </div>

            {/* USEFUL LINKS */}
            <div>
              <FooterHeading title="Useful Links" />

              <FooterLink to="/latest-news">
                Latest News
              </FooterLink>

              <FooterLink to="/blogs">
                Blogs
              </FooterLink>

              <FooterLink to="/faqs">
                FAQs
              </FooterLink>

              <FooterLink to="/testimonials">
                Testimonials
              </FooterLink>

              <FooterLink to="/case-studies">
                Case Studies
              </FooterLink>
            </div>

            {/* SAFETY & QUALITY */}
            <div>
              <FooterHeading title="Safety & Quality" />

              <FooterLink to="/safety">
                Safety Standards
              </FooterLink>

              <FooterLink to="/quality-control">
                Quality Control
              </FooterLink>

              <FooterLink to="/quality-assurance">
                Quality Assurance
              </FooterLink>

              <FooterLink to="/site-safety">
                Site Safety
              </FooterLink>

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

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="
            grid
            grid-cols-3
            sm:grid-cols-6
            lg:grid-cols-6
            border-t
            border-b
            border-gray-700
            gap-10
            items-center
            justify-items-center
          "
        >
          {topLogos.map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt="Certification"
              className="h-20 sm:h-24 object-contain opacity-70 hover:opacity-100 transition"
            />
          ))}
        </motion.div>

        {/* ================= LEGAL LINKS ================= */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
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
            <FooterLink
              key={item}
              to="#"
              className="inline-block"
            >
              {item}
            </FooterLink>
          ))}
        </motion.div>

        {/* ================= TERMS ================= */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center py-3 text-[16px] border-b border-gray-700"
        >
          By exploring this site, you acknowledge and agree to be bound by these{" "}
          <FooterLink
            to="/terms"
            className="inline underline"
          >
            Universal Terms of Service
          </FooterLink>
          .
        </motion.div>

        {/* ================= BOTTOM LINKS ================= */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
          className="
            flex
            flex-wrap
            justify-center
            gap-10
            py-3
            text-[16px]
          "
        >
          <FooterLink
            to="/privacy-policy"
            className="inline-block"
          >
            Privacy Policy
          </FooterLink>

          <FooterLink
            to="/refund-cancellation-policy"
            className="inline-block"
          >
            Refund and Cancellation Policy
          </FooterLink>

          <FooterLink
            to="/hiring-terms"
            className="inline-block"
          >
            Hiring Terms
          </FooterLink>
        </motion.div>

        {/* ================= COPYRIGHT ================= */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          viewport={{ once: true }}
          className="text-center text-[16px] text-gray-500 leading-7"
        >
          <p>
            Copyright © 2026 Mehta Construction. All Rights Reserved.
          </p>

          <p>
            CIN: UXXXXXXXXXXXXXXX | D-U-N-S®: XXXXXXXXX
          </p>

          <p>
            MSME: UDYAM-XX-XX-XXXXXXX | GSTIN: XXXXXXXXXXXXXXX
          </p>
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