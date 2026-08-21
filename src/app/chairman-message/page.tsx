"use client";

import React from "react";
import { Quote } from "lucide-react";

export default function ChairmanMessagePage() {
  return (
    <div className="space-y-12">
      {/* HEADER */}
      <section className="space-y-4">
        <span className="text-amber-500 font-display font-bold text-xs uppercase tracking-widest block">
          Leadership Message
        </span>
        <h1 className="font-display font-extrabold text-3xl md:text-5xl text-slate-900 tracking-tight">
          Chairman's Desk
        </h1>
        <p className="text-slate-500 text-sm md:text-base max-w-xl">
          A note from Mr. Inderlal A. Talreja, Chairman of Siddhi Education Trust.
        </p>
      </section>

      {/* CONTENT & LAYOUT */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Left column: photo & card */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-white rounded-2xl border border-slate-100 p-4 shadow-premium">
            <div className="h-80 rounded-xl overflow-hidden relative mb-4">
              <img 
                src="https://www.sunriseinternationalschool.co.in/static/images/founder.jpg" 
                alt="Mr. Inderlal A. Talreja" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-center space-y-1">
              <h3 className="font-display font-bold text-lg text-slate-900">Mr. Inderlal A. Talreja</h3>
              <p className="text-amber-600 font-semibold text-xs uppercase tracking-wider">Chairman</p>
              <p className="text-slate-400 text-[10px] uppercase font-bold tracking-widest">Siddhi Education Trust</p>
            </div>
          </div>
        </div>

        {/* Right column: message */}
        <div className="lg:col-span-8 bg-white border border-slate-100 p-8 md:p-10 rounded-2xl shadow-premium space-y-6 text-slate-600 leading-relaxed text-sm md:text-base">
          <div className="p-3 bg-amber-500/10 text-amber-600 rounded-xl w-fit mb-2">
            <Quote size={24} />
          </div>

          <p className="font-medium text-slate-900 text-base md:text-lg italic border-l-4 border-amber-500 pl-4 py-1">
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

          <div className="pt-6 border-t border-slate-100">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block">Sincerely,</span>
            <span className="font-display font-extrabold text-slate-950 text-lg block mt-1">- Inderlal A. Talreja</span>
          </div>
        </div>
      </section>
    </div>
  );
}
