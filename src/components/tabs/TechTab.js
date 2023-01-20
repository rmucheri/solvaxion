import React from "react";
import { Link } from "react-router-dom";

const TechTab = () => {
  return (
    <section className="ptb-120 bg-dark">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-6">
            <div className="text-center">
              <h2>We Build any Kind Of Technology</h2>
              <p>
                We deliver custom technology solutions that meet the unique
                needs of our clients, using a team of experts who can build any
                kind of technology, such as websites, mobile apps and other
                digital solutions.
              </p>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-5">
            <div className="service-tabs">
              <ul
                className="nav nav-pills d-flex justify-content-center"
                id="pills-tab"
                role="tablist"
              >
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link active me-4"
                    id="pills-home-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-home"
                    type="button"
                    role="tab"
                    aria-controls="pills-home"
                    aria-selected="true"
                  >
                    <i className="fas fa-desktop me-3"></i>
                    <span>Web Design</span>
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link me-4"
                    id="pills-profile-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-profile"
                    type="button"
                    role="tab"
                    aria-controls="pills-profile"
                    aria-selected="false"
                  >
                    <i className="fas fa-tablet-alt me-3"></i>
                    <span>App Development</span>
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="pills-contact-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-contact"
                    type="button"
                    role="tab"
                    aria-controls="pills-contact"
                    aria-selected="false"
                  >
                    <i className="fas fa-vector-square me-2"></i>
                    <span>UX/UI Design</span>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="tab-content" id="pills-tabContent">
            <div
              className="tab-pane fade show active"
              id="pills-home"
              role="tabpanel"
              aria-labelledby="pills-home-tab"
            >
              <div className="tab-content-wrapper pt-60">
                <div className="row align-items-center">
                  <div className="col-md-6">
                    <div className="text-center mb-5 mb-lg-0">
                      <img
                        src="assets/img/tab_img1.png"
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="tab-right-content">
                      <h2>
                        Unleash the Power of a Stunning, <br />
                        <small>User-Friendly and SEO-Optimized Website</small>
                      </h2>
                      <p>
                        We can create responsive, user-friendly and visually
                        appealing websites that are optimized for search engines
                        and provide a seamless user experience.
                      </p>
                      <ul className="list-unstyled">
                        <li>
                          <i className="fas fa-check text-warning"></i>
                          <span>Creative Designs</span>
                        </li>
                        <li>
                          <i className="fas fa-check text-warning"></i>
                          <span>Personalized Service</span>
                        </li>
                        <li>
                          <i className="fas fa-check text-warning"></i>
                          <span>Timely Delivery</span>
                        </li>
                      </ul>
                      <Link
                        to="/about-us"
                        className="text-white link-with-icon text-decoration-none mt-4"
                      >
                        Know More About Us
                        <i className="fas fa-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="pills-profile"
              role="tabpanel"
              aria-labelledby="pills-profile-tab"
            >
              <div className="tab-content-wrapper pt-60">
                <div className="row align-items-center">
                  <div className="col-md-6">
                    <div className="pe-5 mb-5 mb-lg-0">
                      <img
                        src="assets/img/tab_img2.png"
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="tab-right-content">
                      <h2>
                        Transform Your Business with Tailored <br />
                        <small>Mobile App Development for Any Platform</small>
                      </h2>
                      <p>
                        We can design and develop mobile apps that are tailored
                        to your business needs, whether it's for iOS, Android or
                        any other platform.
                      </p>
                      <ul className="list-unstyled">
                        <li>
                          <i className="fas fa-check text-primary"></i>
                          <span>Digital Conferance</span>
                        </li>
                        <li>
                          <i className="fas fa-check text-primary"></i>
                          <span>Great Speak</span>
                        </li>
                        <li>
                          <i className="fas fa-check text-primary"></i>
                          <span>Event Mangement</span>
                        </li>
                      </ul>
                      <Link
                        to="/about-us"
                        className="text-white link-with-icon text-decoration-none mt-4"
                      >
                        Know More About Us
                        <i className="fas fa-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="pills-contact"
              role="tabpanel"
              aria-labelledby="pills-contact-tab"
            >
              <div className="tab-content-wrapper pt-60">
                <div className="row align-items-center">
                  <div className="col-md-6">
                    <div className="mb-5 mb-lg-0">
                      <img
                        src="assets/img/tab_img3.png"
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="tab-right-content">
                      <h2>
                        Experience the Magic of a Stunning UI <br />
                        <small>and Intuitive UX Design</small> 
                      </h2>
                      <p>
                        We can create visually stunning user interfaces and
                        provide an intuitive user experience for your customers.
                      </p>
                      <ul className="list-unstyled">
                        <li>
                          <i className="fas fa-check text-primary"></i>
                          <span>Digital Conferance</span>
                        </li>
                        <li>
                          <i className="fas fa-check text-primary"></i>
                          <span>Great Speak</span>
                        </li>
                        <li>
                          <i className="fas fa-check text-primary"></i>
                          <span>Event Mangement</span>
                        </li>
                      </ul>
                      <Link
                        to="/about-us"
                        className="text-white link-with-icon text-decoration-none mt-4"
                      >
                        Know More About Us
                        <i className="fas fa-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechTab;
