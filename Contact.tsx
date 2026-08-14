import React, { useState } from 'react';
import { MapPin, Mail, Phone, Send, CheckCircle2, MessageSquare, Clock } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.message) return;
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-slate-50 relative overflow-hidden border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-anglican-blue-subtle text-anglican-blue font-semibold text-xs uppercase tracking-widest">
            <MessageSquare className="w-3.5 h-3.5 text-anglican-gold" /> Get In Touch
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-anglican-blue-dark">
            Contact St John's Church
          </h2>
          <p className="text-slate-600 max-w-xl mx-auto text-sm sm:text-base">
            We would love to hear from you. Reach out with your questions, prayer requests, or visitation plans.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-anglican-blue via-anglican-gold to-anglican-blue mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Contact Information Side */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-gradient-to-br from-anglican-blue-dark via-anglican-blue to-anglican-blue-dark text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-anglican-gold/30 space-y-8">
              
              <div>
                <h3 className="font-serif text-2xl font-bold text-white mb-2">Church Location & Info</h3>
                <p className="text-slate-300 text-sm">
                  Visit us during worship hours or reach our church office via phone and email.
                </p>
              </div>

              <div className="space-y-6">
                
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-anglican-gold/20 text-anglican-gold rounded-xl shrink-0 mt-0.5 border border-anglican-gold/30">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase font-bold text-anglican-gold tracking-wider">Physical Address</h4>
                    <p className="text-base text-white font-medium mt-0.5">
                      Oke Onire Street, Odobi, Okemesi Ekiti, Nigeria
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-anglican-gold/20 text-anglican-gold rounded-xl shrink-0 mt-0.5 border border-anglican-gold/30">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase font-bold text-anglican-gold tracking-wider">Official Email</h4>
                    <a
                      href="mailto:stjohnsanglicanodobi1982@gmail.com"
                      className="text-sm sm:text-base text-white hover:text-anglican-gold transition font-medium mt-0.5 block break-all"
                    >
                      stjohnsanglicanodobi1982@gmail.com
                    </a>
                  </div>
                </div>

                {/* Phone Numbers */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-anglican-gold/20 text-anglican-gold rounded-xl shrink-0 mt-0.5 border border-anglican-gold/30">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase font-bold text-anglican-gold tracking-wider">Phone Lines</h4>
                    <div className="space-y-1 mt-1 text-sm sm:text-base font-medium text-white">
                      <a href="tel:+2347062676430" className="block hover:text-anglican-gold transition">
                        +234 706 267 6430
                      </a>
                      <a href="tel:+2349059188643" className="block hover:text-anglican-gold transition">
                        +234 905 918 8643
                      </a>
                    </div>
                  </div>
                </div>

                {/* Service Schedule Note */}
                <div className="pt-4 border-t border-white/10 flex items-center gap-3 text-slate-300 text-xs">
                  <Clock className="w-4 h-4 text-anglican-gold shrink-0" />
                  <span>Sunday Worship: 9:00 AM – 12:00 PM</span>
                </div>

              </div>

            </div>

          </div>

          {/* Contact Form Side */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-200">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-anglican-blue-dark">
                  Message Sent Successfully!
                </h3>
                <p className="text-slate-600 max-w-md mx-auto text-sm">
                  Thank you for reaching out to St John's Anglican Church, Odobi. May God bless you! We will get back to you shortly.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', email: '', phone: '', subject: 'General Inquiry', message: '' });
                  }}
                  className="px-6 py-2.5 bg-anglican-blue text-white text-sm font-semibold rounded-xl hover:bg-anglican-blue-dark transition"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="font-serif text-xl font-bold text-anglican-blue-dark border-b border-slate-100 pb-3">
                  Send Us A Message
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-700 mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Brother John"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-anglican-blue focus:border-anglican-blue outline-none transition"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-700 mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-anglican-blue focus:border-anglican-blue outline-none transition"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-700 mb-1.5">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+234..."
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-anglican-blue focus:border-anglican-blue outline-none transition"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-700 mb-1.5">
                      Subject
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-anglican-blue focus:border-anglican-blue outline-none transition bg-white"
                    >
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Prayer Request">Prayer Request</option>
                      <option value="First Time Visitor">First Time Visitor</option>
                      <option value="Counseling / Spiritual Support">Counseling / Spiritual Support</option>
                      <option value="Donation Inquiry">Donation Inquiry</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-slate-700 mb-1.5">
                    Your Message / Prayer Request *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message or prayer request here..."
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-anglican-blue focus:border-anglican-blue outline-none transition resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-gradient-to-r from-anglican-blue via-anglican-blue-light to-anglican-blue text-white font-bold text-sm rounded-xl shadow-lg hover:shadow-xl hover:brightness-110 active:scale-98 transition duration-200"
                >
                  <Send className="w-4 h-4 text-anglican-gold" /> Send Message
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
