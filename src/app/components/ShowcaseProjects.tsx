import React from "react";
import Link from "next/link";
import Image from "next/image";
import { userData } from "../Constants/data";
import { ProjectCard } from "./ProjectCard";

export default function ShowcaseProjects() {
  const projectsToRender = userData.projects.slice(0, 3); 
  return (
    <div className="bg-[#F1F1F1] -mt-40 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <header className="flex flex-row justify-between items-center sm:pt-20 pt-40 mx-10 sm:my-20 lg:my-0 md:pb-0 pb-6" >
          <h1 className="text-2xl sm:text-9xl max-w-lg font-bold text-gray-500 my-0 sm:my-20 sm:text-white dark:text-gray-600 text-center">
            My Projects
          </h1>
          <Link
            href="/projects"
            className="mb-2 sm:mb-0 sm:px-8 sm:py-4 p-2 rounded-md bg-slate-200  dark:bg-slate-600 text-white dark:text-gray-200 shadow-lg text-base md:text-xl font-semibold flex flex-row space-x-4 items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-arrow-up-right-square"
              stroke="4"
              strokeWidth="4"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm5.854 8.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707l-4.096 4.096z"
              />
            </svg>
            <p>View all</p>
          </Link>
        </header>
        <div className="grid sm:grid-cols-3 gap-8 lg:-mt-8 sm:pb-24 pb-10 sm:px-4 px-4">
          {projectsToRender.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              link={project.link}
              imgUrl={project.imgUrl}
              description={project.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
