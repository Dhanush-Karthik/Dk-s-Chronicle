import React from "react";
import Profile from "../profile/Profile";
import Content from "../content/Content";
import NavBar from "../navbar/NavBar";
import { ToastContainer } from "react-toastify";

const Home = () => {
  return (
    <>
      <Profile />
      <Content />
      <NavBar />
      <ToastContainer />
    </>
  );
};

export default Home;
