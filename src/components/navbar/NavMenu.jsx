import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

import { navLinks } from "./nav-links";

export default function NavMenu() {
  return (
    <NavigationMenu className="relative z-50 ">
      <NavigationMenuList className="gap-8">

        {navLinks.map((item) => (
          <NavigationMenuItem key={item.title} className="relative">

            {item.megaMenu ? (
              <>
                <NavigationMenuTrigger
                  className="
                    bg-white
                    uppercase
                    text-[15px]
                    font-medium
                    hover:text-sky-600
                    data-[state=open]:text-sky-600
                    
                  "
                >
                  {item.title}
                </NavigationMenuTrigger>

                <NavigationMenuContent
                  className="
                    bg-white
                    ittems-center
                    justify-center
                    p-4
                    
                  "
                >
                  <div className="grid grid-cols-3 gap-6">

                    {item.items.map((subItem) => (
                      <NavigationMenuLink
                        asChild
                        key={subItem.title}
                      >
                        <Link
                          to={subItem.href}
                          className="
                            group
                            
                            p-5
                            transition-all
                            duration-300
                            hover:bg-slate-50
                          "
                        >
                          <h3
                            className="
                              text-base
                              font-semibold
                              transition-colors
                              group-hover:text-sky-600
                            "
                          >
                            {subItem.title}
                          </h3>

                          <p
                            className="
                              mt-2
                              text-sm
                              leading-6
                              text-slate-500
                            "
                          >
                            {subItem.description}
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    ))}

                  </div>
                </NavigationMenuContent>
              </>
            ) : (
              <NavigationMenuLink asChild>
                <Link
                  to={item.href}
                  className="
                    uppercase
                    text-[15px]
                    font-medium
                    transition-colors
                    hover:text-sky-600
                  "
                >
                  {item.title}
                </Link>
              </NavigationMenuLink>
            )}

          </NavigationMenuItem>
        ))}

      </NavigationMenuList>
    </NavigationMenu>
  );
}