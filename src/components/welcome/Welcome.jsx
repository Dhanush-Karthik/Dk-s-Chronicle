import React from "react";

const Welcome = ({ intro, setIntro }) => {
  const changeState = () => {
    console.log("clicked");
  } ;
  
  return (
    <>
      <div className={`${intro ? "intro-wrapper" : "intro-hidden"}`}>
        <div className="intro">
          <div className="wrapper">
            <div className="typing-demo">
              Hi! This is <span className="typing-span">Dhanush Karthik</span>,{" "}
            </div>
            <div className="typing-demo1">
              Computer <span className="typing-span">Engineer</span> and
              Software <span className="typing-span">Developer</span>.{" "}
            </div>
            <div className="skip" onClick={() => changeState}>
              Know me
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Welcome;
