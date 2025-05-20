import React from 'react';
import { Mail, Phone, Clock, MessageSquare } from 'lucide-react';
import Navbar from '../components/Navbar';
import FooterSection from '../components/FooterSection';

function Contact() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-r from-[#174a21]/10 to-[#996516]/10">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-[#174a21] mb-8">Get in Touch</h1>
            <p className="text-xl text-[#174a21]/80 leading-relaxed">
              Ready to take control of your financial future? We're here to help you achieve your goals.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h2 className="text-3xl font-bold text-[#174a21] mb-8">Send Us a Message</h2>
              <form
                name="contact"
                method="POST"
                data-netlify="true"
                className="space-y-6"
              >
                <input type="hidden" name="form-name" value="contact" />
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[#174a21] mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-2 bg-[#174a21]/5 border border-[#174a21]/20 rounded-lg focus:ring-2 focus:ring-[#174a21]/30 focus:border-transparent"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#174a21] mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-2 bg-[#174a21]/5 border border-[#174a21]/20 rounded-lg focus:ring-2 focus:ring-[#174a21]/30 focus:border-transparent"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-[#174a21] mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-4 py-2 bg-[#174a21]/5 border border-[#174a21]/20 rounded-lg focus:ring-2 focus:ring-[#174a21]/30 focus:border-transparent"
                    placeholder="How can we help?"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[#174a21] mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    className="w-full px-4 py-2 bg-[#174a21]/5 border border-[#174a21]/20 rounded-lg focus:ring-2 focus:ring-[#174a21]/30 focus:border-transparent"
                    placeholder="Tell us about your needs..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#996516] text-white px-6 py-3 rounded-lg hover:bg-[#996516]/90 transition duration-300 font-semibold"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h2 className="text-3xl font-bold text-[#174a21] mb-8">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Mail className="h-6 w-6 text-[#996516] mt-1" />
                    <div>
                      <h3 className="font-semibold text-[#174a21]">Email</h3>
                      <a href="mailto:hello@ampliara.io" className="text-[#174a21]/80 hover:text-[#996516]">
                        hello@ampliara.io
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Phone className="h-6 w-6 text-[#996516] mt-1" />
                    <div>
                      <h3 className="font-semibold text-[#174a21]">Phone</h3>
                      <a href="tel:+16267063135" className="text-[#174a21]/80 hover:text-[#996516]">
                        (626) 706-3135
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Clock className="h-6 w-6 text-[#996516] mt-1" />
                    <div>
                      <h3 className="font-semibold text-[#174a21]">Business Hours</h3>
                      <p className="text-[#174a21]/80">Monday - Friday: 9:00 AM - 5:00 PM EST</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Book Consultation CTA */}
              <div className="bg-[#174a21] p-8 rounded-2xl shadow-lg text-white">
                <MessageSquare className="h-12 w-12 mb-6" />
                <h2 className="text-2xl font-bold mb-4">Book a Consultation</h2>
                <p className="text-white/90 mb-6">
                  Schedule a free consultation to discuss your financial goals and how we can help you achieve them.
                </p>
                <a
                  href="https://api.taxnitro.com/widget/bookings/ampliaraworkingtogether"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white text-[#174a21] px-6 py-3 rounded-lg hover:bg-white/90 transition duration-300 font-semibold"
                >
                  Schedule Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FooterSection darkMode={true} />
    </div>
  );
}

export default Contact;