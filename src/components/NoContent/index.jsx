import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";
const NoContent = () => {
  return (
    <div className="noContent">
      <strong className="noContent_text">
        You still do not have any QR stored, come on, enter{" "}
        <Link to="/add" className="noContent_link">
          HERE{" "}
        </Link>
        and encourage yourself to create one to store it in the wallet
      </strong>
    </div>
  );
};

export default NoContent;
