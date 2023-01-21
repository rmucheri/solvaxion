import React from "react";

const ContactBox = () => {
  return (
    <>
      <section className="contact-promo ptb-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 mt-4 mt-lg-0">
              <div className="contact-us-promo p-5 bg-white rounded-custom custom-shadow text-center d-flex flex-column h-100">
                <span className="fad fa-comment-alt-lines fa-3x text-primary"></span>
                <div className="contact-promo-info mb-4">
                  <h5>Schedule A Call</h5>
                  <p>We are waiting to help you with your project </p>
                </div>
                <a href="/request-for-demo" className="btn btn-primary mt-auto">
                  Schedule A Call
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mt-4 mt-lg-0">
              <div className="contact-us-promo p-5 bg-white rounded-custom custom-shadow text-center d-flex flex-column h-100">
                <span className="fad fa-envelope fa-3x text-primary"></span>
                <div className="contact-promo-info mb-4">
                  <h5>Email Us</h5>
                  <p>
                    Simple drop us an email at{" "}
                    <strong>info@solvaxion.com </strong>
                  </p>
                </div>
                <a
                  href="mailto:info@solvaxion.com"
                  className="btn btn-primary mt-auto"
                >
                  Email Us
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mt-4 mt-lg-0">
              <div className="contact-us-promo p-5 bg-white rounded-custom custom-shadow text-center d-flex flex-column h-100">
                <span className="fad fa-phone fa-3x text-primary"></span>
                <div className="contact-promo-info mb-4">
                  <h5>Give us a call</h5>
                  <p>
                    Give us a ring. <strong>monday to friday</strong> from
                    <strong>9am to 5pm EST.</strong>
                  </p>
                </div>
                <a
                  href="tel:+1 647-732-9994"
                  className="btn btn-primary mt-auto"
                >
                  +1 647-732-9994
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactBox;
