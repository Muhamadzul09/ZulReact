import { Container, Row, Col } from 'react-bootstrap';
import { semuaKelas } from "../data/index";
import FaqComponent from '../components/FaqComponent';

const KelasPage = () => {
  return (
    <div className="kelasPage">
      <div className='kelas'>
        <Container>
          <Row>
            <Col>
              <h1 className="text-center fw-bold animate__animated animate__fadeInUp animate__delay-1s">Semua Kelas</h1>
              <p className='text-center animate__animated animate__fadeInUp animate__delay-1s'>Berikut ialah kelass terbaru yanmg kami sediakan,Salam 1001 Agenda.</p>
            </Col>
          </Row>
          <Row className="justify-content-center">
          {semuaKelas.map((kelas) => {
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
        </Container>
      </div>
      <FaqComponent />
    </div>
  )
}

export default KelasPage
