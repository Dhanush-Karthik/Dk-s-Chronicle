import React, { useState } from "react";

import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";

import TestiCard from "../testi-card/TestiCard";

import adam from "../../img/adam.jpeg";
// import dhanush from "../../img/profile1.jpg";

import "./Carousel.css";

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const updateIndex = (newIndex) => {
    if(newIndex < 0){
        newIndex = 0;
    }
    else if(newIndex>= testimonialData.length){
        newIndex = testimonialData.length-1;
    }

    setActiveIndex(newIndex);
  }
  const testimonialData = [
    {
      profile: adam,
      name: "Pinku",
      designation: "CEO",
      company: "The Adams Edition",
      comment: `"Brilliantly brought our clothing e-commerce vision to life. The
          website's seamless design and effortless functionality are driving
          increased sales"`,
      link: "",
    },
    // {
    //     profile: dhanush,
    //     name: "Pinku",
    //     designation: "CEO",
    //     company: "The Adams Edition",
    //     comment: `"Brilliantly brought our clothing e-commerce vision to life. The
    //         website's seamless design and effortless functionality are driving
    //         increased sales"`,
    //     link: "",
    //   },
  ];
  return (
    <div className="carousel">
      <div
        className="carousel-inner"
        style={{ transform: `translate(1${activeIndex * 100}%)` }}
      >
        {testimonialData.map((data) => {
          return <TestiCard data={data} />;
        })}
      </div>
      <div className="testimonials-nav">
        <div className="testimonials-arrow" onClick={()=>updateIndex(activeIndex-1)}>
          <BsArrowLeftCircle size={"30px"} />
        </div>
        <div className="testimonials-count">
          <div className="testimonials-count-active">1 &nbsp;</div>
          <div className="testimonials-count-total"> / 5</div>
        </div>
        <div className="testimonials-arrow" onClick={()=>{updateIndex(activeIndex+1)}}>
          <BsArrowRightCircle size={"30px"} />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
