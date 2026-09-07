"use client";

import React from "react";
import Link from "next/link";
import { Home } from "lucide-react";

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
    <div className="space-y-16">
      {/* HERO BANNER SECTION */}
      <section className="relative h-60 rounded-3xl overflow-hidden shadow-premium-lg">
        <img
          src="https://www.sunriseinternationalschool.co.in/static/images/carousel/banner.jpg"
          alt="Why Sunrise Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-950/60 flex flex-col justify-end p-8 md:p-12 text-white">
          <h1 className="font-display font-black text-2xl md:text-4xl mb-3 tracking-tight">
            Why Sunrise International School
          </h1>
          <ol className="flex items-center gap-2 text-xs font-semibold text-slate-300">
            <li>
              <Link href="/" className="hover:text-amber-500 flex items-center gap-1">
                <Home size={14} />
              </Link>
            </li>
            <li>/</li>
            <li className="text-white">Why Us</li>
          </ol>
        </div>
      </section>

      {/* INTRODUCTION BLOCK */}
      <section className="bg-white border border-slate-100 p-6 md:p-8 rounded-3xl shadow-premium">
        <p className="text-slate-700 leading-relaxed text-sm md:text-base text-center max-w-4xl mx-auto italic font-medium">
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
      <section className="space-y-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Grid: V.A.R.K Elements */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-4">
              {varkItems.map((item, idx) => (
                <div 
                  key={idx} 
                  className="bg-white border border-slate-100 p-5 rounded-2xl shadow-sm text-center flex flex-col items-center group hover:shadow-premium transition-all"
                >
                  <div className="w-14 h-14 rounded-full bg-amber-500/10 flex items-center justify-center mb-3">
                    <img 
                      src={item.iconUrl} 
                      alt={item.title} 
                      className="w-8 h-8 object-contain"
                    />
                  </div>
                  <h5 className="font-display font-bold text-sm text-slate-900">
                    {item.title}
                  </h5>
                </div>
              ))}
            </div>
          </div>

          {/* Right text description */}
          <div className="lg:col-span-6 space-y-4 order-1 lg:order-2">
            <span className="text-amber-500 font-semibold text-xs tracking-wider uppercase block">Methodology</span>
            <h2 className="font-display font-black text-2xl md:text-3xl text-slate-900 tracking-tight">
              A Modern Approach
            </h2>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
              Our vision has led us to adopt a V.A.R.K based teaching
              methodology that focuses on 4 distinctively inter-related
              learning mechanisms. Our teaching model enables us to
              stimulate the brainchild at a deep rooted level.
            </p>
            <p className="text-slate-800 text-sm md:text-base leading-relaxed font-bold border-l-4 border-amber-500 pl-4 bg-slate-50 py-3 rounded-r-xl">
              Visual learners will be able to remember things they see
              better than the things they hear. Similarly, kinesthetics
              enables students to gain knowledge by experiencing it.
            </p>
          </div>
        </div>

        {/* VARK Pie Chart centered */}
        <div className="flex justify-center pt-4">
          <div className="w-full max-w-[650px] rounded-3xl overflow-hidden shadow-premium border border-slate-100 bg-white p-4">
            <img
              src="https://sunriseinternationalschool.co.in/static/images/why-choose-us-pie.png"
              alt="V.A.R.K. Pie Chart"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </section>

      <hr className="border-slate-200" />

      {/* THE MODERN CURRICULUM */}
      <section className="bg-white border border-slate-100 rounded-3xl p-8 md:p-12 shadow-premium text-center space-y-4">
        <h2 className="font-display font-black text-2xl md:text-3xl text-slate-900 tracking-tight">
          The Modern Curriculum
        </h2>
        <p className="text-slate-600 text-sm md:text-base max-w-3xl mx-auto leading-relaxed">
          At SIS, we ensure that the quality of education is of the
          highest quality in our School. All our Lesson plans and
          exams are set by our extremely experienced Trust members.
        </p>
      </section>

      <hr className="border-slate-200" />

      {/* THE RIGHT FACULTY */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Left explanation */}
        <div className="lg:col-span-6 space-y-4">
          <span className="text-amber-500 font-semibold text-xs tracking-wider uppercase block">Core Quality</span>
          <h2 className="font-display font-black text-2xl md:text-3xl text-slate-900 tracking-tight">
            The Right Faculty
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
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
                className="bg-white border border-slate-100 p-5 rounded-2xl shadow-sm flex items-start gap-4 hover:shadow-premium transition-all"
              >
                <div className="w-12 h-12 rounded-full bg-amber-500/10 flex items-center justify-center shrink-0">
                  <img 
                    src={item.iconUrl} 
                    alt={item.title} 
                    className="w-6 h-6 object-contain"
                  />
                </div>
                <div className="space-y-1">
                  <h4 className="font-display font-bold text-sm md:text-base text-slate-900">
                    {item.title}
                  </h4>
                  <p className="text-slate-500 text-xs md:text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="border-slate-200" />

      {/* THE MODERN ENVIRONMENT */}
      <section className="space-y-8">
        <div className="text-center space-y-2">
          <span className="text-amber-500 font-display font-bold text-xs uppercase tracking-widest block">
            Academics Space
          </span>
          <h2 className="font-display font-black text-2xl md:text-3xl text-slate-900 tracking-tight">
            The Modern Environment
          </h2>
          <p className="text-slate-500 text-sm md:text-base max-w-2xl mx-auto">
            Each child develops differently. At SIS, we understand this perfectly and provide our young learners with the ideal learning environment where they are not limited by anything in their endeavours to learn.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {environmentItems.map((item, idx) => (
            <div 
              key={idx} 
              className="bg-white border border-slate-100 p-6 rounded-2xl shadow-sm text-center flex flex-col items-center hover:shadow-premium transition-all group"
            >
              <div className="w-14 h-14 rounded-full bg-amber-500/10 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                <img 
                  src={item.iconUrl} 
                  alt={item.title} 
                  className="w-8 h-8 object-contain"
                />
              </div>
              <h4 className="font-display font-bold text-sm md:text-base text-slate-900 mb-2">
                {item.title}
              </h4>
              <p className="text-slate-500 text-xs md:text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <hr className="border-slate-200" />

      {/* THE MODERN SKILLS */}
      <section className="space-y-8">
        <div className="text-center space-y-2">
          <span className="text-amber-500 font-display font-bold text-xs uppercase tracking-widest block">
            Extracurricular
          </span>
          <h2 className="font-display font-black text-2xl md:text-3xl text-slate-900 tracking-tight">
            The Modern Skills
          </h2>
          <p className="text-slate-500 text-sm md:text-base max-w-2xl mx-auto">
            We understand that all work and no play makes our young learners stifled and our extracurricular activities are aimed at addressing this very factor of school life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {skillsItems.map((item, idx) => (
            <div 
              key={idx} 
              className="bg-white border border-slate-100 p-6 rounded-2xl shadow-sm text-center flex flex-col items-center hover:shadow-premium transition-all group"
            >
              <div className="w-14 h-14 rounded-full bg-amber-500/10 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                <img 
                  src={item.iconUrl} 
                  alt={item.title} 
                  className="w-8 h-8 object-contain"
                />
              </div>
              <h4 className="font-display font-bold text-sm md:text-base text-slate-900 mb-2">
                {item.title}
              </h4>
              <p className="text-slate-500 text-xs md:text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
