import React from "react";
import "./X3.css";

function X3(props) {
  const { name, leslieAGmailCom, className } = props;

  return (
    <div className={`costumers-list-item-1-1 ${className || ""}`}>
      <img className="icon-information" src="/img/image-2@2x.svg" />
      <div className="detail-3">
        <div className="name-4 mulish-bold-white-16px">{name}</div>
        <div className="leslieagmailcom mulish-bold-white-13-3px">{leslieAGmailCom}</div>
      </div>
    </div>
  );
}

export default X3;
