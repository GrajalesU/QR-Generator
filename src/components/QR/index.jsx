import React from "react";
import { Qr } from "../../Models/qr.class";
import "./style.css";

const QR = ({ title, link, primaryColor, secondaryColor, titleColor, tag }) => {
  const QR = new Qr(title, link, primaryColor, secondaryColor);
  QR.generateQR();
  const CustomTag = tag ? `${tag}` : "div";
  return (
    <CustomTag className="QR_card" style={{ background: primaryColor }}>
      <div className="QR_imgDecorator">
        <img src={QR.img.src} alt={`QR of ${title}`} className="QR_card_img" />
      </div>
      <h4 className="QR_card_title" style={{ color: titleColor }}>
        {QR.title}
      </h4>
      <div className="QR_card_menu">
        <div className="QR_card_share">
          <img src="./share.png" alt="share"/>
        </div>
        <div className="QR_card_edit">
          <img src="./edit.png" alt="edit" />
        </div>
      </div>
    </CustomTag>
  );
};

export default QR;
