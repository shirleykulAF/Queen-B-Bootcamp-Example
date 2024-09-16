import React from "react";
import logo from "../assets/logo.png";
import "../styles/Header.css";

const Header = () => {
  return (
    <header>
      <img src={logo} alt="Logo" />
      <nav>
        <ul>
          <li>
            <a href="/about">About Us</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
