import React from "react";
import "./layout.css";

const NavBar = ({ open }) => {
  return (
    <nav className="nav-bar">
      <div onClick={open} className="nav-icon">
        <i className="material-icons">menu</i>
      </div>
      <div className="nav-logo">LOGO</div>
      <div className="nav-space" />
      <div className="nav-items">
        <ul>
          <li>Dashboard</li>
          <li>Services</li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
