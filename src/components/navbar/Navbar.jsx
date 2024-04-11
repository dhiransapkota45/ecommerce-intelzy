import React from "react";
import "./navbar.css";
import { NavLink } from "react-router-dom";
import "./navbar.css"

const Navbar = () => {
  return (
    <nav className="nav-container">
      <div className="logo">Logo</div>
      <div className=" links">
        <NavLink to="/" className="link">Home</NavLink>
        <NavLink to="/cart" className="link">Cart</NavLink>
        <NavLink to="/admin" className="link">Admin</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
