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
    "Trusted by 6- and 7-figure entrepreneurs"
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-br from-[#174a21]/5 via-white to-[#996516]/5">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-6xl font-serif font-bold text-[#174a21] mb-8 leading-tight">
                Discover 30 Proven Tax Strategies Every Professional Should Know
              </h1>
              <p className="text-lg md:text-xl text-[#174a21]/80 leading-relaxed">
                Whether you're a physician, attorney, or consultant, the truth is simple: you're likely leaving money on the table. 
                High earners like you face some of the most complex tax rules — but also the biggest opportunities for savings.
              </p>
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
                <div className="absolute -bottom-4 -right-4 bg-[#996516] text-white px-6 py-3 rounded-xl shadow-lg">
                  <div className="text-sm font-medium">Sainte Billings</div>
                  <div className="text-xs opacity-90">CPA & Founder</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why This Matters Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#174a21] mb-8 text-center">
            Why This Matters
          </h2>
          <div className="text-center mb-8">
            <p className="text-lg md:text-xl text-[#174a21]/80 leading-relaxed mb-6">
              You've worked hard to build your practice. Yet, without the right planning, the IRS will take more than its fair share. 
              Most professionals overpay in taxes each year because they:
            </p>
          </div>
          <div className="space-y-6 max-w-3xl mx-auto">
            <div className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-sm border border-[#174a21]/10">
              <div className="w-3 h-3 bg-[#996516] rounded-full flex-shrink-0 mt-2"></div>
              <p className="text-lg text-[#174a21]/80">Miss out on deductions unique to their industry.</p>
            </div>
            <div className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-sm border border-[#174a21]/10">
              <div className="w-3 h-3 bg-[#996516] rounded-full flex-shrink-0 mt-2"></div>
              <p className="text-lg text-[#174a21]/80">Don't leverage entity structures or retirement plans effectively.</p>
            </div>
            <div className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-sm border border-[#174a21]/10">
              <div className="w-3 h-3 bg-[#996516] rounded-full flex-shrink-0 mt-2"></div>
              <p className="text-lg text-[#174a21]/80">Lack proactive strategies tailored to their personal and business finances.</p>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Get Section */}
      <section className="py-20 px-4 bg-[#174a21]/5">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#174a21] mb-8 text-center">
            What You'll Get
          </h2>
          <div className="text-center mb-8">
            <p className="text-lg md:text-xl text-[#174a21]/80 leading-relaxed mb-6">
              In this free guide, you'll discover 30 actionable strategies that can help you:
            </p>
          </div>
          <div className="space-y-6 max-w-3xl mx-auto">
            <div className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-sm">
              <div className="w-3 h-3 bg-[#996516] rounded-full flex-shrink-0 mt-2"></div>
              <p className="text-lg text-[#174a21]/80">Reduce your tax liability while staying compliant.</p>
            </div>
            <div className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-sm">
              <div className="w-3 h-3 bg-[#996516] rounded-full flex-shrink-0 mt-2"></div>
              <p className="text-lg text-[#174a21]/80">Protect more of your income through smart planning.</p>
            </div>
            <div className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-sm">
              <div className="w-3 h-3 bg-[#996516] rounded-full flex-shrink-0 mt-2"></div>
              <p className="text-lg text-[#174a21]/80">Unlock opportunities that most professionals overlook.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#174a21] mb-6">
              👉 Download the Free Guide Today
            </h2>
            <p className="text-lg text-[#174a21]/80">
              Start keeping more of what you earn — and see how much further your money can go with the right plan.
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

      {/* Take the Next Step Section */}
      <section className="py-20 px-4 bg-[#174a21]/5">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#174a21] text-center mb-8">
            Take the Next Step
          </h2>
          
          <div className="text-center mb-12 max-w-4xl mx-auto">
            <p className="text-lg md:text-xl text-[#174a21]/80 leading-relaxed">
              Reading strategies is one thing — applying them to your situation is where the real savings happen. 
              After downloading the book, schedule a Tax Strategy Session with our team. In just one meeting, 
              we'll show you how these strategies apply to your practice and uncover opportunities to save 
              thousands of dollars this year.
            </p>
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