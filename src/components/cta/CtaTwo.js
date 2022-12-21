// import React, { useState } from "react";
import { Link } from "react-router-dom";
import SectionTitle from "../common/SectionTitle";

const CtaTwo = () => {
  // const [isOpen, setOpen] = useState(false);

  return (
    <>
      <section className="cta-subscribe bg-dark ptb-120 position-relative overflow-hidden">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-10">
              <div className="subscribe-info-wrap text-center position-relative z-2">
                <SectionTitle
                  subtitle=""
                  title="Ready to see how our SaaS solutions can transform your business?"
                  description="Get in touch for a free consulation now and experience the benefits for yourself. With
                    no commitment and no payment required, you can test out our powerful 
                    tools and see how they can streamline your operations and improve your bottom line."
                  dark
                />
                <div className="form-block-banner mw-60 m-auto mt-5">
                  <Link to="/contact-us" className="btn btn-primary">
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div
            className="
              bg-circle
              rounded-circle
              circle-shape-3
              position-absolute
              bg-dark-light
              left-5
            "
          ></div>
          <div
            className="
              bg-circle
              rounded-circle
              circle-shape-1
              position-absolute
              bg-warning
              right-5
            "
          ></div>
        </div>
      </section>
    </>
  );
};

export default CtaTwo;
