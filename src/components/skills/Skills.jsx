import React from "react";

import { PiShapes } from "react-icons/pi";

import "./Skills.css";
import SkillCard from "../skill-card/SkillCard";

const Skills = () => {
  return (
    <div className="skills">
      <div className="skills-header">
        <div className="skills-icon">
          <PiShapes size={"18px"} />
        </div>
        <div className="skills-icon-name">MY SKILLS</div>
      </div>
      <div className="skills-content">
        <div className="skills-content-header">
          My <span className="highlight">Advantages</span>
        </div>
        <div className="skills-content-body">
          <div id={"skills"}  className="skills-content-cards">
            <SkillCard name={"java"} percentage={90}/>
            <div className="skills-content-card-name">Java</div>
          </div>
          <div className="skills-content-cards">
            <SkillCard name={"spring-boot"} percentage={75}/>
            <div className="skills-content-card-name">Spring Boot</div>
          </div>
          <div className="skills-content-cards">
            <SkillCard name={"spring-security"} percentage={70}/>
            <div className="skills-content-card-name">Spring Security</div>
          </div>
          <div className="skills-content-cards">
            <SkillCard name={"git"} percentage={80}/>
            <div className="skills-content-card-name">Git</div>
          </div>
          <div className="skills-content-cards">
            <SkillCard name={"docker"} percentage={50}/>
            <div className="skills-content-card-name">Dokcer</div>
          </div>
          <div className="skills-content-cards">
            <SkillCard name={"html"} percentage={80}/>
            <div className="skills-content-card-name">HTML & CSS</div>
          </div>
          <div className="skills-content-cards">
            <SkillCard name={"react"} percentage={60}/>
            <div className="skills-content-card-name">React Js</div>
          </div>
          <div className="skills-content-cards">
            <SkillCard name={"node"} percentage={40}/>
            <div className="skills-content-card-name">Node</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
