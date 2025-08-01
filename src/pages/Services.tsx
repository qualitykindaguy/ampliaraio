import React from 'react';
import { Link } from 'react-router-dom';
import {
  ClipboardCheck,
  TrendingUp,
  BookOpen,
  Building2,
  Award,
  LineChart,
  Clock,
  Target,
  Briefcase,
} from 'lucide-react';
import Navbar from '../components/Navbar';
import FooterSection from '../components/FooterSection';

function Services() {
  const packages = [
    {
      icon: <Target className="h-12 w-12 text-[#996516]" />,
      title: "Amplified Wealth Blueprint (Tax Plan)",
      description: "A high-impact strategy engagement for high earners ready to reduce taxes and grow wealth with clarity.",
      link: "/services/amplified-wealth-blueprint"
    },
    {
      icon: <Briefcase className="h-12 w-12 text-[#996516]" />,
      title: "Strategic Wealth Bridge",
      description: "Year-Round Support for High-Earning W-2 Professionals Exploring Wealth Expansion Through Generating Additional Income.",
      link: "/services/strategic-wealth-bridge"
    },
    {
      icon: <Award className="h-12 w-12 text-[#996516]" />,
      title: "Concierge Tax Strategy & Compliance",
      description: "For service-based business owners who are already earning well, but need a strategic financial partner to help them keep more, scale smarter, and never touch another spreadsheet again.",
      link: "/services/concierge-strategy"
    },
    {
      icon: <ClipboardCheck className="h-12 w-12 text-[#996516]" />,
      title: "Tax Preparation",
      description: "Accurate and efficient tax filing services for individuals and businesses. Delivered virtually to maximize savings and ensure compliance, covering one tax season.",
      link: "/services/tax-preparation"
    },
    {
      icon: <BookOpen className="h-12 w-12 text-[#996516]" />,
      title: "Annual Bookkeeping Services",
      description: "Professional monthly bookkeeping services. Includes detailed financial tracking, regular reporting, and year-end documentation.",
      link: "/services/bookkeeping"
    },
    {
      icon: <Clock className="h-12 w-12 text-[#996516]" />,
      title: "Hourly Consultation",
      description: "Expert financial guidance on-demand. Perfect for specific questions, strategic planning, or addressing immediate financial concerns. Book by the hour for focused, professional advice.",
      link: "/services/hourly-consultation"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Services Content */}
      <main className="pt-24 pb-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-[#174a21] mb-4">Our Packages</h1>
            <p className="text-lg text-[#174a21]/80 max-w-3xl mx-auto">
              Explore some of our tailored packages designed to meet your financial needs and business goals. Select a service to learn more.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div key={index} className="bg-white border-2 border-[#174a21]/10 rounded-lg p-6 flex flex-col h-full hover:shadow-xl transition-shadow duration-300 text-center">
                <div className="mb-4 flex justify-center">{pkg.icon}</div>
                <h2 className="text-xl font-semibold text-[#174a21] mb-2">{pkg.title}</h2>
                <p className="text-[#174a21]/80 mb-3 flex-grow">{pkg.description}</p>
                <Link
                  to={pkg.link}
                  className="inline-block bg-[#996516] text-white px-6 py-2 rounded-lg hover:bg-[#996516]/90 transition duration-300 text-center mt-auto"
                >
                  Learn More
                </Link>
              </div>
            ))}
          </div>
        </div>
      </main>

      <FooterSection darkMode={true} />
    </div>
  );
}

export default Services;