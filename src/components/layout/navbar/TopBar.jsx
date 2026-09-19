import { useState } from "react";
import {Headphones,Lock,ChevronDown,ChevronUp,} from "lucide-react";
import { Link } from "react-router-dom";
import SupportPopup from "./SupportPopup";

export default function TopBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSupport = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <section className="relative bg-black py-3">
      <div className="mx-auto flex max-w-[1350px] items-center justify-end gap-4 px-4 sm:px-6 lg:px-6">
        

        <div className="flex min-w-0 items-center justify-end gap-2 text-xs font-semibold uppercase tracking-[0.08em] text-white sm:text-xs">
          <Headphones size={16} className="shrink-0 text-[#0081CD]" />
          <span className="truncate">TOLL FREE +1-844-HI-MEHTA CONTRUCTION</span>

          <button
            type="button"
            onClick={toggleSupport}
            className="ml-1 shrink-0 cursor-pointer transition hover:text-[#0081CD]"
            aria-label="Toggle support info">
            {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>
        </div>
        <div className="flex items-center gap-5 sm:gap-6">
          <Link className="text-xs font-semibold uppercase text-white transition hover:text-[#0081CD]" to="/blog">
            BLOG
          </Link>
          <Link to="/login" className="flex items-center gap-2 text-xs font-semibold uppercase text-white transition hover:text-[#0081CD]">
            <Lock size={16} />
            LOGIN
          </Link>
        </div>
      </div>

      <SupportPopup isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </section>
  );
}