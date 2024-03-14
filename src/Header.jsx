import React from "react";
import { Link } from "react-router-dom";
import "./App.css";
import "./index.css";

const Header = ({ title, width }) => {
  return (
    <div className="Header">
      <header style={{ display: "flex", justifyContent: "space-between" }}>
        <h1>{title}</h1>
        {width < 750 && <p>mobile</p>}
        {width > 750 && width < 850 && <p>tablet</p>}
        {width >= 850 && <p>computer</p>}
      </header>
    </div>
  );
};

export default Header;
