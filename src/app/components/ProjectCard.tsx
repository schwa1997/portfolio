import React, { FC } from "react";

interface ProjectCardProps {
  title: string;
  link: string;
  imgUrl: string;
  description: string;
}

export const ProjectCard: FC<ProjectCardProps> = ({
  title,
  link,
  imgUrl,
  description,
}) => {
  return (
    <div className="flex flex-col bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-2xl h-full">
      {/* Image Section */}
      <div className="w-full">
        <div className="relative h-72">
          <img
            src={imgUrl}
            alt={title}
            className="transform hover:scale-125 transition duration-2000 ease-out object-cover h-full w-full"
          />
        </div>
      </div>

      {/* Content Section */}
      <div className="w-full p-6 flex flex-col flex-grow">
        <div className="flex-grow">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">
            {title}
          </h2>
          <p className="text-gray-600 dark:text-gray-300">{description}</p>
        </div>
        <div className="mt-6">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gray-600 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300"
          >
            View Project
          </a>
        </div>
      </div>
    </div>
  );
};
