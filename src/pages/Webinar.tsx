import React from 'react';
import { Calendar, Star, Sparkles, Target, TrendingUp, BookOpen, Clock, Users, Award } from 'lucide-react';
import Navbar from '../components/Navbar';
import FooterSection from '../components/FooterSection';

function Webinar() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-[#174a21]/10 via-[#996516]/5 to-white overflow-hidden relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-[#996516]/20 via-transparent to-transparent"></div>
        <div className="container mx-auto relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-[#996516]/10 text-[#996516] px-4 py-2 rounded-full text-sm font-semibold mb-6 animate-pulse">
              <Sparkles className="h-4 w-4" />
              EXCLUSIVE WEBINAR
              <Sparkles className="h-4 w-4" />
            </div>
            
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-[#174a21] mb-6 leading-tight px-4">
              The Big Beautiful <span className="text-[#996516] relative inline-block">
                Bill
                <div className="absolute -top-2 -right-2 text-yellow-400">
                  <Star className="h-6 w-6 md:h-8 w-8 fill-current animate-bounce" />
                </div>
              </span> Breakdown
            </h1>
            
            <div className="flex justify-center items-center gap-1 mb-8">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 md:h-6 w-6 text-yellow-400 fill-current" />
              ))}
              <span className="ml-2 text-[#174a21]/80 font-medium text-sm md:text-base">Live Training Event</span>
            </div>
            
            <p className="text-base md:text-lg lg:text-xl text-[#174a21]/80 mb-12 leading-relaxed max-w-3xl mx-auto px-4">
              Join us for an exclusive live training where we'll break down the essential strategies 
              for managing your business finances, optimizing tax savings, and building sustainable wealth.
            </p>
          </div>
        </div>
      </section>

      {/* What You'll Learn */}
      <section className="py-20 px-4 bg-[#174a21]/5">
        <div className="container mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-[#174a21] mb-16 text-center px-4">What You'll Discover</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
              <Target className="h-10 w-10 md:h-12 w-12 text-[#996516] mx-auto mb-6" />
              <h3 className="text-lg md:text-xl font-semibold text-[#174a21] mb-4">Strategic Tax Planning</h3>
              <p className="text-[#174a21]/80 text-sm md:text-base">Learn proven strategies to minimize your tax burden and maximize your savings</p>
            </div>
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
              <TrendingUp className="h-10 w-10 md:h-12 w-12 text-[#996516] mx-auto mb-6" />
              <h3 className="text-lg md:text-xl font-semibold text-[#174a21] mb-4">Business Structure Optimization</h3>
              <p className="text-[#174a21]/80 text-sm md:text-base">Discover the right business structure to protect and grow your wealth</p>
            </div>
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
              <BookOpen className="h-10 w-10 md:h-12 w-12 text-[#996516] mx-auto mb-6" />
              <h3 className="text-lg md:text-xl font-semibold text-[#174a21] mb-4">Financial Management Systems</h3>
              <p className="text-[#174a21]/80 text-sm md:text-base">Build systems that keep your finances organized and compliant year-round</p>
            </div>
          </div>
        </div>
      </section>

      {/* Webinar Details */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <Calendar className="h-12 w-12 md:h-16 w-16 text-[#996516] mx-auto mb-6" />
            <h2 className="text-2xl md:text-4xl font-bold text-[#174a21] mb-6 px-4">Reserve Your Spot</h2>
            <p className="text-base md:text-lg lg:text-xl text-[#174a21]/80 mb-8 max-w-3xl mx-auto px-4">
              This exclusive training is designed for entrepreneurs and business owners ready to take control 
              of their financial future. Space is limited to ensure personalized attention.
            </p>
            <div className="inline-flex items-center gap-2 bg-[#174a21]/10 text-[#174a21] px-4 py-2 rounded-full text-sm font-semibold mb-8">
              <Sparkles className="h-4 w-4" />
              Limited Seats Available
              <Sparkles className="h-4 w-4" />
            </div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border-2 border-[#996516]/20">
            <div className="mb-6 text-center">
              <h3 className="text-xl md:text-2xl font-semibold text-[#174a21] mb-2">Join The Big Beautiful Bill Breakdown</h3>
              <p className="text-[#174a21]/80">Fill out the form below to secure your spot</p>
            </div>
            
            <div className="min-h-[444px] w-full overflow-hidden">
              <iframe
                src="https://api.taxnitro.com/widget/form/gASBGaRIppZUg8vyLPDW"
                style={{width:'100%', height:'444px', border:'none', borderRadius:'4px'}}
                id="inline-gASBGaRIppZUg8vyLPDW"
                data-layout="{'id':'INLINE'}"
                data-trigger-type="alwaysShow"
                data-trigger-value=""
                data-activation-type="alwaysActivated"
                data-activation-value=""
                data-deactivation-type="neverDeactivate"
                data-deactivation-value=""
                data-form-name="Fundable Founders"
                data-height="444"
                data-layout-iframe-id="inline-gASBGaRIppZUg8vyLPDW"
                data-form-id="gASBGaRIppZUg8vyLPDW"
                title="Fundable Founders"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-[#174a21]">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-8 px-4">Why Attend This Webinar?</h2>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8">
            <div className="flex justify-center items-center gap-2 mb-6">
              <Star className="h-6 w-6 text-yellow-400 fill-current" />
              <span className="text-white font-semibold text-sm md:text-base">Exclusive Benefits</span>
              <Star className="h-6 w-6 text-yellow-400 fill-current" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-white/90">
              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-[#996516] flex-shrink-0" />
                <span className="text-sm md:text-base">Live Q&A with tax experts</span>
              </div>
              <div className="flex items-center gap-3">
                <Users className="h-5 w-5 text-[#996516] flex-shrink-0" />
                <span className="text-sm md:text-base">Interactive training format</span>
              </div>
              <div className="flex items-center gap-3">
                <Award className="h-5 w-5 text-[#996516] flex-shrink-0" />
                <span className="text-sm md:text-base">Actionable strategies you can implement immediately</span>
              </div>
              <div className="flex items-center gap-3">
                <BookOpen className="h-5 w-5 text-[#996516] flex-shrink-0" />
                <span className="text-sm md:text-base">Exclusive resources and templates</span>
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