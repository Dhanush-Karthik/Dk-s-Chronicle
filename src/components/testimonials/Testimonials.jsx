import React from "react";

import "./Testimonials.css";

import { LiaCommentSolid } from "react-icons/lia";

import { useInView } from "react-intersection-observer";

import Carousel from "../carousel/Carousel";

const Testimonials = () => {
  const {ref, inView} = useInView();
  const testiRef = ref;
  
  return (
    <div id="testimonials" ref={testiRef} className={`testimonials v-hidden ${inView?"v-show":"v-hidden"}`}>
      <div className="testimonials-header">
        <div className="testimonials-icon">
          <LiaCommentSolid size={"18px"} />
        </div>
        <div className="testimonials-icon-name">TESTIMONIALS</div>
      </div>
      <div  className="testimonials-content">
        <div className="testimonials-content-header">
          <span className="highlight"> Clients Speak</span>: A Tapestry of Trust
        </div>
        <div  className="testimonials-list">
          <div className="testimonials-cards">
            <Carousel />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
