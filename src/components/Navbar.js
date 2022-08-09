import { useState } from "react";
import "./Navbar.css";
import logo from "../images/logo.png";
import Abouticon from "../images/about-icon.png";
import Pledge from "../images/pledge.png";
import Sharestory from "../images/sharestory.png";
import Joinnow from "../images/joinnow.png";
import Download from "../images/download.png";
import Campaign from "../images/campaign.png";
import { Link } from "react-scroll";

function Navbar() {
  window.addEventListener("scroll", function () {
    const header = this.document.querySelector(".header");
    header.classList.toggle("active", window.scrollY > 0);
  });
  const [isOpen, setIsOpen] = useState(false);

  function handleMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <section className="navbarsection" id="aicnavbar">
      <div className="navbar__wrapper">
        <div className="header navbar">
          <div className={`nav-items ${isOpen && "open"}`}>
            <Link
              className={`nav-toggle nav__link ${isOpen && "open"}`}
              onClick={handleMenu}
              activeClass="actived"
              to="aicabout"
              spy={true}
              smooth={true}
              offset={-70}
            >
              <span className="navicon">
                <img
                  className="navicon_img"
                  src={Abouticon}
                  alt="company logo"
                />
              </span>
              About us
            </Link>
            <Link className="nav__link" to="/">
              <span className="navicon">
                <img className="navicon_img" src={Pledge} alt="company logo" />
              </span>
              Pledge
            </Link>
            <Link className="nav__link" to="/" spy={true} smooth={true}>
              <span className="navicon">
                <img
                  className="navicon_img"
                  src={Campaign}
                  alt="company logo"
                />
              </span>
              Campaigns
            </Link>
            <Link className="nav__link logo_dktp" to="/">
              <img className="logo" src={logo} alt="company logo" />
            </Link>
            <Link
              activeClass="actived"
              className={`nav-toggle nav__link ${isOpen && "open"}`}
              onClick={handleMenu}
              to="aiccrisis"
              offset={-60}
              spy={true}
              smooth={true}
            >
              <span className="navicon">
                <img
                  className="navicon_img"
                  src={Sharestory}
                  alt="company logo"
                />
              </span>
              Share a story
            </Link>
            <Link
              activeClass="actived"
              className={`nav-toggle nav__link ${isOpen && "open"}`}
              onClick={handleMenu}
              to="aicjoin"
              offset={-60}
              spy={true}
              smooth={true}
            >
              <span className="navicon">
                <img className="navicon_img" src={Joinnow} alt="company logo" />
              </span>
              Join Now
            </Link>
            <Link className="nav__link" to="/" spy={true} smooth={true}>
              <span className="navicon">
                <img
                  className="navicon_img"
                  src={Download}
                  alt="company logo"
                />
              </span>
              Downloads
            </Link>
          </div>
          <Link className="nav__link" to="/">
            <img className="logo logo__mb" src={logo} alt="company logo" />
          </Link>
          <div
            className={`nav-toggle ${isOpen && "open"}`}
            onClick={handleMenu}
          >
            <div className="bar"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Navbar;
