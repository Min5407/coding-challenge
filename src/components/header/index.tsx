import React, { useState } from "react";
import "./style.css";

const Header = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <header>
      <button className="hamburger" onClick={() => setShowSidebar(true)}>
        hamburger
      </button>
      <div className={`sidebar-container ${showSidebar ? "active" : ""}`}>
        <nav className="hamburger-menu">
          <button onClick={() => setShowSidebar(false)}>close</button>
          <ul>
            <li>
              <a href="/">가공</a>
            </li>
            <li>
              <a href="/">로그아웃</a>
            </li>
          </ul>
        </nav>
      </div>

      <a href="/">
        <b>LALA</b> Medical Center
      </a>
      <nav className="menu">
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
