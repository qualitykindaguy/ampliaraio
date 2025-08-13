import React from 'react';
import { Star, CheckCircle2, TrendingUp, Calculator, Shield, Target, DollarSign, Users, Award, ArrowRight, Zap, Clock } from 'lucide-react';
import Navbar from '../components/Navbar';
import FooterSection from '../components/FooterSection';
import sainteNew from '../assets/sainte-new.png';

function TaxRendezvous() {
  const benefits = [
    "Uncover hidden tax deductions you're missing",
    "Learn advanced strategies to legally minimize taxes",
    "Get a personalized tax optimization roadmap",
    "Connect with certified tax professionals",
    "Discover potential savings of $10K-$50K+"
  ];

  const features = [
    {
      icon: <Calculator className="h-8 w-8 text-[#174a21]" />,
      title: "Tax Assessment",
      description: "Comprehensive analysis of your current tax situation"
    },
    {
      icon: <Target className="h-8 w-8 text-[#174a21]" />,
      title: "Strategy Development",
      description: "Custom tax optimization strategies for your business"
    },
    {
      icon: <Shield className="h-8 w-8 text-[#174a21]" />,
      title: "Expert Guidance",
      description: "Direct access to certified tax professionals"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 bg-[#174a21] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-yellow-400 text-black px-6 py-2 rounded-full text-sm font-bold mb-8 animate-pulse">
              <Zap className="h-4 w-4" />
              FREE TAX ASSESSMENT
              <Zap className="h-4 w-4" />
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-8 leading-tight">
              Is Your Accountant
              <span className="block text-yellow-400">Costing You Money?</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
              Take our comprehensive tax assessment and discover if you're overpaying taxes. 
              Most business owners are leaving $15K-$75K on the table every year.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 px-8 py-4 rounded-xl">
                <div className="text-3xl font-bold text-yellow-400">$25K+</div>
                <div className="text-sm text-purple-200">Average Savings Discovered</div>
              </div>
              <ArrowRight className="h-8 w-8 text-yellow-400 rotate-90 sm:rotate-0" />
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 px-8 py-4 rounded-xl">
                <div className="text-3xl font-bold text-yellow-400">5 Min</div>
                <div className="text-sm text-white/80">Quick Assessment</div>
              </div>
            </div>
            
            <div className="mt-12">
              <a
                href="https://api.taxnitro.com/widget/form/shz0IvJZskAEK5VEhM3C"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-[#174a21] px-12 py-4 rounded-xl hover:bg-gray-100 transition duration-300 text-xl font-bold shadow-lg hover:shadow-xl transform hover:scale-105 mr-4"
              >
                Start Your Free Assessment
              </a>
              <a
                href="https://api.taxnitro.com/widget/form/shz0IvJZskAEK5VEhM3C"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#996516] text-white px-12 py-4 rounded-xl hover:bg-[#996516]/90 transition duration-300 text-xl font-bold shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Discover Your Savings
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-16">
              How Our Assessment Works
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center group">
                  <div className="w-16 h-16 bg-[#174a21]/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#174a21]/20 transition-colors">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                  <div className="mt-6">
                    <a
                      href="https://api.taxnitro.com/widget/form/shz0IvJZskAEK5VEhM3C"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-[#174a21] text-white px-6 py-2 rounded-lg hover:bg-[#174a21]/90 transition duration-300 font-semibold"
                    >
                      Get Started
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 px-4 bg-[#996516]">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="text-center lg:text-left">
                <div className="flex justify-center lg:justify-start items-center gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-8 w-8 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <blockquote className="text-2xl md:text-3xl text-white mb-8 font-light italic">
                  "The assessment revealed $32,000 in potential savings I never knew existed. 
                  Ampliara's expertise transformed my tax strategy completely."
                </blockquote>
                
                <div className="text-white">
                  <p className="text-xl font-semibold">— Sarah Johnson</p>
                  <p className="text-white/90">Business Owner, Marketing Agency</p>
                </div>
                
                <div className="mt-8">
                  <a
                    href="https://api.taxnitro.com/widget/form/shz0IvJZskAEK5VEhM3C"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-white text-[#996516] px-8 py-3 rounded-lg hover:bg-gray-100 transition duration-300 text-lg font-semibold shadow-lg"
                  >
                    Start My Assessment
                  </a>
                </div>
              </div>
              
              <div className="flex justify-center">
                <div className="relative">
                  <img
                    src={sainteNew}
                    alt="Sainte Billings, CPA"
                    className="w-full max-w-sm rounded-2xl shadow-2xl"
                    width="400"
                    height="500"
                  />
                  <div className="absolute -bottom-4 -right-4 bg-yellow-400 text-black px-6 py-3 rounded-xl font-bold shadow-lg">
                    <div className="text-sm">Your Tax Expert</div>
                    <div className="text-lg">Sainte Billings, CPA</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-16">
            What You'll Discover
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-4 bg-gray-50 p-6 rounded-xl border border-gray-200">
                <div className="flex-shrink-0">
                  <CheckCircle2 className="h-6 w-6 text-[#174a21]" />
                </div>
                <p className="text-lg text-gray-700 font-medium">{benefit}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <a
              href="https://api.taxnitro.com/widget/form/shz0IvJZskAEK5VEhM3C"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#174a21] text-white px-10 py-4 rounded-xl hover:bg-[#174a21]/90 transition duration-300 text-lg font-bold shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Take the Free Assessment Now
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Ready to Stop Overpaying Taxes?
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Take our comprehensive assessment and get a personalized tax optimization strategy. 
              It only takes 5 minutes and could save you thousands.
            </p>
          </div>
          
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 bg-[#174a21]/10 text-[#174a21] px-4 py-2 rounded-full text-sm font-semibold mb-4">
                <Clock className="h-4 w-4" />
                Takes Less Than 5 Minutes
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                Get Your Free Tax Assessment
              </h3>
              <p className="text-gray-600 text-lg">
                Complete the form below to discover your potential tax savings
              </p>
            </div>
            
            <div className="text-center">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://api.taxnitro.com/widget/form/shz0IvJZskAEK5VEhM3C"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-[#174a21] text-white px-12 py-4 rounded-xl hover:bg-[#174a21]/80 transition duration-300 text-xl font-bold shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  Start Your Free Assessment
                </a>
                <a
                  href="https://api.taxnitro.com/widget/form/shz0IvJZskAEK5VEhM3C"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-[#996516] text-white px-12 py-4 rounded-xl hover:bg-[#996516]/80 transition duration-300 text-xl font-bold shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  Discover Hidden Savings
                </a>
              </div>
              <p className="text-gray-500 text-sm mt-4">
                Takes less than 5 minutes • No obligation • 100% confidential
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-[#174a21]/10 rounded-full flex items-center justify-center mb-4">
                <Shield className="h-8 w-8 text-[#174a21]" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">100% Confidential</h3>
              <p className="text-gray-600">Your information is completely secure and private</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-[#174a21]/10 rounded-full flex items-center justify-center mb-4">
                <Award className="h-8 w-8 text-[#174a21]" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Expert Analysis</h3>
              <p className="text-gray-600">Reviewed by certified tax professionals</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-[#174a21]/10 rounded-full flex items-center justify-center mb-4">
                <DollarSign className="h-8 w-8 text-[#174a21]" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">No Obligation</h3>
              <p className="text-gray-600">Free assessment with no strings attached</p>
            </div>
          </div>
        </div>
      </section>

      <FooterSection />
    </div>
  );
}

export default TaxRendezvous;