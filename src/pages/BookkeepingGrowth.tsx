import React from 'react';
import {
  Receipt,
  Calculator,
  CreditCard,
  FileText,
  LineChart,
  MessageSquare,
  TrendingUp,
  BarChart,
  PieChart,
} from 'lucide-react';
import Navbar from '../components/Navbar';
import FooterSection from '../components/FooterSection';

function BookkeepingGrowth() {
  const services = [
    {
      title: "Expense Tracking and Categorization",
      description: "Detailed tracking and categorization of all business expenses for better financial management.",
      icon: <Receipt className="h-8 w-8 text-[#996516]" />,
    },
    {
      title: "Income Recording",
      description: "Accurate recording and classification of all income sources.",
      icon: <Calculator className="h-8 w-8 text-[#996516]" />,
    },
    {
      title: "Bank and Credit Card Reconciliation",
      description: "Regular reconciliation of all accounts to ensure accuracy and catch discrepancies.",
      icon: <CreditCard className="h-8 w-8 text-[#996516]" />,
    },
    {
      title: "Monthly Financial Reports",
      description: "Comprehensive monthly reports including profit & loss statements and balance sheets.",
      icon: <FileText className="h-8 w-8 text-[#996516]" />,
    },
    {
      title: "Year-End Financial Summary",
      description: "Detailed annual financial overview and tax-ready documentation.",
      icon: <LineChart className="h-8 w-8 text-[#996516]" />,
    },
    {
      title: "Ongoing Support and Consultation",
      description: "Regular check-ins and support for your financial questions and concerns.",
      icon: <MessageSquare className="h-8 w-8 text-[#996516]" />,
    },
  ];

  const benefits = [
    {
      title: "Ideal for High-Volume Businesses",
      description: "Expertly designed for businesses managing 71-250 monthly transactions, providing comprehensive financial oversight.",
      icon: <TrendingUp className="h-12 w-12 text-[#996516]" />,
    },
    {
      title: "Advanced Financial Insights",
      description: "In-depth financial analysis and trend reporting to drive informed business decisions and growth strategies.",
      icon: <BarChart className="h-12 w-12 text-[#996516]" />,
    },
    {
      title: "Comprehensive Financial Management",
      description: "Full-service bookkeeping solution with enhanced reporting and strategic financial guidance for growing businesses.",
      icon: <PieChart className="h-12 w-12 text-[#996516]" />,
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
              Advanced Bookkeeping Services
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-[#174a21] mb-8 leading-tight">
              Annual Bookkeeping Growth+
            </h1>
            <p className="text-xl text-[#174a21]/80 mb-12 leading-relaxed">
              Advanced monthly bookkeeping services tailored for established businesses managing 71-250 monthly transactions.
              Our comprehensive service includes detailed financial management, advanced reporting, and strategic guidance
              to support your business growth.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-[#174a21] mb-16 text-center">What's Included</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="bg-white p-8 rounded-2xl border-2 border-[#174a21]/10 hover:border-[#996516] transition-all duration-300 hover:shadow-xl group text-center"
              >
                <div className="mb-6 flex justify-center transform group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-semibold text-[#174a21] mb-4">{service.title}</h3>
                <p className="text-[#174a21]/80 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-[#174a21]/5">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-[#174a21] mb-16 text-center">Why Choose Growth+</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 text-center"
              >
                <div className="mb-6 flex justify-center">
                  {benefit.icon}
                </div>
                <h3 className="text-2xl font-semibold text-[#174a21] mb-4">{benefit.title}</h3>
                <p className="text-[#174a21]/80 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 bg-[#174a21]">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-white mb-8">Ready to Scale Your Business?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Full Payment Option */}
            <div className="bg-white rounded-2xl p-8 text-center">
              <h3 className="text-xl font-semibold text-[#996516] mb-2">One-time Payment</h3>
              <div className="text-5xl font-bold text-[#174a21] my-4">$6,997</div>
              <div className="bg-[#996516]/10 text-[#996516] px-4 py-2 rounded-lg font-semibold text-lg mb-6">
                Save <span className="text-2xl">$470</span> when you pay in full!
              </div>
              <a
                href="https://api.taxnitro.com/payment-link/675086fd4f672c167556b050"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#996516] text-white px-6 py-3 rounded-lg hover:bg-[#996516]/90 transition duration-300 text-lg font-semibold"
              >
                Pay Full
              </a>
            </div>
            
            {/* Payment Plan Option */}
            <div className="bg-white rounded-2xl p-8 text-center">
              <h3 className="text-xl font-semibold text-[#996516] mb-2">Payment Plan</h3>
              <div className="text-3xl font-bold text-[#174a21] my-4">
                <div>$1,830 Initial</div>
                <div className="text-xl text-[#174a21]/80">+ 11 × $497</div>
              </div>
              <p className="text-[#174a21]/80 mb-6">Flexible monthly payments</p>
              <a
                href="https://api.taxnitro.com/payment-link/677c8ef8e6c010b2990cf288"
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

export default BookkeepingGrowth;