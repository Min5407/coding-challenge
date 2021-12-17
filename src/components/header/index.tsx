import React from "react";
import "./style.css";

const Header = () => {
  return (
    <header>
      <a href="/">
        <b>LALA</b> Medical Center
      </a>
      <nav>
        <ul>
          <li>
            <a href="/">가공</a>
          </li>
          <li>
            <a href="/">로그아웃</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
