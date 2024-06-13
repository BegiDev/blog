import Image from "next/image";
import Avatar from "../../../public/avatar.jpg";
import Link from "next/link";
import { Github, Instagram, Linkedin, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";

function HomePage() {
  return (
    <div className="max-w-full md:max-w-[1000px] mx-auto px-4">
      <div className="flex flex-col md:flex-row items-center gap-7 mt-[126px] md:mt-[190px]">
        <div className="w-[125px] h-[125px] md:w-36 md:h-36 relative">
          <Image
            src={Avatar}
            alt="Avatar"
            layout="fill"
            className="rounded-full"
          />
        </div>
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-[rgba(0, 0, 0, .85)] tracking-wide mt-[-20px] md:mt-0">
            Begzod Abduhamidov
          </h1>
          <p className="text-xl py-3 md:py-3 md:text-3xl opacity-50">Front-end developer</p>
          <div className="flex justify-center md:justify-start gap-3">
            <Link href={"https://www.instagram.com/begi.dev/"}>
              <Instagram />
            </Link>
            <Link href={"https://github.com/BegiDev/"}>
              <Github />
            </Link>
            <Link href={"https://youtube.com"}>
              <Youtube />
            </Link>
            <Link href={"https://www.linkedin.com/"}>
              <Linkedin />
            </Link>
          </div>
        </div>
      </div>
      <div className="mt-7 md:mt-4 flex justify-center md:justify-start">
        <Button variant="destructive">Po`stlarni o`qish</Button>
        <Button className="ml-3" variant={"outline"}>
          Men haqimda.
        </Button>
      </div>
    </div>
  );
}

export default HomePage;
