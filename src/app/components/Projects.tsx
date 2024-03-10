import React from "react";
import { ProjectCard } from "./ProjectCard";
import { userData } from "../Constants/data";

export default function Projects() {
  return (
    <section className="">
      <div className="max-w-6xl mx-auto md:h-48 h-24 ">
        <h1 className=" text-5xl md:text-9xl font-bold md:py-20 py-6 text-center md:text-left">
          Projects
        </h1>
      </div>
      <div className="px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:py-20 py-6">
          {userData.projects.map((project, index) => (
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
    </section>
  );
}
