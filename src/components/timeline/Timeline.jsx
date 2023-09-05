import React from "react";

import { useInView } from "react-intersection-observer";

import "./Timeline.css";

const Timeline = ({ infos }) => {
    const {ref, inView} = useInView();
    const timelineRef = ref;
  return (
    <div ref={timelineRef} className={`timeline`}>
      <div className="timeline-outer">
        <div className="timeline-card">
          <div className={`timeline-info h-hidden ${inView?"h-show":"h-hidden"}`}>
            {infos.map((info) => {
              return (
                <>
                  <h3 className="timeline-title" >{info.timeline}</h3>
                  <div className="timeline-sub-title">
                    {info.header}
                  </div>
                  <div className="timeline-content">{info.sub}</div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
