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
      <header className="sticky top-0 z-40 bg-white shadow-sm h-16 sm:h-20">
        <div className="mx-auto flex h-full w-full max-w-[1400px] items-center justify-between gap-3 px-3 sm:px-4 lg:px-8 xl:px-12">
          <Logo />

          <div className="hidden lg:block">
            <NavMenu />
          </div>

          <div className="hidden items-center gap-3 lg:flex lg:gap-8">
            <HireButton />

            <Grip size={28}
              className="cursor-pointer text-black"
              onMouseEnter={() => setOpen(true)}
            />
          </div>

          <div className="flex items-center lg:hidden">
            <MobileMenu />
          </div>
        </div>
      </header>

      <ContactSidebar open={open} onClose={() => setOpen(false)} />
    </>
  );
}
