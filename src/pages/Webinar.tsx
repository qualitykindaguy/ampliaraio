import React from 'react';
import Navbar from '../components/Navbar';
import FooterSection from '../components/FooterSection';
import sainteNew from '../assets/sainte-new.png';

function Webinar() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 bg-gray-50">
        <div className="container mx-auto text-center">
          {/* FREE WEBINAR Badge */}
          <div className="inline-block bg-[#D4AF37] text-black px-8 py-3 rounded-full font-bold text-lg mb-8">
            FREE LIVE WEBINAR
          </div>
          
          {/* Date Badge */}
          <div className="bg-white text-black px-16 py-8 rounded-2xl shadow-lg mb-12 max-w-md mx-auto transform hover:scale-105 transition-transform duration-300">
            <div className="text-5xl md:text-6xl font-black mb-2">
              SEPTEMBER 24
            </div>
            <div className="text-3xl md:text-4xl font-bold text-gray-700">
              2025
            </div>
            <div className="text-lg font-semibold text-gray-600 mt-2">
              MARK YOUR CALENDAR
            </div>
          </div>
          
          {/* Main Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-black mb-4 leading-tight">
            MOMENTUM
          </h1>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-[#D4AF37] mb-8 leading-tight">
            ON REPEAT
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-black max-w-4xl mx-auto mb-8 leading-relaxed font-medium">
            Because ONE tax season win isn't enough!
          </p>
          
          <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto mb-12 leading-relaxed">
            This is your MONTHLY money strategy reset — your recurring chance to align your finances, 
            refine your goals, and build REAL wealth... ON PURPOSE.
          </p>
        </div>
        
        {/* Hero Image */}
        <div className="relative max-w-2xl mx-auto">
          <img
            src={sainteNew}
            alt="Sainte Billings, CPA"
            className="w-full rounded-2xl shadow-xl"
            width="600"
            height="450"
          />
          {/* Name Badge Overlay */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-[#D4AF37] text-black px-6 py-3 font-bold text-lg rounded-lg shadow-lg">
            Sainte Billings, Certified Public Accountant
          </div>
        </div>
      </section>

      {/* Registration Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
            {/* Left Side - Content */}
            <div className="space-y-8">
              <h2 className="text-3xl md:text-5xl font-black leading-tight text-black">
                The tax game has <span className="text-[#D4AF37]">CHANGED</span>
              </h2>
              
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                And if you're still playing by the old rules, you're not just behind — you're UNDERBUILDING.
              </p>
              
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                Every month you wait is another month of MISSED strategy, WASTED dollars, and COMPOUNDING regret.
              </p>

              {/* CTA Section */}
              <div className="bg-gray-50 p-8 rounded-2xl">
                <h3 className="text-2xl md:text-3xl font-bold text-black mb-4">Secure Your Free Spot Below</h3>
                <p className="text-lg text-gray-700 mb-2">This isn't just another webinar...</p>
                <p className="text-lg text-black font-bold">It's the most PROFITABLE hour of your month!</p>
                <a
                  href="https://api.taxnitro.com/widget/form/ivupNG3kiDfoxBnvBIDn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-[#D4AF37] text-black px-8 py-4 rounded-xl hover:bg-[#B8941F] transition duration-300 text-xl font-bold shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  REGISTER NOW!
                </a>
              </div>
            </div>

            {/* Right Side - Form */}
            <div className="bg-white border-2 border-gray-200 rounded-2xl p-4 md:p-8 shadow-lg mx-4 md:mx-0 text-center">
              <div className="text-center mb-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-black font-bold text-xl">September 24, 2025</p>
                  <p className="text-gray-600">Mark your calendar now!</p>
                </div>
              </div>
              
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-black">Don't Miss Out!</h3>
                <p className="text-lg text-gray-700">
                  This webinar will reveal the exact strategies we use to help business owners save 
                  5-6 figures annually in taxes.
                </p>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="text-black font-semibold mb-4">What you'll get:</p>
                  <ul className="text-left space-y-2 text-gray-700">
                    <li>✓ Tax reduction strategies</li>
                    <li>✓ Business structure optimization</li>
                    <li>✓ Wealth building techniques</li>
                    <li>✓ Live Q&A session</li>
                  </ul>
                </div>
                <a
                  href="https://api.taxnitro.com/widget/form/ivupNG3kiDfoxBnvBIDn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-[#D4AF37] text-black px-10 py-4 rounded-xl hover:bg-[#B8941F] transition duration-300 text-xl font-bold shadow-lg hover:shadow-xl transform hover:scale-105 w-full"
                >
                  SECURE YOUR SPOT NOW!
                </a>
                <p className="text-sm text-gray-500">
                  Limited seats available • 100% Free
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Attend Section */}
      <section className="py-16 px-4 bg-black text-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl md:text-5xl font-black text-white mb-8">
              What You'll Learn When You Sign Up
            </h3>
            
            <p className="text-xl md:text-2xl text-white mb-6 font-medium">
              Taxes are probably your BIGGEST business expense.
            </p>
            
            <p className="text-xl md:text-2xl text-white mb-8 font-medium">
              And chances are, you're paying WAY too much without even realizing it.
            </p>
            
            <p className="text-lg md:text-xl text-[#D4AF37] mb-12 font-bold">
              Here's what you'll DISCOVER inside this game-changing session:
            </p>
            
            <div className="space-y-6 text-left max-w-3xl mx-auto">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-[#D4AF37] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-black font-bold">✓</span>
                </div>
                <p className="text-lg md:text-xl text-white">You're unknowingly DONATING thousands to the IRS (and how to STOP it)</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-[#D4AF37] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-black font-bold">✓</span>
                </div>
                <p className="text-lg md:text-xl text-white">The tax code has CHANGED — your strategy hasn't (this is COSTING you)</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-[#D4AF37] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-black font-bold">✓</span>
                </div>
                <p className="text-lg md:text-xl text-white">Your business should be building WEALTH, not just covering bills</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-[#D4AF37] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-black font-bold">✓</span>
                </div>
                <p className="text-lg md:text-xl text-white">HIDDEN tax loopholes exist — and we'll show you EXACTLY where to find them</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-[#D4AF37] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-black font-bold">✓</span>
                </div>
                <p className="text-lg md:text-xl text-white">Wealth isn't built on hustle or hope — it's built on SMART strategy</p>
              </div>
            </div>
            
            <div className="text-center mt-12">
            </div>
          </div>
        </div>
      </section>

      {/* Training Benefits Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl md:text-5xl font-black text-black mb-8">
              Turn Insight Into INCOME
            </h3>
            
            <p className="text-xl md:text-2xl text-gray-700 mb-4 font-medium">
              This isn't some basic "tax tips" webinar.
            </p>
            
            <p className="text-xl md:text-2xl text-gray-700 mb-8 font-medium">
              It's REAL, tactical training from strategies we use to help business owners save 5-6 figures a year.
            </p>
            
            <p className="text-lg md:text-xl text-black mb-12 font-bold">
              You'll MASTER:
            </p>
            
            <div className="space-y-6 text-left max-w-3xl mx-auto mb-12">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold">✓</span>
                </div>
                <p className="text-lg md:text-xl text-gray-700">How to LEGALLY slash your taxable income</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold">✓</span>
                </div>
                <p className="text-lg md:text-xl text-gray-700">How to turn everyday spending into POWERFUL deductions</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold">✓</span>
                </div>
                <p className="text-lg md:text-xl text-gray-700">How to structure your business for MAXIMUM tax advantages</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold">✓</span>
                </div>
                <p className="text-lg md:text-xl text-gray-700">What your accountant probably ISN'T telling you (this will shock you)</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold">✓</span>
                </div>
                <p className="text-lg md:text-xl text-gray-700">How to make the IRS work FOR YOU (yes, really!)</p>
              </div>
            </div>
            
            <div className="bg-white border-2 border-gray-200 p-8 rounded-2xl shadow-lg">
              <p className="text-lg md:text-xl text-black mb-4">
                And YES — if you want our help to create your own CUSTOM plan, we'll tell you how at the end.
              </p>
              
              <p className="text-lg md:text-xl text-black mb-2">NO pressure.</p>
              <p className="text-lg md:text-xl text-black font-semibold">Just REAL strategy that WORKS.</p>
              
              <div className="mt-8">
                <a
                  href="https://api.taxnitro.com/widget/form/ivupNG3kiDfoxBnvBIDn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-[#D4AF37] text-black px-8 py-3 rounded-xl hover:bg-[#B8941F] transition duration-300 text-lg font-bold shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  REGISTER FOR FREE!
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 bg-black text-white">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl md:text-4xl font-black text-[#D4AF37] mb-12">
            How Our Webinars & Programs Have Impacted the Attendees
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="bg-[#D4AF37] text-black p-8 rounded-2xl shadow-lg">
              <div className="flex items-start gap-4">
                <img
                  src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg"
                  alt="Testimonial"
                  className="w-16 h-16 rounded-full object-cover flex-shrink-0"
                />
                <div className="text-left">
                  <p className="text-lg md:text-xl font-semibold mb-2">
                    "You provided a WEALTH of knowledge — I've already saved THOUSANDS!"
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-[#D4AF37] text-black p-8 rounded-2xl shadow-lg">
              <div className="flex items-start gap-4">
                <img
                  src="https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg"
                  alt="Testimonial"
                  className="w-16 h-16 rounded-full object-cover flex-shrink-0"
                />
                <div className="text-left">
                  <p className="text-lg md:text-xl font-semibold mb-2">
                    "I feel SUPER blessed to be part of such a POWERFUL community — I only wish I'd joined SOONER!"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl text-center">
          <h3 className="text-3xl md:text-5xl font-black text-black mb-8">
            Click Below to CLAIM Your Seat NOW
          </h3>
          
          <p className="text-xl md:text-2xl text-gray-700 mb-4 font-semibold">Wealth doesn't wait.</p>
          <p className="text-xl md:text-2xl text-gray-700 mb-12 font-semibold">Neither should YOU.</p>
          
          <a
            href="https://api.taxnitro.com/widget/form/gASBGaRIppZUg8vyLPDW"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#D4AF37] text-black px-12 py-4 rounded-2xl hover:bg-[#B8941F] transition duration-300 text-xl font-bold shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            REGISTER NOW!
          </a>
        </div>
      </section>

      {/* P.S. Section */}
      <section className="py-16 px-4 bg-black">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-gray-900 p-8 rounded-2xl border border-gray-700">
            <h4 className="text-xl md:text-2xl font-bold text-[#D4AF37] mb-6">P.S.</h4>
            
            <p className="text-lg md:text-xl text-white mb-4">
              This is your monthly financial POWER hour.
            </p>
            
            <p className="text-lg md:text-xl text-white mb-4">
              NO fluff, NO filler, NO confusing tax talk.
            </p>
            
            <p className="text-lg md:text-xl text-white">
              Just REAL strategy you can apply IMMEDIATELY to keep more, grow more, and finally get in the financial driver's seat.
            </p>
          </div>
        </div>
      </section>

      <FooterSection />
      
    </div>
  );
}

export default Webinar;