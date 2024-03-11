import React from "react";
import { Link } from "react-router-dom";
import "./App.css";
import "./index.css";

const Header = ({ title }) => {
  return (
    <div className="Header">
      <header>
        <h1>{title}</h1>
      </header>
    </div>
  );
};

export default Header;
