import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import TaxPreparation from './pages/TaxPreparation';
import JudgmentFree from './pages/JudgmentFree';
import BudgetThrive from './pages/BudgetThrive';
import EntrepreneurStarter from './pages/EntrepreneurStarter';
import EntrepreneurGrowth from './pages/EntrepreneurGrowth';
import StressFreeEntrepreneur from './pages/StressFreeEntrepreneur';
import BookkeepingStarter from './pages/BookkeepingStarter';
import BookkeepingGrowth from './pages/BookkeepingGrowth';
import HourlyConsultation from './pages/HourlyConsultation';
import About from './pages/About';
import Contact from './pages/Contact';
import LiveAmplified from './pages/LiveAmplified';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/services/tax-preparation" element={<TaxPreparation />} />
      <Route path="/judgefree" element={<JudgmentFree />} />
      <Route path="/budget-thrive" element={<BudgetThrive />} />
      <Route path="/entrepreneur-starter" element={<EntrepreneurStarter />} />
      <Route path="/entrepreneur-growth" element={<EntrepreneurGrowth />} />
      <Route path="/services/stress-free-entrepreneur" element={<StressFreeEntrepreneur />} />
      <Route path="/services/bookkeeping" element={<BookkeepingStarter />} />
      <Route path="/services/bookkeeping-growth" element={<BookkeepingGrowth />} />
      <Route path="/services/hourly-consultation" element={<HourlyConsultation />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/liveamplified" element={<LiveAmplified />} />
    </Routes>
  );
}

export default App;