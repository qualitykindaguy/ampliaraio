import React from 'react';
import { Link } from 'react-router-dom';
import {
  ScrollText,
  Calculator,
  BookOpen,
  Building2,
  BookType,
  HandshakeIcon,
} from 'lucide-react';
import Navbar from '../components/Navbar';
import FooterSection from '../components/FooterSection';
import sainteMainAbout from '../assets/sainte-main-about.svg';

function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      {/* Hero Section */}
      <section className="relative pt-32 md:pt-40 pb-0 px-4 overflow-hidden bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#174a21]/20 via-[#996516]/10 to-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-[#174a21]/30 via-transparent to-transparent pointer-events-none"></div>
        <div className="container mx-auto relative">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="md:w-1/2 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold text-[#174a21] mb-6">
                Expert Tax Accounting Services for Your Financial Peace of Mind
              </h1>
              <p className="text-lg text-[#174a21]/80 mb-8">
                Professional tax planning and accounting services tailored to your needs.
                Let us handle your finances while you focus on what matters most.
              </p>
              <a
                href="https://api.taxnitro.com/widget/bookings/ampliaraworkingtogether"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#174a21] text-white px-8 py-3 rounded-lg hover:bg-[#174a21]/90 transition duration-300"
              >
                Get Your Free Consultation
              </a>
            </div>
            <div className="md:w-1/2">
              <img
                src={sainteMainAbout}
                alt="Sainte Billings, CPA - Founder of Ampliara"
                className="w-full max-w-md mx-auto"
                width="500"
                height="500"
                loading="eager"
                fetchPriority="high"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="relative py-16 px-4 bg-gradient-to-b from-white via-[#174a21]/5 to-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-[#174a21] mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              {
                icon: <ScrollText className="h-8 w-8 text-[#996516]" />,
                title: 'Tax Preparation',
                description: 'Accurate, timely, and hassle-free tax filing for individuals and businesses.',
              },
              {
                icon: <Calculator className="h-8 w-8 text-[#996516]" />,
                title: 'Tax Planning',
                description: 'Strategic planning to minimize your tax liability and maximize savings.',
              },
              {
                icon: <BookOpen className="h-8 w-8 text-[#996516]" />,
                title: 'Tax Advisory',
                description: 'Expert advice to navigate complex tax regulations and opportunities.',
              },
              {
                icon: <Building2 className="h-8 w-8 text-[#996516]" />,
                title: 'Business Structuring',
                description: 'Set up your business for success with the right legal and tax structure.',
              },
              {
                icon: <BookType className="h-8 w-8 text-[#996516]" />,
                title: 'Bookkeeping',
                description: 'Keep your finances organized with professional and reliable bookkeeping services.',
              },
              {
                icon: <HandshakeIcon className="h-8 w-8 text-[#996516]" />,
                title: 'Consulting',
                description: 'Tailored financial and tax solutions to grow and scale your business.',
              },
            ].map((service, index) => (
              <div key={index} className="group relative">
                <div className="bg-white border-2 border-[#174a21]/10 p-6 rounded-lg hover:shadow-lg transition duration-300 text-center">
                  <div className="mb-4 flex justify-center">{service.icon}</div>
                  <h3 className="text-xl font-semibold mb-3 text-[#174a21]">{service.title}</h3>
                  <p className="text-[#174a21]/80">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link
              to="/services"
              className="inline-block bg-[#996516] text-white px-8 py-3 rounded-lg hover:bg-[#996516]/90 transition duration-300"
            >
              View Our Prepackaged Services
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-[#174a21] to-[#174a21]/90 rounded-3xl overflow-hidden shadow-2xl">
              <div className="grid md:grid-cols-2 gap-8 p-12">
                <div className="text-white space-y-6">
                  <h2 className="text-4xl font-bold mb-6">About</h2>
                  <div className="space-y-4">
                    <p className="text-white/90 text-lg leading-relaxed">
                      With nearly a decade of experience, Sainte has been providing expert tax and accounting
                      services to individuals and businesses.
                    </p>
                    <p className="text-white/90 text-lg leading-relaxed">
                      Ampliara aims to deliver personalized tax solutions to help clients achieve their goals 
                      while maintaining compliance with all regulatory requirements.
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 space-y-6">
                    <div className="space-y-4">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-[#996516] rounded-full flex items-center justify-center">
                          <HandshakeIcon className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-white font-semibold text-lg">Expert Guidance</h3>
                          <p className="text-white/80">Professional tax and financial solutions</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-[#996516] rounded-full flex items-center justify-center">
                          <Building2 className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-white font-semibold text-lg">Business Focus</h3>
                          <p className="text-white/80">Specialized in business growth</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-[#996516] rounded-full flex items-center justify-center">
                          <Calculator className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-white font-semibold text-lg">Tax Excellence</h3>
                          <p className="text-white/80">Maximizing your tax efficiency</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Book Consultation Section */}
      <section className="relative py-16 px-4 overflow-hidden bg-[#174a21]">
        <div className="container mx-auto text-center relative">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Take Control of Your Taxes?</h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Our expert consultations are designed to help you optimize your taxes, structure your business, and set clear financial goals. Let's work together to build a brighter financial future.
          </p>
          <a
            href="https://api.taxnitro.com/widget/bookings/ampliaraworkingtogether"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#996516] text-white px-8 py-3 rounded-lg hover:bg-[#996516]/90 transition duration-300"
          >
            Book Your Consultation Now!
          </a>
        </div>
      </section>

      <FooterSection />
    </div>
  );
}

export default Home;