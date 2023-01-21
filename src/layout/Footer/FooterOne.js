import React from "react";
import { Link } from "react-router-dom";

const FooterOne = ({ footerLight, style, footerGradient }) => {
  return (
    <>
      <footer className="footer-section">
        <div
          className={`footer-top ${footerLight ? "footer-light" : "bg-dark"} ${
            footerGradient ? "bg-gradient" : ""
          }  text-white ptb-120`}
          style={style}
        >
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-md-8 col-lg-4 mb-md-4 mb-lg-0">
                <div className="footer-single-col">
                  <div className="footer-single-col mb-4">
                    <img
                      src="assets/img/logo-color.png"
                      alt="logo"
                      className="img-fluid logo-white"
                    />
                    <img
                      src="assets/img/logo-color.png"
                      alt="logo"
                      className="img-fluid logo-color"
                    />
                  </div>
                  <p>
                    A Canadian technology start-up that is dedicated to
                    delivering <b>cutting-edge technology</b> solutions to
                    organizations worldwide. We specialize in{" "}
                    <b>custom software development</b>,{" "}
                    <b>technology consulting</b>, and{" "}
                    <b>web development services</b> that empower our clients to
                    achieve their goals
                  </p>

                  <form className="newsletter-form position-relative d-block d-lg-flex d-md-flex">
                    <input
                      type="text"
                      className="input-newsletter form-control me-2"
                      placeholder="Enter your email"
                      name="email"
                      required=""
                      autoComplete="off"
                    />
                    <input
                      type="submit"
                      value="Subscribe"
                      data-wait="Please wait..."
                      className="btn btn-primary mt-3 mt-lg-0 mt-md-0"
                    />
                  </form>
                </div>
              </div>
              <div className="col-md-12 col-lg-7 mt-4 mt-md-0 mt-lg-0">
                <div className="row">
                  <div className="col-md-4 col-lg-4 mt-4 mt-md-0 mt-lg-0">
                    <div className="footer-single-col">
                      <h3>MENU</h3>
                      <ul className="list-unstyled footer-nav-list mb-lg-0">
                        <li>
                          <Link to="/" className="text-decoration-none">
                            Home
                          </Link>
                        </li>
                        <li>
                          <Link to="/about-us" className="text-decoration-none">
                            About Us
                          </Link>
                        </li>
                        <li>
                          <Link to="/services" className="text-decoration-none">
                            Services
                          </Link>
                        </li>
                        {/* <li>
                          <Link to="/career" className="text-decoration-none">
                            Careers
                          </Link>
                        </li> */}
                        <li>
                          <Link
                            to="/contact-us"
                            className="text-decoration-none"
                          >
                            Contact
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-4 col-lg-4 mt-4 mt-md-0 mt-lg-0">
                    <div className="footer-single-col">
                      <h3>LINKS</h3>
                      <ul className="list-unstyled footer-nav-list mb-lg-0">
                        {/* <li>
                          <Link to="/blogs" className="text-decoration-none">
                            Blog
                          </Link>
                        </li> */}
                        <li>
                          <Link to="/#" className="text-decoration-none">
                            Privacy Policy
                          </Link>
                        </li>
                        <li>
                          <Link to="/#" className="text-decoration-none">
                            Terms & Conditions
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-4 col-lg-4 mt-4 mt-md-0 mt-lg-0">
                    <div className="footer-single-col">
                      <h3>GET SOCIAL</h3>
                      <ul className="list-unstyled footer-nav-list mb-lg-0">
                        <li>
                          <a
                            href="https://www.facebook.com/solvaxion/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-decoration-none"
                          >
                            Facebook
                          </a>
                        </li>
                        <li>
                          <a
                            href="/#"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-decoration-none"
                          >
                            LinkedIn
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.instagram.com/solvaxion/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-decoration-none"
                          >
                            Instagram
                          </a>
                        </li>
                        {/* <li>
                          <Link
                            to="/coming-soon"
                            className="text-decoration-none"
                          >
                            Coming Soon
                          </Link>
                        </li>
                        <li>
                          <Link to="/login" className="text-decoration-none">
                            User Login
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/career-single"
                            className="text-decoration-none"
                          >
                            Career Single
                          </Link>
                        </li> */}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`footer-bottom ${
            footerLight ? "footer-light" : "bg-dark"
          } ${footerGradient ? "bg-gradient" : ""} text-white py-4`}
        >
          <div className="container">
            <div className="row justify-content-between align-items-center">
              <div className="col-md-7 col-lg-7">
                <div className="copyright-text">
                  <p className="mb-lg-0 mb-md-0">
                    &copy; 2023 Solvaxion | All Rights Reserved.
                  </p>
                </div>
              </div>
              <div className="col-md-4 col-lg-4">
                <div className="footer-single-col text-start text-lg-end text-md-end">
                  <ul className="list-unstyled list-inline footer-social-list mb-0">
                    <li className="list-inline-item">
                      <a
                        href="https://www.facebook.com/solvaxion/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="/#" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-linkedin"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a
                        href="https://www.instagram.com/solvaxion/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fab fa-instagram"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterOne;
