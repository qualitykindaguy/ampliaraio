import React from 'react';
import Navbar from '../components/Navbar';
import FooterSection from '../components/FooterSection';
import sainteNew from '../assets/sainte-new.png';

function Webinar() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 bg-white">
        <div className="container mx-auto text-center">
          {/* Header */}
          <h1 className="text-4xl md:text-6xl font-black mb-8 leading-tight text-black">
            FROM LIMITATIONS TO LEVERAGE:
            <span className="block text-[#174a21] mt-2">THE HIGH-INCOME EDGE</span>
          </h1>
          
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="flex items-center gap-2 text-[#174a21]">
              <span className="text-2xl">»»»</span>
              <span className="text-xl font-semibold tracking-wider">LIVE WEBINAR</span>
              <span className="text-2xl">«««</span>
            </div>
          </div>
          
          {/* Hero Image - Smaller */}
          <div className="relative w-full max-w-md mx-auto">
            <img
              src={sainteNew}
              alt="Sainte Billings, CPA"
              className="w-full h-auto rounded-lg"
              width="400"
              height="500"
            />
            {/* Gradient overlay for smooth transition */}
            <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent rounded-b-lg"></div>
          </div>
        </div>
      </section>

      {/* Registration Section */}
      <section className="py-8 px-4 bg-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-black leading-tight text-black mb-8">
              The tax game has <span className="text-[#174a21]">CHANGED</span>
            </h2>
            
            <div className="space-y-6 mb-12">
              <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
                And if you're still playing by the old rules, you're not just behind — you're <strong>UNDERBUILDING</strong>.
              </p>
              
              <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
                Every month you wait is another month of <strong>MISSED strategy</strong>, <strong>WASTED dollars</strong>, and <strong>COMPOUNDING regret</strong>.
              </p>
            </div>

            <div className="bg-gradient-to-r from-[#174a21] to-[#174a21]/90 text-white p-12 rounded-3xl shadow-2xl">
              <h3 className="text-3xl md:text-4xl font-bold mb-6">Secure Your Free Spot</h3>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl px-6 py-3 mb-6 inline-block">
                <p className="text-2xl font-bold text-white">September 24, 2025</p>
                <p className="text-white/90 text-sm">Mark your calendar now!</p>
              </div>
              <p className="text-xl mb-2">This isn't just another webinar...</p>
              <p className="text-2xl font-bold mb-8">It's the most <span className="text-yellow-600">PROFITABLE</span> hour of your month!</p>
              <a
                href="https://api.taxnitro.com/widget/form/ivupNG3kiDfoxBnvBIDn"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-[#174a21] px-12 py-4 rounded-xl hover:bg-gray-100 transition duration-300 text-2xl font-bold shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                REGISTER NOW!
              </a>
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
            
            <p className="text-lg md:text-xl text-yellow-600 mb-12 font-bold">
              Here's what you'll DISCOVER inside this game-changing session:
            </p>
            
            <div className="space-y-6 text-left max-w-3xl mx-auto">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-[#174a21] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold">✓</span>
                </div>
                <p className="text-lg md:text-xl text-white">You're unknowingly DONATING thousands to the IRS (and how to STOP it)</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-[#174a21] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold">✓</span>
                </div>
                <p className="text-lg md:text-xl text-white">The tax code has CHANGED — your strategy hasn't (this is COSTING you)</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-[#174a21] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold">✓</span>
                </div>
                <p className="text-lg md:text-xl text-white">Your business should be building WEALTH, not just covering bills</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-[#174a21] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold">✓</span>
                </div>
                <p className="text-lg md:text-xl text-white">HIDDEN tax loopholes exist — and we'll show you EXACTLY where to find them</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-[#174a21] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold">✓</span>
                </div>
                <p className="text-lg md:text-xl text-white">Wealth isn't built on hustle or hope — it's built on SMART strategy</p>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <a
                href="https://api.taxnitro.com/widget/form/ivupNG3kiDfoxBnvBIDn"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#174a21] text-white px-10 py-4 rounded-xl hover:bg-[#174a21]/90 transition duration-300 text-xl font-bold shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                I'm ready to SAVE on Taxes
              </a>
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
            
            <h4 className="text-2xl md:text-3xl font-bold text-[#174a21] mb-8">
              You'll MASTER:
            </h4>
            
            <div className="space-y-4 text-left max-w-3xl mx-auto mb-8">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-[#174a21] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold">✓</span>
                </div>
                <p className="text-lg md:text-xl text-gray-700 font-medium">How to LEGALLY slash your taxable income</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-[#174a21] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold">✓</span>
                </div>
                <p className="text-lg md:text-xl text-gray-700 font-medium">How to turn everyday spending into POWERFUL deductions</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-[#174a21] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold">✓</span>
                </div>
                <p className="text-lg md:text-xl text-gray-700 font-medium">How to structure your business for MAXIMUM tax advantages</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-[#174a21] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold">✓</span>
                </div>
                <p className="text-lg md:text-xl text-gray-700 font-medium">What your accountant probably ISN'T telling you (this will shock you)</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-[#174a21] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold">✓</span>
                </div>
                <p className="text-lg md:text-xl text-gray-700 font-medium">How to make the IRS work FOR YOU (yes, really!)</p>
              </div>
            </div>
              
            <div className="text-center">
              <a
                href="https://api.taxnitro.com/widget/form/ivupNG3kiDfoxBnvBIDn"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#174a21] text-white px-10 py-4 rounded-xl hover:bg-[#174a21]/90 transition duration-300 text-xl font-bold shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                I WANT INCOME TODAY!
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 bg-black text-white">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl md:text-4xl font-black text-white mb-12">
            How Our Webinars & Programs Have Impacted the Attendees
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="bg-[#174a21] text-white p-8 rounded-2xl shadow-lg">
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
            
            <div className="bg-[#174a21] text-white p-8 rounded-2xl shadow-lg">
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
        
        <div className="text-center mt-12">
          <a
            href="https://api.taxnitro.com/widget/form/ivupNG3kiDfoxBnvBIDn"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#174a21] text-white px-10 py-4 rounded-xl hover:bg-[#174a21]/90 transition duration-300 text-xl font-bold shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Join the Impact
          </a>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="bg-white rounded-3xl p-12 shadow-xl border border-gray-200">
            <h3 className="text-4xl md:text-5xl font-black text-black mb-8">
              Don't Miss Out!
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="text-left">
                <h4 className="text-2xl font-bold text-[#174a21] mb-4">What You'll Get:</h4>
                <ul className="space-y-3 text-lg text-gray-700">
                  <li className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-[#174a21] rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-sm font-bold">✓</span>
                    </div>
                    Tax reduction strategies
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-[#174a21] rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-sm font-bold">✓</span>
                    </div>
                    Business structure optimization
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-[#174a21] rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-sm font-bold">✓</span>
                    </div>
                    Wealth building techniques
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-[#174a21] rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-sm font-bold">✓</span>
                    </div>
                    Live Q&A session
                  </li>
                </ul>
              </div>
              
              <div className="text-center md:text-left">
                <div className="bg-[#174a21]/10 p-6 rounded-2xl mb-6">
                  <p className="text-3xl font-bold text-[#174a21] mb-2">September 24, 2025</p>
                  <p className="text-gray-600">Mark your calendar now!</p>
                </div>
                <p className="text-lg text-gray-700 mb-4">
                  This webinar will reveal the exact strategies we use to help business owners save 
                  5-6 figures annually in taxes.
                </p>
              </div>
            </div>
            
            <div className="text-center">
              <p className="text-xl md:text-2xl text-gray-700 mb-2 font-semibold">Wealth doesn't wait.</p>
              <p className="text-xl md:text-2xl text-gray-700 mb-8 font-semibold">Neither should YOU.</p>
              
              <a
                href="https://api.taxnitro.com/widget/form/ivupNG3kiDfoxBnvBIDn"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#174a21] text-white px-12 py-4 rounded-2xl hover:bg-[#174a21]/90 transition duration-300 text-2xl font-bold shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                CLAIM YOUR SEAT NOW!
              </a>
              <p className="text-sm text-gray-500 mt-4">
                Limited seats available • 100% Free • No obligation
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* P.S. Section */}
      <section className="py-16 px-4 bg-black">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-gray-900 p-8 rounded-2xl border border-gray-700">
            <h4 className="text-xl md:text-2xl font-bold text-[#174a21] mb-6">P.S.</h4>
            
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