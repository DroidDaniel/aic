import React from "react";
import CountUp, { useCountUp } from "react-countup";

function TotalDeptCounter() {
  useCountUp({
    ref: "counter",
    end: 5.75,
    enableScrollSpy: true,
    scrollSpyDelay: 1000,
    scrollSpyOnce: true,
  });

  return (
    <>
      <CountUp
        start={0}
        end={5.75}
        duration={5}
        separator=" "
        decimals={2}
        decimal="."
        prefix="&#x20b9; "
        enableScrollSpy
      />
      <span id="counter" style={{ display: "none" }} />
    </>
  );
}

export default TotalDeptCounter;
