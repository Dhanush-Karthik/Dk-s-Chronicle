import React from "react";

import { useInView } from "react-intersection-observer";

const ProjectVCard = ({image,title,subtitle}) => {
    const {ref, inView} = useInView();
    const projectVCardRef = ref;
  return (
    <div ref={projectVCardRef} className={`project-card-horizontal v-hidden ${inView?"v-show":"v-hidden"}`}>
      <img className="project-image-horizontal" src={image} alt="project3" />
      <div className="project-button-container-horizontal">
        <div className="project-button">Github</div>
        <div className="project-button">Visit</div>
      </div>
      <div className="project-title-horizontal">
        <span className="highlight">{title}</span> - {subtitle}
      </div>
    </div>
  );
};

export default ProjectVCard;
