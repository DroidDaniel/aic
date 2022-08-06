import React from "react";
import CountUp, { useCountUp } from "react-countup";

function CrimeCounter() {
  useCountUp({
    ref: "counter",
    end: 857,
    enableScrollSpy: true,
    scrollSpyDelay: 1000,
    scrollSpyOnce: true,
  });

  return (
    <>
      <CountUp satrt={100} duration={5} end={857} enableScrollSpy />
      <span id="counter" style={{ display: "none" }} />
    </>
  );
}

export default CrimeCounter;
