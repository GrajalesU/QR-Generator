import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";

const Header = () => {
  const [opened, setOpened] = useState(false);
  return (
    <header>
      <h1>QR Generator</h1>
      <span className="logo">
        <img src="./favicon.png" />
      </span>
      <div className="menu">
        <div className="menu_logo">
          <p className={opened ? "menu_logo_cross x" : "menu_logo_cross"}>+</p>
          <input
            type="checkbox"
            name=""
            onChange={() => {
              setOpened(!opened);
            }}
          />
          <ul>
            <li>
              <Link to={"/login"}>Log in</Link>
            </li>
            <li>
              <Link to="/">My QR's</Link>
            </li>
            <li>
              <Link to={"/add"}>Generate QR</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
