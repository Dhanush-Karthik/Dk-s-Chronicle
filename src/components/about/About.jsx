import React from "react";

import { GoPerson } from "react-icons/go";

import { useInView } from "react-intersection-observer";
import "./About.css";

const About = () => {
  const {ref, inView} = useInView();

  const aboutRef = ref;
  return (
    <div ref ={aboutRef} id="about" className={`about v-hidden ${inView?'v-show':'v-hidden'}`}>
      <div className="about-header">
        <div className="about-icon">
          <GoPerson size={"18px"} />
        </div>
        <div className="about-icon-name">ABOUT</div>
      </div>
      <div className="about-content">
        <div className="about-content-main">
          From bytes of <span className="highlight">passion</span> to lines of
          code, my <span className="highlight">journey</span> evolves, one
          keystroke at a time.
        </div>
        <div className="about-content-sub">
          A Computer Science engineer graduate with a passion for shaping
          digital landscapes. Currently, I thrive as a versatile Java Full Stack
          Developer, navigating the realms of Java and React to craft dynamic
          web experiences. My expertise extends to the intricate domain of web
          security, ensuring the fortification of digital frontiers. With a
          blend of coding proficiency and a commitment to safeguarding online
          realms, I'm dedicated to delivering innovative solutions that bridge
          technology and security seamlessly.
        </div>
      </div>
    </div>
  );
};

export default About;
