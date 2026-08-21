"use client";

import React from "react";
import { BookOpen, ShieldCheck, Heart, Sparkles, Star, Milestone, Compass } from "lucide-react";

export default function AboutPage() {
  const stats = [
    { value: "1 : 30", label: "Teacher : Student Ratio" },
    { value: "20+", label: "Years of Educational Service" },
    { value: "100%", label: "Holistic Development Focus" }
  ];

  const campusFacilities = [
    "Digital Classrooms",
    "Libraries",
    "Science Laboratories",
    "Computer Rooms",
    "Art & Craft workshops",
    "Auditorium",
    "A.V Rooms",
    "Music Room",
    "Sports Center",
    "Yoga Room"
  ];

  const studentGoals = [
    {
      title: "Creative Thinkers",
      description: "With every New concept comes a new realization that calls for an improved understanding and adaptation. We drive students to think in terms of real life adaptations of the concept and how can there be improved versions of the same concept. Students are collectively pushed to try and link the concepts to various day to day activities. This innovative way of learning helps students use their IMAGINATION and ANALYTICAL ABILITY that opens up new possibilities and presents various alternative solutions to an otherwise mundane approach of learning."
    },
    {
      title: "Excellent Communicators",
      description: "Listening is a fine art and so we always insist our students to listen thoroughly and carefully. Our students are encouraged to analyse and understand before they speak. Our students are proactive and are trained to speak firmly and confidently, ask questions without hesitation and irrespective of the audience."
    },
    {
      title: "Global Leaders",
      description: "Discipline is the forte of every SUNRISE student. Every student is armed with a strong sense of self discipline, ethics and morals that enable them to sail through cross winds easily and effectively. We set short term as well as long term goals for each student to mark their development and the parent-Teacher relationship plays a pivotal role in the success of the child. Over the course of their schooling years, we lay a concrete foundation that awakens the students towards their ultimate nature."
    },
    {
      title: "Modern Citizens",
      description: "Today every society demands individuals that are tech-oriented and can keep up with the rapid change. With high-tech learning and understanding how technology is shaping the future, we open up a wide spectrum for our students so they can live up to the necessary awareness required in the their chosen field and even work on inventing better forms of technology."
    },
    {
      title: "Humble Beings",
      description: "Knowledge is the source of all Power in the world and yet the world thrives heavily on subtler Human emotions. Kindness and humility are the living forces within our school premises. Our students are bestowed with qualities like gratitude and respect. We believe that only a humble and simple mind can be in a constant mode of learning and absorbing. We conduct interactive, playful and friendly sessions where students engage with fellow learners and grow collectively. Faith and Wisdom go hand in hand, and only through humility our students are able to broaden their intellect and explore beyond their capabilities."
    }
  ];

  return (
    <div className="space-y-16">
      {/* 1. HEADER */}
      <section className="space-y-4">
        <span className="text-amber-500 font-display font-bold text-xs uppercase tracking-widest block">
          Who We Are
        </span>
        <h1 className="font-display font-extrabold text-3xl md:text-5xl text-slate-900 tracking-tight">
          About Sunrise School
        </h1>
        <p className="text-slate-500 text-base md:text-lg max-w-3xl leading-relaxed">
          Distinguished by its state of the art facilities, Sunrise International School is committed to nurturing the future generation of India.
        </p>
      </section>

      {/* 2. OVERVIEW */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7 space-y-6">
          <h2 className="font-display font-bold text-2xl text-slate-900">
            A School on Mountains
          </h2>
          <p className="text-slate-600 leading-relaxed text-sm md:text-base">
            Situated at the apex of the surrounding region, SIS not just commands an inspiring view of the surrounding mountains but also sustains an environment of discipline, power, and human friendliness.
          </p>
          <p className="text-slate-600 leading-relaxed text-sm md:text-base">
            Our scholastic record, innovative learning methods, and strong commitment to delivering quality through integrity has helped us scale heights that few have managed in the field of education. As a result, SIS today is a trusted name and an acknowledged leader in the collective effort to shape the future of our children and the nation.
          </p>
          
          <div className="grid grid-cols-3 gap-4 pt-4">
            {stats.map((stat, i) => (
              <div key={i} className="bg-white border border-slate-100 p-4 rounded-xl shadow-sm text-center">
                <span className="font-display font-black text-amber-500 text-xl md:text-2xl block">{stat.value}</span>
                <span className="text-[10px] md:text-xs font-semibold text-slate-400 uppercase tracking-wider block mt-1">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="lg:col-span-5 h-[340px] rounded-2xl overflow-hidden shadow-premium relative">
          <img 
            src="https://www.sunriseinternationalschool.co.in/static/images/carousel/3.jpg" 
            alt="Campus Peak View" 
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* 3. MISSION, VISION, VALUES */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Mission */}
        <div className="bg-white rounded-2xl border border-slate-100 p-6 shadow-premium relative overflow-hidden group">
          <div className="p-3 bg-amber-500/10 text-amber-600 rounded-xl w-fit mb-4">
            <Compass size={24} />
          </div>
          <h3 className="font-display font-bold text-lg text-slate-900 mb-2">Sunrise Mission</h3>
          <p className="text-slate-600 text-sm leading-relaxed">
            To cultivate an environment that nourishes the needs of the future generation of the country. To develop potential within each student to face challenges and keep up with Global Competence.
          </p>
        </div>

        {/* Vision */}
        <div className="bg-white rounded-2xl border border-slate-100 p-6 shadow-premium relative overflow-hidden group">
          <div className="p-3 bg-amber-500/10 text-amber-600 rounded-xl w-fit mb-4">
            <Sparkles size={24} />
          </div>
          <h3 className="font-display font-bold text-lg text-slate-900 mb-2">Sunrise Vision</h3>
          <p className="text-slate-600 text-sm leading-relaxed">
            To infill the society with leaders that can remodel and change the face of the country. To enable education as the backbone of every socio-economic aspect and influence within the society.
          </p>
        </div>

        {/* Values */}
        <div className="bg-white rounded-2xl border border-slate-100 p-6 shadow-premium relative overflow-hidden group">
          <div className="p-3 bg-amber-500/10 text-amber-600 rounded-xl w-fit mb-4">
            <Star size={24} />
          </div>
          <h3 className="font-display font-bold text-lg text-slate-900 mb-2">Sunrise Values</h3>
          <p className="text-slate-600 text-sm leading-relaxed mb-4">
            We hold ourselves to high ethical and operational benchmarks:
          </p>
          <div className="flex flex-wrap gap-2">
            {["Disciplined", "Creative", "Adaptive", "Responsible", "Humble"].map((val, i) => (
              <span key={i} className="text-xs font-semibold px-2.5 py-1 bg-slate-100 text-slate-700 rounded-lg">
                {val}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CAMPUS FACILITIES */}
      <section className="bg-slate-900 text-white rounded-3xl p-8 md:p-12 shadow-premium-lg border border-slate-800 space-y-6">
        <div className="space-y-2">
          <span className="text-amber-400 font-display font-bold text-xs uppercase tracking-widest block">
            School Facilities
          </span>
          <h2 className="font-display font-extrabold text-2xl md:text-3xl text-white">
            State-Of-The-Art Campus Facilities
          </h2>
          <p className="text-slate-400 text-sm max-w-2xl leading-relaxed">
            SIS is committed to the holistic development of every student. Our infrastructure ensures support for science, computing, arts, music, and sports.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {campusFacilities.map((fac, idx) => (
            <div key={idx} className="bg-slate-800/60 border border-slate-800 p-4 rounded-xl flex flex-col justify-center text-center">
              <span className="text-xs font-semibold text-slate-200">{fac}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 5. GOALS FOR STUDENTS */}
      <section className="space-y-8">
        <div className="space-y-2">
          <span className="text-amber-500 font-display font-bold text-xs uppercase tracking-widest block">
            Core Objectives
          </span>
          <h2 className="font-display font-extrabold text-2xl md:text-3xl text-slate-900">
            Goals For Each Student
          </h2>
          <p className="text-slate-500 text-sm max-w-2xl leading-relaxed">
            We strive to create better individuals that contribute towards the growth of this country. Our students excel as:
          </p>
        </div>

        <div className="space-y-4">
          {studentGoals.map((goal, idx) => (
            <div key={idx} className="bg-white rounded-2xl border border-slate-100 p-6 md:p-8 shadow-premium">
              <h3 className="font-display font-bold text-lg text-slate-900 mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-500" />
                <span>{goal.title}</span>
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">{goal.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
