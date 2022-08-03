import React from "react";
import "./Statistics.css";
import Buttons from "./Buttons";

function Statistics() {
  return (
    <section className="statisticssection" id="aicstatistics">
      <div className="aic__common_container">
        <div className="amount__wrapper">
          <div className="amount__detail">
            <div className="amount__money">
              <p className="amount__money_value numbers_value">1028</p>
            </div>
            <div className="amount__title">
              <p className="amount__title_name numbers_title amount__title_name-extra-margin">
                Farmer Suicides
              </p>
            </div>
          </div>
          <div className="amount__detail">
            <div className="amount__money">
              <p className="amount__money_value numbers_value">857</p>
            </div>
            <div className="amount__title">
              <p className="amount__title_name numbers_title">
                Crimes against women
              </p>
            </div>
          </div>
          <div className="amount__detail">
            <div className="amount__money">
              <p className="amount__money_value numbers_value">26</p>
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
