import { blogs } from "@/app/util/data";

export default function Page({ params }: { params: { slug: number } }) {
  const { title, subtitle, img, body } = blogs[params.slug - 1];
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
      </div>
    </div>
  );
}
