"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp, CheckCircle, School, ShieldCheck, Sparkles, Target, Compass, Award } from "lucide-react";

interface Facility {
  title: string;
  iconUrl: string;
}

interface AccordionItem {
  key: string;
  title: string;
  content: string;
}

export default function AboutPage() {
  const [activeAccordion, setActiveAccordion] = useState<string>("mission");

  const bulletPoints = [
    "Teacher : Student = 1 : 30",
    "Hundreds of Learners every year",
    "High Tech Student Management System",
    "Modern Learning Model (v.a.r.k)",
    "Situated at the top of the hill",
  ];

  const facilities: Facility[] = [
    {
      title: "Digital Classrooms",
      iconUrl: "https://sunriseinternationalschool.co.in/static/images/icons/digital-class.png",
    },
    {
      title: "Libraries",
      iconUrl: "https://sunriseinternationalschool.co.in/static/images/icons/library.png",
    },
    {
      title: "Science Laboratories",
      iconUrl: "https://sunriseinternationalschool.co.in/static/images/icons/science-lab.png",
    },
    {
      title: "Computer Rooms",
      iconUrl: "https://sunriseinternationalschool.co.in/static/images/icons/computer-lab.png",
    },
    {
      title: "Art & Craft workshops",
      iconUrl: "https://sunriseinternationalschool.co.in/static/images/icons/art.png",
    },
    {
      title: "Auditorium",
      iconUrl: "https://sunriseinternationalschool.co.in/static/images/icons/auditorium.png",
    },
    {
      title: "A.V Rooms",
      iconUrl: "https://sunriseinternationalschool.co.in/static/images/icons/av-room.png",
    },
    {
      title: "Music Room",
      iconUrl: "https://sunriseinternationalschool.co.in/static/images/icons/music-class.png",
    },
    {
      title: "Sports Center",
      iconUrl: "https://sunriseinternationalschool.co.in/static/images/icons/sports.png",
    },
    {
      title: "Yoga Room",
      iconUrl: "https://sunriseinternationalschool.co.in/static/images/icons/yoga.png",
    },
  ];

  const accordionItems: AccordionItem[] = [
    {
      key: "mission",
      title: "Sunrise Mission",
      content:
        "To cultivate an Environment that nourishes the need for the future generation of the country. To develop potential within each student to face challenges and keep up with Global Competence.",
    },
    {
      key: "vision",
      title: "Sunrise Vision",
      content:
        "To infill the society with Leaders that can remodel and change the face of the country. To enable Education as the backbone of every socio-economic aspect and influence within the Society.",
    },
    {
      key: "values",
      title: "Sunrise Values",
      content: "Disciplined, Creative, Adaptive, Responsible, Humble",
    },
  ];

  const toggleAccordion = (key: string) => {
    setActiveAccordion(activeAccordion === key ? "" : key);
  };

  return (
    <div className="space-y-16 md:space-y-24">
      
      {/* SECTION 1: A SCHOOL ON MOUNTAINS */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        <div className="lg:col-span-7 space-y-6">
          <div className="space-y-2">
            <span className="inline-flex items-center gap-1.5 text-amber-600 font-display font-bold text-xs uppercase tracking-widest bg-amber-50 px-3 py-1 rounded-md border border-amber-200">
              <School size={14} />
              Who We Are
            </span>
            <h1 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-[#0b2240] tracking-tight leading-tight">
              Sunrise International School
            </h1>
            <h2 className="font-display font-bold text-lg sm:text-xl text-amber-600">
              A School on Mountains.
            </h2>
          </div>

          <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
            Distinguished by its state of the art facilities, sunrise
            international school is committed at nurturing the future
            generation of INDIA. We inspire and direct every child's
            growth in the direction that makes them mark their way
            towards global leadership.
          </p>

          <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
            Situated at the apex of the surrounding region, SIS not just
            commands an inspiring view of the surrounding mountains but
            also sustains an environment of discipline, power and human
            friendliness.
          </p>

          {/* BULLET POINTS */}
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            {bulletPoints.map((point, index) => (
              <li key={index} className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-slate-800 bg-white p-3 rounded-xl border border-slate-200 shadow-xs">
                <CheckCircle size={17} className="text-amber-500 shrink-0" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* IMAGE WITH 20+ SERVICE TAG */}
        <div className="lg:col-span-5 relative flex justify-center">
          <div className="relative w-full max-w-[440px] aspect-[4/3] sm:aspect-square md:aspect-[4/3] lg:aspect-square rounded-3xl overflow-hidden shadow-school-lg border-4 border-white bg-white group">
            <img
              src="https://sunriseinternationalschool.co.in/static/images/about.png"
              alt="Sunrise Campus"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Tag Overlay */}
            <div className="absolute top-4 left-4 bg-[#07162c]/90 text-white p-4 sm:p-5 rounded-2xl backdrop-blur-md border border-amber-400/30 flex flex-col justify-center max-w-[160px] shadow-lg">
              <span className="font-display font-black text-3xl sm:text-4xl text-amber-400 block leading-none">20+</span>
              <span className="text-[10px] sm:text-[11px] text-slate-200 font-bold uppercase tracking-wider mt-2 leading-tight">
                Years of <em className="text-amber-400 not-italic">Educational Service</em>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: CAMPUS FACILITIES */}
      <section className="space-y-8 bg-white border border-slate-200/80 p-8 sm:p-12 rounded-3xl shadow-school">
        <div className="text-center space-y-2">
          <span className="inline-flex items-center gap-1.5 text-amber-600 font-display font-bold text-xs uppercase tracking-widest bg-amber-50 px-3 py-1 rounded-md border border-amber-200">
            <Sparkles size={14} />
            School Amenities
          </span>
          <h2 className="font-display font-black text-2xl sm:text-3xl text-[#0b2240] tracking-tight">
            Campus Facilities & Infrastructure
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto">
            SIS is committed towards the holistic development of every student.
          </p>
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
          {facilities.map((fac, idx) => (
            <div 
              key={idx} 
              className="bg-slate-50 hover:bg-white hover:shadow-school border border-slate-200/70 hover:border-amber-400/50 rounded-2xl p-5 flex flex-col items-center text-center transition-all duration-300 group hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-3.5 group-hover:scale-110 transition-transform shadow-xs">
                <img 
                  src={fac.iconUrl} 
                  alt={fac.title} 
                  className="w-8 h-8 object-contain"
                />
              </div>
              <h3 className="font-display font-bold text-xs sm:text-sm text-[#0b2240] tracking-tight">
                {fac.title}
              </h3>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 3: INTEGRATED LEARNING & ACCORDION */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Left Side Illustration */}
        <div className="lg:col-span-6 flex justify-center">
          <div className="w-full max-w-[460px] aspect-[4/3] rounded-3xl overflow-hidden shadow-school-lg bg-white border-4 border-white">
            <img
              src="https://sunriseinternationalschool.co.in/static/images/about-mission.png"
              alt="Integrated Learning"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right Side Content + Accordion */}
        <div className="lg:col-span-6 space-y-6">
          <div className="space-y-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            <p>
              Our scholastic record, innovative learning methods and
              strong commitment to delivering quality through integrity
              has helped us scale heights that few have managed in the
              field of education.
            </p>
            <p>
              As a result, SIS today is a trusted name and an acknowledged
              leader in the collective effort to shape the future of our
              children and the nation.
            </p>
            <p className="font-bold text-[#0b2240]">
              We welcome you to join the SIS family and to give your child
              the best when it comes to an integrated, and empowering
              learning experience.
            </p>
          </div>

          {/* Accordion Component */}
          <div className="space-y-3">
            {accordionItems.map((item) => {
              const isExpanded = activeAccordion === item.key;
              return (
                <div 
                  key={item.key} 
                  className="border border-slate-200/80 rounded-2xl overflow-hidden bg-white shadow-xs transition-all"
                >
                  <button
                    onClick={() => toggleAccordion(item.key)}
                    className="w-full flex items-center justify-between p-4 text-left font-display font-bold text-sm sm:text-base text-[#0b2240] bg-slate-50/80 hover:bg-slate-100 transition-colors"
                  >
                    <span className="flex items-center gap-2">
                      <ShieldCheck size={18} className="text-amber-600" />
                      {item.title}
                    </span>
                    {isExpanded ? (
                      <ChevronUp size={18} className="text-amber-600" />
                    ) : (
                      <ChevronDown size={18} className="text-slate-400" />
                    )}
                  </button>

                  <div 
                    className={`transition-all duration-300 ease-in-out overflow-hidden ${
                      isExpanded ? "max-h-[240px] border-t border-slate-100 p-4" : "max-h-0"
                    }`}
                  >
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed whitespace-pre-line bg-amber-50/50 p-3.5 rounded-xl border border-amber-200/50 font-medium">
                      {item.content}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 4: GOALS FOR EACH STUDENT */}
      <section className="space-y-12">
        <div className="text-center space-y-2">
          <span className="inline-flex items-center gap-1.5 text-amber-600 font-display font-bold text-xs uppercase tracking-widest bg-amber-50 px-3 py-1 rounded-md border border-amber-200">
            <Target size={14} />
            Core Objectives
          </span>
          <h2 className="font-display font-black text-2xl sm:text-3xl md:text-4xl text-[#0b2240] tracking-tight">
            Goals For Each Student
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto">
            We strive to create better individuals that contribute towards the growth of this country. Our students excel as following :
          </p>
        </div>

        {/* alternating rows */}
        <div className="space-y-12">
          
          {/* Row 1: Creative Thinkers (Image Left, Text Right) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-school">
            <div className="lg:col-span-5 flex justify-center order-1 lg:order-1">
              <div className="w-full max-w-[380px] aspect-[4/3] rounded-2xl overflow-hidden shadow-sm bg-slate-50 border border-slate-100">
                <img
                  src="https://sunriseinternationalschool.co.in/static/images/about-thinkers.png"
                  alt="Creative Thinkers"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="lg:col-span-7 space-y-3 order-2 lg:order-2">
              <h3 className="font-display font-extrabold text-xl sm:text-2xl text-[#0b2240] flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-amber-500" />
                <span>Creative Thinkers</span>
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed">
                With every New concept comes a new realization that calls for an
                improved understanding and adaptation. We drive students to think
                in terms of real life adaptations of the concept and how can there
                be improved versions of the same concept. Students are collectively
                pushed to try and link the concepts to various day to day
                activities. This innovative way of learning helps students use their
                IMAGINATION and ANALYTICAL ABILITY that opens up new possibilities
                and presents various alternative solutions to an otherwise mundane
                approach of learning.
              </p>
            </div>
          </div>

          {/* Row 2: Excellent Communicators (Text Left, Image Right) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-school">
            <div className="lg:col-span-7 space-y-3 order-2 lg:order-1">
              <h3 className="font-display font-extrabold text-xl sm:text-2xl text-[#0b2240] flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-amber-500" />
                <span>Excellent Communicators</span>
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed">
                Listening is a fine art and so we always insist our students to
                listen thoroughly and carefully. Our students are encouraged to
                analyse and understand before they speak. Our students are proactive
                and are trained to speak firmly and confidently, ask questions without
                hesitation and irrespective of the audience.
              </p>
            </div>
            <div className="lg:col-span-5 flex justify-center order-1 lg:order-2">
              <div className="w-full max-w-[380px] aspect-[4/3] rounded-2xl overflow-hidden shadow-sm bg-slate-50 border border-slate-100">
                <img
                  src="https://sunriseinternationalschool.co.in/static/images/about-communication.png"
                  alt="Excellent Communicators"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Row 3: Global Leaders (Image Left, Text Right) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-school">
            <div className="lg:col-span-5 flex justify-center order-1 lg:order-1">
              <div className="w-full max-w-[380px] aspect-[4/3] rounded-2xl overflow-hidden shadow-sm bg-slate-50 border border-slate-100">
                <img
                  src="https://sunriseinternationalschool.co.in/static/images/about-leaders.png"
                  alt="Global Leaders"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="lg:col-span-7 space-y-3 order-2 lg:order-2">
              <h3 className="font-display font-extrabold text-xl sm:text-2xl text-[#0b2240] flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-amber-500" />
                <span>Global Leaders</span>
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed">
                Discipline is the forte of every SUNRISE student. Every student is
                armed with a strong sense of self discipline, ethics and morals that
                enable them to sail through cross winds easily and effectively. We set
                short term as well as long term goals for each student to mark their
                development and the parent-Teacher relationship plays a pivotal role in
                the success of the child. Over the course of their schooling years,
                we lay a concrete foundation that awakens the students towards their
                ultimate nature.
              </p>
              <p className="text-xs sm:text-sm font-bold text-[#0b2240]">
                Our students enter the next phase of their life better than the rest as;
              </p>
            </div>
          </div>

          {/* Row 4: Modern Citizens (Text Left, Image Right) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-school">
            <div className="lg:col-span-7 space-y-3 order-2 lg:order-1">
              <h3 className="font-display font-extrabold text-xl sm:text-2xl text-[#0b2240] flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-amber-500" />
                <span>Modern Citizens</span>
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed">
                Today every society demands individuals that are tech-oriented and can
                keep up with the rapid change. With high-tech learning and
                understanding how technology is shaping the future, we open up a wide
                spectrum for our students so they can live up to the necessary awareness
                required in their chosen field and even work on inventing better forms
                of technology.
              </p>
            </div>
            <div className="lg:col-span-5 flex justify-center order-1 lg:order-2">
              <div className="w-full max-w-[380px] aspect-[4/3] rounded-2xl overflow-hidden shadow-sm bg-slate-50 border border-slate-100">
                <img
                  src="https://sunriseinternationalschool.co.in/static/images/about-citizens.png"
                  alt="Modern Citizens"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Row 5: Humble Beings (Image Left, Text Right) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-school">
            <div className="lg:col-span-5 flex justify-center order-1 lg:order-1">
              <div className="w-full max-w-[380px] aspect-[4/3] rounded-2xl overflow-hidden shadow-sm bg-slate-50 border border-slate-100">
                <img
                  src="https://sunriseinternationalschool.co.in/static/images/about-humble.png"
                  alt="Humble Beings"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="lg:col-span-7 space-y-3 order-2 lg:order-2">
              <h3 className="font-display font-extrabold text-xl sm:text-2xl text-[#0b2240] flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-amber-500" />
                <span>Humble Beings</span>
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed">
                Knowledge is the source of all Power in the world and yet the world
                thrives heavily on subtler Human emotions. Kindness and humility are
                the living forces within our school premises. Our students are bestowed
                with qualities like gratitude and respect. We believe that only a
                humble and simple mind can be in a constant mode of learning and
                absorbing. We conduct interactive, playful and friendly sessions where
                students engage with fellow learners and grow collectively. Faith and
                Wisdom go hand in hand, and only through humility our students are able
                to broaden their intellect and explore beyond their capabilities.
              </p>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}

