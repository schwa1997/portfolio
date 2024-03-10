import React from "react";
import { userData } from "../Constants/data";
import Image from "next/image";

function Aboutme() {
  return (
    <div className="flex font-sans justify-center p-6">
      <div className="md:w-2/3 dark:bg-slate-800 bg-zinc-100">
        <div className="flex justify-center pt-6">
          <Image
            src={userData.avatarUrl}
            alt="profile picture"
            className="object-cover rounded-full w-20 h-20"
            width={60}
            height={60}
          />
        </div>
        <div className="p-6 divide-y">
          <div className="text-center text-gray-700 dark:text-gray-200">
            <p className="text-xl font-semibold">Huimin Chen</p>
            <p className="text-sm">TypeScript full-stack developer</p>
          </div>
          <div className="mt-8 pt-4">
            <h1 className="text-xl font-semibold text-gray-700 dark:text-gray-200">
              Introduction
            </h1>
            <p>
              I am a TypeScript full-stack developer proficient in HTML, CSS,
              React, Next.js, Tailwind CSS, Ant Design, and Formik for front-end
              development. On the back end, I specialize in Node.js and have a
              strong command of NestJS. I have a track record of developing
              websites using TypeScript and related libraries, showcasing my
              ability to create efficient, type-safe, and visually appealing web
              applications.
            </p>
          </div>

          <div className="mt-8 pt-4">
            <h1 className="text-xl font-semibold text-gray-700 dark:text-gray-200">
              Job Opportunities
            </h1>
            <p className="">
              I am looking for a job currently, If you see me as a good fit,
              check my{" "}
              <a
                href={userData.resumeUrl}
                target="__blank"
                className="text-gray-800 border-b-2 border-gray-800 dark:border-gray-300 font-bold dark:text-gray-300"
              >
                CV
              </a>{" "}
              and I would love to work for you.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aboutme;
