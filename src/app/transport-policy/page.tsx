"use client";

import React from "react";
import { Bus, ShieldCheck, UserCheck, AlertTriangle, Compass, Heart } from "lucide-react";

export default function TransportPolicyPage() {
  const policies = [
    {
      title: "Our Transport Mission",
      desc: "To provide safe and reliable transport services to the students at the highest levels of safety, quality, customer service and positive employee relations.",
      icon: ShieldCheck,
      color: "text-blue-500 bg-blue-50"
    },
    {
      title: "Our Transport Vision",
      desc: "To be the first and foremost in providing the safest and the most comfortable school transportation without compromising on safety, professionalism, training, leadership and quality.",
      icon: Compass,
      color: "text-amber-500 bg-amber-50"
    },
    {
      title: "Our Commitment",
      desc: "We are committed to provide the best school transport service with highest safety measures and comfort. Our team implements practices to make our service the best in the industry.",
      icon: Heart,
      color: "text-rose-500 bg-rose-50"
    }
  ];

  const safetyNorms = [
    "All buses run by authorised Private Contractors with years of experience and Regional Transport Commissioner certification.",
    "Parents are requested to strictly desist from using any unauthorised private transport services.",
    "Buses driven by experienced drivers possessing a valid heavy vehicle driver's license of minimum 5 years.",
    "Each bus has dedicated lady attendants responsible for maintaining pupil safety and discipline.",
    "Dedicated mobile numbers are assigned to lady attendants for parent contacts during emergency.",
    "Regular training programs conducted for both drivers and attendants regarding road safety and handling pupils.",
    "Buses equipped with active CCTV cameras and GPS Navigation Systems for route monitoring.",
    "Installation of Speed Regulators/Governors to prevent overspeeding at all costs.",
    "Padded shields installed near the door entrance to avoid accidental slipping/falling."
  ];

  return (
    <div className="space-y-16">
      {/* HEADER */}
      <section className="space-y-4">
        <span className="text-amber-500 font-display font-bold text-xs uppercase tracking-widest block">
          Safety First
        </span>
        <h1 className="font-display font-extrabold text-3xl md:text-5xl text-slate-900 tracking-tight">
          Transport Policy
        </h1>
        <p className="text-slate-500 text-sm md:text-base max-w-xl">
          Seasoned transportation planning to secure your child's commute. We place safety and responsibility above all.
        </p>
      </section>

      {/* MISSION VISION COMMITMENT */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {policies.map((p, idx) => {
          const Icon = p.icon;
          return (
            <div key={idx} className="bg-white border border-slate-100 p-6 rounded-2xl shadow-premium space-y-4">
              <div className={`p-3 rounded-xl w-fit ${p.color}`}>
                <Icon size={22} />
              </div>
              <h3 className="font-display font-bold text-base text-slate-900">{p.title}</h3>
              <p className="text-slate-600 text-xs md:text-sm leading-relaxed">{p.desc}</p>
            </div>
          );
        })}
      </section>

      {/* SAFETY NORMS CHECKLIST */}
      <section className="bg-slate-900 text-white rounded-3xl p-8 md:p-12 shadow-premium-lg border border-slate-800 space-y-8">
        <div className="space-y-2">
          <span className="text-amber-400 font-display font-bold text-xs uppercase tracking-widest block">Security</span>
          <h2 className="font-display font-extrabold text-2xl md:text-3xl text-white">Safety Norms inside School Buses</h2>
          <p className="text-slate-400 text-xs md:text-sm max-w-xl">
            We list hereunder the enhanced measures implemented to secure journeys inside our buses:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {safetyNorms.map((norm, i) => (
            <div key={i} className="flex gap-3 bg-slate-800/40 p-4 rounded-xl border border-slate-800/50">
              <span className="text-amber-400 font-bold text-xs md:text-sm mt-0.5 shrink-0">✓</span>
              <p className="text-slate-300 text-xs md:text-sm leading-relaxed">{norm}</p>
            </div>
          ))}
        </div>
      </section>

      {/* RESPONSIBILITIES GRID */}
      <section className="space-y-8">
        <h2 className="font-display font-bold text-2xl text-slate-900 flex items-center gap-2">
          <UserCheck size={22} className="text-amber-500" />
          <span>Commute Responsibilities</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Driver responsibilities */}
          <div className="bg-white border border-slate-100 p-6 rounded-2xl shadow-premium space-y-4">
            <h3 className="font-display font-bold text-base text-slate-900 pb-2 border-b border-slate-50">
              Bus Drivers
            </h3>
            <ul className="space-y-3 text-xs md:text-sm text-slate-600 list-disc pl-4">
              <li>Possess a valid heavy vehicle driver's license of minimum 5 years.</li>
              <li>Practice good driving habits and keep abreast of pupil transport advancements.</li>
              <li>Understand that being respected is more important than being liked.</li>
              <li>Never drive aggressively; practice defensive driving at all times.</li>
            </ul>
          </div>

          {/* Attendant responsibilities */}
          <div className="bg-white border border-slate-100 p-6 rounded-2xl shadow-premium space-y-4">
            <h3 className="font-display font-bold text-base text-slate-900 pb-2 border-b border-slate-50">
              Lady Attendants
            </h3>
            <ul className="space-y-3 text-xs md:text-sm text-slate-600 list-disc pl-4">
              <li>In complete charge of maintaining discipline of students on board.</li>
              <li>Report any safety exceptions or behavioral issues directly to the School Principal.</li>
              <li>Possess the authority to assign seats to students to maintain order.</li>
              <li>Keep active communication contact via dedicated route phone numbers.</li>
            </ul>
          </div>

          {/* Guardians/Students responsibilities */}
          <div className="bg-white border border-slate-100 p-6 rounded-2xl shadow-premium space-y-4">
            <h3 className="font-display font-bold text-base text-slate-900 pb-2 border-b border-slate-50">
              Guardians & Students
            </h3>
            <ul className="space-y-3 text-xs md:text-sm text-slate-600 list-disc pl-4">
              <li>Drop and pick up students at correct boarding stops well before time.</li>
              <li>Train children on safety steps while waiting for and boarding the bus.</li>
              <li>Maintain cleanliness on board and report driving offenses immediately.</li>
              <li>A child is returned to school if no guardian is present at the return stop.</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
