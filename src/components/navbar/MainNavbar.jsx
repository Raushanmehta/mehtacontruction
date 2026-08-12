import { useState } from "react";
import { Grip } from "lucide-react";
import Logo from "./Logo";
import NavMenu from "./NavMenu";
import HireButton from "./ContactButton";
import MobileMenu from "./MobileMenu";
import ContactSidebar from "./ContactSidebar";

export default function MainNavbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 bg-white shadow-sm h-20 flex items-center  lg:px-28">
        <div className="max-w-7xl mx-auto w-full px-4 flex items-center justify-between">
          <Logo />

          <div className="hidden lg:block">
            <NavMenu />
            
          </div>

          <div className="hidden lg:flex items-center gap-8">
            <HireButton />

            <Grip
              className="cursor-pointer"
              onMouseEnter={() => setOpen(true)}
            />
          </div>

          <div className="lg:hidden">
            <MobileMenu />
          </div>
        </div>
      </header>

      <ContactSidebar open={open} onClose={() => setOpen(false)} />
    </>
  );
}
