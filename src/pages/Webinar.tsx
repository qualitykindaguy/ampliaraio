import React from 'react';
import Navbar from '../components/Navbar';
import FooterSection from '../components/FooterSection';
import sainteNew from '../assets/sainte-new.png';

function Webinar() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-0 px-4 bg-[#174a21] relative">
        <div className="container mx-auto text-center">
          {/* FREE LIVE WEBINAR Badge */}
          <div className="inline-block bg-[#996516] text-white px-6 py-2 rounded-full font-bold text-sm mb-8">
            FREE LIVE WEBINAR
          </div>
          
          {/* Date Badge */}
          <div className="inline-block bg-white/20 backdrop-blur-sm text-white px-8 py-3 rounded-full font-bold text-lg mb-8 border border-white/30">
            📅 September 24, 2025
          </div>
          
          {/* Main Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-8 leading-tight">
            MOMENTUM<br />
            <span className="text-[#996516]">ON REPEAT</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-lg md:text-xl text-white/90 max-w-4xl mx-auto mb-12 leading-relaxed">
            Because ONE tax season win isn't enough!
          </p>
          
          <p className="text-lg md:text-xl text-white/90 max-w-4xl mx-auto mb-12 leading-relaxed">
            This is your MONTHLY money strategy reset — your recurring chance to align your finances, 
            refine your goals, and build REAL wealth... ON PURPOSE.
          </p>
        </div>
        
        {/* Hero Image */}
        <div className="relative">
          <img
            src={sainteNew}
            alt="Sainte Billings, CPA"
            className="w-full max-w-2xl mx-auto"
            width="600"
            height="450"
          />
          {/* Name Badge Overlay */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-[#996516] text-white px-6 py-2 font-bold text-sm md:text-base">
            Sainte Billings, Certified Public Accountant
          </div>
        </div>
      </section>

      {/* Registration Section */}
      <section className="py-0 px-4 bg-[#996516] text-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen">
            {/* Left Side - Content */}
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight">
                The tax game has <span className="text-[#174a21]">CHANGED</span>
              </h2>
              
              <p className="text-lg text-white/90 leading-relaxed">
                And if you're still playing by the old rules, you're not just behind — you're UNDERBUILDING.
              </p>
              
              <p className="text-lg text-white/90 leading-relaxed">
                Every month you wait is another month of MISSED strategy, WASTED dollars, and COMPOUNDING regret.
              </p>
            </div>

            {/* Right Side - Form */}
            <div className="bg-white rounded-lg p-8">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-[#174a21] mb-4">Secure Your Free Spot Below</h3>
                <p className="text-[#174a21]/80 mb-4">This isn't just another webinar...</p>
                <p className="text-[#174a21]/80 font-semibold">It's the most PROFITABLE hour of your month!</p>
                <div className="mt-4 p-3 bg-[#174a21]/10 rounded-lg">
                  <p className="text-[#174a21] font-bold text-lg">📅 September 24, 2025</p>
                  <p className="text-[#174a21]/80 text-sm">Mark your calendar now!</p>
                </div>
              </div>
              
              <div className="min-h-[500px] w-full overflow-hidden">
                <iframe
                  src="https://api.taxnitro.com/widget/form/gASBGaRIppZUg8vyLPDW"
                  style={{width:'100%', height:'500px', border:'none', borderRadius:'4px'}}
                  id="inline-gASBGaRIppZUg8vyLPDW"
                  data-layout="{'id':'INLINE'}"
                  data-trigger-type="alwaysShow"
                  data-trigger-value=""
                  data-activation-type="alwaysActivated"
                  data-activation-value=""
                  data-deactivation-type="neverDeactivate"
                  data-deactivation-value=""
                  data-form-name="Big Beautiful Bill Breakdown"
                  data-height="500"
                  data-layout-iframe-id="inline-gASBGaRIppZUg8vyLPDW"
                  data-form-id="gASBGaRIppZUg8vyLPDW"
                  title="Big Beautiful Bill Breakdown Registration"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Attend Section */}
      <section className="py-16 px-4 bg-[#174a21]">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-black text-white mb-8 text-center">
              Why You NEED to Attend
            </h3>
            
            <p className="text-lg text-white/90 mb-8 text-center leading-relaxed">
              Taxes are probably your BIGGEST business expense.
            </p>
            
            <p className="text-lg text-white/90 mb-8 text-center leading-relaxed">
              And chances are, you're paying WAY too much without even realizing it.
            </p>
            
            <p className="text-lg text-white mb-8 text-center leading-relaxed font-bold">
              Here's what you'll DISCOVER inside this game-changing session:
            </p>
            
            <ul className="space-y-4 text-white/90 max-w-3xl mx-auto">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-[#996516] rounded-full mt-3 flex-shrink-0"></span>
                <div>You're unknowingly DONATING thousands to the IRS (and how to STOP it)</div>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-[#996516] rounded-full mt-3 flex-shrink-0"></span>
                <div>The tax code has CHANGED — your strategy hasn't (this is COSTING you)</div>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-[#996516] rounded-full mt-3 flex-shrink-0"></span>
                <div>Your business should be building WEALTH, not just covering bills</div>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-[#996516] rounded-full mt-3 flex-shrink-0"></span>
                <div>HIDDEN tax loopholes exist — and we'll show you EXACTLY where to find them</div>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-[#996516] rounded-full mt-3 flex-shrink-0"></span>
                <div>Wealth isn't built on hustle or hope — it's built on SMART strategy</div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Training Benefits Section */}
      <section className="py-16 px-4 bg-[#996516]">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl md:text-4xl font-black text-white mb-8">
              Turn Insight Into INCOME
            </h3>
            
            <p className="text-lg text-white/90 mb-4">
              This isn't some basic "tax tips" webinar.
            </p>
            
            <p className="text-lg text-white/90 mb-8">
              It's REAL, tactical training from strategies we use to help business owners save 5-6 figures a year.
            </p>
            
            <p className="text-lg text-white mb-8 font-bold">
              You'll MASTER:
            </p>
            
            <ul className="space-y-4 text-white/90 max-w-3xl mx-auto mb-12 text-left">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-white rounded-full mt-3 flex-shrink-0"></span>
                <div>How to LEGALLY slash your taxable income</div>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-white rounded-full mt-3 flex-shrink-0"></span>
                <div>How to turn everyday spending into POWERFUL deductions</div>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-white rounded-full mt-3 flex-shrink-0"></span>
                <div>How to structure your business for MAXIMUM tax advantages</div>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-white rounded-full mt-3 flex-shrink-0"></span>
                <div>What your accountant probably ISN'T telling you (this will shock you)</div>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-white rounded-full mt-3 flex-shrink-0"></span>
                <div>How to make the IRS work FOR YOU (yes, really!)</div>
              </li>
            </ul>
            
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg">
              <p className="text-lg text-white mb-4">
                And YES — if you want our help to create your own CUSTOM plan, we'll tell you how at the end.
              </p>
              
              <p className="text-lg text-white mb-2">NO pressure.</p>
              <p className="text-lg text-white font-semibold">Just REAL strategy that WORKS.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 bg-[#174a21] text-white">
        <div className="container mx-auto text-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="bg-[#996516] text-white p-8 rounded-lg">
              <div className="flex items-start gap-4">
                <img
                  src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg"
                  alt="Testimonial"
                  className="w-16 h-16 rounded-full object-cover flex-shrink-0"
                />
                <div className="text-left">
                  <p className="text-lg font-semibold mb-2">
                    "You provided a WEALTH of knowledge — I've already saved THOUSANDS!"
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-[#996516] text-white p-8 rounded-lg">
              <div className="flex items-start gap-4">
                <img
                  src="https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg"
                  alt="Testimonial"
                  className="w-16 h-16 rounded-full object-cover flex-shrink-0"
                />
                <div className="text-left">
                  <p className="text-lg font-semibold mb-2">
                    "I feel SUPER blessed to be part of such a POWERFUL community — I only wish I'd joined SOONER!"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 px-4 bg-[#174a21]">
        <div className="container mx-auto max-w-4xl text-center">
          <h3 className="text-3xl md:text-4xl font-black text-white mb-8">
            Click Below to CLAIM Your Seat NOW
          </h3>
          
          <p className="text-lg text-white/90 mb-4 font-semibold">Wealth doesn't wait.</p>
          <p className="text-lg text-white/90 mb-8 font-semibold">Neither should YOU.</p>
          
          <a
            href="https://api.taxnitro.com/widget/form/gASBGaRIppZUg8vyLPDW"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#996516] text-white px-8 py-4 rounded-lg hover:bg-[#996516]/90 transition duration-300 text-lg font-semibold"
          >
            Register Now
          </a>
        </div>
      </section>

      {/* P.S. Section */}
      <section className="py-16 px-4 bg-[#996516]">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg">
            <h4 className="text-xl font-bold text-white mb-4">P.S.</h4>
            
            <p className="text-lg text-white/90 mb-4">
              This is your monthly financial POWER hour.
            </p>
            
            <p className="text-lg text-white/90 mb-4">
              NO fluff, NO filler, NO confusing tax talk.
            </p>
            
            <p className="text-lg text-white/90">
              Just REAL strategy you can apply IMMEDIATELY to keep more, grow more, and finally get in the financial driver's seat.
            </p>
          </div>
        </div>
      </section>

      <FooterSection />
      
      <script src="https://api.taxnitro.com/js/form_embed.js"></script>
    </div>
  );
}

export default Webinar;