import ModeToggle from "@/components/shared/mode-toggle";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { popularCategories, popularTags } from "@/constant";
import { AlignRight, Search } from "lucide-react";

function GlobalSearch() {
  return (
    <Sheet>
      <SheetTrigger>
        <AlignRight />
      </SheetTrigger>
      <SheetContent className="pt-[42px]">
        <SheetHeader>
          <div className="flex items-center justify-between py-2 gap-2">
            <div className="relative">
              <div className="grid w-full max-w-sm items-center gap-2">
                <Input
                  type="search"
                  className="pl-10 w-full md:w-[250px]"
                  id="search"
                  placeholder="Search"
                />
              </div>
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="w-5 h-5" />
              </div>
            </div>
            <ModeToggle />
          </div>
        </SheetHeader>
        <div className="flex flex-col space-y-2 mt-4">
          <p className="font-poppins text-base md:text-lg">Kategoriya orqali qidirish.</p>
          <div className="flex flex-wrap gap-2">
            {popularCategories.map((item) => (
              <Badge key={item.slug} variant={'secondary'}>{item.name}</Badge>
            ))}
          </div>
        </div>
        <div className="flex flex-col space-y-2 mt-4">
          <p className="font-poppins text-base md:text-lg">Taglar orqali qidirish.</p>
          <div className="flex flex-wrap gap-2">
            {popularTags.map((item) => (
              <Badge key={item.slug} variant={'secondary'}>{item.name}</Badge>
            ))}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}

export default GlobalSearch;
