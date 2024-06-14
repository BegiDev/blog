import { Button } from "@/components/ui/button";
import {
  CalendarDays,
  Clock,
  Facebook,
  Link2,
  Linkedin,
  Minus,
  Send,
  Twitter,
} from "lucide-react";
import Image from "next/image";
import parse from "html-react-parser";
import { content } from "@/constant";

function SlugPage({ params }: { params: { slug: string } }) {
  return (
    <div className="pt-[15vh] max-w-5xl mx-auto container">
      <h1 className="text-3xl md:text-4xl  font-poppins font-medium">
        10 examples of social media posts to get inspired
      </h1>

      <div className="flex items-center flex-wrap max-md:justify-center gap-4 mt-4">
        <div className="flex items-center gap-2">
          <Image
            src={"/avatar.jpg"}
            alt="author"
            width={30}
            height={30}
            className="object-cover rounded-sm"
          />
          <p>By Begzod</p>
        </div>
        <Minus />
        <div className="flex items-center gap-2">
          <Clock className="w-5 h-5" />
          <p>01 min read</p>
        </div>
        <Minus />
        <div className="flex items-center gap-2">
          <CalendarDays className="w-5 h-5" />
          <p>Apr 5, 2025</p>
        </div>
      </div>

      <Image
        src={"/dynamicImg.svg"}
        alt="author"
        width={"1000"}
        height={"100"}
        className="mt-4 rounded-md"
      />

      <div className="flex md:gap-12 max-md:flex-col-reverse mt-12 relative">
        <div className="flex flex-col space-y-3">
          <div className="sticky top-36">
            <p className="text-lg uppercase text-muted-foreground font-poppins">
              Ulashish
            </p>
            <div className="flex flex-col max-md:flex-row md:space-y-3 max-md:space-x-3 mt-4">
              <Button size={"icon"} variant={"outline"}>
                <Twitter />
              </Button>
              <Button size={"icon"} variant={"outline"}>
                <Facebook />
              </Button>
              <Button size={"icon"} variant={"outline"}>
                <Linkedin />
              </Button>
              <Button size={"icon"} variant={"outline"}>
                <Send />
              </Button>
              <Button size={"icon"} variant={"outline"}>
                <Link2 />
              </Button>
            </div>
          </div>
        </div>
        <div className="flex-1 prose dark:prose-invert ">{parse(content)}</div>
      </div>
      <div className="flex mt-6 gap-6 max-md:flex-col">
        <Image
          src={"/avatar.jpg"}
          alt="author"
          width="130"
          height="130"
          className="rounded-md max-md:self-start"
        />
        <div className="flex-1 flex flex-col space-y-2">
          <h2 className="text-3xl font-poppins">Begzod Abduhamidov </h2>
          <p className="line-clamp-2 text-muted-foreground">
            Mening ismin Begzod Front-end dasturchiman, yoshim ?da. Jizzax
            shahrida tavallud topganman. ITga 2022-yil kuzda kirib kelganman va
            shu kungacha ITni self-study o`rganib kelmoqdaman.
          </p>
        </div>
      </div>
    </div>
  );
}

export default SlugPage;
