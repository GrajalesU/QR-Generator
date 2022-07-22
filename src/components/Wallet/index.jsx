import React from "react";
import QR from "../QR";
import { Wallet as WalletM } from "../../Models/wallet.class";
import "./style.css";
const Wallet = () => {
  const Wallet = new WalletM([
    { qr: { link: "https://www.google.com/", title: "google" }, index: "0" },
    { qr: { link: "https://www.google.com/", title: "google" }, index: "0" },
    { qr: { link: "https://www.google.com/", title: "google" }, index: "0" },
    {
      qr: {
        link: "https://www.facebook.com/",
        title: "facebook",
        primaryColor: "#3b5998",
      },
      index: "1",
    },
    {
      qr: {
        link: "https://www.instagram.com/",
        title: "instagram",
        primaryColor: "#e1306c",
      },
      index: "2",
    },
    {
      qr: {
        link: "https://www.twitter.com/",
        title: "twitter",
        primaryColor: "#1da1f2",
      },
      index: "3",
    },
    {
      qr: {
        link: "https://www.youtube.com/",
        title: "youtube",
        primaryColor: "#ff0000",
      },
      index: "4",
    },
  ]);
  return (
    <div className="wallet">
      <h2 className="wallet_title">Your QRs</h2>
      <div>
        <ul className="wallet_list">
          {Wallet.QRList.map((element) => (
            <QR
              key={element.index}
              title={element.qr.title}
              link={element.qr.link}
              primaryColor={element.qr.primaryColor}
              secondaryColor={element.qr.secondaryColor}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Wallet;
