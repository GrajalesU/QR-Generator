import React, { useRef, useState } from "react";
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
  const [animation, setAnimation] = useState(false);
  const list = useRef(null);
  const handleScrollLeft = () => {
    const { scrollLeft } = list.current;
    scrollLeft > 0 ? (list.current.scrollLeft -= 10) : null;
  };

  const handleScrollRight = () => {
    const { scrollLeft, scrollWidth, clientWidth } = list.current;
    scrollLeft + clientWidth < scrollWidth
      ? (list.current.scrollLeft += 10)
      : null;
  };

  const handleHover = (right) => {
    const hover = setInterval(right ? handleScrollRight : handleScrollLeft, 10);
    setAnimation(hover);
  };

  const handleLeave = () => {
    animation && clearInterval(animation);
  };

  return (
    <div className="wallet">
      <h2 className="wallet_title">Your QRs</h2>
      <div>
        <ul ref={list} className="wallet_list">
          {Wallet.QRList.map((element) => (
            <QR
              key={element.index}
              tag="li"
              title={element.qr.title}
              link={element.qr.link}
              primaryColor={element.qr.primaryColor}
              secondaryColor={element.qr.secondaryColor}
            />
          ))}
        </ul>
        <div className="wallet_slider_controller">
          <button
            onMouseEnter={() => handleHover(false)}
            onMouseLeave={handleLeave}
          >
            ⬅️
          </button>
          <button
            onMouseEnter={() => handleHover(true)}
            onMouseLeave={handleLeave}
          >
            ➡️
          </button>
        </div>
      </div>
    </div>
  );
};

export default Wallet;
