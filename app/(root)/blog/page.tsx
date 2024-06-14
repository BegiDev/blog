import BlogsMap from "../blogsMap/blogs-map";
import { getBlogs } from "@/service/blog.service";
  
async function BlogsPage() {
  const blogs = await getBlogs()

  return (
    <div className="flex flex-col space-y-8 md:space-y-16 mt-24">
      {blogs.map((blog) => (
        <BlogsMap key={blog.title} {...blog} />
      ))}
    </div>
  );
}

export default BlogsPage;
