import React from 'react';
import Navbar from '../components/Navbar';
import FooterSection from '../components/FooterSection';
import { Play } from 'lucide-react';

function BookConsultation() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="py-20 px-4 bg-[#174a21] text-white relative overflow-hidden">
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 leading-tight">
              Hey Wealth Builder,
            </h1>
            
            <p className="text-xl md:text-2xl leading-relaxed max-w-4xl mx-auto">
              I'll work with you to increase your after-tax profits by <span className="text-yellow-300 font-bold">$10K–$50K+ per year</span> using advanced, IRS-approved tax strategies your current CPA probably hasn't shown you.
            </p>
            
            <p className="text-lg md:text-xl">
              Ready to discover how much you could be saving? Watch the short video below to see how this works, then book your free consultation.
            </p>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="aspect-video max-w-4xl mx-auto">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/n3lmaFG7WAo"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="rounded-2xl"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Why Book Section */}
      <section className="py-20 px-4 bg-[#174a21]/5">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl font-black text-[#174a21] mb-16 text-center">
            Why Book Your Free Tax Strategy Call?
          </h2>
          
          <div className="space-y-16">
            <div className="flex items-start gap-8">
              <div className="text-8xl font-black text-[#174a21] leading-none">A)</div>
              <div className="mb-6">
                <h3 className="text-3xl font-bold text-[#174a21] mb-4">It's Proven to Work for High-Earning Professionals</h3>
                <p className="text-xl text-[#174a21]/80 leading-relaxed">
                  These calls have helped doctors, lawyers, and consultants uncover $10K–$50K+ in missed tax savings every year.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-8">
              <div className="text-8xl font-black text-[#996516] leading-none">B)</div>
              <div className="mb-6">
                <h3 className="text-3xl font-bold text-[#174a21] mb-4">You'll Get Personalized Guidance You Can Actually Use</h3>
                <p className="text-xl text-[#174a21]/80 leading-relaxed">
                  We'll review your current setup and highlight strategies you may be missing — so you leave the call knowing exactly where you stand.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-8">
              <div className="text-8xl font-black text-[#174a21] leading-none">C)</div>
              <div className="mb-6">
                <h3 className="text-3xl font-bold text-[#174a21] mb-4">I Guarantee I Can Help You</h3>
                <p className="text-xl text-[#174a21]/80 leading-relaxed">
                  If we can't identify at least $10,000 in potential tax savings, you don't pay us a dime. No risk. No catch. Just clarity and control.
                </p>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <a
              href="https://api.taxnitro.com/widget/bookings/ampliaraworkingtogether"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#996516] text-white px-12 py-4 text-2xl font-bold hover:bg-[#996516]/90 transition duration-300 transform hover:scale-105"
            >
              Schedule My Free Call
            </a>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 bg-[#174a21] text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-black mb-8">Don't Let the IRS Treat You Like Just Another "Taxpayer"</h2>
          
          <div className="space-y-6 text-xl leading-relaxed mb-12">
            <p>You're a wealth builder and business leader who deserves to keep more of what you earn.</p>
            
            <p>If you're ready to reduce your tax liability and increase your profits in 2025, click the button below and book your free call on the next page.</p>
          </div>
          
          <div className="mb-12">
            <a
              href="https://api.taxnitro.com/widget/bookings/ampliaraworkingtogether"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-[#174a21] px-12 py-4 text-2xl font-bold hover:bg-white/90 transition duration-300 transform hover:scale-105"
            >
              Schedule My Free Tax Strategy Call Now
            </a>
          </div>
          
          <div className="border-t-4 border-white pt-8">
            <div className="text-center space-y-4">
              <p className="text-xl">To your success,</p>
              <div className="border-l-4 border-[#996516] pl-6 inline-block text-left">
                <p className="text-3xl font-black">Sainte Billings, CPA</p>
                <p className="text-xl text-[#996516] font-bold">Founder, Ampliara PLLC</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer / Disclaimer Section */}
      <section className="py-16 px-4 bg-[#174a21] text-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center space-y-6">
            <h4 className="text-xl font-bold text-white mb-4">DISCLAIMER</h4>
            <p className="text-white/90 leading-relaxed">
              This call is for educational purposes and does not constitute formal tax advice until an engagement is signed. 
              Savings opportunities are based on IRS-compliant strategies; individual results vary. Guarantee applies only to 
              qualifying clients after full analysis.
            </p>
            
            <div className="border-t border-white/30 pt-6 mt-8">
              <p className="text-white/70">
                © 2025 Ampliara PLLC. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </section>

      <FooterSection />
    </div>
  );
}

export default BookConsultation;