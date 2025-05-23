import React from 'react';
import { MessageSquare, Calendar, CheckCircle2 } from 'lucide-react';
import Navbar from '../components/Navbar';
import FooterSection from '../components/FooterSection';

function ShopAmplified() {
  const features = [
    {
      title: "Goal Setting & Tracking",
      description: "Set clear financial goals and track your progress with dedicated planning sections",
      icon: <CheckCircle2 className="h-6 w-6 text-[#996516]" />,
    },
    {
      title: "Budget Management",
      description: "Monthly budget worksheets and expense tracking templates",
      icon: <CheckCircle2 className="h-6 w-6 text-[#996516]" />,
    },
    {
      title: "Financial Planning",
      description: "Comprehensive financial planning tools and strategies",
      icon: <CheckCircle2 className="h-6 w-6 text-[#996516]" />,
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <section className="pt-32 pb-20 px-4 bg-gradient-to-r from-[#174a21]/10 to-[#996516]/10">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-[#174a21] mb-6">
                  Live Amplified Financial Planner
                </h1>
                <p className="text-xl text-[#174a21]/80 mb-8">
                  Take control of your financial future with our comprehensive financial planning system.
                  Designed to help you set, track, and achieve your financial goals.
                </p>
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 mb-8">
                  <div className="text-3xl font-bold text-[#996516] mb-2">$49.99</div>
                  <p className="text-[#174a21]/80 mb-6">
                    Pre-order now and be among the first to receive our exclusive planner
                  </p>
                  <button 
                    className="w-full bg-[#996516] text-white px-6 py-3 rounded-lg hover:bg-[#996516]/90 transition duration-300 font-semibold"
                  >
                    Pre-Order Now
                  </button>
                </div>
              </div>
              <div className="relative">
                <div className="bg-[#174a21] rounded-2xl p-8 relative overflow-hidden">
                  <Calendar className="w-full h-auto text-white/10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                  <div className="relative z-10">
                    <h2 className="text-2xl font-bold text-white mb-6">What's Inside</h2>
                    <ul className="space-y-4">
                      <li className="flex items-center gap-3 text-white">
                        <CheckCircle2 className="h-5 w-5 text-[#996516]" />
                        <span>12-Month Financial Planning System</span>
                      </li>
                      <li className="flex items-center gap-3 text-white">
                        <CheckCircle2 className="h-5 w-5 text-[#996516]" />
                        <span>Goal Setting Worksheets</span>
                      </li>
                      <li className="flex items-center gap-3 text-white">
                        <CheckCircle2 className="h-5 w-5 text-[#996516]" />
                        <span>Monthly Budget Templates</span>
                      </li>
                      <li className="flex items-center gap-3 text-white">
                        <CheckCircle2 className="h-5 w-5 text-[#996516]" />
                        <span>Expense Tracking Tools</span>
                      </li>
                      <li className="flex items-center gap-3 text-white">
                        <CheckCircle2 className="h-5 w-5 text-[#996516]" />
                        <span>Financial Goal Progress Trackers</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-[#174a21] mb-12 text-center">
            Features & Benefits
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-2xl border-2 border-[#174a21]/10 hover:border-[#996516] transition-all duration-300"
              >
                <div className="mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-[#174a21] mb-4">
                  {feature.title}
                </h3>
                <p className="text-[#174a21]/80">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-[#174a21]">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-white mb-8">Ready to Transform Your Finances?</h2>
          <div className="bg-white rounded-2xl p-12">
            <Calendar className="h-16 w-16 text-[#996516] mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-[#174a21] mb-4">Pre-Order Your Planner Today</h3>
            <p className="text-[#174a21]/80 text-lg mb-8">
              Take the first step towards financial freedom with our comprehensive planning system.
            </p>
            <button className="inline-block bg-[#996516] text-white px-8 py-4 rounded-lg hover:bg-[#996516]/90 transition duration-300 text-lg font-semibold">
              Pre-Order Now - $49.99
            </button>
          </div>
        </div>
      </section>

      <FooterSection />
    </div>
  );
}

export default ShopAmplified;