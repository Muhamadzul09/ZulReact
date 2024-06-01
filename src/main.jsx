import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import scroll
import ScrollToTop from './components/ScrollToTop'
// css sendiri
import './dist/css/main.css'
// css animate
import 'animate.css';
// animate aos
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

// css dari bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
// import './index.css'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
