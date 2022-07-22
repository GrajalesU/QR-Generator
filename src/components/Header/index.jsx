import React from "react";
import "./style.css";

const Header = () => {
  return (
    <header>
      <h1>QR Generator</h1>
      <span className="logo">
        <img src="./favicon.png" />
      </span>
      <div className="menu">
        <div className="menu_logo">
          <div className="menu_logo_cross">+</div>
        </div>
        {/* <ul>
          <li>Ingresar</li>
          <li>Mis QR</li>
          <li>Generar QR</li>
        </ul> */}
      </div>
    </header>
  );
};

export default Header;
