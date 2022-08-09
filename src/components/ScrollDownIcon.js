import React from "react";
import { Link } from "react-scroll";
import "./ScrollDownIcon.css";

function ScrollDownIcon() {
  return (
    <div className="scrolldown_container">
      <div className="scrolldown_field">
        {/* <div className="mouse"></div> */}
        <Link to="aicamount" spy={true} smooth={true}>
          <div className="scroll_down"></div>
        </Link>
        {/* <div className="arrow"></div> */}
      </div>
    </div>
  );
}

export default ScrollDownIcon;
