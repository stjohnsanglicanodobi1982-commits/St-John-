import React from 'react';
import { Calendar, ArrowRight, BookOpen, Clock, MapPin } from 'lucide-react';

interface HeroProps {
  onJoinClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onJoinClick }) => {
  return (
    <section id="home" className="relative pt-28 sm:pt-36 pb-20 md:pb-28 bg-gradient-to-b from-anglican-blue-dark via-anglican-blue to-slate-900 text-white overflow-hidden">
      
      {/* Subtle Background Pattern & Glows */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.15),transparent_50%)] pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(27,54,93,0.3),transparent_60%)] pointer-events-none"></div>
      
      {/* Decorative Cross Watermark */}
      <div className="absolute right-4 bottom-10 md:right-16 opacity-5 select-none pointer-events-none">
        <svg width="320" height="320" viewBox="0 0 100 100" fill="currentColor">
          <rect x="42" y="10" width="16" height="80" rx="3" />
          <rect x="20" y="32" width="60" height="16" rx="3" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          
          {/* Reverent Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-anglican-gold/40 text-anglican-gold text-xs sm:text-sm font-semibold tracking-wider uppercase backdrop-blur-sm shadow-sm animate-fadeIn">
            <span className="text-base">✝️</span> Church of Nigeria Anglican Communion
          </div>

          {/* Main Title */}
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight sm:leading-none">
            Welcome to <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-anglican-gold to-amber-400">
              St John's Anglican Church
            </span>
            <span className="block text-xl sm:text-3xl font-light text-slate-200 mt-2">
              Odobi, Okemesi Ekiti
            </span>
          </h1>

          {/* Subtitle description */}
          <p className="text-base sm:text-lg text-slate-300 font-normal max-w-2xl mx-auto leading-relaxed">
            A sanctuary of prayer, spiritual growth, and warm fellowship. Come as you are and experience the beauty of reverent Anglican worship.
          </p>

          {/* Call To Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <button
              onClick={onJoinClick}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-gradient-to-r from-anglican-gold via-amber-500 to-anglican-gold-dark text-anglican-blue-dark font-bold text-base shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 border border-amber-200"
            >
              <Calendar className="w-5 h-5 text-anglican-blue-dark" />
              <span>Join Us This Sunday 9am</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </button>

            <a
              href="#about"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white font-medium text-base border border-white/20 backdrop-blur-sm transition-all"
            >
              <BookOpen className="w-5 h-5 text-anglican-gold" />
              <span>Learn About Us</span>
            </a>
          </div>

          {/* Featured Bible Verse */}
          <div className="mt-10 p-6 sm:p-8 rounded-2xl bg-white/5 border border-anglican-gold/30 backdrop-blur-md text-slate-200 relative shadow-2xl">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 px-4 py-0.5 bg-anglican-gold text-anglican-blue-dark text-xs font-bold uppercase rounded-full tracking-wider shadow">
              Holy Scripture
            </div>
            <blockquote className="font-serif italic text-base sm:text-xl text-amber-100/90 leading-relaxed pt-1">
              "I was glad when they said unto me, Let us go into the house of the LORD."
            </blockquote>
            <cite className="block mt-3 text-xs sm:text-sm font-sans uppercase font-bold text-anglican-gold tracking-widest not-italic">
              — Psalm 122:1
            </cite>
          </div>

          {/* Quick Info Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 text-left">
            <div className="flex items-center gap-3.5 p-4 rounded-xl bg-slate-800/60 border border-slate-700/60">
              <div className="p-2.5 rounded-lg bg-anglican-gold/20 text-anglican-gold">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-xs font-bold text-anglican-gold uppercase tracking-wider">Sunday Worship</h2>
                <p className="text-sm font-semibold text-white">9:00 AM – 12:00 Noon</p>
              </div>
            </div>

            <div className="flex items-center gap-3.5 p-4 rounded-xl bg-slate-800/60 border border-slate-700/60">
              <div className="p-2.5 rounded-lg bg-anglican-gold/20 text-anglican-gold">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-xs font-bold text-anglican-gold uppercase tracking-wider">Church Location</h2>
                <p className="text-sm font-semibold text-white">Oke Onire Street, Odobi, Okemesi Ekiti</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
