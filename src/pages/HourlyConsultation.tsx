import React from 'react';
import {
  Clock,
  CheckCircle2,
  Target,
  Calculator,
  Building2,
  FileText,
  Lightbulb,
  ScrollText,
} from 'lucide-react';
import Navbar from '../components/Navbar';
import FooterSection from '../components/FooterSection';

function HourlyConsultation() {
  const idealFor = [
    "Have specific tax questions about your situation",
    "Need insight on tax implications of business decisions",
    "Want an expert review of your tax planning strategy"
  ];

  const includes = [
    "One-hour call focused on your tax concerns",
    "Straightforward, actionable tax guidance — no fluff",
    "Follow-up summary (if needed) within 1 business day"
  ];

  const consultationTopics = [
    {
      title: "Tax Planning",
      description: "Strategic guidance on minimizing tax liability and maximizing deductions.",
      icon: <Calculator className="h-8 w-8 text-[#996516]" />,
    },
    {
      title: "Business Tax Structure",
      description: "Review your business structure for optimal tax efficiency.",
      icon: <Building2 className="h-8 w-8 text-[#996516]" />,
    },
    {
      title: "Tax Compliance",
      description: "Ensure your tax reporting meets all regulatory requirements.",
      icon: <FileText className="h-8 w-8 text-[#996516]" />,
    },
    {
      title: "Tax Return Review",
      description: "Expert review of past returns and future filing strategies.",
      icon: <ScrollText className="h-8 w-8 text-[#996516]" />,
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
              Expert Tax Guidance
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-[#174a21] mb-8">
              60-Minute Tax Consultation
            </h1>
            <p className="text-xl text-[#174a21]/80 mb-12 leading-relaxed">
              Need expert advice on a tax matter? Book a 1-hour consultation to get clear, 
              strategic guidance from a CPA.
            </p>
          </div>
        </div>
      </section>

      {/* Ideal For Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-[#174a21] mb-12 text-center">
            This Session is Ideal If You:
          </h2>
          <div className="space-y-6">
            {idealFor.map((item, index) => (
              <div 
                key={index}
                className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <CheckCircle2 className="h-6 w-6 text-[#996516] flex-shrink-0 mt-1" />
                <p className="text-lg text-[#174a21]/80">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-20 px-4 bg-[#174a21]/5">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-[#174a21] mb-12 text-center">
            What's Included
          </h2>
          <div className="space-y-6">
            {includes.map((item, index) => (
              <div 
                key={index}
                className="flex items-start gap-4 bg-white p-6 rounded-xl hover:shadow-md transition-shadow duration-300"
              >
                <CheckCircle2 className="h-6 w-6 text-[#996516] flex-shrink-0 mt-1" />
                <p className="text-lg text-[#174a21]/80">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Topics Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-[#174a21] mb-16 text-center">
            Tax Topics We Can Cover
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {consultationTopics.map((topic, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-2xl border-2 border-[#174a21]/10 hover:border-[#996516] transition-all duration-300"
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    {topic.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-[#174a21] mb-4">{topic.title}</h3>
                    <p className="text-[#174a21]/80">{topic.description}</p>
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
          <h2 className="text-4xl font-bold text-white mb-8">Book Your Session</h2>
          <div className="bg-white rounded-2xl p-12">
            <h3 className="text-2xl font-semibold text-[#174a21] mb-4">Professional Tax Consultation</h3>
            <div className="text-5xl font-bold text-[#174a21] my-6">$225</div>
            <div className="bg-[#996516]/10 text-[#996516] px-4 py-4 rounded-lg mb-8">
              <div className="flex items-center justify-center gap-2">
                <Lightbulb className="h-6 w-6" />
                <span className="font-semibold">Bonus:</span>
              </div>
              <p className="mt-2">
                If you move forward with one of our tax advisory or planning services (excluding tax prep only), 
                we'll apply the $225 consultation fee toward your new service package.
              </p>
            </div>
            <a
              href="https://api.taxnitro.com/payment-link/6812359c9293fd3bd6af7751"
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

export default HourlyConsultation;