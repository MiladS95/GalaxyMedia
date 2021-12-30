/* eslint-disable @next/next/no-img-element */
import React from "react";
import Split from "../Split";

const MinimalArea2 = () => {
  return (
    <section className="min-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="img">
              <img
                className="thumparallax-down"
                src="/img/AstroLanding.png"
                alt=""
              />
            </div>
          </div>
          <div className="col-lg-6 valign">
            <div className="content">
              <h4 className="color-font">Dream. Innovate. Implement.</h4>
              <Split>
                <p className="wow txt words chars splitting" data-splitting>
                  Galaxy media is a full service digital marketing agency. We
                  offer business innovative solutions that deliver from start to
                  finish. Our solutions are customized to address your needs
                  from the design phase to the deployment phase and finally the
                  maintenance phase
                </p>
              </Split>
              <ul>
                <li className="wow fadeInUp" data-wow-delay=".2s">
                  We provide free initial consultation and support.
                </li>
                <li className="wow fadeInUp" data-wow-delay=".4s">
                  We work with some of the most successful businesses.
                </li>
              </ul>
              {/* <a
                href="/"
                className="butn bord curve mt-40 wow fadeInUp"
                data-wow-delay=".8s"
              >
                <span>Discover</span>
              </a> */}
              <br />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MinimalArea2;
