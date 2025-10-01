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
              <div className="inline-block bg-[#174a21] text-white px-6 py-3 text-sm font-bold uppercase tracking-wide">
                Free Live Webinar
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight text-[#174a21]">
                FROM LIMITATIONS TO LEVERAGE:
                <span className="block text-[#996516] mt-2">THE HIGH-INCOME EDGE</span>
              </h1>
              
              <div className="space-y-6">
                <p className="text-2xl md:text-3xl text-gray-800 font-medium leading-relaxed">
                  Learn how to build the right income structure, grow wealth, and pay $0 in taxes.
                </p>
                
                <p className="text-xl text-gray-700 leading-relaxed">
                  Stop overpaying the IRS. Discover how to protect your income, get your business working for you, and cut taxes this year.
                </p>
              </div>
              
              <div className="bg-gray-50 p-8 space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-lg">
                  <div>
                    <span className="font-bold text-[#174a21]">Date:</span>
                    <div className="text-gray-700">[Insert Date]</div>
                  </div>
                  <div>
                    <span className="font-bold text-[#174a21]">Time:</span>
                    <div className="text-gray-700">[Insert Time]</div>
                  </div>
                  <div>
                    <span className="font-bold text-[#174a21]">Format:</span>
                    <div className="text-gray-700">Live Online</div>
                  </div>
                </div>
              </div>
              
              <a
                href="https://api.taxnitro.com/widget/form/cyODn3Dx3FhB4W5m2RU5?notrack=true"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#174a21] text-white px-12 py-4 text-xl font-bold hover:bg-[#174a21]/90 transition duration-300 uppercase tracking-wide"
                onClick={() => {try{fbq('track','Lead',{content_name:'Register Button Click',content_category:'Tax Webinar Funnel',value:0.00,currency:'USD'})}catch(e){}}}
              >
                Reserve My Free Spot Now
              </a>
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
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-white px-6 py-3 rounded-lg shadow-lg border-2 border-[#174a21]">
                  <div className="text-center">
                    <div className="text-lg font-bold text-[#174a21]">Sainte Billings, CPA</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Pain You Already Feel Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-black text-[#174a21] mb-12">
            The Pain You Already Feel
          </h2>
          
          <div className="space-y-8 text-xl text-gray-700 leading-relaxed">
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

      {/* What You'll Learn Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-black text-[#174a21] mb-12">
            What You'll Learn in This Webinar
          </h2>
          
          <p className="text-2xl text-gray-800 mb-12 font-medium">
            In this 60-minute live training, you'll discover how to:
          </p>
          
          <div className="space-y-8 text-xl text-gray-700">
            <div className="flex items-start gap-6">
              <div className="w-8 h-8 bg-[#174a21] flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white font-bold text-lg">✓</span>
              </div>
              <p><strong>The Top 4 Mistakes High Earners Make</strong> — And How to Fix Them</p>
            </div>
            <div className="flex items-start gap-6">
              <div className="w-8 h-8 bg-[#174a21] flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white font-bold text-lg">✓</span>
              </div>
              <p><strong>The High-Income Edge Framework</strong> – How to legally design your income to pay $0 in taxes (yes, $0).</p>
            </div>
            <div className="flex items-start gap-6">
              <div className="w-8 h-8 bg-[#174a21] flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white font-bold text-lg">✓</span>
              </div>
              <p><strong>IRS-Approved Strategies</strong> That Shift You From "Taxpayer" to Wealth Creator</p>
            </div>
            <div className="flex items-start gap-6">
              <div className="w-8 h-8 bg-[#174a21] flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white font-bold text-lg">✓</span>
              </div>
              <p><strong>Implement Immediate, Actionable Strategies</strong> – Walk away with steps you can start using this year to cut your tax bill.</p>
            </div>
          </div>
          
          <div className="mt-12">
            <a
              href="https://api.taxnitro.com/widget/form/cyODn3Dx3FhB4W5m2RU5?notrack=true"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#174a21] text-white px-12 py-4 text-xl font-bold hover:bg-[#174a21]/90 transition duration-300 uppercase tracking-wide"
              onClick={() => {try{fbq('track','Lead',{content_name:'Register Button Click',content_category:'Tax Webinar Funnel',value:0.00,currency:'USD'})}catch(e){}}}
            >
              Save My Spot
            </a>
          </div>
        </div>
      </section>

      {/* Why This Matters Now Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-black text-[#174a21] mb-12">
            Why This Matters Now
          </h2>
          
          <div className="space-y-8 text-xl text-gray-700 leading-relaxed">
            <p>
              Tax laws are always shifting — and waiting until filing season is too late.
            </p>
            
            <p>
              This webinar gives you timely, practical strategies you can start using now to protect your 2025 income before it's locked in.
            </p>
            
            <p>
              If you want to keep more of what you earn and finally break free from overpaying the IRS, this training is for you.
            </p>
          </div>
        </div>
      </section>

      {/* Meet Your Instructor Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-black text-[#174a21] mb-12">
            Meet Your Instructor
          </h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-[#996516] mb-2">Sainte Billings, CPA</h3>
              <p className="text-xl text-gray-800 mb-1">Founder of Ampliara PLLC</p>
              <p className="text-xl text-gray-800">Specialist in Advanced Tax Strategies for High-Earners</p>
            </div>
            
            <div className="text-xl text-gray-700 leading-relaxed space-y-6">
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
          <h2 className="text-4xl md:text-5xl font-black text-white mb-12">
            Final Call-to-Action
          </h2>
          
          <p className="text-2xl text-white mb-12 font-medium">
            Seats are limited — secure your spot today.
          </p>
          
          <div className="bg-white/10 p-8 mb-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-lg text-white">
              <div>
                <span className="font-bold">Date:</span>
                <div>[Insert Date]</div>
              </div>
              <div>
                <span className="font-bold">Time:</span>
                <div>[Insert Time]</div>
              </div>
              <div>
                <span className="font-bold">Format:</span>
                <div>Live Online</div>
              </div>
            </div>
          </div>
          
          <a
            href="https://api.taxnitro.com/widget/form/cyODn3Dx3FhB4W5m2RU5?notrack=true"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#996516] text-white px-12 py-4 text-xl font-bold hover:bg-[#996516]/90 transition duration-300 uppercase tracking-wide"
            onClick={() => {try{fbq('track','Lead',{content_name:'Register Button Click',content_category:'Tax Webinar Funnel',value:0.00,currency:'USD'})}catch(e){}}}
          >
            Register for the Free Webinar
          </a>
        </div>
      </section>

      {/* Footer Section */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl text-center">
          <p className="text-lg text-gray-700 mb-4">
            This training is for educational purposes only and does not constitute formal tax advice. Individual results may vary.
          </p>
          <p className="text-lg text-gray-700">
            © Ampliara PLLC. All rights reserved.
          </p>
        </div>
      </section>

      <FooterSection />
      
      <script src="https://api.taxnitro.com/js/form_embed.js"></script>
    </div>
  );
}

export default Webinar;