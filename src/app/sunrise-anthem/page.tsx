"use client";

import React from "react";
import Link from "next/link";
import { Music, Video, Sparkles, Home, Award } from "lucide-react";

export default function SunriseAnthemPage() {
  return (
    <div className="space-y-12 md:space-y-16">
      {/* HEADER */}
      <section className="space-y-3">
        <div className="inline-flex items-center gap-1.5 text-amber-600 font-display font-bold text-xs uppercase tracking-widest bg-amber-50 px-3 py-1 rounded-md border border-amber-200">
          <Music size={14} />
          <span>School Pride</span>
        </div>
        <h1 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-[#0b2240] tracking-tight leading-tight">
          Sunrise Anthem
        </h1>
        <p className="text-slate-600 text-sm sm:text-base max-w-xl">
          The official song and video of Sunrise International School representing the dawn of wisdom, respect, and growth.
        </p>
      </section>

      {/* TWO COLUMN GRID FOR VIDEO & LYRICS */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
        
        {/* LYRICS SHEET (Left) */}
        <div className="lg:col-span-6 bg-white border border-slate-200/80 rounded-3xl p-8 sm:p-12 shadow-school relative text-center flex flex-col justify-center overflow-hidden">
          {/* Subtle background decoration */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-bl-full flex items-center justify-center p-3 text-amber-500 select-none pointer-events-none">
            <Music size={60} className="opacity-15" />
          </div>

          <div className="w-14 h-14 bg-amber-500/10 text-amber-600 border border-amber-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xs">
            <Music size={26} />
          </div>

          <h2 className="font-display font-black text-lg sm:text-xl text-[#0b2240] mb-8 uppercase tracking-widest border-b border-slate-100 pb-3">
            The School Song
          </h2>

          <div className="space-y-6 text-slate-800 font-display font-bold text-sm sm:text-base md:text-lg leading-relaxed">
            <div className="space-y-1.5 bg-amber-50/50 p-4 rounded-2xl border border-amber-200/40">
              <p>सूरज की किरणे जब आती है...,</p>
              <p>शिक्षा की कलियाँ खिल जाती है...,</p>
              <p>अंधकार सारा खो जाता है...,</p>
              <p>सारा जग सुन्दर हो जाता है...,</p>
            </div>

            <p className="font-extrabold text-amber-600 text-base sm:text-lg md:text-xl my-4 uppercase tracking-wider block bg-amber-500/10 py-2.5 rounded-xl border border-amber-500/30 shadow-xs">
              Because we are... SIS... SIS... SIS... SIS... SIS... II
            </p>

            <div className="space-y-1.5 text-slate-700 italic font-sans text-sm sm:text-base">
              <p>'Education is Knowledge'</p>
              <p>'Knowledge is Power'</p>
              <p>'Power is respect'</p>
              <p>'Respect is Happiness'</p>
            </div>

            <div className="space-y-1.5 pt-2 bg-slate-50 p-4 rounded-2xl border border-slate-100">
              <p>'Our Aim is Knowledge…..Our Goals are so high...,</p>
              <p>Our key to success is like a Rainbow in the Sky...,'</p>
            </div>

            <p className="font-extrabold text-amber-600 text-base sm:text-lg md:text-xl my-4 uppercase tracking-wider block bg-amber-500/10 py-2.5 rounded-xl border border-amber-500/30 shadow-xs">
              Because we are... SIS... SIS... SIS... SIS... SIS... II
            </p>
          </div>
        </div>

        {/* ANTHEM VIDEO PLAYER (Right) */}
        <div className="lg:col-span-6 bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-8 shadow-school flex flex-col justify-between space-y-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-xs uppercase font-bold text-amber-600 tracking-wider">
              <Video size={16} />
              <span>Official Video Clip</span>
            </div>
            <h3 className="font-display font-black text-xl text-[#0b2240]">
              Watch Student Performance
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              Watch and listen to the Sunrise International School students singing the official school pride song.
            </p>
          </div>

          <div className="w-full aspect-video rounded-2xl overflow-hidden shadow-school-lg border-2 border-slate-900 bg-slate-950 flex items-center justify-center">
            <video
              src="https://www.sunriseinternationalschool.co.in/static/video/anthem.mp4"
              controls
              className="w-full h-full object-contain"
              poster="https://www.sunriseinternationalschool.co.in/static/images/carousel/1.jpg"
            />
          </div>

          <div className="text-[11px] text-slate-500 font-medium italic text-center p-3 rounded-xl bg-slate-50 border border-slate-100">
            Audio & Video assets officially hosted by Siddhi Education Trust.
          </div>
        </div>

      </section>
    </div>
  );
}

