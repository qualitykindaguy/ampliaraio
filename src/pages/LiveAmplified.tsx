import React from 'react';
import Navbar from '../components/Navbar';
import FooterSection from '../components/FooterSection';

function LiveAmplified() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-r from-[#174a21]/10 to-[#996516]/10">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-[#174a21] mb-8">
              Live Amplified Resources
            </h1>
          </div>
        </div>
      </section>

      <FooterSection />
    </div>
  );
}

export default LiveAmplified;