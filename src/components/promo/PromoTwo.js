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
                title="Transform Your Work with Solvaxion's SaaS Solutions"
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
                  <h3 className="h5">Scalability</h3>
                  <p className="mb-0">
                    As a Canadian SaaS company, Solvaxion is be able to handle a
                    large number of users and a high volume of data without
                    experiencing performance issues or downtime. This is
                    particularly important as the company grows and serves a
                    larger customer base.
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
                  <h3 className="h5">Security</h3>
                  <p className="mb-0">
                    Given the sensitive nature of the data that Solvaxion
                    handles, security is a top priority. Features such as data
                    encryption, secure login protocols, and regular security
                    updates help protect customer data and maintain trust in the
                    company.
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
                  <h3 className="h5">Ease of Use</h3>
                  <p className="mb-0">
                    Solvaxion's products are easy to use, so that users can get
                    up and running quickly and efficiently. This includes
                    user-friendly interfaces, helpful documentation and
                    tutorials, and strong customer support to ensure a seamless
                    experience for our customers.
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
