"use client";

import React, { useState } from "react";
import { Send, MapPin, Mail, Phone, Clock } from "lucide-react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      alert("Please fill in all required fields (Name, Email, and Message).");
      return;
    }
    alert("Thank you! Your message has been received. Our team will get back to you shortly.");
    setForm({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: ""
    });
  };

  return (
    <div className="space-y-12">
      {/* HEADER */}
      <section className="space-y-4">
        <span className="text-amber-500 font-display font-bold text-xs uppercase tracking-widest block">
          Get In Touch
        </span>
        <h1 className="font-display font-extrabold text-3xl md:text-5xl text-slate-900 tracking-tight">
          Contact Us
        </h1>
        <p className="text-slate-500 text-sm md:text-base max-w-xl">
          Have queries about syllabus, fees, or school policies? Send us a direct message or visit our campus.
        </p>
      </section>

      {/* TWO COLUMN GRID */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* Left Column: Form */}
        <div className="lg:col-span-7 bg-white border border-slate-100 p-6 md:p-10 rounded-3xl shadow-premium">
          <h2 className="font-display font-bold text-xl text-slate-900 mb-6">Send Us a Message</h2>
          
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wide">Your Name *</label>
                <input
                  type="text"
                  required
                  placeholder="Full name"
                  value={form.name}
                  onChange={e => setForm({ ...form, name: e.target.value })}
                  className="px-4 py-3 rounded-xl border border-slate-200 outline-none text-slate-800 text-sm focus:border-amber-500 focus:ring-4 focus:ring-amber-500/10 transition-all"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wide">Email address *</label>
                <input
                  type="email"
                  required
                  placeholder="Email address"
                  value={form.email}
                  onChange={e => setForm({ ...form, email: e.target.value })}
                  className="px-4 py-3 rounded-xl border border-slate-200 outline-none text-slate-800 text-sm focus:border-amber-500 focus:ring-4 focus:ring-amber-500/10 transition-all"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wide">Phone No.</label>
                <input
                  type="tel"
                  placeholder="Contact phone"
                  value={form.phone}
                  onChange={e => setForm({ ...form, phone: e.target.value })}
                  className="px-4 py-3 rounded-xl border border-slate-200 outline-none text-slate-800 text-sm focus:border-amber-500 focus:ring-4 focus:ring-amber-500/10 transition-all"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wide">Subject</label>
                <input
                  type="text"
                  placeholder="Subject of enquiry"
                  value={form.subject}
                  onChange={e => setForm({ ...form, subject: e.target.value })}
                  className="px-4 py-3 rounded-xl border border-slate-200 outline-none text-slate-800 text-sm focus:border-amber-500 focus:ring-4 focus:ring-amber-500/10 transition-all"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wide">Message *</label>
              <textarea
                rows={5}
                required
                placeholder="Type your message details here..."
                value={form.message}
                onChange={e => setForm({ ...form, message: e.target.value })}
                className="px-4 py-3 rounded-xl border border-slate-200 outline-none text-slate-800 text-sm focus:border-amber-500 focus:ring-4 focus:ring-amber-500/10 transition-all resize-none"
              />
            </div>

            <div className="pt-2 flex justify-end">
              <button
                type="submit"
                className="px-6 py-3.5 bg-slate-900 hover:bg-amber-500 hover:text-slate-950 text-white font-bold rounded-xl text-sm transition-all duration-200 shadow-md flex items-center gap-2"
              >
                <Send size={16} />
                <span>Send Message</span>
              </button>
            </div>
          </form>
        </div>

        {/* Right Column: Address Cards & Map */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white border border-slate-100 p-6 rounded-3xl shadow-premium space-y-4">
            <h3 className="font-display font-bold text-lg text-slate-900 pb-2 border-b border-slate-50">Campus Contact Details</h3>
            
            <div className="space-y-4 text-slate-600 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="text-amber-500 shrink-0 mt-0.5" size={18} />
                <span>Village Vaalivali, Barvi Dam Road, Opp New Water Tank. Badlapur (West), Dist. Thane. Pin code : 421503.</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-amber-500 shrink-0" size={18} />
                <span>+91-9324120900 / +91-9702313188</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="text-amber-500 shrink-0" size={18} />
                <span>sunriseint.school@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="text-amber-500 shrink-0" size={18} />
                <span>Office Hours: 08:00 AM - 04:00 PM</span>
              </div>
            </div>
          </div>

          {/* Embedded Iframe Map */}
          <div className="h-64 rounded-3xl overflow-hidden shadow-premium border border-slate-100 relative">
            <iframe 
              src="https://maps.google.com/maps?q=Village%20Vaalivali,%20Badlapur,%20Thane&t=&z=14&ie=UTF8&iwloc=&output=embed" 
              className="w-full h-full border-none"
              allowFullScreen
              loading="lazy"
              title="Sunrise School Location Map"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
