import Link from "next/link";
import { blogs } from "../util/data";
import { BlogCard } from "../components/BlogCard";

export default function Home({}) {
  return (
    <ul>
      {blogs.map((blog) => (
        <li key={blog.slug} className="m-10">
          <BlogCard
            title={blog.title}
            slug={blog.slug}
            subtitle={blog.subtitle}
            img={blog.img} readingMins={blog.readingMins} author={blog.author} tags={blog.tags}          />
        </li>
      ))}
    </ul>
  );
}
