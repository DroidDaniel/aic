import React from "react";
import "./Footer.css";
import Facebook from "../images/facebook.png";
import Instagram from "../images/instagram.png";
import Twitter from "../images/twitter.png";

function Footer() {
  return (
    <section className="footersection" id="aicfooter">
      <div className="aic__common_container">
        <div className="footer__wrapper">
          <div className="footer__copywrite">
            <p>
              Copyright&#64;2022{" "}
              <span className="footer__company_name_span">APinCrisis.</span> ALL
              Rights Reserved
            </p>
          </div>
          <div className="footer__socialmedia">
            <ul className="footer__socialmedia__ul">
              <li className="footer__socialmedia__ul__icons">
                <a
                  className="footer__socialmedia__ul__icons__links"
                  href="https://www.facebook.com/APinCrisis"
                  target="_blank"
                  rel="socialmedia"
                >
                  <img src={Facebook} alt="facebook" />
                </a>
              </li>
              <li className="footer__socialmedia__ul__icons">
                <a
                  className="footer__socialmedia__ul__icons__links"
                  href="/"
                  target="_blank"
                  rel="socialmedia"
                >
                  <img src={Instagram} alt="facebook" />
                </a>
              </li>
              <li className="footer__socialmedia__ul__icons">
                <a
                  href="https://twitter.com/APinCrisis"
                  target="_blank"
                  rel="socialmedia"
                  className="footer__socialmedia__ul__icons__links"
                >
                  <img src={Twitter} alt="facebook" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
