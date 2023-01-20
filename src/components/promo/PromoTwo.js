import React from "react";
import SectionTitle from "../common/SectionTitle";

const PromoTwo = () => {
  return (
    <>
      <section className="promo-section ptb-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-10">
              <SectionTitle
                title="Transform Your Business with Solvaxion"
                description=" Our cloud-based software is designed to help Canadian 
                businesses increase efficiency and productivity."
                centerAlign
              />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="promo-single position-relative text-center bg-white custom-shadow rounded-custom p-5 mb-4">
                <div className="promo-icon mb-32">
                  <i className="fa fa-line-chart text primary fa-3x"></i>
                </div>
                <div className="promo-info">
                  <h3 className="h5">Customer-centric approach</h3>
                  <p className="mb-0">
                    We use design thinking methodologies to understand the needs
                    and perspectives of our clients and their end-users, which
                    allows us to create solutions that truly meet their needs
                    and drive business success
                  </p>
                </div>
                {/* <!--pattern start--> */}
                <div className="dot-shape-bg position-absolute z--1 left--40 top--40">
                  <img src="assets/img/shape/dot-big-square.svg" alt="shape" />
                </div>
                {/* <!--pattern end--> */}
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="promo-single position-relative text-center bg-white custom-shadow rounded-custom p-5 mb-4">
                <div className="promo-icon mb-32">
                  <i className="fa fa-lock text primary fa-3x"></i>
                </div>
                <div className="promo-info">
                  <h3 className="h5">Commitment to Innovation</h3>
                  <p className="mb-0">
                    We stay current with the latest technologies and best
                    practices to provide our clients with cutting-edge solutions
                    that help them stay ahead of the curve.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="promo-single position-relative text-center bg-white custom-shadow rounded-custom p-5 mb-4">
                <div className="promo-icon mb-32">
                  <i className="fa fa-smile-plus text primary fa-3x"></i>
                </div>
                <div className="promo-info">
                  <h3 className="h5">Expert Team</h3>
                  <p className="mb-0">
                    Our team of experts delivers high-quality, tailored
                    solutions using the latest technologies. Collaboration and
                    diverse skills ensure successful project completion,
                    exceeding client expectations.
                  </p>
                </div>
                {/* <!--pattern start--> */}
                <div className="dot-shape-bg position-absolute z--1 right--40 bottom--40">
                  <img src="assets/img/shape/dot-big-square.svg" alt="shape" />
                </div>
                {/* <!--pattern end--> */}
              </div>
            </div>
          </div>
          {/* <div className="customer-section pt-60">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-8 col-12">
                  <div className="customer-logos-grid text-center">
                    <img
                      src="assets/img/clients/client-logo-1.svg"
                      width="150"
                      alt="clients logo"
                      className="img-fluid p-1 px-md-2 p-lg-3 m-auto"
                    />
                    <img
                      src="assets/img/clients/client-logo-2.svg"
                      width="150"
                      alt="clients logo"
                      className="img-fluid p-1 px-md-2 p-lg-3 m-auto"
                    />
                    <img
                      src="assets/img/clients/client-logo-3.svg"
                      width="150"
                      alt="clients logo"
                      className="img-fluid p-1 px-md-2 p-lg-3 m-auto"
                    />
                    <img
                      src="assets/img/clients/client-logo-4.svg"
                      width="150"
                      alt="clients logo"
                      className="img-fluid p-1 px-md-2 p-lg-3 m-auto"
                    />
                    <img
                      src="assets/img/clients/client-logo-5.svg"
                      width="150"
                      alt="clients logo"
                      className="img-fluid p-1 px-md-2 p-lg-3 m-auto"
                    />
                    <img
                      src="assets/img/clients/client-logo-6.svg"
                      width="150"
                      alt="clients logo"
                      className="img-fluid p-1 px-md-2 p-lg-3 m-auto"
                    />
                    <img
                      src="assets/img/clients/client-logo-7.svg"
                      width="150"
                      alt="clients logo"
                      className="img-fluid p-1 px-md-2 p-lg-3 m-auto"
                    />
                    <img
                      src="assets/img/clients/client-logo-8.svg"
                      width="150"
                      alt="clients logo"
                      className="img-fluid p-1 px-md-2 p-lg-3 m-auto"
                    />
                  </div>
                  <p className="text-center mt-5 mb-0 h6">
                    Trusted More than 25,00+ Companies Around the World
                  </p>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </section>
    </>
  );
};

export default PromoTwo;
