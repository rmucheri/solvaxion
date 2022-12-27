import React from "react";
import SectionTitle from "../common/SectionTitle";

const FeatureImgSix = () => {
  return (
    <>
      <section className="feature-section-two ptb-120">
        <div className="container">
          <div className="row align-items-center justify-content-lg-between justify-content-center">
            <div className="col-lg-6 col-md-12">
              <div className="feature-content-wrap">
                <SectionTitle
                  title="Leading the way in SaaS innovation and customer satisfaction"
                  description=" At our SaaS company, we are dedicated to staying at the
                   forefront of the industry and consistently delivering the best possible 
                   experience for our customers. We are constantly innovating and updating 
                   our solutions to ensure that they meet the evolving needs of businesses of all sizes."
                  leftAlign
                />
                <ul className="list-unstyled mb-0">
                  <li className="d-flex align-items-start mb-4">
                    <div className="icon-box bg-primary rounded me-4">
                      <i className="fas fa-bezier-curve text-white"></i>
                    </div>
                    <div className="icon-content">
                      <h3 className="h5">Scalability</h3>
                      <p>
                        Solvaxion ccommodates the needs of businesses of all
                        sizes, with the ability to scale up or down as needed to
                        meet changing demands. Our features include flexible
                        pricing plans, customizable solutions, and the ability
                        to easily add or remove users as needed.
                      </p>
                    </div>
                  </li>
                  <li className="d-flex align-items-start mb-4">
                    <div className="icon-box bg-danger rounded me-4">
                      <i className="fas fa-fingerprint text-white"></i>
                    </div>
                    <div className="icon-content">
                      <h3 className="h5">Reliability</h3>
                      <p>
                        We have a strong track record of uptime and performance,
                        with robust systems in place to ensure that the service
                        is always available and functioning optimally. We make
                        us of automatic updates, redundant servers, and backup
                        systems to ensure that the service can always be
                        accessed when needed.
                      </p>
                    </div>
                  </li>
                  <li className="d-flex align-items-start mb-4 mb-lg-0">
                    <div className="icon-box bg-dark rounded me-4">
                      <i className="fas fa-chain text-white"></i>
                    </div>
                    <div className="icon-content">
                      <h3 className="h5">Integration</h3>
                      <p>
                        Seamless integration with other business tools and
                        systems,is important. We make it easy for users to
                        integrate their services into their existing workflow
                        and processes. Our expertise includes API support,
                        integrations with popular productivity tools, and the
                        ability to import and export data from other systems as
                        needed.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 col-md-7">
              <div className="feature-img-wrap">
                <img
                  src="assets/img/feature-hero-img.svg"
                  alt="feature"
                  className="img-fluid rounded-custom"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeatureImgSix;
