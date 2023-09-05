import React from "react";

import "./Profile.css";

import profile from "../../img/profile1.jpg";

import {
  FaGithub,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaFacebookF,
} from "react-icons/fa";
import { GrMail } from "react-icons/gr";

const Profile = () => {
  return (
    <div className="profile-container">
      <div className="profile-column">
        <div className="profile-title">
          <div className="profile-title-name">Dhanush</div>
          <div className="profile-title-designation">
            React JS &
            <br /> Java Full Stack Developer
          </div>
        </div>
        <div className="profile-photo">
          <img src={profile} alt="Profile" width={"90%"} />
        </div>
        <div className="profile-name">
          <div>Dhanush Karthik K S</div>
          <div
            style={{
              marginTop: "15px",
              fontSize: "16px",
              textAlign: "center",
              color: "#989898",
            }}
          >
            "Teach me to think, with that, i can coin a universe"
          </div>
        </div>
        <div className="profile-icons">
          <a href="https://github.com/Dhanush-Karthik">
            <div className="profile-icon">
              <FaGithub size={"15px"} />
            </div>
          </a>
          <a href="https://www.linkedin.com/in/dhanush-karthik">
            <div className="profile-icon">
              <FaLinkedin size={"15px"} />
            </div>
          </a>
          <a href="https://www.instagram.com/_._dk7_._/">
            <div className="profile-icon">
              <FaInstagram size={"15px"} />
            </div>
          </a>
          <a href="https://twitter.com/Dhanushdk45">
            <div className="profile-icon">
              <FaTwitter size={"15px"} />
            </div>
          </a>
          <a href="https://www.facebook.com/profile.php?id=100006168917057">
            <div className="profile-icon">
              <FaFacebookF size={"15px"} />
            </div>
          </a>
        </div>
        <a href="#contact">
          <div className="profile-button">
            <div className="contactme-button">
              <GrMail />
              <div style={{ marginLeft: "10px" }}>Contact me</div>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Profile;
