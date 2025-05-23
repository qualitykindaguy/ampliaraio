import React from 'react';
import { Calendar, BookOpen, Target, Clock, CheckCircle2 } from 'lucide-react';
import Navbar from '../components/Navbar';
import FooterSection from '../components/FooterSection';

function LiveAmplified() {
  const features = [
    {
      icon: <Calendar className="h-8 w-8 text-[#996516]" />,
      title: "Daily Planning",
      description: "Stay organized with our intuitive daily planning system designed for busy professionals."
    },
    {
      icon: <Target className="h-8 w-8 text-[#996516]" />,
      title: "Goal Setting",
      description: "Set and track your personal and professional goals with our proven framework."
    },
    {
      icon: <Clock className="h-8 w-8 text-[#996516]" />,
      title: "Time Management",
      description: "Maximize your productivity with effective time management strategies."
    },
    {
      icon: <BookOpen className="h-8 w-8 text-[#996516]" />,
      title: "Financial Planning",
      description: "Integrate your financial goals with your daily activities for better results."
    }
  ];

  const benefits = [
    "Achieve better work-life balance",
    "Stay focused on your financial goals",
    "Track your progress effectively",
    "Maintain daily productivity",
    "Create lasting habits for success"
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-r from-[#174a21]/10 to-[#996516]/10">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-[#174a21] mb-8">
              Live Amplified Resources
            </h1>
            <p className="text-xl text-[#174a21]/80 mb-12">
              Coming soon: Your comprehensive guide to achieving financial success through intentional planning and strategic action.
            </p>
          </div>
        </div>
      </section>

      {/* Preview Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.pexels.com/photos/6476776/pexels-photo-6476776.jpeg"
                alt="Financial Planner Preview"
                className="rounded-2xl shadow-xl"
                width="600"
                height="400"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-[#174a21] mb-6">Transform Your Financial Journey</h2>
              <p className="text-lg text-[#174a21]/80 mb-8">
                Our upcoming Live Amplified Planner is designed to help you take control of your finances
                while maintaining a balanced and productive lifestyle. More than just a planner, it's your
                companion on the journey to financial success.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="h-6 w-6 text-[#996516]" />
                    <span className="text-[#174a21]/80">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-[#174a21]/5">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-[#174a21] mb-12 text-center">What to Expect</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300">
                <div className="mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-[#174a21] mb-4">{feature.title}</h3>
                <p className="text-[#174a21]/80">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="py-20 px-4 bg-[#174a21]">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="bg-white rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-[#174a21] mb-6">Coming Soon!</h2>
            <p className="text-lg text-[#174a21]/80 mb-8">
              Be the first to know when the Live Amplified Planner launches. Join our waitlist for exclusive early access and special bonuses.
            </p>
            <form name="newsletter" method="POST" data-netlify="true" className="max-w-md mx-auto">
              <input type="hidden" name="form-name" value="newsletter" />
              <div className="flex gap-4">
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg border border-[#174a21]/20 focus:ring-2 focus:ring-[#996516] focus:border-transparent"
                  required
                />
                <button
                  type="submit"
                  className="bg-[#996516] text-white px-6 py-3 rounded-lg hover:bg-[#996516]/90 transition duration-300"
                >
                  Join Waitlist
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <FooterSection />
    </div>
  );
}

export default LiveAmplified;