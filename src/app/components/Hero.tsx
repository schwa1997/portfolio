import React from "react";
import { RoughNotationGroup } from "react-rough-notation";
import { RainbowHighlight } from "./RainbowHighlight";
import Image from "next/image";
import { userData } from "../Constants/data";

export default function Hero() {
  const colors = ["#F59E0B", "#84CC16", "#10B981", "#D0C672"];
  return (
    <div className="flex flex-row justify-center overflow-hidden">
      <div className="w-3/4 md:w-1/2 mx-auto text-center md:text-left lg:p-20 ml-4">
        <RoughNotationGroup show={true}>
          <RainbowHighlight color={colors[0]}>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-700 dark:text-gray-200 my-2">
              Developer.
            </h1>
          </RainbowHighlight>
          <RainbowHighlight color={colors[1]}>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-700 dark:text-gray-200 my-2">
              Programmer.
            </h1>
          </RainbowHighlight>
          <RainbowHighlight color={colors[2]}>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-700 dark:text-gray-200 my-2">
              learner.
            </h1>
          </RainbowHighlight>
          <RainbowHighlight color={colors[3]}>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-700 dark:text-gray-200 my-2">
              Creater.
            </h1>
          </RainbowHighlight>
        </RoughNotationGroup>
      </div>
      <div className="relative w-full md:w-1/2 -mr-40 md:mt-20 ml-4 mt-2">
        <div className="w-3/4 ">
          <Image
            src={userData.avatarUrl}
            alt="Picture of the author"
            sizes="100vw"
            style={{
              width: "60%",
              height: "auto",
            }}
            width={200}
            height={300}
          />
        </div>
      </div>
    </div>
  );
}
