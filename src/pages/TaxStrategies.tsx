import React from 'react';
import Navbar from '../components/Navbar';
import FooterSection from '../components/FooterSection';
import taxStrategiesHero from '../assets/TaxStrategiesHero.png';

function TaxStrategies() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Header Section */}
      <section className="pt-32 pb-8 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center">
            <p className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-[#174a21] font-black mb-8 tracking-tight">
              Advanced Tax Strategy for<br />High-Earning Business Owners
            </p>
            <div className="inline-block">
              <p className="text-lg text-[#174a21]/70 mb-2">From the Desk of:</p>
              <p className="text-2xl font-bold text-[#174a21]">Sainte Billings, CPA</p>
              <p className="text-lg text-[#174a21]/70">Founder, Ampliara PLLC</p>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Image Section */}
      <section className="py-16 bg-white">
        <div className="w-full text-center">
          <img
            src={taxStrategiesHero}
            alt="Tax Strategies Hero"
            className="w-full h-auto object-cover"
            width="800"
            height="600"
          />
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-20 px-4 bg-[#174a21] text-white relative overflow-hidden">
        <div className="container mx-auto max-w-6xl relative z-10">
          <div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-12 leading-tight whitespace-nowrap">
              Hey Doctors, Lawyers & Consultants!
            </h2>
            
            <div className="text-center space-y-8">
              <div className="space-y-6 text-lg leading-relaxed max-w-4xl mx-auto">
                <p className="text-2xl font-bold text-yellow-300">
                  Did you know that there are 30 income tax savings strategies that most high earners miss out on…
                </p>
                
                <p className="text-xl">
                  These exact strategies could slash their tax bill by $10K–$50K+ every year?
                </p>
                
                <p>And the truth is, implementing just ONE of these strategies can:</p>
                
                <div className="space-y-3 max-w-md mx-auto">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-yellow-300 rounded-full"></div>
                    <span>Significantly reduce your tax bill</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-yellow-300 rounded-full"></div>
                    <span>Increase your profits</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-yellow-300 rounded-full"></div>
                    <span>Fast-track your path to retirement</span>
                  </div>
                </div>
                
                <p className="text-xl font-semibold text-yellow-300 pt-4">
                  That's why I created the 2025 Tax Slasher Guide — 30 smart, legal moves your CPA probably hasn't told you about.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Letter Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#174a21] mb-4">Dear Taxpayer,</h2>
            <div className="w-16 h-1 bg-[#996516] mx-auto"></div>
          </div>
          
          <div className="prose prose-lg max-w-none text-[#174a21] leading-relaxed space-y-6">
            <p className="text-xl">
              That's all the IRS sees when they look at you — not your hard work, not your business, 
              not your late nights and sacrifices. Just a number on a tax return.
            </p>
            
            <div className="text-center mb-8">
              <p className="text-4xl font-bold text-[#174a21] mb-4">But I don't see you as a taxpayer.</p>
              <div className="w-16 h-1 bg-[#996516] mx-auto"></div>
            </div>
            
            <p className="text-2xl font-bold text-[#996516]">
              I see you as a WEALTH BUILDER. Someone who deserves to keep more 
              of what you earn and actually put it to work for your future.
            </p>
            
            <p>Would you agree that running a successful business or practice has become increasingly tough in recent years?</p>
            
            <p>I'm sure you've felt the pressure…</p>
            
            <p>
              On top of staying compliant with ever-changing regulations, you're dealing with rising overhead, 
              managing staff, and keeping your clients happy — all while trying to actually grow your income.
            </p>
            
            <p className="text-2xl font-bold text-[#174a21] bg-yellow-100 p-6 text-center">
              And then comes the biggest frustration of all: YOUR TAX BILL.
            </p>
            
            <p>It feels like no matter how hard you work, the IRS is always taking the biggest slice.</p>
            
            <p>
              As a CPA who specializes in helping doctors, lawyers, consultants, and other high earners 
              increase profits and reduce taxes, I see this every day.
            </p>
            
            <p className="text-xl font-bold">
              The truth is, your income tax bill is often the single biggest expense standing between 
              you and real financial freedom.
            </p>
            
            <p>
              And here's the kicker: most successful professionals have no idea they can legally and 
              ethically reduce their income taxes by tens of thousands of dollars every year.
            </p>
            
            <div className="text-center py-8">
              <p className="text-3xl font-black text-[#174a21] mb-4">That's exactly why I put together my latest resource:</p>
              <div className="bg-[#996516] text-white p-8 inline-block">
                <p className="text-2xl font-bold">
                  The 2025 Tax Slasher Guide — 30 Smart, Legal Strategies Every High-Income Business Owner Should Know.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Guide Introduction */}
      <section className="py-20 px-4 bg-[#174a21] text-white">
        <div className="container mx-auto max-w-5xl text-center">
          <h2 className="text-5xl font-black mb-6">
            Introducing the 2025 Tax Slasher Guide
          </h2>
          <div className="w-32 h-1 bg-yellow-300 mx-auto mb-8"></div>
          <h3 className="text-3xl font-light mb-12 text-yellow-100">
            30 Advanced Strategies High-Income Business Owners Should Know to Legally Cut Their Tax Bill
          </h3>
          
          <div className="mb-12 space-y-6">
            <p className="text-xl">
              Inside, you'll discover the "what" of 30 powerful, IRS-approved strategies that could 
              significantly reduce your tax bill in 2025.
            </p>
            <p className="text-2xl font-bold text-yellow-300">
              No fluff. No cookie-cutter advice. Just the big-picture strategies most CPAs never mention.
            </p>
          </div>
          
          <a
            href="https://api.taxnitro.com/widget/form/rJ8uG542fXWaI2czVXsc"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-yellow-400 text-[#174a21] px-12 py-4 text-2xl font-black hover:bg-yellow-300 transition duration-300 transform hover:scale-105"
          >
            YES, SEND ME THIS GAME-CHANGER!
          </a>
        </div>
      </section>

      {/* What's Inside Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          {/* Quick Note on Legitimacy - Design 1: Centered with Icon Header */}
          <div className="text-center mb-20">
            <div className="max-w-4xl mx-auto">
              <div className="border-l-8 border-[#174a21] pl-8 mb-12">
                <h3 className="text-4xl font-black text-[#174a21] mb-6">
                  QUICK NOTE ON LEGITIMACY
                </h3>
                <p className="text-2xl font-bold text-[#174a21] mb-8">Every strategy inside is:</p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 bg-green-600 flex items-center justify-center">
                      <span className="text-white font-bold">✓</span>
                    </div>
                    <span className="text-xl font-bold text-[#174a21]">100% Legal</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 bg-green-600 flex items-center justify-center">
                      <span className="text-white font-bold">✓</span>
                    </div>
                    <span className="text-xl font-bold text-[#174a21]">IRS-Compliant</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 bg-green-600 flex items-center justify-center">
                      <span className="text-white font-bold">✓</span>
                    </div>
                    <span className="text-xl font-bold text-[#174a21]">Used by savvy business owners every day</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 bg-green-600 flex items-center justify-center">
                      <span className="text-white font-bold">✓</span>
                    </div>
                    <span className="text-xl font-bold text-[#174a21]">Shared so you can see what's possible for your situation</span>
                  </div>
                </div>
                
                <div className="border-t-4 border-[#996516] pt-6">
                  <p className="text-xl text-[#174a21] leading-relaxed font-medium">
                    This guide is educational—it shows you what exists, so you can explore the opportunities most CPAs never mention.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl font-black text-[#174a21] mb-16 text-center">
            Here's a preview of what you'll discover:
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-[#996516] flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-lg">✓</span>
                </div>
                <p className="text-lg text-[#174a21]">The Augusta Rule that lets you take tax-free income from your business</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-[#996516] flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-lg">✓</span>
                </div>
                <p className="text-lg text-[#174a21]">How business owners can pay their children up to $15,000 in 2025 — tax-free</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-[#996516] flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-lg">✓</span>
                </div>
                <p className="text-lg text-[#174a21]">The retirement plans that can shelter six figures annually from taxation</p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-[#996516] flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-lg">✓</span>
                </div>
                <p className="text-lg text-[#174a21]">The entity structures that legally reduce self-employment tax by five figures</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-[#996516] flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-lg">✓</span>
                </div>
                <p className="text-lg text-[#174a21]">How charitable giving strategies can multiply your deductions</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-[#996516] flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-lg">✓</span>
                </div>
                <p className="text-lg text-[#174a21]">The difference between simply filing taxes and strategically engineering them</p>
              </div>
            </div>
          </div>
          
          <div className="text-center space-y-8">
            <p className="text-xl text-[#174a21]">
              …and more. A total of 30 strategies designed for professionals earning $250K+ who want to stop overpaying and start keeping more.
            </p>
            
            <div className="bg-yellow-100 p-8">
              <p className="text-2xl font-bold text-[#174a21] mb-6">
                If you've ever felt like your tax bill is way too high for how hard you work — this was made for you.
              </p>
              <a
                href="https://api.taxnitro.com/widget/form/rJ8uG542fXWaI2czVXsc"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#174a21] text-white px-12 py-4 text-2xl font-bold hover:bg-[#174a21]/90 transition duration-300 transform hover:scale-105"
              >
                YES! SEND ME THE 2025 TAX SLASHER GUIDE
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Closing / Sign-Off Section - Design 1: Elegant Signature Style */}
      <section className="py-20 px-4 bg-gradient-to-r from-[#174a21]/5 to-[#996516]/5">
        <div className="container mx-auto max-w-4xl">
          <div className="border-t-8 border-[#174a21] pt-12">
            <div className="text-center space-y-8">
              <p className="text-3xl font-black text-[#174a21] leading-tight">
                Now is the time to stop overpaying and start taking control of your financial future.
              </p>
              
              <p className="text-xl text-[#174a21] leading-relaxed max-w-3xl mx-auto">
                Click the button above, grab the guide, and discover the strategies that could help you slash your 2025 tax bill.
              </p>
              
              <div className="pt-12">
                <div className="inline-block text-left">
                  <p className="text-xl text-[#174a21] mb-2">To your success,</p>
                  <div className="border-l-4 border-[#996516] pl-6">
                    <p className="text-3xl font-black text-[#174a21]">Sainte Billings, CPA</p>
                    <p className="text-xl text-[#996516] font-bold">Founder, Ampliara PLLC</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Next Step Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl font-black text-[#174a21] mb-12 text-center">
            The Next Step
          </h2>
          
          <div className="text-center mb-12">
            <p className="text-xl text-[#174a21] leading-relaxed mb-8">
              Reading is powerful. Applying is transformational. That's where we come in. After downloading your copy, 
              schedule a 1:1 Tax Strategy Session with our team.
            </p>
            
            <div className="bg-white p-8 mb-12">
              <p className="text-2xl font-bold text-[#174a21] mb-6">In that meeting, we'll:</p>
              <div className="space-y-4 text-left max-w-2xl mx-auto">
                <div className="flex items-start gap-3">
                  <div className="w-3 h-3 bg-[#996516] rounded-full flex-shrink-0 mt-2"></div>
                  <p className="text-lg text-[#174a21]">Review your practice's unique situation.</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-3 h-3 bg-[#996516] rounded-full flex-shrink-0 mt-2"></div>
                  <p className="text-lg text-[#174a21]">Identify which strategies can work for you right now.</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-3 h-3 bg-[#996516] rounded-full flex-shrink-0 mt-2"></div>
                  <p className="text-lg text-[#174a21]">Show you exactly how to cut your tax bill — often uncovering $10,000 to $50,000 in potential savings.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <a
              href="https://api.taxnitro.com/widget/booking/m0l9FwL6VkOM2ajFvKlG"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#996516] text-white px-12 py-4 text-xl font-bold hover:bg-[#996516]/90 transition duration-300 transform hover:scale-105"
            >
              SCHEDULE YOUR TAX STRATEGY SESSION
            </a>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 bg-[#174a21] text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-black mb-12">
            Ready to Take Your Tax Strategy to the Next Level?
          </h2>
          <p className="text-xl mb-16 leading-relaxed">
            After downloading your guide, let's discuss how these strategies can be customized for your 
            specific situation. Schedule a personalized consultation to unlock even greater tax savings 
            and wealth-building opportunities.
          </p>
          <div className="bg-white/10 p-12">
            <p className="text-2xl mb-8 font-bold">
              Want a personalized tax strategy session?
            </p>
            <a
              href="https://api.taxnitro.com/widget/booking/m0l9FwL6VkOM2ajFvKlG"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-yellow-400 text-[#174a21] px-12 py-4 text-xl font-black hover:bg-yellow-300 transition duration-300 transform hover:scale-105"
            >
              SCHEDULE YOUR STRATEGY SESSION
            </a>
          </div>
        </div>
      </section>

      {/* Footer / Disclaimer Section - Design 1: Clean Minimal */}
      <section className="py-16 px-4 bg-[#174a21] text-white">
        <div className="container mx-auto max-w-4xl">
          <div className="border-t-4 border-white pt-8">
            <div className="text-center space-y-8">
              <div>
                <h4 className="text-2xl font-black text-white mb-6 tracking-wider">DISCLAIMER</h4>
                <p className="text-lg text-white/90 leading-relaxed max-w-3xl mx-auto">
                  This guide is for educational purposes only and does not constitute formal tax advice. 
                  Individual results may vary. Consult a qualified tax professional before implementing any new strategies.
                </p>
              </div>
              
              <div className="border-t border-white/30 pt-6">
                <p className="text-white/70 text-lg">
                  © 2025 Ampliara PLLC. All rights reserved.
                </p>
            </div>
          </div>
        </div>
      </section>

      <FooterSection />
      
      <script src="https://api.taxnitro.com/js/form_embed.js"></script>
    </div>
  );
}

export default TaxStrategies;