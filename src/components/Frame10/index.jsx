import React from "react";
import "./Frame10.css";

function Frame10(props) {
  const { children } = props;

  return (
    <div className="frame-1">
      <div className="step dmsans-bold-white-14px">{children}</div>
    </div>
  );
}

export default Frame10;
