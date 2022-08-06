import React from "react";
import CountUp, { useCountUp } from "react-countup";

function FormerCounter() {
  useCountUp({
    ref: "counter",
    end: 1028,
    enableScrollSpy: true,
    scrollSpyDelay: 1000,
    scrollSpyOnce: true,
  });

  return (
    <>
      <CountUp satrt={100} duration={5} end={1028} enableScrollSpy />
      <span id="counter" style={{ display: "none" }} />
    </>
  );
}

export default FormerCounter;
