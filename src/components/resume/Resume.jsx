import React from "react";

import { BsBriefcase } from "react-icons/bs";

import { useInView } from "react-intersection-observer";

import "./Resume.css";
import Timeline from "../timeline/Timeline";

const Resume = () => {
  const {ref, inView} = useInView();
  const resumeRef = ref;
  
  const workTimelineInfo = [
    {
      timeline: "2023 - Present",
      header: "Junior Software Engineer ( Java Developer )",
      sub: "Grootan Technologies"
    }
  ];

  const educationTimelineInfo = [
    {
      timeline: "2020 - 2024",
      header: "Bachelor of Engineering in Computer Science",
      sub: "Sri Krishna College of Technology"
    },
    {
      timeline: "2019 - 2020",
      header: "Higher Secondary Certificate",
      sub: "SRK Matric Higher Secondary School"
    },
    {
      timeline: "2017 - 2018",
      header: "Secondary School Leaving Certificate",
      sub: "SRK Matric Higher Secondary School"
    }
  ];
  
  return (
    <div ref={resumeRef} id={"resume"}className={`resume v-hidden ${inView?"v-show":"v-hidden"}`}>
      <div className="resume-header">
        <div className="resume-icon">
          <BsBriefcase size={"18px"} />
        </div>
        <div className="resume-icon-name">RESUME</div>
      </div>
      <div className="resume-conent">
      <div className="resume-content-header">Experience</div>
        <Timeline infos={workTimelineInfo}/>
        <div className="resume-content-header">Education</div>
        <Timeline infos={educationTimelineInfo} />
      </div>
    </div>
  );
};

export default Resume;
