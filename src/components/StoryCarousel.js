import React from "react";
import Slider from "react-slick";
import "../../node_modules/slick-carousel/slick/slick.css";
import "../../node_modules/slick-carousel/slick/slick-theme.css";
import "./StoryCarousel.css";

function StoryCarousel() {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          swipeToSlide: true,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          swipeToSlide: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          swipeToSlide: true,
        },
      },
    ],
  };
  return (
    <div className="story_carousel">
      <Slider {...settings}>
        <div>
          <div className="crisis__card">
            <div className="crisis__card_img scam">
              <div className="crisis__card_title">
                <p>Scam</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="crisis__card">
            <div className="crisis__card_img jobless">
              <div className="crisis__card_title">
                <p>Unemployment</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="crisis__card">
            <div className="crisis__card_img infra">
              <div className="crisis__card_title">
                <p>Crumbling Infrastructure</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="crisis__card">
            <div className="crisis__card_img puplic">
              <div className="crisis__card_title">
                <p>Loot of public resources</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="crisis__card">
            <div className="crisis__card_img scam">
              <div className="crisis__card_title">
                <p>Scam</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="crisis__card">
            <div className="crisis__card_img jobless">
              <div className="crisis__card_title">
                <p>Unemployment</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="crisis__card">
            <div className="crisis__card_img infra">
              <div className="crisis__card_title">
                <p>Crumbling Infrastructure</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="crisis__card">
            <div className="crisis__card_img puplic">
              <div className="crisis__card_title">
                <p>Loot of public resources</p>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default StoryCarousel;
