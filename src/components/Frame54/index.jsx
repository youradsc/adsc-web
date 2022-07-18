import React from "react";
import "./Frame54.css";

function Frame54(props) {
  const { children, className } = props;

  return (
    <div className={`frame-54 ${className || ""}`}>
      <div className="sold">{children}</div>
    </div>
  );
}

export default Frame54;
