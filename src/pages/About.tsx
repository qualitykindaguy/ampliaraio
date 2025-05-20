import React from 'react';
import { Link } from 'react-router-dom';
import {
  Shield,
  Users,
  Target,
  Award,
  Heart,
  TrendingUp,
  Briefcase,
  LineChart,
  BookOpen,
  CheckCircle2,
} from 'lucide-react';
import Navbar from '../components/Navbar';
import FooterSection from '../components/FooterSection';
import sainteMainAbout from '../assets/sainte-main-about.svg';

function About() {
  const coreValues = [
    {
      title: "Integrity",
      description: "We maintain the highest standards of professional ethics and transparency in all our dealings.",
    },
    {
      title: "Personalized Service",
      description: "Every client receives tailored solutions that address their unique financial needs and goals.",
    },
    {
      title: "Community Empowerment",
      description: "We are dedicated to empowering minority communities through financial education and support.",
    },
    {
      title: "Excellence",
      description: "We strive for excellence in every aspect of our service delivery.",
    },
    {
      title: "Client-First Approach",
      description: "Our clients' success is our primary focus and drives everything we do.",
    },
  ];

  const benefits = [
    {
      title: "Comprehensive Support",
      description: "Full-service financial management and advisory services tailored to your needs.",
      icon: <Briefcase className="h-8 w-8 text-[#996516]" />,
    },
    {
      title: "Financial Clarity",
      description: "Clear insights and guidance to help you make informed financial decisions.",
      icon: <LineChart className="h-8 w-8 text-[#996516]" />,
    },
    {
      title: "Optimized Tax Savings",
      description: "Strategic tax planning to maximize deductions and minimize liabilities.",
      icon: <TrendingUp className="h-8 w-8 text-[#996516]" />,
    },
    {
      title: "Growth Strategies",
      description: "Proactive business strategies to drive sustainable growth and success.",
      icon: <BookOpen className="h-8 w-8 text-[#996516]" />,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-r from-[#174a21]/10 to-[#996516]/10">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-[#174a21] mb-8">About Ampliara</h1>
            <p className="text-xl text-[#174a21]/80 leading-relaxed">
              Dedicated to empowering entrepreneurs and high-earning individuals with strategic financial guidance 
              and tax solutions. We focus on helping you protect your earning potential, build wealth, and achieve 
              financial success through expert financial planning.
            </p>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#174a21] mb-4">About the Founder</h2>
              <h3 className="text-2xl font-semibold text-[#996516] mb-6">Sainte Billings, CPA</h3>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <img
                src={sainteMainAbout}
                alt="Sainte Billings, CPA"
                className="w-full max-w-md mx-auto mb-8"
                width="500"
                height="500"
                loading="lazy"
                fetchPriority="low"
                decoding="async"
              />
              <p className="text-lg text-[#174a21]/80 leading-relaxed mb-6">
                Sainte is an award-winning Certified Public Accountant (CPA) with nearly a decade of experience 
                in taxation at one of the largest global professional services networks. Sainte's expertise includes 
                managing tax compliance for multinational companies with revenues of eight figures or more across 
                diverse industries.
              </p>
              <p className="text-lg text-[#174a21]/80 leading-relaxed">
                Driven by a mission to support evolving professionals and entrepreneurs, Sainte is dedicated to 
                empowering minority communities, especially entrepreneurs, to achieve financial success and 
                generational wealth through Ampliara.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-20 px-4 bg-[#174a21]/5">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-[#174a21] mb-8 text-center">Who We Are</h2>
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <p className="text-lg text-[#174a21]/80 leading-relaxed mb-6">
                Ampliara is a professional limited liability company committed to providing expert tax planning, 
                preparation, bookkeeping, and consulting services. Our primary mission is to 
                empower entrepreneurs and high-earning individuals by delivering tailored financial solutions that 
                optimize tax savings and support long-term wealth generation.
              </p>
              <p className="text-lg text-[#174a21]/80 leading-relaxed">
                We specialize in guiding clients through complex tax laws, maximizing deductions, and structuring 
                their businesses for growth and compliance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-[#174a21] mb-12 text-center">Our Core Values</h2>
          <div className="space-y-6">
            {coreValues.map((value, index) => (
              <div 
                key={index}
                className="flex items-start gap-4 bg-[#174a21]/5 p-6 rounded-xl hover:shadow-md transition-shadow duration-300"
              >
                <CheckCircle2 className="h-6 w-6 text-[#996516] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-[#174a21] mb-2">{value.title}</h3>
                  <p className="text-[#174a21]/80">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Benefits Section */}
      <section className="py-20 px-4 bg-[#174a21]/5">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-[#174a21] mb-16 text-center">Client Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 text-center"
              >
                <div className="mb-6 flex justify-center">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-[#174a21] mb-4">{benefit.title}</h3>
                <p className="text-[#174a21]/80 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & CTA Section */}
      <section className="py-20 px-4 bg-[#174a21]">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Our Mission</h2>
          <p className="text-xl text-white/90 mb-12 leading-relaxed">
            Our mission is to empower our clients to make informed financial decisions, achieve stability, 
            and create lasting wealth for future generations.
          </p>
          <div className="bg-white rounded-2xl p-12 text-center">
            <h3 className="text-2xl font-bold text-[#174a21] mb-6">
              Ready to Amplify Your Financial Results?
            </h3>
            <p className="text-lg text-[#174a21]/80 mb-8">
              Connect with us to see how Ampliara can support your journey toward financial growth and stability.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-[#996516] text-white px-8 py-4 rounded-lg hover:bg-[#996516]/90 transition duration-300 text-lg font-semibold"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <FooterSection />
    </div>
  );
}

export default About;