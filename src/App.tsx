import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import TaxPreparation from './pages/TaxPreparation';
import AmplifiedWealthBlueprint from './pages/AmplifiedWealthBlueprint';
import StrategicWealthBridge from './pages/StrategicWealthBridge';
import ConciergeStrategy from './pages/ConciergeStrategy';
import BookkeepingStarter from './pages/BookkeepingStarter';
import BookkeepingGrowth from './pages/BookkeepingGrowth';
import HourlyConsultation from './pages/HourlyConsultation';
import About from './pages/About';
import Contact from './pages/Contact';
import LiveAmplified from './pages/LiveAmplified';
import ShopAmplified from './pages/ShopAmplified';
import MyAmplifiedYear from './pages/MyAmplifiedYear';
import Webinar from './pages/Webinar';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/services/tax-preparation" element={<TaxPreparation />} />
      <Route path="/services/amplified-wealth-blueprint" element={<AmplifiedWealthBlueprint />} />
      <Route path="/services/strategic-wealth-bridge" element={<StrategicWealthBridge />} />
      <Route path="/services/concierge-strategy" element={<ConciergeStrategy />} />
      <Route path="/services/bookkeeping" element={<BookkeepingStarter />} />
      <Route path="/services/bookkeeping-growth" element={<BookkeepingGrowth />} />
      <Route path="/services/hourly-consultation" element={<HourlyConsultation />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/liveamplified" element={<LiveAmplified />} />
      <Route path="/shopamplified" element={<ShopAmplified />} />
      <Route path="/my-amplified-year" element={<MyAmplifiedYear />} />
      <Route path="/webinar" element={<Webinar />} />
    </Routes>
  );
}

export default App;