import { useState } from "react";
import "./Navbar.css";
import logo from "../images/logo.png";
import Abouticon from "../images/about-icon.png";
import Pledge from "../images/pledge.png";
import Sharestory from "../images/sharestory.png";
import Joinnow from "../images/joinnow.png";
import Download from "../images/download.png";
import Campaign from "../images/campaign.png";

function Navbar() {
  window.addEventListener("scroll", function () {
    const header = this.document.querySelector(".header");
    header.classList.toggle("active", window.scrollY > 0);
  });
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section className="navbarsection" id="aicnavbar">
      <div className="navbar__wrapper">
        <div className="header navbar">
          <div className={`nav-items ${isOpen && "open"}`}>
            <a href="/home" className="nav__link">
              <span className="navicon">
                <img
                  className="navicon_img"
                  src={Abouticon}
                  alt="company logo"
                />
              </span>
              About us
            </a>
            <a href="/about" className="nav__link">
              <span className="navicon">
                <img className="navicon_img" src={Pledge} alt="company logo" />
              </span>
              Pledge
            </a>
            <a href="/" className="nav__link">
              <span className="navicon">
                <img
                  className="navicon_img"
                  src={Campaign}
                  alt="company logo"
                />
              </span>
              campaigns
            </a>
            <a href="/" className="logo_dktp">
              <img className="logo" src={logo} alt="company logo" />
            </a>
            <a href="/" className="nav__link">
              <span className="navicon">
                <img
                  className="navicon_img"
                  src={Sharestory}
                  alt="company logo"
                />
              </span>
              share a story
            </a>
            <a href="/contact" className="nav__link">
              <span className="navicon">
                <img className="navicon_img" src={Joinnow} alt="company logo" />
              </span>
              Join NOW
            </a>
            <a href="/contact" className="nav__link">
              <span className="navicon">
                <img
                  className="navicon_img"
                  src={Download}
                  alt="company logo"
                />
              </span>
              Downloads
            </a>
          </div>
          <img className="logo logo__mb" src={logo} alt="company logo" />
          <div
            className={`nav-toggle ${isOpen && "open"}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="bar"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Navbar;
