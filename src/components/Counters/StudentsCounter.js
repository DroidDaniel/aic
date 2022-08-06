import React from "react";
import CountUp, { useCountUp } from "react-countup";

function StudentsCounter() {
  useCountUp({
    ref: "counter",
    end: 26,
    enableScrollSpy: true,
    scrollSpyDelay: 1000,
    scrollSpyOnce: true,
  });

  return (
    <>
      <CountUp satrt={100} duration={5} end={26} enableScrollSpy />
      <span id="counter" style={{ display: "none" }} />
    </>
  );
}

export default StudentsCounter;
