import React, { useState } from "react";

import "./NavBar.css";

import { BiHome } from "react-icons/bi";
import { BsBriefcase } from "react-icons/bs";
import { GoPerson } from "react-icons/go";
import { FiMail } from "react-icons/fi";
import { PiShapes } from "react-icons/pi";
import { LiaCommentSolid } from "react-icons/lia";
import { BsGrid3X2Gap } from "react-icons/bs";

const NavBar = () => {
  const [activeIcon, setActiveIcon] = useState("home");

  const handleIconClick = (iconName) => {
    setActiveIcon(iconName);
  };

  return (
    <div id="navbar" className="navBar">
      <div className="navBar-icons">
        <div className="navBar-icon">
          <a
            className={`navBar-link ${
              activeIcon === "home" ? "highlight" : ""
            }`}
            href="#introduce"
            onClick={() => handleIconClick("home")}
          >
            <BiHome size={"18px"} />
          </a>
        </div>
        <div className="navBar-icon">
          <a
            className={`navBar-link ${
              activeIcon === "about" ? "highlight" : ""
            }`}
            href="#about"
            onClick={() => handleIconClick("about")}
          >
            <GoPerson size={"18px"} />
          </a>
        </div>
        <div className="navBar-icon">
          <a
            className={`navBar-link ${
              activeIcon === "resume" ? "highlight" : ""
            }`}
            href="#resume"
            onClick={() => handleIconClick("resume")}
          >
            <BsBriefcase size={"18px"} />
          </a>
        </div>
        <div className="navBar-icon">
          <a
            className={`navBar-link ${
              activeIcon === "skills" ? "highlight" : ""
            }`}
            href="#skills"
            onClick={() => handleIconClick("skills")}
          >
            <PiShapes size={"18px"} />
          </a>
        </div>
        <div className="navBar-icon">
          <a
            className={`navBar-link ${
              activeIcon === "portfolio" ? "highlight" : ""
            }`}
            href="#portfolio"
            onClick={() => handleIconClick("portfolio")}
          >
            <BsGrid3X2Gap size={"18px"} />
          </a>
        </div>
        <div className="navBar-icon">
          <a
            className={`navBar-link ${
              activeIcon === "testimonials" ? "highlight" : ""
            }`}
            href="#testimonials"
            onClick={() => handleIconClick("testimonials")}
          >
            <LiaCommentSolid size={"18px"} />
          </a>
        </div>
        <div className="navBar-icon">
          <a
            className={`navBar-link ${
              activeIcon === "contact" ? "highlight" : ""
            }`}
            href="#contact"
            onClick={() => handleIconClick("contact")}
          >
            <FiMail size={"18px"} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
