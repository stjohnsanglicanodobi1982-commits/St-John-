import React from 'react';
import { MapPin, Calendar, Compass } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-anglican-blue-subtle text-anglican-blue font-semibold text-xs uppercase tracking-widest">
            <Compass className="w-3.5 h-3.5 text-anglican-gold" /> Our Heritage
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-anglican-blue-dark">
            About St John's Anglican Church
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-anglican-blue via-anglican-gold to-anglican-blue mx-auto rounded-full"></div>
        </div>

        {/* Content Card */}
        <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 sm:p-10 shadow-sm max-w-3xl mx-auto space-y-8">
          
          <p className="text-slate-700 text-base sm:text-lg leading-relaxed text-center font-normal">
            Welcome to St John's Anglican Church, Odobi Okemesi Ekiti. We are a Christian community dedicated to glorifying God, preaching the Gospel of Jesus Christ, and serving our local community with faith, hope, and love.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-slate-200">
            
            {/* Foundation Year */}
            <div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-slate-200/60 shadow-xs">
              <div className="p-3 bg-anglican-blue text-anglican-gold rounded-xl shadow-sm">
                <Calendar className="w-6 h-6" />
              </div>
              <div>
                <span className="block text-xs font-bold uppercase tracking-wider text-slate-500">Year Founded</span>
                <span className="font-serif text-xl font-bold text-anglican-blue-dark">1982</span>
                <p className="text-xs text-slate-600 mt-1">Established in faith and spiritual devotion in Odobi.</p>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-slate-200/60 shadow-xs">
              <div className="p-3 bg-anglican-blue text-anglican-gold rounded-xl shadow-sm">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <span className="block text-xs font-bold uppercase tracking-wider text-slate-500">Church Location</span>
                <span className="font-sans text-base font-bold text-anglican-blue-dark">Oke Onire Street</span>
                <p className="text-xs text-slate-600 mt-1">Odobi, Okemesi Ekiti, Nigeria.</p>
              </div>
            </div>

          </div>

          <div className="p-4 rounded-xl bg-anglican-blue-subtle/60 border border-anglican-blue/10 text-center text-sm text-anglican-blue-dark font-medium">
            <span className="inline-block mr-1">✝️</span> "Built upon the foundation of the apostles and prophets, Jesus Christ himself being the chief corner stone." — <span className="font-semibold italic">Ephesians 2:20</span>
          </div>

        </div>

      </div>
    </section>
  );
};
