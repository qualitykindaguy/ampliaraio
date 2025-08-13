import React from 'react';
import { Star, CheckCircle2, TrendingUp, Calculator, Shield, Target, DollarSign, Users, Award } from 'lucide-react';
import Navbar from '../components/Navbar';
import FooterSection from '../components/FooterSection';
import sainteNew from '../assets/sainte-new.png';

function TaxRendezvous() {
  const benefits = [
    "Discover hidden tax deductions you're missing",
    "Learn strategies to legally minimize your tax burden",
    "Get personalized recommendations for your situation",
    "Connect with a certified tax professional",
    "Receive a custom tax optimization roadmap"
  ];

  const steps = [
    {
      icon: <CheckCircle2 className="h-16 w-16 text-blue-600" />,
      title: "Quick Assessment",
      description: "Complete our comprehensive tax questionnaire in just minutes"
    },
    {
      icon: <Users className="h-16 w-16 text-blue-600" />,
      title: "Expert Analysis",
      description: "Our certified professionals analyze your tax situation and identify savings opportunities"
    },
    {
      icon: <DollarSign className="h-16 w-16 text-blue-600" />,
      title: "Maximize Savings",
      description: "Get a personalized strategy to help you keep more of your hard-earned money"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-gray-800 mb-8 leading-tight">
              Discover if your current accountant is 
              <span className="block text-green-600">costing you money</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto">
              Take our comprehensive tax assessment and uncover potential savings with expert guidance from Ampliara
            </p>

            <div className="bg-green-600 text-white px-8 py-4 rounded-lg inline-block text-lg font-bold mb-8">
              FREE TAX OPTIMIZATION ASSESSMENT
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">
            Take The Assessment, Get Your Strategy — Then Our Plan Can Save You 
            <span className="text-green-600">Money</span>
          </h2>
          
          <div className="bg-white rounded-2xl p-8 shadow-lg mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="bg-green-600 text-white px-6 py-3 rounded-lg text-xl font-bold mb-4">
                  $18K-$191K POTENTIAL EXTRA SAVINGS*
                </div>
                <p className="text-gray-600">
                  Average savings discovered with businesses earning $160K - $8M+ in revenue
                </p>
              </div>
              <div className="bg-gray-200 rounded-lg p-8">
                <p className="text-gray-500 font-semibold">No Optimization Plan</p>
                <div className="text-2xl font-bold text-gray-400 mt-2">$0 Savings</div>
              </div>
            </div>
          </div>

          <p className="text-sm text-gray-500 max-w-3xl mx-auto">
            *Results based on comprehensive tax optimization strategies implemented for clients with similar business profiles. 
            Actual results vary based on individual circumstances, business structure, and current tax planning approach.
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-16 text-center">
            Our Assessment Process
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="mb-6 flex justify-center">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-blue-600">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src={sainteNew}
                alt="Sainte Billings, CPA"
                className="w-full max-w-md mx-auto rounded-2xl shadow-xl"
                width="400"
                height="500"
              />
            </div>
            
            <div className="text-white">
              <div className="flex items-center gap-2 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-8 w-8 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <blockquote className="text-xl md:text-2xl mb-6 italic">
                "Excellent experience! Our team delivers personalized tax strategies with expertise and professionalism. 
                Highly recommended! 5/5 stars."
              </blockquote>
              
              <div className="text-right">
                <p className="text-2xl font-bold">— Verified Client</p>
                <p className="text-blue-200">Actual client testimonial</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Discover */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12 text-center">
            What You'll Discover
          </h2>
          
          <div className="space-y-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-4 bg-gray-50 p-6 rounded-xl">
                <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                <p className="text-lg text-gray-700">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-green-600 to-green-700">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Ready to Uncover Your Tax Savings?
          </h2>
          
          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
            Don't leave money on the table — take our comprehensive tax assessment today and connect with a certified professional to start optimizing your taxes.
          </p>
          
          <div className="bg-white rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Get Your Free Tax Assessment</h3>
            
            <div className="min-h-[500px] w-full overflow-hidden">
              <iframe
                src="https://api.taxnitro.com/widget/form/shz0IvJZskAEK5VEhM3C"
                style={{width:'100%', height:'500px', border:'none', borderRadius:'8px'}}
                id="inline-shz0IvJZskAEK5VEhM3C"
                data-layout="{'id':'INLINE'}"
                data-trigger-type="alwaysShow"
                data-trigger-value=""
                data-activation-type="alwaysActivated"
                data-activation-value=""
                data-deactivation-type="neverDeactivate"
                data-deactivation-value=""
                data-form-name="Tax Rendezvous Assessment"
                data-height="500"
                data-layout-iframe-id="inline-shz0IvJZskAEK5VEhM3C"
                data-form-id="shz0IvJZskAEK5VEhM3C"
                title="Tax Rendezvous Assessment"
              />
            </div>
          </div>
        </div>
      </section>

      <FooterSection />
      
      <script src="https://api.taxnitro.com/js/form_embed.js"></script>
    </div>
  );
}

export default TaxRendezvous;