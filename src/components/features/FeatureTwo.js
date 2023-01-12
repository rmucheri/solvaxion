import React from "react";
// import { Link } from "react-router-dom";
import SectionTitle from "../common/SectionTitle";

const FeatureTwo = ({ cardDark }) => {
  return (
    <>
      <section
        className={`feature-section ptb-120 `}

      // ${cardDark ? "bg-dark" : "bg-light"}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-10">
              {cardDark ? (
                <SectionTitle
                  subtitle=""
                  title="Streamline Your Business Operations with Our SaaS Solutions Value"
                  description="From project management to CRM, we have the tools you need to succeed"
                  centerAlign
                  dark
                />
              ) : (
                <SectionTitle
                  subtitle=""
                  title="Streamline Your Business Operations with Our SaaS Solutions Value"
                  description="From project management to CRM, we have the tools you need to succeed."
                  centerAlign
                />
              )}
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="feature-grid">
                <div
                  className={`shadow-sm rounded-custom p-5 ${cardDark
                    ? "bg-custom-light promo-border-hover border border-2 border-light text-white"
                    : "bg-white"
                    }`}
                  data-aos="fade-up"
                  data-aos-delay="50"
                >
                  <div
                    className="
                      icon-box
                      d-inline-block
                      rounded-circle
                      bg-primary-soft
                      mb-32
                    "
                  >
                    <i className="fal fa-code-fork icon-sm text-primary"></i>
                  </div>
                  <div className="feature-content">
                    <h3 className="h5">Custom Web Development</h3>
                    <p>
                      Solvaxion's web development team is skilled in creating
                      visually appealing and user-friendly websites that drive
                      business growth. We build responsive websites that look
                      great on any device, and our team is proficient in a
                      variety of web development technologies including HTML.
                    </p>
                  </div>
                </div>

                <div
                  className={`feature-card shadow-sm rounded-custom p-5 ${cardDark
                    ? "bg-custom-light promo-border-hover border border-2 border-light text-white"
                    : "bg-white"
                    }`}
                  data-aos="fade-up"
                  data-aos-delay="50"
                >
                  <div
                    className="
                      icon-box
                      d-inline-block
                      rounded-circle
                      bg-success-soft
                      mb-32
                    "
                  >
                    <i className="fal fa-file-chart-line icon-sm text-primary"></i>
                  </div>
                  <div className="feature-content">
                    <h3 className="h5">Technology Consulting Services:</h3>
                    <p className="mb-0">
                      As a leading technology consulting firm based in Canada,
                      Solvaxion is well-equipped to help businesses of all sizes
                      navigate the constantly evolving landscape of technology.
                      Our team of experienced consultants can provide expert
                      guidance on a wide range of topics including cloud.
                    </p>
                  </div>
                  {/* <Link
                    to="/single-service"
                    className="link-with-icon text-decoration-none mt-3"
                  >
                    View Details <i className="far fa-arrow-right"></i>
                  </Link> */}
                </div>

                <div
                  className={`feature-card shadow-sm rounded-custom p-5 ${cardDark
                    ? "bg-custom-light promo-border-hover border border-2 border-light text-white"
                    : "bg-white"
                    }`}
                  data-aos="fade-up"
                  data-aos-delay="50"
                >
                  <div
                    className="
                      icon-box
                      d-inline-block
                      rounded-circle
                      bg-danger-soft
                      mb-32
                    "
                  >
                    <i className="fal fa-database icon-sm text-danger"></i>
                  </div>
                  <div className="feature-content">
                    <h3 className="h5">Data Analytics</h3>
                    <p className="mb-0">
                      Data is a valuable asset for any business, but it's only
                      useful if you know how to turn it into actionable
                      insights. At Solvaxion, our team of data analysts is
                      trained to extract meaningful insights from large and
                      complex datasets, helping you make data-driven decisions.
                    </p>
                  </div>
                  {/* <Link
                    to="/single-service"
                    className="link-with-icon text-decoration-none mt-3"
                  >
                    View Details <i className="far fa-arrow-right"></i>
                  </Link> */}
                </div>

                <div
                  className={`feature-card shadow-sm rounded-custom p-5 ${cardDark
                    ? "bg-custom-light promo-border-hover border border-2 border-light text-white"
                    : "bg-white"
                    }`}
                  data-aos="fade-up"
                  data-aos-delay="50"
                >
                  <div
                    className="
                      icon-box
                      d-inline-block
                      rounded-circle
                      bg-dark-soft
                      mb-32
                    "
                  >
                    <i className="fal fa-code icon-sm text-primary"></i>
                  </div>
                  <div className="feature-content">
                    <h3 className="h5">Custom Software Development</h3>
                    <p className="mb-0">
                      At Solvaxion, our team of experienced software developers
                      is dedicated to creating custom solutions that meet the
                      unique needs of your business. From developing standalone
                      applications to integrating with existing systems, we
                    </p>
                  </div>
                  {/* <Link
                    to="/single-service
                    className="link-with-icon text-decoration-none mt-3"
                  >
                    View Details <i className="far fa-arrow-right"></i>
                  </Link> */}
                </div>

                <div
                  className={`feature-card shadow-sm rounded-custom p-5 ${cardDark
                    ? "bg-custom-light promo-border-hover border border-2 border-light text-white"
                    : "bg-white"
                    }`}
                  data-aos="fade-up"
                  data-aos-delay="50"
                >
                  <div
                    className="
                      icon-box
                      d-inline-block
                      rounded-circle
                      bg-dark-soft
                      mb-32
                    "
                  >
                    <i className="fal fa-terminal icon-sm text-primary"></i>
                  </div>
                  <div className="feature-content">
                    <h3 className="h5">
                      Proprietary SaaS Software Development
                    </h3>
                    <p className="mb-0">
                      Solvaxion's proprietary SaaS (Software as a Service)
                      software development team is dedicated to creating
                      innovative, cloud-based solutions that help businesses
                      streamline their operations and drive growth. Our team has
                      a wealth of experience in developing SaaS software, and we
                      have a deep understanding of the unique challenges and
                      opportunities that come with this type of development.
                    </p>
                  </div>
                  {/* <Link
                    to="/single-service"
                    className="link-with-icon text-decoration-none mt-3"
                  >
                    View Details <i className="far fa-arrow-right"></i>
                  </Link> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeatureTwo;
