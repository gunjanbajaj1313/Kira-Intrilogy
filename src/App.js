import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React,{useState,useEffect} from "react";
import Home from "./components/Home/Home";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import ContactUs from "./components/ContactUs/ContactUs";
import Profile from "./components/Profile/Profile";

const App = () => {
  const [logindata, setLoginData] = useState([]);
  const getData = () => {
    const getuser = localStorage.getItem("usergunjan");
    if (getuser && getuser.length) {
      const user = JSON.parse(getuser);
      setLoginData(user);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Login />} />
          <Route path="/contactus" element={<ContactUs logindata={logindata} />} />
          <Route path="/profile" element={<Profile logindata={logindata}/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
