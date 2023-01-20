import React from "react";

const WorkProcessFour = () => {
  return (
    <>
      <section className="work-process ptb-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-10 col-lg-6">
              <div className="section-heading text-center">
                <h4 className="h5 text-primary">Process</h4>
                <h2>Our Approach.</h2>
                <p>
                  At Solvaxion, we understand that delivering technology
                  solutions can be a complex process. That's why we've developed
                  a four-step process that ensures that every project is
                  completed on time, within budget, and to the highest standards
                  of quality.
                </p>
              </div>
            </div>
          </div>
          <div className="row d-flex align-items-center">
            <div className="col-md-6 col-lg-3">
              <div className="process-card text-center px-4 py-lg-5 py-4 rounded-custom shadow-hover mb-2 mb-lg-0">
                <div className="process-icon border border-light bg-custom-light rounded-custom p-3">
                  <span className="h2 mb-0 text-primary fw-bold">1</span>
                </div>
                <h3 className="h5">Discovery</h3>
                <p className="mb-0">
                  We work closely with clients to understand their unique needs
                  and goals.
                </p>
              </div>
            </div>
            <div className="dots-line first"></div>
            <div className="col-md-6 col-lg-3">
              <div className="process-card text-center px-4 py-lg-5 py-3 rounded-custom shadow-hover mb-2 mb-lg-0">
                <div className="process-icon border border-light bg-custom-light rounded-custom p-3">
                  <span className="h2 mb-0 text-primary fw-bold">2</span>
                </div>
                <h3 className="h5">Design</h3>
                <p className="mb-0">
                  We create detailed design documents outlining the solution's
                  functionality and user experience.
                </p>
              </div>
            </div>
            <div className="dots-line first"></div>
            <div className="col-md-6 col-lg-3">
              <div className="process-card text-center px-4 py-lg-5 py-4 rounded-custom shadow-hover mb-2 mb-lg-0 mb-md-0">
                <div className="process-icon border border-light bg-custom-light rounded-custom p-3">
                  <span className="h2 mb-0 text-primary fw-bold">3</span>
                </div>
                <h3 className="h5">Development</h3>
                <p className="mb-0">
                  Our team of developers brings the solution to life using the
                  latest technologies.
                </p>
              </div>
            </div>
            <div className="dots-line first"></div>
            <div className="col-md-6 col-lg-3">
              <div className="process-card text-center px-4 py-lg-5 py-4 rounded-custom shadow-hover mb-0 mb-lg-0 mb-md-0">
                <div className="process-icon border border-light bg-custom-light rounded-custom p-3">
                  <span className="h2 mb-0 text-primary fw-bold">4</span>
                </div>
                <h3 className="h5">Deployment and Support</h3>
                <p className="mb-0">
                  We deploy the solution and provide training and ongoing
                  support to ensure success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WorkProcessFour;
