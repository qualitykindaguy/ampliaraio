import React from 'react';
import Navbar from '../components/Navbar';
import FooterSection from '../components/FooterSection';
import sainteNew from '../assets/sainte-new.png';

function Webinar() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-0 px-4 bg-gray-100 relative">
        <div className="container mx-auto text-center">
          {/* FREE WEBINAR Badge */}
          <div className="inline-block bg-[#D4AF37] text-black px-6 py-2 rounded-full font-bold text-sm mb-8">
            FREE WEBINAR
          </div>
          
          {/* Main Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-black mb-8 leading-tight">
            Momentum<br />
            <span className="text-[#D4AF37]">On Repeat</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-lg md:text-xl text-black max-w-4xl mx-auto mb-12 leading-relaxed">
            A recurring space to refine your goals and align your finances.
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
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-[#D4AF37] text-black px-6 py-2 font-bold text-sm md:text-base">
            Sainte Billings, Certified Public Accountant
          </div>
        </div>
      </section>

      {/* Registration Section */}
      <section className="py-0 px-4 bg-black text-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen">
            {/* Left Side - Content */}
            <div className="space-y-8">
              <div className="text-sm font-bold text-white mb-4">FREE WEBINAR</div>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight">
                The tax game has <span className="text-[#D4AF37]">changed</span><br />
                — and if you're still playing<br />
                by the <span className="text-[#D4AF37]">old rules</span>, you're<br />
                <span className="text-[#D4AF37]">underbuilding</span>.
              </h2>
              
              <p className="text-lg text-gray-300 leading-relaxed">
                Join Ms Business on August 7th @ 12PM EST
              </p>
            </div>

            {/* Right Side - Form */}
            <div className="bg-white rounded-lg p-8">
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

      {/* What You'll Learn Section */}
      <section className="py-16 px-4 bg-black text-white">
        <div className="container mx-auto text-center">
          <div className="bg-white text-black p-12 rounded-lg max-w-6xl mx-auto">
            <p className="text-lg mb-8 leading-relaxed">
              An eye-opening session where we unpack<br />
              <span className="italic text-[#D4AF37]">Trump's "Big Beautiful Bill"</span> — what it really means for your money,<br />
              and how to legally use it to create wealth that lasts for generations.
            </p>
            
            <h3 className="text-3xl md:text-4xl font-black text-black mb-8">
              What You'll Learn When You Sign Up
            </h3>
            
            <div className="space-y-4 text-left max-w-4xl mx-auto">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <p className="text-lg">What is Trump's "Big Beautiful Bill" and how it will affect you.</p>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <p className="text-lg">How business owners & Investors can use the new tax code pay little to nothing in taxes</p>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <p className="text-lg">The tax-code loopholes hiding in plain sight</p>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <p className="text-lg">What most business owners get wrong about tax strategy, legacy, and wealth protection — and how to fix it fast</p>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <p className="text-lg">How to set up your business to outlive you using trusts, business layering, and smart legacy moves</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why You Can't Afford to Miss This */}
      <section className="py-16 px-4 bg-gray-100">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Content */}
            <div>
              <h3 className="text-3xl md:text-4xl font-black text-black mb-8 text-center lg:text-left">
                Why You Can't Afford to Miss This
              </h3>
              
              <p className="text-lg text-black mb-8 text-center lg:text-left leading-relaxed">
                Let's be real — taxes are one of your biggest<br />
                expenses as a business owner.<br />
                Here's why this free session is a must-attend:
              </p>
              
              <ul className="space-y-4 text-black">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-black rounded-full mt-3 flex-shrink-0"></span>
                  <div>
                    <strong>You're overpaying taxes</strong> — and don't even know it.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-black rounded-full mt-3 flex-shrink-0"></span>
                  <div>
                    <strong>The tax rules have changed</strong> — most are still using the old playbook.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-black rounded-full mt-3 flex-shrink-0"></span>
                  <div>
                    <strong>Your business should fund your retirement</strong>, not just your bills.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-black rounded-full mt-3 flex-shrink-0"></span>
                  <div>
                    <strong>Hidden tax loopholes exist</strong> — we'll show you where.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-black rounded-full mt-3 flex-shrink-0"></span>
                  <div>
                    <strong>Wealth requires strategy</strong> — not hustle or hope.
                  </div>
                </li>
              </ul>
              
              <div className="mt-8 text-center lg:text-left">
                <button className="bg-[#D4AF37] text-black px-8 py-3 rounded-lg font-bold text-lg hover:bg-[#B8941F] transition duration-300">
                  REGISTER NOW!
                </button>
              </div>
            </div>

            {/* Right Side - Image */}
            <div className="relative">
              <img
                src={sainteNew}
                alt="Sainte Billings, CPA"
                className="w-full max-w-lg mx-auto h-auto object-cover"
                width="500"
                height="700"
              />
              {/* Name Badge Overlay */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-[#D4AF37] text-black px-6 py-2 font-bold text-sm">
                Sainte Billings, Certified Public Accountant
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 bg-black text-white">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-[#D4AF37] mb-12">
            How Our Webinars & Programs Have Impacted the Attendees
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="bg-[#D4AF37] text-black p-8 rounded-lg">
              <div className="flex items-start gap-4">
                <img
                  src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg"
                  alt="Testimonial"
                  className="w-16 h-16 rounded-full object-cover flex-shrink-0"
                />
                <div className="text-left">
                  <p className="text-lg font-semibold mb-2">
                    Ms. Business you provided a wealth of knowledge...
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-[#D4AF37] text-black p-8 rounded-lg">
              <div className="flex items-start gap-4">
                <img
                  src="https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg"
                  alt="Testimonial"
                  className="w-16 h-16 rounded-full object-cover flex-shrink-0"
                />
                <div className="text-left">
                  <p className="text-lg font-semibold mb-2">
                    I feel super blessed to be apart of such a...
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FooterSection />
      
      <script src="https://api.taxnitro.com/js/form_embed.js"></script>
    </div>
  );
}

export default Webinar;