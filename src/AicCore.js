import React from "react";
import About from "./components/About";
import Amount from "./components/Amount";
import Crisis from "./components/Crisis";
import Form from "./components/Form";
import Carousel from "./components/Carousel";

function AicCore() {
  return (
    <>
      <Carousel />
      <Amount />
      <About />
      <Crisis />
      <Form />
    </>
  );
}

export default AicCore;
