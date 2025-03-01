import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

const HeaderTwo = () => {
  const [active, setActive] = useState(false);

  const mobileMenu = () => {
    setActive(!active);
  };
  return (
    <header className="nav-header header-layout2">
      <div className={`position-fixed fixed-top`}>
        {/* Main Menu Area */}
        <div className="menu-area p-2">
          <div className="container">
            <div className="row align-items-center justify-content-between">
              <div className="col-auto">
                <div>
                  <Link to="/" className="d-flex align-items-center gap-3">
                    <img
                      src="assets/img/logo.png"
                      className="img-fluid w-64"
                      style={{ width: "4rem" }}
                      alt="Fixturbo"
                    />

                    <h5 style={{ color: "#FFFFFF", margin: 0 }}>
                      Raja Carlift Services
                    </h5>
                  </Link>
                </div>
              </div>
              <div className="col-auto">
                <nav className="main-menu d-none d-lg-inline-block">
                  <ul>
                    <li>
                      <a href="#hero">Home</a>
                    </li>
                    <li>
                      <a href="#about-us-page">About Us</a>
                    </li>
                    <li>
                      <a href="#our-areas-page">Our Areas</a>
                    </li>
                    <li>
                      <a href="#our-process-page">Our Process</a>
                    </li>
                    <li>
                      <a href="#contact-page">Contact Us</a>
                    </li>
                  </ul>
                </nav>
                <div className="navbar-right d-inline-flex d-lg-none">
                  <button
                    type="button"
                    className="menu-toggle icon-btn"
                    onClick={mobileMenu}
                  >
                    <i className="fas fa-bars" />
                  </button>
                </div>
              </div>
              <div className="col-auto d-xl-block d-none">
                <div className="social-links">
                  <Link to="https://www.facebook.com/">
                    <i className="fab fa-facebook-f" />
                  </Link>
                  <Link to="https://www.instagram.com/">
                    <i className="fab fa-instagram" />
                  </Link>
                  <Link to="https://www.twitter.com/">
                    <i className="fab fa-twitter" />
                  </Link>
                  <Link to="https://www.linkedin.com/">
                    <i className="fab fa-linkedin" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`mobile-menu-wrapper  ${active && "body-visible"}`}>
          <div className="mobile-menu-area">
            <div className="mobile-logo py-2">
              <img
                src="assets/img/logo.png"
                alt="logo"
                style={{ width: "5rem" }}
              />
              <button className="menu-toggle" onClick={mobileMenu}>
                <i className="fa fa-times" />
              </button>
            </div>
            <div className="mobile-menu">
              <ul>
                <li>
                  <a href="#hero">Home</a>
                </li>
                <li>
                  <a href="#about-us-page">About Us</a>
                </li>
                <li>
                  <a href="#our-areas-page">Our Areas</a>
                </li>
                <li>
                  <a href="#our-process-page">Our Process</a>
                </li>
                <li>
                  <a href="#contact-page">Contact Us</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderTwo;
