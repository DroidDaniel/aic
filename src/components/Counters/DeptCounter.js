import React from "react";
import CountUp, { useCountUp } from "react-countup";

function DeptCounter() {
  useCountUp({
    ref: "counter",
    end: 8.3,
    enableScrollSpy: true,
    scrollSpyDelay: 1000,
    scrollSpyOnce: true,
  });

  return (
    <>
      <CountUp
        start={0}
        end={8.3}
        duration={10}
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

export default DeptCounter;
