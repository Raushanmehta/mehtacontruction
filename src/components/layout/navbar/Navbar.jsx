import { useEffect, useState } from "react";
import MainNavbar from "./MainNavbar";
import TopBar from "./TopBar";

export default function Navbar() {
  const [topbarVisible, setTopbarVisible] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const isScrollingDown = currentScrollY > lastScrollY;

      if (isScrollingDown && currentScrollY > 20) {
        setTopbarVisible(false);
      } else {
        setTopbarVisible(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-full bg-white sticky top-0 z-50">
  
      <MainNavbar />
    </div>
  );
}