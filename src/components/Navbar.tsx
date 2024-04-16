"use client";

import { LuHeartPulse, LuSun } from "react-icons/lu";
import { Button } from "./ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "@/context/theme";

function Navbar() {
  const pathname = usePathname();
  const toggleTheme = useTheme((states) => states.toggleTheme);

  const links = [
    { link: "/", label: "Home" },
    { link: "/exames", label: "Exames" },
  ];

  return (
    <div className="bg-white dark:bg-slate-950 w-full  px-8 py-2 border-b flex  justify-between items-center fixed left-0 top-0 z-30">
      <div className="flex gap-4 ">
        <Link href="/">
          <div className="sm:w-6 md:w-8">
            <LuHeartPulse />
          </div>
        </Link>

        <nav className="border-l pl-4">
          <ul className="flex gap-4 md:text-sm">
            {links.map((link) => (
              <Link
                key={link.link}
                href={link.link}
                className={`transition-colors hover:text-foreground/80 text-foreground${
                  pathname != link.link ? "/75" : ""
                }`}
              >
                <li>{link.label}</li>
              </Link>
            ))}
          </ul>
        </nav>
      </div>

      <div className="flex sm: gap-2 md:gap-4 ">
        <Button variant={"outline"} onClick={toggleTheme}>
          <LuSun />
        </Button>
        <Button variant={"outline"}>User name</Button>
      </div>
    </div>
  );
}

export default Navbar;
