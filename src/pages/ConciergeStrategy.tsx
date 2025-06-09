import React from 'react';
import {
  Target,
  CheckCircle2,
  TrendingUp,
  Calculator,
  FileText,
  Users,
  Award,
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
  DollarSign,
  BarChart3,
  Phone,
  Monitor,
  UserCheck,
  ClipboardList,
} from 'lucide-react';
import Navbar from '../components/Navbar';
import FooterSection from '../components/FooterSection';

function ConciergeStrategy() {
  const coreOutcomes = [
    {
      title: "Ongoing Entity-Level Tax Optimization",
      description: "Strategic management of salary, distributions, and fringe benefits for maximum tax efficiency",
      icon: <Calculator className="h-6 w-6 text-[#996516]" />,
    },
    {
      title: "Strategic Financial Oversight",
      description: "Comprehensive forecasting, profit allocation, and retirement layering strategies",
      icon: <TrendingUp className="h-6 w-6 text-[#996516]" />,
    },
    {
      title: "Full Coordination of Compliance",
      description: "Complete management of tax prep, bookkeeping, payroll, and all compliance requirements",
      icon: <Shield className="h-6 w-6 text-[#996516]" />,
    },
    {
      title: "Quarterly Wealth & Compensation Strategy",
      description: "Regular strategic planning sessions to optimize compensation and wealth building",
      icon: <BarChart3 className="h-6 w-6 text-[#996516]" />,
    },
  ];

  const deliverables = [
    {
      title: "Annual Tax Blueprint + Entity Review",
      description: "Comprehensive annual strategy review and optimization",
      icon: <FileText className="h-8 w-8 text-[#996516]" />,
    },
    {
      title: "Monthly Bookkeeping Oversight",
      subtitle: "Reconciliation & categorization",
      description: "Professional monthly bookkeeping with detailed reconciliation and expense categorization",
      icon: <BookOpen className="h-8 w-8 text-[#996516]" />,
    },
    {
      title: "Payroll Integration & Compliance Checks",
      subtitle: "Gusto, ADP, etc.",
      description: "Seamless payroll integration and ongoing compliance monitoring",
      icon: <CreditCard className="h-8 w-8 text-[#996516]" />,
    },
    {
      title: "Quarterly Strategy Sessions",
      subtitle: "Compensation, deductions, tax planning",
      description: "Regular strategic planning meetings focused on optimization opportunities",
      icon: <Calendar className="h-8 w-8 text-[#996516]" />,
    },
    {
      title: "Retirement Planning Scenario Buildout",
      subtitle: "Solo 401(k), DB plan, SEP, etc.",
      description: "Comprehensive retirement planning with multiple scenario analysis",
      icon: <PiggyBank className="h-8 w-8 text-[#996516]" />,
    },
    {
      title: "Year-End Tax Preparation & Filing",
      description: "Complete tax preparation and filing services",
      icon: <ClipboardList className="h-8 w-8 text-[#996516]" />,
    },
    {
      title: "Dedicated Strategist Access",
      subtitle: "Email + phone access",
      description: "Direct access to your dedicated Ampliara strategist for ongoing support",
      icon: <Phone className="h-8 w-8 text-[#996516]" />,
    },
  ];

  const benefits = [
    {
      title: "Strategic Partnership",
      description: "Work with a dedicated financial strategist who understands your business inside and out",
      icon: <Briefcase className="h-6 w-6 text-[#996516]" />,
    },
    {
      title: "Complete Financial Freedom",
      description: "Never touch another spreadsheet again - we handle all the financial complexity",
      icon: <Shield className="h-6 w-6 text-[#996516]" />,
    },
    {
      title: "Proactive Tax Optimization",
      description: "Ongoing optimization ensures you're always maximizing tax efficiency",
      icon: <TrendingUp className="h-6 w-6 text-[#996516]" />,
    },
    {
      title: "Scalable Growth Support",
      description: "Strategic guidance to help you scale smarter and keep more of what you earn",
      icon: <LineChart className="h-6 w-6 text-[#996516]" />,
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
              Premium Financial Partnership
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-[#174a21] mb-8 leading-tight">
              Concierge Tax Strategy & Compliance
            </h1>
            <p className="text-xl text-[#174a21]/80 mb-12 leading-relaxed">
              For service-based business owners who are already earning well, but need a strategic financial partner 
              to help them keep more, scale smarter, and never touch another spreadsheet again.
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {deliverables.map((item, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-2xl border-2 border-[#174a21]/10 hover:border-[#996516] transition-all duration-300 hover:shadow-xl group text-center"
              >
                <div className="mb-6 flex justify-center transform group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-[#174a21] mb-2">{item.title}</h3>
                  {item.subtitle && (
                    <p className="text-[#996516] font-medium text-sm">{item.subtitle}</p>
                  )}
                </div>
                <p className="text-[#174a21]/80 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-[#174a21]/5">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-[#174a21] mb-12 text-center">Why Choose Concierge Strategy?</h2>
          <div className="space-y-6">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="flex items-start gap-4 bg-white p-6 rounded-xl hover:shadow-md transition-shadow duration-300"
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

      {/* Schedule Consultation Section */}
      <section className="py-20 px-4 bg-[#174a21]">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-white mb-8">Ready for White-Glove Financial Management?</h2>
          <div className="bg-white rounded-2xl p-12">
            <MessageSquare className="h-16 w-16 text-[#996516] mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-[#174a21] mb-4">Schedule Your Strategic Consultation</h3>
            <p className="text-[#174a21]/80 text-lg mb-8 max-w-2xl mx-auto">
              Let's discuss how our Concierge Tax Strategy & Compliance service can transform your financial management. 
              Our expert team is ready to become your dedicated financial partner, handling all the complexity while 
              you focus on growing your business.
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

export default ConciergeStrategy;