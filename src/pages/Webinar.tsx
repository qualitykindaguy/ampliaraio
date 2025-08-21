import React from 'react';
import Navbar from '../components/Navbar';
import FooterSection from '../components/FooterSection';
import sainteNew from '../assets/sainte-new.png';

function Webinar() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gray-50 relative">
        <div className="container mx-auto text-center">
          {/* FREE LIVE WEBINAR Badge */}
          <div className="inline-block bg-[#996516] text-white px-6 py-2 rounded-full font-bold text-sm mb-8">
            FREE LIVE WEBINAR
          </div>
          
          {/* Main Title */}
          <h1 className="text-4xl md:text-6xl font-black text-[#174a21] mb-8 leading-tight">
            Momentum<br />
            <span className="text-[#996516]">On Repeat</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-lg md:text-xl text-[#174a21]/80 max-w-4xl mx-auto mb-8 leading-relaxed">
            Because one tax season win isn't enough.
          </p>
          
          <p className="text-lg md:text-xl text-[#174a21]/80 max-w-4xl mx-auto mb-16 leading-relaxed">
            This is your monthly money strategy reset, your recurring chance to align your finances, refine your goals, and build real wealth, on purpose.
          </p>
        </div>
      </section>

      {/* Subhead Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-black text-[#174a21] mb-8 leading-tight">
              The tax game has <span className="text-[#996516]">changed</span>
            </h2>
            
            <p className="text-lg text-[#174a21]/80 mb-6 leading-relaxed">
              And if you're still playing by the old rules, you're not just behind, you're underbuilding.
            </p>
            
            <p className="text-lg text-[#174a21]/80 mb-12 leading-relaxed">
              Every month you wait is another month of missed strategy, wasted dollars, and compounding regret.
            </p>
          </div>
        </div>
      </section>

      {/* Registration Section */}
      <section className="py-20 px-4 bg-[#174a21] text-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Image */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative">
                <img
                  src={sainteNew}
                  alt="Sainte Billings, CPA"
                  className="w-full max-w-md rounded-2xl shadow-2xl"
                  width="400"
                  height="500"
                />
                <div className="absolute -bottom-4 -right-4 bg-[#996516] text-white px-6 py-3 rounded-xl font-bold shadow-lg">
                  <div className="text-sm">Your Tax Expert</div>
                  <div className="text-lg">Sainte Billings, CPA</div>
                </div>
              </div>
            </div>

            {/* Right Side - Form */}
            <div className="bg-white rounded-lg p-8">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-[#174a21] mb-4">Secure Your Free Spot Below</h3>
                <p className="text-[#174a21]/80 mb-4">This isn't just another webinar,</p>
                <p className="text-[#174a21]/80">It's the most profitable hour of your month.</p>
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
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-black text-[#174a21] mb-8 text-center">
              Why Attend
            </h3>
            
            <p className="text-lg text-[#174a21]/80 mb-8 text-center leading-relaxed">
              Taxes are probably your biggest business expense.
            </p>
            
            <p className="text-lg text-[#174a21]/80 mb-8 text-center leading-relaxed">
              And chances are, you're paying too much without even realizing it.
            </p>
            
            <p className="text-lg text-[#174a21] mb-8 text-center leading-relaxed font-semibold">
              Here's what you'll learn inside the free session:
            </p>
            
            <ul className="space-y-4 text-[#174a21]/80 max-w-3xl mx-auto">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-[#996516] rounded-full mt-3 flex-shrink-0"></span>
                <div>You're unknowingly donating thousands to the IRS</div>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-[#996516] rounded-full mt-3 flex-shrink-0"></span>
                <div>The tax code has changed, your strategy hasn't</div>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-[#996516] rounded-full mt-3 flex-shrink-0"></span>
                <div>Your business should be building wealth, not just covering bills</div>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-[#996516] rounded-full mt-3 flex-shrink-0"></span>
                <div>Hidden tax loopholes exist, and we'll show you where to find them</div>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-[#996516] rounded-full mt-3 flex-shrink-0"></span>
                <div>Wealth isn't built on hustle or hope, it's built on strategy</div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Training Benefits Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl md:text-4xl font-black text-[#174a21] mb-8">
              Turn Insight Into Income
            </h3>
            
            <p className="text-lg text-[#174a21]/80 mb-4">
              This isn't a basic "tax tips" webinar.
            </p>
            
            <p className="text-lg text-[#174a21]/80 mb-8">
              It's real, tactical training from strategies we use to help business owners save 5–6 figures a year.
            </p>
            
            <p className="text-lg text-[#174a21] mb-8 font-semibold">
              You'll learn:
            </p>
            
            <ul className="space-y-4 text-[#174a21]/80 max-w-3xl mx-auto mb-12 text-left">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-[#996516] rounded-full mt-3 flex-shrink-0"></span>
                <div>How to legally reduce taxable income</div>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-[#996516] rounded-full mt-3 flex-shrink-0"></span>
                <div>How to turn everyday spending into deductions</div>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-[#996516] rounded-full mt-3 flex-shrink-0"></span>
                <div>How to structure your business for tax advantages</div>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-[#996516] rounded-full mt-3 flex-shrink-0"></span>
                <div>What your accountant probably isn't telling you</div>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-[#996516] rounded-full mt-3 flex-shrink-0"></span>
                <div>How to make the IRS work for you</div>
              </li>
            </ul>
            
            <div className="bg-gray-50 p-8 rounded-lg">
              <p className="text-lg text-[#174a21]/80 mb-4">
                And yes, if you want our help to create your own custom plan, we'll tell you how at the end.
              </p>
              
              <p className="text-lg text-[#174a21]/80 mb-2">No pressure.</p>
              <p className="text-lg text-[#174a21]/80">Just real strategy.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-[#996516] text-white">
        <div className="container mx-auto text-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm text-white p-8 rounded-lg">
              <div className="flex items-start gap-4">
                <img
                  src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg"
                  alt="Testimonial"
                  className="w-16 h-16 rounded-full object-cover flex-shrink-0"
                />
                <div className="text-left">
                  <p className="text-lg font-semibold mb-2">
                    "You provided a wealth of knowledge, I've already saved thousands."
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm text-white p-8 rounded-lg">
              <div className="flex items-start gap-4">
                <img
                  src="https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg"
                  alt="Testimonial"
                  className="w-16 h-16 rounded-full object-cover flex-shrink-0"
                />
                <div className="text-left">
                  <p className="text-lg font-semibold mb-2">
                    "I feel super blessed to be a part of such a powerful community, I only wish I joined sooner."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl text-center">
          <h3 className="text-3xl md:text-4xl font-black text-[#174a21] mb-8">
            Click Below to Claim Your Seat Now
          </h3>
          
          <p className="text-lg text-[#174a21]/80 mb-4">Wealth doesn't wait.</p>
          <p className="text-lg text-[#174a21]/80 mb-8">Neither should you.</p>
          
          <a
            href="https://api.taxnitro.com/widget/form/gASBGaRIppZUg8vyLPDW"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#174a21] text-white px-8 py-4 rounded-lg hover:bg-[#174a21]/90 transition duration-300 text-lg font-semibold"
          >
            Register Now
          </a>
        </div>
      </section>

      {/* P.S. Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-gray-50 p-8 rounded-lg">
            <h4 className="text-xl font-bold text-[#174a21] mb-4">P.S.</h4>
            
            <p className="text-lg text-[#174a21]/80 mb-4">
              This is your monthly financial power hour.
            </p>
            
            <p className="text-lg text-[#174a21]/80 mb-4">
              No fluff, no filler, no confusing tax talk.
            </p>
            
            <p className="text-lg text-[#174a21]/80">
              Just real strategy you can apply immediately to keep more, grow more, and finally get in the financial driver's seat.
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