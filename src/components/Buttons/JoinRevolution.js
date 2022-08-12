import React from "react";
import { Link } from "react-scroll";
import "./JoinRevolution.css";

function JoinRevolution() {
  return (
    <div>
      <div className="join_btn_wraapper">
        <button className="btn__join_revolution">
          <Link to="aicjoin" spy={true} smooth={true}>
            JOIN THE REVOLUTION
          </Link>
        </button>
      </div>
    </div>
  );
}

export default JoinRevolution;
