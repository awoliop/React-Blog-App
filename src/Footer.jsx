import React from "react";

const Footer = () => {
  const date = new Date();
  return (
    <footer className="footer">
      <h1>CopyRight &copy; {date.getFullYear()}</h1>
    </footer>
  );
};

export default Footer;
