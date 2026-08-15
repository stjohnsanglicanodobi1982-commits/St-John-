import React from 'react';
import { MapPin, Mail, Phone, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-anglican-blue-dark text-slate-300 border-t-2 border-anglican-gold/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-10 border-b border-white/10">
          
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-anglican-gold to-amber-600 flex items-center justify-center text-anglican-blue-dark font-bold text-xl shadow">
                ✝️
              </div>
              <div>
                <span className="block font-serif text-lg font-bold text-white leading-tight">
                  St John's Anglican Church
                </span>
                <span className="block text-xs text-anglican-gold font-medium uppercase tracking-wider">
                  Odobi Okemesi Ekiti
                </span>
              </div>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Founded in 1982. Member of the Church of Nigeria Anglican Communion, Okemesi Archdeaconry, Ekiti West Diocese.
            </p>
          </div>

          {/* Service Times */}
          <div className="space-y-3">
            <h4 className="font-serif text-sm font-bold text-anglican-gold uppercase tracking-wider">
              Service Schedule
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li className="flex justify-between border-b border-white/5 pb-1">
                <span>Sunday Worship:</span>
                <span className="text-white font-semibold">9:00 AM – 12:00 PM</span>
              </li>
              <li className="flex justify-between border-b border-white/5 pb-1">
                <span>Holy Communion:</span>
                <span className="text-white font-semibold">1st Sunday 9:00 AM</span>
              </li>
              <li className="flex justify-between border-b border-white/5 pb-1">
                <span>Bible Study:</span>
                <span className="text-white font-semibold">Midweek 5:00 PM</span>
              </li>
              <li className="flex justify-between pb-1">
                <span>Prayer Meeting:</span>
                <span className="text-white font-semibold">Weekly 5:00 PM</span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="font-serif text-sm font-bold text-anglican-gold uppercase tracking-wider">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#home" className="hover:text-anglican-gold transition">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-anglican-gold transition">About Us</a>
              </li>
              <li>
                <a href="#services" className="hover:text-anglican-gold transition">Worship Services</a>
              </li>
              <li>
                <a href="#give" className="hover:text-anglican-gold transition flex items-center gap-1">
                  <Heart className="w-3 h-3 text-anglican-gold fill-current" /> Give / Tithes
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-anglican-gold transition">Contact & Prayer Requests</a>
              </li>
            </ul>
          </div>

          {/* Location & Contact */}
          <div className="space-y-3">
            <h4 className="font-serif text-sm font-bold text-anglican-gold uppercase tracking-wider">
              Location & Contact
            </h4>
            <div className="space-y-2.5 text-xs text-slate-300">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-anglican-gold shrink-0 mt-0.5" />
                <span>Oke Onire Street, Odobi, Okemesi Ekiti</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-anglican-gold shrink-0" />
                <a href="mailto:stjohnsanglicanodobi1982@gmail.com" className="hover:text-anglican-gold transition break-all">
                  stjohnsanglicanodobi1982@gmail.com
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-anglican-gold shrink-0" />
                <span>+234 706 267 6430, +234 905 918 8643</span>
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© 2025 St John's Anglican Church. All rights reserved.</p>
          <p className="text-slate-500 font-serif text-[11px]">
            Soli Deo Gloria — To God Alone Be The Glory
          </p>
        </div>

      </div>
    </footer>
  );
};
