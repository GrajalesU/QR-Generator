import React, { useRef, useState } from "react";
import QR from "../QR";
import "./style.css";
import { useLiveQuery } from "dexie-react-hooks";
import { db } from "../../DB/db";
import NoContent from "../NoContent";

const Wallet = () => {
  const wallet = useLiveQuery(async () => {
    return await db.qr.toArray();
  });

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
        {wallet?.length ? (
          <>
            <ul ref={list} className="wallet_list">
              {wallet?.map((element) => (
                <QR
                  key={element.id}
                  id={element.id}
                  tag="li"
                  title={element.title}
                  link={element.link}
                  titleColor={element.titleColor}
                  primaryColor={element.primaryColor}
                  secondaryColor={element.secondaryColor}
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
          </>
        ) : (
          <NoContent />
        )}
      </div>
    </div>
  );
};

export default Wallet;
