import React from "react";
import "./Statistics.css";
import Buttons from "../Buttons/Buttons";
import CrimeCounter from "../Counters/CrimeCounter";
import FormerCounter from "../Counters/FormerCounter";
import StudentsCounter from "../Counters/StudentsCounter";

function Statistics() {
  return (
    <section className="statisticssection" id="aicstatistics">
      <div className="aic__common_container">
        <div className="amount__wrapper">
          <div className="amount__detail">
            <div className="amount__money">
              <p className="amount__money_value numbers_value">
                <FormerCounter />
              </p>
            </div>
            <div className="amount__title">
              <p className="amount__title_name numbers_title amount__title_name-extra-margin">
                Farmer Suicides
              </p>
            </div>
          </div>
          <div className="amount__detail">
            <div className="amount__money">
              <p className="amount__money_value numbers_value">
                <CrimeCounter />
              </p>
            </div>
            <div className="amount__title">
              <p className="amount__title_name numbers_title">
                Crimes against women
              </p>
            </div>
          </div>
          <div className="amount__detail">
            <div className="amount__money">
              <p className="amount__money_value numbers_value">
                <StudentsCounter />
              </p>
            </div>
            <div className="amount__title">
              <p className="amount__title_name numbers_title amount__title_name-extra-margin">
                Students Suicides
              </p>
            </div>
          </div>
        </div>
      </div>
      <Buttons />
    </section>
  );
}

export default Statistics;
