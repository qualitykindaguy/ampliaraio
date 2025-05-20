import React from 'react';
import {
  Receipt,
  Calculator,
  CreditCard,
  FileText,
  LineChart,
  MessageSquare,
  BookOpen,
  CheckCircle2,
} from 'lucide-react';
import Navbar from '../components/Navbar';
import FooterSection from '../components/FooterSection';

function BookkeepingStarter() {
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
      title: "Perfect for Growing Businesses",
      description: "Ideal for businesses managing up to 70 monthly transactions, providing the foundation for organized financial management.",
      icon: <BookOpen className="h-12 w-12 text-[#996516]" />,
    },
    {
      title: "Tax-Ready Records",
      description: "All your financial records organized and prepared for tax season, ensuring compliance and maximizing deductions.",
      icon: <FileText className="h-12 w-12 text-[#996516]" />,
    },
    {
      title: "Time-Saving Solution",
      description: "Focus on growing your business while we handle the books with professional accuracy and attention to detail.",
      icon: <CheckCircle2 className="h-12 w-12 text-[#996516]" />,
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
              Professional Bookkeeping Services
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-[#174a21] mb-8 leading-tight">
              Annual Bookkeeping Starter
            </h1>
            <p className="text-xl text-[#174a21]/80 mb-12 leading-relaxed">
              Professional monthly bookkeeping services designed for growing businesses managing up to 70 monthly transactions.
              Our comprehensive service includes detailed financial tracking, regular reporting, and year-end documentation
              to keep your business organized and compliant.
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
          <h2 className="text-4xl font-bold text-[#174a21] mb-16 text-center">Why Choose This Package</h2>
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

      {/* Book Consultation Section */}
      <section className="py-20 px-4 bg-[#174a21]">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-white mb-8">Ready to Get Started?</h2>
          <div className="bg-white rounded-2xl p-12">
            <MessageSquare className="h-16 w-16 text-[#996516] mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-[#174a21] mb-4">Let's Discuss Your Bookkeeping Needs</h3>
            <p className="text-[#174a21]/80 text-lg mb-8 max-w-2xl mx-auto">
              Schedule a consultation with our expert team to discuss how our Annual Bookkeeping Starter package can help streamline your business finances and set you up for success.
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

export default BookkeepingStarter;