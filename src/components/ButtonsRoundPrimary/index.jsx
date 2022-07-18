import React from "react";
import "./ButtonsRoundPrimary.css";

function ButtonsRoundPrimary(props) {
  const { children, className } = props;

  return (
    <div className={`buttons-round-primary ${className || ""}`}>
      <div className="try-it-free dmsans-bold-white-18px">{children}</div>
    </div>
  );
}

export default ButtonsRoundPrimary;
