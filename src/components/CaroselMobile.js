import React from "react";
import "./CaroselMobile.css";
import Slider from "react-slick";
import "../../node_modules/slick-carousel/slick/slick.css";
import "../../node_modules/slick-carousel/slick/slick-theme.css";
import Bannermb1 from "../images/banner-mb-1.png";
import Bannermb2 from "../images/banner-mb-2.png";
import Bannermb3 from "../images/banner-mb-3.png";
import Bannermb4 from "../images/banner-mb-4.png";
import JoinRevolution from "./JoinRevolution";

function CaroselMobile() {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          dots: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          vertical: false,
          swipeToSlide: true,
        },
      },
    ],
  };

  return (
    <section className="bannersection" id="aicbanner">
      <div className="banner_container-mb">
        <div className="aic__common_container">
          <Slider {...settings}>
            <div className="banner__slider">
              <img src={Bannermb1} alt="banner" />
              <JoinRevolution />
            </div>
            <div className="banner__slider">
              <img src={Bannermb2} alt="banner" />
              <JoinRevolution />
            </div>
            <div className="banner__slider">
              <img src={Bannermb3} alt="banner" />
              <JoinRevolution />
            </div>
            <div className="banner__slider">
              <img src={Bannermb4} alt="banner" />
              <JoinRevolution />
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
}

export default CaroselMobile;
