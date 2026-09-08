"use client";

import React from "react";
import Link from "next/link";
import { Home, Sparkles, BookOpen, GraduationCap, School, ShieldCheck, Trophy, CheckCircle, ChevronRight } from "lucide-react";

interface VarkItem {
  title: string;
  iconUrl: string;
}

interface FacultyItem {
  title: string;
  iconUrl: string;
  description: string;
}

interface CardItem {
  title: string;
  iconUrl: string;
  description: string;
}

export default function WhySunrisePage() {
  const varkItems: VarkItem[] = [
    {
      title: "Visual",
      iconUrl: "https://sunriseinternationalschool.co.in/static/images/icons/visual.png",
    },
    {
      title: "Auditory",
      iconUrl: "https://sunriseinternationalschool.co.in/static/images/icons/auditory.png",
    },
    {
      title: "Reading",
      iconUrl: "https://sunriseinternationalschool.co.in/static/images/icons/reading.png",
    },
    {
      title: "Kinesthetic",
      iconUrl: "https://sunriseinternationalschool.co.in/static/images/icons/kinesthetic.png",
    },
  ];

  const facultyItems: FacultyItem[] = [
    {
      title: "Recruitment",
      iconUrl: "https://sunriseinternationalschool.co.in/static/images/icons/recruitment.png",
      description: "We strive to get the best teachers in our school",
    },
    {
      title: "Our Teacher Training Program",
      iconUrl: "https://sunriseinternationalschool.co.in/static/images/icons/teacher-training.png",
      description: "All the teachers have to undergo rigorous training",
    },
  ];

  const environmentItems: CardItem[] = [
    {
      title: "School Infrastructure",
      iconUrl: "https://sunriseinternationalschool.co.in/static/images/icons/school.png",
      description: "Students should be comfortable while learning",
    },
    {
      title: "Classroom Technology",
      iconUrl: "https://sunriseinternationalschool.co.in/static/images/icons/classroom.png",
      description: "We provide access to technology from a young age",
    },
    {
      title: "Edutech",
      iconUrl: "https://sunriseinternationalschool.co.in/static/images/icons/edutech.png",
      description: "Encouraging the effective use of Technology in Education",
    },
  ];

  const skillsItems: CardItem[] = [
    {
      title: "The Sports Lab",
      iconUrl: "https://sunriseinternationalschool.co.in/static/images/icons/sports-trophy.png",
      description: "A combination of traditional and new age sport are offered to the students",
    },
    {
      title: "Holistic Development",
      iconUrl: "https://sunriseinternationalschool.co.in/static/images/icons/development.png",
      description: "Students can choose from a wide variety of holistic hobby classes",
    },
  ];

  return (
    <div className="space-y-16 md:space-y-24">
      {/* HERO BANNER SECTION */}
      <section className="relative h-64 md:h-72 rounded-3xl overflow-hidden shadow-school-lg border border-slate-200/80">
        <img
          src="https://www.sunriseinternationalschool.co.in/static/images/carousel/banner.jpg"
          alt="Why Sunrise Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#07162c] via-[#0b2240]/70 to-transparent flex flex-col justify-end p-8 md:p-12 text-white">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 backdrop-blur-md border border-amber-400/40 text-amber-300 text-xs font-bold uppercase tracking-wider mb-2 w-fit">
            <Sparkles size={13} />
            <span>Academic Philosophy</span>
          </div>
          <h1 className="font-display font-black text-3xl sm:text-4xl md:text-5xl mb-3 tracking-tight">
            Why Sunrise International School
          </h1>
          <ol className="flex items-center gap-2 text-xs font-semibold text-slate-300">
            <li>
              <Link href="/" className="hover:text-amber-400 flex items-center gap-1 transition-colors">
                <Home size={14} />
                <span>Home</span>
              </Link>
            </li>
            <li className="text-amber-500">›</li>
            <li className="text-amber-400 font-bold">Why Choose Us</li>
          </ol>
        </div>
      </section>

      {/* INTRODUCTION BLOCK */}
      <section className="bg-white border border-slate-200/80 p-8 md:p-10 rounded-3xl shadow-school relative overflow-hidden">
        <div className="absolute top-0 left-0 w-2 h-full bg-amber-500" />
        <p className="text-slate-700 leading-relaxed text-sm sm:text-base md:text-lg text-center max-w-4xl mx-auto italic font-medium">
          We lay down a deep and strong foundation <span className="text-amber-600 font-bold uppercase">YEAR on YEAR</span> for
          each student that enables them to soar at greater heights.
          At Sunrise International School your child develops the
          potential and the will to achieve limitless <span className="text-amber-600 font-bold uppercase">GROWTH</span>. We push
          our students to think collectively for the betterment of the
          self and those around, which makes the <span className="text-amber-600 font-bold uppercase">SUNRISE</span> family a self
          sustaining yet ever growing community of problem solvers.
        </p>
      </section>

      {/* V.A.R.K TEACHING MODEL */}
      <section className="space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Grid: V.A.R.K Elements */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-4">
              {varkItems.map((item, idx) => (
                <div 
                  key={idx} 
                  className="bg-white border border-slate-200/80 p-6 rounded-2xl shadow-school text-center flex flex-col items-center group hover:shadow-school-lg hover:-translate-y-1 transition-all"
                >
                  <div className="w-16 h-16 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-3.5 group-hover:scale-110 transition-transform">
                    <img 
                      src={item.iconUrl} 
                      alt={item.title} 
                      className="w-9 h-9 object-contain"
                    />
                  </div>
                  <h3 className="font-display font-extrabold text-base text-[#0b2240] group-hover:text-amber-600 transition-colors">
                    {item.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>

          {/* Right text description */}
          <div className="lg:col-span-6 space-y-4 order-1 lg:order-2">
            <span className="inline-flex items-center gap-1.5 text-amber-600 font-display font-bold text-xs uppercase tracking-widest bg-amber-50 px-3 py-1 rounded-md border border-amber-200">
              <BookOpen size={14} />
              Teaching Methodology
            </span>
            <h2 className="font-display font-black text-2xl sm:text-3xl md:text-4xl text-[#0b2240] tracking-tight">
              A Modern Approach to Learning
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Our vision has led us to adopt a V.A.R.K based teaching
              methodology that focuses on 4 distinctively inter-related
              learning mechanisms. Our teaching model enables us to
              stimulate the brainchild at a deep rooted level.
            </p>
            <p className="text-slate-800 text-sm sm:text-base leading-relaxed font-semibold border-l-4 border-amber-500 pl-4 bg-amber-50/50 py-3.5 rounded-r-xl border border-amber-200/40">
              Visual learners will be able to remember things they see
              better than the things they hear. Similarly, kinesthetics
              enables students to gain knowledge by experiencing it.
            </p>
          </div>
        </div>

        {/* VARK Pie Chart centered */}
        <div className="flex justify-center pt-4">
          <div className="w-full max-w-[650px] rounded-3xl overflow-hidden shadow-school-lg border-4 border-white bg-white p-6">
            <img
              src="https://sunriseinternationalschool.co.in/static/images/why-choose-us-pie.png"
              alt="V.A.R.K. Pie Chart"
              className="w-full h-auto object-contain mx-auto"
            />
          </div>
        </div>
      </section>

      {/* THE MODERN CURRICULUM */}
      <section className="bg-gradient-to-br from-[#0b2240] to-[#07162c] text-white rounded-3xl p-8 md:p-12 shadow-school-lg border border-slate-800 text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-wider">
          <GraduationCap size={15} />
          <span>Academic Excellence</span>
        </div>
        <h2 className="font-display font-black text-2xl sm:text-3xl md:text-4xl text-white tracking-tight">
          The Modern Curriculum
        </h2>
        <p className="text-slate-300 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed">
          At SIS, we ensure that the quality of education is of the
          highest quality in our School. All our Lesson plans and
          exams are set by our extremely experienced Trust members.
        </p>
      </section>

      {/* THE RIGHT FACULTY */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Left explanation */}
        <div className="lg:col-span-6 space-y-4">
          <span className="inline-flex items-center gap-1.5 text-amber-600 font-display font-bold text-xs uppercase tracking-widest bg-amber-50 px-3 py-1 rounded-md border border-amber-200">
            <ShieldCheck size={14} />
            Faculty Standards
          </span>
          <h2 className="font-display font-black text-2xl sm:text-3xl md:text-4xl text-[#0b2240] tracking-tight">
            The Right Faculty
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            At Sunrise International School, we take our teaching
            seriously and believe that the most important aspect of a
            school is the quality of their faculty. We understand that
            only when a child is comfortable and having fun while
            learning, the child is able to grasp the subject much more
            efficiently. We make sure it is the right person for the
            right job at all times. Hence we employ a two-pronged
            approach to get best teachers for our students.
          </p>
        </div>

        {/* Right Recruitment / Teacher training grid */}
        <div className="lg:col-span-6">
          <div className="space-y-4">
            {facultyItems.map((item, idx) => (
              <div 
                key={idx} 
                className="bg-white border border-slate-200/80 p-6 rounded-2xl shadow-school flex items-start gap-4 hover:shadow-school-lg hover:-translate-y-0.5 transition-all"
              >
                <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0">
                  <img 
                    src={item.iconUrl} 
                    alt={item.title} 
                    className="w-7 h-7 object-contain"
                  />
                </div>
                <div className="space-y-1">
                  <h3 className="font-display font-extrabold text-base text-[#0b2240]">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THE MODERN ENVIRONMENT */}
      <section className="space-y-8">
        <div className="text-center space-y-2">
          <span className="inline-flex items-center gap-1.5 text-amber-600 font-display font-bold text-xs uppercase tracking-widest bg-amber-50 px-3 py-1 rounded-md border border-amber-200">
            <School size={14} />
            Academic Environment
          </span>
          <h2 className="font-display font-black text-2xl sm:text-3xl md:text-4xl text-[#0b2240] tracking-tight">
            The Modern Environment
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto">
            Each child develops differently. At SIS, we understand this perfectly and provide our young learners with the ideal learning environment where they are not limited by anything in their endeavours to learn.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {environmentItems.map((item, idx) => (
            <div 
              key={idx} 
              className="bg-white border border-slate-200/80 p-8 rounded-3xl shadow-school text-center flex flex-col items-center hover:shadow-school-lg hover:-translate-y-1 transition-all group"
            >
              <div className="w-16 h-16 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform shadow-xs">
                <img 
                  src={item.iconUrl} 
                  alt={item.title} 
                  className="w-9 h-9 object-contain"
                />
              </div>
              <h3 className="font-display font-extrabold text-lg text-[#0b2240] mb-2 group-hover:text-amber-600 transition-colors">
                {item.title}
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* THE MODERN SKILLS */}
      <section className="space-y-8">
        <div className="text-center space-y-2">
          <span className="inline-flex items-center gap-1.5 text-amber-600 font-display font-bold text-xs uppercase tracking-widest bg-amber-50 px-3 py-1 rounded-md border border-amber-200">
            <Trophy size={14} />
            Holistic Growth
          </span>
          <h2 className="font-display font-black text-2xl sm:text-3xl md:text-4xl text-[#0b2240] tracking-tight">
            The Modern Skills
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto">
            We understand that all work and no play makes our young learners stifled and our extracurricular activities are aimed at addressing this very factor of school life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {skillsItems.map((item, idx) => (
            <div 
              key={idx} 
              className="bg-white border border-slate-200/80 p-8 rounded-3xl shadow-school text-center flex flex-col items-center hover:shadow-school-lg hover:-translate-y-1 transition-all group"
            >
              <div className="w-16 h-16 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform shadow-xs">
                <img 
                  src={item.iconUrl} 
                  alt={item.title} 
                  className="w-9 h-9 object-contain"
                />
              </div>
              <h3 className="font-display font-extrabold text-lg text-[#0b2240] mb-2 group-hover:text-amber-600 transition-colors">
                {item.title}
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}

