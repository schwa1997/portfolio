"use client";

import { School, Star, Work } from "@mui/icons-material";
import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
export default function page() {
  return (
    <div className="text-black">
      <VerticalTimeline>
        <VerticalTimelineElement
          visible={true}
          className="vertical-timeline-element--work"
          date="2023 - current"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<Work />}
        >
          <h3 className="vertical-timeline-element-title">Web developer</h3>
          <h4 className="vertical-timeline-element-subtitle">Remote</h4>
          <p>Web development</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          visible={true}
          className="vertical-timeline-element--work"
          date="2019 - 2022"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<Work />}
        >
          <h3 className="vertical-timeline-element-title">
            Application engineer
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Beijing, China</h4>
          <p>PLC, HMI, Drive</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          visible={true}
          className="vertical-timeline-element--education"
          date="2022-current"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          icon={<School />}
        >
          <h3 className="vertical-timeline-element-title">
            Computer Engineering
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            University of Padua
          </h4>
          <p>Web information and data engineering</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          visible={true}
          className="vertical-timeline-element--education"
          date="2015-2019"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          icon={<School />}
        >
          <h3 className="vertical-timeline-element-title">
            Electrical Engineering and Automation
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Harbin Institute of Technology
          </h4>
          <p>Electrical Engineering course, automation</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          visible={true}
          iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
          icon={<Star />}
        />
      </VerticalTimeline>
    </div>
  );
}
