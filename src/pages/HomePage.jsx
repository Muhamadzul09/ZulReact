// import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import HomeImage from "../assets/img/hero.png";

import { kelasTerbaru, dataSwiper } from "../data/index";
import { useNavigate } from "react-router-dom";
import FaqComponent from "../components/FaqComponent";

// import Swiper
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div className="homepage">
      <header className="w-100 min-vh-100 d-flex align-items-center overflow-hidden">
        <Container>
          <Row className="header-box d-flex align-items-center pt-lg-5">
            <Col lg="6">
              <h1 className="mb-4 animate__animated animate__fadeInUp">
                Hello Everyone, <br /> <span>Welcome to</span> <br /> ITCyber Community
              </h1>
              <p className="mb-4 animate__animated animate__fadeInUp">Temukan serta kembangkan bakat yang kamu miliki, dengan bergabung bersama kami ITCyber Community</p>
              <button className="btn btn-danger btn-lg rounded-1 me-2 mb-2 mb-xs-0 animate__animated animate__fadeInUp" onClick={() => navigate("/kelas")}>Lihat Kelas</button>
              <button className="btn btn-outline-danger btn-lg rounded-1 mb-2 mb-xs-0 animate__animated animate__fadeInUp">Lihat Promo</button>
            </Col>
            <Col lg="6" className="pt-lg-0 pt-5">
              <img src={HomeImage} alt="Home Image" className="animate__animated animate__fadeInUp animate__delay-1s"/>
            </Col>
          </Row>
        </Container>
      </header>
      <div className="kelas w-100 min-vh-100">
        <Container>
          <Row>
            <Col>
              <h1 className="text-center fw-bold" data-aos="zoom-in" data-aos-duration="1000">Kellas Terbaru</h1>
              <p className="text-center" data-aos="fade-up" data-aos-duration="1000">Berikut ialah kelass terbaru yanmg kami sediakan.</p>
            </Col>
          </Row>
          <Row className="text-center justify-content-center">
            {kelasTerbaru.map((kelas) => {
              return (
                <Col key={kelas.id} className="shadow rounded" data-aos="fade-up" data-aos-duration="1000" data-aos-delay={kelas.delay}>
                  <div>
                    <img src={kelas.image} alt="Kelas Image" className="mb-5 rounded-top" />
                    <div className="star mb-2 px-3">
                      <i className={kelas.star1}></i>
                      <i className={kelas.star2}></i>
                      <i className={kelas.star3}></i>
                      <i className={kelas.star4}></i>
                      <i className={kelas.star5}></i>
                    </div>
                    <h5 className="mb-3 px-3">{kelas.title}</h5>
                    <div className="ket d-flex justify-content-between align-items-center px-3 pb-3">
                      <p className="m-0 text-danger fw-bold">{kelas.price}</p>
                      <button href="#" className="btn btn-primary rounded-1 ">
                        {kelas.buy}
                      </button>
                    </div>
                  </div>
                </Col>
              );
            })}
          </Row>
          <Row>
            <Col className="text-center">
              <button className="btn btn-success btn-lg rounded-2" onClick={() => navigate("/kelas")} data-aos="fade-up" data-aos-duration="1000">
                Lihat Semua Kelas <i className="fa-solid fa-chevron-right ms-2"></i>
              </button>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="testimonial pb-3">
        <Container>
          <Row>
            <Col>
              <h1 className="text-center fw-bold pb-3" data-aos="fade-up-left" data-aos-duration="1000">Testimonial</h1>
            </Col>
          </Row>
          <Row>
            <Swiper
              slidesPerView={1}
              spaceBetween={10}
              pagination={{
                clickable: true,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 40,
                },
                992: {
                  slidesPerView: 2,
                  spaceBetween: 50,
                },
                1200: {
                  slidesPerView: 3,
                  spaceBetween: 50,
                },
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              {dataSwiper.map((data) => {
                return (
                  <SwiperSlide key={data.id} className="shadow-sm" data-aos="fade-up-left" data-aos-duration="1000" data-aos-delay={data.delay}>
                      <p className="desc">{data.desc}</p>
                      <div className="people">
                        <img src={data.image} alt="Testimonial Image" className="" />
                        <div>
                          <h5 className="text-center mb-1">{data.name}</h5>
                          <p className="m-0 fw-bold">{data.skill}</p>
                        </div>
                      </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </Row>
        </Container>
      </div>
{/* select FaqComponent awal */}
      <FaqComponent />
{/* select FaqComponen akhir */}
    </div>
  );
};

export default HomePage;
