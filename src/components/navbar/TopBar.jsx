import { useState } from "react";
import {
  Headphones,
  Lock,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { Link } from "react-router-dom";
import SupportPopup from "./SupportPopup";

export default function TopBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSupport = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <div className=" hidden lg:flex h-10 border-b border-gray-200 flex items-center justify-end gap-8 px-8 lg:px-32 text-gray-600 text-sm ">

        {/* Toll Free */}
        <div className="flex items-center gap-2 text-[14px] font-semibold">
          <Headphones size={16} />
          <span>TOLL FREE +1-844-HI-MEHTA CONTRUCTION</span>

          {/* Only Chevron Clickable */}
          <button
            onClick={toggleSupport}
            className="cursor-pointer hover:text-sky-600 transition"
          >
            {isOpen ? (
              <ChevronUp size={16} />
            ) : (
              <ChevronDown size={16} />
            )}
          </button>
        </div>

        <Link className="text-[14px] font-semibold" to="/contact">CONTACTS</Link>

        <Link className="text-[14px] font-semibold" to="/blog">BLOG</Link>

        <Link to="/login" className="flex items-center gap-2 text-[14px] font-semibold">
          <Lock size={16} />
          LOGIN
        </Link>
      </div>

      <SupportPopup
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </>
  );
}