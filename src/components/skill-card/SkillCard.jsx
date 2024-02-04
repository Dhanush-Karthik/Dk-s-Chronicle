import React, { useEffect } from "react";

import "./SkillCard.css";

import { FaJava, FaReact, FaHtml5, FaNodeJs, FaDocker } from "react-icons/fa";
import {BsGit } from "react-icons/bs";
import {SiSpringboot, SiSpringsecurity} from "react-icons/si";

const SkillCard = ({name,percentage}) => {
  useEffect(()=>{
    counterEffect();
  },[]);

  const counterEffect = () => {
    const percentages = document.querySelectorAll(".percentage");
    percentages.forEach(percentage=>{
      let startValue = 0;
      let endValue = parseInt(percentage.getAttribute("value"));
      const interval = Math.floor(1000/endValue);
      let counter = setInterval(()=>{
        startValue+=1;
        percentage.textContent=startValue;
        if(startValue===endValue){
          clearInterval(counter);
        }
      },interval);
    })
  };

  return (
    <div className="skill-card">
      <div className="skill-card-icon">
        {name==="java" && <FaJava size={"80px"} color="29E88D"/>}
        {name==="react" && <FaReact size={"80px"} color="29E88D"/>}
        {name==="html" && <FaHtml5 size={"80px"} color="29E88D"/>}
        {name==="node" && <FaNodeJs size={"80px"} color="29E88D"/>}
        {name==="git" && <BsGit size={"80px"} color="29E88D"/>}
        {name==="docker" && <FaDocker size={"80px"} color="29E88D"/>}
        {name==="spring-boot" && <SiSpringboot size={"80px"} color="29E88D"/>}
        {name==="spring-security" && <SiSpringsecurity size={"80px"} color="29E88D"/>}
      </div>
      {/* <div className="skill-card-text">
        <span className="percentage" value={percentage}>0</span>%
      </div> */}
    </div>
  );
};

export default SkillCard;
