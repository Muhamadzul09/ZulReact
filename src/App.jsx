import { Routes, Route } from 'react-router-dom';
import NavbarComponent from './components/NavbarComponent';
import FooterComponent from './components/FooterComponent';

import HomePage from './pages/HomePage';
import KelasPage from './pages/KelasPage';
import FaqPage from './pages/FaqPage';
import TestimonialPage from './pages/TestimonialPage';
import SyaratKeterPage from './pages/SyaratKeterPage';

function App() {
  return (
    <div className="App">
      <NavbarComponent /> 
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/kelas" element={<KelasPage />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/testimonial" element={<TestimonialPage />} />
        <Route path="/syaratketen" element={<SyaratKeterPage />} />
      </Routes>
      <FooterComponent />
    </div>
  );
}

export default App;