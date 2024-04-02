"use client";

import React from "react";
import { School, Star, Work } from "@mui/icons-material";
import { useTheme } from "next-themes";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { userData } from "../util/data";

export default function Experience() {
  const { theme } = useTheme();
  return (
    <div className="">
      <div className="max-w-6xl mx-auto md:h-48 h-24 ">
        <h1 className=" text-5xl md:text-9xl font-bold md:py-20 py-6 text-center md:text-left">
          Experience
        </h1>
      </div>
      <div className="md:py-20 py-6">
        <VerticalTimeline
          className="text-black dark:text-white"
          lineColor={theme === "bright" ? "black" : "white"}
        >
          {userData.workExperience.map((item, index) => (
            <VerticalTimelineElement
              key={index}
              visible={true}
              contentStyle={{
                background:
                  theme === "bright" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
                boxShadow: "none",
                border: "1px solid rgba(0, 0, 0, 0.05)",
                textAlign: "left",
                padding: "1.3rem 2rem",
              }}
              contentArrowStyle={{
                borderRight:
                  theme === "bright"
                    ? "0.4rem solid #f3f4f6"
                    : "0.4rem solid rgba(255, 255, 255, 0.05)",
              }}
              date={item.date}
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              icon={<Work />}
            >
              <h3 className="vertical-timeline-element-title">{item.title}</h3>
              <h4 className="vertical-timeline-element-subtitle">
                {item.location}
              </h4>
              <p> {item.description}</p>
            </VerticalTimelineElement>
          ))}
            {userData.educationExperience.map((item, index) => (
            <VerticalTimelineElement
              key={index}
              visible={true}
              contentStyle={{
                background:
                  theme === "bright" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
                boxShadow: "none",
                border: "1px solid rgba(0, 0, 0, 0.05)",
                textAlign: "left",
                padding: "1.3rem 2rem",
              }}
              contentArrowStyle={{
                borderRight:
                  theme === "bright"
                    ? "0.4rem solid #f3f4f6"
                    : "0.4rem solid rgba(255, 255, 255, 0.05)",
              }}
              date={item.date}
              iconStyle={{ background: "rgb(255, 150, 243)", color: "#fff" }}
              icon={<School />}
            >
              <h3 className="vertical-timeline-element-title">{item.title}</h3>
              <h4 className="vertical-timeline-element-subtitle">
                {item.location}
              </h4>
              <p> {item.description}</p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
}
