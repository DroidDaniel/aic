import React from "react";
import Slider from "react-slick";
import "../../node_modules/slick-carousel/slick/slick.css";
import "../../node_modules/slick-carousel/slick/slick-theme.css";
import "./CarouselDesktop.css";
import Banner1 from "../images/banner1.png";
import Banner2 from "../images/banner2.png";
import Banner3 from "../images/banner3.png";
import Banner4 from "../images/banner4.png";

function CarouselDesktop() {
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
          slidesToShow: 1,
          slidesToScroll: 1,
          vertical: false,
        },
      },
    ],
  };

  return (
    <section className="bannersection" id="aicbanner">
      <div className="banner_container">
        <div className="aic__common_container">
          <Slider {...settings}>
            <div>
              <img src={Banner1} alt="banner" />
            </div>
            <div>
              <img src={Banner2} alt="banner" />
            </div>
            <div>
              <img src={Banner3} alt="banner" />
            </div>
            <div>
              <img src={Banner4} alt="banner" />
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
}

export default CarouselDesktop;
