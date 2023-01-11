import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import OffCanvasMenu from "./OffCanvasMenu";
import logo from "./logo-color.png";

const Navbar = ({ navDark }) => {
  const [scroll, setScroll] = useState(0);
  const [headerTop, setHeaderTop] = useState(0);

  useEffect(() => {
    console.log("logo", logo);

    const stickyheader = document.querySelector(".main-header");
    setHeaderTop(stickyheader.offsetTop);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    setScroll(window.scrollY);
  };
  return (
    <>
      <header
        className={`main-header ${
          navDark ? "position-absolute " : ""
        } w-100 position-absolute `}
      >
        <nav
          className={`navbar navbar-expand-xl z-10 ${
            navDark ? "navbar-dark" : "navbar-light"
          } sticky-header ${scroll > headerTop ? "affix" : ""}`}
        >
          <div className="container d-flex align-items-center justify-content-lg-between position-relative">
            <Link
              to="/"
              className="navbar-brand d-flex align-items-center mb-md-0 text-decoration-none"
            >
              <img src={logo} alt="logo" className="img-fluid logo-white" />
              <img
                src="assets/img/sol.png"
                alt="logo"
                className="img-fluid logo-color"
              />
            </Link>
            <Link
              className="navbar-toggler position-absolute right-0 border-0"
              to="#offcanvasWithBackdrop"
              role="button"
            >
              <span
                className="far fa-bars"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasWithBackdrop"
                aria-controls="offcanvasWithBackdrop"
              ></span>
            </Link>

            <div className="collapse navbar-collapse justify-content-center">
              <ul className="nav col-12 col-md-auto justify-content-center main-menu">
                <li className="nav-item">
                  <Link to="/" className="nav-link">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about-us" className="nav-link">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="nav-link">
                    Services
                  </Link>
                </li>
                <li>
                  <Link to="/contact-us" className="nav-link">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div className="action-btns text-end me-5 me-lg-0 d-none d-md-block d-lg-block">
              <Link to="/request-for-demo" className="btn btn-primary">
                Start A Project
              </Link>
            </div>
            <OffCanvasMenu />
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
