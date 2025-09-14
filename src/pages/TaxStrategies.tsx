import React from 'react';
import { DollarSign, TrendingUp, Shield, Zap, Star, CheckCircle, Target, Award, Lightbulb, Calculator } from 'lucide-react';
import Navbar from '../components/Navbar';
import FooterSection from '../components/FooterSection';

function TaxStrategies() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-br from-[#174a21]/10 via-[#996516]/5 to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-[#996516]/20 via-transparent to-transparent"></div>
        <div className="absolute top-20 right-10 text-[#996516]/20 animate-bounce">
          <DollarSign className="h-16 w-16" />
        </div>
        <div className="absolute bottom-20 left-10 text-[#174a21]/20 animate-pulse">
          <TrendingUp className="h-12 w-12" />
        </div>
        <div className="container mx-auto max-w-6xl">
          <div className="max-w-4xl mx-auto text-center relative z-10">
              <div className="inline-flex items-center gap-2 bg-[#996516]/10 text-[#996516] px-6 py-2 rounded-full text-sm font-bold mb-6 animate-pulse">
                <Zap className="h-4 w-4" />
                FREE GUIDE
                <Zap className="h-4 w-4" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-[#174a21] mb-8 leading-tight bg-gradient-to-r from-[#174a21] to-[#996516] bg-clip-text text-transparent">
                Unlock 30 Proven Tax Strategies That Could Save You $10,000+
              </h1>
              <p className="text-lg md:text-xl text-[#174a21]/80 leading-relaxed mb-8">
                If you're a physician, attorney, or consultant, chances are you're overpaying the IRS. The average high-earning 
                professional leaves tens of thousands of dollars unclaimed each year simply because they don't know the strategies 
                available to them.
              </p>
              <div className="flex justify-center items-center gap-4 mb-8">
                <div className="bg-white/80 backdrop-blur-sm border border-[#996516]/20 px-6 py-3 rounded-xl shadow-lg">
                  <div className="text-2xl font-bold text-[#996516]">$10K+</div>
                  <div className="text-sm text-[#174a21]/80">Potential Savings</div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm border border-[#996516]/20 px-6 py-3 rounded-xl shadow-lg">
                  <div className="text-2xl font-bold text-[#996516]">30</div>
                  <div className="text-sm text-[#174a21]/80">Proven Strategies</div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm border border-[#996516]/20 px-6 py-3 rounded-xl shadow-lg">
                  <div className="text-2xl font-bold text-[#996516]">FREE</div>
                  <div className="text-sm text-[#174a21]/80">Download Today</div>
                </div>
              </div>
          </div>
        </div>
      </section>

      {/* Why This Matters Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-red-50 to-orange-50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-red-100 text-red-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <Shield className="h-4 w-4" />
              STOP OVERPAYING
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#174a21] mb-8">
            Why This Matters
            </h2>
            <p className="text-lg md:text-xl text-[#174a21]/80 leading-relaxed mb-6">
              You've worked too hard to watch unnecessary taxes eat away at your income. Without proactive planning, most professionals end up:
            </p>
          </div>
          <div className="space-y-6 max-w-3xl mx-auto">
            <div className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-lg border-l-4 border-red-400 hover:shadow-xl transition-shadow duration-300">
              <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-red-600 font-bold text-sm">✗</span>
              </div>
              <p className="text-lg text-[#174a21]/80">Missing deductions specific to their profession.</p>
            </div>
            <div className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-lg border-l-4 border-red-400 hover:shadow-xl transition-shadow duration-300">
              <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-red-600 font-bold text-sm">✗</span>
              </div>
              <p className="text-lg text-[#174a21]/80">Paying higher self-employment taxes than necessary.</p>
            </div>
            <div className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-lg border-l-4 border-red-400 hover:shadow-xl transition-shadow duration-300">
              <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-red-600 font-bold text-sm">✗</span>
              </div>
              <p className="text-lg text-[#174a21]/80">Leaving retirement, health, and entity-based tax benefits untouched.</p>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Get Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-green-50 to-emerald-50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <Star className="h-4 w-4" />
              WHAT YOU'LL GET
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#174a21] mb-8">
            What You'll Get
            </h2>
            <p className="text-lg md:text-xl text-[#174a21]/80 leading-relaxed mb-6">
              This free guide gives you 30 actionable tax strategies that can help you:
            </p>
          </div>
          <div className="space-y-6 max-w-3xl mx-auto">
            <div className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-lg border-l-4 border-green-400 hover:shadow-xl transition-shadow duration-300">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <DollarSign className="h-5 w-5 text-green-600" />
              </div>
              <p className="text-lg text-[#174a21]/80">Save $10,000+ each year through smart planning.</p>
            </div>
            <div className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-lg border-l-4 border-green-400 hover:shadow-xl transition-shadow duration-300">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Shield className="h-5 w-5 text-green-600" />
              </div>
              <p className="text-lg text-[#174a21]/80">Protect more of your earnings while staying fully compliant.</p>
            </div>
            <div className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-lg border-l-4 border-green-400 hover:shadow-xl transition-shadow duration-300">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <TrendingUp className="h-5 w-5 text-green-600" />
              </div>
              <p className="text-lg text-[#174a21]/80">Structure your practice to maximize both today's cash flow and tomorrow's wealth.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-[#174a21]/5 via-white to-[#996516]/5">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#174a21] mb-6">
              👉 Download the Free Guide Today
            </h2>
            <p className="text-lg text-[#174a21]/80">
              Start saving thousands and take the first step toward keeping more of what you earn.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-2xl p-8 border-2 border-[#996516]/20 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#174a21] to-[#996516]"></div>
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
      <section className="py-20 px-4 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <Target className="h-4 w-4" />
              NEXT STEP
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#174a21] mb-8">
            The Next Step
            </h2>
            <p className="text-lg md:text-xl text-[#174a21]/80 leading-relaxed mb-8">
              Reading is powerful. Applying is transformational. That's where we come in. After downloading your copy, 
              schedule a 1:1 Tax Strategy Session with our team.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-[#174a21]/10 mb-8">
              <h3 className="text-xl font-semibold text-[#174a21] mb-6 text-center">In that meeting, we'll:</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Calculator className="h-8 w-8 text-blue-600" />
                  </div>
                  <p className="text-[#174a21]/80 font-medium">Review your practice's unique situation.</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Lightbulb className="h-8 w-8 text-blue-600" />
                  </div>
                  <p className="text-[#174a21]/80 font-medium">Identify which strategies can work for you right now.</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="h-8 w-8 text-blue-600" />
                  </div>
                  <p className="text-[#174a21]/80 font-medium">Show you exactly how to cut your tax bill — often uncovering $10,000 to $50,000 in potential savings.</p>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <a
                href="https://api.taxnitro.com/widget/booking/m0l9FwL6VkOM2ajFvKlG"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-[#174a21] to-[#996516] text-white px-8 py-4 rounded-xl hover:shadow-xl transition-all duration-300 text-lg font-semibold transform hover:scale-105"
              >
                Schedule Your Tax Strategy Session
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-[#174a21] to-[#174a21]/90 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-[#996516]/30 via-transparent to-transparent"></div>
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 relative z-10">
            Ready to Take Your Tax Strategy to the Next Level?
          </h2>
          <p className="text-xl text-white/90 mb-12 leading-relaxed relative z-10">
            After downloading your guide, let's discuss how these strategies can be customized for your 
            specific situation. Schedule a personalized consultation to unlock even greater tax savings 
            and wealth-building opportunities.
          </p>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 relative z-10 shadow-2xl">
            <div className="flex justify-center items-center gap-2 mb-4">
              <Star className="h-6 w-6 text-yellow-400 fill-current" />
              <span className="text-white font-semibold">Premium Consultation</span>
              <Star className="h-6 w-6 text-yellow-400 fill-current" />
            </div>
            <p className="text-white text-lg mb-6">
              Want a personalized tax strategy session?
            </p>
            <a
              href="https://api.taxnitro.com/widget/booking/m0l9FwL6VkOM2ajFvKlG"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-[#996516] to-yellow-500 text-white px-8 py-4 rounded-xl hover:shadow-xl transition-all duration-300 text-lg font-bold transform hover:scale-105"
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