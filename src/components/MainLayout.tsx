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
  Bus, 
  UserCheck, 
  Menu, 
  X, 
  Mail, 
  Phone, 
  Download, 
  Compass
} from "lucide-react";


export default function MainLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const pathname = usePathname();

  // Close sidebar on path change
  useEffect(() => {
    setSidebarOpen(false);
  }, [pathname]);

  const navItems = [
    { label: "Home", href: "/", icon: Home },
    { label: "About Us", href: "/about", icon: Info },
    { label: "Why Sunrise", href: "/why-sunrise", icon: Sparkles },
    { label: "Chairman's Message", href: "/chairman-message", icon: UserCheck },
    { label: "Sunrise Anthem", href: "/sunrise-anthem", icon: Music },
    { label: "Online Admission", href: "/online-admission", icon: Compass },
    { label: "Admission Enquiry", href: "/enquiry-form", icon: FileText },
    { label: "FAQ", href: "/faq", icon: HelpCircle },
    { label: "Gallery", href: "/gallery", icon: ImageIcon },
    { label: "Transport Policy", href: "/transport-policy", icon: Bus },
    { label: "Contact Us", href: "/contact", icon: PhoneCall },
  ];

  return (
    <div className="flex min-h-screen bg-slate-50 text-slate-800 font-sans">
      {/* 1. Sidebar Panel */}
      <aside 
        className={`fixed top-0 bottom-0 left-0 z-50 w-72 bg-gradient-to-br from-slate-900 to-slate-950 text-white p-6 flex flex-col border-r border-slate-800 transition-transform duration-300 ease-in-out lg:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Logo Section */}
        <div className="flex items-center gap-3 mb-10 pb-6 border-b border-slate-800">
          <Link href="/" className="flex items-center gap-3">
            <img 
              src="https://www.sunriseinternationalschool.co.in/static/images/logo.png" 
              alt="SIS Logo" 
              className="h-12 w-auto filter drop-shadow-md"
            />
            <div>
              <span className="font-display font-extrabold text-base leading-tight tracking-wider block bg-gradient-to-r from-white via-amber-200 to-amber-400 bg-clip-text text-transparent">
                SUNRISE
              </span>
              <span className="text-[10px] text-slate-400 font-medium tracking-widest block -mt-1 uppercase">
                International School
              </span>
            </div>
          </Link>
          <button 
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden ml-auto text-slate-400 hover:text-white"
          >
            <X size={20} />
          </button>
        </div>

        {/* Navigation Items */}
        <nav className="flex-grow overflow-y-auto pr-1">
          <ul className="space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`flex items-center gap-3.5 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                      isActive 
                        ? "bg-amber-500/10 text-amber-400 border-l-4 border-amber-500 font-semibold"
                        : "text-slate-300 hover:bg-slate-800/50 hover:text-white border-l-4 border-transparent"
                    }`}
                  >
                    <Icon size={18} className={isActive ? "text-amber-400" : "text-slate-400 group-hover:text-slate-200"} />
                    <span>{item.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Social Links */}
        <div className="pt-6 border-t border-slate-800 mt-auto flex justify-center gap-4">
          <a 
            href="https://www.instagram.com/sunrise.intl.school/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center text-slate-300 hover:bg-amber-500 hover:text-slate-950 transition-all duration-300 hover:-translate-y-1"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
          </a>
          <a 
            href="https://twitter.com/sunriseonline2" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center text-slate-300 hover:bg-amber-500 hover:text-slate-950 transition-all duration-300 hover:-translate-y-1"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
          </a>
          <a 
            href="https://www.youtube.com/channel/UCy5x8Qna7XlnMDeELWGFsSA" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center text-slate-300 hover:bg-amber-500 hover:text-slate-950 transition-all duration-300 hover:-translate-y-1"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17z"/><polygon points="9.7 15 9.7 9 15 12 9.7 15"/></svg>
          </a>
        </div>
      </aside>

      {/* Sidebar Overlay for Mobile */}
      {sidebarOpen && (
        <div 
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 z-40 bg-slate-950/60 backdrop-blur-sm lg:hidden"
        />
      )}

      {/* 2. Main Page Layout Wrapper */}
      <div className="flex-grow lg:pl-72 flex flex-col min-w-0">
        
        {/* Floating Responsive Header */}
        <header className="sticky top-0 z-30 h-20 bg-white/80 backdrop-blur-md border-b border-slate-100 flex items-center justify-between px-6 md:px-8 shadow-sm">
          <button 
            onClick={() => setSidebarOpen(true)}
            className="p-2 -ml-2 text-slate-700 hover:text-slate-900 lg:hidden"
            aria-label="Open Sidebar"
          >
            <Menu size={24} />
          </button>

          {/* Quick Header Contact Info */}
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
            <a href="mailto:sunriseint.school@gmail.com" className="flex items-center gap-2 hover:text-amber-600 transition-colors">
              <Mail size={16} className="text-amber-500" />
              <span>sunriseint.school@gmail.com</span>
            </a>
            <a href="tel:9324120900" className="flex items-center gap-2 hover:text-amber-600 transition-colors">
              <Phone size={16} className="text-amber-500" />
              <span>+91 9324120900</span>
            </a>
          </div>

          {/* Call-to-actions */}
          <div className="flex items-center gap-3">
            <Link 
              href="/enquiry-form" 
              className="px-5 py-2.5 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-xl text-sm font-semibold hover:shadow-md hover:from-amber-600 hover:to-amber-700 transition-all duration-200"
            >
              Enquire Now
            </Link>
            <button 
              onClick={() => setModalOpen(true)}
              className="hidden sm:inline-flex px-5 py-2.5 border border-slate-200 text-slate-700 rounded-xl text-sm font-semibold hover:bg-slate-50 transition-all duration-200"
            >
              Admission Info
            </button>
          </div>
        </header>

        {/* 3. Main Page Render */}
        <main className="flex-grow p-6 md:p-10 max-w-7xl mx-auto w-full">
          {children}
        </main>

        {/* Shared Footer */}
        <footer className="bg-slate-900 text-slate-400 px-6 py-12 md:px-12 mt-16 border-t border-slate-800">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* School Info */}
            <div>
              <h3 className="font-display font-extrabold text-white text-lg mb-4 tracking-wider">
                SUNRISE INTERNATIONAL SCHOOL
              </h3>
              <p className="text-sm leading-relaxed text-slate-400">
                We aim to foster a love of learning, good working habits, the ability to analyze and solve problems, excellent academic standards, high moral, mutual respect and international understanding, social and cultural values.
              </p>
            </div>
            
            {/* Quick Links */}
            <div>
              <h4 className="font-display font-bold text-white text-md mb-4 uppercase tracking-wide relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-8 after:h-0.5 after:bg-amber-500 pb-2">
                Quick Links
              </h4>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <Link href="/about" className="hover:text-amber-400 transition-colors">About Us</Link>
                <Link href="/why-sunrise" className="hover:text-amber-400 transition-colors">Why Choose Us</Link>
                <Link href="/chairman-message" className="hover:text-amber-400 transition-colors">Chairman's Desk</Link>
                <Link href="/online-admission" className="hover:text-amber-400 transition-colors">Admission Enquiry</Link>
                <Link href="/transport-policy" className="hover:text-amber-400 transition-colors">Transport Policy</Link>
                <Link href="/gallery" className="hover:text-amber-400 transition-colors">Gallery</Link>
                <Link href="/faq" className="hover:text-amber-400 transition-colors">FAQ</Link>
                <Link href="/contact" className="hover:text-amber-400 transition-colors">Contact Us</Link>
              </div>
            </div>

            {/* School Address / Contact */}
            <div>
              <h4 className="font-display font-bold text-white text-md mb-4 uppercase tracking-wide relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-8 after:h-0.5 after:bg-amber-500 pb-2">
                Contact Address
              </h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2.5">
                  <span className="text-amber-500 mt-0.5">📍</span>
                  <span>Village Vaalivali, Barvi Dam Road, Opp New Water Tank. Badlapur (West), Dist. Thane. Pin code : 421503.</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="text-amber-500">📧</span>
                  <a href="mailto:sunriseint.school@gmail.com" className="hover:text-white transition-colors">sunriseint.school@gmail.com</a>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="text-amber-500">📞</span>
                  <span>+91-9324120900 / +91-9702313188</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="max-w-7xl mx-auto border-t border-slate-800 mt-10 pt-6 flex flex-col md:flex-row justify-between text-xs text-slate-500 gap-4">
            <p>&copy; {new Date().getFullYear()} Copyright - Sunrise International School</p>
            <p>
              Powered by{" "}
              <a href="http://www.parasightsolutions.com/" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400">
                Parasight Solutions
              </a>
            </p>
          </div>
        </footer>

        {/* 4. Brochure download link (fixed-bottom) */}
        <a 
          href="https://www.sunriseinternationalschool.co.in/static/brochure.pdf" 
          download 
          target="_blank" 
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-40 bg-slate-900 text-white px-5 py-3 rounded-full font-semibold text-xs shadow-premium-lg hover:bg-amber-500 hover:text-slate-950 hover:-translate-y-1 transition-all duration-300 border border-slate-800 flex items-center gap-2 group"
        >
          <Download size={14} className="group-hover:bounce" />
          <span>Download Brochure</span>
        </a>

        {/* 5. Admission Inquiry Dialog/Modal Overlay */}
        {modalOpen && (
          <div className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl p-6 md:p-8 max-w-lg w-full relative shadow-premium-lg border border-slate-100 animate-in fade-in zoom-in-95 duration-200">
              <button 
                onClick={() => setModalOpen(false)}
                className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition-colors"
              >
                <X size={20} />
              </button>
              
              <div className="flex flex-col items-center text-center mt-2">
                <img 
                  src="https://www.sunriseinternationalschool.co.in/static/images/logo.png" 
                  alt="SIS Logo" 
                  className="h-16 w-auto mb-4"
                />
                <h3 className="font-display font-extrabold text-2xl text-slate-900 mb-2">
                  Admission Enquiry
                </h3>
                <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                  Looking for admission in one of the best schools in India? Admissions are open on a first-come, first-serve basis. Seats are limited.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 w-full justify-center">
                  <Link 
                    href="/enquiry-form" 
                    onClick={() => setModalOpen(false)}
                    className="px-6 py-3 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold rounded-xl text-sm transition-all duration-200 text-center w-full"
                  >
                    Enquire Now
                  </Link>
                  <button 
                    onClick={() => setModalOpen(false)}
                    className="px-6 py-3 border border-slate-200 hover:bg-slate-50 text-slate-700 font-semibold rounded-xl text-sm transition-all duration-200 w-full"
                  >
                    Close Window
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
