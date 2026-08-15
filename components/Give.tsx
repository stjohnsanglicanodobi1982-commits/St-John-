import React, { useState } from 'react';
import { Heart, Copy, Check, Building2, ShieldCheck, Gift } from 'lucide-react';

export const Give: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const accountNumber = '2000316772';

  const handleCopy = () => {
    navigator.clipboard.writeText(accountNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="give" className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 text-anglican-gold-dark font-semibold text-xs uppercase tracking-widest border border-amber-200">
            <Heart className="w-3.5 h-3.5 fill-anglican-gold text-anglican-gold" /> Generosity & Stewardship
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-anglican-blue-dark">
            Give & Support The Ministry
          </h2>
          <p className="text-slate-600 max-w-xl mx-auto text-sm sm:text-base">
            Your faithful tithes, offerings, and donations empower church ministry, community outreach, and facility maintenance.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-anglican-blue via-anglican-gold to-anglican-blue mx-auto rounded-full"></div>
        </div>

        {/* Bank Account Details Card */}
        <div className="max-w-2xl mx-auto bg-gradient-to-br from-anglican-blue-dark via-anglican-blue to-slate-900 text-white rounded-3xl p-6 sm:p-10 shadow-2xl border-2 border-anglican-gold/40 relative overflow-hidden">
          
          {/* Decorative Background Badge */}
          <div className="absolute -right-8 -bottom-8 opacity-10 pointer-events-none">
            <Building2 className="w-64 h-64 text-anglican-gold" />
          </div>

          <div className="relative z-10 space-y-6">
            
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-anglican-gold/20 text-anglican-gold rounded-xl border border-anglican-gold/30">
                  <Building2 className="w-6 h-6" />
                </div>
                <div>
                  <span className="block text-xs uppercase font-semibold text-anglican-gold tracking-wider">Official Bank Account</span>
                  <h3 className="font-serif text-lg font-bold text-white">Direct Bank Transfer</h3>
                </div>
              </div>
              <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold border border-emerald-500/30 flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5" /> Verified
              </span>
            </div>

            {/* Bank Info Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
              <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                <span className="block text-xs uppercase font-semibold text-slate-400 mb-1">Bank Name</span>
                <span className="text-lg font-bold text-white tracking-wide">First Bank</span>
              </div>

              <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                <span className="block text-xs uppercase font-semibold text-slate-400 mb-1">Account Name</span>
                <span className="text-base font-bold text-amber-200">St John's Anglican Church, Odobi</span>
              </div>
            </div>

            {/* Account Number Box */}
            <div className="bg-slate-950/80 p-5 rounded-2xl border border-anglican-gold/50 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-center sm:text-left">
                <span className="block text-xs uppercase font-bold text-anglican-gold tracking-wider mb-1">
                  Account Number
                </span>
                <span className="font-mono text-3xl font-extrabold text-white tracking-wider">
                  2000316772
                </span>
              </div>

              <button
                onClick={handleCopy}
                type="button"
                className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-sm transition-all duration-200 shadow-md ${
                  copied
                    ? 'bg-emerald-500 text-white'
                    : 'bg-gradient-to-r from-anglican-gold to-amber-500 hover:brightness-110 text-anglican-blue-dark'
                }`}
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4" /> Account Number Copied!
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" /> Copy Account Number
                  </>
                )}
              </button>
            </div>

            {/* Purpose Note */}
            <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-center sm:text-left flex items-start gap-3">
              <Gift className="w-5 h-5 text-anglican-gold shrink-0 mt-0.5" />
              <div>
                <span className="block text-xs font-bold text-anglican-gold uppercase">Payment Note / Description</span>
                <p className="text-xs sm:text-sm text-slate-200 font-medium mt-0.5">
                  "For Tithe, Offering and Donations"
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Scripture Quote */}
        <div className="mt-10 text-center max-w-xl mx-auto">
          <blockquote className="font-serif italic text-slate-700 text-sm sm:text-base">
            "Every man according as he purposeth in his heart, so let him give; not grudgingly, or of necessity: for God loveth a cheerful giver."
          </blockquote>
          <cite className="block text-xs font-bold text-anglican-blue uppercase tracking-wider mt-2 not-italic">
            — 2 Corinthians 9:7
          </cite>
        </div>

      </div>
    </section>
  );
};
