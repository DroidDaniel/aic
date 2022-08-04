import React from "react";
import "./CaroselMobile.css";
import Slider from "react-slick";
import "../../node_modules/slick-carousel/slick/slick.css";
import "../../node_modules/slick-carousel/slick/slick-theme.css";
import Bannermb1 from "../images/banner-mb-1.png";

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
          slidesToShow: 1,
          slidesToScroll: 1,
          vertical: false,
        },
      },
    ],
  };

  return (
    <section className="bannersection" id="aicbanner">
      <div className="banner_container-mb">
        <div className="aic__common_container">
          <Slider {...settings}>
            <div>
              <img src={Bannermb1} alt="banner" />
            </div>
            <div>
              <img src={Bannermb1} alt="banner" />
            </div>
            <div>
              <img src={Bannermb1} alt="banner" />
            </div>
            <div>
              <img src={Bannermb1} alt="banner" />
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
}

export default CaroselMobile;