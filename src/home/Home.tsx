import React from "react";
import { NewsCarousel } from "../components/carousel/news carousel/NewsCarousel";
import "./HomeStyles.scss";
import { Row, Col } from "react-bootstrap";
import { PortraitCard } from "../components/portrait-card/PortraitCard";
import { SingleCarousel } from "../components/carousel/single carousel/SingleCarousel";
import { Simplecard } from "../components/simplecard/Simplecard";

export const Home: React.FC = () => {
  const simplecardData1 = [
    { image: "/assets/images/center-left.png", key: "1" },
    { image: "/assets/images/center-left.png", key: "2" },
    { image: "/assets/images/center-left.png", key: "3" },
  ];
  const simplecardData2 = [
    { image: "/assets/images/center-left.png", key: "1" },
    { image: "/assets/images/center-left.png", key: "2" },
    { image: "/assets/images/center-left.png", key: "3" },
  ];
  return (
    <div id="Home">
      <Row>
        <Col>
          <PortraitCard />
        </Col>
        <Col>
          <SingleCarousel />
          <div className="d-flex" style={{ gap: "24px" }}>
            {simplecardData2.map((el) => (
              <Simplecard width={"270px"} height={"172px"} img={el.image} />
            ))}
          </div>
        </Col>

        <Col>
          <div className="d-flex flex-column">
            {simplecardData1.map((el) => (
              <Simplecard width={"194px"} height={"172px"} img={el.image} />
            ))}
          </div>
        </Col>
      </Row>
    </div>
  );
};
