
import { NavigationMenu } from "@/components/ui/navigation-menu";
import { navLinks } from "./nav-links";
import { Link } from "react-router-dom";

export default function NavMenu() {
  return (
    <NavigationMenu>

      <ul className="flex gap-10">

        {navLinks.map((item) => (
          <li key={item.title}>
            <Link
              href={item.href}
              className="uppercase tracking-wide text-[15px] font-medium hover:text-sky-600 transition"
            >
              {item.title}
            </Link>
          </li>
        ))}

      </ul>

    </NavigationMenu>
  );
}