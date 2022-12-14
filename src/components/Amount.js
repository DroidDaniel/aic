import React from "react";
import "./Amount.css";
import DeptCounter from "./Counters/DeptCounter";
import LoanCounter from "./Counters/LoanCounter";
import TotalDeptCounter from "./Counters/TotalDeptCounter";

function Amount() {
  return (
    <section className="amountsection" id="aicamount">
      <div className="aic__common_container">
        <h6 className="aic__common_title">DO YOU KNOW ?</h6>
        <div className="amount__wrapper">
          <div className="amount__detail">
            <div className="amount__title">
              <p className="amount__title_name numbers_title amount__title_name-extra-margin">
                AP Total Debt :
              </p>
            </div>
            <div className="amount__money">
              <p className="amount__money_value numbers_value">
                <DeptCounter />
              </p>
              <p className="amount__in_letter">Lakh Crores</p>
            </div>
          </div>
          <div className="amount__detail">
            <div className="amount__title">
              <p className="amount__title_name numbers_title">
                Last 3 months loan April 2022
              </p>
            </div>
            <div className="amount__money">
              <p className="amount__money_value numbers_value">
                <LoanCounter />
              </p>
              <p className="amount__in_letter">Crores</p>
            </div>
          </div>
          <div className="amount__detail">
            <div className="amount__title">
              <p className="amount__title_name numbers_title amount__title_name-extra-margin">
                AP Total Debt :
              </p>
            </div>
            <div className="amount__money">
              <p className="amount__money_value numbers_value">
                <TotalDeptCounter />
              </p>
              <p className="amount__in_letter">Crores every hour</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Amount;
