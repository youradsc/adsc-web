import React from "react";
import "./ButtonsPrimaryIcon.css";

function ButtonsPrimaryIcon(props) {
  const { tryItFree, iconsSolidRight } = props;

  return (
    <div className="buttons-primary-icon">
      <div className="frame-250">
        <div className="try-it-free-2 dmsans-bold-white-18px">{tryItFree}</div>
        <img className="icons-solid-right" src={iconsSolidRight} />
      </div>
    </div>
  );
}

export default ButtonsPrimaryIcon;
