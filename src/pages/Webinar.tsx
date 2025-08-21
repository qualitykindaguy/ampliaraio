import React from 'react';
import { Star, CheckCircle2, TrendingUp, Calculator, Shield, Target, DollarSign, Users, Award, ArrowRight, Zap, Clock } from 'lucide-react';
import Navbar from '../components/Navbar';
import FooterSection from '../components/FooterSection';
import sainteNew from '../assets/sainte-new.png';

function Webinar() {
  const benefits = [
    "Uncover hidden tax deductions you're missing",
    "Learn advanced strategies to legally minimize taxes",
    "Get a personalized tax optimization roadmap",
    "Connect with certified tax professionals",
    "Discover potential savings of $10K-$50K+"
  ];

  const features = [
    {
      icon: <Calculator className="h-8 w-8 text-[#174a21]" />,
      title: "Tax Assessment",
      description: "Comprehensive analysis of your current tax situation"
    },
    {
      icon: <Target className="h-8 w-8 text-[#174a21]" />,
      title: "Strategy Development",
      description: "Custom tax optimization strategies for your business"
    },
    {
      icon: <Shield className="h-8 w-8 text-[#174a21]" />,
      title: "Expert Guidance",
      description: "Direct access to certified tax professionals"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-br from-gray-100 via-white to-gray-50">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
            {/* Left Side - Content */}
            <div className="space-y-8">
              <div className="inline-block px-6 py-3 bg-[#D4AF37] text-black rounded-full text-sm font-bold">
                FREE LIVE WEBINAR
              </div>
              
              <h1 className="text-4xl md:text-6xl font-black leading-tight text-black">
                The tax game has <span className="text-[#D4AF37]">CHANGED</span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                And if you're still playing by the old rules, you're not just behind — you're UNDERBUILDING.
              </p>
              
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                Every month you wait is another month of MISSED strategy, WASTED dollars, and COMPOUNDING regret.
              </p>

              {/* CTA Section */}
              <div className="space-y-6">
                <h2 className="text-2xl md:text-3xl font-bold text-black">Secure Your Free Spot Below</h2>
                <p className="text-lg text-gray-700">This isn't just another webinar...</p>
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

            {/* Right Side - Date Card */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg">
              <div className="text-center mb-6">
                <div className="text-2xl md:text-3xl font-bold text-black mb-2">September 24, 2025</div>
                <div className="text-gray-600 text-lg">Mark your calendar now!</div>
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
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-[#D4AF37]" />
                      Tax reduction strategies
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-[#D4AF37]" />
                      Business structure optimization
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-[#D4AF37]" />
                      Wealth building techniques
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-[#D4AF37]" />
                      Live Q&A session
                    </li>
                  </ul>
                </div>
                <a
                  href="https://api.taxnitro.com/widget/form/ivupNG3kiDfoxBnvBIDn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-[#D4AF37] text-black px-10 py-4 rounded-xl hover:bg-[#B8941F] transition duration-300 text-xl font-bold shadow-lg hover:shadow-xl transform hover:scale-105 w-full text-center"
                >
                  SECURE YOUR SPOT NOW!
                </a>
                <p className="text-sm text-gray-500 text-center">
                  Limited seats available • 100% Free
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
            {/* Left Side - Content */}
            <div className="space-y-8">
              <h1 className="text-4xl md:text-6xl font-black leading-tight text-black">
                The tax game has <span className="text-[#D4AF37]">CHANGED</span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                And if you're still playing by the old rules, you're not just behind — you're UNDERBUILDING.
              </p>
              
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                Every month you wait is another month of MISSED strategy, WASTED dollars, and COMPOUNDING regret.
              </p>

              {/* CTA Section */}
              <div className="space-y-6">
                <h2 className="text-2xl md:text-3xl font-bold text-black">Secure Your Free Spot Below</h2>
                <p className="text-lg text-gray-700">This isn't just another webinar...</p>
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

            {/* Right Side - Date Card */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg text-center">
              <div className="text-center mb-6">
                <div className="text-2xl md:text-3xl font-bold text-black mb-2">September 24, 2025</div>
                <div className="text-gray-600 text-lg">Mark your calendar now!</div>
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
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-[#D4AF37]" />
                      Tax reduction strategies
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-[#D4AF37]" />
                      Business structure optimization
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-[#D4AF37]" />
                      Wealth building techniques
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-[#D4AF37]" />
                      Live Q&A session
                    </li>
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

      {/* What You'll Learn Section */}
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
            </div>
          </div>
        </div>
      </section>

      {/* Why You Can't Afford to Miss This */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h3 className="text-3xl md:text-4xl font-black text-black mb-8">
                Why You Can't Afford to Miss This
              </h3>
              
              <p className="text-lg text-gray-700 mb-4">
                Let's be real — taxes are one of your biggest expenses as a business owner.
              </p>
              
              <p className="text-lg text-gray-700 mb-8">
                Here's why this free session is a must-attend:
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-black rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-lg text-gray-700">
                    <span className="font-bold text-black">You're overpaying taxes</span> — and don't even know it.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-black rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-lg text-gray-700">
                    <span className="font-bold text-black">The tax rules have changed</span> — most are still using the old playbook.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-black rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-lg text-gray-700">
                    <span className="font-bold text-black">Your business should fund your retirement</span>, not just your bills.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-black rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-lg text-gray-700">
                    <span className="font-bold text-black">Hidden tax loopholes exist</span> — we'll show you where.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-black rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-lg text-gray-700">
                    <span className="font-bold text-black">Wealth requires strategy</span> — not hustle or hope.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center">
              <div className="relative">
                <img
                  src={sainteNew}
                  alt="Sainte Billings, CPA"
                  className="w-full max-w-md rounded-2xl shadow-2xl"
                  width="400"
                  height="500"
                />
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-[#D4AF37] text-black px-6 py-3 rounded-xl font-bold shadow-lg">
                  <div className="text-sm">Your Tax Expert</div>
                  <div className="text-lg">Sainte Billings, CPA</div>
                </div>
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
            href="https://api.taxnitro.com/widget/form/ivupNG3kiDfoxBnvBIDn"
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