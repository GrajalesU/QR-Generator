import React from "react";
import "./style.css";

const Header = () => {
  return (
    <header>
      <h1>QR Generator</h1>
      <span className="logo">
        <img src="./favicon.png" />
      </span>
      <ul className="menu">
        <li>Ingresar</li>
        <li>Mis QR</li>
        <li>Generar QR</li>
      </ul>
    </header>
  );
};

export default Header;
