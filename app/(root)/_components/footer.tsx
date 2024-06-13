import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

function Footer() {
  return (
    <footer
      className="flex flex-col container max-w-6xl border-t mt-8"
    >
      <div className="flex justify-center items-center pt-6">
        <div className="flex w-full max-w-sm items-center space-x-2">
          <Input type="email" placeholder="Emailni kiriting" />
          <Button type="submit" variant={"destructive"}>
            Jonatish
          </Button>
        </div>
      </div>
      <p className="text-center pt-2 font-base font-normal font-poppins">
        © 2024 begzod.com
      </p>
    </footer>
  );
}

export default Footer;
