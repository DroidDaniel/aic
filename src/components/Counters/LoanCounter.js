import React from "react";
import CountUp, { useCountUp } from "react-countup";

function LoanCounter() {
  useCountUp({
    ref: "counter",
    end: 4390,
    enableScrollSpy: true,
    scrollSpyDelay: 1000,
    scrollSpyOnce: true,
  });

  return (
    <>
      <CountUp
        start={0}
        end={4390}
        duration={10}
        prefix="&#x20b9; "
        enableScrollSpy
      />
      <span id="counter" style={{ display: "none" }} />
    </>
  );
}

export default LoanCounter;
