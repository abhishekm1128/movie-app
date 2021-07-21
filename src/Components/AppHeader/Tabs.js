import React from "react";
import { Link } from "react-router-dom";
import "./Tabs.css";

const Tabs = ({ label, link }) => {
  return (
    <Link className="tab" to={link}>
      <span className="tab">{label}</span>
    </Link>
  );
};

export default Tabs;
