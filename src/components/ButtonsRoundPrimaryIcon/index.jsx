import React from "react";
import "./ButtonsRoundPrimaryIcon.css";

function ButtonsRoundPrimaryIcon(props) {
  const { tryItFree, iconsSolidApple } = props;

  return (
    <div className="buttons-round-primary-icon">
      <div className="try-it-free-1 dmsans-bold-white-18px">{tryItFree}</div>
      <img className="icons-solid-apple" src={iconsSolidApple} />
    </div>
  );
}

export default ButtonsRoundPrimaryIcon;
