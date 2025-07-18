import React from 'react';
import { Rocket, Star, Zap, TrendingUp, Users, Target } from 'lucide-react';
import Navbar from '../components/Navbar';
import FooterSection from '../components/FooterSection';

function FundableFounders() {
  const features = [
    {
      icon: <Rocket className="h-8 w-8 text-[#996516]" />,
      title: "Revolutionary Approach",
      description: "A game-changing strategy that transforms how founders access capital"
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-[#996516]" />,
      title: "Accelerated Growth",
      description: "Fast-track your funding journey with proven methodologies"
    },
    {
      icon: <Target className="h-8 w-8 text-[#996516]" />,
      title: "Strategic Advantage",
      description: "Gain the competitive edge that sets successful founders apart"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-[#174a21]/10 via-[#996516]/5 to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-[#996516]/20 via-transparent to-transparent"></div>
        <div className="container mx-auto relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-[#996516]/10 text-[#996516] px-6 py-3 rounded-full text-sm font-semibold mb-8 animate-pulse">
              <Zap className="h-4 w-4" />
              <span>EXCLUSIVE PREVIEW</span>
              <Zap className="h-4 w-4" />
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-[#174a21] mb-8 leading-tight">
              Something <span className="text-[#996516]">BIG</span> is Coming
            </h1>
            
            <p className="text-2xl md:text-3xl text-[#174a21]/80 mb-6 font-light">
              The Future of Founder Funding
            </p>
            
            <p className="text-xl text-[#174a21]/70 mb-12 leading-relaxed max-w-3xl mx-auto">
              We're about to unveil a revolutionary approach that will transform how ambitious founders 
              access the capital they need to build extraordinary companies. This isn't just another funding solution—
              it's a complete paradigm shift.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-8 w-8 text-[#996516] fill-current" />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Preview */}
      <section className="py-20 px-4 bg-[#174a21]/5">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-[#174a21] mb-16 text-center">What's Coming Will Change Everything</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 text-center group"
              >
                <div className="mb-6 flex justify-center transform group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-semibold text-[#174a21] mb-4">{feature.title}</h3>
                <p className="text-[#174a21]/80 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-[#174a21] mb-6">
              Get the <span className="text-[#996516]">Inside Scoop</span>
            </h2>
            <p className="text-xl text-[#174a21]/80 mb-8 leading-relaxed">
              Be among the first to know when we launch. Join our exclusive insider list and get early access 
              to the most innovative funding solution for ambitious founders.
            </p>
            <div className="inline-flex items-center gap-2 bg-[#174a21]/10 text-[#174a21] px-4 py-2 rounded-full text-sm font-medium mb-8">
              <Users className="h-4 w-4" />
              <span>Limited Early Access Available</span>
            </div>
          </div>

          {/* Embed Form Container */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-[#174a21]/10">
            <div className="w-full" style={{ minHeight: '444px' }}>
              <iframe
                src="https://api.taxnitro.com/widget/form/gASBGaRIppZUg8vyLPDW"
                style={{ width: '100%', height: '444px', border: 'none', borderRadius: '4px' }}
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

      {/* CTA Section */}
      <section className="py-20 px-4 bg-[#174a21] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-[#996516]/30 via-transparent to-transparent"></div>
        <div className="container mx-auto max-w-4xl text-center relative">
          <h2 className="text-4xl font-bold text-white mb-8">Don't Miss Out</h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            This opportunity won't last long. Secure your spot now and be part of the funding revolution 
            that's about to reshape the entrepreneurial landscape.
          </p>
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-full">
            <Rocket className="h-5 w-5" />
            <span className="font-semibold">Launch Coming Soon</span>
          </div>
        </div>
      </section>

      <FooterSection />
      
      {/* Embed Script */}
      <script src="https://api.taxnitro.com/js/form_embed.js"></script>
    </div>
  );
}

export default FundableFounders;