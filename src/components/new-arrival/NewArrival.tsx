import React from "react";
import { CardDetail } from "../carddetails/CardDetail";
import { Button } from "react-bootstrap";
import { enKey } from "../../utils/languages/en";
import { useTranslation } from "react-i18next";
import "./NewArrivalStyles.scss";
import moment from "moment";
import { useState, useEffect } from "react";

export const NewArrival: React.FC = () => {
  const targetTime = new Date("2022-10-01").getTime();
  const [currentTime, setCurrentTime] = useState(Date.now());
  const timeBetween = targetTime - currentTime;
  const seconds = Math.floor((timeBetween / 1000) % 60);
  const minutes = Math.floor((timeBetween / 1000 / 60) % 60);
  const hours = Math.floor((timeBetween / (1000 * 60 * 60)) % 24);
  const days = Math.floor(timeBetween / (1000 * 60 * 60 * 24));

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(Date.now());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const { t } = useTranslation();
  const newArrivalData = [
    {
      img: "/assets/images/Image6.png",
      productname: "Apple iMac MWTJ2SA/A Space Grey (2020)",
      price: "514.51",
      prevoius_price: "700",
      in_stock: 300,
      sold: 700,
    },
    {
      img: "/assets/images/Image5.png",
      productname: "Apple Watch Series 5 MWV62VN/A",
      price: "1,099",
      prevoius_price: "1200",
      in_stock: 500,
      sold: 300,
    },
    {
      img: "/assets/images/Image5.png",
      productname: "Apple Watch Series 5 MWV62VN/A",
      price: "1,099",
      prevoius_price: "1200",
      in_stock: 300,
      sold: 700,
    },
  ];
  return (
    <div className="newArrival">
      <div className="header">
        <span className="fs-20 fc-black">منتجات وصلتنا حديثاً</span>

        <Button variant="transparent" className="fc-secondary fs-14">
          {t(enKey.btn_see_all)}
        </Button>
      </div>
      <div className="d-flex" style={{ gap: "8px", overflowX: "scroll" }}>
        {newArrivalData.map((el) => (
          <CardDetail
            width="270px"
            height="270px"
            img={el.img}
            component={
              <div
                className="d-flex flex-column justify-content-between"
                style={{ width: "280px", wordBreak: "break-word" }}
              >
                <span className="fs-14 fc-primary">{el.productname}</span>
                <div className="d-flex align-items-center" style={{ gap: "10px" }}>
                  <span className="fs-20 fc-secondary" style={{ fontWeight: 600 }}>
                    ${el.price}
                  </span>
                  <span className="previousprice fs-12 fc-secondary">${el.prevoius_price}</span>
                </div>
                <div>
                  <div className="d-flex justify-content-between">
                    <span className="fc-gray" style={{ fontWeight: 400 }}>
                      تم البيع:&nbsp;<span style={{ fontWeight: 800 }}>{el.sold}</span>
                    </span>
                    <span className="fc-gray" style={{ fontWeight: 400 }}>
                      متاح::&nbsp;<span style={{ fontWeight: 800 }}>{el.in_stock}</span>
                    </span>
                  </div>
                  <input
                    type="range"
                    value={el.sold}
                    min="0"
                    max={el.in_stock + el.sold}
                    step="1"
                    id="np-volume"
                    className="stockRange"
                  />
                </div>

                <div className="d-flex" style={{ gap: "20px" }}>
                  <div className="d-flex flex-column justify-content-center align-items-center">
                    <div className="time-block">{days}</div>
                    <span className="fc-gray">اليوم</span>
                  </div>
                  <div className="d-flex flex-column justify-content-center align-items-center">
                    <div className="time-block">{hours}</div>
                    <span className="fc-gray">الساعة</span>
                  </div>
                  <div className="d-flex flex-column justify-content-center align-items-center">
                    <div className="time-block">{minutes}</div>
                    <span className="fc-gray">الدقيقة</span>
                  </div>
                  <div className="d-flex flex-column justify-content-center align-items-center">
                    <div className="time-block">{seconds}</div>
                    <span className="fc-gray">الثانية</span>
                  </div>
                </div>
                <Button variant="success">{t(enKey.btn_add_to_cart)}</Button>
              </div>
            }
          />
        ))}
      </div>
    </div>
  );
};
