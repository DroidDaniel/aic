import { useState } from "react";
import "./Home.css";
import logo from "./img/logo.png";

function Home() {
  window.addEventListener("scroll", function () {
    const header = this.document.querySelector(".header");
    header.classList.toggle("active", window.scrollY > 0);
  });
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="home" id="Home">
      <div className="home__bg">
        <div className="header Navbar">
          <div className={`nav-items ${isOpen && "open"}`}>
            <a href="/home">About us</a>
            <a href="/about">Pledge</a>
            <a href="/">campaigns</a>
            <a className="logo_dktp">
              <img className="logo" src={logo} alt="" />
            </a>
            <a href="/">share a story</a>
            <a href="/contact">Join NOW</a>
            <a href="/contact">Downloads</a>
          </div>
          <img className="logo logo__mb" src={logo} alt="" />
          <div
            className={`nav-toggle ${isOpen && "open"}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="bar"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
