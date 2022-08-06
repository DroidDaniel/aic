import React from "react";
import "./Crisis.css";
import StoryCarousel from "./StoryCarousel";

function Crisis() {
  return (
    <section className="crisissection" id="aiccrisis">
      <div className="aic__common_container">
        <h6 className="aic__common_title crisis__title">CRISIS</h6>
        <p className="crisis__sub_title">
          We cannot let this happen to our Andhra, we can not let this happen to
          our motherland.
        </p>
        <StoryCarousel />
        {/* <div className="crisis__card_wrapper">
          <div className="crisis__card">
            <div className="crisis__card_img scam">
              <div className="crisis__card_title">
                <p>Scam</p>
              </div>
            </div>
          </div>
          <div className="crisis__card">
            <div className="crisis__card_img jobless">
              <div className="crisis__card_title">
                <p>Unemployment</p>
              </div>
            </div>
          </div>
          <div className="crisis__card">
            <div className="crisis__card_img infra">
              <div className="crisis__card_title">
                <p>Crumbling Infrastructure</p>
              </div>
            </div>
          </div>
          <div className="crisis__card">
            <div className="crisis__card_img puplic">
              <div className="crisis__card_title">
                <p>Loot of public resources</p>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
}

export default Crisis;
