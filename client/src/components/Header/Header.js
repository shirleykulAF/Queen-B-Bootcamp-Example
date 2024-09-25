import React from "react";
import logo from "../../assets/logo.png";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <a href="/">
        <img src={logo} alt="Logo" />
      </a>
      <nav>
        <ul className="home-ul">
          <li>
            <a href="/">Home</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
