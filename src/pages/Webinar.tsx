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
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div className="text-center lg:text-left">
              <div className="inline-block bg-[#174a21] text-white px-6 py-2 text-sm font-bold mb-8">
                Free Live Webinar
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 leading-tight text-black">
                FROM LIMITATIONS TO LEVERAGE:
                <span className="block text-[#996516] mt-2">THE HIGH-INCOME EDGE</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-black mb-6 leading-relaxed">
                Learn how to build the right income structure, grow wealth, and pay $0 in taxes.
              </p>
              
              <p className="text-lg text-black mb-8 leading-relaxed">
                Stop overpaying the IRS. Discover how to protect your income, get your business working for you, and cut taxes this year.
              </p>
              
              <div className="bg-[#174a21]/5 p-6 mb-8">
                <div className="space-y-2 text-left">
                  <p className="text-lg text-black"><strong>Date:</strong> [Insert Date]</p>
                  <p className="text-lg text-black"><strong>Time:</strong> [Insert Time]</p>
                  <p className="text-lg text-black"><strong>Format:</strong> Live Online</p>
                </div>
              </div>
              
              <a
                href="https://api.taxnitro.com/widget/form/cyODn3Dx3FhB4W5m2RU5?notrack=true"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#174a21] text-white px-8 py-4 text-xl font-bold hover:bg-[#174a21]/90 transition duration-300"
                onClick={() => {try{fbq('track','Lead',{content_name:'Register Button Click',content_category:'Tax Webinar Funnel',value:0.00,currency:'USD'})}catch(e){}}}
              >
                Reserve My Free Spot Now
              </a>
            </div>
            
            {/* Right Column - Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-md">
                <img
                  src={sainteNew}
                  alt="Sainte Billings, CPA"
                  className="w-full h-auto"
                  width="400"
                  height="500"
                />
                <div className="mt-4 text-center">
                  <div className="inline-block bg-[#996516] text-white px-6 py-3 font-bold">
                    <p className="text-lg">SAINTE BILLINGS, CPA</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Free Webinar Form Section */}
      <section className="py-16 px-4 bg-[#174a21]/5">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#174a21] mb-6">Free Webinar Registration</h2>
          </div>
          
          <div className="bg-white p-8 border-2 border-[#174a21]/20">
            <div className="min-h-[444px] w-full overflow-hidden">
              <iframe
                src="https://api.taxnitro.com/widget/form/cyODn3Dx3FhB4W5m2RU5"
                style={{width:'100%', height:'444px', border:'none'}}
                id="inline-cyODn3Dx3FhB4W5m2RU5"
                data-layout="{'id':'INLINE'}"
                data-trigger-type="alwaysShow"
                data-trigger-value=""
                data-activation-type="alwaysActivated"
                data-activation-value=""
                data-deactivation-type="neverDeactivate"
                data-deactivation-value=""
                data-form-name="Tax Webinar Registration"
                data-height="444"
                data-layout-iframe-id="inline-cyODn3Dx3FhB4W5m2RU5"
                data-form-id="cyODn3Dx3FhB4W5m2RU5"
                title="Tax Webinar Registration"
              />
            </div>
          </div>
        </div>
      </section>

      {/* The Pain You Already Feel Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-[#174a21] mb-8 text-center">
            The Pain You Already Feel
          </h2>
          
          <div className="space-y-6 text-lg text-black leading-relaxed">
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
      <section className="py-16 px-4 bg-[#996516]">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
            What You'll Learn in This Webinar
          </h2>
          
          <p className="text-xl text-white mb-8 text-center">
            In this 60-minute live training, you'll discover how to:
          </p>
          
          <div className="space-y-6 text-lg text-white">
            <div className="flex items-start gap-4">
              <span className="text-[#174a21] font-bold text-xl">✓</span>
              <p><strong>The Top 4 Mistakes High Earners Make</strong> — And How to Fix Them</p>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-[#174a21] font-bold text-xl">✓</span>
              <p><strong>The High-Income Edge Framework</strong> – How to legally design your income to pay $0 in taxes (yes, $0).</p>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-[#174a21] font-bold text-xl">✓</span>
              <p><strong>IRS-Approved Strategies</strong> That Shift You From "Taxpayer" to Wealth Creator</p>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-[#174a21] font-bold text-xl">✓</span>
              <p><strong>Implement Immediate, Actionable Strategies</strong> – Walk away with steps you can start using this year to cut your tax bill.</p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <a
              href="https://api.taxnitro.com/widget/form/cyODn3Dx3FhB4W5m2RU5?notrack=true"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#174a21] text-white px-8 py-4 text-xl font-bold hover:bg-[#174a21]/90 transition duration-300"
              onClick={() => {try{fbq('track','Lead',{content_name:'Register Button Click',content_category:'Tax Webinar Funnel',value:0.00,currency:'USD'})}catch(e){}}}
            >
              Save My Spot
            </a>
          </div>
        </div>
      </section>

      {/* Why This Matters Now Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-[#174a21] mb-8 text-center">
            Why This Matters Now
          </h2>
          
          <div className="space-y-6 text-lg text-black leading-relaxed">
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
      <section className="py-16 px-4 bg-[#174a21]/5">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-[#174a21] mb-8 text-center">
            Meet Your Instructor
          </h2>
          
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-[#996516] mb-2">Sainte Billings, CPA</h3>
            <p className="text-lg text-[#174a21] mb-1">Founder of Ampliara PLLC</p>
            <p className="text-lg text-[#174a21]">Specialist in Advanced Tax Strategies for High-Earners</p>
          </div>
          
          <div className="text-lg text-black leading-relaxed text-center">
            <p>
              I've spent years helping practitioners, executives, and other business owners uncover $10K–$50K+ in missed savings every year through proactive planning.
            </p>
            <p className="mt-4">
              Now, I'm sharing the same framework with you — in this free, live session.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 px-4 bg-[#174a21]">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Final Call-to-Action
          </h2>
          
          <p className="text-xl text-white mb-8">
            Seats are limited — secure your spot today.
          </p>
          
          <div className="bg-white/10 p-6 mb-8">
            <div className="space-y-2">
              <p className="text-lg text-white"><strong>Date:</strong> [Insert Date]</p>
              <p className="text-lg text-white"><strong>Time:</strong> [Insert Time]</p>
              <p className="text-lg text-white"><strong>Format:</strong> Live Online</p>
            </div>
          </div>
          
          <a
            href="https://api.taxnitro.com/widget/form/cyODn3Dx3FhB4W5m2RU5?notrack=true"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#996516] text-white px-8 py-4 text-xl font-bold hover:bg-[#996516]/90 transition duration-300"
            onClick={() => {try{fbq('track','Lead',{content_name:'Register Button Click',content_category:'Tax Webinar Funnel',value:0.00,currency:'USD'})}catch(e){}}}
          >
            Register for the Free Webinar
          </a>
        </div>
      </section>

      {/* Footer Section */}
      <section className="py-8 px-4 bg-white">
        <div className="container mx-auto max-w-4xl text-center">
          <p className="text-sm text-[#174a21]/80 mb-4">
            This training is for educational purposes only and does not constitute formal tax advice. Individual results may vary.
          </p>
          <p className="text-sm text-[#174a21]/80">
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