import { useEffect, useState } from "react";
import "./App.css";
import Content from "./components/content/Content";
import NavBar from "./components/navbar/NavBar";
import Profile from "./components/profile/Profile";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [intro, setIntro] = useState(true);
  useEffect(() => {
    var index = 0;
    var data = [
      "DHANUSH KARTHIK",
      "JAVA FULL STACK DEV",
      "SOFTWARE DEV",
      "WEB DEV",
    ];

    var span = document.querySelector("span");
    var section = document.querySelector("section");

    function init() {
      let txt = document.createTextNode(data[index]);
      section.dataset.identity = data[index];
      span.innerText = txt.textContent;
      index++;
    }

    init();

    setInterval(function () {
      let txt = document.createTextNode(data[index]);
      section.dataset.identity = data[index];
      span.innerText = txt.textContent;
      index++;
      index = index < data.length ? index++ : 0;
    }, 4501);
  }, []);

  return (
    <>
      <div className={`${intro ? "intro-wrapper" : "intro-hidden"}`}>
        <div className="intro">
          <section data-identity="Batman">
            <blockquote>
              I AM
              <span></span>
            </blockquote>
          </section>
          <div class="pen__lines-wrapper">
            <div class="pen__line"></div>
            <div class="pen__line"></div>
            <div class="pen__line"></div>
            <div class="pen__line"></div>
            <div class="pen__line"></div>
            <div class="pen__line"></div>
            <div class="pen__line"></div>
            <div class="pen__line"></div>
            <div class="pen__line"></div>
            <div class="pen__line"></div>
          </div>
        </div>
        <div class="skip" onClick={() => setIntro(false)}>
          VISIT PAGE
        </div>
      </div>
      <div className={`${intro?"intro-hidden":"App"}`}>
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
