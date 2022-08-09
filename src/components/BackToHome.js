import React from "react";
import { Link } from "react-router-dom";
import LogoutIco from "./../images/log-out.png";
import "./BackToHome.css";

function BackToHome(props) {
  return (
    <div className="backto_home">
      <Link to={`${props.url}`} className="back__home">
        <span>
          <img src={LogoutIco} alt="home" />
        </span>
        {props.content}
      </Link>
    </div>
  );
}

export default BackToHome;
