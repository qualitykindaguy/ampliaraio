import React from 'react';
import {
  Target,
  Clock,
  DollarSign,
  CheckCircle2,
  TrendingUp,
  Calculator,
  FileText,
  MessageSquare,
  Users,
  Award,
  Lightbulb,
  Calendar,
  Building2,
  PiggyBank,
  Shield,
  Mail,
} from 'lucide-react';
import Navbar from '../components/Navbar';
import FooterSection from '../components/FooterSection';

function AmplifiedWealthBlueprint() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-r from-[#174a21]/10 to-[#996516]/10">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-[#996516]/10 text-[#996516] rounded-full text-sm font-semibold mb-6">
              High-Impact Strategy Engagement
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-[#174a21] mb-12 leading-tight">
              The Amplified Wealth Blueprint (Tax Savings Plan)
            </h1>
            <p className="text-xl text-[#174a21]/80 leading-relaxed">
              A comprehensive tax strategy assessment that examines your financial situation to uncover missed opportunities 
              and deliver a personalized tax savings roadmap designed to maximize deductions and minimize liabilities.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose This Section */}
      <section className="py-20 px-4 bg-[#174a21]/5">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-[#174a21] mb-16 text-center">Why Choose This?</h2>
          <div className="space-y-6 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="flex items-start gap-4">
                <CheckCircle2 className="h-6 w-6 text-[#996516] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-[#174a21] mb-3">Comprehensive Review</h3>
                  <p className="text-[#174a21]/80">We examine your last two tax returns, your current income streams, and business structure to uncover missed opportunities and risks.</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="flex items-start gap-4">
                <CheckCircle2 className="h-6 w-6 text-[#996516] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-[#174a21] mb-3">Enhanced Tax Strategy</h3>
                  <p className="text-[#174a21]/80">You'll receive a robust tax savings proposal designed to maximize deductions and minimize liabilities.</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="flex items-start gap-4">
                <CheckCircle2 className="h-6 w-6 text-[#996516] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-[#174a21] mb-3">Tailored for You</h3>
                  <p className="text-[#174a21]/80">Strategies are customized to your unique situation—whether you're a business owner, professional, or high-income earner—so you get solutions that actually fit.</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="flex items-start gap-4">
                <CheckCircle2 className="h-6 w-6 text-[#996516] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-[#174a21] mb-3">Clear ROI</h3>
                  <p className="text-[#174a21]/80">Most assessments reveal $15K–$30K+ in potential savings, making this a high-value, low-risk investment.</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="flex items-start gap-4">
                <CheckCircle2 className="h-6 w-6 text-[#996516] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-[#174a21] mb-3">Audit & Compliance Confidence</h3>
                  <p className="text-[#174a21]/80">We highlight red flags and strengthen your records so you can reduce risk while staying compliant.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* This Is For Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-[#174a21] mb-16 text-center">This Is For:</h2>
          <div className="space-y-6 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-2xl border-2 border-[#174a21]/10 hover:border-[#996516] transition-all duration-300">
              <div className="flex items-start gap-4">
                <Target className="h-8 w-8 text-[#996516] flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-[#174a21] mb-3">High-Income Professionals</h3>
                  <p className="text-[#174a21]/80">Physicians, attorneys, consultants, and executives earning $250K+ who want to stop overpaying the IRS.</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl border-2 border-[#174a21]/10 hover:border-[#996516] transition-all duration-300">
              <div className="flex items-start gap-4">
                <Building2 className="h-8 w-8 text-[#996516] flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-[#174a21] mb-3">Business Owners & Entrepreneurs</h3>
                  <p className="text-[#174a21]/80">LLCs, S-Corps, and partnerships ready to align their structure and payroll for maximum efficiency.</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl border-2 border-[#174a21]/10 hover:border-[#996516] transition-all duration-300">
              <div className="flex items-start gap-4">
                <TrendingUp className="h-8 w-8 text-[#996516] flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-[#174a21] mb-3">Growth-Minded Trailblazers</h3>
                  <p className="text-[#174a21]/80">Individuals building wealth who want a proactive plan instead of reactive tax prep.</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl border-2 border-[#174a21]/10 hover:border-[#996516] transition-all duration-300">
              <div className="flex items-start gap-4">
                <Shield className="h-8 w-8 text-[#996516] flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-[#174a21] mb-3">Those Seeking Peace of Mind</h3>
                  <p className="text-[#174a21]/80">Anyone who wants clarity, compliance, and a clear strategy for protecting and amplifying their money.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4 bg-[#174a21]/5">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-[#174a21] mb-16 text-center">How It Works</h2>
          <div className="space-y-8 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-[#996516] rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">1</span>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-[#174a21] mb-3">Initial Consultation</h3>
                  <p className="text-[#174a21]/80">We'll start with a review of your financial and tax history, including prior returns and current-year projections.</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-[#996516] rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">2</span>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-[#174a21] mb-3">Tax Strategy Assessment</h3>
                  <p className="text-[#174a21]/80">A detailed analysis of your income, entity structure, and expenses to identify tax-saving opportunities.</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-[#996516] rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">3</span>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-[#174a21] mb-3">Customized Report</h3>
                  <p className="text-[#174a21]/80">You'll receive a personalized tax savings report showing your potential savings, recommended strategies, and areas of concern.</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-[#996516] rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">4</span>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-[#174a21] mb-3">Implementation Roadmap</h3>
                  <p className="text-[#174a21]/80">We provide clear next steps for putting the strategies into action, with the option to continue into ongoing tax planning and advisory support.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule Consultation Section */}
      <section className="py-20 px-4 bg-[#174a21]">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-white mb-8">Ready to Amplify Your Wealth Strategy?</h2>
          <div className="bg-white rounded-2xl p-12">
            <MessageSquare className="h-16 w-16 text-[#996516] mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-[#174a21] mb-4">Schedule Your Strategic Consultation</h3>
            <p className="text-[#174a21]/80 text-lg mb-8 max-w-2xl mx-auto">
              Let's discuss how our Amplified Wealth Blueprint can provide you with a clear roadmap to reduce taxes, 
              optimize your financial structure, and accelerate your wealth building. Our expert team is ready to 
              create your personalized strategy.
            </p>
            <a
              href="https://api.taxnitro.com/widget/bookings/taxassessmentampliara"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#996516] text-white px-8 py-4 rounded-lg hover:bg-[#996516]/90 transition duration-300 text-lg font-semibold"
            >
              Schedule Your Consultation
            </a>
          </div>
        </div>
      </section>

      <FooterSection />
    </div>
  );
}

export default AmplifiedWealthBlueprint;