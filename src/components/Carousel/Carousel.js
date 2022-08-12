import React from "react";
import CarouselDesktop from "./CarouselDesktop";
import CaroselMobile from "./CaroselMobile";
import ScrollDownIcon from "../ScrollDown/ScrollDownIcon";
import "./Carousel.css";

function Carousel() {
  return (
    <div className="banner__common_container">
      <div className="banner__dktp">
        <CarouselDesktop />
      </div>
      <div className="banner__mb">
        <CaroselMobile />
      </div>
      <ScrollDownIcon />
    </div>
  );
}

export default Carousel;
