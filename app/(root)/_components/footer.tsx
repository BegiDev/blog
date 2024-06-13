import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { navLinks } from "@/constant";
import Link from "next/link";

function Footer() {
  return (
    <footer className="flex pt-10 flex-col container max-w-2xl">
      <ul className="flex justify-center text-center font-poppins gap-1 md:gap-4">
        {navLinks.map((item) => (
          <Link href={item.route} key={item.route} className="hover:bg-blue-300/20 px-[4px] py-[4px] md:px-1 cursor-pointer rounded-sm transition-colors font-medium text-[15px] md:text-base">
            {item.name}
          </Link>
        ))}
      </ul>

      <div className="flex justify-center items-center pt-2 ">
        <div className="flex w-full max-w-sm items-center space-x-2">
          <Input type="email" placeholder="Emailni kiriting" />
          <Button type="submit" variant={"destructive"}>
            Jonatish
          </Button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
