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
import "./Modal.css";
import CloseModal from "../images/modal-close.png";

function Navbar() {
  window.addEventListener("scroll", function () {
    const header = this.document.querySelector(".header");
    header.classList.toggle("active", window.scrollY > 0);
  });
  const [isOpen, setIsOpen] = useState(false);

  function handleMenu() {
    setIsOpen(!isOpen);
  }

  const [modal, setModal] = useState(true);
  const [anim, setAnim] = useState(false);

  const toggleModal = () => {
    setAnim(!anim);
    handleMenu();
  };

  let toggleStateCheck = anim ? "active" : "null";

  if (anim) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  return (
    <section className="navbarsection" id="aicnavbar">
      <>
        {modal && (
          <div className="modal">
            <div className="overlay"></div>
            <div className={`modal-content ${toggleStateCheck}`}>
              <p className="pledge_title">Pledge for AP in crisis</p>
              <div className="pledge_description">
                <p className="pledge_content">
                  Eight years post bifurcation, Andhra Pradesh as a state has
                  been plagued by burgeoning debts, rampant crimes against
                  women, rise in unemployment, suicides among youth and farmers
                  and a halt in the progress of industry and infrastructure due
                  to lack of investments and a looming power crisis.
                  Unfortunately, spelling out these issues are like touching the
                  tip of an iceberg as the state is faced with a sea of problems
                  that has left it in destitute and the image envisioned for it
                  seems like a pike dream for now. For bringing about a change,
                  we as a collective force are uniting to fight for the well
                  being of the state. Instead of merely blaming the government,
                  we aim to facilitate constructive dialogue which will impact
                  the social fabric of the state in a positive way. For the
                  same, we pledge to act with heart and courage to create a
                  community of responsible citizens who will help take the state
                  to new heights.
                </p>
              </div>
              <div className="close-modal" onClick={toggleModal}>
                <img src={CloseModal} alt="close" />
              </div>
            </div>
          </div>
        )}
      </>
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
            <Link
              className={`nav-toggle nav__link ${isOpen && "open"}`}
              to="/"
              onClick={toggleModal}
            >
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
            <Link
              className="nav__link logo_dktp"
              to="aicbanner-dktp"
              spy={true}
              smooth={true}
            >
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
              offset={180}
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
          <Link
            className="nav__link"
            to="aicbanner-mb"
            spy={true}
            smooth={true}
          >
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
