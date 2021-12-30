import React from "react";

import CallToAction from "../../components/Call-to-action/call-to-action";

import DarkTheme from "../../layouts/Dark";

import Intro4 from "../../components/Intro4/intro4";
import AboutUs3 from "../../components/About-us3/about-us3";
import Services3 from "../../components/Services3/services3";
import MinimalArea2 from "../../components/Minimal-Area2/minimal-area2";

const Homepage5 = () => {
  return (
    <DarkTheme>
      <Intro4 />
      <MinimalArea2 />
      <AboutUs3 />
      <Services3 />
      <CallToAction />
    </DarkTheme>
  );
};

export default Homepage5;
