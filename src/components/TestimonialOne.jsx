import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, FreeMode, Thumbs, EffectFade } from "swiper";
const TestimonialOne = () => {

  return (
    <div
      className="testimonial-area-1 overflow-hidden"
      style={{ backgroundImage: "url(assets/img/bg/testimonial-bg1-1.png)" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="testimonial-thumb1">
              <img
                src="assets/img/testimonial/testimonial-1-1.png"
                className=""
                style={{ width: "100%", margin: "auto 0px" }}
                alt="Fixturbo"
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="space">
              <div className="title-area">
                <span className="sub-title">What Our Customers Say</span>

                <h2 className="sec-title text-white">
                  Real Experiences, <br /> Reliable Rides
                </h2>
              </div>
              <div className="row global-carousel testi-slider-1">
                <Swiper
                  loop={true}
                  navigation={{
                    nextEl: ".testimonialOne-button-next",
                    prevEl: ".testimonialOne-button-prev",
                  }}
                  spaceBetween={20}
                  slidesPerGroup={1}
                  speed={1000}
                  autoplay={{ delay: 6000 }}
                  pagination={true}
                  className="mySwiper"
                  modules={[FreeMode, Navigation, Thumbs, EffectFade]}
                  breakpoints={{
                    0: {
                      slidesPerView: 1,
                    },
                    500: {
                      slidesPerView: 1,
                    },
                    768: {
                      slidesPerView: 1,
                    },
                    992: {
                      slidesPerView: 1,
                    },
                    1200: {
                      slidesPerView: 1,
                    },
                    1400: {
                      slidesPerView: 1,
                    },
                  }}
                >
                  <SwiperSlide>
                    <div>
                      <div className="testi-card">
                        <div className="testi-card_content">
                          <div className="testi-card-profile">
                            <div className="testi-card-profile-details">
                              <h4 className="testi-profile-title">
                                Adeel Khan
                              </h4>
                              <span className="testi-profile-desig">
                                Customer
                              </span>
                            </div>
                            <div className="quote-icon">
                              <img
                                src="assets/img/icon/quote1-1.svg"
                                alt="Fixturbo"
                              />
                            </div>
                          </div>
                          <p className="testi-card_text">
                            Finding a safe and reliable car lift service was a
                            challenge until I found this one! The vehicles are
                            clean, well-maintained, and comfortable, and I love
                            how easy it is to book via WhatsApp. Makes my daily
                            work commute hassle-free!
                          </p>
                          <div className="rating">
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div>
                      <div className="testi-card">
                        <div className="testi-card_content">
                          <div className="testi-card-profile">
                            <div className="testi-card-profile-details">
                              <h4 className="testi-profile-title">
                                Usman Raza
                              </h4>
                              <span className="testi-profile-desig">
                                Customer
                              </span>
                            </div>
                            <div className="quote-icon">
                              <img
                                src="assets/img/icon/quote1-1.svg"
                                alt="Fixturbo"
                              />
                            </div>
                          </div>
                          <p className="testi-card_text">
                            Great service with affordable rates! I travel
                            between Al Nahda and Business Bay every week, and
                            the experience has always been smooth. Highly
                            punctual and trustworthy – would definitely
                            recommend it to friends and colleagues!
                          </p>
                          <div className="rating">
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div>
                      <div className="testi-card">
                        <div className="testi-card_content">
                          <div className="testi-card-profile">
                            <div className="testi-card-profile-details">
                              <h4 className="testi-profile-title">
                                Sarah Ahmed
                              </h4>
                              <span className="testi-profile-desig">
                                Customer
                              </span>
                            </div>
                            <div className="quote-icon">
                              <img
                                src="assets/img/icon/quote1-1.svg"
                                alt="Fixturbo"
                              />
                            </div>
                          </div>
                          <p className="testi-card_text">
                            Finding a safe and reliable car lift service was a
                            challenge until I found this one! The vehicles are
                            clean, well-maintained, and comfortable, and I love
                            how easy it is to book via WhatsApp. Makes my daily
                            work commute hassle-free!
                          </p>
                          <div className="rating">
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>

                <div className="testimonialOne arrow">
                  <div className=" testimonialOne-button-next testimonialOne-button">
                    <i className="fas fa-arrow-left"></i>
                  </div>
                  <div className=" testimonialOne-button-prev testimonialOne-button">
                    <i className="fas fa-arrow-right"></i>
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

export default TestimonialOne;
