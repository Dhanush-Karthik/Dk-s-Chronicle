import React from "react";

import { BsGrid3X2Gap } from "react-icons/bs";
import { useInView } from "react-intersection-observer";
import project1 from "../../img/project1.png";
import project2 from "../../img/project2.png";
import project3 from "../../img/project3.jpeg";
import project4 from "../../img/project 4.jpeg";

import "./Portfolio.css";
import ProjectVCard from "../project-vcard/ProjectVCard";
import ProjectHCard from "../project-hcard/ProjectHCard";

const Portfolio = () => {
  const { ref, inView } = useInView();
  const portfolioRef = ref;
  return (
    <div ref={portfolioRef} id="portfolio" className={`portfolio v-hidden ${inView?"v-show":"v-hidden"}`}>
      <div className="portfolio-header">
        <div className="portfolio-icon">
          <BsGrid3X2Gap size={"18px"} />
        </div>
        <div className="portfolio-icon-name">Portfolio</div>
      </div>
      <div className="portfolio-content">
        <ProjectHCard image={project1} title={"DK'S Chronicle"} subtitle={"A React Porfolio"} />
        <div className="project-cards">
          <ProjectVCard
            image={project3}
            title={"PaperMan"}
            subtitle={`An AI based Bloging
        site(Prototype)`}
          />
          <ProjectVCard
            image={project4}
            title={"Taskopia"}
            subtitle={"A Spring based Todo App"}
          />
        </div>
        <ProjectHCard image={project2} title={"Emails from WhatsApp"} subtitle={"A Node Server"} />
      </div>
    </div>
  );
};

export default Portfolio;
