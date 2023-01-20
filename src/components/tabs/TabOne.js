import React from "react";
import { Link } from "react-router-dom";

import SectionTitle from "../common/SectionTitle";

const TabOne = () => {
  return (
    <>
      <section className="feature-tab-section ptb-120 bg-light">
        <div className="container">
          <div className="row justify-content-center align-content-center">
            <div className="col-md-10 col-lg-6">
              <SectionTitle
                subtitle=""
                title="Transform Your Work with Solvaxion's SaaS Solutions"
                description="Our Canadian-based company offers scalable, secure solutions that 
                elp you streamline your workflows and drive success."
                centerAlign
              />
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <ul
                className="nav justify-content-center feature-tab-list-2 mb-0"
                id="nav-tab"
                role="tablist"
              >
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    to="#tab-1"
                    data-bs-toggle="tab"
                    data-bs-target="#tab-1"
                    role="tab"
                    aria-selected="false"
                  >
                    Integrations
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="#tab-2"
                    data-bs-toggle="tab"
                    data-bs-target="#tab-2"
                    role="tab"
                    aria-selected="false"
                  >
                    Customization
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="#tab-3"
                    data-bs-toggle="tab"
                    data-bs-target="#tab-3"
                    role="tab"
                    aria-selected="false"
                  >
                    Mobile Accessibility
                  </Link>
                </li>
              </ul>
              <div className="tab-content" id="nav-tabContent">
                <div
                  className="tab-pane fade pt-60 active show"
                  id="tab-1"
                  role="tabpanel"
                >
                  <div className="row justify-content-center align-items-center justify-content-around">
                    <div className="col-lg-5">
                      <div className="feature-tab-info">
                        <h3>Integration with other tools</h3>
                        <p>
                          We offer integrations with other tools and platforms
                          to make it easier for users to connect their data and
                          workflows. Solvaxion offers integrations with popular
                          tools and platforms in order to increase the value and
                          utility of our products. .{" "}
                        </p>

                        <Link
                          to="/about-us"
                          className="read-more-link text-decoration-none mt-4 d-block"
                        >
                          Know More About Us
                          <i className="far fa-arrow-right ms-2"></i>
                        </Link>
                      </div>
                    </div>
                    <div className="col-lg-5">
                      <img
                        src="assets/img/screen/widget-12.jpg"
                        alt="feature tab"
                        className="img-fluid mt-4 mt-lg-0 mt-xl-0 rounded-custom"
                      />
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade pt-60" id="tab-2" role="tabpanel">
                  <div className="row justify-content-center align-items-center justify-content-around">
                    <div className="col-lg-5">
                      <img
                        src="assets/img/screen/widget-8.jpg"
                        alt="feature tab"
                        className="img-fluid mb-4 mb-lg-0 mb-xl-0 rounded-custom"
                      />
                    </div>
                    <div className="col-lg-5">
                      <div className="feature-tab-info">
                        <h3>Customization options</h3>
                        <p>
                          We give users the ability to customize certain aspects
                          of the product enabling the birth of powerful
                          features. This includes things like custom fields,
                          workflow automation, or personalized dashboards.
                        </p>
                        <Link
                          to="/about-us"
                          className="read-more-link text-decoration-none mt-4 d-block"
                        >
                          Know More About Us
                          <i className="far fa-arrow-right ms-2"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade pt-60" id="tab-3" role="tabpanel">
                  <div className="row justify-content-center align-items-center justify-content-around">
                    <div className="col-lg-5">
                      <div className="feature-tab-info">
                        <h3>Mobile accessibility</h3>
                        <p>
                          With more and more people using their smartphones for
                          work, it's important for SaaS companies that Solvaxion
                          offers mobile-friendly products. We also include
                          mobile apps and responsive designs for the web
                          versions of the products.
                        </p>
                        <Link
                          to="/about-us"
                          className="read-more-link text-decoration-none mt-4 d-block"
                        >
                          Know More About Us
                          <i className="far fa-arrow-right ms-2"></i>
                        </Link>
                      </div>
                    </div>
                    <div className="col-lg-5">
                      <img
                        src="assets/img/screen/widget-11.jpg"
                        alt="feature tab"
                        className="img-fluid mt-4 mt-lg-0 mt-xl-0 rounded-custom"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TabOne;
