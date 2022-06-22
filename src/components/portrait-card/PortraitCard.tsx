import React from "react";
import "./PortraitCardStyles.scss";
import { Button } from "react-bootstrap";

export const PortraitCard: React.FC = () => {
  return (
    <div className="portraitcard">
      <img src="/assets/images/stand.png" alt="" />

      <div className="card-contents">
        <div className="fs-20 discribtion">Super Sale Playstation 4</div>
        <Button variant="success" className="fs-14">
          Order Now
        </Button>
      </div>
    </div>
  );
};
