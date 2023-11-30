import { useEffect, useState } from "react";
import "./App.css";
import Content from "./components/content/Content";
import NavBar from "./components/navbar/NavBar";
import Profile from "./components/profile/Profile";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [intro, setIntro] = useState(true);

  return (
    <>
      <div className={`${intro ? "intro-wrapper" : "intro-hidden"}`}>
        <div className="intro">
          <div class="wrapper">
            <div class="typing-demo">Hi! This is <span>Dhanush Karthik.</span></div>
            <div class="skip" onClick={() => setIntro(false)}>
              VISIT PAGE
            </div>
          </div>
        </div>
      </div>
      <div className={`${intro ? "intro-hidden" : "App"}`}>
        <ul class="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <div className="stars-container">
          <div id="stars"></div>
          <div id="stars2"></div>
          <div id="stars3"></div>
        </div>
        <Profile />
        <Content />
        <NavBar />
        <ToastContainer />
      </div>
    </>
  );
}

export default App;
