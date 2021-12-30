import React from "react";
import particlesConfig from "../../config/particle-config";
import particlesBlackConfig from "../../config/pr-s-black";
import Particles from "react-tsparticles";
import useWindowDimensions from "../../hooks/useWindowsDimmension";

const Intro4 = ({ sliderRef, blackStar }) => {
  const { height, width } = useWindowDimensions();
  console.log("hello", height, width);
  return (
    <header
      ref={sliderRef}
      className="particles valign"
      style={{
        backgroundImage: `url(/img/Landing_Page.jpg)`,

        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="cont text-center text-white">
              <h1>
                {/* <span className="color-font">Galaxy</span> Media */}
                {/* <span className="color-font">original ideas</span>. */}
              </h1>
            </div>
          </div>
        </div>
        <div className="scroll-icon">
          <div className="chevron"></div>
          <div className="chevron"></div>
          <div className="chevron"></div>
        </div>
      </div>
      {/* position: absolute; bottom: 50px; left: 50%; transform: translate(-50%,
      -50%); */}
      <Particles
        id="particles-js"
        options={blackStar ? particlesBlackConfig : particlesConfig}
      />
      <div>
        <div className="gradient-circle"></div>
        <div className="gradient-circle two"></div>
      </div>
      <div className="line bottom left"></div>
    </header>
  );
};

export default Intro4;
