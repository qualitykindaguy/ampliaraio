import React from 'react';
import Navbar from '../components/Navbar';
import FooterSection from '../components/FooterSection';
import sainteNew from '../assets/sainte-new.png';

function Webinar() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section - Full width with centered content */}
      <section className="pt-20 pb-0 px-4 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
            {/* Left Column - Content */}
            <div className="space-y-8">
              <div className="text-center">
                <div className="inline-block bg-[#174a21] text-white px-8 py-4 text-xl font-black uppercase tracking-wide">
                  Free Live Webinar
                </div>
              </div>
              
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-black leading-tight text-[#174a21]">
                FROM LIMITATIONS TO LEVERAGE:
                <span className="block text-[#996516] mt-2">THE HIGH-INCOME EDGE</span>
              </h1>
              
              <div className="space-y-6">
                <p className="text-3xl md:text-4xl text-gray-800 font-bold leading-relaxed">
                  Learn how to build the right income structure, grow wealth, and pay $0 in taxes.
                </p>
                
                <p className="text-2xl text-gray-700 font-semibold leading-relaxed">
                  Stop overpaying the IRS. Discover how to protect your income, get your business working for you, and cut taxes this year.
                </p>
              </div>
              
              <div className="bg-gray-50 p-8 space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xl font-bold">
                  <div>
                    <span className="font-black text-[#174a21]">Date:</span>
                    <div className="text-gray-700">October 16, 2025</div>
                  </div>
                  <div>
                    <span className="font-black text-[#174a21]">Time:</span>
                    <div className="text-gray-700">7:00 PM EST</div>
                  </div>
                  <div>
                    <span className="font-black text-[#174a21]">Format:</span>
                    <div className="text-gray-700">Live Online</div>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <a
                  href="https://api.taxnitro.com/widget/form/cyODn3Dx3FhB4W5m2RU5?notrack=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-[#174a21] text-white px-16 py-6 text-2xl font-black hover:bg-[#174a21]/90 transition duration-300 uppercase tracking-wide"
                  onClick={() => {try{fbq('track','Lead',{content_name:'Register Button Click',content_category:'Tax Webinar Funnel',value:0.00,currency:'USD'})}catch(e){}}}
                >
                  Reserve My Free Spot Now
                </a>
              </div>
            </div>
            
            {/* Right Column - Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative inline-block">
                <img
                  src={sainteNew}
                  alt="Sainte Billings, CPA"
                  className="w-full max-w-lg h-auto"
                  width="500"
                  height="600"
                />
                <div className="absolute -bottom-4 left-0 right-0 bg-white px-6 py-3 rounded-lg shadow-lg border-2 border-[#174a21]">
                  <div className="text-center">
                    <div className="text-sm font-bold text-[#174a21]">Sainte Billings, CPA</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pain Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="space-y-8 text-2xl font-semibold text-gray-700 leading-relaxed">
            <p>
              If you're a doctor, lawyer, consultant, executive, or high-income W-2 earner... you already know the IRS is taking the biggest slice of your hard work.
            </p>
            
            <p>You're paying more in taxes than you should every single year.</p>
            
            <p>Your CPA is likely just filing — not strategizing.</p>
            
            <p>
              And if you're earning $150K+ (W-2) or $250K+ (business owner), even one overlooked move can cost you five figures.
            </p>
          </div>
        </div>
      </section>

      {/* Learning Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <p className="text-3xl text-gray-800 mb-12 font-bold">
            In this 60-minute live webinar, you'll discover how to:
          </p>
          
          <div className="space-y-8 text-2xl font-semibold text-gray-700">
            <div className="flex items-start gap-6">
              <div className="w-8 h-8 bg-[#174a21] flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white font-bold text-lg">✓</span>
              </div>
              <p><span className="font-black">The Top 4 Mistakes High Earners Make</span> — And How to Fix Them</p>
            </div>
            <div className="flex items-start gap-6">
              <div className="w-8 h-8 bg-[#174a21] flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white font-bold text-lg">✓</span>
              </div>
              <p><span className="font-black">The High-Income Edge Framework</span> – How to legally design your income to pay $0 in taxes (yes, $0).</p>
            </div>
            <div className="flex items-start gap-6">
              <div className="w-8 h-8 bg-[#174a21] flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white font-bold text-lg">✓</span>
              </div>
              <p><span className="font-black">IRS-Approved Strategies</span> That Shift You From "Taxpayer" to Wealth Creator</p>
            </div>
            <div className="flex items-start gap-6">
              <div className="w-8 h-8 bg-[#174a21] flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white font-bold text-lg">✓</span>
              </div>
              <p><span className="font-black">Implement Immediate, Actionable Strategies</span> – Walk away with steps you can start using this year to cut your tax bill.</p>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <a
              href="https://api.taxnitro.com/widget/form/cyODn3Dx3FhB4W5m2RU5?notrack=true"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#174a21] text-white px-16 py-6 text-2xl font-black hover:bg-[#174a21]/90 transition duration-300 uppercase tracking-wide"
              onClick={() => {try{fbq('track','Lead',{content_name:'Register Button Click',content_category:'Tax Webinar Funnel',value:0.00,currency:'USD'})}catch(e){}}}
            >
              Save My Spot
            </a>
          </div>
        </div>
      </section>

      {/* Timing Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="space-y-8 text-2xl font-semibold text-gray-700 leading-relaxed">
            <p>
              Tax laws are always shifting — and waiting until filing season is too late.
            </p>
            
            <p>
              This webinar gives you timely, practical strategies you can start using now to protect your 2025 income before it's locked in.
            </p>
            
            <p>
              If you want to keep more of what you earn and finally break free from overpaying the IRS, this webinar is for you.
            </p>
          </div>
        </div>
      </section>

      {/* Instructor Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <div className="space-y-8">
            <div>
              <h3 className="text-4xl font-black text-[#996516] mb-2">Sainte Billings, CPA</h3>
              <p className="text-2xl font-bold text-gray-800 mb-1">Founder of Ampliara PLLC</p>
              <p className="text-2xl font-bold text-gray-800">Specialist in Advanced Tax Strategies for High-Earners</p>
            </div>
            
            <div className="text-2xl font-semibold text-gray-700 leading-relaxed space-y-6">
              <p>
                I've spent years helping practitioners, executives, and other business owners uncover $10K–$50K+ in missed savings every year through proactive planning.
              </p>
              <p>
                Now, I'm sharing the same framework with you — in this free, live session.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final Call-to-Action Section */}
      <section className="py-20 px-4 bg-[#174a21]">
        <div className="container mx-auto max-w-4xl text-center">
          <p className="text-3xl text-white mb-12 font-bold">
            Seats are limited — secure your spot today.
          </p>
          
          <div className="bg-white/10 p-8 mb-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xl font-bold text-white">
              <div>
                <span className="font-black">Date:</span>
                <div>October 16, 2025</div>
              </div>
              <div>
                <span className="font-black">Time:</span>
                <div>7:00 PM EST</div>
              </div>
              <div>
                <span className="font-black">Format:</span>
                <div>Live Online</div>
              </div>
            </div>
          </div>
          
          <a
            href="https://api.taxnitro.com/widget/form/cyODn3Dx3FhB4W5m2RU5?notrack=true"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#996516] text-white px-16 py-6 text-2xl font-black hover:bg-[#996516]/90 transition duration-300 uppercase tracking-wide"
            onClick={() => {try{fbq('track','Lead',{content_name:'Register Button Click',content_category:'Tax Webinar Funnel',value:0.00,currency:'USD'})}catch(e){}}}
          >
            Register for the Free Webinar
          </a>
        </div>
      </section>

      <FooterSection />
      
      <script src="https://api.taxnitro.com/js/form_embed.js"></script>
    </div>
  );
}

export default Webinar;