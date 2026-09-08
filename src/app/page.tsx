"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { 
  ArrowRight, 
  School, 
  Laptop, 
  Award, 
  Shield, 
  CheckCircle, 
  ChevronLeft, 
  ChevronRight,
  Bell,
  GraduationCap,
  Sparkles,
  BookOpen,
  Music,
  Compass,
  Trophy,
  Trees,
  Layers,
  Quote
} from "lucide-react";

export default function HomePage() {
  const carouselItems = [
    {
      title: "Annual Day",
      subtitle: "Celebrating Student Talents & Cultural Excellence",
      image: "https://www.sunriseinternationalschool.co.in/static/images/carousel/1.jpg"
    },
    {
      title: "Annual Day",
      subtitle: "Empowering Confidence & Creative Expression",
      image: "https://www.sunriseinternationalschool.co.in/static/images/carousel/2.jpg"
    },
    {
      title: "Infrastructure",
      subtitle: "State-of-the-Art Hilltop Learning Campus",
      image: "https://www.sunriseinternationalschool.co.in/static/images/carousel/3.jpg"
    },
    {
      title: "Annual Day",
      subtitle: "Holistic Education & Team Spirit",
      image: "https://www.sunriseinternationalschool.co.in/static/images/carousel/4.jpg"
    },
    {
      title: "Annual Day",
      subtitle: "Nourishing Future Global Leaders",
      image: "https://www.sunriseinternationalschool.co.in/static/images/carousel/5.jpg"
    }
  ];

  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide(prev => (prev + 1) % carouselItems.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [carouselItems.length]);

  const quickActionCards = [
    {
      title: "Admissions 2026-27",
      subtitle: "Enrolment open for all grades",
      icon: GraduationCap,
      href: "/enquiry-form",
      accent: "bg-amber-500/10 text-amber-600 border-amber-500/30",
      btnText: "Apply Now"
    },
    {
      title: "V.A.R.K Methodology",
      subtitle: "Modern visual & adaptive learning",
      icon: BookOpen,
      href: "/why-sunrise",
      accent: "bg-blue-500/10 text-blue-700 border-blue-500/30",
      btnText: "Explore Model"
    },
    {
      title: "The Sports Lab",
      subtitle: "Physical fitness & defense arts",
      icon: Trophy,
      href: "/why-sunrise",
      accent: "bg-emerald-500/10 text-emerald-700 border-emerald-500/30",
      btnText: "View Facilities"
    },
    {
      title: "Sunrise Anthem",
      subtitle: "Our school song & pride",
      icon: Music,
      href: "/sunrise-anthem",
      accent: "bg-purple-500/10 text-purple-700 border-purple-500/30",
      btnText: "Listen Song"
    }
  ];

  const statsBadges = [
    { value: "1 : 30", label: "Teacher : Student Ratio", icon: GraduationCap },
    { value: "Apex", label: "Hilltop Green Campus", icon: Trees },
    { value: "V.A.R.K", label: "Advanced Learning Model", icon: Sparkles },
    { value: "100%", label: "Holistic Development", icon: Award },
  ];

  const chooseUsItems = [
    {
      title: "School Infrastructure",
      description: "Well-equipped classrooms, modern AV rooms, and laboratories built at the apex of mountains.",
      icon: School,
      badge: "Campus",
      image: "https://www.sunriseinternationalschool.co.in/static/images/wcu/infrastructure.jpg"
    },
    {
      title: "Classroom Technology",
      description: "Classrooms integrated with advanced visual projectors and screens to enhance memory and learning.",
      icon: Laptop,
      badge: "Smart Class",
      image: "https://www.sunriseinternationalschool.co.in/static/images/wcu/technology.jpg"
    },
    {
      title: "Edutech & Visualizers",
      description: "Using digital process visual presentation tools to showcase experiments and nanotech up to 220x zoom.",
      icon: Award,
      badge: "Innovation",
      image: "https://www.sunriseinternationalschool.co.in/static/images/wcu/edutech.jpg"
    },
    {
      title: "The Sports Lab",
      description: "A combination of traditional and new age sports facilities to build strong fitness and defense skills.",
      icon: Shield,
      badge: "Athletics",
      image: "https://www.sunriseinternationalschool.co.in/static/images/wcu/sports.jpg"
    },
    {
      title: "Holistic Development",
      description: "Rigorous attention to soft skills, public speaking, morals, and hobby classes to shape global leaders.",
      icon: CheckCircle,
      badge: "Life Skills",
      image: "https://www.sunriseinternationalschool.co.in/static/images/wcu/hosilities.jpg"
    }
  ];

  const galleryPreview = [
    { title: "Annual Day", src: "https://www.sunriseinternationalschool.co.in/static/images/gallery/annual-day/2.jpg", tag: "Cultural" },
    { title: "Class Photo", src: "https://www.sunriseinternationalschool.co.in/static/images/gallery/class-photos/1.jpg", tag: "Academics" },
    { title: "Dance Hobbies", src: "https://www.sunriseinternationalschool.co.in/static/images/gallery/dance/1.jpg", tag: "Co-Curricular" },
    { title: "E-Learning", src: "https://www.sunriseinternationalschool.co.in/static/images/gallery/e-learning/1.jpg", tag: "Smart Tech" },
    { title: "Fancy Dress", src: "https://www.sunriseinternationalschool.co.in/static/images/gallery/fancy-dress/1.jpg", tag: "Events" }
  ];

  return (
    <div className="space-y-16 md:space-y-24">
      
      {/* 1. LIVE NOTICE TICKER BULLETIN */}
      <div className="bg-[#0b2240] text-white rounded-2xl p-2.5 sm:p-3 shadow-school flex items-center gap-3 border border-amber-500/30 overflow-hidden">
        <div className="flex items-center gap-2 bg-amber-500 text-slate-950 px-3 py-1.5 rounded-xl font-display font-extrabold text-xs tracking-wider uppercase shrink-0 shadow-xs">
          <Bell size={14} className="animate-bounce" />
          <span>Notice Board</span>
        </div>
        <div className="overflow-hidden relative w-full py-0.5">
          <div className="animate-marquee inline-block text-xs sm:text-sm font-medium text-slate-200">
            <span className="text-amber-400 font-bold">📢 ADMISSIONS OPEN (2026-27):</span> Admissions are now open on a first-come, first-serve basis for Pre-Primary to Grade X. Limited seats available.
            <span className="mx-6 text-amber-500 font-bold">•</span>
            <span>School Timings: Mon to Sat 8:00 AM - 4:00 PM</span>
            <span className="mx-6 text-amber-500 font-bold">•</span>
            <span>Contact Helpline: +91 9324120900 / +91 9702313188</span>
            <span className="mx-6 text-amber-500 font-bold">•</span>
            <span>Sunrise International School — A School on Mountains (Badlapur West)</span>
          </div>
        </div>
      </div>

      {/* 2. MAJESTIC SCHOOL HERO CAROUSEL */}
      <section className="relative h-[440px] md:h-[520px] rounded-3xl overflow-hidden shadow-school-lg group/hero border border-slate-200/80">
        {carouselItems.map((item, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out flex items-end ${
              activeSlide === idx ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <img
              src={item.image}
              alt={item.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-7000 ease-out group-hover/hero:scale-105"
            />
            {/* Elegant Royal Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#07162c] via-[#0b2240]/60 to-transparent" />
            <div className="absolute inset-0 bg-radial-gradient from-transparent to-[#07162c]/40" />
            
            {/* Hero Caption */}
            <div className="relative z-20 p-6 sm:p-10 md:p-14 w-full text-white max-w-4xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 backdrop-blur-md border border-amber-400/40 text-amber-300 text-xs font-bold uppercase tracking-wider mb-3">
                <Sparkles size={13} className="text-amber-400" />
                <span>Nourishing Leaders Of Tomorrow</span>
              </div>
              
              <h1 className="font-display font-black text-3xl sm:text-4xl md:text-6xl mb-3 leading-tight tracking-tight drop-shadow-md">
                {item.title}
              </h1>
              
              {item.subtitle && (
                <p className="text-slate-200 text-sm sm:text-base md:text-lg mb-6 max-w-2xl font-medium drop-shadow">
                  {item.subtitle}
                </p>
              )}

              <div className="flex flex-wrap items-center gap-3.5">
                <Link 
                  href="/enquiry-form"
                  className="inline-flex items-center gap-2 px-5 py-3 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs sm:text-sm rounded-xl shadow-gold hover:shadow-school-lg transition-all duration-200"
                >
                  <span>Admission Enquiry</span>
                  <ArrowRight size={15} />
                </Link>
                <Link 
                  href="/about"
                  className="inline-flex items-center gap-2 px-5 py-3 bg-white/15 hover:bg-white/25 backdrop-blur-md border border-white/30 text-white font-semibold text-xs sm:text-sm rounded-xl transition-all duration-200"
                >
                  <span>Discover Sunrise</span>
                </Link>
              </div>
            </div>
          </div>
        ))}

        {/* Carousel Slide Indicators & Controls */}
        <div className="absolute bottom-6 right-6 z-20 flex items-center gap-3">
          <div className="hidden sm:flex gap-1.5 mr-2">
            {carouselItems.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveSlide(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  activeSlide === i ? "w-7 bg-amber-400" : "w-2 bg-white/40 hover:bg-white/80"
                }`}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>
          
          <button
            onClick={() => setActiveSlide(prev => (prev - 1 + carouselItems.length) % carouselItems.length)}
            className="w-10 h-10 rounded-xl bg-[#0b2240]/80 hover:bg-amber-500 hover:text-slate-950 text-white flex items-center justify-center backdrop-blur-md border border-white/20 transition-all shadow-md"
            aria-label="Previous Slide"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={() => setActiveSlide(prev => (prev + 1) % carouselItems.length)}
            className="w-10 h-10 rounded-xl bg-[#0b2240]/80 hover:bg-amber-500 hover:text-slate-950 text-white flex items-center justify-center backdrop-blur-md border border-white/20 transition-all shadow-md"
            aria-label="Next Slide"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </section>

      {/* 3. SCHOLASTIC QUICK ACTION PORTALS */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {quickActionCards.map((card, idx) => {
          const Icon = card.icon;
          return (
            <Link
              key={idx}
              href={card.href}
              className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-school hover:shadow-school-lg hover:-translate-y-1.5 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 border ${card.accent} transition-transform duration-300 group-hover:scale-110 shadow-xs`}>
                  <Icon size={24} />
                </div>
                <h3 className="font-display font-extrabold text-lg text-[#0b2240] mb-1 group-hover:text-amber-600 transition-colors">
                  {card.title}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {card.subtitle}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#0b2240] group-hover:text-amber-600">
                <span>{card.btnText}</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          );
        })}
      </section>

      {/* 4. KEY ACADEMIC METRICS & TRUST RIBBON */}
      <section className="bg-gradient-to-br from-[#0b2240] to-[#07162c] rounded-3xl p-6 sm:p-8 text-white shadow-school-lg border border-slate-800">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center divide-y lg:divide-y-0 lg:divide-x divide-slate-800">
          {statsBadges.map((badge, idx) => {
            const Icon = badge.icon;
            return (
              <div key={idx} className={`p-4 flex flex-col items-center justify-center ${idx > 0 ? "pt-6 lg:pt-4" : ""}`}>
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center mb-3 border border-amber-500/20">
                  <Icon size={20} />
                </div>
                <span className="font-display font-black text-2xl sm:text-3xl text-amber-400 tracking-tight mb-1">
                  {badge.value}
                </span>
                <span className="text-xs sm:text-sm text-slate-300 font-medium">
                  {badge.label}
                </span>
              </div>
            );
          })}
        </div>
      </section>

      {/* 5. ABOUT US & CAMPUS HIGHLIGHTS */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        
        {/* Left Column: Text & Academic Philosophy */}
        <div className="lg:col-span-6 space-y-6">
          <div className="space-y-2">
            <span className="inline-flex items-center gap-1.5 text-amber-600 font-display font-bold text-xs uppercase tracking-widest bg-amber-50 px-3 py-1 rounded-md border border-amber-200">
              <School size={14} />
              About Our Institution
            </span>
            <h2 className="font-display font-black text-3xl sm:text-4xl text-[#0b2240] tracking-tight">
              Sunrise International School
            </h2>
            <p className="text-xs sm:text-sm font-semibold text-slate-500 uppercase tracking-wider">
              A School On Mountains • Siddhi Education Trust
            </p>
          </div>
          
          <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
            We integrate learning with the use of advanced technology to enhance our student's visual memory. Through the use of visual projectors and screens our classrooms are well equipped for various forms of modern learning. Our state of the art science and research laboratories nourish creativity, innovation and an atmosphere of experimentation within the campus.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            <div className="p-3.5 rounded-xl bg-slate-100/70 border border-slate-200/60 flex items-center gap-3">
              <CheckCircle size={18} className="text-amber-600 shrink-0" />
              <span className="text-xs font-bold text-[#0b2240]">V.A.R.K Teaching Model</span>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-100/70 border border-slate-200/60 flex items-center gap-3">
              <CheckCircle size={18} className="text-amber-600 shrink-0" />
              <span className="text-xs font-bold text-[#0b2240]">Hilltop Natural Campus</span>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-100/70 border border-slate-200/60 flex items-center gap-3">
              <CheckCircle size={18} className="text-amber-600 shrink-0" />
              <span className="text-xs font-bold text-[#0b2240]">Digital Process Visualizers</span>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-100/70 border border-slate-200/60 flex items-center gap-3">
              <CheckCircle size={18} className="text-amber-600 shrink-0" />
              <span className="text-xs font-bold text-[#0b2240]">Sports & Fitness Lab</span>
            </div>
          </div>

          <div className="pt-2">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#0b2240] text-white font-bold text-xs sm:text-sm rounded-xl hover:bg-amber-500 hover:text-slate-950 shadow-school transition-all duration-300"
            >
              <span>Read Our Full Story</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        {/* Right Column: Campus Picture with Scholastic Badge */}
        <div className="lg:col-span-6 relative">
          <div className="relative rounded-3xl overflow-hidden shadow-school-lg h-96 sm:h-[420px] group border-4 border-white">
            <img
              src="https://www.sunriseinternationalschool.co.in/static/images/about.png"
              alt="Sunrise School Campus"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#07162c]/80 via-transparent to-transparent" />
            
            {/* Bottom floating badge on image */}
            <div className="absolute bottom-4 inset-x-4 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200/80 shadow-md">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center font-bold font-display text-sm shrink-0">
                  SIS
                </div>
                <div>
                  <h4 className="font-display font-black text-xs sm:text-sm text-[#0b2240]">
                    Situated At The Apex Of Mountains
                  </h4>
                  <p className="text-[11px] text-slate-500">
                    Barvi Dam Road, Badlapur (West), Dist. Thane
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. WHY CHOOSE SUNRISE SECTION */}
      <section className="space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="inline-flex items-center gap-1.5 text-amber-600 font-display font-bold text-xs uppercase tracking-widest bg-amber-50 px-3 py-1 rounded-md border border-amber-200">
            <Award size={14} />
            Why Choose Sunrise
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-[#0b2240] tracking-tight">
            Nourishing The Leaders Of Tomorrow
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            We lay down a deep and strong foundation Year on Year for each student that enables them to soar at greater heights. At Sunrise International School your child develops the potential and the will to achieve limitless Growth.
          </p>
        </div>

        {/* 3 Top Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {chooseUsItems.slice(0, 3).map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-school hover:shadow-school-lg hover:-translate-y-1 transition-all duration-300 flex flex-col group"
              >
                <div className="h-52 overflow-hidden relative">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07162c]/80 via-transparent to-transparent" />
                  <span className="absolute top-3 right-3 px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-xs font-bold text-[#0b2240] shadow-xs">
                    {item.badge}
                  </span>
                </div>
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-600 border border-amber-500/20">
                        <Icon size={20} />
                      </div>
                      <h3 className="font-display font-extrabold text-lg text-[#0b2240] group-hover:text-amber-600 transition-colors">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed mb-4">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* 2 Bottom Wide Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {chooseUsItems.slice(3).map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-school hover:shadow-school-lg hover:-translate-y-1 transition-all duration-300 flex flex-col sm:flex-row group"
              >
                <div className="h-52 sm:h-auto sm:w-56 shrink-0 overflow-hidden relative">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-[#07162c]/70 to-transparent" />
                  <span className="absolute top-3 right-3 sm:left-3 sm:right-auto px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-xs font-bold text-[#0b2240] shadow-xs">
                    {item.badge}
                  </span>
                </div>
                <div className="p-6 flex-grow flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-600 border border-amber-500/20">
                      <Icon size={20} />
                    </div>
                    <h3 className="font-display font-extrabold text-lg text-[#0b2240] group-hover:text-amber-600 transition-colors">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center pt-2">
          <Link
            href="/why-sunrise"
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#0b2240] text-white font-bold text-xs sm:text-sm rounded-xl hover:bg-amber-500 hover:text-slate-950 shadow-school transition-all duration-300"
          >
            <span>Learn About V.A.R.K Methodology & Faculty</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* 7. CHAIRMAN'S DESK SECTION (Executive Prestige Theme) */}
      <section className="bg-gradient-to-br from-[#0b2240] via-[#07162c] to-[#040e1c] text-white rounded-3xl overflow-hidden shadow-school-lg border border-amber-500/30 relative">
        {/* Background Crest Accent */}
        <div className="absolute -right-10 -bottom-10 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="grid grid-cols-1 lg:grid-cols-12 relative z-10">
          
          {/* Chairman Photo */}
          <div className="lg:col-span-4 h-80 sm:h-96 lg:h-auto relative min-h-[360px] p-6 lg:p-8 flex items-center justify-center">
            <div className="w-full h-full max-w-sm rounded-2xl overflow-hidden border-2 border-amber-400/40 shadow-2xl relative group">
              <img
                src="https://www.sunriseinternationalschool.co.in/static/images/founder.jpg"
                alt="Chairman Mr. Inderlal A. Talreja"
                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07162c] via-transparent to-transparent" />
              <div className="absolute bottom-3 inset-x-3 text-center bg-[#07162c]/90 backdrop-blur-sm p-2.5 rounded-xl border border-amber-400/30">
                <span className="font-display font-extrabold text-sm text-amber-400 block">
                  Mr. Inderlal A. Talreja
                </span>
                <span className="text-[10px] uppercase tracking-wider text-slate-300 font-semibold block">
                  Chairman, Siddhi Education Trust
                </span>
              </div>
            </div>
          </div>

          {/* Chairman Quote & Text */}
          <div className="lg:col-span-8 p-6 sm:p-10 md:p-12 flex flex-col justify-center space-y-6">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-2 text-amber-400 font-display font-bold text-xs uppercase tracking-widest">
                <Quote size={16} />
                <span>Leadership Message</span>
              </div>
              <h2 className="font-display font-black text-2xl sm:text-3xl text-white">
                From The Chairman's Desk
              </h2>
            </div>
            
            <p className="text-slate-200 leading-relaxed text-sm sm:text-base italic border-l-4 border-amber-500 pl-4 py-1.5 bg-white/5 rounded-r-xl">
              "Our mission is to nourish a learner friendly environment within our school that lives up with the needs of the future generations of our country. We strive hard to enable each child to grow to his highest potential so that they can face the challenges of life head on. We instill a positive frame of mind during their blooming period and prepare them for Global Competence."
            </p>

            <div className="pt-2">
              <Link
                href="/chairman-message"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-amber-400 hover:text-white hover:gap-3 transition-all"
              >
                <span>Read Chairman's Full Message</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 8. LIFE AT SUNRISE / GALLERY PREVIEW */}
      <section className="space-y-10">
        <div className="text-center max-w-xl mx-auto space-y-3">
          <span className="inline-flex items-center gap-1.5 text-amber-600 font-display font-bold text-xs uppercase tracking-widest bg-amber-50 px-3 py-1 rounded-md border border-amber-200">
            <Sparkles size={14} />
            Life At Sunrise
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-[#0b2240] tracking-tight">
            Our Campus Highlights
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {galleryPreview.map((item, idx) => (
            <div 
              key={idx}
              className="group relative h-52 rounded-2xl overflow-hidden shadow-school border border-slate-200 bg-slate-950"
            >
              <img 
                src={item.src} 
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07162c]/90 via-transparent to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />
              
              <div className="absolute inset-x-0 bottom-0 p-3.5 text-white">
                <span className="text-[10px] uppercase font-bold text-amber-400 block tracking-wider mb-0.5">
                  {item.tag}
                </span>
                <p className="text-xs font-bold tracking-wide truncate">{item.title}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center pt-2">
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#0b2240] hover:bg-amber-500 hover:text-slate-950 text-white font-bold text-xs sm:text-sm rounded-xl transition-all duration-300 shadow-school"
          >
            <span>View Complete Photo Gallery</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* 9. ADMISSION CALL TO ACTION BANNER */}
      <section className="bg-gradient-to-br from-amber-500 via-amber-500 to-amber-600 rounded-3xl p-8 sm:p-12 text-slate-950 shadow-gold border border-amber-400 flex flex-col md:flex-row md:items-center justify-between gap-8 relative overflow-hidden">
        <div className="space-y-3 max-w-2xl relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-950/10 text-slate-950 text-xs font-extrabold uppercase tracking-wider">
            <GraduationCap size={15} />
            <span>Admissions Desk 2026 - 27</span>
          </div>
          <h3 className="font-display font-black text-2xl sm:text-3xl md:text-4xl tracking-tight text-slate-950">
            Admission Enquiries Open
          </h3>
          <p className="text-slate-900/90 text-sm sm:text-base leading-relaxed font-medium">
            Seeking admission in one of the best schools in Badlapur? Admissions are open on a first-come, first-serve basis. Seats are limited. Click below for a smooth online admission process.
          </p>
        </div>
        
        <div className="shrink-0 flex flex-col sm:flex-row items-center gap-3 relative z-10">
          <Link
            href="/enquiry-form"
            className="w-full sm:w-auto text-center px-8 py-4 bg-[#0b2240] text-white hover:bg-white hover:text-slate-950 font-black text-sm rounded-xl shadow-school-lg transition-all duration-300 hover:-translate-y-0.5"
          >
            Enquire Now
          </Link>
          <Link
            href="/online-admission"
            className="w-full sm:w-auto text-center px-6 py-4 bg-white/30 hover:bg-white text-slate-950 font-bold text-sm rounded-xl transition-all duration-300 border border-slate-950/20"
          >
            Online Process
          </Link>
        </div>
      </section>
    </div>
  );
}

