import React from "react";
import SectionTitle from "../common/SectionTitle";

const FeatureImgThree = ({ paddingTop }) => {
  return (
    <>
      <section
        className={`feature-section-two ${
          paddingTop ? "ptb-120" : "pt-60 pb-120"
        } `}
      >
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-lg-5 col-md-12">
              <SectionTitle
                subtitle="SOLVAXION"
                title="Powerful Solutions for Your Business Needs"
                description="Unleash the full potential of your business with our powerful solutions."
              />
              <div>
                <ul className="list-unstyled mt-5">
                  <li className="d-flex align-items-start mb-4">
                    <div className="icon-box bg-primary rounded me-4">
                      <i className="fas fa-low-vision text-white"></i>
                    </div>
                    <div className="icon-content">
                      <h3 className="h5">VISION</h3>
                      <p>
                        Our vision at Solvaxion is to become the leading
                        provider of innovative software-as-a-service (SaaS)
                        solutions for small and medium-sized organizations
                        globally.
                      </p>
                    </div>
                  </li>
                  <li className="d-flex align-items-start mb-4">
                    <div className="icon-box bg-danger rounded me-4">
                      <i className="fas fa-fa-bullseye text-white"></i>
                    </div>
                    <div className="icon-content">
                      <h3 className="h5">MISSION</h3>
                      <p>
                        Our mission at Solvaxion is to empower small and
                        medium-sized organizations around the world to achieve
                        their business goals through the use of innovative
                        software-as-a-service (SaaS) solutions.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 col-md-7">
              <div className="feature-img-wrap position-relative d-flex flex-column align-items-end">
                <ul className="img-overlay-list list-unstyled position-absolute">
                  <li
                    className="d-flex align-items-center bg-white rounded shadow-sm p-3"
                    data-aos="fade-right"
                    data-aos-delay="50"
                  >
                    <i className="fas fa-check bg-primary text-white rounded-circle"></i>
                    <h6 className="mb-0">Custom Software Solutions</h6>
                  </li>
                  <li
                    className="d-flex align-items-center bg-white rounded shadow-sm p-3"
                    data-aos="fade-right"
                    data-aos-delay="100"
                  >
                    <i className="fas fa-check bg-primary text-white rounded-circle"></i>
                    <h6 className="mb-0">
                      Proprietary SaaS Software Development{" "}
                    </h6>
                  </li>
                  <li
                    className="d-flex align-items-center bg-white rounded shadow-sm p-3"
                    data-aos="fade-right"
                    data-aos-delay="150"
                  >
                    <i className="fas fa-check bg-primary text-white rounded-circle"></i>
                    <h6 className="mb-0">Data Analytics</h6>
                  </li>
                </ul>
                <img
                  src="assets/img/ficha.jpg"
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

export default FeatureImgThree;
