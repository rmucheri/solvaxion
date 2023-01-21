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
                subtitle=""
                title="Company Philosophy"
                description="At Solvaxion, we provide technology solutions that fuel the growth and success of businesses."
              />
              <div>
                <ul className="list-unstyled mt-5">
                  <li className="d-flex align-items-start mb-4">
                    <div className="icon-box bg-primary rounded me-4">
                      {/* <i className="fas fa-low-vision text-white"></i> */}
                      <i class="fa-sharp fa-solid fa-eye-low-vision text-white"></i>
                    </div>
                    <div className="icon-content">
                      <h3 className="h5">VISION</h3>
                      <p>
                        Our vision is to be the premier provider of technology
                        solutions for small and medium-sized businesses,
                        consistently exceeding customer expectations and
                        creating positive impact through the use of innovative
                        technology.
                      </p>
                    </div>
                  </li>
                  <li className="d-flex align-items-start mb-4">
                    <div className="icon-box bg-danger rounded me-4">
                      {/* <i className="fas fa-bullseye text-white"></i> */}
                      <i class="fa-sharp fa-solid fa-bullseye text-white"></i>
                    </div>
                    <div className="icon-content">
                      <h3 className="h5">MISSION</h3>
                      <p>
                        At Solvaxion, we are dedicated to leveraging technology
                        to provide innovative and tailored solutions for small
                        and medium-sized businesses, empowering them to achieve
                        their goals and drive success.
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
                    <h6 className="mb-0">Proprietary Software Development </h6>
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
