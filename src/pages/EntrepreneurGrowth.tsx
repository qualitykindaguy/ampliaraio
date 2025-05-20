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
} from 'lucide-react';
import Navbar from '../components/Navbar';
import FooterSection from '../components/FooterSection';

function EntrepreneurGrowth() {
  const packageIncludes = [
    {
      title: "Complete Financial Support and Compliance Oversight",
      items: [
        "Strategic Planning Sessions: Monthly meetings to align financial goals and growth strategies",
        "Quarterly Assessments: In-depth quarterly reviews with detailed financial analysis and forecasting",
        "Business Structure Optimization: Regular assessment and optimization of your business structure for growth",
        "Comprehensive Financial Review: Detailed analysis of all financial records and performance metrics",
        "Advanced Tax Planning: Proactive tax strategy development and implementation"
      ],
      icon: <Target className="h-8 w-8 text-[#996516]" />,
    },
    {
      title: "Strategic Tax Planning",
      items: [
        "Advanced tax strategies tailored for growing businesses",
        "Multi-State Tax Compliance: Comprehensive tax compliance across multiple jurisdictions",
        "Tax Projections: Detailed quarterly tax projections and planning",
        "Advanced Filing Services: Complex return preparation and strategic filing timing"
      ],
      icon: <Calculator className="h-8 w-8 text-[#996516]" />,
    },
    {
      title: "CFO Advisory Services",
      items: [
        "Strategic financial guidance and decision-making support",
        "Growth Strategy Planning: Development and implementation of scalable growth strategies"
      ],
      icon: <BriefcaseIcon className="h-8 w-8 text-[#996516]" />,
    },
    {
      title: "Advanced Financial Infrastructure",
      items: [
        "Implementation of sophisticated financial management systems",
        "Investment Strategy: Guidance on business investment opportunities",
        "Retirement Planning: Advanced retirement and succession planning",
        "Credit Building: Strategic approach to building business credit and relationships"
      ],
      icon: <Settings className="h-8 w-8 text-[#996516]" />,
    }
  ];

  const idealFor = [
    "Have been in business for multiple years and are ready for the next level of growth",
    "Need comprehensive financial oversight and strategic planning",
    "Want to optimize their business structure for maximum tax efficiency",
    "Are looking to scale their operations while maintaining compliance",
    "Seek expert guidance in building long-term wealth through their business",
    "Want to ensure their business finances are fully optimized and compliant"
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-r from-[#174a21]/10 to-[#996516]/10">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-[#996516]/10 text-[#996516] rounded-full text-sm font-semibold mb-6">
              Advanced Financial Oversight
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-[#174a21] mb-8">
              Entrepreneur Growth Package
            </h1>
            <p className="text-xl text-[#174a21]/80 mb-12 leading-relaxed">
              Comprehensive financial management and strategic planning for established businesses
              ready to scale to the next level.
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

      {/* Pricing Section */}
      <section className="py-20 px-4 bg-[#174a21]">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-white mb-8">Ready to Scale Your Business?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Full Payment Option */}
            <div className="bg-white rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-[#996516] mb-2">One-time Payment</h3>
              <div className="text-4xl font-bold text-[#174a21] my-4">$11,997</div>
              <div className="bg-[#996516]/10 text-[#996516] px-4 py-2 rounded-lg font-semibold text-lg mb-6">
                Save <span className="text-2xl">$1,003</span> when you pay in full!
              </div>
              <a
                href="https://api.taxnitro.com/payment-link/67508a6ba025e877a789b354"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#996516] text-white px-6 py-3 rounded-lg hover:bg-[#996516]/90 transition duration-300 text-lg font-semibold"
              >
                Pay Full
              </a>
            </div>
            
            {/* Quarterly Plan */}
            <div className="bg-white rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-[#996516] mb-2">Quarterly Plan</h3>
              <div className="text-3xl font-bold text-[#174a21] my-4">
                <div>4 × $3,250</div>
              </div>
              <p className="text-[#174a21]/80 mb-6">Quarterly payments</p>
              <a
                href="https://api.taxnitro.com/payment-link/677c8dcbe6c0106a380cf285"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#996516] text-white px-6 py-3 rounded-lg hover:bg-[#996516]/90 transition duration-300 text-lg font-semibold"
              >
                Choose Plan
              </a>
            </div>

            {/* Monthly Plan */}
            <div className="bg-white rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-[#996516] mb-2">Monthly Plan</h3>
              <div className="text-2xl font-bold text-[#174a21] my-4">
                <div>$2,797 Initial</div>
                <div className="text-xl text-[#174a21]/80">+ 11 × $900</div>
              </div>
              <p className="text-[#174a21]/80 mb-6">Monthly payments</p>
              <a
                href="https://api.taxnitro.com/payment-link/677c8d9a2ad4ad0c5fd45a39"
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

export default EntrepreneurGrowth;