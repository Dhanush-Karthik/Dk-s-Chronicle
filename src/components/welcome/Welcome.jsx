import React from "react";

const Welcome = ({ intro, setIntro }) => {
  return (
    <>
      <div className={`${intro ? "intro-wrapper" : "intro-hidden"}`}>
        <div className="intro">
          <div class="wrapper">
            <div class="typing-demo">
              Hi! This is <span className="typing-span">Dhanush Karthik</span>,{" "}
            </div>
            <div class="typing-demo1">
              Computer <span className="typing-span">Engineer</span> and
              Software <span className="typing-span">Developer</span>.{" "}
            </div>
            <div class="skip" onClick={() => setIntro(false)}>
              Know me
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Welcome;
