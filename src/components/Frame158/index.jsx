import React from "react";
import "./Frame158.css";

function Frame158(props) {
  const { iconCart, easyProductSelection } = props;

  return (
    <div className="frame-158">
      <div className="group">
        <img className="icon-cart" src={iconCart} />
      </div>
      <div className="easy dmsans-normal-white-20px">{easyProductSelection}</div>
    </div>
  );
}

export default Frame158;
