'use client'

import { navLinks } from "@/constant";
import Link from "next/link";
import GlobalSearch from "./global-search";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const pathName = usePathname()

  return (
    <div className="h-[10vh] backdrop-blur-sm fixed z-40 inset-0 bg-background font-poppins">
      <div className="container max-w-6xl mx-auto border-b h-[10vh] w-full flex items-center justify-between">
        <Link href={"/"}>
          <h1 className="text-2xl font-bold md:text-3xl">BegiDev</h1>
        </Link>
        <div className="flex items-center md:gap-8">
          <div className="hidden md:flex pr-4 text-[14.5px] md:text-base gap-1">
            {navLinks.map((nav) => (
              <Link
                key={nav.route}
                href={nav.route}
                className={cn(
                  `hover:bg-blue-300/20 py-1 px-[4px] md:px-3 cursor-pointer rounded-sm transition-colors font-medium`,
                  pathName === nav.route && "bg-blue-300/20"
                )}
              >
                {nav.name}
              </Link>
            ))}
          </div>
          <div className="flex items-center">
            <GlobalSearch />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
