import { blogs } from "@/app/util/data";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import Link from "next/link";

export default function Page({ params }: { params: { slug: number } }) {
  const { title, subtitle, img, body } = blogs[params.slug - 1];
  const PreviousBlog = blogs[params.slug - 2];
  const NextBlog = blogs[params.slug];
  return (
    <div className="container mx-auto py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl lg:text-5xl font-bold mb-4">{title}</h1>
        <p className="text-gray-600 mb-4 text-lg">{subtitle}</p>
        <img
          src={img}
          alt={title}
          className="rounded-lg mb-6 object-cover w-full h-64 lg:h-auto"
        />
        <div className="">
          {/* Using Next.js Image component is recommended here instead of img tag */}

          {body &&
            body.map((paragraph, index) => (
              <div key={index} className="prose lg:prose-lg xl:prose-xl pb-2">
                {paragraph.content}
              </div>
            ))}
        </div>
        <div className="w-full flex place-content-between">
          {PreviousBlog && (
            <Link
              href={`/blog/${PreviousBlog.slug}`}
              className="inline-flex items-center p-4 space-x-2 text-sm dark:text-green-500 hover:font-bold hover:text-green-600 bg-green-100 dark:bg-white rounded-md pl-4"
            >
              <ArrowBack />
              <span className="">{PreviousBlog.title}</span>
            </Link>
          )}
          {NextBlog && (
            <Link
              href={`/blog/${NextBlog.slug}`}
              className="inline-flex items-center p-4 space-x-2 text-sm dark:text-green-500 hover:font-bold hover:text-green-600 bg-green-100 dark:bg-white rounded-md pl-4"
            >
              <ArrowForward />
              <span className="">{NextBlog.title}</span>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
