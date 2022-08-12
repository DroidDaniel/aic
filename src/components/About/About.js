import React from "react";
import "./About.css";
import rebuild from "../../images/rebuild_dktp.png";
import Statistics from "../Statistics/Statistics";

function About() {
  return (
    <section className="aboutsection" id="aicabout">
      <h6 className="aic__common_title">ABOUT US</h6>
      <p className="about__sub_title">
        Let’s stop blaming politicians and <span>start questioning them ?</span>
      </p>
      <div className="about__wrapper">
        <div className="about__wrapper_img about__wrapper_col">
          <img className="rebuild_img" src={rebuild} alt="rebuild" />
        </div>
        <div className="about__wrapper_content about__wrapper_col">
          <p>Are you happy with what Andhra achieved post bifurcation?</p>
          <p>
            Who is responsible for this crisis in our state? is it because of
            the politicians who only care about winning elections or we people
            who don't question them?
          </p>
          <p>
            It's time we demand answers, break our silence and take step forward
            to re-build Andhra
          </p>
        </div>
      </div>
      <Statistics />
    </section>
  );
}

export default About;
