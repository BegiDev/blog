import { Badge } from "@/components/ui/badge";
import { IBlog } from "@/types";
import { CalendarDays, Clock, Dot, Minus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { format } from "date-fns"
import { getReadingTime } from "@/lib/utils";

function BlogsMap(blog: IBlog) {
  return (
    <Link
      href={"/"}
      className="container max-w-full md:max-w-[1000px] mx-auto border-t border-b py-7 grid gap-4 group grid-cols-1 md:grid-cols-2"
    >
      <div className="relative rounded-md">
        <Image
          width={600}
          height={300}
          src={blog.image.url}
          alt={blog.title}
          className="rounded-md bg-fixed opacity-100 transition duration-300 ease-in-out hover:opacity-75 w-full h-full"
        />
      </div>
      <div className="flex flex-col space-y-4">
        <div className="flex items-center gap-4 font-poppins">
          <div className="flex items-center gap-2">
            <CalendarDays className="w-5 h-5" />
            <p>{format(new Date(blog.createdAt), "MMM dd, yyyy")}</p>
          </div>
          <Minus />
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-4" />
            <p>{getReadingTime(blog.content.html)} min o`qidi</p>
          </div>
        </div>

        <h2 className="text-3xl max-md:text-2xl font-poppins font-medium group-hover:opacity-75">
          {blog.title}
        </h2>
        <p className="text-muted-foreground line-clamp-3 font-sourceSans font-normal">{blog.description}</p>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Image 
              src={blog.author.image.url}
              alt="author"
              width={40}
              height={40}
              className="object-cover rounded-sm"
            />
            <p className="font-sourceSans font-medium">By: {blog.author.name}</p>
          </div>
          <Dot />
          <div className="flex items-center gap-2">
            <Badge variant={'secondary'}>{blog.tag.name}</Badge>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default BlogsMap;
