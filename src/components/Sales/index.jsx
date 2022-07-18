import React from "react";
import "./Sales.css";

function Sales(props) {
  const { children, className } = props;

  return (
    <div className={`legend-item-1 ${className || ""}`}>
      <div className="ellipse-2"></div>
      <div className="place-2 mulish-bold-white-16px">{children}</div>
    </div>
  );
}

export default Sales;
