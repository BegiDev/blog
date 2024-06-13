import Image from "next/image";
import Avatar from "../../../public/avatar.jpg";
import Link from "next/link";
import { Github, Instagram, Linkedin, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";

function HomePage() {
  return (
    <div className="md:max-w-[1000px] md:m-[auto] mt-[160px] md:mt-48">
      <div className="flex items-center container gap-7">
        <Image src={Avatar} alt="Avatar" className="hidden md:block md:rounded-full md:h-36 md:w-36" />
        <div className="leading-10 font-sourceSans">
          <h1 className="text-[42px] font-bold leading-10	 text-[rgba(0, 0, 0, .85)] tracking-wide">
            Begzod Abduhamidov
          </h1>
          <p className="text-3xl py-4 opacity-50">Front-end developer</p>
          <div className="flex gap-3">
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
      <div className="mt-7 ml-8">
        <Button variant="destructive">Po`stlarni o`qish</Button>
        <Button className="ml-3" variant={'outline'}>Men haqimda.</Button>
      </div>
    </div>
  );
}

export default HomePage;
