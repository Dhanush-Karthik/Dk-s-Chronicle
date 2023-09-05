import React from 'react'

import { useInView } from 'react-intersection-observer';

const ProjectHCard = ({image,title,subtitle}) => {

    const {ref, inView} = useInView();
    const projectHCardRef = ref;
  return (
    <div ref={projectHCardRef} className={`project-card h-hidden ${inView?"h-show":"h-hidden"}`}>
          <img className="project-image" src={image} alt="project1" />
          <div className="project-button-container">
            <div className="project-button">Github</div>
            <div className="project-button">Visit</div>
          </div>
          <div className="project-title">
            <span className="highlight">{title}</span> - {subtitle}
          </div>
        </div>
  )
}

export default ProjectHCard
