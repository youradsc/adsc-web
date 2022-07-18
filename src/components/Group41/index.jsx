import React from "react";
import "./Group41.css";

function Group41(props) {
  const { iconBar_Chart, intuitiveDesign, className } = props;

  return (
    <div className={`group-41 ${className || ""}`}>
      <div className="overlap-group-6">
        <img className="icon-bar_chart" src={iconBar_Chart} />
      </div>
      <div className="intuitive-design dmsans-bold-waterloo--18px">{intuitiveDesign}</div>
    </div>
  );
}

export default Group41;
