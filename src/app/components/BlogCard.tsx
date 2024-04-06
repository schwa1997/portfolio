import Link from "next/link";
import React, { FC } from "react";

interface BlogCardProps {
  title: string;
  slug: number;
  subtitle: string;
  img: string;
  readingMins: number;
  author: string;
  tags: string[];
}

export const BlogCard: FC<BlogCardProps> = ({
  tags,
  title,
  slug,
  subtitle,
  img,
  author,
  readingMins,
}) => {
  return (
    <div className="dark:bg-slate-700 bg-green-100/50 dark:text-white flex lg:flex-row flex-col">
      <div className="container grid grid-cols-12 mx-auto dark:bg-slate-700">
        <div className="flex flex-col p-6 col-span-full row-span-full lg:col-span-8 lg:p-10">
          <div className="flex justify-start gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 text-xs rounded-2xl bg-green-300 dark:bg-green-600 dark:text-gray-50"
              >
                {tag}
              </span>
            ))}
          </div>
          <h1 className="text-3xl font-semibold">{title}</h1>
          <p className="flex-1 py-2">{subtitle}</p>
          <Link
            href={`/blog/${slug}`}
            className="inline-flex items-center pt-2 pb-2 space-x-2 text-sm dark:text-green-500 hover:font-bold hover:text-green-600 bg-green-100 dark:bg-white rounded-md pl-4"
          >
            <span className="">Read more</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-4 h-4"
            >
              <path
                fillRule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </Link>
          <div className="flex items-center justify-between pt-2">
            <div className="flex space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5 dark:text-gray-600"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="self-center text-sm">by {author}</span>
            </div>
            <span className="text-xs">{readingMins} min read</span>
          </div>
        </div>
      </div>
      <div className="w-full  px-8 lg:py-4 pt-0 pb-4">
        <img src={img} alt="" className="rounded-xl" />
      </div>
    </div>
  );
};
