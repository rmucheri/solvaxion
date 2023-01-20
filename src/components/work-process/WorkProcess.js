import React from 'react';
import SectionTitle from '../common/SectionTitle';

const WorkProcess = () => {
  return (
    <>
      <section className="work-process ptb-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-10">
              <SectionTitle
                subtitle="Process"
                title="Our Approach"
                description="At Solvaxion, we understand that delivering technology solutions can be a complex process. That's why we've developed a four-step process that ensures that every project is completed on time, within budget, and to the highest standards of quality."
                centerAlign
              />
            </div>
          </div>
          <div className="row align-items-center justify-content-between">
            <div className="col-lg-5 col-md-12 order-1 order-lg-0">
              <div className="img-wrap">
                <img
                  src="assets/img/office-img-1.jpg"
                  alt="work process"
                  className="img-fluid rounded-custom"
                />
              </div>
            </div>
            <div className="col-lg-6 col-md-12 order-0 order-lg-1">
              <ul className="work-process-list list-unstyled">
                <li className="d-flex align-items-start mb-4">
                  <div className="process-icon-2 border border-2 rounded-custom bg-white me-4 mt-2">
                    <i className="far fa-folder-tree fa-2x"></i>
                  </div>
                  <div className="icon-content">
                    <span className="text-primary h6">Step 1</span>
                    <h3 className="h5 mb-2">Discovery</h3>
                    <p>
                      We work closely with clients to understand their unique
                      needs and goals.
                    </p>
                  </div>
                </li>
                <li className="d-flex align-items-start mb-4">
                  <div className="process-icon-2 border border-2 rounded-custom bg-white me-4 mt-2">
                    <i className="far fa-bezier-curve fa-2x"></i>
                  </div>
                  <div className="icon-content">
                    <span className="text-primary h6">Step 2</span>
                    <h3 className="h5 mb-2">Design</h3>
                    <p>
                      We create detailed design documents outlining the
                      solution's functionality and user experience.
                    </p>
                  </div>
                </li>
                <li className="d-flex align-items-start mb-4">
                  <div className="process-icon-2 border border-2 rounded-custom bg-white me-4 mt-2">
                    <i className="far fa-layer-group fa-2x"></i>
                  </div>
                  <div className="icon-content">
                    <span className="text-primary h6">Step 3</span>
                    <h3 className="h5 mb-2">Development</h3>
                    <p>
                      Our team of developers brings the solution to life using
                      the latest technologies.
                    </p>
                  </div>
                </li>
                <li className="d-flex align-items-start mb-4 mb-lg-0">
                  <div className="process-icon-2 border border-2 rounded-custom bg-white me-4 mt-2">
                    <i className="far fa-truck fa-2x"></i>
                  </div>
                  <div className="icon-content">
                    <span className="text-primary h6">Step 4</span>
                    <h3 className="h5 mb-2">Deployment and Support</h3>
                    <p>
                      We deploy the solution and provide training and ongoing
                      support to ensure success.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WorkProcess;
