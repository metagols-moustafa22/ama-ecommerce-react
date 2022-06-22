import React from "react";
import "./SimplecardStyles.scss";
export const Simplecard = ({ width, height, img }: any) => {
  return (
    <div style={{ width: width, height: height }} className="Simplecard mb-4">
      <img src={img} alt="" />
      <div className="card-contents">
        <span className="fs-12 status">Big deal</span>
        <span className="fs-16 discribtion">Christmas Holidays</span>
        <span className="fs-16 offer">Buy 1 Get 1</span>
      </div>
    </div>
  );
};
