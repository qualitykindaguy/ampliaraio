import React from 'react';
import { Shield, TrendingUp, FileText } from 'lucide-react';
import Navbar from '../components/Navbar';
import FooterSection from '../components/FooterSection';
import sainteNew from '../assets/sainte-new.png';

function TaxStrategies() {
  const benefits = [
    {
      icon: <Shield className="h-12 w-12 text-[#996516]" />,
      title: "Smarter Tax Planning",
      description: "Cut liability without cutting corners."
    },
    {
      icon: <TrendingUp className="h-12 w-12 text-[#996516]" />,
      title: "Wealth-Driven Structure",
      description: "Use your business entity as a tool for long-term gain."
    },
    {
      icon: <FileText className="h-12 w-12 text-[#996516]" />,
      title: "Pro-Level Deductions",
      description: "Avoid overlooked write-offs and retain more income."
    }
  ];

  const trustPoints = [
    "Former EY Tax Manager",
    "Trusted by 6- and 7-figure entrepreneurs",
    "Community advocate and founder of Walk My Shoes, Inc."
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-br from-[#174a21]/5 via-white to-[#996516]/5">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-[#174a21] mb-8 leading-tight">
            Keep More. Build More.
            <span className="block text-[#996516]">Strategically.</span>
          </h1>
          <p className="text-xl md:text-2xl text-[#174a21]/80 leading-relaxed max-w-3xl mx-auto">
            Download your free guide: <strong>30 Powerful Tax Strategies for Wealth Building</strong>—crafted 
            for high-achieving professionals ready to protect profits and grow wealth with intention.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20 px-4 bg-[#174a21]/5">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#174a21] mb-6">
              Ready to reduce your tax bill and build lasting wealth?
            </h2>
            <p className="text-lg text-[#174a21]/80">
              Fill out the form below to get your guide instantly.
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

      {/* Benefits Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#174a21] text-center mb-16">
            What You'll Discover
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="text-center p-8 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-[#174a21]/10"
              >
                <div className="mb-6 flex justify-center">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-[#174a21] mb-4">
                  {benefit.title}
                </h3>
                <p className="text-[#174a21]/80 text-lg">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Sainte Section */}
      <section className="py-20 px-4 bg-[#174a21]/5">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#174a21] mb-8">
                Meet Your Tax Strategy Expert
              </h2>
              <p className="text-lg text-[#174a21]/80 leading-relaxed mb-8">
                <strong>Sainte Billings, CPA and Financial Alignment Expert</strong>, has helped high-income 
                professionals move from reactive tax prep to intentional financial strategy. As the founder 
                of Ampliara, she merges deep tax expertise with a mission to help purpose-driven earners 
                build generational wealth—with clarity and conviction.
              </p>
              
              {/* Trust Points */}
              <div className="space-y-3">
                {trustPoints.map((point, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-[#996516] rounded-full"></div>
                    <p className="text-[#174a21]/80 font-medium">{point}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="order-1 lg:order-2 flex justify-center">
              <div className="relative">
                <img
                  src={sainteNew}
                  alt="Sainte Billings, CPA"
                  className="w-full max-w-md rounded-2xl shadow-2xl"
                  width="400"
                  height="500"
                />
                <div className="absolute -bottom-4 -right-4 bg-[#996516] text-white px-6 py-3 rounded-xl shadow-lg">
                  <div className="text-sm font-medium">Sainte Billings</div>
                  <div className="text-xs opacity-90">CPA & Founder</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 bg-[#174a21]">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-8">
            Your Wealth-Building Journey Starts Here
          </h2>
          <p className="text-xl text-white/90 mb-12 leading-relaxed">
            Don't let another tax season pass without a strategic plan. Get your free guide and 
            start implementing proven strategies that high-earning professionals use to keep more 
            and build lasting wealth.
          </p>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <p className="text-white text-lg mb-4">
              Ready to transform your tax strategy?
            </p>
            <p className="text-white/80">
              Scroll back up to download your free guide now.
            </p>
          </div>
        </div>
      </section>

      <FooterSection />
      
      <script src="https://api.taxnitro.com/js/form_embed.js"></script>
    </div>
  );
}

export default TaxStrategies;