import React from "react";

const AppointmentAreaTwo = () => {

  return (
    <div
      className="appointment-area-2 bg-smoke overflow-hidden"
      style={{ backgroundImage: "url(assets/img/bg/appointment-bg2-1.png)" }}
    >
      <div className="container">
        <div className="row gx-0">
          <div className="col-xl-7">
            <div className="space">
              <div className="appointment-form-wrap bg-white">
                <div className="title-area">
                  <span className="sub-title">Send a request</span>
                  <h2 className="sec-title">Book Your Ride – Quick & Easy!</h2>
                </div>
                <h3 className="sub-title pb-3">
                  Book your ride via Whatsapp or Phone call
                </h3>
                <div className="d-flex gap-3 align-items-center flex-wrap pb-5">
                  <button className="btn style2">Whatsapp</button>
                  <button className="btn style2">Phone Call</button>
                </div>
                <h3 className="sub-title pb-3"> Book your ride via mail</h3>
                <form
                  action="mail.php"
                  method="POST"
                  className="appointment-form ajax-contact"
                >
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control style-border"
                          name="name"
                          id="name"
                          placeholder="Your Full Name"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="email"
                          className="form-control style-border"
                          name="email"
                          id="email"
                          placeholder="Email Address"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control style-border"
                          name="number"
                          id="number"
                          placeholder="Phone Number"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <select
                          name="subject"
                          id="subject"
                          className="form-select style-border"
                          defaultValue={"Choose"}
                        >
                          <option value="Choose" disabled selected>
                            Choose a Pickup Location
                          </option>
                          <option value="Rolla">Rolla</option>
                          <option value="Qasimiya">Qasimiya</option>
                          <option value="Abu Shagara">Abu Shagara</option>
                          <option value="Al Wahda">Al Wahda</option>
                          <option value="Jamal Abdulnasir">
                            Jamal Abdulnasir
                          </option>
                          <option value="Alkhan">Alkhan</option>
                          <option value="Al Nahda">Al Nahda</option>
                          <option value="Tawan">Tawan</option>
                        </select>
                        <i className="fas fa-angle-down" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <select
                          name="subject"
                          id="subject"
                          className="form-select style-border"
                          defaultValue={"Choose"}
                        >
                          <option value="Choose" disabled selected>
                            Choose a Drop Off Location
                          </option>
                          <option value="Buteena">Buteena</option>

                          <option value="JLT">JLT</option>
                          <option value="Media City">Media City</option>
                          <option value="Emaar Business Park">
                            Emaar Business Park
                          </option>
                          <option value="Internet City">Internet City</option>
                          <option value="Al Barsha">Al Barsha</option>
                          <option value="Tecom">Tecom</option>
                          <option value="Sheikh Zayed Road">
                            Sheikh Zayed Road
                          </option>
                          <option value="Metro Station">Metro Station</option>
                          <option value="Business Bay">Business Bay</option>
                        </select>
                        <i className="fas fa-angle-down" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <select
                          name="subject"
                          id="subject"
                          className="form-select style-border"
                          defaultValue={"Choose"}
                        >
                          <option value="Choose" disabled selected>
                            Preffered Time Slot
                          </option>

                          <option value="08:00 AM">08:00 AM</option>
                          <option value="09:00 AM">09:00 AM</option>
                          <option value="10:00 AM">10:00 AM</option>
                          <option value="05:00 PM">05:00 PM</option>
                          <option value="06:00 PM">06:00 PM</option>
                          <option value="07:00 PM">07:00 PM</option>
                        </select>
                        <i className="fas fa-angle-down" />
                      </div>
                    </div>
                  </div>
                  <div className="form-group col-12">
                    <input
                      type="number"
                      className="form-control style-border"
                      name="passengers"
                      id="passengers"
                      placeholder="Number of Passengers"
                    />
                  </div>
                  <div className="form-group col-12">
                    <textarea
                      placeholder="Message here.."
                      id="contactForm"
                      className="form-control style-border"
                      defaultValue={""}
                    />
                  </div>
                  <div className="form-btn col-12">
                    <button className="btn style2">
                      Book Now <i className="fas fa-arrow-right ms-2" />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          {/* <div className="col-xl-5 d-xl-block d-none ">
            <div className="appointment-thumb-2 ">
              <img
                src="assets/img/normal/appointment-thumb-2-1.png"
                alt="img"
              />
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default AppointmentAreaTwo;
