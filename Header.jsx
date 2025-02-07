import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      {/* Title */}
      <h1 className="title">WorkSphere </h1>
      
      {/* Navigation Menu */}
      <nav>
        <ul className="nav-menu">
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Features</li>
          <li>Blog</li>
          <li>Contact Us</li>
        </ul>
      </nav>
      
      {/* Let's Talk Button */}
      <button className="talk-button">LET'S TALK</button>
    </header>
  );
};

export default Header;
