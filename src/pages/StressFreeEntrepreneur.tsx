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
  Settings,
  CreditCard,
  PiggyBank,
  BriefcaseIcon,
  Heart,
  ShieldCheck,
  HandshakeIcon,
} from 'lucide-react';
import Navbar from '../components/Navbar';
import FooterSection from '../components/FooterSection';

function StressFreeEntrepreneur() {
  const benefits = [
    {
      title: "Expert Partnership",
      description: "Partner with a trusted financial expert with vested interest in your success.",
      icon: <HandshakeIcon className="h-6 w-6 text-[#996516]" />,
    },
    {
      title: "Peace of Mind",
      description: "Stop worrying about the IRS coming after you and offload your financial stress to a financial expert.",
      icon: <ShieldCheck className="h-6 w-6 text-[#996516]" />,
    },
    {
      title: "Personal & Business Growth",
      description: "Ensure you are thriving financially personally along with your business.",
      icon: <TrendingUp className="h-6 w-6 text-[#996516]" />,
    },
    {
      title: "Strategic Planning",
      description: "Make your money your employee and plan for retirement.",
      icon: <Target className="h-6 w-6 text-[#996516]" />,
    },
    {
      title: "Work-Life Balance",
      description: "Plan to take paid off vacation while maximizing your investments.",
      icon: <Heart className="h-6 w-6 text-[#996516]" />,
    },
  ];

  const supportServices = [
    {
      title: "12 Months Support",
      description: "Comprehensive support for both personal and business finances",
      sessions: [
        "(7) 60-minutes Planning Sessions",
        "Judgment-Free Zone Audit Session",
        "Budget Proposal Follow-up",
        "4 Quarterly assessment meetings",
        "Year-end Overview Session"
      ],
      icon: <Clock className="h-8 w-8 text-[#996516]" />,
    }
  ];

  const auditServices = [
    {
      title: "Judgment-Free Audit",
      description: "Comprehensive review of personal and business finances",
      details: [
        "Review of personal bank statements (3 months)",
        "Review of business bank statements (3 months)",
        "Assessment of business model",
        "Wealth Starter-Kit Report"
      ],
      icon: <FileText className="h-8 w-8 text-[#996516]" />,
    },
    {
      title: "Personal & Business \"Yes\" Plan",
      description: "Budget that will allow you to say \"YES\" more",
      details: [
        "Operations",
        "Debt management",
        "Savings Plan",
        "Business/Personal Interaction",
        "Investment Plan (personal/business)"
      ],
      icon: <Target className="h-8 w-8 text-[#996516]" />,
    }
  ];

  const taxServices = [
    {
      title: "Tax Compliance Oversight",
      details: [
        "Quarterly estimates calculation to avoid underpayments",
        "Tax return calculation and excel workbook",
        "Federal income tax filing",
        "State & Local income tax filing",
        "Manage and oversee all necessary filings (1099,K-1 issues,1120, 1065, 1040, 1120-S, 7004, ES filings)",
        "1099 filings (up to 5 and $75 ea for additional filings)"
      ],
      icon: <Calculator className="h-8 w-8 text-[#996516]" />,
    }
  ];

  const adminServices = [
    {
      title: "Personal Account Setup",
      details: [
        "High yield savings accounts",
        "Brokerage accounts"
      ],
      icon: <Wallet className="h-8 w-8 text-[#996516]" />,
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-r from-[#174a21]/10 to-[#996516]/10">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-[#174a21] mb-8">
              The Stress-Free Entrepreneur
            </h1>
            <p className="text-xl text-[#174a21]/80 mb-12 leading-relaxed">
              A comprehensive 12-month partnership covering both personal and business finances,
              designed to eliminate financial stress and maximize your success.
            </p>
          </div>
        </div>
      </section>

      {/* Support Services Section */}
      <section className="py-20 px-4 bg-[#174a21]/5">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-[#174a21] mb-16 text-center">Comprehensive Support</h2>
          {supportServices.map((service, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg max-w-3xl mx-auto"
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  {service.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-[#174a21] mb-4">{service.title}</h3>
                  <p className="text-[#174a21]/80 mb-6">{service.description}</p>
                  <ul className="space-y-3">
                    {service.sessions.map((session, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-[#996516] flex-shrink-0 mt-1" />
                        <span className="text-[#174a21]/80">{session}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Audit Services Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-[#174a21] mb-16 text-center">Comprehensive Audit & Planning</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {auditServices.map((service, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-2xl border-2 border-[#174a21]/10 hover:border-[#996516] transition-all duration-300"
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-[#174a21] mb-4">{service.title}</h3>
                    <p className="text-[#174a21]/80 mb-6">{service.description}</p>
                    <ul className="space-y-3">
                      {service.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-[#996516] flex-shrink-0 mt-1" />
                          <span className="text-[#174a21]/80">{detail}</span>
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

      {/* Tax Services Section */}
      <section className="py-20 px-4 bg-[#174a21]/5">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-[#174a21] mb-16 text-center">Tax Services</h2>
          {taxServices.map((service, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg max-w-3xl mx-auto"
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  {service.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-[#174a21] mb-6">{service.title}</h3>
                  <ul className="space-y-3">
                    {service.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-[#996516] flex-shrink-0 mt-1" />
                        <span className="text-[#174a21]/80">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Admin Services Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-[#174a21] mb-16 text-center">Administrative Assistance</h2>
          {adminServices.map((service, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-2xl border-2 border-[#174a21]/10 hover:border-[#996516] transition-all duration-300 max-w-3xl mx-auto"
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  {service.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-[#174a21] mb-6">{service.title}</h3>
                  <ul className="space-y-3">
                    {service.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-[#996516] flex-shrink-0 mt-1" />
                        <span className="text-[#174a21]/80">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
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

      {/* Pricing Section */}
      <section className="py-20 px-4 bg-[#174a21]">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-white mb-8">Ready to Transform Your Financial Future?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Full Payment Option */}
            <div className="bg-white rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-[#996516] mb-2">One-time Payment</h3>
              <div className="text-5xl font-bold text-[#174a21] my-4">$14,997</div>
              <div className="bg-[#996516]/10 text-[#996516] px-4 py-2 rounded-lg font-semibold text-lg mb-6">
                Save <span className="text-2xl">$1,500</span> when you pay in full!
              </div>
              <a
                href="https://api.taxnitro.com/payment-link/67508d0b6dbf11c8aae42520"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#996516] text-white px-6 py-3 rounded-lg hover:bg-[#996516]/90 transition duration-300 text-lg font-semibold"
              >
                Pay Full
              </a>
            </div>
            
            {/* Payment Plan Option */}
            <div className="bg-white rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-[#996516] mb-2">Payment Plan</h3>
              <div className="text-3xl font-bold text-[#174a21] my-4">
                <div>$3,210 Initial</div>
                <div className="text-xl text-[#174a21]/80">+ 11 × $1,117</div>
              </div>
              <p className="text-[#174a21]/80 mb-6">Flexible monthly payments</p>
              <a
                href="https://api.taxnitro.com/payment-link/67b69c97eba43a839d350f82"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#996516] text-white px-6 py-3 rounded-lg hover:bg-[#996516]/90 transition duration-300 text-lg font-semibold"
              >
                Choose Plan
              </a>
            </div>
          </div>
        </div>
      </section>

      <FooterSection />
    </div>
  );
}

export default StressFreeEntrepreneur;