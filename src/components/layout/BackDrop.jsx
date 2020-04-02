import React from "react";
import "./layout.css";

const BackDrop = ({ close }) => {
  return <div onClick={close} className="backdrop" />;
};

export default BackDrop;
