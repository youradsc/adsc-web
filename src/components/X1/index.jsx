import React from "react";
import "./X1.css";

function X1(props) {
  const { nikeAirJordan, number1, number2, price } = props;

  return (
    <div className="table-data-item">
      <div className="nike-air-jordan mulish-bold-white-13-3px">{nikeAirJordan}</div>
      <div className="number-1 mulish-bold-white-13-3px">{number1}</div>
      <div className="number-1 mulish-bold-white-13-3px">{number2}</div>
      <div className="price-3 mulish-bold-white-13-3px">{price}</div>
      <div className="in-stock mulish-bold-chateau-green-13-3px">In Stock</div>
    </div>
  );
}

export default X1;
