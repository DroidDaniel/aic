import { useState } from "react";
import "./Navbar.css";
import logo from "../images/logo.png";

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
            <a href="/home">About us</a>
            <a href="/about">Pledge</a>
            <a href="/">campaigns</a>
            <a className="logo_dktp">
              <img className="logo" src={logo} alt="company logo" />
            </a>
            <a href="/">share a story</a>
            <a href="/contact">Join NOW</a>
            <a href="/contact">Downloads</a>
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
