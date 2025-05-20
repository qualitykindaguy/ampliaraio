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
  MessageSquare,
} from 'lucide-react';
import Navbar from '../components/Navbar';
import FooterSection from '../components/FooterSection';

function EntrepreneurStarter() {
  const packageIncludes = [
    {
      title: "Complete Financial Support and Compliance Oversight",
      items: [
        "Strategic Planning Sessions: Periodic meetings to align financial goals and growth strategies",
        "Quarterly Assessments: Four in-depth review meetings annually to evaluate progress and adjust plans",
        "Business Setup or Comprehensive Assessment: Assistance with establishing or assessing your business framework",
        "Books Audit & Assessment: Review of the past three months of records to ensure accuracy and consistency",
        "Prior Year Reconciliation: Alignment of the last filed tax return with financial statements to avoid discrepancies"
      ],
      icon: <Target className="h-8 w-8 text-[#996516]" />,
    },
    {
      title: "Customized Tax Planning",
      items: [
        "Tax Plan Proposal: Tailored strategies to minimize tax liabilities and maximize deductions",
        "Income Tax Compliance: Federal, state, and local filings as needed",
        "Quarterly Estimates Calculation: Calculations to prevent underpayment penalties",
        "1099 Filings: Up to 5 included; additional filings at $75 each"
      ],
      icon: <Calculator className="h-8 w-8 text-[#996516]" />,
    },
    {
      title: "Comprehensive Bookkeeping",
      items: [
        "Monthly Bookkeeping: Ongoing recordkeeping to maintain accurate financials and support decision-making"
      ],
      icon: <BookOpen className="h-8 w-8 text-[#996516]" />,
    },
    {
      title: "On-Call Advisory and Consulting",
      items: [
        "Routine Consulting: Up to 3 hours of consulting for any financial inquiries or guidance"
      ],
      icon: <BriefcaseIcon className="h-8 w-8 text-[#996516]" />,
    },
    {
      title: "Administrative and Account Support",
      items: [
        "Business checking and savings accounts setup",
        "Business credit cards setup",
        "Retirement accounts setup"
      ],
      icon: <Building2 className="h-8 w-8 text-[#996516]" />,
    },
    {
      title: "Systems & Automation Assistance",
      items: [
        "Self-Payment Setup: Guidance on setting up effective payment processes",
        "Account Automation: Support with automating workflows for seamless account management"
      ],
      icon: <Settings className="h-8 w-8 text-[#996516]" />,
    }
  ];

  const idealFor = [
    "Are committed to having an expert oversee their business finances",
    "Seek confidence in maintaining compliance with IRS and income tax obligations",
    "Want to start maximizing the earning power of their money",
    "Are ready to transition from simply filing taxes to proactively planning for them",
    "Have a vision for retirement and wish to start planning for it now",
    "Are aiming to achieve significant financial milestones before the year's end"
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-r from-[#174a21]/10 to-[#996516]/10">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-[#996516]/10 text-[#996516] rounded-full text-sm font-semibold mb-6">
              Complete Financial Support
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-[#174a21] mb-8">
              Entrepreneur Starter Package
            </h1>
            <p className="text-xl text-[#174a21]/80 mb-12 leading-relaxed">
              Complete financial management and tax compliance support for growing businesses,
              designed to help you achieve your financial goals.
            </p>
          </div>
        </div>
      </section>

      {/* Who Is This For Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-[#174a21] mb-16 text-center">This Package is Designed for Business Owners Who:</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {idealFor.map((item, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-2xl border-2 border-[#174a21]/10 hover:border-[#996516] transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="h-6 w-6 text-[#996516] flex-shrink-0 mt-1" />
                  <p className="text-lg text-[#174a21]/80">{item}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Package Includes Section */}
      <section className="py-20 px-4 bg-[#174a21]/5">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-[#174a21] mb-16 text-center">This Package Includes</h2>
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
                    <h3 className="text-2xl font-semibold text-[#174a21] mb-4">{service.title}</h3>
                    <ul className="space-y-3">
                      {service.items.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-[#996516] flex-shrink-0 mt-1" />
                          <span className="text-[#174a21]/80">{item}</span>
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

      {/* Book Consultation Section */}
      <section className="py-20 px-4 bg-[#174a21]">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-white mb-8">Ready to Get Started?</h2>
          <div className="bg-white rounded-2xl p-12">
            <MessageSquare className="h-16 w-16 text-[#996516] mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-[#174a21] mb-4">Let's Discuss Your Business Needs</h3>
            <p className="text-[#174a21]/80 text-lg mb-8 max-w-2xl mx-auto">
              Schedule a consultation with our expert team to explore how our Entrepreneur Starter Package can help establish a strong financial foundation for your business and set you up for long-term success.
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

export default EntrepreneurStarter;