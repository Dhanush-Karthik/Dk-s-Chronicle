import { useState } from "react";
import "./App.css";
import Home from "./components/home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "./components/welcome/Welcome";
import Stars from "./components/stars/Stars";
import Blogs from "./components/blog/Blogs";
import BlogPage from "./components/blog-page/BlogPage";
import axios from 'axios';
axios.defaults.baseURL = 'https://portfolio-backend-8e2z.onrender.com/';

function App() {
  const [intro, setIntro] = useState(false);

  return (
    <>
      <Welcome intro={intro} setIntro={setIntro} />
      <Stars />
      <div className={`${intro ? "intro-hidden" : "App"}`}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home intro={intro} setIntro={setIntro} />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/blogs/:id" element={<BlogPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
