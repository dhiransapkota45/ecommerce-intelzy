import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Cart from "./components/cart/Cart";
import { Toaster } from 'react-hot-toast';
import LoginPage from "./components/login/Login";
import {useLocation} from 'react-router-dom';
import Admin from "./components/admin/Admin";


function App() {
  const location = useLocation();
  const changehandler = (event) => {
    setInputdata(event.target.value)
  }

  return (
    <div>
      <Toaster />

      
      {location.pathname !== "/login" && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<LoginPage />} />

        <Route path="/admin" element={<Admin />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </div>
  );
}

export default App;
