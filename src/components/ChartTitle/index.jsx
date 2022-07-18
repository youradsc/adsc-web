import React from "react";
import "./ChartTitle.css";

function ChartTitle(props) {
  const { className } = props;

  return (
    <div className={`chart-title-4 ${className || ""}`}>
      <div className="chart-title-5 mulish-semi-bold-cararra-12px">CHART TITLE</div>
      <div className="text-2 mulish-bold-cararra-24px">2,643</div>
    </div>
  );
}

export default ChartTitle;
