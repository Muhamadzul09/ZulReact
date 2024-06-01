import { Container, Row, Col } from "react-bootstrap";
import FaqComponent from "../components/FaqComponent";

const SyaratKeterPage = () => {
  return (
    <div className="syaratKetenPage">
      <div className="syaratKeten min-vh-100">
        <Container>
          <Row>
            <Col>
              <h1 className="text-center fw-bold animate__animated animate__fadeInUp animate__delay-1s">Syarat & Ketentuan</h1>
              <p className="text-center animate__animated animate__fadeInUp animate__delay-1s">Berikut ialah syarat & ketentuan yang kami berikan</p>
            </Col>
          </Row>
          <Row className="pt-5">
            <Col>
              <p>Dengan menggunakan platform pembelajaran online ini, pengguna diharapkan untuk memahami dan menyetujui syarat dan ketentuan yang tercantum di bawah ini. Mohon untuk membaca dengan seksama sebelum menggunakan layanan kami.</p>
            </Col>
          </Row>
          <Row className="py-3">
            <Col>
              <h4 className="fw-bold">1. Pendaftaran dan Keanggotaan</h4>
              <ul>
                <li>Setiap pengguna harus mendaftar dan membuat akun untuk mengakses materi pembelajaran dan fitur platform</li>
                <li>Setiap pengguna bertanggung jawab untuk menjaga keamanan dan kerahasiaan informasi akun mereka</li>
              </ul>
            </Col>
          </Row>
          <Row className="py-3">
            <Col>
              <h4 className="fw-bold">2. Pembayaran dan Pembatalan</h4>
              <ul>
                <li>Pembayaran harus dilakukan sesuai dengan tarif yang ditetapkan untuk mengakses kursus atau layanan tambahan.</li>
                <li>Pembatalan langganan atau kursus dapat dilakukan sesuai dengan kebijakan pembatalan yang berlaku.</li>
              </ul>
            </Col>
          </Row>
          <Row className="py-3">
            <Col>
              <h4 className="fw-bold">3. Perubahan Syarat dan Ketentuan</h4>
              <ul>
                <li>Platform berhak untuk mengubah atau memperbarui syarat dan ketentuan ini sesuai dengan kebijakan platform.</li>
              </ul>
            </Col>
          </Row>
          <Row className="py-3">
            <Col>
              <h4 className="fw-bold">4. Hukum yang Berlaku</h4>
              <ul>
                <li>Syarat dan ketentuan ini diatur oleh hukum yang berlaku di negara tempat platform beroperasi.</li>
              </ul>
            </Col>
          </Row>
        </Container>
      </div>
      <FaqComponent />
    </div>
  )
}

export default SyaratKeterPage
