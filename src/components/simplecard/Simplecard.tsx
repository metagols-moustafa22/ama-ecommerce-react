import React from "react";
import "./SimplecardStyles.scss";
export const Simplecard = ({ width, height, img, status, text, offer }: any) => {
  return (
    <div style={{ width: width, height: height }} className="Simplecard mb-4">
      <img src={img} alt="" />
      <div className="card-contents">
        <span className="fs-12 status">{status}</span>
        <span className="fs-16 discribtion">{text}</span>
        <span className="fs-16 offer">{offer}</span>
      </div>
    </div>
  );
};
