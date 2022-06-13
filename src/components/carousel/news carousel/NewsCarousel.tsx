import React from "react";
import Slider from "react-slick";
import "./NewsCarouselStyles.scss";

export const NewsCarousel: React.FC = () => {
  function NextArrow(props: any) {
    const { className, style, onClick } = props;
    return <button className="carousel-btn next-btn" onClick={onClick}></button>;
  }

  function PrevArrow(props: any) {
    const { className, style, onClick } = props;
    return <button className="carousel-btn prev-btn" onClick={onClick}></button>;
  }

  const settings = {
    infinite: true,
    dots: false,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <div>
      <Slider {...settings}>
        <div>
          <div className="rest">
            <img src="/assets/images/Image.png" alt="" />
          </div>
        </div>
        <div>
          <div className="rest">
            <img src="/assets/images/Image.png" alt="" />
          </div>
        </div>
        <div>
          <div className="rest">
            <img src="/assets/images/Image.png" alt="" />
          </div>
        </div>
      </Slider>
    </div>
  );
};
