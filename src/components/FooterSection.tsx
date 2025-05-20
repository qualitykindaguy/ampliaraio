import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram } from 'lucide-react';

interface FooterSectionProps {
  darkMode?: boolean;
}

const FooterSection: React.FC<FooterSectionProps> = ({ darkMode = false }) => {
  const bgColor = darkMode ? 'bg-[#174a21]' : 'bg-white';
  const textColor = darkMode ? 'text-white' : 'text-[#174a21]';
  const textColorHover = darkMode ? 'hover:text-white' : 'hover:text-[#174a21]';
  const textColorAlpha = darkMode ? 'text-white/80' : 'text-[#174a21]/80';
  const borderColor = darkMode ? 'border-white/20' : 'border-[#174a21]/20';
  const inputBgColor = darkMode ? 'bg-white/10' : 'bg-[#174a21]/5';
  const inputBorderColor = darkMode ? 'border-white/20' : 'border-[#174a21]/20';
  const inputFocusRing = darkMode ? 'focus:ring-white/30' : 'focus:ring-[#174a21]/30';
  const placeholderColor = darkMode ? 'placeholder-white/50' : 'placeholder-[#174a21]/50';

  return (
    <footer className={`${bgColor} ${textColor} py-12 px-4`}>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/services" className={`${textColorAlpha} ${textColorHover}`}>Services</Link></li>
              <li><Link to="/contact" className={`${textColorAlpha} ${textColorHover}`}>Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Connect With Us</h3>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="https://www.facebook.com/people/Ampliara/100069073342503/" className={`${textColorAlpha} ${textColorHover}`}>
                <Facebook className="h-6 w-6" />
              </a>
              <a href="https://www.instagram.com/ampliara/" className={`${textColorAlpha} ${textColorHover}`}>
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Join Our Newsletter!</h3>
            <form
              name="newsletter"
              method="POST"
              data-netlify="true"
              className="space-y-4"
            >
              <input type="hidden" name="form-name" value="newsletter" />
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                required
                className={`w-full px-4 py-2 ${inputBgColor} border ${inputBorderColor} rounded-lg focus:ring-2 ${inputFocusRing} focus:border-transparent ${textColor} ${placeholderColor}`}
              />
              <button
                type="submit"
                className="w-full bg-[#996516] text-white px-4 py-2 rounded-lg hover:bg-[#996516]/90 transition duration-300"
              >
                Subscribe!
              </button>
            </form>
          </div>
        </div>
        <div className={`mt-12 pt-8 border-t ${borderColor} text-center ${textColorAlpha}`}>
          <p>&copy; {new Date().getFullYear()} Ampliara. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;