import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo.svg';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path ? 'text-[#996516]' : 'text-[#174a21] hover:text-[#996516]';
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="container mx-auto px-4 py-2">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <img 
              src={logo}
              alt="Ampliara PLLC"
              className="h-12 w-auto"
              width="48"
              height="48"
              loading="eager"
              fetchPriority="high"
            />
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className={`${isActive('/')} text-center`}>Home</Link>
            <Link to="/about" className={`${isActive('/about')} text-center`}>About Us</Link>
            <Link to="/services" className={`${isActive('/services')} text-center`}>Services</Link>
            <a 
              href="https://ampliara.com/tax-planning" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-[#174a21] hover:text-[#996516] text-center"
            >
              Blog
            </a>
            <Link to="/contact" className={`${isActive('/contact')} text-center`}>Contact</Link>
            <a
              href="https://api.taxnitro.com/widget/bookings/ampliaraworkingtogether"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#996516] text-white px-4 py-2 rounded-lg hover:bg-[#996516]/90 transition duration-300"
            >
              Schedule a Call
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMenu}
            className="md:hidden text-[#174a21] hover:text-[#996516] transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 space-y-4">
            <Link 
              to="/" 
              className={`block ${isActive('/')} py-2 text-lg text-center`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`block ${isActive('/about')} py-2 text-lg text-center`}
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <Link 
              to="/services" 
              className={`block ${isActive('/services')} py-2 text-lg text-center`}
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <a 
              href="https://ampliara.com/tax-planning" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="block text-[#174a21] hover:text-[#996516] py-2 text-lg text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </a>
            <Link 
              to="/contact" 
              className={`block ${isActive('/contact')} py-2 text-lg text-center`}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <a
              href="https://api.taxnitro.com/widget/bookings/ampliaraworkingtogether"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-[#996516] text-white px-4 py-2 rounded-lg hover:bg-[#996516]/90 transition duration-300 text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Schedule a Call
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}

export default Navbar;