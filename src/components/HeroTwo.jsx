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
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-xxl-6 col-xl-5 col-lg-8">
            <div className="hero-style2 text-center">
              <span
                className="text-white"
                style={{ fontSize: ".625rem !important" }}
              >
                RELIABLE TRANSPORT SERVICE
              </span>
              <h1 className="hero-title text-white text-center">
                Carlift
                <span>
                  {" "}
                  <img src="assets/img/hero/hero_shape_2.png" alt="Fixturbo" />
                  Service
                </span>{" "}
                from Sharjah to Dubai
              </h1>

              <div className="btn-group d-flex justify-content-center align-items-center">
                <div className="call-media-wrap d-flex justify-content-center align-items-center">
                  <div className="d-flex align-items-center justify-content-center">
                    <img src="assets/img/icon/whatsapp.svg" alt="Fixturbo" />
                  </div>
                  <div className="media-body">
                    <h4 className="link">
                      <Link
                        className="text-white"
                        to="https://wa.me/971589902713"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        +971 58 990 2713
                      </Link>
                    </h4>
                    <h4 className="link">
                      <Link
                        className="text-white"
                        to="https://wa.me/971586185990"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        +971 58 618 5990
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
