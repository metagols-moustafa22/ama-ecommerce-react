import React from "react";
import "./CardDetailStyles.scss";

export const CardDetail = ({ width, height, img, component, dir }: any) => {
  if (dir === "vertical") {
    dir = "flex-column";
  } else if (dir === "horizontal") {
    dir = "flex-row";
  } else {
    dir = "flex-row";
  }
  return (
    <div className={`d-flex ${dir}`} style={{ gap: "8px" }}>
      <div className="CardDetail" style={{ width: width, height: height }}>
        <img src={img} alt="" />
      </div>
      {component}
    </div>
  );
};
