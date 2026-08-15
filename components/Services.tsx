import React from 'react';
import { Clock, Sun, BookOpen, Flame, Sparkles, HeartHandshake } from 'lucide-react';

export const Services: React.FC = () => {
  const serviceList = [
    {
      title: 'Sunday Worship Service',
      time: '9:00 AM – 12:00 Noon',
      day: 'Every Sunday',
      icon: Sun,
      highlight: true,
      description: 'Our principal weekly gathering featuring reverence, praise, liturgy, biblical preaching, and divine fellowship.',
      badge: 'Main Worship'
    },
    {
      title: 'Holy Communion',
      time: '9:00 AM',
      day: 'First Sunday & Midweek Feast Days',
      icon: Sparkles,
      highlight: false,
      description: 'Sacramental worship celebrating the Lord’s Supper, spiritual renewal, and thanksgiving in Christ.',
      badge: 'Sacrament'
    },
    {
      title: 'Bible Study',
      time: '5:00 PM – 6:30 PM',
      day: 'Midweek',
      icon: BookOpen,
      highlight: false,
      description: 'Systematic study of the Scriptures, doctrinal clarity, group discussion, and practical Christian living.',
      badge: 'Discipleship'
    },
    {
      title: 'Prayer Meetings',
      time: '5:00 PM – 6:00 PM',
      day: 'Weekly Intercession',
      icon: Flame,
      highlight: false,
      description: 'Fervent congregational prayer for families, church, healing, community needs, and national peace.',
      badge: 'Intercession'
    }
  ];

  return (
    <section id="services" className="py-16 md:py-24 bg-slate-50 relative overflow-hidden border-t border-b border-slate-200">
      
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-96 h-96 bg-anglican-gold/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-anglican-blue text-anglican-gold font-semibold text-xs uppercase tracking-widest">
            <Clock className="w-3.5 h-3.5" /> Worship & Gatherings
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-anglican-blue-dark">
            Our Church Services
          </h2>
          <p className="text-slate-600 max-w-xl mx-auto text-sm sm:text-base">
            Join us as we encounter God’s presence through prayer, word, sacraments, and warm Christian fellowship.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-anglican-blue via-anglican-gold to-anglican-blue mx-auto rounded-full"></div>
        </div>

        {/* Highlighted Banner for Sunday Worship */}
        <div className="mb-10 bg-gradient-to-r from-anglican-blue-dark via-anglican-blue to-anglican-blue-dark text-white rounded-2xl p-6 sm:p-8 shadow-xl border border-anglican-gold/40 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-5">
            <div className="p-4 rounded-2xl bg-gradient-to-br from-anglican-gold to-amber-600 text-anglican-blue-dark shadow-lg">
              <Sun className="w-10 h-10" />
            </div>
            <div className="space-y-1 text-left">
              <span className="px-2.5 py-0.5 rounded-full bg-anglican-gold/20 text-anglican-gold text-xs font-bold uppercase tracking-wider">
                Principal Sunday Worship
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                Sunday Service: 9:00am – 12:00 Noon
              </h3>
              <p className="text-slate-300 text-sm">
                All are welcome! Experience upliftment through liturgy, choir music, and sound gospel teachings.
              </p>
            </div>
          </div>
          <a
            href="#contact"
            className="w-full md:w-auto text-center px-6 py-3 bg-anglican-gold hover:bg-amber-400 text-anglican-blue-dark font-bold text-sm rounded-xl transition shadow-md whitespace-nowrap"
          >
            Plan Your Visit
          </a>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {serviceList.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className={`rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between border ${
                  service.highlight
                    ? 'bg-white border-anglican-gold ring-2 ring-anglican-gold/30 shadow-md'
                    : 'bg-white border-slate-200/80 hover:border-anglican-blue/40 hover:shadow-lg'
                }`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className={`p-3 rounded-xl ${
                      service.highlight
                        ? 'bg-anglican-gold/20 text-anglican-gold-dark'
                        : 'bg-anglican-blue-subtle text-anglican-blue'
                    }`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 border border-slate-200">
                      {service.badge}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-serif text-lg font-bold text-anglican-blue-dark mb-1">
                      {service.title}
                    </h3>
                    <p className="text-xs font-bold text-anglican-gold-dark uppercase tracking-wide">
                      {service.day}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 text-sm font-semibold text-slate-800 bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                    <Clock className="w-4 h-4 text-anglican-gold" />
                    <span>{service.time}</span>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-medium">
                  <span className="flex items-center gap-1">
                    <HeartHandshake className="w-3.5 h-3.5 text-anglican-gold" /> All Welcome
                  </span>
                  <span>St John's Odobi</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
