import React, { useEffect } from "react";

import { BiHome } from "react-icons/bi";

import { useInView } from "react-intersection-observer";

import "./Introduce.css";

const Introduce = () => {

  const{ref , inView} = useInView();
  const myRef = ref;

  useEffect(() => {
    counterEffect();
  }, [inView]);

  const counterEffect = () => {
    const stats = document.querySelectorAll(".stat");
    stats.forEach((stat) => {
      let startValue = 0;
      let endValue = parseInt(stat.getAttribute("value"));
      let duration = Math.floor(500/endValue);
      let counter = setInterval(()=>{
        startValue+=1;
        stat.textContent = startValue;
        if(startValue===endValue){
          clearInterval(counter)
        }
      },duration);
    });
  };

  return (
    <div ref={myRef} id="introduce" className={`${"introduce h-hidden"} ${inView?"h-show":"h-hidden"}`}>
      <div className="introduce-header">
        <div className="introduce-icon">
          <BiHome size={"18px"} />
        </div>
        <div className="introduce-icon-name">INTRODUCE</div>
      </div>
      <div className="introduce-content">
        <div className="introduce-content-main">
          Say Hi from <span className="highlight">Dhanush Karthik</span>, React
          and Java Full Stack Developer
        </div>
        <div className="introduce-content-sub">
          I design and code beautiful simple things and i love what i do.
          <br />
          Just simple like that!
        </div>
        <div className="introduce-content-stats">
          <div className="introduce-content-stat">
            <div className="introduce-content-stat-number">
              <span className="stat" value="2">
                0
              </span>
              +
            </div>
            <div className="introduce-content-stat-text">
              YEARS OF EXPERIENCE
            </div>
          </div>
          <div className="introduce-content-stat">
            <div className="introduce-content-stat-number">
              <span className="stat" value="10">
                0
              </span>
              +
            </div>
            <div className="introduce-content-stat-text">
              PROJECTS COMPLETED
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduce;
