import React from "react";
import "./Group72.css";

function Group72(props) {
  const { pending, price } = props;

  return (
    <div className="group-72">
      <div className="invested dmsans-bold-pale-sky-16px">{pending}</div>
      <div className="price-9 dmsans-bold-white-23px">{price}</div>
    </div>
  );
}

export default Group72;
