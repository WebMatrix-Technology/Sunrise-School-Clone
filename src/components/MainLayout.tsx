"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  Home, 
  Info, 
  Sparkles, 
  Music, 
  FileText, 
  HelpCircle, 
  Image as ImageIcon, 
  PhoneCall, 
  UserCheck, 
  Menu, 
  X, 
  Mail, 
  Phone, 
  Download, 
  Compass, 
  GraduationCap, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  ChevronDown, 
  Lock,
  LayoutGrid
} from "lucide-react";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  const [moreMenuOpen, setMoreMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const pathname = usePathname();

  // Close more menu on path change
  useEffect(() => {
    setMoreMenuOpen(false);
  }, [pathname]);

  const navItems = [
    { label: "Home", href: "/", icon: Home },
    { label: "About Us", href: "/about", icon: Info },
    { label: "Why Sunrise", href: "/why-sunrise", icon: Sparkles },
    { label: "Chairman's Desk", href: "/chairman-message", icon: UserCheck },
    { label: "Sunrise Anthem", href: "/sunrise-anthem", icon: Music },
    { label: "Gallery", href: "/gallery", icon: ImageIcon },
    { label: "FAQ", href: "/faq", icon: HelpCircle },
    { label: "Contact Us", href: "/contact", icon: PhoneCall },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans selection:bg-amber-500 selection:text-slate-950">
      
      {/* 1. TOP UTILITY & ANNOUNCEMENT BAR */}
      <div className="bg-[#07162c] text-slate-300 text-xs border-b border-slate-800/80 hidden sm:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex items-center justify-between gap-4">
          
          {/* Left: Trust & Affiliation Tag */}
          <div className="flex items-center gap-4 text-[11px] font-medium tracking-wide">
            <span className="inline-flex items-center gap-1.5 text-amber-400 font-semibold">
              <ShieldCheck size={14} className="text-amber-400" />
              Siddhi Education Trust
            </span>
            <span className="text-slate-600">|</span>
            <span className="text-slate-300">CBSE Curriculum Pattern</span>
            <span className="text-slate-600 hidden md:inline">|</span>
            <span className="text-slate-300 hidden md:inline">Badlapur (West), Dist. Thane</span>
          </div>

          {/* Right: Quick Direct Contacts & Fast Links */}
          <div className="flex items-center gap-5 text-[11px]">
            <a 
              href="tel:9324120900" 
              className="flex items-center gap-1.5 hover:text-amber-400 transition-colors"
            >
              <Phone size={13} className="text-amber-400" />
              <span>+91 9324120900</span>
            </a>
            <a 
              href="mailto:sunriseint.school@gmail.com" 
              className="hidden lg:flex items-center gap-1.5 hover:text-amber-400 transition-colors"
            >
              <Mail size={13} className="text-amber-400" />
              <span>sunriseint.school@gmail.com</span>
            </a>
            <Link 
              href="/admin" 
              className="inline-flex items-center gap-1 text-slate-400 hover:text-amber-400 font-medium transition-colors"
              title="Staff & Admin Portal"
            >
              <Lock size={11} />
              <span>Staff Login</span>
            </Link>
          </div>
        </div>
      </div>

      {/* 2. MAIN SCHOOL BRANDING & NAVIGATION HEADER */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-school">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 md:h-24">
            
            {/* School Emblem & Brand Title */}
            <Link href="/" className="flex items-center gap-2.5 sm:gap-3.5 group shrink-0 max-w-[65%] sm:max-w-none">
              <div className="relative shrink-0">
                <img 
                  src="https://www.sunriseinternationalschool.co.in/static/images/logo.png" 
                  alt="Sunrise International School Logo" 
                  className="h-11 sm:h-14 md:h-16 w-auto object-contain filter drop-shadow transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col min-w-0">
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <span className="font-display font-black text-base sm:text-xl md:text-2xl tracking-tight text-[#0b2240] group-hover:text-amber-600 transition-colors truncate">
                    SUNRISE
                  </span>
                  <span className="text-[9px] sm:text-[10px] md:text-xs font-bold uppercase tracking-wider px-1.5 sm:px-2 py-0.5 rounded bg-amber-500/10 text-amber-700 border border-amber-500/20 shrink-0">
                    Est. 2000
                  </span>
                </div>
                <span className="font-display font-bold text-[10px] sm:text-[11px] md:text-xs text-slate-600 tracking-wider uppercase -mt-0.5 truncate">
                  International School
                </span>
                <span className="text-[9px] md:text-[10px] text-slate-600 italic font-medium hidden md:block">
                  A School on Mountains • Badlapur (W)
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden xl:flex items-center space-x-1">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`px-3 py-2 rounded-lg text-[13px] font-semibold transition-all duration-200 relative ${
                      isActive
                        ? "text-amber-600 bg-amber-500/10 shadow-xs"
                        : "text-slate-700 hover:text-[#0b2240] hover:bg-slate-100/70"
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive && (
                      <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-amber-500 rounded-full" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Header Call To Actions */}
            <div className="flex items-center gap-2.5 sm:gap-3">
              <Link 
                href="/online-admission" 
                className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-gradient-to-r from-amber-500 via-amber-500 to-amber-600 text-slate-950 hover:from-amber-600 hover:to-amber-700 hover:text-white rounded-xl text-xs sm:text-sm font-bold shadow-gold hover:shadow-school-lg transition-all duration-300 hover:-translate-y-0.5"
              >
                <FileText size={15} />
                <span>Enquire Now</span>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* 3. MOBILE & TABLET STICKY BOTTOM NAVIGATION BAR */}
      <nav 
        aria-label="Mobile Bottom Navigation"
        className="fixed bottom-0 inset-x-0 z-40 bg-white/95 backdrop-blur-lg border-t border-slate-200/90 shadow-[0_-4px_25px_rgba(11,34,64,0.08)] xl:hidden"
      >
        <div className="max-w-md mx-auto px-3 py-1.5 flex items-center justify-between">
          
          {/* 1. Home */}
          <Link
            href="/"
            className={`flex flex-col items-center justify-center py-1 px-3 rounded-xl transition-all duration-200 ${
              pathname === "/" ? "text-amber-600 font-bold" : "text-slate-600 hover:text-[#0b2240]"
            }`}
          >
            <Home size={20} className={pathname === "/" ? "stroke-[2.5]" : "stroke-[1.8]"} />
            <span className="text-[10px] font-medium mt-0.5">Home</span>
          </Link>

          {/* 2. About */}
          <Link
            href="/about"
            className={`flex flex-col items-center justify-center py-1 px-3 rounded-xl transition-all duration-200 ${
              pathname === "/about" ? "text-amber-600 font-bold" : "text-slate-600 hover:text-[#0b2240]"
            }`}
          >
            <Info size={20} className={pathname === "/about" ? "stroke-[2.5]" : "stroke-[1.8]"} />
            <span className="text-[10px] font-medium mt-0.5">About</span>
          </Link>

          {/* 3. Center Admission Button (Elevated) */}
          <Link
            href="/online-admission"
            className="flex flex-col items-center -mt-5 group"
          >
            <div className={`w-12 h-12 rounded-full flex items-center justify-center shadow-gold transition-all duration-300 group-hover:scale-105 group-active:scale-95 ${
              pathname === "/online-admission" || pathname === "/enquiry-form"
                ? "bg-gradient-to-tr from-amber-500 to-amber-400 text-slate-950 ring-4 ring-amber-400/30"
                : "bg-[#0b2240] text-amber-400 border-2 border-amber-400/40"
            }`}>
              <GraduationCap size={22} className="stroke-[2.2]" />
            </div>
            <span className="text-[10px] font-bold mt-1 text-[#0b2240]">Admission</span>
          </Link>

          {/* 4. Gallery */}
          <Link
            href="/gallery"
            className={`flex flex-col items-center justify-center py-1 px-3 rounded-xl transition-all duration-200 ${
              pathname === "/gallery" ? "text-amber-600 font-bold" : "text-slate-600 hover:text-[#0b2240]"
            }`}
          >
            <ImageIcon size={20} className={pathname === "/gallery" ? "stroke-[2.5]" : "stroke-[1.8]"} />
            <span className="text-[10px] font-medium mt-0.5">Gallery</span>
          </Link>

          {/* 5. More Menu Trigger */}
          <button
            type="button"
            onClick={() => setMoreMenuOpen(prev => !prev)}
            className={`flex flex-col items-center justify-center py-1 px-3 rounded-xl transition-all duration-200 cursor-pointer ${
              moreMenuOpen ? "text-amber-600 font-bold" : "text-slate-600 hover:text-[#0b2240]"
            }`}
            aria-label="Toggle more navigation menu"
          >
            <LayoutGrid size={20} className={moreMenuOpen ? "stroke-[2.5]" : "stroke-[1.8]"} />
            <span className="text-[10px] font-medium mt-0.5">More</span>
          </button>

        </div>
      </nav>

      {/* 4. "MORE" BOTTOM SHEET MODAL DRAWER */}
      {moreMenuOpen && (
        <div className="fixed inset-0 z-50 xl:hidden">
          {/* Backdrop */}
          <div 
            onClick={() => setMoreMenuOpen(false)}
            className="fixed inset-0 bg-[#07162c]/65 backdrop-blur-xs transition-opacity animate-in fade-in duration-200"
          />

          {/* Bottom Sheet Container */}
          <div className="fixed bottom-16 inset-x-0 z-50 max-w-lg mx-auto bg-white rounded-t-3xl border-t border-slate-200 shadow-2xl p-5 sm:p-6 animate-in slide-in-from-bottom-8 duration-300 max-h-[80vh] overflow-y-auto">
            
            {/* Drag Handle & Header */}
            <div className="w-12 h-1.5 bg-slate-300 rounded-full mx-auto mb-4" />
            
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <span className="font-display font-black text-base text-[#0b2240]">
                  Explore Sunrise
                </span>
                <span className="text-[10px] font-bold text-amber-700 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded-md uppercase">
                  Menu
                </span>
              </div>
              <button 
                onClick={() => setMoreMenuOpen(false)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 cursor-pointer"
                aria-label="Close Menu"
              >
                <X size={18} />
              </button>
            </div>

            {/* Grid of Navigation Items */}
            <div className="grid grid-cols-2 gap-2.5 py-4">
              <Link
                href="/why-sunrise"
                onClick={() => setMoreMenuOpen(false)}
                className={`p-3 rounded-2xl border flex items-center gap-3 transition-all ${
                  pathname === "/why-sunrise"
                    ? "bg-amber-500/15 border-amber-500/40 text-amber-800 font-bold"
                    : "bg-slate-50 hover:bg-white border-slate-200/80 text-slate-700 hover:border-amber-400"
                }`}
              >
                <div className="w-8 h-8 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center shrink-0">
                  <Sparkles size={16} />
                </div>
                <span className="text-xs font-semibold">Why Sunrise</span>
              </Link>

              <Link
                href="/chairman-message"
                onClick={() => setMoreMenuOpen(false)}
                className={`p-3 rounded-2xl border flex items-center gap-3 transition-all ${
                  pathname === "/chairman-message"
                    ? "bg-amber-500/15 border-amber-500/40 text-amber-800 font-bold"
                    : "bg-slate-50 hover:bg-white border-slate-200/80 text-slate-700 hover:border-amber-400"
                }`}
              >
                <div className="w-8 h-8 rounded-xl bg-blue-500/10 text-blue-600 flex items-center justify-center shrink-0">
                  <UserCheck size={16} />
                </div>
                <span className="text-xs font-semibold">Chairman's Desk</span>
              </Link>

              <Link
                href="/sunrise-anthem"
                onClick={() => setMoreMenuOpen(false)}
                className={`p-3 rounded-2xl border flex items-center gap-3 transition-all ${
                  pathname === "/sunrise-anthem"
                    ? "bg-amber-500/15 border-amber-500/40 text-amber-800 font-bold"
                    : "bg-slate-50 hover:bg-white border-slate-200/80 text-slate-700 hover:border-amber-400"
                }`}
              >
                <div className="w-8 h-8 rounded-xl bg-purple-500/10 text-purple-600 flex items-center justify-center shrink-0">
                  <Music size={16} />
                </div>
                <span className="text-xs font-semibold">Sunrise Anthem</span>
              </Link>

              <Link
                href="/faq"
                onClick={() => setMoreMenuOpen(false)}
                className={`p-3 rounded-2xl border flex items-center gap-3 transition-all ${
                  pathname === "/faq"
                    ? "bg-amber-500/15 border-amber-500/40 text-amber-800 font-bold"
                    : "bg-slate-50 hover:bg-white border-slate-200/80 text-slate-700 hover:border-amber-400"
                }`}
              >
                <div className="w-8 h-8 rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center shrink-0">
                  <HelpCircle size={16} />
                </div>
                <span className="text-xs font-semibold">Admissions FAQ</span>
              </Link>

              <Link
                href="/contact"
                onClick={() => setMoreMenuOpen(false)}
                className={`p-3 rounded-2xl border flex items-center gap-3 transition-all ${
                  pathname === "/contact"
                    ? "bg-amber-500/15 border-amber-500/40 text-amber-800 font-bold"
                    : "bg-slate-50 hover:bg-white border-slate-200/80 text-slate-700 hover:border-amber-400"
                }`}
              >
                <div className="w-8 h-8 rounded-xl bg-rose-500/10 text-rose-600 flex items-center justify-center shrink-0">
                  <PhoneCall size={16} />
                </div>
                <span className="text-xs font-semibold">Contact & Visit</span>
              </Link>

              <Link
                href="/enquiry-form"
                onClick={() => setMoreMenuOpen(false)}
                className={`p-3 rounded-2xl border flex items-center gap-3 transition-all ${
                  pathname === "/enquiry-form"
                    ? "bg-amber-500/15 border-amber-500/40 text-amber-800 font-bold"
                    : "bg-slate-50 hover:bg-white border-slate-200/80 text-slate-700 hover:border-amber-400"
                }`}
              >
                <div className="w-8 h-8 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center shrink-0">
                  <FileText size={16} />
                </div>
                <span className="text-xs font-semibold">Enquiry Form</span>
              </Link>
            </div>

            {/* Quick Contacts and Staff Link */}
            <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <a 
                href="tel:9324120900"
                className="flex items-center gap-1.5 font-bold text-amber-700 hover:text-amber-800"
              >
                <Phone size={13} />
                <span>+91 9324120900</span>
              </a>

              <Link 
                href="/admin" 
                onClick={() => setMoreMenuOpen(false)}
                className="inline-flex items-center gap-1 text-slate-500 hover:text-[#0b2240] font-medium"
              >
                <Lock size={12} />
                <span>Staff Portal</span>
              </Link>
            </div>

          </div>
        </div>
      )}

      {/* 5. MAIN PAGE CONTENT RENDER */}
      <main className="flex-grow max-w-7xl mx-auto w-full px-3 sm:px-6 lg:px-8 py-6 sm:py-8 md:py-12 pb-24 xl:pb-12">
        {children}
      </main>

      {/* 5. FULL-WIDTH ACADEMIC SCHOOL FOOTER */}
      <footer className="bg-[#0b2240] text-slate-300 border-t border-slate-800/80 mt-20 relative overflow-hidden">
        {/* Subtle Decorative Top Glow */}
        <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-slate-800">
            
            {/* Column 1: School Identity & Mission (5 cols) */}
            <div className="lg:col-span-5 space-y-5">
              <div className="flex items-center gap-3.5">
                <img 
                  src="https://www.sunriseinternationalschool.co.in/static/images/logo.png" 
                  alt="SIS Crest" 
                  className="h-14 w-auto filter drop-shadow-md"
                />
                <div>
                  <h3 className="font-display font-black text-lg text-white tracking-wide">
                    SUNRISE INTERNATIONAL SCHOOL
                  </h3>
                  <p className="text-xs text-amber-400 font-semibold tracking-wider uppercase">
                    Under Siddhi Education Trust
                  </p>
                </div>
              </div>

              <p className="text-sm leading-relaxed text-slate-300/90 pr-4">
                We aim to foster a love of learning, good working habits, the ability to analyze and solve problems, excellent academic standards, high moral, mutual respect and international understanding, social and cultural values.
              </p>

              {/* Social Media Links */}
              <div className="pt-2 flex items-center gap-3">
                <span className="text-xs font-semibold text-slate-400 mr-1">Follow Us:</span>
                <a 
                  href="https://www.instagram.com/sunrise.intl.school/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-center text-slate-300 hover:bg-amber-500 hover:text-slate-950 transition-all duration-300 hover:-translate-y-1"
                  aria-label="Instagram"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                </a>
                <a 
                  href="https://twitter.com/sunriseonline2" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-center text-slate-300 hover:bg-amber-500 hover:text-slate-950 transition-all duration-300 hover:-translate-y-1"
                  aria-label="Twitter / X"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
                </a>
                <a 
                  href="https://www.youtube.com/channel/UCy5x8Qna7XlnMDeELWGFsSA" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-center text-slate-300 hover:bg-amber-500 hover:text-slate-950 transition-all duration-300 hover:-translate-y-1"
                  aria-label="YouTube Channel"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17z"/><polygon points="9.7 15 9.7 9 15 12 9.7 15"/></svg>
                </a>
              </div>
            </div>



            {/* Column 3: Contact & Campus Info (4 cols) */}
            <div className="lg:col-span-4 space-y-4">
              <h4 className="font-display font-bold text-white text-sm uppercase tracking-wider relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-amber-500">
                Campus & Contact
              </h4>
              
              <ul className="space-y-3.5 text-sm">
                <li className="flex items-start gap-3">
                  <MapPin size={18} className="text-amber-400 shrink-0 mt-0.5" />
                  <span className="leading-snug">
                    Village Vaalivali, Barvi Dam Road, Opp New Water Tank. Badlapur (West), Dist. Thane. Pin code : 421503.
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={18} className="text-amber-400 shrink-0" />
                  <div className="flex flex-col">
                    <a href="tel:9324120900" className="hover:text-white transition-colors">+91-9324120900</a>
                    <a href="tel:9702313188" className="hover:text-white transition-colors text-xs text-slate-400">+91-9702313188</a>
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <Mail size={18} className="text-amber-400 shrink-0" />
                  <a href="mailto:sunriseint.school@gmail.com" className="hover:text-white transition-colors truncate">
                    sunriseint.school@gmail.com
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Clock size={18} className="text-amber-400 shrink-0" />
                  <span className="text-xs text-slate-300">Office Hours: Mon - Sat (8:00 AM - 4:00 PM)</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Footer Bottom Bar */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
            <p>&copy; {new Date().getFullYear()} Sunrise International School. All Rights Reserved.</p>
            <div className="flex items-center gap-6">
              <Link href="/admin" className="hover:text-amber-400 transition-colors">
                Staff Portal
              </Link>
              <span>•</span>
              <p>
                Powered by{" "}
                <a 
                  href="http://www.parasightsolutions.com/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-amber-400 hover:underline"
                >
                  Parasight Solutions
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* 6. FLOATING BROCHURE DOWNLOAD TAB (Vertical, Middle-Right) */}
      <a 
        href="https://www.sunriseinternationalschool.co.in/static/brochure.pdf" 
        download 
        target="_blank" 
        rel="noopener noreferrer"
        className="hidden md:flex fixed top-1/2 right-0 z-40 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-display font-extrabold text-[11px] uppercase tracking-widest shadow-school-lg transition-all duration-300 [writing-mode:vertical-rl] rotate-180 translate-y-1/2 rounded-l-xl px-2.5 py-5 select-none items-center justify-center gap-2 group border border-amber-400/40"
      >
        <Download size={13} className="rotate-90 group-hover:translate-x-0.5 transition-transform" />
        <span>Download Brochure</span>
      </a>

      {/* 7. ADMISSION INQUIRY POPUP MODAL */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 bg-[#07162c]/75 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-6 md:p-8 max-w-lg w-full relative shadow-school-lg border border-slate-100 animate-in fade-in zoom-in-95 duration-200">
            <button 
              onClick={() => setModalOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition-colors p-1"
            >
              <X size={20} />
            </button>
            
            <div className="flex flex-col items-center text-center mt-2">
              <div className="w-20 h-20 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center p-2 mb-4 shadow-inner">
                <img 
                  src="https://www.sunriseinternationalschool.co.in/static/images/logo.png" 
                  alt="SIS Logo" 
                  className="h-full w-auto object-contain"
                />
              </div>
              <span className="text-[11px] uppercase tracking-widest font-bold text-amber-600 bg-amber-50 px-3 py-1 rounded-full mb-2">
                Admissions Open 2026 - 27
              </span>
              <h3 className="font-display font-black text-2xl text-[#0b2240] mb-2">
                Sunrise Admission Desk
              </h3>
              <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                Looking for admission in one of the best schools in Badlapur? Admissions are open on a first-come, first-serve basis. Seats are limited.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 w-full justify-center">
                <Link 
                  href="/enquiry-form" 
                  onClick={() => setModalOpen(false)}
                  className="px-6 py-3 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold rounded-xl text-sm transition-all duration-200 text-center w-full shadow-gold"
                >
                  Enquire Now
                </Link>
                <Link 
                  href="/online-admission" 
                  onClick={() => setModalOpen(false)}
                  className="px-6 py-3 bg-[#0b2240] hover:bg-[#16325c] text-white font-semibold rounded-xl text-sm transition-all duration-200 text-center w-full"
                >
                  Online Admission
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

