import "./App.css";
import Content from "./components/content/Content";
import NavBar from "./components/navbar/NavBar";
import Profile from "./components/profile/Profile";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
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
        <div id='stars'></div>
        <div id='stars2'></div>
        <div id='stars3'></div>
      </div>
      <Profile />
      <Content />
      <NavBar />
      <ToastContainer />
    </div>
  );
}

export default App;
