"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, School, Laptop, Award, Shield, CheckCircle, ChevronLeft, ChevronRight } from "lucide-react";

export default function HomePage() {
  const carouselItems = [
    {
      title: "Annual Day",
      subtitle: "",
      image: "https://www.sunriseinternationalschool.co.in/static/images/carousel/1.jpg"
    },
    {
      title: "Annual Day",
      subtitle: "",
      image: "https://www.sunriseinternationalschool.co.in/static/images/carousel/2.jpg"
    },
    {
      title: "Infrastructure",
      subtitle: "",
      image: "https://www.sunriseinternationalschool.co.in/static/images/carousel/3.jpg"
    },
    {
      title: "Annual Day",
      subtitle: "",
      image: "https://www.sunriseinternationalschool.co.in/static/images/carousel/4.jpg"
    },
    {
      title: "Annual Day",
      subtitle: "",
      image: "https://www.sunriseinternationalschool.co.in/static/images/carousel/5.jpg"
    }
  ];

  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide(prev => (prev + 1) % carouselItems.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const chooseUsItems = [
    {
      title: "School Infrastructure",
      description: "Well-equipped classrooms, modern AV rooms, and laboratories built at the apex of mountains.",
      icon: School,
      bg: "from-blue-500/10 to-indigo-500/10",
      text: "text-blue-600",
      image: "https://www.sunriseinternationalschool.co.in/static/images/wcu/infrastructure.jpg"
    },
    {
      title: "Classroom Technology",
      description: "Classrooms integrated with advanced visual projectors and screens to enhance memory and learning.",
      icon: Laptop,
      bg: "from-amber-500/10 to-orange-500/10",
      text: "text-amber-600",
      image: "https://www.sunriseinternationalschool.co.in/static/images/wcu/technology.jpg"
    },
    {
      title: "Edutech & Visualizers",
      description: "Using digital process visual presentation tools to showcase experiments and nanotech up to 220x zoom.",
      icon: Award,
      bg: "from-teal-500/10 to-emerald-500/10",
      text: "text-teal-600",
      image: "https://www.sunriseinternationalschool.co.in/static/images/wcu/edutech.jpg"
    },
    {
      title: "The Sports Lab",
      description: "A combination of traditional and new age sports facilities to build strong fitness and defense skills.",
      icon: Shield,
      bg: "from-rose-500/10 to-pink-500/10",
      text: "text-rose-600",
      image: "https://www.sunriseinternationalschool.co.in/static/images/wcu/sports.jpg"
    },
    {
      title: "Holistic Development",
      description: "Rigorous attention to soft skills, public speaking, morals, and hobby classes to shape global leaders.",
      icon: CheckCircle,
      bg: "from-purple-500/10 to-violet-500/10",
      text: "text-purple-600",
      image: "https://www.sunriseinternationalschool.co.in/static/images/wcu/hosilities.jpg"
    }
  ];

  const galleryPreview = [
    { title: "Annual Day", src: "https://www.sunriseinternationalschool.co.in/static/images/gallery/annual-day/2.jpg" },
    { title: "Class Photo", src: "https://www.sunriseinternationalschool.co.in/static/images/gallery/class-photos/1.jpg" },
    { title: "Dance Hobbies", src: "https://www.sunriseinternationalschool.co.in/static/images/gallery/dance/1.jpg" },
    { title: "E-Learning", src: "https://www.sunriseinternationalschool.co.in/static/images/gallery/e-learning/1.jpg" },
    { title: "Fancy Dress", src: "https://www.sunriseinternationalschool.co.in/static/images/gallery/fancy-dress/1.jpg" }
  ];

  return (
    <div className="space-y-20">
      {/* 1. HERO CAROUSEL */}
      <section className="relative h-[480px] rounded-2xl overflow-hidden shadow-premium-lg group/hero">
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
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent" />
            
            {/* Caption */}
            <div className="relative z-20 p-8 md:p-12 w-full text-white">
              {item.subtitle && (
                <span className="text-amber-400 font-display font-semibold text-xs md:text-sm tracking-widest uppercase block mb-2">
                  {item.subtitle}
                </span>
              )}
              <h2 className="font-display font-extrabold text-3xl md:text-5xl mb-4 leading-tight">
                {item.title}
              </h2>
              <Link 
                href="/about"
                className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold text-white/95 hover:text-amber-400 hover:gap-3 transition-all duration-200"
              >
                <span>Discover Sunrise School</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        ))}

        {/* Carousel controls */}
        <div className="absolute bottom-6 right-6 z-20 flex gap-2">
          <button
            onClick={() => setActiveSlide(prev => (prev - 1 + carouselItems.length) % carouselItems.length)}
            className="w-11 h-11 rounded-full bg-slate-900/60 hover:bg-amber-500 hover:text-slate-950 text-white flex items-center justify-center backdrop-blur-sm transition-all"
            aria-label="Previous Slide"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={() => setActiveSlide(prev => (prev + 1) % carouselItems.length)}
            className="w-11 h-11 rounded-full bg-slate-900/60 hover:bg-amber-500 hover:text-slate-950 text-white flex items-center justify-center backdrop-blur-sm transition-all"
            aria-label="Next Slide"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </section>

      {/* 2. ABOUT US SECTION */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="space-y-2">
            <span className="text-amber-500 font-display font-bold text-xs uppercase tracking-widest block">
              About Us
            </span>
            <h1 className="font-display font-extrabold text-3xl md:text-4xl text-slate-900 tracking-tight">
              Sunrise International School
            </h1>
          </div>
          <p className="text-slate-600 leading-relaxed text-base">
            We integrate learning with the use of advanced technology to enhance our student's visual memory. Through the use of visual projectors and screens our classrooms are well equipped for various forms of modern learning. Our state of the art science and research laboratories nourish creativity, innovation and an atmosphere of experimentation within the campus.
          </p>
          <div className="pt-2">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-slate-900 text-white font-semibold text-sm rounded-xl hover:bg-amber-500 hover:text-slate-950 hover:shadow-premium transition-all duration-300"
            >
              <span>Read Our Full Story</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        <div className="relative rounded-2xl overflow-hidden shadow-premium-lg h-96 group">
          <img
            src="https://www.sunriseinternationalschool.co.in/static/images/about.png"
            alt="School Campus"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
          />
          <div className="absolute inset-0 bg-slate-950/10 hover:bg-slate-950/0 transition-colors duration-300" />
        </div>
      </section>

      {/* 3. WHY CHOOSE US (CARDS GRID) */}
      <section className="space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <span className="text-amber-500 font-display font-bold text-xs uppercase tracking-widest block">
            Why Choose Us
          </span>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl text-slate-900 tracking-tight">
            Nourishing The Leaders Of Tomorrow
          </h2>
          <p className="text-slate-500 text-sm leading-relaxed">
            We lay down a deep and strong foundation Year on Year for each student that enables them to soar at greater heights. At Sunrise International School your child develops the potential and the will to achieve limitless Growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {chooseUsItems.slice(0, 3).map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-premium hover:shadow-premium-lg hover:-translate-y-1 transition-all duration-300 flex flex-col"
              >
                <div className="h-48 overflow-hidden relative">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent" />
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`p-2.5 rounded-xl bg-gradient-to-br ${item.bg} ${item.text}`}>
                      <Icon size={20} />
                    </div>
                    <h3 className="font-display font-bold text-lg text-slate-900">{item.title}</h3>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {chooseUsItems.slice(3).map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-premium hover:shadow-premium-lg hover:-translate-y-1 transition-all duration-300 flex flex-col md:flex-row"
              >
                <div className="h-48 md:h-auto md:w-48 shrink-0 overflow-hidden relative">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-slate-950/60 to-transparent" />
                </div>
                <div className="p-6 flex-grow flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`p-2.5 rounded-xl bg-gradient-to-br ${item.bg} ${item.text}`}>
                      <Icon size={20} />
                    </div>
                    <h3 className="font-display font-bold text-lg text-slate-900">{item.title}</h3>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center pt-4">
          <Link
            href="/why-sunrise"
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-slate-900 text-white font-semibold text-sm rounded-xl hover:bg-amber-500 hover:text-slate-950 hover:shadow-premium transition-all duration-300"
          >
            <span>Learn About V.A.R.K Methodology</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* 4. CHAIRMAN'S DESK SECTION */}
      <section className="bg-slate-900 text-white rounded-3xl overflow-hidden shadow-premium-lg border border-slate-800">
        <div className="grid grid-cols-1 lg:grid-cols-12">
          {/* image */}
          <div className="lg:col-span-4 h-80 lg:h-auto relative min-h-[360px]">
            <img
              src="https://www.sunriseinternationalschool.co.in/static/images/founder.jpg"
              alt="Chairman Inderlal A. Talreja"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-slate-950 via-slate-950/20 to-transparent" />
          </div>

          {/* text */}
          <div className="lg:col-span-8 p-8 md:p-12 flex flex-col justify-center space-y-6">
            <div className="space-y-1">
              <span className="text-amber-400 font-display font-semibold text-xs tracking-widest uppercase block">
                Chairman's Desk
              </span>
              <h2 className="font-display font-extrabold text-2xl md:text-3xl text-white">
                Mr. Inderlal A. Talreja
              </h2>
              <span className="text-xs text-slate-400 font-medium tracking-wide uppercase">
                Chairman, Siddhi Education Trust
              </span>
            </div>
            
            <p className="text-slate-300 leading-relaxed text-sm italic border-l-4 border-amber-500 pl-4 py-1">
              "Our mission is to nourish a learner friendly environment within our school that lives up with the needs of the future generations of our country. We strive hard to enable each child to grow to his highest potential so that they can face the challenges of life head on. We instill a positive frame of mind during their blooming period and prepare them for Global Competence."
            </p>

            <div className="pt-2">
              <Link
                href="/chairman-message"
                className="inline-flex items-center gap-2 text-sm font-bold text-amber-400 hover:text-white hover:gap-3 transition-all"
              >
                <span>Read Chairman's Full Message</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5. GALLERY HIGHLIGHTS */}
      <section className="space-y-12">
        <div className="text-center max-w-xl mx-auto space-y-4">
          <span className="text-amber-500 font-display font-bold text-xs uppercase tracking-widest block">
            Life At Sunrise
          </span>
          <h2 className="font-display font-extrabold text-3xl text-slate-900 tracking-tight">
            Our Campus Highlights
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {galleryPreview.map((item, idx) => (
            <div 
              key={idx}
              className="group relative h-48 rounded-xl overflow-hidden shadow-sm border border-slate-100 bg-slate-950"
            >
              <img 
                src={item.src} 
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-108"
              />
              <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-4 text-center" />
              <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-slate-950/80 to-transparent text-white">
                <p className="text-xs font-semibold tracking-wide truncate">{item.title}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center pt-2">
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-slate-900 hover:bg-amber-500 hover:text-slate-950 text-white font-semibold text-sm rounded-xl transition-all duration-300 shadow-premium"
          >
            <span>View Complete Gallery</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* 6. ENQUIRY ADMISSION SECTION */}
      <section className="bg-gradient-to-br from-amber-500 to-amber-600 rounded-3xl p-8 md:p-12 text-slate-950 shadow-premium-lg flex flex-col md:flex-row md:items-center justify-between gap-8">
        <div className="space-y-4 max-w-2xl">
          <h3 className="font-display font-extrabold text-2xl md:text-3xl tracking-tight">
            Admission Enquiries Open (2026 - 27)
          </h3>
          <p className="text-slate-900/90 text-sm leading-relaxed">
            Seeking admission in one of the best schools in India? Admissions are open on a first-come, first-serve basis. Seats are limited. Click below for a smooth online admission process.
          </p>
        </div>
        <div className="shrink-0 flex items-center">
          <Link
            href="/enquiry-form"
            className="w-full md:w-auto text-center px-8 py-4 bg-slate-950 text-white hover:bg-white hover:text-slate-950 font-bold text-sm rounded-xl shadow-lg transition-all duration-300"
          >
            Enquire Now
          </Link>
        </div>
      </section>
    </div>
  );
}
