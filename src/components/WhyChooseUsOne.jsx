import React from "react";

const WhyChooseUsOne = () => {
  return (
    <div className="wcu-area-1 space-bottom">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-5 col-lg-6">
            <div className="title-area text-center">
              <span className="sub-title">Our Services</span>
              <h2 className="sec-title">
                Reliable Transport from Sharjah to Dubai{" "}
                <img
                  className="title-bg-shape shape-center"
                  src="assets/img/bg/title-bg-shape.png"
                  alt="Fixturbo"
                />
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row gy-40 gx-60 align-items-center">
          <div className="col-xl-4 order-xl-2">
            <div className="wcu-thumb-1">
              <img src="assets/img/normal/wcu-thumb-1-1.webp" alt="Fixturbo" />
            </div>
          </div>
          <div className="col-xl-4 col-md-6 order-xl-1">
            <div className="wcu-card-wrap right-wrap">
              <div className="wcu-card">
                <div className="icon">
                  <img
                    src="assets/img/icon/transport_bus_service_1_1.svg"
                    alt="Fixturbo"
                  />
                </div>
                <div className="wcu-card-details">
                  <h4 className="wcu-card-title">Daily & Weekly Transport </h4>
                  <p className="wcu-card-text">
                    We offer daily and weekly rides between Sharjah and Dubai
                    for a hassle-free commute.{" "}
                  </p>
                </div>
              </div>
              <div className="wcu-card">
                <div className="icon">
                  <img
                    src="assets/img/icon/location_pin_service_1_1.svg"
                    alt="Fixturbo"
                  />
                </div>
                <div className="wcu-card-details">
                  <h4 className="wcu-card-title">
                    Multiple Pickup & Drop-Off Locations
                  </h4>
                  <p className="wcu-card-text">
                    Our service covers major areas in <b>Sharjah</b> &{" "}
                    <b>Dubai</b>, including:{" "}
                    <div>
                      <span>
                        <img
                          src="assets/img/icon/tick_services_1_1.svg"
                          alt="tick"
                        />
                      </span>
                      <span>
                        <b style={{ borderBottom: "2px solid #E8092E" }}>
                          Sharjah:
                        </b>
                        Rolla, Qasimiya, Al Nahda, Abu Shagara, and more.
                      </span>
                    </div>
                    <div>
                      <span>
                        <img
                          src="assets/img/icon/tick_services_1_1.svg"
                          alt="tick"
                        />
                      </span>
                      <span>
                        <b style={{ borderBottom: "2px solid #E8092E" }}>
                          Dubai:
                        </b>
                        JLT, Media City, Business Bay, Internet City, and
                        others. and more.
                      </span>
                    </div>
                  </p>
                </div>
              </div>
              <div className="wcu-card">
                <div className="icon">
                  <img
                    src="assets/img/icon/money_bag_services_1_1.svg"
                    alt="Fixturbo"
                  />
                </div>
                <div className="wcu-card-details">
                  <h4 className="wcu-card-title">Affordable Pricing</h4>
                  <p className="wcu-card-text">
                    Enjoy budget-friendly travel with transparent pricing. No
                    hidden fees—just comfortable rides at the best rates.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-6 order-xl-3">
            <div className="wcu-card">
              <div className="icon">
                <img
                  src="assets/img/icon/clock_services_1_2.svg"
                  alt="Fixturbo"
                />
              </div>
              <div className="wcu-card-details">
                <h4 className="wcu-card-title"> Flexible Ride Timings</h4>
                <p className="wcu-card-text">
                  Choose from morning or evening schedules that suit your
                  routine.{" "}
                  <div>
                    <span>
                      <img
                        src="assets/img/icon/clock_services_1_1.svg"
                        alt="tick"
                      />
                    </span>
                    <span>
                      <b style={{ borderBottom: "2px solid #E8092E" }}>
                        Sharjah:
                      </b>
                      Rolla, Qasimiya, Al Nahda, Abu Shagara, and more.
                    </span>
                  </div>
                  <div>
                    <span>
                      <img
                        src="assets/img/icon/nigh_moon_services_1_1.svg"
                        alt="tick"
                      />
                    </span>
                    <span>
                      <b style={{ borderBottom: "2px solid #E8092E" }}>
                        Dubai:
                      </b>
                      JLT, Media City, Business Bay, Internet City, and others.
                      and more.
                    </span>
                  </div>
                </p>
              </div>
            </div>
            <div className="wcu-card">
              <div className="icon">
                <img
                  src="assets/img/icon/comfortable_services_1_1.svg"
                  alt="Fixturbo"
                />
              </div>
              <div className="wcu-card-details">
                <h4 className="wcu-card-title">Comfortable & Safe Travel</h4>
                <p className="wcu-card-text">
                  Our well-maintained vehicles and experienced drivers ensure a
                  smooth, safe, and comfortable journey every time.{" "}
                </p>
              </div>
            </div>
            <div className="wcu-card">
              <div className="icon">
                <img
                  src="assets/img/icon/booking_services_1_1.svg"
                  alt="Fixturbo"
                />
              </div>
              <div className="wcu-card-details">
                <h4 className="wcu-card-title">Easy Booking Process </h4>
                <p className="wcu-card-text">
                  Book your ride with one click via WhatsApp, call, or
                  email—quick, easy, and hassle-free!{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUsOne;
