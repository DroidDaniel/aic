import React from "react";
import "./Buttons.css";

function Buttons() {
  return (
    <div className="aic__common_container">
      <div className="button__wrapper">
        <div className="join">
          <button className="aic__btn btn__join">JOIN NOW</button>
        </div>
        <div className="share">
          <button className="aic__btn btn__share">SHARE A STORY</button>
        </div>
      </div>
    </div>
  );
}

export default Buttons;
