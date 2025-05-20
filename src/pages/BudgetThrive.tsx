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
  Lightbulb,
  Settings,
  MessageSquare,
} from 'lucide-react';
import Navbar from '../components/Navbar';
import FooterSection from '../components/FooterSection';

function BudgetThrive() {
  const packageIncludes = [
    {
      title: "Comprehensive Tax Planning & Filing",
      description: "We don't just prepare your taxes; we plan ahead to minimize your liability.",
      features: [
        "Quarterly Tax Liability Assessment: Stay ahead with proactive planning and avoid tax surprises.",
        "Federal & State Tax Return Preparation: We handle both personal federal and state filings, ensuring every deduction and credit is captured.",
      ],
      icon: <FileText className="h-8 w-8 text-[#996516]" />,
    },
    {
      title: "Net Worth & Budget Tracking",
      description: "Gain a clear view of your financial standing with our detailed tracking systems.",
      features: [
        "Net Worth Assessment & Monitoring: Track your assets and liabilities to ensure steady growth.",
        "12-Months of Personal Income and Expense Tracking: Monthly monitoring helps you stay on top of your budget, identify areas for improvement, and celebrate progress.",
      ],
      icon: <LineChart className="h-8 w-8 text-[#996516]" />,
    },
    {
      title: "Strategic Financial Freedom Roadmap",
      description: "Get the guidance you need to turn your financial dreams into reality.",
      features: [
        "Goal Setting & Financial Freedom Strategy Call (60 min): Start with a deep dive into your goals and create a clear, actionable roadmap to reach them.",
        "Financial Freedom Roadmap with Customized Budget Proposal: We'll build a personalized financial plan, tailored to your lifestyle and aspirations.",
        "Automation Setup Meeting (90 min): Ensure your finances work for you on autopilot with tools that handle budgeting, savings, and investments.",
      ],
      icon: <Target className="h-8 w-8 text-[#996516]" />,
    },
    {
      title: "Personalized Strategy Meetings",
      description: "Throughout the year, we'll meet regularly to ensure you're staying on track.",
      features: [
        "Three (3) Financial Freedom Strategy Sessions: Ongoing strategic guidance to keep your financial goals in focus.",
      ],
      icon: <Users className="h-8 w-8 text-[#996516]" />,
    },
    {
      title: "Ongoing Accountability & Support",
      description: "Consistency is key to long-term success. That's why we're with you every step of the way.",
      features: [
        "Monthly Budget Monitoring Support: Get monthly feedback and support to ensure your budget aligns with your goals.",
        "Personalized Financial Automation Assistance: We'll help set up automation for specific goals like high savings, investment growth, and maximizing tax savings.",
      ],
      icon: <Settings className="h-8 w-8 text-[#996516]" />,
    },
  ];

  const idealFor = [
    "Feel overwhelmed by their finances and tax liabilities.",
    "Need strategic guidance to build a sustainable financial plan.",
    "Want to optimize taxes, investments, and savings but don't have the time or expertise to do it alone.",
  ];

  const benefits = [
    {
      title: "Save Time & Stress",
      description: "Let us handle your tax preparation, strategy, and planning, so you can focus on what matters most—growing wealth.",
      icon: <Clock className="h-12 w-12 text-[#996516]" />,
    },
    {
      title: "Maximize Your Tax Savings",
      description: "Our tax planning ensures you never leave money on the table.",
      icon: <Wallet className="h-12 w-12 text-[#996516]" />,
    },
    {
      title: "Achieve Financial Freedom",
      description: "With a customized financial roadmap and regular check-ins, you'll have everything you need to thrive financially.",
      icon: <TrendingUp className="h-12 w-12 text-[#996516]" />,
    },
    {
      title: "Exclusive Tools & Strategies",
      description: "We provide access to the latest financial tools and automation systems, ensuring that your money works for you on autopilot.",
      icon: <Lightbulb className="h-12 w-12 text-[#996516]" />,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-r from-[#174a21]/10 to-[#996516]/10">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-[#996516]/10 text-[#996516] rounded-full text-sm font-semibold mb-6">
              All-Inclusive Financial Package
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-[#174a21] mb-8">Budget & Thrive</h1>
            <p className="text-xl text-[#174a21]/80 mb-12 leading-relaxed">
              A comprehensive financial management solution designed to help you achieve financial freedom
              while maximizing your wealth-building potential.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-[#174a21] mb-16 text-center">What's Included</h2>
          <div className="space-y-12">
            {packageIncludes.map((service, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-2xl border-2 border-[#174a21]/10 hover:border-[#996516] transition-all duration-300"
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-[#174a21] mb-2">{service.title}</h3>
                    <p className="text-[#174a21]/80 mb-6">{service.description}</p>
                    <ul className="space-y-3">
                      {service.features.map((feature, idx) => (
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

      {/* Who Is This For Section */}
      <section className="py-20 px-4 bg-[#174a21]/5">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-[#174a21] mb-8 text-center">Who Is This For?</h2>
            <p className="text-xl text-[#174a21]/80 mb-8 text-center">
              This package is perfect for high-earning professionals, solopreneurs, and business owners who:
            </p>
            <div className="space-y-4">
              {idealFor.map((item, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-sm"
                >
                  <CheckCircle2 className="h-6 w-6 text-[#996516] flex-shrink-0 mt-1" />
                  <p className="text-lg text-[#174a21]/80">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-[#174a21]/5">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-[#174a21] mb-16 text-center">Why Choose This Package?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className="bg-white p-8 rounded-2xl border-2 border-[#174a21]/10 hover:border-[#996516] transition-all duration-300 hover:shadow-xl group text-center"
              >
                <div className="mb-6 flex justify-center transform group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <h3 className="text-2xl font-semibold text-[#174a21] mb-4">{benefit.title}</h3>
                <p className="text-[#174a21]/80 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Book Consultation Section */}
      <section className="py-20 px-4 bg-[#174a21]">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-white mb-8">Ready to Start Your Journey?</h2>
          <div className="bg-white rounded-2xl p-12">
            <MessageSquare className="h-16 w-16 text-[#996516] mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-[#174a21] mb-4">Book Your Free Consultation</h3>
            <p className="text-[#174a21]/80 text-lg mb-8 max-w-2xl mx-auto">
              Let's discuss how our Budget & Thrive package can help you achieve your financial goals. Schedule a consultation with our expert team to create your personalized financial roadmap.
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

export default BudgetThrive;