import React from 'react';
import Navbar from '../components/Navbar';
import FooterSection from '../components/FooterSection';

function TaxStrategies() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-br from-[#174a21]/5 via-white to-[#996516]/5">
        <div className="container mx-auto max-w-6xl">
          <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-serif font-bold text-[#174a21] mb-8 leading-tight">
                Unlock 30 Proven Tax Strategies That Could Save You $10,000+
              </h1>
              <p className="text-lg md:text-xl text-[#174a21]/80 leading-relaxed">
                If you're a physician, attorney, or consultant, chances are you're overpaying the IRS. The average high-earning 
                professional leaves tens of thousands of dollars unclaimed each year simply because they don't know the strategies 
                available to them.
              </p>
          </div>
        </div>
      </section>

      {/* Why This Matters Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#174a21] mb-8 text-center">
            Why This Matters
          </h2>
          <div className="text-center mb-8">
            <p className="text-lg md:text-xl text-[#174a21]/80 leading-relaxed mb-6">
              You've worked too hard to watch unnecessary taxes eat away at your income. Without proactive planning, most professionals end up:
            </p>
          </div>
          <div className="space-y-6 max-w-3xl mx-auto">
            <div className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-sm border border-[#174a21]/10">
              <div className="w-3 h-3 bg-[#996516] rounded-full flex-shrink-0 mt-2"></div>
              <p className="text-lg text-[#174a21]/80">Missing deductions specific to their profession.</p>
            </div>
            <div className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-sm border border-[#174a21]/10">
              <div className="w-3 h-3 bg-[#996516] rounded-full flex-shrink-0 mt-2"></div>
              <p className="text-lg text-[#174a21]/80">Paying higher self-employment taxes than necessary.</p>
            </div>
            <div className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-sm border border-[#174a21]/10">
              <div className="w-3 h-3 bg-[#996516] rounded-full flex-shrink-0 mt-2"></div>
              <p className="text-lg text-[#174a21]/80">Leaving retirement, health, and entity-based tax benefits untouched.</p>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Get Section */}
      <section className="py-20 px-4 bg-[#174a21]/5">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#174a21] mb-8 text-center">
            What You'll Get
          </h2>
          <div className="text-center mb-8">
            <p className="text-lg md:text-xl text-[#174a21]/80 leading-relaxed mb-6">
              This free guide gives you 30 actionable tax strategies that can help you:
            </p>
          </div>
          <div className="space-y-6 max-w-3xl mx-auto">
            <div className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-sm">
              <div className="w-3 h-3 bg-[#996516] rounded-full flex-shrink-0 mt-2"></div>
              <p className="text-lg text-[#174a21]/80">Save $10,000+ each year through smart planning.</p>
            </div>
            <div className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-sm">
              <div className="w-3 h-3 bg-[#996516] rounded-full flex-shrink-0 mt-2"></div>
              <p className="text-lg text-[#174a21]/80">Protect more of your earnings while staying fully compliant.</p>
            </div>
            <div className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-sm">
              <div className="w-3 h-3 bg-[#996516] rounded-full flex-shrink-0 mt-2"></div>
              <p className="text-lg text-[#174a21]/80">Structure your practice to maximize both today's cash flow and tomorrow's wealth.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#174a21] mb-6">
              👉 Download the Free Guide Today
            </h2>
            <p className="text-lg text-[#174a21]/80">
              Start saving thousands and take the first step toward keeping more of what you earn.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-[#174a21]/10">
            <div className="min-h-[524px] w-full">
              <iframe
                src="https://api.taxnitro.com/widget/form/rJ8uG542fXWaI2czVXsc"
                style={{width:'100%', height:'524px', border:'none', borderRadius:'4px'}}
                id="inline-rJ8uG542fXWaI2czVXsc" 
                data-layout="{'id':'INLINE'}"
                data-trigger-type="alwaysShow"
                data-trigger-value=""
                data-activation-type="alwaysActivated"
                data-activation-value=""
                data-deactivation-type="neverDeactivate"
                data-deactivation-value=""
                data-form-name="Strategies Book Form"
                data-height="524"
                data-layout-iframe-id="inline-rJ8uG542fXWaI2czVXsc"
                data-form-id="rJ8uG542fXWaI2czVXsc"
                title="Strategies Book Form"
              />
            </div>
          </div>
          
          <p className="text-center text-sm text-[#174a21]/60 mt-6">
            We respect your inbox. No spam—ever.
          </p>
        </div>
      </section>

      {/* Take the Next Step Section */}
      <section className="py-20 px-4 bg-[#174a21]/5">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#174a21] mb-8 text-center">
            The Next Step
          </h2>
          
          <div className="text-center mb-12 max-w-4xl mx-auto">
            <p className="text-lg md:text-xl text-[#174a21]/80 leading-relaxed mb-8">
              Reading is powerful. Applying is transformational. That's where we come in. After downloading your copy, 
              schedule a 1:1 Tax Strategy Session with our team.
            </p>
            
            <div className="text-left max-w-3xl mx-auto mb-8">
              <p className="text-lg text-[#174a21]/80 mb-4">In that meeting, we'll:</p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#996516] rounded-full flex-shrink-0 mt-2"></div>
                  <p className="text-lg text-[#174a21]/80">Review your practice's unique situation.</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#996516] rounded-full flex-shrink-0 mt-2"></div>
                  <p className="text-lg text-[#174a21]/80">Identify which strategies can work for you right now.</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#996516] rounded-full flex-shrink-0 mt-2"></div>
                  <p className="text-lg text-[#174a21]/80">Show you exactly how to cut your tax bill — often uncovering $10,000 to $50,000 in potential savings.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <a
              href="https://api.taxnitro.com/widget/booking/m0l9FwL6VkOM2ajFvKlG"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#996516] text-white px-8 py-3 rounded-lg hover:bg-[#996516]/90 transition duration-300 text-lg font-semibold"
            >
              Schedule Your Tax Strategy Session
            </a>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 bg-[#174a21]">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-8">
            Ready to Take Your Tax Strategy to the Next Level?
          </h2>
          <p className="text-xl text-white/90 mb-12 leading-relaxed">
            After downloading your guide, let's discuss how these strategies can be customized for your 
            specific situation. Schedule a personalized consultation to unlock even greater tax savings 
            and wealth-building opportunities.
          </p>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <p className="text-white text-lg mb-6">
              Want a personalized tax strategy session?
            </p>
            <a
              href="https://api.taxnitro.com/widget/booking/m0l9FwL6VkOM2ajFvKlG"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#996516] text-white px-8 py-3 rounded-lg hover:bg-[#996516]/90 transition duration-300 text-lg font-semibold"
            >
              Schedule Your Strategy Session
            </a>
          </div>
        </div>
      </section>

      <FooterSection />
      
      <script src="https://api.taxnitro.com/js/form_embed.js"></script>
    </div>
  );
}

export default TaxStrategies;