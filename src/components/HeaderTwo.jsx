import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

const HeaderTwo = () => {
  const [active, setActive] = useState(false);
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    var offCanvasNav = document.getElementById("offcanvas-navigation");
    var offCanvasNavSubMenu = offCanvasNav.querySelectorAll(".sub-menu");

    for (let i = 0; i < offCanvasNavSubMenu.length; i++) {
      offCanvasNavSubMenu[i].insertAdjacentHTML(
        "beforebegin",
        "<span class='mean-expand-class'>+</span>"
      );
    }

    var menuExpand = offCanvasNav.querySelectorAll(".mean-expand-class");
    var numMenuExpand = menuExpand.length;

    function sideMenuExpand() {
      if (this.parentElement.classList.contains("active") === true) {
        this.parentElement.classList.remove("active");
      } else {
        for (let i = 0; i < numMenuExpand; i++) {
          menuExpand[i].parentElement.classList.remove("active");
        }
        this.parentElement.classList.add("active");
      }
    }

    for (let i = 0; i < numMenuExpand; i++) {
      menuExpand[i].addEventListener("click", sideMenuExpand);
    }
    window.onscroll = () => {
      if (window.pageYOffset < 150) {
        setScroll(false);
      } else if (window.pageYOffset > 150) {
        setScroll(true);
      }
      return () => (window.onscroll = null);
    };
  }, []);

  const mobileMenu = () => {
    setActive(!active);
  };
  return (
    <header className="nav-header header-layout2">
      <div className="header-top">
        <div className="container">
          <div className="row justify-content-center justify-content-lg-between align-items-center gy-2">
            <div className="col-auto d-none d-lg-block">
              <div>
                <Link to="/" className="d-flex align-items-center gap-3">
                  <img
                    src="assets/img/logo.png"
                    className="img-fluid"
                    style={{ width: "4rem" }}
                    alt="Fixturbo"
                  />
                  <h5 style={{ color: "#E8092E", margin: 0 }}>
                    Raja Carlift Services
                  </h5>
                </Link>
              </div>
            </div>
            <div className="col-auto">
              <div className="header-grid-info">
                <ul>
                  <li>
                    <div className="icon">
                      <i className="fas fa-clock" />
                    </div>
                    <div className="header-grid-info-details">
                      <p>Sunday - Friday:</p>
                      <h6>9 am - 8 pm</h6>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <i className="fas fa-map-marker-alt" />
                    </div>
                    <div className="header-grid-info-details">
                      <p>6391 Elgin St. Celina, Delaware</p>
                      <h6>Kentucky </h6>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`sticky-wrapper ${scroll && "sticky"}`}>
        {/* Main Menu Area */}
        <div className="menu-area">
          <div className="container">
            <div className="row align-items-center justify-content-between">
              <div className="col-auto header-navbar-logo">
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
                    <li className="">
                      <Link to="#">Home</Link>
                    </li>
                    <li>
                      <NavLink
                        to="/about"
                        className={(navData) =>
                          navData.isActive ? "active" : ""
                        }
                      >
                        About Us
                      </NavLink>
                    </li>
                    <li className="">
                      <Link to="#">Services</Link>
                    </li>
                    <li className="">
                      <Link to="#">Projects</Link>
                    </li>
                    <li className="">
                      <Link to="#">Blog</Link>
                    </li>
                    <li className="">
                      <Link to="#">Pages</Link>
                    </li>
                    <li>
                      <NavLink
                        to="/contact"
                        className={(navData) =>
                          navData.isActive ? "active" : ""
                        }
                      >
                        Contact
                      </NavLink>
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
            <div className="mobile-logo">
              <Link to="/">
                <img src="assets/img/logo.svg" alt="Fixturbo" />
              </Link>
              <button className="menu-toggle" onClick={mobileMenu}>
                <i className="fa fa-times" />
              </button>
            </div>
            <div className="mobile-menu">
              <ul id="offcanvas-navigation">
                <li className="">
                  <NavLink to="#">Home</NavLink>
                </li>
                <li>
                  <NavLink
                    to="/about"
                    className={(navData) => (navData.isActive ? "active" : "")}
                  >
                    About
                  </NavLink>
                </li>
                <li className="">
                  <NavLink to="#">Pages</NavLink>
                </li>
                <li className="">
                  <NavLink to="#">Project</NavLink>
                </li>
                <li className="">
                  <NavLink to="#">Service</NavLink>
                </li>
                <li className="">
                  <NavLink to="#">Shop</NavLink>
                </li>
                <li className="">
                  <NavLink to="#">Blog</NavLink>
                </li>
                <li>
                  <NavLink
                    to="/contact"
                    className={(navData) => (navData.isActive ? "active" : "")}
                  >
                    Contact
                  </NavLink>
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
