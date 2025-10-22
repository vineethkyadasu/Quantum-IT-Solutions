import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import ScrollToTop from './components/ScrollToTop';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import Homepage from './components/HomePage';

function App() {
  return (
    <Router>
      <div className="App min-h-screen flex flex-col">
        <ScrollToTop />
        <Header />
        <div className="pt-16 flex-grow">
          <Routes>
            <Route path="/" element={<Homepage/>} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </div>
        <Footer />
        
        {/* Global WhatsApp Button - appears on all pages */}
        <WhatsAppButton />
      </div>
    </Router>
  );
}

export default App;