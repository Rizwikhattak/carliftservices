import { useState } from "react";

const BookingForm = () => {
  // State to store form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    pickupLocation: "",
    dropoffLocation: "",
    timeSlot: "",
    passengers: "",
    message: "",
  });

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Open WhatsApp chat
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/971586185990", "_blank");
  };

  // Open phone dialer
  const handlePhoneCallClick = () => {
    window.location.href = "tel:+971589902713";
  };

  // Function to send booking details to WhatsApp
  const handleBookNow = () => {
    const {
      name,
      email,
      number,
      pickupLocation,
      dropoffLocation,
      timeSlot,
      passengers,
      message,
    } = formData;

    if (
      !name ||
      !number ||
      !pickupLocation ||
      !dropoffLocation ||
      !timeSlot ||
      !passengers
    ) {
      alert("Please fill in all required fields.");
      return;
    }

    // Format the WhatsApp message
    const whatsappMessage = `*Booking Details:*\n
    - *Name:* ${name}
    - *Email:* ${email || "Not Provided"}
    - *Phone:* ${number}
    - *Pickup Location:* ${pickupLocation}
    - *Dropoff Location:* ${dropoffLocation}
    - *Time Slot:* ${timeSlot}
    - *Passengers:* ${passengers}
    - *Message:* ${message || "No additional message"}`;

    // Encode message for URL
    const encodedMessage = encodeURIComponent(whatsappMessage);

    // Open WhatsApp with pre-filled message
    window.open(`https://wa.me/971586185990?text=${encodedMessage}`, "_blank");
  };

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
                  Book your ride via WhatsApp or Phone call
                </h3>
                <div className="d-flex gap-3 align-items-center flex-wrap pb-5">
                  <button className="btn style2" onClick={handleWhatsAppClick}>
                    WhatsApp
                  </button>
                  <button className="btn style2" onClick={handlePhoneCallClick}>
                    Phone Call
                  </button>
                </div>
                <h3 className="sub-title pb-3"> Book your ride via mail</h3>
                <form className="appointment-form">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control style-border"
                          name="name"
                          placeholder="Your Full Name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="email"
                          className="form-control style-border"
                          name="email"
                          placeholder="Email Address (Optional)"
                          value={formData.email}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control style-border"
                          name="number"
                          placeholder="Phone Number"
                          value={formData.number}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <select
                          name="pickupLocation"
                          className="form-select style-border"
                          value={formData.pickupLocation}
                          onChange={handleChange}
                          required
                        >
                          <option value="" disabled>
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
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <select
                          name="dropoffLocation"
                          className="form-select style-border"
                          value={formData.dropoffLocation}
                          onChange={handleChange}
                          required
                        >
                          <option value="" disabled>
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
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <select
                          name="timeSlot"
                          className="form-select style-border"
                          value={formData.timeSlot}
                          onChange={handleChange}
                          required
                        >
                          <option value="" disabled>
                            Preferred Time Slot
                          </option>
                          <option value="08:00 AM">08:00 AM</option>
                          <option value="09:00 AM">09:00 AM</option>
                          <option value="10:00 AM">10:00 AM</option>
                          <option value="05:00 PM">05:00 PM</option>
                          <option value="06:00 PM">06:00 PM</option>
                          <option value="07:00 PM">07:00 PM</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="form-group col-12">
                    <input
                      type="number"
                      className="form-control style-border"
                      name="passengers"
                      placeholder="Number of Passengers"
                      value={formData.passengers}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group col-12">
                    <textarea
                      name="message"
                      placeholder="Message here.."
                      className="form-control style-border"
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-btn col-12">
                    <button
                      type="button"
                      className="btn style2"
                      onClick={handleBookNow}
                    >
                      Book Now <i className="fas fa-arrow-right ms-2" />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;
