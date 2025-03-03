import React from "react";
import { Link } from "react-router-dom";

const FooterAreaTwo = () => {
  return (
    <footer
      className="footer-wrapper footer-layout2 f"
      style={{ backgroundImage: "url(assets/img/bg/footer-bg2-1.png)" }}
    >
      <div className="container">
        <div className="footer-top-2">
          <div className="footer-logo d-flex align-items-center justify-content-center gap-2">
            <Link to="/">
              <img
                src="assets/img/logo.png"
                alt="Fixturbo"
                className="img-fluid"
                style={{ maxWidth: "5rem" }}
              />
            </Link>
            <h1 className="text-white" style={{ fontSize: "1.5rem" }}>
              Raja Car Lift Services
            </h1>
          </div>
          <h3 className="footer-top-title text-white">
            Contact Us via WhatsApp, phone call, or email to confirm your seat.
          </h3>

          <a href="#contact-page" className="btn style2">
            Book Now <i className="fas fa-arrow-up ms-2" />
          </a>
        </div>
        <div className="widget-area">
          <div className="row justify-content-between">
            <div className="col-md-6 col-xl-3">
              <div className="widget footer-widget widget-about">
                <h3 className="widget_title">About Us</h3>
                <p className="footer-text mb-30">
                  We provide safe, comfortable, and affordable daily rides
                  between Sharjah and Dubai. Our goal is to make your commute
                  hassle-free with professional drivers and reliable service.
                </p>
                <div className="social-btn style3">
                  <Link to="https://www.instagram.com/" tabIndex={-1}>
                    <i className="fab fa-instagram" />
                  </Link>
                  <Link to="https://linkedin.com/" tabIndex={-1}>
                    <i className="fab fa-linkedin-in" />
                  </Link>
                  <Link to="https://twitter.com/" tabIndex={-1}>
                    <i className="fab fa-twitter" />
                  </Link>
                  <Link to="https://facebook.com/" tabIndex={-1}>
                    <i className="fab fa-facebook-f" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-auto">
              <div className="widget widget_nav_menu footer-widget">
                <h3 className="widget_title">Our Services</h3>
                <div className="menu-all-pages-container">
                  <ul
                    className="menu d-flex flex-column gap-3"
                    style={{ color: "#B6B6B6" }}
                  >
                    <li>Monthly Rides</li>
                    <li>Affordable Pricing</li>
                    <li>Multiple Pickup & Drop-Off Locations</li>
                    <li>Safe & Comfortable Travel</li>
                    <li>Flexible Ride Timings</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-auto">
              <div className="widget footer-widget">
                <h3 className="widget_title">Contact</h3>
                <div className="widget-contact2">
                  <div className="widget-contact-grid">
                    <div className="icon">
                      <i className="fas fa-map-marker-alt" />
                    </div>
                    <div className="contact-grid-details">
                      <p>Address</p>
                      <h6>
                        Sharjah
                        <p />
                      </h6>
                    </div>
                  </div>
                  <div className="widget-contact-grid">
                    <div className="icon">
                      <i className="fas fa-phone-alt" />
                    </div>
                    <div className="contact-grid-details">
                      <p>Phone Number</p>
                      <h6>
                        <Link to="tel:+971589902713">+971 58 990 2713</Link>
                        <p />
                      </h6>
                    </div>
                  </div>
                  <div className="widget-contact-grid">
                    <div className="icon">
                      <i className="fas fa-envelope" />
                    </div>
                    <div className="contact-grid-details">
                      <p>Email Address</p>
                      <h6>
                        <Link to="mailto:rajacarlift1994@gmail.com">
                          rajacarlift1994@gmail.com
                        </Link>
                        <p />
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-wrap">
        <div className="container">
          <div className="row gy-3 justify-content-md-between justify-content-center">
            <div className="col-auto align-self-center">
              <p className="copyright-text text-center">
                © <Link to="#">rajacarliftservice</Link> 2025 | All Rights
                Reserved
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterAreaTwo;
