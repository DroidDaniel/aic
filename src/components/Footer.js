import React from "react";
import "./Footer.css";
import Facebook from "../images/facebook.png";
import Instagram from "../images/instagram.png";
import Twitter from "../images/twitter.png";
import Youtube from "../images/youtube.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <section className="footersection" id="aicfooter">
      <div className="aic__common_container">
        <div className="footer__wrapper">
          <div className="footer__copywrite">
            <p>Copyright@2022 APinCrisis. ALL Rights Reserved</p>
          </div>
          <div className="footer__socialmedia">
            <ul className="footer__socialmedia__ul">
              <li className="footer__socialmedia__ul__icons">
                <a
                  className="footer__socialmedia__ul__icons__links"
                  href="/"
                  target="_blank"
                >
                  <img src={Facebook} alt="facebook" />
                </a>
              </li>
              <li className="footer__socialmedia__ul__icons">
                <a
                  className="footer__socialmedia__ul__icons__links"
                  href="/"
                  target="_blank"
                >
                  <img src={Instagram} alt="facebook" />
                </a>
              </li>
              <li className="footer__socialmedia__ul__icons">
                <a
                  href="/"
                  target="_blank"
                  className="footer__socialmedia__ul__icons__links"
                >
                  <img src={Twitter} alt="facebook" />
                </a>
              </li>
              <li className="footer__socialmedia__ul__icons">
                <a
                  href="/"
                  target="_blank"
                  className="footer__socialmedia__ul__icons__links"
                >
                  <img src={Youtube} alt="facebook" />
                </a>
              </li>
              <li>
                <Link to="/aicjoiners">dashboard</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
