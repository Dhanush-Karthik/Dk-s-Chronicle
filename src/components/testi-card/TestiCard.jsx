import React from "react";

import "./TestiCard.css";


import { useInView } from "react-intersection-observer";

const TestiCard = ({data}) => {
  const {ref, inView} = useInView();
  const testiCardRef = ref;

  return (
    <div ref={testiCardRef} className={`testi-card h-hidden ${inView?"h-show":"h-hidden"}`}>
      <div className="test-wrapper">
        <div className="testi-profile">
          <div className="testi-profile-photo">
            <img className="testi-profile-photo" alt="profile" src={data.profile} width={"50px"} />
          </div>
          <div className="testi-profile-details">
            <div className="testi-profile-name">{data.name}</div>
            <div className="testi-profile-desig">
              {data.designation} of <span className="highlight">{data.company}</span>
            </div>
          </div>
        </div>
        <div className="testi-content">
          {data.comment}
        </div>
        <div className="testi-link">
          <a href={data.link}>Project Link</a>
        </div>
      </div>
    </div>
  );
};

export default TestiCard;
