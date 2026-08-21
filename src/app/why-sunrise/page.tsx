"use client";

import React, { useState } from "react";
import { Eye, Headphones, FileText, Activity, Users, Settings, Cpu, ShieldAlert, Award } from "lucide-react";

export default function WhySunrisePage() {
  const [activeVark, setActiveVark] = useState<"visual" | "auditory" | "reading" | "kinesthetic">("visual");

  const varkItems = {
    visual: {
      title: "Visual Learning",
      icon: Eye,
      color: "text-blue-500 bg-blue-50",
      border: "border-blue-200",
      description: "Visual learners remember things they see better than things they hear. We use projectors, process diagrams, video animations, and digital visualizers to create rich mental maps of complex lessons, stimulating visual memory directly."
    },
    auditory: {
      title: "Auditory learning",
      icon: Headphones,
      color: "text-amber-500 bg-amber-50",
      border: "border-amber-200",
      description: "Focusing on interactive explanations, group discussions, listening exercises, and active teacher-student voice loops. This allows students who grasp concepts better via listening to follow the syllabus naturally and comfortably."
    },
    reading: {
      title: "Reading / Writing",
      icon: FileText,
      color: "text-emerald-500 bg-emerald-50",
      border: "border-emerald-200",
      description: "Focusing on worksheets, digital library content, comprehensive textbook notes, and essay writing. We encourage students to synthesize what they learn into written notes, building exceptional language and analytical writing capabilities."
    },
    kinesthetic: {
      title: "Kinesthetic (Experiential)",
      icon: Activity,
      color: "text-rose-500 bg-rose-50",
      border: "border-rose-200",
      description: "Kinesthetic learning enables students to gain knowledge by experiencing it. By conducting lab experiments, physical modeling, sports lab training, and active field trips, students absorb concepts through tactile interactions."
    }
  };

  const curriculumPoints = [
    {
      title: "The Modern Curriculum",
      desc: "At SIS, we ensure that the quality of education is of the highest standard. All our lesson plans, syllabus blueprints, and examinations are set by our extremely experienced Trust members, ensuring consistency and academic excellence."
    },
    {
      title: "Ideal Faculty Training",
      desc: "We understand that only when a child is comfortable and having fun while learning, the child is able to grasp subjects efficiently. We run a rigorous recruitment process followed by our regular Teacher Training Program, making sure the right teacher is in place for the right job at all times."
    },
    {
      title: "Modern Environment",
      desc: "Each child develops differently. At SIS, we provide our young learners with the ideal hilltop learning environment where they are not limited by anything. This includes comfortable, clean classroom infrastructure combined with smart boards and Edutech resources."
    }
  ];

  return (
    <div className="space-y-16">
      {/* 1. HEADER */}
      <section className="space-y-4">
        <span className="text-amber-500 font-display font-bold text-xs uppercase tracking-widest block">
          Our Philosophy
        </span>
        <h1 className="font-display font-extrabold text-3xl md:text-5xl text-slate-900 tracking-tight">
          Why Sunrise School?
        </h1>
        <p className="text-slate-500 text-sm md:text-base max-w-2xl leading-relaxed">
          We lay down a deep and strong foundation Year on Year for each student, enabling them to soar at greater heights and achieve limitless growth.
        </p>
      </section>

      {/* 2. THE V.A.R.K METHODOLOGY */}
      <section className="bg-white border border-slate-100 rounded-3xl p-8 md:p-10 shadow-premium space-y-8">
        <div className="space-y-2">
          <span className="text-amber-500 font-semibold text-xs tracking-wider uppercase block">Methodology</span>
          <h2 className="font-display font-bold text-2xl text-slate-900">The V.A.R.K Teaching Model</h2>
          <p className="text-slate-500 text-sm max-w-2xl leading-relaxed">
            Our vision has led us to adopt a V.A.R.K based teaching methodology that focuses on four distinctively inter-related learning mechanisms to stimulate the child's mind at a deep level.
          </p>
        </div>

        {/* Tab triggers */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {(Object.keys(varkItems) as Array<keyof typeof varkItems>).map((key) => {
            const item = varkItems[key];
            const Icon = item.icon;
            const isSelected = activeVark === key;
            return (
              <button
                key={key}
                onClick={() => setActiveVark(key)}
                className={`p-4 rounded-2xl border text-center transition-all flex flex-col items-center gap-2 font-display font-bold text-sm ${
                  isSelected 
                    ? "bg-amber-500 border-amber-500 text-slate-950 shadow-md"
                    : "bg-slate-50 hover:bg-slate-100 border-slate-100 text-slate-700"
                }`}
              >
                <Icon size={22} className={isSelected ? "text-slate-950" : "text-slate-500"} />
                <span>{item.title}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Content Display */}
        <div className={`border p-6 md:p-8 rounded-2xl flex flex-col md:flex-row gap-6 items-center bg-slate-50/50 ${varkItems[activeVark].border}`}>
          <div className={`p-4 rounded-full ${varkItems[activeVark].color} shrink-0`}>
            {React.createElement(varkItems[activeVark].icon, { size: 36 })}
          </div>
          <div className="space-y-2 text-center md:text-left">
            <h3 className="font-display font-bold text-lg text-slate-950">{varkItems[activeVark].title}</h3>
            <p className="text-slate-600 text-sm leading-relaxed max-w-3xl">{varkItems[activeVark].description}</p>
          </div>
        </div>
      </section>

      {/* 3. MODERN APPROACH DETAIL */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {curriculumPoints.map((pt, idx) => (
          <div key={idx} className="bg-white border border-slate-100 p-6 rounded-2xl shadow-premium space-y-3">
            <h3 className="font-display font-bold text-lg text-slate-900">{pt.title}</h3>
            <p className="text-slate-600 text-sm leading-relaxed">{pt.desc}</p>
          </div>
        ))}
      </section>

      {/* 4. SPORTS LAB & HOLISTIC SKILLS */}
      <section className="bg-slate-900 text-white rounded-3xl p-8 md:p-12 shadow-premium-lg border border-slate-800 grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="space-y-6">
          <div className="space-y-2">
            <span className="text-amber-400 font-display font-bold text-xs uppercase tracking-widest block">
              Beyond Academics
            </span>
            <h2 className="font-display font-extrabold text-2xl md:text-3xl text-white">
              The Sports Lab & Holistic Growth
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed">
              We understand that all work and no play makes our young learners stifled. Our extracurricular activities are designed to build health, active thinking, and focus.
            </p>
          </div>

          <div className="space-y-4">
            <div className="bg-slate-800/80 p-5 rounded-2xl border border-slate-800/60">
              <h4 className="font-display font-bold text-base text-amber-400 mb-2">The Sports Lab</h4>
              <p className="text-slate-300 text-xs md:text-sm leading-relaxed">
                A unique combination of traditional and new age sports is offered to the students to support physical coordination, discipline, and stamina.
              </p>
            </div>
            <div className="bg-slate-800/80 p-5 rounded-2xl border border-slate-800/60">
              <h4 className="font-display font-bold text-base text-amber-400 mb-2">Holistic Development</h4>
              <p className="text-slate-300 text-xs md:text-sm leading-relaxed">
                Students choose from a wide variety of hobby and soft-skill courses (classical dance, keyboard instruments, cursive writing, etc.) to discover hidden potential.
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-2xl overflow-hidden h-[340px] relative shadow-lg">
          <img 
            src="https://www.sunriseinternationalschool.co.in/static/images/carousel/2.jpg" 
            alt="Sports Day Celebrations" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent" />
          <div className="absolute bottom-4 left-4 text-white">
            <span className="font-display font-semibold text-xs text-amber-400 uppercase tracking-wider block">Physical Wellness</span>
            <span className="font-display font-bold text-base block mt-0.5">Campus Co-curriculars</span>
          </div>
        </div>
      </section>
    </div>
  );
}
