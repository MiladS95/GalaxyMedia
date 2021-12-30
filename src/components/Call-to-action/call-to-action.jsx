import React from "react";
import Split from "../Split";

const CallToAction = () => {
  return (
    <section
      className="call-action section-padding sub-bg bg-img"
      style={{ backgroundImage: "url(/img/patrn.svg)" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-lg-9">
            <div className="content sm-mb30">
              <Split>
                <h6 className="wow words chars splitting" data-splitting>
                  Let’s Talk
                </h6>
                <h2 className="wow words chars splitting" data-splitting>
                  about your <br /> <b className="back-color">next project</b>.
                </h2>
              </Split>
            </div>
          </div>

          <div className="col-md-4 col-lg-3 valign">
            <a
              href="/contact/contact-dark"
              className="butn bord curve wow fadeInUp"
              data-wow-delay=".5s"
            >
              <span>Get In Touch</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
