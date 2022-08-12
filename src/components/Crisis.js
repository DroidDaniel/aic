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
      </div>
      <div className="storycarousel_conatiner">
        <StoryCarousel />
      </div>
    </section>
  );
}

export default Crisis;
