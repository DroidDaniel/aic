import React from "react";
import { Link } from "react-scroll";
import "./Buttons.css";

function Buttons() {
  return (
    <div className="aic__common_container" id="storybtn">
      <div className="button__wrapper">
        <div className="join">
          <Link to="aicjoin" spy={true} smooth={true}>
            <button className="aic__btn btn__join">JOIN NOW</button>
          </Link>
        </div>
        <div className="share">
          <Link to="aiccrisis" spy={true} smooth={true}>
            <button className="aic__btn btn__share">SHARE A STORY</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Buttons;
