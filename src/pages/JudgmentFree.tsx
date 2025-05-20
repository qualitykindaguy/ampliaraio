import React from 'react';
import {
  FileText,
  Calculator,
  Target,
  Users,
  CheckCircle2,
  Clock,
  TrendingUp,
  Wallet,
  LineChart,
  Building2,
  BookOpen,
  Heart,
  ShieldCheck,
  MessageSquare,
} from 'lucide-react';
import Navbar from '../components/Navbar';
import FooterSection from '../components/FooterSection';

function JudgmentFree() {
  const packageIncludes = [
    {
      title: "Three (3) Comprehensive 60-Minute Assessment Meetings",
      description: "Start your journey with personalized guidance and step-by-step strategies to build your financial roadmap.",
      sessions: [
        "Financial Overview: Deep dive into income, expenses, and financial habits",
        "Business Model & Tax Optimization: Review your business model and identify potential tax savings",
        "Wealth-Building & Tax Strategy: Craft action steps for financial freedom, emphasizing tax-saving strategies"
      ],
      icon: <Clock className="h-8 w-8 text-[#996516]" />,
    },
    {
      title: "Robust Tax Planning Proposal",
      description: "A comprehensive tax strategy tailored to your unique situation.",
      features: [
        "Tax-efficient business structure recommendations",
        "Income shifting and tax deferral strategies",
        "Retirement account optimization",
        "Health savings and tax credit maximization"
      ],
      icon: <Calculator className="h-8 w-8 text-[#996516]" />,
    },
    {
      title: "Personalized Action Plan & Optimized Budget",
      description: "A clear roadmap to achieve your financial goals.",
      features: [
        "Detailed financial roadmap with specific milestones",
        "Customized budget aligned with your goals",
        "Cost-cutting strategies",
        "Wealth-building opportunities",
        "Personalized tax-saving actions"
      ],
      icon: <Target className="h-8 w-8 text-[#996516]" />,
    }
  ];

  const howItWorks = [
    {
      step: 1,
      title: "Initial Consultation",
      description: "We'll begin with an overview of your financial and tax situation.",
    },
    {
      step: 2,
      title: "Tax Strategy Assessment",
      description: "A deep dive into your income, business, and investments to identify tax-saving opportunities.",
    },
    {
      step: 3,
      title: "Comprehensive Plan Delivery",
      description: "You'll receive a detailed tax plan, an optimized budget, and a list of clear, actionable steps.",
    }
  ];

  const benefits = [
    {
      title: "Enhanced Tax Strategy",
      description: "With the addition of a robust tax planning proposal, this package is now more powerful, ensuring that you maximize your tax savings.",
      icon: <TrendingUp className="h-6 w-6 text-[#996516]" />,
    },
    {
      title: "Tailored for You",
      description: "Every part of this plan is customized based on your financial situation and goals, giving you specific strategies for personal and business growth.",
      icon: <Target className="h-6 w-6 text-[#996516]" />,
    },
    {
      title: "Low-Risk, High-Reward",
      description: "We take the pressure off while delivering clear, actionable insights that you can implement immediately.",
      icon: <ShieldCheck className="h-6 w-6 text-[#996516]" />,
    },
    {
      title: "Tax Efficiency",
      description: "We specialize in helping clients reduce their tax burdens while ensuring compliance, making this a must for high-earners and business owners.",
      icon: <CheckCircle2 className="h-6 w-6 text-[#996516]" />,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-r from-[#174a21]/10 to-[#996516]/10">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-[#174a21] mb-8">Judgment-Free Audit & Plan</h1>
            <p className="text-xl text-[#174a21]/80 mb-12 leading-relaxed">
              A personalized financial assessment and tax optimization strategy designed to help you 
              take control of your finances and maximize your tax savings.
            </p>
          </div>
        </div>
      </section>

      {/* Package Includes Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-[#174a21] mb-16 text-center">This Package Includes</h2>
          <div className="space-y-12">
            {packageIncludes.map((item, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-2xl border-2 border-[#174a21]/10 hover:border-[#996516] transition-all duration-300"
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-[#174a21] mb-2">{item.title}</h3>
                    <p className="text-[#174a21]/80 mb-6">{item.description}</p>
                    <ul className="space-y-3">
                      {(item.sessions || item.features)?.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-[#996516] flex-shrink-0 mt-1" />
                          <span className="text-[#174a21]/80">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4 bg-[#174a21]/5">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-[#174a21] mb-16 text-center">How It Works</h2>
          <div className="max-w-3xl mx-auto space-y-8">
            {howItWorks.map((step, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-[#996516]/10 rounded-full flex items-center justify-center">
                    <span className="text-[#996516] font-bold text-xl">{step.step}</span>
                  </div>
                  <h3 className="text-2xl font-semibold text-[#174a21]">{step.title}</h3>
                </div>
                <p className="text-[#174a21]/80">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-[#174a21] mb-12 text-center">Why Choose This Package?</h2>
          <div className="space-y-6">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="flex items-start gap-4 bg-[#174a21]/5 p-6 rounded-xl hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex-shrink-0 mt-1">
                  {benefit.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#174a21] mb-2">{benefit.title}</h3>
                  <p className="text-[#174a21]/80">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Book Consultation Section */}
      <section className="py-20 px-4 bg-[#174a21]">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-white mb-8">Ready to Take Control?</h2>
          <div className="bg-white rounded-2xl p-12">
            <MessageSquare className="h-16 w-16 text-[#996516] mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-[#174a21] mb-4">Book Your Free Consultation</h3>
            <p className="text-[#174a21]/80 text-lg mb-8 max-w-2xl mx-auto">
              Schedule a consultation with our expert team to discuss your financial goals and how we can help you achieve them. Let's create a personalized plan for your success.
            </p>
            <a
              href="https://api.taxnitro.com/widget/bookings/ampliaraworkingtogether"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#996516] text-white px-8 py-4 rounded-lg hover:bg-[#996516]/90 transition duration-300 text-lg font-semibold"
            >
              Schedule Your Consultation
            </a>
          </div>
        </div>
      </section>

      <FooterSection />
    </div>
  );
}

export default JudgmentFree;