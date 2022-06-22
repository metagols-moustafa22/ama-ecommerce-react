import React from "react";
import Slider from "react-slick";
import "./SingleCarouselStyles.scss";
import { Button } from "react-bootstrap";

export const SingleCarousel: React.FC = () => {
  const carouselData = [
    { images: "/assets/images/watch.webp", status: "New Product", productname: "HAND WATCH HUBLOT", key: "1" },
    { images: "/assets/images/watch.webp", status: "New Product", productname: "HAND WATCH HUBLOT", key: "2" },
    { images: "/assets/images/watch.webp", status: "New Product", productname: "HAND WATCH HUBLOT", key: "3" },
    { images: "/assets/images/watch.webp", status: "New Product", productname: "HAND WATCH HUBLOT", key: "4" },
    { images: "/assets/images/watch.webp", status: "New Product", productname: "HAND WATCH HUBLOT", key: "5" },
    { images: "/assets/images/watch.webp", status: "New Product", productname: "HAND WATCH HUBLOT", key: "6" },
  ];

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
    infinite: true,
    dots: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    autoplay: false,
    autoplaySpeed: 5000,
    initialSlide: 0,
    adaptiveHeight: true,
  };
  return (
    <div className="SingleCarousel">
      <Slider {...settings}>
        {carouselData.map((el, idx) => (
          <div className="card">
            <img src="/assets/images/watch.webp" alt="" />
            <div className="card-contents">
              <span className="fs-16 status">{el.status}</span>
              <span className="fs-34 productname">{el.productname}</span>
              <Button key={el.key} variant="success">
                Buy Now
              </Button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};
