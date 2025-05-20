import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import Navbar from '../components/Navbar';
import FooterSection from '../components/FooterSection';

function TaxPreparation() {
  const services = [
    {
      title: 'Individual Tax Returns',
      description: 'Accurate preparation for employees, freelancers, and individuals with diverse income sources.',
      icon: <CheckCircle2 className="h-8 w-8 text-[#996516]" />,
    },
    {
      title: 'Business Tax Returns',
      description: 'Comprehensive support for LLCs, S-Corps, and partnerships.',
      icon: <CheckCircle2 className="h-8 w-8 text-[#996516]" />,
    },
    {
      title: 'Rental Property Taxes',
      description: 'Optimized tax filings for real estate investors.',
      icon: <CheckCircle2 className="h-8 w-8 text-[#996516]" />,
    },
    {
      title: '1099 Income Reporting',
      description: 'Special attention to self-employed individuals and contractors.',
      icon: <CheckCircle2 className="h-8 w-8 text-[#996516]" />,
    },
    {
      title: 'Tax Credit Maximization',
      description: 'Ensure you are taking advantage of every tax credit and deduction available to you.',
      icon: <CheckCircle2 className="h-8 w-8 text-[#996516]" />,
    },
  ];

  const coverageList = [
    'You receive a W-2 from an employer',
    'You receive a 1099 for freelance, contract, or self-employment income',
    'You own or operate an LLC, S-Corp, or Partnership',
    'You own one or more rental properties',
    'You recently sold or purchased property',
    'You manage multiple income streams or investments',
    'You simply want the peace of mind that comes with expert tax preparation!',
  ];

  const benefits = [
    {
      title: 'Virtual Convenience',
      description: 'File your taxes from anywhere with our easy-to-use system',
    },
    {
      title: 'Tailored Expertise',
      description: 'Every client receives a customized approach to ensure no deduction is missed',
    },
    {
      title: 'Secure and Confidential',
      description: 'Your sensitive information is protected by industry-leading security protocols',
    },
    {
      title: 'Affordable Pricing',
      description: 'Transparent rates with no hidden fees',
    },
    {
      title: 'Ongoing Support',
      description: "Have questions? We're here year-round to provide guidance",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-r from-[#174a21]/10 to-[#996516]/10">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-[#174a21] mb-8 leading-tight">
              Expert Tax Filing Services Done Virtually
            </h1>
            <p className="text-xl text-[#174a21]/80 mb-12 leading-relaxed">
              At Ampliara, we take the hassle out of tax season with our seamless, virtual tax preparation services. 
              Whether you're an individual, a small business owner, or a property investor, our experienced team is 
              here to help you Maximize Deductions, Ensure Compliance, and Minimize Tax Burdens.
            </p>
            <a
              href="https://api.taxnitro.com/widget/bookings/ampliaraworkingtogether"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#174a21] text-white px-8 py-4 rounded-lg hover:bg-[#174a21]/90 transition duration-300 text-lg font-semibold"
            >
              Get Started Today
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-[#174a21] mb-16 text-center">Our Tax Filing Services Include</h2>
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

      {/* Coverage Section */}
      <section className="py-20 px-4 bg-[#174a21]/5">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-[#174a21] mb-16 text-center">We Got You Covered If</h2>
            <div className="space-y-6">
              {coverageList.map((item, index) => (
                <div 
                  key={index} 
                  className="flex items-center gap-4 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <CheckCircle2 className="h-8 w-8 text-[#996516] flex-shrink-0" />
                  <p className="text-lg text-[#174a21]/80">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-[#174a21] mb-16 text-center">Why Choose Ampliara?</h2>
          <div className="max-w-4xl mx-auto space-y-6">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border-2 border-[#174a21]/10"
              >
                <CheckCircle2 className="h-8 w-8 text-[#996516] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-[#174a21] mb-2">{benefit.title}</h3>
                  <p className="text-[#174a21]/80">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-[#174a21]">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-white mb-8">Take the Stress Out of Tax Season</h2>
          <p className="text-xl text-white/90 mb-12 leading-relaxed">
            Schedule a free consultation today and let us handle the heavy lifting.
          </p>
          <a
            href="https://api.taxnitro.com/widget/bookings/ampliaraworkingtogether"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#996516] text-white px-8 py-4 rounded-lg hover:bg-[#996516]/90 transition duration-300 text-lg font-semibold"
          >
            Get Started Now
          </a>
        </div>
      </section>

      <FooterSection darkMode={true} />
    </div>
  );
}

export default TaxPreparation;