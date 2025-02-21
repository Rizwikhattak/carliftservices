import React, { useEffect, useState } from "react";
import HeaderTwo from "../components/HeaderTwo";
import HeroTwo from "../components/HeroTwo";
  import AboutTwo from "../components/AboutTwo";
import CounterTwo from "../components/CounterTwo";
import WhyChooseUsOne from "../components/WhyChooseUsOne";
import ProcessAreaTwo from "../components/ProcessAreaTwo";
import AppointmentAreaTwo from "../components/AppointmentAreaTwo";
import TestimonialOne from "../components/TestimonialOne";

import FaqAreaOne from "../components/FaqAreaOne";

import FooterAreaTwo from "../components/FooterAreaTwo";
import Preloader from "../helper/Preloader";

const HomePageTwo = () => {
  let [active, setActive] = useState(true);
  useEffect(() => {
    setTimeout(function () {
      setActive(false);
    }, 2000);
  }, []);
  return (
    <>
      {/* Preloader */}
      {active === true && <Preloader />}

      {/* Header Two */}
      <HeaderTwo />

      {/* Hero Two */}
      <HeroTwo />

      {/* Why Choose Us One */}
      <div className="py-50">
        <WhyChooseUsOne />
      </div>
      {/* About Two */}
      <div className="about-area-2 bg-smoke">
        <AboutTwo />
      </div>

      {/* Counter Two */}
      <CounterTwo />

      {/* Process Area Two */}
      <ProcessAreaTwo />

      {/* Appointment Area Two */}
      <AppointmentAreaTwo />

      {/* Client Area Two */}
      <TestimonialOne />
      <div className="py-5">
        {/* Faq Area Two */}
        <FaqAreaOne />
      </div>

      {/* Footer Area Two */}
      <FooterAreaTwo />
    </>
  );
};

export default HomePageTwo;
