import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";


const FooterComponent = () => {
  return (
    <div className="footer py-5" data-aos="zoom-in" data-aos-duration="1000">
      <Container>
        <Row className="display-flex justify-content-between">
          <Col lg="5">
            <h3 className="fw-bold">Ngoding.</h3>
            <p className="desc">Hello, kami dari Organisasi ITCyber Community 
              akan seang sekali berbagi ilmu kepada kalian semuannya, 
              khususnya Kota Tangerang selatan Kabupate Tangerang</p>
              <div className="no mb-1 mt-4">
                <Link className="text-decoration-none">
                  <i className="fa-brands fa-whatsapp"></i>
                  <p className="m-0">+62 0812-5897-7482</p>
                </Link>
              </div>
              <div className="mail">
                <Link className="text-decoration-none">
                  <i className="fa-regular fa-envelope"></i>
                  <p className="m-0">muhamad@gmail.com</p>
                </Link>
              </div>
          </Col>
          <Col className="d-flex flex-column col-lg-2 mt-lg-0 mt-5">
            <h5 className="fw-bold">menu</h5>
            <Link to="/">Home</Link>
            <Link to="/kelas">Kelas</Link>
            <Link to="/testimonial">Testimonial</Link>
            <Link to="/faq">FAQ</Link>
            <Link to="/syaratketen">Syarat & Ketentuan</Link>
          </Col>
          <Col lg="5" className="mt-lg-0 mt-5">
            <h5 className="fw-bold mb-3">Subscribe untuk innfo menarik lainnya</h5>
            <div className="subscribes">
              <input className="w-50" type="text" placeholder="Subscribe..."/>
              <button className="btn btn-danger rounded-end rounded-0">Subscribe</button>
            </div>
            <div className="socmed mt-3">
              <i className="fa-brands fa-facebook"></i>
              <i className="fa-brands fa-instagram"></i>
              <i className="fa-brands fa-twitter"></i>
              <i className="fa-brands fa-youtube"></i>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="text-center px-md-0 px-3">&copy; Copyright {new Date().getFullYear()} by <span className="fw-bold">ITCyber Community</span>, All Rights Reserved</p></Col>
        </Row>
      </Container>
    </div>
  )
}

export default FooterComponent
