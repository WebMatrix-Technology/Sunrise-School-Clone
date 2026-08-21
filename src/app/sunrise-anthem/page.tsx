"use client";

import React from "react";
import { Music, Play } from "lucide-react";

export default function SunriseAnthemPage() {
  return (
    <div className="space-y-12">
      {/* HEADER */}
      <section className="space-y-4">
        <span className="text-amber-500 font-display font-bold text-xs uppercase tracking-widest block">
          School Pride
        </span>
        <h1 className="font-display font-extrabold text-3xl md:text-5xl text-slate-900 tracking-tight">
          Sunrise Anthem
        </h1>
        <p className="text-slate-500 text-sm md:text-base max-w-xl">
          The official song of Sunrise International School representing the dawn of wisdom, respect, and growth.
        </p>
      </section>

      {/* ANTHEM SHEET Container */}
      <section className="max-w-2xl mx-auto">
        <div className="bg-white border border-slate-100 rounded-3xl p-8 md:p-12 shadow-premium relative text-center overflow-hidden">
          {/* Subtle background decoration */}
          <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/5 rounded-bl-full flex items-center justify-center p-3 text-amber-500">
            <Music size={40} className="opacity-20" />
          </div>

          <div className="p-3 bg-amber-500/10 text-amber-600 rounded-xl w-fit mx-auto mb-6">
            <Music size={24} />
          </div>

          <h2 className="font-display font-bold text-xl text-slate-900 mb-8 uppercase tracking-widest">
            The School Song
          </h2>

          <div className="space-y-6 text-slate-700 font-display font-medium text-sm md:text-base leading-relaxed">
            <div className="space-y-1">
              <p>सूरज की किरणे जब आती है...,</p>
              <p>शिक्षा की कलियाँ खिल जाती है...,</p>
              <p>अंधकार सारा खो जाता है...,</p>
              <p>सारा जग सुन्दर हो जाता है...,</p>
            </div>

            <p className="font-extrabold text-amber-600 text-base md:text-lg my-4 uppercase tracking-wider block">
              Because we are... SIS... SIS... SIS... SIS... SIS... II
            </p>

            <div className="space-y-1 text-slate-600 font-sans italic">
              <p>'Education is Knowledge'</p>
              <p>'Knowledge is Power'</p>
              <p>'Power is respect'</p>
              <p>'Respect is Happiness'</p>
            </div>

            <div className="space-y-1 pt-2">
              <p>'Our Aim is Knowledge…..Our Goals are so high...,</p>
              <p>Our key to success is like a Rainbow in the Sky...,'</p>
            </div>

            <p className="font-extrabold text-amber-600 text-base md:text-lg my-4 uppercase tracking-wider block">
              Because we are... SIS... SIS... SIS... SIS... SIS... II
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
