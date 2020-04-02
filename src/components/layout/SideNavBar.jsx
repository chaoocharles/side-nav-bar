import React from "react";
import "./layout.css";

const SideNavBar = ({ close, display }) => {
  let Classes = "side-nav-bar";
  if (display) {
    Classes = "side-nav-bar open";
  }
  return (
    <nav className={Classes}>
      <ul>
        <li onClick={close}>
          <i className="material-icons">close</i>
        </li>
        <li> Dashboard </li>
        <li> Services</li>
      </ul>
    </nav>
  );
};

export default SideNavBar;
