import { Container, Row, Col, Accordion } from "react-bootstrap";
import { faq } from "../data/index";

function FaqComponent() {
  return (
    <div className="faq">
      <Container>
        <Row>
          <Col>
            <h2 className="text-center fw-bold mb-5" data-aos="fade-up-right" data-aos-duration="1000">Pertanyaan yang sering ditanyakan</h2>
          </Col>
        </Row>
        <Row className="row-cols-lg-2 row-cols-1 g-3 pt-3">
          {faq.map((item) => (
            <Col key={item.id}>
              <Accordion className="shadow-sm">
                <Accordion.Item eventKey={item.eventKey}>
                  <Accordion.Header>{item.title}</Accordion.Header>
                  <Accordion.Body>{item.desc}</Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  )
}

export default FaqComponent
