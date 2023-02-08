import React from "react";

const ReviewTwo = ({ reqPage }) => {
  return (
    <>
      <div className="col-xl-5 col-lg-5 col-md-12 order-1 order-lg-0">
        <div className="testimonial-tab-slider-wrap mt-5">
          {reqPage ? (
            <h1 className="fw-bold display-5">Let's Chat About Your Project</h1>
          ) : (
            <h2 className="text-white">Start Your Project with Us</h2>
          )}
          <p>
            We are excited to hear about your project and discuss how we can
            help bring your ideas to life. At Solvaxion, we pride ourselves on
            delivering high-quality services and building long-term partnerships
            with our clients.
          </p>
          <hr />
          <div
            className="tab-content testimonial-tab-content text-white-80"
            id="pills-tabContent"
          >
            <div
              className="tab-pane fade show active"
              id="testimonial-tab-1"
              role="tabpanel"
            >
              <blockquote className="blockquote text-danger">
                <em>
                  "To design is much more than simply to assemble, to order, or
                  even to edit: it is to add value and meaning, to illuminate,
                  to simplify, to clarify, to modify, to dignify, to dramatize,
                  to persuade, and perhaps even to amuse. To design is to
                  transform prose into poetry."
                </em>
              </blockquote>
              <div className="author-info mt-3">
                <span className="h6">Paul Rand</span>
                <span className="d-block small">
                  Art director and graphic designer
                </span>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="testimonial-tab-2"
              role="tabpanel"
            >
              <blockquote className="blockquote text-danger">
                <em>
                  "A designer knows he has achieved perfection not when there is
                  nothing left to add, but when there is nothing left to take
                  away”
                </em>
              </blockquote>
              <div className="author-info mt-3">
                <span className="h6">Antoine de Saint-Exupery</span>
                <span className="d-block small">
                  Writer, poet, journalist and pioneering aviator
                </span>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="testimonial-tab-3"
              role="tabpanel"
            >
              <blockquote className="blockquote text-danger">
                <em>
                  "The role of the designer is that of a good, thoughtful host
                  anticipating the needs of his guests. "
                </em>
              </blockquote>
              <div className="author-info mt-3">
                <span className="h6">Charles Eames</span>
                <span className="d-block small">
                  Designer, architect and filmmaker
                </span>
              </div>
            </div>
          </div>
          <ul
            className="nav nav-pills mb-0 testimonial-tab-indicator mt-5"
            id="pills-tab"
            role="tablist"
          >
            <li className="nav-item" role="presentation">
              <button
                className="nav-link active"
                data-bs-toggle="pill"
                data-bs-target="#testimonial-tab-1"
                type="button"
                role="tab"
                aria-selected="true"
              >
                <img
                  src="assets/img/WebsiteImages/Paul_rand_loc.jpg"
                  // src="assets/img/testimonial/1.jpg"
                  alt="testimonial"
                  width="55"
                  className="img-fluid rounded-circle"
                />
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                data-bs-toggle="pill"
                data-bs-target="#testimonial-tab-2"
                type="button"
                role="tab"
                aria-selected="false"
              >
                <img
                  src="assets/img/WebsiteImages/Antoine_de_Saint-Exupery.jpg"
                  // src="assets/img/testimonial/4.jpg"
                  alt="testimonial"
                  width="55"
                  className="img-fluid rounded-circle"
                />
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                data-bs-toggle="pill"
                data-bs-target="#testimonial-tab-3"
                type="button"
                role="tab"
                aria-selected="false"
              >
                <img
                  src="assets/img/WebsiteImages/Charles_Eames.jpg"
                  // src="assets/img/testimonial/6.jpg"
                  alt="testimonial"
                  width="55"
                  className="img-fluid rounded-circle"
                />
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default ReviewTwo;
