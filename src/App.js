import './App.css';
import Content from './components/content/Content';
import NavBar from './components/navbar/NavBar';
import Profile from './components/profile/Profile';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <Profile />
      <Content />
      <NavBar />
      <ToastContainer />
    </div>
  );
}

export default App;
