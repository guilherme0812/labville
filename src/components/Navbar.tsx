import { LuHeartPulse, LuSun } from "react-icons/lu";
import { Button } from "./ui/button";
import Link from "next/link";

function Navbar() {
  return (
    <div className="bg-white w-full dark:text-slate-950 px-8 py-2 border-b flex  justify-between items-center fixed left-0 top-0 z-20">
      <div className="flex gap-4 ">
        <Link href="/">
          <div className="sm:w-6 md:w-8">
            <LuHeartPulse />
          </div>
        </Link>

        <nav className="border-l pl-4">
          <ul className="flex gap-4 md:text-sm">
            <Link href="/">
              <li>Home</li>
            </Link>
            <Link href="/exames">
              <li>Exames</li>
            </Link>
          </ul>
        </nav>
      </div>

      <div className="flex sm: gap-2 md:gap-4 ">
        <Button variant={"outline"} className="bg-white">
          <LuSun />
        </Button>
        <Button variant={"outline"} className="bg-white">
          User name
        </Button>
      </div>
    </div>
  );
}

export default Navbar;
