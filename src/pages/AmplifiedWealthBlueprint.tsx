import React from 'react';
import {
  Target,
  Clock,
  DollarSign,
  CheckCircle2,
  TrendingUp,
  Calculator,
  FileText,
  MessageSquare,
  Users,
  Award,
  Lightbulb,
  Calendar,
  Building2,
  PiggyBank,
  Shield,
  Mail,
} from 'lucide-react';
import Navbar from '../components/Navbar';
import FooterSection from '../components/FooterSection';

function AmplifiedWealthBlueprint() {
  const included = [
    {
      title: "Tax & Financial Deep Dive",
      subtitle: "90-minute strategy call",
      description: "Comprehensive review of your current financial landscape",
      features: [
        "Review of your current income, entity structure, compensation, and planning gaps",
        "Clarify business vs. personal income streams",
        "Identify where you're overpaying in taxes and under-leveraging structure"
      ],
      icon: <Calculator className="h-8 w-8 text-[#996516]" />,
    },
    {
      title: "Custom Tax Optimization Blueprint",
      subtitle: "Personalized strategy document",
      description: "Tailored recommendations for your specific situation",
      features: [
        "Personalized S-Corp pay structure (salary vs. distributions)",
        "Retirement strategy fit analysis (solo 401(k), DB plan, etc.)",
        "Year-round savings opportunities (fringe benefits, deductions, etc.)",
        "Entity/tax structure clarity if you're still W-2 or dual income"
      ],
      icon: <FileText className="h-8 w-8 text-[#996516]" />,
    },
    {
      title: "Implementation Roadmap",
      subtitle: "Clear action plan",
      description: "Prioritized steps to implement your strategy",
      features: [
        "Prioritized action items with timelines",
        "Tax software/vendor recommendations (payroll, bookkeeping, etc.)",
        "Clarity on 'do this now vs. phase later' steps"
      ],
      icon: <Target className="h-8 w-8 text-[#996516]" />,
    },
    {
      title: "30-Day Email Access for Follow-Up Questions",
      subtitle: "Ongoing support",
      description: "Continued guidance during implementation",
      features: [
        "Answers to execution questions",
        "Clarification on plan components",
        "Optional upgrade to full-service engagement if ready"
      ],
      icon: <Mail className="h-8 w-8 text-[#996516]" />,
    },
  ];

  const outcomes = [
    {
      title: "Immediate Tax Clarity",
      description: "Clarity on how to reduce your tax burden within 30 days",
      icon: <Lightbulb className="h-6 w-6 text-[#996516]" />,
    },
    {
      title: "Concrete Action Steps",
      description: "Concrete next steps, not vague ideas",
      icon: <CheckCircle2 className="h-6 w-6 text-[#996516]" />,
    },
    {
      title: "Strategic Insight",
      description: "Strategic insight usually reserved for year-round clients",
      icon: <Award className="h-6 w-6 text-[#996516]" />,
    },
    {
      title: "Financial Alignment",
      description: "Confidence that your finances are aligned with your goals",
      icon: <Shield className="h-6 w-6 text-[#996516]" />,
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
              High-Impact Strategy Engagement
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-[#174a21] mb-12 leading-tight">
              The Amplified Wealth Blueprint (Tax Plan)
            </h1>
            <p className="text-xl text-[#174a21]/80 leading-relaxed">
              A focused, high-impact advisory engagement that gives you a personalized tax savings roadmap, 
              including compensation strategy, entity optimization, and retirement planning.
            </p>
          </div>
        </div>
      </section>

      {/* Ideal For Section */}
      <section className="py-20 px-4 bg-[#174a21]/5">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-[#174a21] mb-16 text-center">Ideal for if you want</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {outcomes.map((outcome, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    {outcome.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#174a21] mb-3">{outcome.title}</h3>
                    <p className="text-[#174a21]/80">{outcome.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-[#174a21] mb-16 text-center">What's Included</h2>
          <div className="space-y-12">
            {included.map((item, index) => (
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
                    <p className="text-[#174a21]/80 mb-6">{item.description}</p>
                    <ul className="space-y-3">
                      {item.features.map((feature, idx) => (
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

      {/* Schedule Consultation Section */}
      <section className="py-20 px-4 bg-[#174a21]">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-white mb-8">Ready to Amplify Your Wealth Strategy?</h2>
          <div className="bg-white rounded-2xl p-12">
            <MessageSquare className="h-16 w-16 text-[#996516] mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-[#174a21] mb-4">Schedule Your Strategic Consultation</h3>
            <p className="text-[#174a21]/80 text-lg mb-8 max-w-2xl mx-auto">
              Let's discuss how our Amplified Wealth Blueprint can provide you with a clear roadmap to reduce taxes, 
              optimize your financial structure, and accelerate your wealth building. Our expert team is ready to 
              create your personalized strategy.
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

export default AmplifiedWealthBlueprint;