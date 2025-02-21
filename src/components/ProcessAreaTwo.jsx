import React from "react";
import { Link } from "react-router-dom";

const ProcessAreaTwo = () => {

  return (
    <div
      className="process-area-2 hero-wrapper hero-2 space-top bg-image position-relative"
      style={{ backgroundImage: "url(assets/img/bg/process2-bg.jpg)" }}
    >
      {/* Overlay */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
      ></div>
      <div className="hero-shape2-1">
        <span className="hero-shape2-2" />
      </div>

      <div className="container position-relative">
        <div className="row justify-content-center">
          <div className="col-xl-5 col-lg-7">
            <div className="title-area text-center">
              <h3 className="sub-title"> work process</h3>
              <h2 className="sec-title text-white">
                Easy Booking Process – Get to Your Destination Hassle-Free{" "}
                <img
                  className="title-bg-shape shape-center"
                  src="assets/img/bg/title-bg-shape2.png"
                  alt="Fixturbo"
                />
              </h2>
            </div>
          </div>
        </div>
        <div className="row gy-4 gx-90 justify-content-center">
          <div className="col-lg-4 col-md-6 process-card-wrap2">
            <div className="process-card style2">
              <div className="process-card-number">STEP 1</div>
              <h4 className="process-card-title">Choose Your Route & Time</h4>
              <p className="process-card-text">
                Select your pickup and drop-off locations from Sharjah or Dubai.
                Choose a convenient morning or evening time slot for your ride.
              </p>
              {/* <Link to="/service-details" className="link-btn style2">
                Read More <i className="fas fa-arrow-right" />
              </Link> */}
            </div>
          </div>
          <div className="col-lg-4 col-md-6 process-card-wrap2">
            <div className="process-card style2">
              <div className="process-card-number">STEP 2</div>
              <h4 className="process-card-title">Confirm Your Booking</h4>
              <p className="process-card-text">
                Contact us via WhatsApp, phone call, or email to confirm your
                seat. Our team will quickly assist you with the details.
              </p>
              {/* <Link to="/service-details" className="link-btn style2">
                Read More <i className="fas fa-arrow-right" />
              </Link> */}
            </div>
          </div>
          <div className="col-lg-4 col-md-6 process-card-wrap2">
            <div className="process-card style2">
              <div className="process-card-number">STEP 3</div>
              <h4 className="process-card-title">Enjoy a Comfortable Ride </h4>
              <p className="process-card-text">
                Relax and enjoy a safe, smooth, and affordable journey with our
                experienced drivers and well-maintained vehicles.
              </p>
              {/* <Link to="/service-details" className="link-btn style2">
                Read More <i className="fas fa-arrow-right" />
              </Link> */}
            </div>
          </div>
        </div>
        <div className=" d-flex justify-content-center">
          <Link to="/about" className="btn">
            Book Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProcessAreaTwo;
