import React from "react";

const QRForm = () => {
  return (
    <div className="qr_form">
      <h2>Create a new QR</h2>
      <form>
        <div className="form_qr_link">
          <label htmlFor="Link">Link</label>
          <input id="Link" type="text" />
        </div>
        <div className="form_qr_title">
          <label htmlFor="Title">Title</label>
          <input type="text" id="Title" />
          <label htmlFor="Title Color">Title Color</label>
          <input id="Title Color" type="color" />
        </div>
        <div className="form_qr_colors">
          <label htmlFor="Primary Color">Primary Color</label>
          <input id="Primary Color" type="color" />
          <label htmlFor="Secondary Color">Secondary Color</label>
          <input id="Secondary Color" type="color" />
        </div>
        <button>Create</button>
      </form>
    </div>
  );
};

export default QRForm;
