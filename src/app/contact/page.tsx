"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Send, MapPin, Mail, Phone, Clock, PhoneCall, Sparkles, Building, MessageSquare } from "lucide-react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      alert("Please fill in all required fields (Name, Email, and Message).");
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });
      const data = await response.json();
      if (response.ok && data.success) {
        alert("Thank you! Your message has been received. Our team will get back to you shortly.");
        setForm({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: ""
        });
      } else {
        alert(data.error || "Failed to send message. Please try again.");
      }
    } catch (err) {
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className="space-y-12 md:space-y-16">
      {/* HEADER */}
      <section className="space-y-3">
        <div className="inline-flex items-center gap-1.5 text-amber-600 font-display font-bold text-xs uppercase tracking-widest bg-amber-50 px-3 py-1 rounded-md border border-amber-200">
          <PhoneCall size={14} />
          <span>Get In Touch</span>
        </div>
        <h1 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-[#0b2240] tracking-tight">
          Contact & Campus Visit
        </h1>
        <p className="text-slate-600 text-sm sm:text-base max-w-xl">
          Have queries about syllabus, fees, or school policies? Send us a direct message or visit our campus.
        </p>
      </section>

      {/* TWO COLUMN GRID */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
        
        {/* Left Column: Form */}
        <div className="lg:col-span-7 bg-white border border-slate-200/80 p-8 sm:p-12 rounded-3xl shadow-school">
          <div className="flex items-center gap-2.5 pb-4 mb-6 border-b border-slate-100">
            <MessageSquare size={20} className="text-amber-600" />
            <h2 className="font-display font-black text-xl text-[#0b2240]">
              Send Us a Message
            </h2>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">Your Name *</label>
                <input
                  type="text"
                  required
                  placeholder="Full name"
                  value={form.name}
                  onChange={e => setForm({ ...form, name: e.target.value })}
                  className="px-4 py-3.5 rounded-xl border border-slate-200 outline-none text-slate-800 text-sm focus:border-amber-500 focus:ring-4 focus:ring-amber-500/10 transition-all bg-slate-50/50"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">Email Address *</label>
                <input
                  type="email"
                  required
                  placeholder="Email address"
                  value={form.email}
                  onChange={e => setForm({ ...form, email: e.target.value })}
                  className="px-4 py-3.5 rounded-xl border border-slate-200 outline-none text-slate-800 text-sm focus:border-amber-500 focus:ring-4 focus:ring-amber-500/10 transition-all bg-slate-50/50"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">Phone No.</label>
                <input
                  type="tel"
                  placeholder="Contact phone"
                  value={form.phone}
                  onChange={e => setForm({ ...form, phone: e.target.value })}
                  className="px-4 py-3.5 rounded-xl border border-slate-200 outline-none text-slate-800 text-sm focus:border-amber-500 focus:ring-4 focus:ring-amber-500/10 transition-all bg-slate-50/50"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">Subject</label>
                <input
                  type="text"
                  placeholder="Subject of enquiry"
                  value={form.subject}
                  onChange={e => setForm({ ...form, subject: e.target.value })}
                  className="px-4 py-3.5 rounded-xl border border-slate-200 outline-none text-slate-800 text-sm focus:border-amber-500 focus:ring-4 focus:ring-amber-500/10 transition-all bg-slate-50/50"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">Message *</label>
              <textarea
                rows={5}
                required
                placeholder="Type your message details here..."
                value={form.message}
                onChange={e => setForm({ ...form, message: e.target.value })}
                className="px-4 py-3.5 rounded-xl border border-slate-200 outline-none text-slate-800 text-sm focus:border-amber-500 focus:ring-4 focus:ring-amber-500/10 transition-all resize-none bg-slate-50/50"
              />
            </div>

            <div className="pt-2 flex justify-end">
              <button
                type="submit"
                className="px-8 py-3.5 bg-gradient-to-r from-amber-500 via-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 hover:text-white font-black rounded-xl text-sm transition-all duration-200 shadow-gold hover:shadow-school flex items-center gap-2"
              >
                <Send size={16} />
                <span>Send Message</span>
              </button>
            </div>
          </form>
        </div>

        {/* Right Column: Address Cards & Map */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white border border-slate-200/80 p-8 rounded-3xl shadow-school space-y-5">
            <div className="flex items-center gap-2.5 pb-3 border-b border-slate-100">
              <Building size={20} className="text-amber-600" />
              <h3 className="font-display font-black text-lg text-[#0b2240]">
                Campus Contact Details
              </h3>
            </div>
            
            <div className="space-y-4 text-slate-700 text-sm">
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin size={18} />
                </div>
                <span className="leading-relaxed">
                  Village Vaalivali, Barvi Dam Road, Opp New Water Tank. Badlapur (West), Dist. Thane. Pin code : 421503.
                </span>
              </div>
              
              <div className="flex items-center gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center shrink-0">
                  <Phone size={18} />
                </div>
                <div className="flex flex-col">
                  <a href="tel:9324120900" className="hover:text-amber-600 font-semibold transition-colors">+91-9324120900</a>
                  <a href="tel:9702313188" className="hover:text-amber-600 text-xs text-slate-500 transition-colors">+91-9702313188</a>
                </div>
              </div>

              <div className="flex items-center gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center shrink-0">
                  <Mail size={18} />
                </div>
                <a href="mailto:sunriseint.school@gmail.com" className="hover:text-amber-600 font-semibold transition-colors truncate">
                  sunriseint.school@gmail.com
                </a>
              </div>

              <div className="flex items-center gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center shrink-0">
                  <Clock size={18} />
                </div>
                <span className="font-medium text-slate-600">Office Hours: Mon - Sat (08:00 AM - 04:00 PM)</span>
              </div>
            </div>
          </div>

          {/* Embedded Iframe Map */}
          <div className="h-72 rounded-3xl overflow-hidden shadow-school border border-slate-200/80 relative">
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

