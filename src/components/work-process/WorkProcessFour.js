import React from "react";

const WorkProcessFour = () => {
  return (
    <>
      <section className="work-process ptb-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-10 col-lg-6">
              <div className="section-heading text-center">
                <h4 className="h5 text-primary">Process</h4>
                <h2>Streamline Your Work Process.</h2>
                <p>
                  Our four-step method ensures that projects are completed on
                  time, within budget, and with the desired results. Find out
                  how it can work for you{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="row d-flex align-items-center">
            <div className="col-md-6 col-lg-3">
              <div className="process-card text-center px-4 py-lg-5 py-4 rounded-custom shadow-hover mb-2 mb-lg-0">
                <div className="process-icon border border-light bg-custom-light rounded-custom p-3">
                  <span className="h2 mb-0 text-primary fw-bold">1</span>
                </div>
                <h3 className="h5">Define the Project</h3>
                <p className="mb-0">
                  The first step in completing a project is to clearly define
                  the scope and objectives.
                </p>
              </div>
            </div>
            <div className="dots-line first"></div>
            <div className="col-md-6 col-lg-3">
              <div className="process-card text-center px-4 py-lg-5 py-3 rounded-custom shadow-hover mb-2 mb-lg-0">
                <div className="process-icon border border-light bg-custom-light rounded-custom p-3">
                  <span className="h2 mb-0 text-primary fw-bold">2</span>
                </div>
                <h3 className="h5">Develop a Plan</h3>
                <p className="mb-0">
                  Once the project has been defined, the next step is to create
                  a detailed plan outlining the steps needed to complete the
                  project.
                </p>
              </div>
            </div>
            <div className="dots-line first"></div>
            <div className="col-md-6 col-lg-3">
              <div className="process-card text-center px-4 py-lg-5 py-4 rounded-custom shadow-hover mb-2 mb-lg-0 mb-md-0">
                <div className="process-icon border border-light bg-custom-light rounded-custom p-3">
                  <span className="h2 mb-0 text-primary fw-bold">3</span>
                </div>
                <h3 className="h5">Execute the Plan</h3>
                <p className="mb-0">
                  With a clear plan in place, the project team can begin
                  executing the tasks and milestones outlined in the plan.
                </p>
              </div>
            </div>
            <div className="dots-line first"></div>
            <div className="col-md-6 col-lg-3">
              <div className="process-card text-center px-4 py-lg-5 py-4 rounded-custom shadow-hover mb-0 mb-lg-0 mb-md-0">
                <div className="process-icon border border-light bg-custom-light rounded-custom p-3">
                  <span className="h2 mb-0 text-primary fw-bold">4</span>
                </div>
                <h3 className="h5">Review and Refine</h3>
                <p className="mb-0">
                  Once the project is complete, it's important to review the
                  results and assess whether the project met its objectives.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WorkProcessFour;
