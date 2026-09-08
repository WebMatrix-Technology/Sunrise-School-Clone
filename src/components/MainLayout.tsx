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
  Lock
} from "lucide-react";
import TawkChat from "./TawkChat";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const pathname = usePathname();

  // Close mobile menu on path change
  useEffect(() => {
    setMobileMenuOpen(false);
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
            <Link href="/" className="flex items-center gap-3.5 group shrink-0">
              <div className="relative">
                <img 
                  src="https://www.sunriseinternationalschool.co.in/static/images/logo.png" 
                  alt="Sunrise International School Logo" 
                  className="h-13 md:h-16 w-auto object-contain filter drop-shadow transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="font-display font-black text-lg md:text-2xl tracking-tight text-[#0b2240] group-hover:text-amber-600 transition-colors">
                    SUNRISE
                  </span>
                  <span className="text-[10px] md:text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-amber-500/10 text-amber-700 border border-amber-500/20">
                    Est. 2000
                  </span>
                </div>
                <span className="font-display font-bold text-[11px] md:text-xs text-slate-600 tracking-wider uppercase -mt-0.5">
                  International School
                </span>
                <span className="text-[9px] md:text-[10px] text-slate-600 italic font-medium hidden sm:block">
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

              {/* Mobile Menu Trigger */}
              <button 
                onClick={() => setMobileMenuOpen(true)}
                className="xl:hidden p-2 rounded-xl text-slate-700 hover:text-[#0b2240] hover:bg-slate-100 transition-colors"
                aria-label="Open Navigation Menu"
              >
                <Menu size={26} />
              </button>
            </div>
          </div>
        </div>

        {/* Secondary Tablet/Medium Screen Navigation Bar */}
        <div className="hidden lg:flex xl:hidden border-t border-slate-100 bg-slate-50/70 px-4 py-2 justify-center gap-1 overflow-x-auto">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`px-2.5 py-1.5 rounded-md text-xs font-semibold whitespace-nowrap transition-colors ${
                  isActive
                    ? "text-amber-700 bg-amber-100"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </header>

      {/* 3. MOBILE SLIDE-OVER DRAWER */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 xl:hidden">
          {/* Backdrop */}
          <div 
            onClick={() => setMobileMenuOpen(false)}
            className="fixed inset-0 bg-[#07162c]/70 backdrop-blur-sm transition-opacity"
          />

          {/* Drawer Menu */}
          <div className="fixed inset-y-0 right-0 w-full max-w-xs bg-white text-slate-900 shadow-2xl flex flex-col p-6 overflow-y-auto">
            
            {/* Drawer Header */}
            <div className="flex items-center justify-between pb-5 border-b border-slate-100">
              <div className="flex items-center gap-2.5">
                <img 
                  src="https://www.sunriseinternationalschool.co.in/static/images/logo.png" 
                  alt="SIS Logo" 
                  className="h-10 w-auto"
                />
                <div>
                  <span className="font-display font-extrabold text-sm text-[#0b2240] block">
                    SUNRISE
                  </span>
                  <span className="text-[9px] text-slate-600 uppercase font-semibold block tracking-wider">
                    International School
                  </span>
                </div>
              </div>
              <button 
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100"
              >
                <X size={20} />
              </button>
            </div>

            {/* Quick Mobile Action */}
            <div className="py-4 border-b border-slate-100 flex flex-col gap-2">
              <Link 
                href="/online-admission"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-2.5 bg-amber-500 text-slate-950 text-center font-bold text-xs rounded-xl shadow-xs"
              >
                Enquire Now
              </Link>
            </div>

            {/* Mobile Nav Links */}
            <nav className="py-4 flex-grow">
              <ul className="space-y-1">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = pathname === item.href;
                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                          isActive
                            ? "bg-amber-500/15 text-amber-700 font-bold border-l-4 border-amber-500"
                            : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                        }`}
                      >
                        <Icon size={16} className={isActive ? "text-amber-600" : "text-slate-600"} />
                        <span>{item.label}</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>

            {/* Mobile Footer Info */}
            <div className="pt-4 border-t border-slate-100 text-xs text-slate-500 space-y-2">
              <div className="flex items-center gap-2">
                <Phone size={13} className="text-amber-600" />
                <span>+91 9324120900</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={13} className="text-amber-600" />
                <span className="truncate">sunriseint.school@gmail.com</span>
              </div>
              <div className="pt-2">
                <Link 
                  href="/admin" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="inline-flex items-center gap-1.5 text-xs text-slate-600 hover:text-amber-600 font-medium"
                >
                  <Lock size={12} />
                  <span>Admin Portal</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 4. MAIN PAGE CONTENT RENDER */}
      <main className="flex-grow max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 md:py-12">
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

            {/* Column 2: Quick Links (3 cols) */}
            <div className="lg:col-span-3 space-y-4">
              <h4 className="font-display font-bold text-white text-sm uppercase tracking-wider relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-amber-500">
                Quick Links
              </h4>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <Link href="/about" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                    <span className="text-amber-500">›</span> About Us
                  </Link>
                </li>
                <li>
                  <Link href="/why-sunrise" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                    <span className="text-amber-500">›</span> Why Choose Us
                  </Link>
                </li>
                <li>
                  <Link href="/chairman-message" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                    <span className="text-amber-500">›</span> Chairman's Desk
                  </Link>
                </li>
                <li>
                  <Link href="/sunrise-anthem" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                    <span className="text-amber-500">›</span> Sunrise Anthem
                  </Link>
                </li>
                <li>
                  <Link href="/online-admission" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                    <span className="text-amber-500">›</span> Online Admission
                  </Link>
                </li>
                <li>
                  <Link href="/gallery" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                    <span className="text-amber-500">›</span> Campus Gallery
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                    <span className="text-amber-500">›</span> Frequently Asked Questions
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                    <span className="text-amber-500">›</span> Contact & Directions
                  </Link>
                </li>
              </ul>
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
        className="fixed top-1/2 right-0 z-40 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-display font-extrabold text-[11px] uppercase tracking-widest shadow-school-lg transition-all duration-300 [writing-mode:vertical-rl] rotate-180 translate-y-1/2 rounded-l-xl px-2.5 py-5 select-none flex items-center justify-center gap-2 group border border-amber-400/40"
      >
        <Download size={13} className="rotate-90 group-hover:translate-x-0.5 transition-transform" />
        <span>Download Brochure</span>
      </a>

      {/* Support Live Chat Widget */}
      <TawkChat />

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

