import React from 'react';
import { Shield, TrendingUp, FileText } from 'lucide-react';
import Navbar from '../components/Navbar';
import FooterSection from '../components/FooterSection';
import sainteNew from '../assets/sainte-new.png';

function TaxStrategies() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Header / Brand Identity */}
      <section className="pt-32 pb-8 px-4 bg-gradient-to-br from-[#174a21]/5 via-white to-[#996516]/5">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-2xl md:text-3xl font-bold text-[#174a21] mb-4">
            Advanced Tax Strategy for High-Earning Business Owners
          </h1>
          <div className="bg-[#174a21]/5 rounded-xl p-6 mb-8">
            <p className="text-lg text-[#174a21] mb-2">From the Desk of:</p>
            <p className="text-xl font-bold text-[#174a21] mb-1">Sainte Billings, CPA</p>
            <p className="text-lg text-[#174a21] mb-1">Founder, Ampliara PLLC</p>
          </div>
        </div>
      </section>

      {/* Hero Section / Personal Greeting */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-[#174a21] mb-8">
                Hey Doctors, Lawyers & Consultants!
              </h2>
              
              <div className="space-y-6 text-lg text-[#174a21]/80 leading-relaxed">
                <p>
                  <strong>Did you know that there are 30 income tax savings strategies that most high earners miss out on…</strong> These exact strategies could slash their tax bill by $10K–$50K+ every year?
                </p>
                
                <p>And the truth is, implementing just ONE of these strategies can:</p>
                
                <ul className="space-y-2 ml-6">
                  <li>• Significantly reduce your tax bill</li>
                  <li>• Increase your profits</li>
                  <li>• Fast-track your path to retirement</li>
                </ul>
                
                <p>
                  And the reason isn't because your CPA is bad… it's because most CPAs are trained to file taxes, not to engineer tax savings.
                </p>
                
                <p>
                  <strong>That's why I created the 2025 Tax Slasher Guide — 30 smart, legal moves your CPA probably hasn't told you about.</strong>
                </p>
              </div>
            </div>
            
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <img
                  src={sainteNew}
                  alt="Sainte Billings, CPA"
                  className="w-full max-w-md rounded-2xl shadow-2xl"
                  width="400"
                  height="500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Letter Section */}
      <section className="py-20 px-4 bg-[#174a21]/5">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
            <p className="text-lg text-[#174a21] mb-6">Dear Taxpayer,</p>
            
            <div className="space-y-6 text-lg text-[#174a21]/80 leading-relaxed">
              <p>
                That's all the IRS sees when they look at you — not your hard work, not your business, not your late nights and sacrifices. Just a number on a tax return.
              </p>
              
              <p>But I don't see you as a taxpayer.</p>
              
              <p>
                <strong>I see you as a wealth builder. A business leader. Someone who deserves to keep more of what you earn and actually put it to work for your future.</strong>
              </p>
              
              <p>Would you agree that running a successful business or practice has become increasingly tough in recent years?</p>
              
              <p>I'm sure you've felt the pressure…</p>
              
              <p>
                On top of staying compliant with ever-changing regulations, you're dealing with rising overhead, managing staff, and keeping your clients happy — all while trying to actually grow your income.
              </p>
              
              <p>
                <strong>And then comes the biggest frustration of all: your tax bill.</strong>
              </p>
              
              <p>It feels like no matter how hard you work, the IRS is always taking the biggest slice.</p>
              
              <p>
                As a CPA who specializes in helping doctors, lawyers, consultants, and other high earners increase profits and reduce taxes, I see this every day.
              </p>
              
              <p>
                <strong>The truth is, your income tax bill is often the single biggest expense standing between you and real financial freedom.</strong>
              </p>
              
              <p>
                And here's the kicker: most successful professionals have no idea they can legally and ethically reduce their income taxes by tens of thousands of dollars every year.
              </p>
              
              <p>That's exactly why I put together my latest resource:</p>
              
              <p className="text-xl font-bold text-[#174a21]">
                The 2025 Tax Slasher Guide — 30 Smart, Legal Strategies Every High-Income Business Owner Should Know.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Guide Introduction */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#174a21] mb-8">
            Introducing the 2025 Tax Slasher Guide
          </h2>
          <h3 className="text-xl md:text-2xl font-semibold text-[#996516] mb-8">
            30 Advanced Strategies High-Income Business Owners Should Know to Legally Cut Their Tax Bill
          </h3>
          
          <div className="bg-[#174a21]/5 rounded-2xl p-8 mb-8">
            <p className="text-lg text-[#174a21]/80 leading-relaxed mb-6">
              Inside, you'll discover the "what" of 30 powerful, IRS-approved strategies that could significantly reduce your tax bill in 2025.
            </p>
            <p className="text-lg font-semibold text-[#174a21]">
              No fluff. No cookie-cutter advice. Just the big-picture strategies most CPAs never mention.
            </p>
          </div>
          
          <a
            href="https://api.taxnitro.com/widget/form/rJ8uG542fXWaI2czVXsc"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#996516] text-white px-8 py-4 rounded-xl hover:bg-[#996516]/90 transition duration-300 text-xl font-bold shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Yes, Send Me This Game-Changer!
          </a>
        </div>
      </section>

      {/* What's Inside Section */}
      <section className="py-20 px-4 bg-[#174a21]/5">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-[#174a21] mb-12 text-center">
            Here's a preview of what you'll discover:
          </h2>
          
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg mb-8">
            <div className="space-y-4 text-lg text-[#174a21]/80">
              <div className="flex items-start gap-3">
                <span className="text-[#996516] font-bold text-xl">✓</span>
                <p>The Augusta Rule that lets you take tax-free income from your business</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#996516] font-bold text-xl">✓</span>
                <p>How business owners can pay their children up to $15,000 in 2025 — tax-free</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#996516] font-bold text-xl">✓</span>
                <p>The retirement plans that can shelter six figures annually from taxation</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#996516] font-bold text-xl">✓</span>
                <p>The entity structures that legally reduce self-employment tax by five figures</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#996516] font-bold text-xl">✓</span>
                <p>How charitable giving strategies can multiply your deductions</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#996516] font-bold text-xl">✓</span>
                <p>The difference between simply filing taxes and strategically engineering them</p>
              </div>
            </div>
            
            <p className="text-lg text-[#174a21]/80 mt-6">
              …and more. A total of 30 strategies designed for professionals earning $250K+ who want to stop overpaying and start keeping more.
            </p>
            
            <p className="text-xl font-bold text-[#174a21] mt-8 text-center">
              If you've ever felt like your tax bill is way too high for how hard you work — this was made for you.
            </p>
          </div>
          
          <div className="text-center">
            <a
              href="https://api.taxnitro.com/widget/form/rJ8uG542fXWaI2czVXsc"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#174a21] text-white px-12 py-4 rounded-xl hover:bg-[#174a21]/90 transition duration-300 text-xl font-bold shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              YES! Send Me the 2025 Tax Slasher Guide
            </a>
          </div>
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