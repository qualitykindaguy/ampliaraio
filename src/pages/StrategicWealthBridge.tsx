import React from 'react';
import {
  Target,
  DollarSign,
  CheckCircle2,
  TrendingUp,
  Calculator,
  FileText,
  Users,
  Award,
  Lightbulb,
  Calendar,
  Building2,
  PiggyBank,
  Shield,
  Mail,
  Clock,
  Briefcase,
  LineChart,
  CreditCard,
  BookOpen,
  Settings,
  MessageSquare,
} from 'lucide-react';
import Navbar from '../components/Navbar';
import FooterSection from '../components/FooterSection';

function StrategicWealthBridge() {
  const coreOutcomes = [
    {
      title: "Tax Liability Reduction",
      description: "Comprehensive tax reduction across salary, bonuses, RSUs, and investment income",
      icon: <Calculator className="h-6 w-6 text-[#996516]" />,
    },
    {
      title: "Entity Evaluation & Setup",
      description: "Strategic entity setup for consulting, real estate, or advisory work (if applicable)",
      icon: <Building2 className="h-6 w-6 text-[#996516]" />,
    },
    {
      title: "Retirement Planning Integration",
      description: "Comprehensive retirement planning including solo 401(k), backdoor Roth, and more",
      icon: <PiggyBank className="h-6 w-6 text-[#996516]" />,
    },
    {
      title: "Wealth Blueprint",
      description: "Strategic wealth building with ethical tax leverage opportunities (DAFs, trusts, etc.)",
      icon: <TrendingUp className="h-6 w-6 text-[#996516]" />,
    },
  ];

  const deliverables = [
    {
      title: "1:1 Strategic Planning Intensive",
      subtitle: "90 minutes",
      description: "Deep-dive strategy session tailored to your financial goals",
      icon: <Users className="h-8 w-8 text-[#996516]" />,
    },
    {
      title: "Customized Tax Optimization Blueprint",
      subtitle: "Comprehensive strategy document",
      description: "Detailed optimization for salary, RSUs, deductions, and investments",
      icon: <FileText className="h-8 w-8 text-[#996516]" />,
    },
    {
      title: "Entity Strategy or Income-Stream Exploration Path",
      subtitle: "S-Corp vs. alternatives analysis",
      description: "Strategic evaluation of business structure options",
      icon: <Building2 className="h-8 w-8 text-[#996516]" />,
    },
    {
      title: "Retirement & Wealth Planning Module",
      subtitle: "With calculators + contribution scenarios",
      description: "Comprehensive retirement planning with detailed projections",
      icon: <Calculator className="h-8 w-8 text-[#996516]" />,
    },
    {
      title: "Quarterly Implementation Check-ins",
      subtitle: "4 sessions throughout the year",
      description: "Regular progress reviews and strategy adjustments",
      icon: <Calendar className="h-8 w-8 text-[#996516]" />,
    },
    {
      title: "On-call Email Support",
      subtitle: "Questions + document review",
      description: "Ongoing support for implementation questions and document reviews",
      icon: <Mail className="h-8 w-8 text-[#996516]" />,
    },
    {
      title: "Year-End Tax Preparation & Filing",
      subtitle: "Complete tax services",
      description: "Professional tax preparation and filing services",
      icon: <FileText className="h-8 w-8 text-[#996516]" />,
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
              Year-Round Wealth Strategy
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-[#174a21] mb-6 leading-tight">
              Strategic Wealth Bridge
            </h1>
            <p className="text-xl text-[#174a21]/80 mb-4 leading-relaxed">
              For high-income professionals who want to deploy capital strategically, reduce taxes, 
              and explore income-generating options, without quitting their corporate job.
            </p>
          </div>
        </div>
      </section>

      {/* Core Outcomes Section */}
      <section className="py-20 px-4 bg-[#174a21]/5">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-[#174a21] mb-16 text-center">Ideal For You If You Want:</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {coreOutcomes.map((outcome, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    {outcome.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#174a21] mb-2">{outcome.title}</h3>
                    <p className="text-[#174a21]/80">{outcome.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-[#174a21] mb-16 text-center">What To Expect</h2>
          <div className="space-y-8">
            {deliverables.map((item, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-2xl border-2 border-[#174a21]/10 hover:border-[#996516] transition-all duration-300"
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <div className="mb-4">
                      <h3 className="text-2xl font-semibold text-[#174a21] mb-1">{item.title}</h3>
                      <p className="text-[#996516] font-medium">{item.subtitle}</p>
                    </div>
                    <p className="text-[#174a21]/80">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule Consultation Section */}
      <section className="py-20 px-4 bg-[#174a21]">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-white mb-8">Ready to Bridge Your Wealth Strategy?</h2>
          <div className="bg-white rounded-2xl p-12">
            <MessageSquare className="h-16 w-16 text-[#996516] mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-[#174a21] mb-4">Schedule Your Strategic Consultation</h3>
            <p className="text-[#174a21]/80 text-lg mb-8 max-w-2xl mx-auto">
              Let's discuss how our Strategic Wealth Bridge can help you optimize your taxes, explore income-generating 
              opportunities, and build wealth while maintaining your corporate career. Our expert team is ready to 
              create your personalized wealth strategy.
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

export default StrategicWealthBridge;