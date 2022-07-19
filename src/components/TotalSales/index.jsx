import React from "react";
import Icons from "../Icons";
import "./TotalSales.css";

function TotalSales(props) {
  const { totalSales, x512K, className, description } = props;

  return (
    <div className={`total-sales border-1px-limed-spruce ${className || ""}`}>
      <div className="label-1">
        <div className="hoverInfo"><p className="mulish-bold-white-16px">{description}</p></div>
        <div className="total-sales-1 mulish-bold-white-16px">{totalSales}</div>
        <div className="x512-k mulish-bold-white-23px">{x512K}</div>
      </div>
    </div>
  );
}

export default TotalSales;
