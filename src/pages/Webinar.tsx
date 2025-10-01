import React from 'react';
import Navbar from '../components/Navbar';
import FooterSection from '../components/FooterSection';
import sainteNew from '../assets/sainte-new.png';

function Webinar() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section - Full width with centered content */}
      <section className="pt-20 pb-0 px-4 bg-gradient-to-br from-[#174a21] via-[#174a21] to-[#996516] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-400/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#996516]/30 rounded-full blur-3xl"></div>
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh] relative z-10">
            {/* Left Column - Content */}
            <div className="space-y-6">
              <div className="text-center">
                <div className="inline-block bg-yellow-400 text-black px-8 py-4 text-lg font-black uppercase tracking-wider rounded-full shadow-2xl animate-pulse">
                  🔥 FREE LIVE WEBINAR 🔥
                </div>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight text-white drop-shadow-2xl">
                FROM LIMITATIONS TO LEVERAGE:
                <span className="block text-yellow-400 mt-4 drop-shadow-2xl">THE HIGH-INCOME EDGE</span>
              </h1>
              
              <div className="space-y-6">
                <p className="text-2xl md:text-3xl text-white font-bold leading-relaxed drop-shadow-lg">
                  Learn how to build the right income structure, grow wealth, and pay $0 in taxes.
                </p>
                
                <div className="bg-white/10 backdrop-blur-sm border-2 border-yellow-400 p-6 rounded-2xl">
                  <p className="text-xl md:text-2xl text-yellow-400 font-bold leading-relaxed">
                    Stop overpaying the IRS. Discover how to protect your income, get your business working for you, and cut taxes this year.
                  </p>
                </div>
              </div>
              
              <div className="bg-black/30 backdrop-blur-sm p-8 rounded-2xl border border-yellow-400/50 space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xl font-bold">
                  <div className="text-center">
                    <span className="block text-yellow-400 font-black text-2xl">📅 DATE:</span>
                    <div className="text-white text-lg">October 16, 2025</div>
                  </div>
                  <div className="text-center">
                    <span className="block text-yellow-400 font-black text-2xl">⏰ TIME:</span>
                    <div className="text-white text-lg">7:00 PM EST</div>
                  </div>
                  <div className="text-center">
                    <span className="block text-yellow-400 font-black text-2xl">💻 FORMAT:</span>
                    <div className="text-white text-lg">Live Online</div>
                  </div>
                </div>
              </div>
              
              <div className="text-center space-y-4">
                <a
                  href="https://api.taxnitro.com/widget/form/cyODn3Dx3FhB4W5m2RU5?notrack=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-yellow-400 text-black px-12 py-6 text-2xl font-black hover:bg-yellow-300 transition duration-300 uppercase tracking-wide rounded-2xl shadow-2xl transform hover:scale-105 animate-bounce"
                  onClick={() => {try{fbq('track','Lead',{content_name:'Register Button Click',content_category:'Tax Webinar Funnel',value:0.00,currency:'USD'})}catch(e){}}}
                >
                  🚀 RESERVE MY FREE SPOT NOW 🚀
                </a>
                <p className="text-white/80 text-sm">
                  ⚡ Limited Seats Available • 100% Free • No Credit Card Required
                </p>
              </div>
            </div>
            
            {/* Right Column - Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative inline-block">
                <div className="absolute -inset-4 bg-gradient-to-r from-yellow-400 to-[#996516] rounded-3xl blur opacity-75 animate-pulse"></div>
                <img
                  src={sainteNew}
                  alt="Sainte Billings, CPA"
                  className="relative w-full max-w-lg h-auto rounded-2xl shadow-2xl"
                  width="500"
                  height="600"
                />
                <div className="absolute -bottom-6 left-0 right-0 bg-yellow-400 px-8 py-4 rounded-2xl shadow-2xl border-4 border-white">
                  <div className="text-center">
                    <div className="text-xl font-black text-black">Sainte Billings, CPA</div>
                    <div className="text-black font-bold">Tax Strategy Expert</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pain Section */}
      <section className="py-20 px-4 bg-white relative">
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#174a21] via-yellow-400 to-[#996516]"></div>
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-[#174a21] mb-6">
              Are You Tired of Overpaying the IRS?
            </h2>
          </div>
          
          <div className="space-y-8 text-xl md:text-2xl font-bold text-gray-800 leading-relaxed">
            <p>
              If you're a <span className="text-[#174a21] bg-yellow-400/30 px-2 py-1 rounded">doctor, lawyer, consultant, executive, or high-income W-2 earner</span>... you already know the IRS is taking the biggest slice of your hard work.
            </p>
            
            <div className="bg-red-50 border-l-8 border-red-500 p-6 rounded-r-xl">
              <p className="text-red-700 font-black text-2xl">You're paying more in taxes than you should every single year.</p>
            </div>
            
            <div className="bg-orange-50 border-l-8 border-orange-500 p-6 rounded-r-xl">
              <p className="text-orange-700 font-black text-2xl">Your CPA is likely just filing — not strategizing.</p>
            </div>
            
            <div className="bg-[#174a21] text-white p-8 rounded-2xl text-center">
              <p className="text-yellow-400 font-black text-3xl">
                And if you're earning $150K+ (W-2) or $250K+ (business owner), even one overlooked move can cost you FIVE FIGURES.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-[#174a21] to-[#996516] text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              In This 60-Minute LIVE Webinar, You'll Discover:
            </h2>
            <div className="w-32 h-2 bg-yellow-400 mx-auto rounded-full"></div>
          </div>
          
          <div className="space-y-8 text-xl md:text-2xl font-bold text-white">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-yellow-400/50 hover:bg-white/20 transition-all duration-300">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-yellow-400 flex items-center justify-center flex-shrink-0 mt-1 rounded-full">
                  <span className="text-black font-black text-2xl">1</span>
                </div>
                <p><span className="text-yellow-400 font-black">The Top 4 Mistakes High Earners Make</span> — And How to Fix Them</p>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-yellow-400/50 hover:bg-white/20 transition-all duration-300">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-yellow-400 flex items-center justify-center flex-shrink-0 mt-1 rounded-full">
                  <span className="text-black font-black text-2xl">2</span>
                </div>
                <p><span className="text-yellow-400 font-black">The High-Income Edge Framework</span> – How to legally design your income to pay $0 in taxes (yes, $0).</p>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-yellow-400/50 hover:bg-white/20 transition-all duration-300">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-yellow-400 flex items-center justify-center flex-shrink-0 mt-1 rounded-full">
                  <span className="text-black font-black text-2xl">3</span>
                </div>
                <p><span className="text-yellow-400 font-black">IRS-Approved Strategies</span> That Shift You From "Taxpayer" to Wealth Creator</p>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-yellow-400/50 hover:bg-white/20 transition-all duration-300">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-yellow-400 flex items-center justify-center flex-shrink-0 mt-1 rounded-full">
                  <span className="text-black font-black text-2xl">4</span>
                </div>
                <p><span className="text-yellow-400 font-black">Implement Immediate, Actionable Strategies</span> – Walk away with steps you can start using this year to cut your tax bill.</p>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <a
              href="https://api.taxnitro.com/widget/form/cyODn3Dx3FhB4W5m2RU5?notrack=true"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-yellow-400 text-black px-12 py-6 text-2xl font-black hover:bg-yellow-300 transition duration-300 uppercase tracking-wide rounded-2xl shadow-2xl transform hover:scale-105"
              onClick={() => {try{fbq('track','Lead',{content_name:'Register Button Click',content_category:'Tax Webinar Funnel',value:0.00,currency:'USD'})}catch(e){}}}
            >
              💰 SAVE MY SPOT NOW 💰
            </a>
          </div>
        </div>
      </section>

      {/* Timing Section */}
      <section className="py-20 px-4 bg-white relative">
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-yellow-400 via-[#174a21] to-[#996516]"></div>
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-[#174a21] mb-6">
              ⏰ Time is Running Out!
            </h2>
          </div>
          
          <div className="space-y-8 text-xl md:text-2xl font-bold text-gray-800 leading-relaxed">
            <p>
              <span className="bg-red-100 text-red-700 px-4 py-2 rounded-lg">Tax laws are always shifting</span> — and waiting until filing season is too late.
            </p>
            
            <div className="bg-[#174a21] text-white p-8 rounded-2xl text-center">
              <p className="text-yellow-400 font-black text-2xl">
                This webinar gives you timely, practical strategies you can start using NOW to protect your 2025 income before it's locked in.
              </p>
            </div>
            
            <div className="bg-gradient-to-r from-yellow-400 to-[#996516] text-white p-8 rounded-2xl text-center">
              <p className="font-black text-2xl">
                If you want to keep more of what you earn and finally break free from overpaying the IRS, this webinar is for YOU.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Instructor Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-[#996516] to-[#174a21] text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              Meet Your Tax Strategy Expert
            </h2>
            <div className="w-32 h-2 bg-yellow-400 mx-auto rounded-full"></div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm p-12 rounded-3xl border border-yellow-400/50">
            <div className="space-y-8 text-center">
              <div>
                <h3 className="text-3xl md:text-4xl font-black text-yellow-400 mb-4">Sainte Billings, CPA</h3>
                <p className="text-xl md:text-2xl font-bold text-white mb-2">Founder of Ampliara PLLC</p>
                <p className="text-xl md:text-2xl font-bold text-white">Specialist in Advanced Tax Strategies for High-Earners</p>
              </div>
              
              <div className="text-xl md:text-2xl font-bold text-white leading-relaxed space-y-6">
                <p>
                  I've spent years helping practitioners, executives, and other business owners uncover <span className="text-yellow-400 font-black">$10K–$50K+ in missed savings</span> every year through proactive planning.
                </p>
                <div className="bg-yellow-400 text-black p-6 rounded-2xl">
                  <p className="font-black text-2xl">
                    Now, I'm sharing the same framework with you — in this free, live session.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Call-to-Action Section */}
      <section className="py-20 px-4 bg-black text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#174a21] via-black to-[#996516]"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#996516]/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="container mx-auto max-w-4xl text-center">
          <div className="relative z-10">
            <div className="mb-12">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                🚨 SEATS ARE LIMITED 🚨
              </h2>
              <p className="text-2xl md:text-3xl text-yellow-400 font-bold">
                Secure your spot TODAY before it's too late!
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm border-2 border-yellow-400 p-8 rounded-3xl mb-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xl font-bold text-white">
                <div className="text-center">
                  <span className="block text-yellow-400 font-black text-2xl">📅 DATE:</span>
                  <div className="text-2xl">October 16, 2025</div>
                </div>
                <div className="text-center">
                  <span className="block text-yellow-400 font-black text-2xl">⏰ TIME:</span>
                  <div className="text-2xl">7:00 PM EST</div>
                </div>
                <div className="text-center">
                  <span className="block text-yellow-400 font-black text-2xl">💻 FORMAT:</span>
                  <div className="text-2xl">Live Online</div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <a
                href="https://api.taxnitro.com/widget/form/cyODn3Dx3FhB4W5m2RU5?notrack=true"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-yellow-400 to-yellow-300 text-black px-16 py-8 text-3xl font-black hover:from-yellow-300 hover:to-yellow-200 transition duration-300 uppercase tracking-wide rounded-3xl shadow-2xl transform hover:scale-105 animate-bounce"
                onClick={() => {try{fbq('track','Lead',{content_name:'Register Button Click',content_category:'Tax Webinar Funnel',value:0.00,currency:'USD'})}catch(e){}}}
              >
                🎯 REGISTER FOR THE FREE WEBINAR 🎯
              </a>
              
              <div className="bg-red-600 text-white px-6 py-3 rounded-full inline-block font-bold text-lg animate-pulse">
                ⚠️ ONLY 100 SPOTS AVAILABLE ⚠️
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