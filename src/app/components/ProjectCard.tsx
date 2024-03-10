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
    <div>
      <a href={link} target="_blank" className="w-full block shadow-2xl">
        <div className="relative overflow-hidden">
          <div className="h-72 object-cover">
            <img
              src={imgUrl}
              alt="portfolio"
              className="transform hover:scale-125 transition duration-2000 ease-out object-cover h-full w-full"
            />
          </div>
          <h1 className="absolute top-10 left-10 text-gray-50 font-bold text-xl bg-slate-800/60 hover:bg-slate-800 dark:bg-black/60 dark:hover:bg-black px-2 rounded-lg">
            {title}
          </h1>
          <h1 className="absolute bottom-10 left-10 w-auto right-10 bg-slate-800/60 hover:bg-slate-800 dark:bg-black/60 dark:hover:bg-black text-gray-50 font-bold text-xl p-4 rounded-lg">
            {description}
          </h1>
        </div>
      </a>
    </div>
  );
};
