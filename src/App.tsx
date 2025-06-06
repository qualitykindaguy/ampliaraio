import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import TaxPreparation from './pages/TaxPreparation';
import BookkeepingStarter from './pages/BookkeepingStarter';
import BookkeepingGrowth from './pages/BookkeepingGrowth';
import HourlyConsultation from './pages/HourlyConsultation';
import About from './pages/About';
import Contact from './pages/Contact';
import LiveAmplified from './pages/LiveAmplified';
import ShopAmplified from './pages/ShopAmplified';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/services/tax-preparation" element={<TaxPreparation />} />
      <Route path="/services/bookkeeping" element={<BookkeepingStarter />} />
      <Route path="/services/bookkeeping-growth" element={<BookkeepingGrowth />} />
      <Route path="/services/hourly-consultation" element={<HourlyConsultation />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/liveamplified" element={<LiveAmplified />} />
      <Route path="/shopamplified" element={<ShopAmplified />} />
    </Routes>
  );
}

export default App;