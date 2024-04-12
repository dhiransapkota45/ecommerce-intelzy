import { useEffect, useMemo, useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Cart from "./components/cart/Cart";
import { Toaster } from "react-hot-toast";
import LoginPage from "./components/login/Login";
import { useLocation } from "react-router-dom";
import AdminAdd from "./components/admin/AdminAdd";
import Admin from "./components/admin/Admin";
import Editproduct from "./components/admin/Editproduct";

function App() {
  const location = useLocation();
  
  return (
    <div>
      <Toaster />
      
      {location.pathname !== "/login" && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<LoginPage />} />

        <Route path="/admin/add" element={<AdminAdd />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/edit/:id" element={<Editproduct />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </div>
  );
}

export default App;
