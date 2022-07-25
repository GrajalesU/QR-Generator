import React from "react";
import "./styles.css";

const QRForm = () => {
  return (
    <div className="qr_form">
      <h2>Create a new QR</h2>
      <form>
        <div className="qr_form_link">
          <label htmlFor="Link">Link</label>
          <input id="Link" type="text" />
          <small>Example: https://grajalesu.github.io/portfolio/</small>
        </div>
        <div className="qr_form_title">
          <div className="qr_form_title_text">
            <label htmlFor="Title">Title</label>
            <input type="text" id="Title" />
            <small>Example: Portfolio</small>
          </div>
          <div className="qr_form_title_color">
            <label htmlFor="Title Color">Color</label>
            <input id="Title Color" type="color" />
          </div>
        </div>
        <div className="qr_form_colors">
          <div className="qr_form_colors_section">
            <label htmlFor="Primary Color">Primary Color</label>
            <input id="Primary Color" type="color" />
          </div>
          <div className="qr_form_colors_section">
            <label htmlFor="Secondary Color">Secondary Color</label>
            <input id="Secondary Color" type="color" />
          </div>
        </div>
        <button>Create</button>
      </form>
    </div>
  );
};

export default QRForm;
