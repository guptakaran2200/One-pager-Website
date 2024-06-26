import React from "react";

export default function About() {
  return (
    <div className="container">
      <h1 className="my-3">About Us</h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              What we do
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>
                Welcome to F2 Fintech. Your go-to place for choosing best loans
                in India. We are operating and Serving this Industry since 2019
              </strong>{" "}
              We're F2Fintech, the one-stop destination for easing the loan
              process in India. We help you navigate the complex world of
              finance. We have you covered, regardless of the type of loan you
              require. We carefully consider your specific scenario to ensure
              you get the best possible offer. And here's something to be proud
              of: since our inception, we've made over 11,000 clients happy.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              What types of loans do you offer?
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>
                We offer a variety of loans to meet your financial needs,
                including personal loans, home loans, auto loans, and business
                loans.
              </strong>{" "}
              Each loan comes with competitive low-interest rates to make your
              borrowing experience affordable and straightforward though the transition does limit
              overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              How can I qualify for a low-interest rate loan?
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>o
                To qualify for our lowest interest rates, you'll need a good
                credit score, a stable income, and a history of responsible
                credit use.{" "}
              </strong>{" "}
              We also consider other factors, such as your employment history
              and financial stability. You can apply online to get a preliminary
              rate based on your details, though
              the transition does limit overflow.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
