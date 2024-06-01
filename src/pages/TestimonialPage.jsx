import { Container, Row, Col } from 'react-bootstrap';
import { testimonial } from "../data/index";
import FaqComponent from '../components/FaqComponent';

const TestimonialPage = () => {
  return (
    <div className='testimonialPage'>
      <div className="testimonial">
        <Container>
          <Row className='mb-5'>
            <Col>
              <h1 className='text-center fw-bold animate__animated animate__fadeInUp animate__delay-1s  ' >Semua Testimonial</h1>
              <p className='text-center animate__animated animate__fadeInUp animate__delay-1s'>Berikut ialah testimonial dari pelanggan kami yang bisa kami perlihatkan.</p>
            </Col>
          </Row>
          <Row className="row-cols-lg-3 row-cols-1">
          {testimonial.map((data) => {
                return (
                  <Col key={data.id} className="mb-5 shadow-sm" data-aos="fade-up" data-aos-duration="1000" data-aos-delay={data.delay}>
                      <p className="desc">{data.desc}</p>
                      <div className="people">
                        <img src={data.image} alt="Testimonial Image" className="" />
                        <div>
                          <h5 className="text-center mb-1">{data.name}</h5>
                          <p className="m-0 fw-bold">{data.skill}</p>
                        </div>
                      </div>
                  </Col>
                );
              })}
          </Row>
        </Container>
      </div>
      <FaqComponent />
    </div>
  )
}

export default TestimonialPage
