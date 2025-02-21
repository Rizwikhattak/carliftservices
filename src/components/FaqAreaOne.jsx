import React from "react";
import { Link } from "react-router-dom";

const FaqAreaOne = () => {

  return (
    <section className="faq-area-1 space-bottom">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="title-area mb-lg-0">
              <span className="sub-title">Any Qustion</span>
              <h2 className="sec-title">Have Questions About Our Service?</h2>
              <p className="sec-text">
                We provide safe, affordable, and comfortable daily rides between
                Sharjah and Dubai. Below are some frequently asked questions to
                help you understand our service better.
              </p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="accordion-area accordion" id="faqAccordion">
              <div className="accordion-card active">
                <div className="accordion-header" id="collapse-item-1">
                  <button
                    className="accordion-button "
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse-1"
                    aria-expanded="true"
                    aria-controls="collapse-1"
                  >
                    {" "}
                    Can I choose my pickup and drop-off location?
                  </button>
                </div>
                <div
                  id="collapse-1"
                  className="accordion-collapse collapse show"
                  aria-labelledby="collapse-item-1"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    <p className="faq-text">
                      Yes! We have multiple pickup and drop-off points across
                      Sharjah and Dubai. Simply select your preferred locations
                      when booking your ride.{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-card ">
                <div className="accordion-header" id="collapse-item-2">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse-2"
                    aria-expanded="false"
                    aria-controls="collapse-2"
                  >
                    {" "}
                    What are the ride timings?
                  </button>
                </div>
                <div
                  id="collapse-2"
                  className="accordion-collapse collapse "
                  aria-labelledby="collapse-item-2"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    <p className="faq-text">
                      We offer both morning and evening schedules for your
                      convenience:
                      <br />
                      <span>🕗 Morning: 08:00 AM, 09:00 AM, 10:00 AM</span>
                      <br />
                      <span>🌙Evening: 05:00 PM, 06:00 PM, 07:00 PM</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-card ">
                <div className="accordion-header" id="collapse-item-3">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse-3"
                    aria-expanded="false"
                    aria-controls="collapse-3"
                  >
                    {" "}
                    How do I book a ride?
                  </button>
                </div>
                <div
                  id="collapse-3"
                  className="accordion-collapse collapse "
                  aria-labelledby="collapse-item-3"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    <p className="faq-text">
                      Booking is simple! Just contact us via WhatsApp, call, or
                      email, and we’ll confirm your ride in no time.
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-card ">
                <div className="accordion-header" id="collapse-item-4">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse-4"
                    aria-expanded="false"
                    aria-controls="collapse-4"
                  >
                    {" "}
                    Is the ride service available on weekends?
                  </button>
                </div>
                <div
                  id="collapse-4"
                  className="accordion-collapse collapse "
                  aria-labelledby="collapse-item-4"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    <p className="faq-text">
                      Yes! We operate 7 days a week, ensuring you have reliable
                      transport anytime you need.
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-card ">
                <div className="accordion-header" id="collapse-item-5">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse-5"
                    aria-expanded="false"
                    aria-controls="collapse-5"
                  >
                    {" "}
                    How much does the ride cost?
                  </button>
                </div>
                <div
                  id="collapse-5"
                  className="accordion-collapse collapse "
                  aria-labelledby="collapse-item-5"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    <p className="faq-text">
                      Our pricing is affordable and transparent. Contact us for
                      the latest rates and special discounts for regular riders.
                    </p>
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

export default FaqAreaOne;
