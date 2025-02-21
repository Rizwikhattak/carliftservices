import React from "react";
import { Link } from "react-router-dom";

const HeroTwo = () => {

  return (
    <div
      className="hero-wrapper hero-2"
      id="hero"
      style={{ backgroundImage: "url(assets/img/hero/hero_bg_2_1.webp)" }}
    >
      <div className="hero-shape2-1">
        <span className="hero-shape2-2" />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-xxl-6 col-xl-5 col-lg-8">
            <div className="hero-style2">
              <span className="sub-title text-white">
                RELIABLE TRANSPORT SERVICE
              </span>
              <h1 className="hero-title text-white">
                Seamless
                <span>
                  {" "}
                  <img src="assets/img/hero/hero_shape_2.png" alt="Fixturbo" />
                  Rides
                </span>{" "}
                from Sharjah to Dubai
              </h1>
              <p className="hero-text text-white">
                Travel in comfort and style with our affordable and reliable
                transport service. Whether commuting for work or leisure, we
                ensure a hassle-free and safe journey every time.
              </p>
              <div className="btn-group">
                <Link to="/about" className="btn">
                  Learn More
                </Link>
                <div className="call-media-wrap">
                  <div className="icon">
                    <img src="assets/img/icon/phone-1.svg" alt="Fixturbo" />
                  </div>
                  <div className="media-body">
                    <h6 className="title text-white">Book Your Ride Now:</h6>
                    <h4 className="link">
                      <Link className="text-white" to="tel:+971589902713">
                        +971 58 990 2713
                      </Link>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroTwo;
