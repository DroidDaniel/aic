import React from "react";
import Slider from "react-slick";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import "./StoryCarousel.css";

function StoryCarousel() {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: false,
    pauseOnHover: true,
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
          centerMode: true,
          centerPadding: "80px",
        },
      },
    ],
  };
  return (
    <div className="story_carousel">
      <Slider {...settings}>
        <div>
          <a
            href="https://www.taxscan.in/sdc-scam-andhra-pradesh-hc-denies-anticipatory-bail-to-chartered-accountant-for-alleged-purchase-of-shell-companies/194142/"
            target="blank"
          >
            <div className="crisis__card">
              <div className="crisis__card_img scam">
                <div className="crisis__card_title">
                  <p>Scam</p>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div>
          <a
            href="https://www.thehindubusinessline.com/news/andhra-pradesh-has-616-lakh-registered-unemployed-youths/article65234038.ece#:~:text=Lower%20than%20national%20average,average%20(4.8%20per%20cent)."
            target="blank"
          >
            <div className="crisis__card">
              <div className="crisis__card_img jobless">
                <div className="crisis__card_title">
                  <p>Unemployment</p>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div>
          <a
            href="https://hindupost.in/dharma-religion/part-of-temple-demolished-in-andhra-allegedly-for-a-flyover/"
            target="blank"
          >
            <div className="crisis__card">
              <div className="crisis__card_img infra">
                <div className="crisis__card_title">
                  <p>Crumbling Infrastructure</p>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div>
          <a
            href="https://www.thehansindia.com/andhra-pradesh/ongole-disappearance-of-panchayat-funds-stuns-sarpanches-716513"
            target="blank"
          >
            <div className="crisis__card">
              <div className="crisis__card_img puplic">
                <div className="crisis__card_title">
                  <p>Loot of public resources</p>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div>
          <a
            href="https://www.taxscan.in/sdc-scam-andhra-pradesh-hc-denies-anticipatory-bail-to-chartered-accountant-for-alleged-purchase-of-shell-companies/194142/"
            target="blank"
          >
            <div className="crisis__card">
              <div className="crisis__card_img scam">
                <div className="crisis__card_title">
                  <p>Scam</p>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div>
          <a
            href="https://www.thehindubusinessline.com/news/andhra-pradesh-has-616-lakh-registered-unemployed-youths/article65234038.ece#:~:text=Lower%20than%20national%20average,average%20(4.8%20per%20cent)."
            target="blank"
          >
            <div className="crisis__card">
              <div className="crisis__card_img jobless">
                <div className="crisis__card_title">
                  <p>Unemployment</p>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div>
          <a
            href="https://hindupost.in/dharma-religion/part-of-temple-demolished-in-andhra-allegedly-for-a-flyover/"
            target="blank"
          >
            <div className="crisis__card">
              <div className="crisis__card_img infra">
                <div className="crisis__card_title">
                  <p>Crumbling Infrastructure</p>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div>
          <a
            href="https://www.thehansindia.com/andhra-pradesh/ongole-disappearance-of-panchayat-funds-stuns-sarpanches-716513"
            target="blank"
          >
            <div className="crisis__card">
              <div className="crisis__card_img puplic">
                <div className="crisis__card_title">
                  <p>Loot of public resources</p>
                </div>
              </div>
            </div>
          </a>
        </div>
      </Slider>
    </div>
  );
}

export default StoryCarousel;
