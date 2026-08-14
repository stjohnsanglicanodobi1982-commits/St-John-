import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Heart } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection, setActiveSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Services', href: '#services', id: 'services' },
    { name: 'Give', href: '#give', id: 'give' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (id: string, href: string) => {
    setActiveSection(id);
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 transition-all duration-300">
      {/* Top Banner */}
      <div className="bg-anglican-blue-dark text-slate-200 text-xs py-1.5 px-4 hidden md:block border-b border-anglican-gold/20">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span className="flex items-center gap-1.5 text-anglican-gold font-medium">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Join Us This Sunday @ 9:00 AM - 12:00 PM
            </span>
            <span className="text-slate-400">|</span>
            <span className="text-slate-300">Oke Onire Street, Odobi, Okemesi Ekiti</span>
          </div>
          <div className="flex items-center space-x-4">
            <a href="tel:+2347062676430" className="hover:text-anglican-gold transition flex items-center gap-1">
              <Phone className="w-3 h-3 text-anglican-gold" /> +234 706 267 6430
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`transition-all duration-300 ${
        isScrolled 
          ? 'bg-anglican-blue/95 backdrop-blur-md shadow-lg border-b border-anglican-gold/30 py-3' 
          : 'bg-gradient-to-r from-anglican-blue-dark via-anglican-blue to-anglican-blue-dark py-4 border-b border-anglican-gold/20'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo & Church Name */}
          <a 
            href="#home" 
            onClick={(e) => { e.preventDefault(); handleNavClick('home', '#home'); }}
            className="flex items-center space-x-3 group text-left"
          >
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-gradient-to-br from-anglican-gold to-amber-600 flex items-center justify-center text-anglican-blue-dark font-bold text-xl shadow-md group-hover:scale-105 transition-transform border border-amber-200">
              ✝️
            </div>
            <div>
              <span className="block font-serif text-base sm:text-lg font-bold text-white tracking-wide leading-tight group-hover:text-anglican-gold transition-colors">
                St John's Anglican Church
              </span>
              <span className="block text-xs text-anglican-gold font-medium tracking-wider uppercase">
                Odobi Okemesi Ekiti
              </span>
            </div>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.id, link.href);
                  }}
                  className={`px-3.5 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'text-anglican-gold bg-white/10 shadow-inner font-semibold border-b-2 border-anglican-gold'
                      : 'text-slate-100 hover:text-anglican-gold hover:bg-white/5'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
            
            <a
              href="#give"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('give', '#give');
              }}
              className="ml-3 inline-flex items-center gap-1.5 px-4 py-2 bg-gradient-to-r from-anglican-gold via-amber-500 to-anglican-gold-dark text-anglican-blue-dark font-semibold text-sm rounded-full shadow-md hover:shadow-lg hover:brightness-110 active:scale-95 transition-all"
            >
              <Heart className="w-4 h-4 text-anglican-blue-dark fill-anglican-blue-dark" /> Give
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <a
              href="#give"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('give', '#give');
              }}
              className="px-3 py-1.5 bg-anglican-gold text-anglican-blue-dark font-semibold text-xs rounded-full flex items-center gap-1"
            >
              <Heart className="w-3 h-3 fill-current" /> Give
            </a>
            
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="p-2 rounded-md text-slate-200 hover:text-white hover:bg-white/10 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {isOpen ? <X className="w-6 h-6 text-anglican-gold" /> : <Menu className="w-6 h-6 text-white" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav Drawer */}
        {isOpen && (
          <div className="md:hidden bg-anglican-blue-dark/95 border-b border-anglican-gold/30 px-4 pt-3 pb-6 space-y-2 shadow-2xl backdrop-blur-lg animate-fadeIn">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.id, link.href);
                  }}
                  className={`block px-4 py-2.5 rounded-lg text-base font-medium transition-colors ${
                    isActive
                      ? 'bg-anglican-gold/20 text-anglican-gold border-l-4 border-anglican-gold pl-3 font-semibold'
                      : 'text-slate-200 hover:bg-white/10 hover:text-anglican-gold'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
            
            <div className="pt-2 border-t border-white/10 text-xs text-slate-300 space-y-1">
              <p className="flex items-center gap-1 text-anglican-gold">
                <span>📍</span> Oke Onire Street, Odobi, Okemesi Ekiti
              </p>
              <p className="flex items-center gap-1">
                <Phone className="w-3 h-3 text-anglican-gold" /> +234 706 267 6430
              </p>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
