"use client";

import React from "react";
import Link from "next/link";
import { Quote, Home, Award, ShieldCheck, Sparkles } from "lucide-react";

export default function ChairmanMessagePage() {
  return (
    <div className="space-y-12 md:space-y-16">
      {/* HEADER WITH BREADCRUMB */}
      <section className="space-y-3">
        <div className="inline-flex items-center gap-1.5 text-amber-600 font-display font-bold text-xs uppercase tracking-widest bg-amber-50 px-3 py-1 rounded-md border border-amber-200">
          <Award size={14} />
          <span>Leadership Message</span>
        </div>
        <h1 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-[#0b2240] tracking-tight">
          From The Chairman's Desk
        </h1>
        <p className="text-slate-600 text-sm sm:text-base max-w-2xl">
          A vision statement from Mr. Inderlal A. Talreja, Chairman of Siddhi Education Trust.
        </p>
      </section>

      {/* CONTENT & LAYOUT */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
        {/* Left column: photo & card */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-white rounded-3xl border border-slate-200/80 p-5 shadow-school relative overflow-hidden">
            <div className="h-88 sm:h-96 rounded-2xl overflow-hidden relative mb-4 border-2 border-amber-400/30">
              <img 
                src="https://www.sunriseinternationalschool.co.in/static/images/founder.jpg" 
                alt="Mr. Inderlal A. Talreja" 
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07162c]/80 via-transparent to-transparent" />
            </div>
            <div className="text-center space-y-1 py-1">
              <h3 className="font-display font-black text-xl text-[#0b2240]">Mr. Inderlal A. Talreja</h3>
              <p className="text-amber-600 font-bold text-xs uppercase tracking-wider">Chairman</p>
              <p className="text-slate-500 text-[11px] uppercase font-semibold tracking-widest">Siddhi Education Trust</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#0b2240] to-[#07162c] text-white p-6 rounded-3xl border border-slate-800 shadow-school space-y-3">
            <div className="flex items-center gap-2 text-amber-400 font-display font-bold text-xs uppercase tracking-wider">
              <ShieldCheck size={16} />
              <span>Siddhi Education Trust</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Committed to world-class educational standards, modern infrastructure, and student-centered growth for over two decades.
            </p>
          </div>
        </div>

        {/* Right column: message */}
        <div className="lg:col-span-8 bg-white border border-slate-200/80 p-8 sm:p-12 rounded-3xl shadow-school space-y-6 text-slate-700 leading-relaxed text-sm sm:text-base">
          <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-600 border border-amber-500/20 flex items-center justify-center mb-2 shadow-xs">
            <Quote size={24} />
          </div>

          <p className="font-medium text-[#0b2240] text-base sm:text-lg italic border-l-4 border-amber-500 pl-4 py-2 bg-amber-50/50 rounded-r-2xl border border-amber-200/50">
            "Our mission is to nourish a learner friendly environment within our school that lives up with the needs of the future generations of our country. We strive hard to enable each child to grow to his highest potential so that they can face the challenges of life head on. We instill a positive frame of mind during their blooming period and prepare them for Global Competence."
          </p>

          <p>
            The Siddhi Education Trust legacy is long and enduring. For over two decades, the Sunrise family has made education a mission and quality the fulcrum of their commitment. Today, we cater to the educational needs of hundreds of learners annually. We have been entrusted with their future, their careers and their lives ahead. We need to nurture them as learners, inculcate values and arm them with the necessary skills that will help them make the nation proud.
          </p>

          <p>
            The management of Sunrise International School brings together a Sustainable learning community. We strive to build independent, responsible, global citizens through a widely accepted curriculum and practices that are founded on learner-centric education. Therefore, Our school will impart world class education through the best use of modern resources, developing young minds to think, question and create.
          </p>

          <p>
            Our school aims to blend strong cultural fundamentals of Indian society with advanced learning tools acquired from the world over giving education an exciting and dynamic direction.
          </p>

          <p>
            As we open our doors to each new student, expectations run high as we believe that each and every one of them will grow beyond the horizon. Every day, every year we scale new heights, never standing still.
          </p>

          <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block">Sincerely,</span>
              <span className="font-display font-black text-[#0b2240] text-xl block mt-1">- Inderlal A. Talreja</span>
              <span className="text-xs text-amber-600 font-semibold">Chairman, Siddhi Education Trust</span>
            </div>
            
            <Link
              href="/enquiry-form"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs rounded-xl shadow-gold transition-all duration-200"
            >
              <span>Join Sunrise Family</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

