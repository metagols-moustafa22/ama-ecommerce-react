import React from "react";
import "./HomeStyles.scss";
import { Row, Col, Button, Container } from "react-bootstrap";
import { PortraitCard } from "../components/portrait-card/PortraitCard";
import { SingleCarousel } from "../components/carousel/single carousel/SingleCarousel";
import { Simplecard } from "../components/simplecard/Simplecard";
import { TranspatentCarousel } from "../components/carousel/transparent carousel/TransparentCarousel";
import { LandScapeCard } from "../components/landscape-card/LandScapeCard";
import { NewArrival } from "../components/new-arrival/NewArrival";
import { enKey } from "../utils/languages/en";
import { useTranslation } from "react-i18next";

export const Home: React.FC = () => {
  const { t } = useTranslation();
  const simplecardData1 = [
    {
      image: "/assets/images/center-left.png",
      key: "1",
      status: "منتج جديد",
      text: "عطلة عيد الميلاد",
      offer: "المغذيات الدقيقة المكملات",
    },
    {
      image: "/assets/images/center-left.png",
      key: "1",
      status: "منتج جديد",
      text: "عطلة عيد الميلاد",
      offer: "المغذيات الدقيقة المكملات",
    },
    {
      image: "/assets/images/center-left.png",
      key: "1",
      status: "منتج جديد",
      text: "عطلة عيد الميلاد",
      offer: "المغذيات الدقيقة المكملات",
    },
  ];
  const simplecardData2 = [
    {
      image: "/assets/images/center-left.png",
      key: "1",
      status: "منتج جديد",
      text: "عطلة عيد الميلاد",
      offer: "المغذيات الدقيقة المكملات",
    },
    {
      image: "/assets/images/center-left.png",
      key: "1",
      status: "منتج جديد",
      text: "عطلة عيد الميلاد",
      offer: "المغذيات الدقيقة المكملات",
    },
    {
      image: "/assets/images/center-left.png",
      key: "1",
      status: "منتج جديد",
      text: "عطلة عيد الميلاد",
      offer: "المغذيات الدقيقة المكملات",
    },
  ];

  return (
    <div id="Home">
      <Container>
        <section>
          <Row>
            <Col>
              <PortraitCard />
            </Col>
            <Col>
              <SingleCarousel />
              <div className="d-flex" style={{ gap: "24px" }}>
                {simplecardData2.map((el) => (
                  <Simplecard
                    width={"270px"}
                    height={"172px"}
                    img={el.image}
                    status={el.status}
                    text={el.text}
                    offer={el.offer}
                  />
                ))}
              </div>
            </Col>

            <Col>
              <div className="d-flex flex-column">
                {simplecardData1.map((el) => (
                  <Simplecard
                    width={"194px"}
                    height={"172px"}
                    img={el.image}
                    status={el.status}
                    text={el.text}
                    offer={el.offer}
                  />
                ))}
              </div>
            </Col>
          </Row>
        </section>
        <section>
          <div id="ShopByCategory">
            <TranspatentCarousel />
          </div>
        </section>
        <section>
          <div id="landScapeCards">
            <LandScapeCard />
          </div>
        </section>
        <section>
          <div id="NewArrival">
            <NewArrival />
          </div>
        </section>
      </Container>
      <section>
        <div id="exporeMore">
          <img src="/assets/images/fullwidthimage.svg" alt="" />
          <div className="exploremore-contents d-flex flex-column align-items-start" style={{ gap: "30px" }}>
            <div className="offer-price">خصم يبدأ من 50%</div>
            <span className="fs-34 fc-white" style={{ maxWidth: "450px", wordBreak: "break-word" }}>
              محافظ وحقائب جديدة لا تفوت هذه العروض
            </span>
            <Button variant="success">{t(enKey.btn_explore_more)}</Button>
          </div>
        </div>
      </section>
      <Container>
        <section>
          <div id="NewArrival">
            <NewArrival />
          </div>
        </section>
      </Container>
    </div>
  );
};
