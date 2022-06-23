import React from "react";
import { Button } from "react-bootstrap";
import "./LandScapeCardStyles.scss";
import { CardDetail } from "../carddetails/CardDetail";
import { useTranslation } from "react-i18next";
import { enKey } from "../../utils/languages/en";

export const LandScapeCard = () => {
  const { t } = useTranslation();
  const landScapeCardData = [
    {
      image: "/assets/images/Image3.png",
      title: "صفقات ساخنة",
      title1: "العودة إلى المدرسة",
      title2: "خصم يبدأ من 50%",
      btn: t(enKey.btn_order_now),
      key: 1,
    },
    {
      image: "/assets/images/Image4.png",
      title: "الأكثر رواجًا",
      title1: "تجربة التكنولوجيا الجديدة",
      title2: "مستقبل أكثر إشراقًا",
      btn: t(enKey.btn_order_now),
      key: 2,
    },
    {
      image: "/assets/images/Image3.png",
      title: "صفقات ساخنة",
      title1: "العودة إلى المدرسة",
      title2: "خصم يبدأ من 50%",
      btn: t(enKey.btn_order_now),
      key: 1,
    },
    {
      image: "/assets/images/Image4.png",
      title: "الأكثر رواجًا",
      title1: "تجربة التكنولوجيا الجديدة",
      title2: "مستقبل أكثر إشراقًا",
      btn: t(enKey.btn_order_now),
      key: 2,
    },
  ];

  return (
    <div className="d-flex card-detail-wrapper" style={{ gap: "24px", marginTop: "24px" }}>
      {landScapeCardData.map((el) => (
        <div className="landscape-card">
          <img src={el.image} alt={el.image} />
          <div className="landscape-card-contents">
            <span className="title fs-16 fc-white">{el.title}</span>
            <span className="title2 fc-white fs-20">{el.title1}</span>
            <span className="title3 fc-white fs-20">{el.title2}</span>
            <Button key={el.key} variant="success" className="fs-14">
              {el.btn}
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};
