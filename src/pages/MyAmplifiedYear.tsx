import React from 'react';
import { Calendar, Star, Sparkles, Target, TrendingUp, BookOpen } from 'lucide-react';
import Navbar from '../components/Navbar';
import FooterSection from '../components/FooterSection';

function MyAmplifiedYear() {
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
              EXCLUSIVE PREVIEW
              <Sparkles className="h-4 w-4" />
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-[#174a21] mb-6 leading-tight">
              Something <span className="text-[#996516] relative">
                BIG
                <div className="absolute -top-2 -right-2 text-yellow-400">
                  <Star className="h-8 w-8 fill-current animate-bounce" />
                </div>
              </span> is Coming
            </h1>
            
            <div className="flex justify-center items-center gap-1 mb-8">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
              ))}
              <span className="ml-2 text-[#174a21]/80 font-medium">Coming Soon</span>
            </div>
            
            <p className="text-xl md:text-2xl text-[#174a21]/80 mb-12 leading-relaxed">
              Get ready to transform your financial future with <strong>My Amplified Year</strong> - 
              the ultimate financial planning system designed to amplify your wealth and success.
            </p>
          </div>
        </div>
      </section>

      {/* Preview Features */}
      <section className="py-20 px-4 bg-[#174a21]/5">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-[#174a21] mb-16 text-center">What's Coming Will Change Everything</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
              <Target className="h-12 w-12 text-[#996516] mx-auto mb-6" />
              <h3 className="text-xl font-semibold text-[#174a21] mb-4">Strategic Financial Planning</h3>
              <p className="text-[#174a21]/80">Revolutionary planning tools that will transform how you approach your financial goals</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
              <TrendingUp className="h-12 w-12 text-[#996516] mx-auto mb-6" />
              <h3 className="text-xl font-semibold text-[#174a21] mb-4">Wealth Amplification System</h3>
              <p className="text-[#174a21]/80">Proven strategies and frameworks to accelerate your wealth building journey</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
              <BookOpen className="h-12 w-12 text-[#996516] mx-auto mb-6" />
              <h3 className="text-xl font-semibold text-[#174a21] mb-4">Expert Guidance</h3>
              <p className="text-[#174a21]/80">Professional insights and actionable steps from certified financial experts</p>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <Calendar className="h-16 w-16 text-[#996516] mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-[#174a21] mb-6">Get the Inside Scoop</h2>
            <p className="text-xl text-[#174a21]/80 mb-8">
              Be among the first to know when <strong>My Amplified Year</strong> launches. 
              Join our exclusive insider list for early access, special pricing, and bonus content.
            </p>
            <div className="inline-flex items-center gap-2 bg-[#174a21]/10 text-[#174a21] px-4 py-2 rounded-full text-sm font-semibold mb-8">
              <Sparkles className="h-4 w-4" />
              Limited Early Access Available
              <Sparkles className="h-4 w-4" />
            </div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-[#996516]/20">
            <div className="mb-6 text-center">
              <h3 className="text-2xl font-semibold text-[#174a21] mb-2">Reserve Your Spot</h3>
              <p className="text-[#174a21]/80">Fill out the form below to secure your early access</p>
            </div>
            
            <div className="min-h-[500px]">
              <iframe
                src="https://api.taxnitro.com/widget/form/gASBGaRIppZUg8vyLPDW"
                style={{width:'100%', height:'500px', border:'none', borderRadius:'4px'}}
                id="inline-gASBGaRIppZUg8vyLPDW"
                data-layout="{'id':'INLINE'}"
                data-trigger-type="alwaysShow"
                data-trigger-value=""
                data-activation-type="alwaysActivated"
                data-activation-value=""
                data-deactivation-type="neverDeactivate"
                data-deactivation-value=""
                data-form-name="My Amplified Year"
                data-height="500"
                data-layout-iframe-id="inline-gASBGaRIppZUg8vyLPDW"
                data-form-id="gASBGaRIppZUg8vyLPDW"
                title="My Amplified Year"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-[#174a21]">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-white mb-8">Don't Miss Out</h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            <strong>My Amplified Year</strong> is launching soon, and early access spots are limited. 
            Join our insider list now to be the first to experience this game-changing financial planning system.
          </p>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
            <div className="flex justify-center items-center gap-2 mb-4">
              <Star className="h-6 w-6 text-yellow-400 fill-current" />
              <span className="text-white font-semibold">Early Bird Benefits</span>
              <Star className="h-6 w-6 text-yellow-400 fill-current" />
            </div>
            <ul className="text-white/90 space-y-2">
              <li>• Exclusive early access before public launch</li>
              <li>• Special insider pricing</li>
              <li>• Bonus planning templates and resources</li>
              <li>• Direct access to expert guidance</li>
            </ul>
          </div>
        </div>
      </section>

      <FooterSection />
      
      <script src="https://api.taxnitro.com/js/form_embed.js"></script>
    </div>
  );
}

export default MyAmplifiedYear;