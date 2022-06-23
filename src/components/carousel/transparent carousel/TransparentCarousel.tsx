import React, { useState } from "react";
import Slider from "react-slick";
import "./TransparentCarouselStyles.scss";
import { Button } from "react-bootstrap";
import { CardDetail } from "../../carddetails/CardDetail";
import { useTranslation } from "react-i18next";
import { enKey } from "../../../utils/languages/en";

export const TranspatentCarousel: React.FC = () => {
  const { t } = useTranslation();
  const [imageIndex, setimageIndex] = useState(2);

  function NextArrow(props: any) {
    const { className, style, onClick } = props;
    return (
      <button className="carousel-btn next-btn" onClick={onClick}>
        &#62;
      </button>
    );
  }

  function PrevArrow(props: any) {
    const { className, style, onClick } = props;
    return (
      <button className="carousel-btn prev-btn" onClick={onClick}>
        &#60;
      </button>
    );
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    // nextArrow: <NextArrow />,
    // prevArrow: <PrevArrow />,
  };

  const CarouselData = [
    // { name: "Real Estate", icon: "/assets/icons/real-estate.svg" },
    { name: "ساعات", icon: "/assets/icons/watch.svg" },
    { name: "نظارات", icon: "/assets/icons/glasses.svg" },
    { name: "تكنولوجيا", icon: "/assets/icons/technology.svg" },
    // { name: "Luxury Brands", icon: "/assets/icons/drink.svg" },
    { name: "أثاث", icon: "/assets/icons/Furniture.svg" },
    { name: "كتب", icon: "/assets/icons/Book.svg" },
    { name: "منتجات التجميل", icon: "/assets/icons/cosmetic.svg" },
  ];

  const productData = [
    {
      img: "/assets/images/Image2.png",
      productdesc: "Apple Macbook Pro 2019 MWP42SA/A",
      current_price: "2,013.54",
      previous_price: "",
      manufactorer: "Co., Apple Store",
    },
    {
      img: "/assets/images/Image2.png",
      productdesc: "Apple Macbook Pro 2019 MWP42SA/A",
      current_price: "2,013.54",
      previous_price: "3,000",
      manufactorer: "Co., Apple Store",
    },
    {
      img: "/assets/images/Image2.png",
      productdesc: "Apple Macbook Pro 2019 MWP42SA/A",
      current_price: "2,013.54",
      previous_price: "",
      manufactorer: "Co., Apple Store",
    },
    {
      img: "/assets/images/Image2.png",
      productdesc: "Apple Macbook Pro 2019 MWP42SA/A",
      current_price: "2,013.54",
      previous_price: "",
      manufactorer: "Co., Apple Store",
    },
    {
      img: "/assets/images/Image2.png",
      productdesc: "Apple Macbook Pro 2019 MWP42SA/A",
      current_price: "2,013.54",
      previous_price: "",
      manufactorer: "Co., Apple Store",
    },
    {
      img: "/assets/images/Image2.png",
      productdesc: "Apple Macbook Pro 2019 MWP42SA/A",
      current_price: "2,013.54",
      previous_price: "",
      manufactorer: "Co., Apple Store",
    },
    {
      img: "/assets/images/Image2.png",
      productdesc: "Apple Macbook Pro 2019 MWP42SA/A",
      current_price: "2,013.54",
      previous_price: "",
      manufactorer: "Co., Apple Store",
    },
    {
      img: "/assets/images/Image2.png",
      productdesc: "Apple Macbook Pro 2019 MWP42SA/A",
      current_price: "2,013.54",
      previous_price: "",
      manufactorer: "Co., Apple Store",
    },
  ];

  return (
    <>
      <div id="TransparentCarousel">
        <div className="header">
          <span className="fs-20 fc-black">تسوق حسب الفئات</span>
          <Button variant="transparent" className="fc-secondary fs-14">
            {t(enKey.btn_see_all)}
          </Button>
        </div>

        <Slider {...settings}>
          {CarouselData.map((el, idx) => (
            <div className={`card ${idx === imageIndex ? "activeSlide" : ""}`}>
              <div className="card-contents">
                <img src={el.icon} alt="" />
                <span className="fs-20 fc-secondary">{el.name}</span>
              </div>
            </div>
          ))}
        </Slider>
        <div className="d-flex card-detail-wrapper" style={{ gap: "24px", marginTop: "24px" }}>
          {productData.map((el) => (
            <CardDetail
              width="175px"
              height="172px"
              img={el.img}
              dir={"vertical"}
              component={
                <div className="d-flex flex-column" style={{ gap: "8px", width: 175, wordBreak: "break-word" }}>
                  <span className="fs-14 fc-primary">{el.productdesc}</span>
                  <span className="fs-20">${el.current_price} </span>
                  {el.previous_price && <span className="previousprice">${el.previous_price}</span>}
                  <span className="fs-12">
                    <span className="fc-gray"> يتم البيع عبر</span>
                    &nbsp;<span className="fc-blue">{el.manufactorer}</span>
                  </span>
                </div>
              }
            />
          ))}
        </div>
      </div>
    </>
  );
};
