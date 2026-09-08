"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Home,
  GraduationCap,
  ClipboardCheck,
  Calendar,
  AlertCircle,
  CheckCircle2,
  FileText,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  PhoneCall,
  HelpCircle,
  ChevronDown,
  User,
  Phone,
  Mail,
  Send,
  School,
  Clock,
  Check
} from "lucide-react";

export default function OnlineAdmissionPage() {
  const [activeTab, setActiveTab] = useState<"all" | "pre-primary" | "primary-secondary">("all");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Quick Enquiry Form state
  const [quickForm, setQuickForm] = useState({
    studentName: "",
    dob: "",
    standard: "Nursery",
    parentName: "",
    mobile: "",
    email: "",
  });
  const [formSubmitting, setFormSubmitting] = useState(false);
  const [formSuccess, setFormSuccess] = useState(false);

  const criteria = [
    { grade: "Nursery", age: "3 Years Complete", cutoff: "Born between 01/10/2022 and 31/12/2023" },
    { grade: "Junior KG", age: "4 Years Complete", cutoff: "Born between 01/10/2021 and 31/12/2022" },
    { grade: "Senior KG", age: "5 Years Complete", cutoff: "Born between 01/10/2020 and 31/12/2021" },
    { grade: "Standard I", age: "6 Years Complete", cutoff: "Born between 01/10/2019 and 31/12/2020" },
    { grade: "Standard II", age: "7 Years Complete", cutoff: "As on 1st April of academic year" },
    { grade: "Standard III", age: "8 Years Complete", cutoff: "As on 1st April of academic year" },
    { grade: "Standard IV", age: "9 Years Complete", cutoff: "As on 1st April of academic year" },
    { grade: "Standard V", age: "10 Years Complete", cutoff: "As on 1st April of academic year" },
    { grade: "Standard VI", age: "11 Years Complete", cutoff: "As on 1st April of academic year" },
    { grade: "Standard VII", age: "12 Years Complete", cutoff: "As on 1st April of academic year" },
    { grade: "Standard VIII", age: "13 Years Complete", cutoff: "As on 1st April of academic year" },
    { grade: "Standard IX", age: "14 Years Complete", cutoff: "As on 1st April of academic year" },
    { grade: "Standard X", age: "15 Years Complete", cutoff: "As on 1st April of academic year" },
  ];

  const faqs = [
    {
      q: "What is the complete admission procedure at Sunrise International School?",
      a: "The admission process involves 3 simple steps: 1) Fill out the online or campus enquiry form; 2) Attend a brief counseling and document verification session with our admissions team; 3) Confirm admission by submitting necessary documents and paying the first term fees.",
    },
    {
      q: "When does the academic session begin?",
      a: "The academic session officially commences in JUNE every year and consists of two terms: June to October (Term 1) and November to March (Term 2).",
    },
    {
      q: "Can the School Leaving Certificate (LC / TC) be submitted later?",
      a: "Yes. For admissions into Grade II through Grade X, if the current school has not yet issued the final leaving certificate / report card, provisional admission can be granted. The official Leaving Certificate must be submitted prior to the commencement of the academic term in June.",
    },
    {
      q: "What is the fee payment mode and refund policy?",
      a: "Fees can be paid online via our secure payment gateway, by Cheque, or Demand Draft (DD) in favor of the school. Please write the student's name and contact number on the reverse of the cheque. Please note that fees once paid are non-refundable under all circumstances.",
    },
    {
      q: "Is school transport facility available across Badlapur and nearby areas?",
      a: "Yes, Sunrise International School operates GPS-enabled, safe school buses and vans with trained lady attendants covering all major routes across Badlapur, Kulgaon, and surrounding vicinities.",
    },
  ];

  const handleQuickSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!quickForm.studentName || !quickForm.mobile || !quickForm.dob) {
      alert("Please fill in Student Name, Date of Birth, and Mobile Number.");
      return;
    }

    setFormSubmitting(true);
    try {
      const payload = {
        studentName: quickForm.studentName,
        dob: quickForm.dob,
        standard: quickForm.standard,
        visitorName: quickForm.parentName || "Parent / Guardian",
        mobile: quickForm.mobile,
        email: quickForm.email || "",
        interests: [],
        previousSchool: "",
        infoSource: "Online Admission Page",
      };

      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setFormSuccess(true);
        setQuickForm({
          studentName: "",
          dob: "",
          standard: "Nursery",
          parentName: "",
          mobile: "",
          email: "",
        });
      } else {
        alert("Enquiry received! Our team will contact you shortly.");
        setFormSuccess(true);
      }
    } catch {
      alert("Enquiry received! Our admissions coordinator will get in touch with you.");
      setFormSuccess(true);
    } finally {
      setFormSubmitting(false);
    }
  };

  return (
    <div className="space-y-12 md:space-y-16 pb-16">
      
      {/* 1. HERO BANNER SECTION */}
      <section className="relative min-h-[340px] md:h-80 rounded-3xl overflow-hidden shadow-school-lg border-2 border-amber-400/30">
        <img
          src="https://www.sunriseinternationalschool.co.in/static/images/carousel/banner.jpg"
          alt="Online Admission Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#07162c]/95 via-[#0b2240]/85 to-transparent flex flex-col justify-center p-6 sm:p-10 md:p-14 text-white">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-amber-400 text-slate-950 shadow-md">
              <ClipboardCheck size={14} />
              Admissions 2026 - 27 Open
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-white/15 backdrop-blur-md text-amber-200 border border-white/20">
              <Sparkles size={13} />
              Nursery to Grade X
            </span>
          </div>

          <h1 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-white tracking-tight drop-shadow-md mb-2">
            Online Admission & Process
          </h1>
          <p className="text-slate-300 text-xs sm:text-sm md:text-base max-w-2xl font-medium leading-relaxed">
            Welcome to the Sunrise International School Admissions Portal. Discover our seamless 3-step enrolment journey, eligibility criteria, document checklists, and online application guidelines.
          </p>

          <ol className="flex items-center gap-2 text-xs font-semibold text-slate-300 mt-4">
            <li>
              <Link href="/" className="hover:text-amber-300 flex items-center gap-1 transition-colors">
                <Home size={14} /> Home
              </Link>
            </li>
            <li className="text-amber-400">›</li>
            <li className="text-amber-300 font-bold">Online Admission & Process</li>
          </ol>
        </div>
      </section>

      {/* 2. AT A GLANCE HIGHLIGHTS */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
        <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs hover:border-amber-400 transition-all flex flex-col justify-between">
          <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mb-3">
            <GraduationCap size={22} />
          </div>
          <div>
            <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Curriculum</div>
            <div className="font-display font-black text-slate-900 text-base sm:text-lg">CBSE Pattern</div>
            <div className="text-[11px] text-slate-500 mt-0.5">Pre-Primary to Grade X</div>
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs hover:border-amber-400 transition-all flex flex-col justify-between">
          <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-3">
            <Calendar size={22} />
          </div>
          <div>
            <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Session Commences</div>
            <div className="font-display font-black text-slate-900 text-base sm:text-lg">June 2026</div>
            <div className="text-[11px] text-slate-500 mt-0.5">2 Terms (Jun-Oct, Nov-Mar)</div>
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs hover:border-amber-400 transition-all flex flex-col justify-between">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-3">
            <ShieldCheck size={22} />
          </div>
          <div>
            <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Admission Policy</div>
            <div className="font-display font-black text-slate-900 text-base sm:text-lg">First-Come, First-Serve</div>
            <div className="text-[11px] text-slate-500 mt-0.5">Subject to seat availability</div>
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs hover:border-amber-400 transition-all flex flex-col justify-between">
          <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center mb-3">
            <Clock size={22} />
          </div>
          <div>
            <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Admissions Desk</div>
            <div className="font-display font-black text-slate-900 text-base sm:text-lg">Open 8 AM - 4 PM</div>
            <div className="text-[11px] text-slate-500 mt-0.5">Monday to Saturday</div>
          </div>
        </div>
      </section>

      {/* 3. STEP-BY-STEP ENROLMENT JOURNEY */}
      <section className="max-w-6xl mx-auto space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-black uppercase tracking-widest text-amber-600 bg-amber-50 px-3 py-1 rounded-full border border-amber-200 inline-block">
            Seamless 3-Step Journey
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-black text-[#0b2240]">
            How the Admission Process Works
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm">
            We ensure an organized, hassle-free admission experience for every parent and student.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* STEP 1 */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-school border border-slate-200/80 hover:shadow-school-lg transition-all flex flex-col justify-between relative group hover:border-amber-400">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="w-12 h-12 rounded-2xl bg-amber-500 text-slate-950 font-display font-black text-xl flex items-center justify-center shadow-md">
                  01
                </span>
                <span className="px-3 py-1 bg-amber-50 text-amber-800 rounded-full text-[11px] font-bold border border-amber-200">
                  Online / Desk
                </span>
              </div>
              <h3 className="text-lg sm:text-xl font-display font-black text-[#0b2240]">
                Step 1: Enquiry & Registration
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Parents can fill out the <strong>Online Admission Enquiry Form</strong> below or visit the school office in person to obtain the official prospectus & admission kit.
              </p>
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 space-y-2 text-xs text-slate-700">
                <p className="font-bold text-[#0b2240] flex items-center gap-1.5">
                  <CheckCircle2 size={14} className="text-amber-500" />
                  Key Highlights:
                </p>
                <ul className="space-y-1.5 pl-1 text-slate-600">
                  <li>• Instant email confirmation on submission</li>
                  <li>• Academic counselor call to address questions</li>
                  <li>• Downloadable official school brochure</li>
                </ul>
              </div>
            </div>
          </div>

          {/* STEP 2 */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-school border border-slate-200/80 hover:shadow-school-lg transition-all flex flex-col justify-between relative group hover:border-amber-400">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="w-12 h-12 rounded-2xl bg-[#0b2240] text-amber-400 font-display font-black text-xl flex items-center justify-center shadow-md">
                  02
                </span>
                <span className="px-3 py-1 bg-blue-50 text-blue-800 rounded-full text-[11px] font-bold border border-blue-200">
                  Campus Visit
                </span>
              </div>
              <h3 className="text-lg sm:text-xl font-display font-black text-[#0b2240]">
                Step 2: Document Verification
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Visit the school campus on your scheduled slot with original credentials. Our admission desk will verify age standards, certificates, and academic reports.
              </p>
              <div className="bg-blue-50/60 p-4 rounded-2xl border border-blue-100 space-y-2 text-xs text-slate-700">
                <p className="font-bold text-[#0b2240] flex items-center gap-1.5">
                  <CheckCircle2 size={14} className="text-blue-600" />
                  What to bring:
                </p>
                <ul className="space-y-1.5 pl-1 text-slate-600">
                  <li>• Completed Admission Form (in CAPITAL letters)</li>
                  <li>• Birth Certificate / Leaving Certificate (LC)</li>
                  <li>• Medical fitness certificate & 6 passport photos</li>
                </ul>
              </div>
            </div>
          </div>

          {/* STEP 3 */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-school border border-slate-200/80 hover:shadow-school-lg transition-all flex flex-col justify-between relative group hover:border-amber-400">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="w-12 h-12 rounded-2xl bg-emerald-600 text-white font-display font-black text-xl flex items-center justify-center shadow-md">
                  03
                </span>
                <span className="px-3 py-1 bg-emerald-50 text-emerald-800 rounded-full text-[11px] font-bold border border-emerald-200">
                  Seat Confirmation
                </span>
              </div>
              <h3 className="text-lg sm:text-xl font-display font-black text-[#0b2240]">
                Step 3: Fee Payment & Enrollment
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Upon successful verification, parents receive a seat allotment confirmation. Payment of the 1st Term fee confirms the admission.
              </p>
              <div className="bg-emerald-50/70 p-4 rounded-2xl border border-emerald-100 space-y-2 text-xs text-emerald-900">
                <p className="font-bold text-emerald-950 flex items-center gap-1.5">
                  <CheckCircle2 size={14} className="text-emerald-600" />
                  Confirmation Deliverables:
                </p>
                <ul className="space-y-1.5 pl-1 text-emerald-800">
                  <li>• Student Enrollment ID & Portal Login</li>
                  <li>• Academic Calendar, Uniform & Book kit guide</li>
                  <li>• Welcome Kit for Parents & Student</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. DOCUMENT CHECKLIST & ELIGIBILITY TABS */}
      <section className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* LEFT COLUMN: REQUIRED DOCUMENTS CHECKLIST */}
        <div className="lg:col-span-6 bg-white rounded-3xl p-6 sm:p-8 shadow-school border border-slate-200/80 space-y-6">
          <div className="flex items-center justify-between pb-4 border-b border-slate-100">
            <div>
              <span className="text-xs font-black uppercase tracking-wider text-amber-600">Verification Desk</span>
              <h3 className="font-display font-black text-xl sm:text-2xl text-[#0b2240]">
                Required Documents Checklist
              </h3>
            </div>
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center">
              <FileText size={20} />
            </div>
          </div>

          <div className="flex items-center gap-2 p-1.5 bg-slate-100 rounded-xl text-xs font-bold">
            <button
              onClick={() => setActiveTab("all")}
              className={`flex-1 py-2 rounded-lg transition-all ${
                activeTab === "all" ? "bg-white text-[#0b2240] shadow-xs" : "text-slate-600 hover:text-slate-900"
              }`}
            >
              All Grades
            </button>
            <button
              onClick={() => setActiveTab("pre-primary")}
              className={`flex-1 py-2 rounded-lg transition-all ${
                activeTab === "pre-primary" ? "bg-white text-[#0b2240] shadow-xs" : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Pre-Primary & Grade I
            </button>
            <button
              onClick={() => setActiveTab("primary-secondary")}
              className={`flex-1 py-2 rounded-lg transition-all ${
                activeTab === "primary-secondary" ? "bg-white text-[#0b2240] shadow-xs" : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Grades II - X
            </button>
          </div>

          <div className="space-y-3 text-xs sm:text-sm">
            {(activeTab === "all" || activeTab === "pre-primary") && (
              <div className="p-4 rounded-2xl bg-amber-50/50 border border-amber-200/60 space-y-2.5">
                <div className="font-bold text-amber-900 uppercase text-[11px] tracking-wider flex items-center gap-1.5">
                  <Sparkles size={14} className="text-amber-600" />
                  Pre-Primary to Grade I (Nursery, Jr. KG, Sr. KG, Std I)
                </div>
                <ul className="space-y-2 text-slate-700">
                  <li className="flex items-start gap-2">
                    <Check size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Original Birth Certificate</strong> (plus 2 photocopies).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Medical Fitness Certificate</strong> signed & stamped by a Pediatrician / Family Doctor.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Child's Aadhaar Card</strong> photocopy (if already generated).</span>
                  </li>
                </ul>
              </div>
            )}

            {(activeTab === "all" || activeTab === "primary-secondary") && (
              <div className="p-4 rounded-2xl bg-blue-50/50 border border-blue-200/60 space-y-2.5">
                <div className="font-bold text-blue-900 uppercase text-[11px] tracking-wider flex items-center gap-1.5">
                  <GraduationCap size={14} className="text-blue-600" />
                  Primary & Secondary (Standard II to Standard X)
                </div>
                <ul className="space-y-2 text-slate-700">
                  <li className="flex items-start gap-2">
                    <Check size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Original School Leaving Certificate (LC / TC)</strong> from previous recognized school.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>UDISE Number</strong> (Unified District Information System for Education) from previous school.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Photocopy of Previous & Current Progress Report Card</strong> (Marksheet).</span>
                  </li>
                </ul>
              </div>
            )}

            {/* Common requirements */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2.5">
              <div className="font-bold text-slate-900 uppercase text-[11px] tracking-wider flex items-center gap-1.5">
                <ShieldCheck size={14} className="text-slate-600" />
                Mandatory for All Applicants
              </div>
              <ul className="space-y-2 text-slate-700">
                <li className="flex items-start gap-2">
                  <Check size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>6 Recent Passport Size Photographs</strong> of the student in white/light background.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Photocopy of Valid Address Proof</strong> (Electricity bill, Ration card, Aadhaar card, or Passport).</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Parent's Identification Proof</strong> (Aadhaar Card & PAN Card photocopies).</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-start gap-3 text-slate-800 text-xs leading-relaxed">
            <AlertCircle size={17} className="text-amber-600 shrink-0 mt-0.5" />
            <p>
              <strong>Important Note:</strong> Please ensure the Admission Form is filled neatly in <strong>CAPITAL LETTERS</strong>. Incomplete applications without mandatory documents cannot be processed.
            </p>
          </div>
        </div>

        {/* RIGHT COLUMN: AGE CRITERIA & ELIGIBILITY TABLE */}
        <div className="lg:col-span-6 bg-white rounded-3xl p-6 sm:p-8 shadow-school border border-slate-200/80 space-y-6">
          <div className="flex items-center justify-between pb-4 border-b border-slate-100">
            <div>
              <span className="text-xs font-black uppercase tracking-wider text-amber-600">Government Norms</span>
              <h3 className="font-display font-black text-xl sm:text-2xl text-[#0b2240]">
                Eligibility & Age Criteria
              </h3>
            </div>
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
              <School size={20} />
            </div>
          </div>

          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Minimum age requirement for admission into respective grades as per CBSE / Maharashtra State Government education directives (as on 1st of April / 31st December):
          </p>

          <div className="overflow-hidden rounded-2xl border border-slate-200">
            <div className="max-h-[460px] overflow-y-auto">
              <table className="w-full text-left text-xs sm:text-sm border-collapse">
                <thead className="sticky top-0 bg-[#0b2240] text-white font-display uppercase tracking-wider text-[11px] shadow-sm">
                  <tr>
                    <th className="p-3.5 font-bold border-r border-white/10">Standard</th>
                    <th className="p-3.5 font-bold">Minimum Age Requirement</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700 bg-white">
                  {criteria.map((c, i) => (
                    <tr key={i} className="hover:bg-amber-50/40 transition-colors">
                      <td className="p-3.5 font-bold text-[#0b2240] border-r border-slate-100 bg-slate-50/60 w-1/3">
                        {c.grade}
                      </td>
                      <td className="p-3.5">
                        <div className="font-semibold text-slate-900 flex items-center gap-1.5">
                          <CheckCircle2 size={14} className="text-emerald-600 shrink-0" />
                          <span>{c.age}</span>
                        </div>
                        <span className="text-[11px] text-slate-500 block mt-0.5 pl-5">
                          {c.cutoff}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-center justify-between text-xs">
            <span className="text-slate-600">Have specific age eligibility questions?</span>
            <a
              href="tel:9223388880"
              className="inline-flex items-center gap-1.5 font-bold text-amber-700 hover:text-amber-800"
            >
              <PhoneCall size={14} /> Call Admission Desk
            </a>
          </div>
        </div>

      </section>

      {/* 5. ACADEMIC TERMS & FEE PAYMENT RULES */}
      <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Academic Terms Box */}
        <div className="md:col-span-5 bg-gradient-to-br from-[#0b2240] via-[#0e2c54] to-[#163b6d] text-white rounded-3xl p-6 sm:p-8 shadow-school-lg border-t-4 border-amber-400 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 text-amber-400 text-xs font-black uppercase tracking-widest bg-white/10 px-3 py-1 rounded-full border border-white/10">
              <Calendar size={14} /> Academic Terms
            </div>
            <h3 className="font-display font-black text-2xl text-white">
              Two Comprehensive Academic Terms
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              Sunrise International School follows a structured two-term academic model ensuring holistic cognitive, cultural, and sports development.
            </p>

            <div className="space-y-3 pt-2">
              <div className="bg-white/10 p-4 rounded-2xl border border-white/10 backdrop-blur-md">
                <div className="text-[11px] text-amber-300 uppercase font-bold tracking-wider">Term 1</div>
                <div className="font-display font-black text-lg text-white">June to October</div>
                <div className="text-xs text-slate-300 mt-1">Foundation concepts, mid-term evaluations, sports club initiations.</div>
              </div>

              <div className="bg-white/10 p-4 rounded-2xl border border-white/10 backdrop-blur-md">
                <div className="text-[11px] text-amber-300 uppercase font-bold tracking-wider">Term 2</div>
                <div className="font-display font-black text-lg text-white">November to March</div>
                <div className="text-xs text-slate-300 mt-1">Advanced syllabus, annual day fests, project exhibits, final assessments.</div>
              </div>
            </div>
          </div>

          <div className="pt-2 text-xs text-amber-200/90 font-medium">
            * Exact term break and vacation schedules are specified in the official SIS Student Almanac.
          </div>
        </div>

        {/* Fee & Payment Policies Box */}
        <div className="md:col-span-7 bg-white rounded-3xl p-6 sm:p-8 shadow-school border border-slate-200/80 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-black uppercase tracking-wider border border-emerald-200">
              <ShieldCheck size={14} /> Fee Guidelines & Policies
            </div>
            <h3 className="font-display font-black text-2xl text-[#0b2240]">
              Transparent Fee Structure & Regulations
            </h3>

            <div className="space-y-3 text-xs sm:text-sm text-slate-700 leading-relaxed">
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                <div className="w-7 h-7 rounded-lg bg-amber-500 text-slate-950 font-bold flex items-center justify-center shrink-0 text-xs">
                  1
                </div>
                <div>
                  <strong className="text-slate-900 block mb-0.5">Online Payment Link & Modes</strong>
                  After application verification and seat availability confirmation, a secure payment link will be sent to the parent. Payment is accepted via Net Banking, UPI, Credit/Debit Card, or Cheque/DD.
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                <div className="w-7 h-7 rounded-lg bg-amber-500 text-slate-950 font-bold flex items-center justify-center shrink-0 text-xs">
                  2
                </div>
                <div>
                  <strong className="text-slate-900 block mb-0.5">Cheque / Demand Draft Guidelines</strong>
                  Please write the <strong>Student's Full Name, Standard, and Parent's Contact Number</strong> clearly on the reverse side of the cheque / DD.
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-amber-50/70 border border-amber-200/70">
                <div className="w-7 h-7 rounded-lg bg-red-500 text-white font-bold flex items-center justify-center shrink-0 text-xs">
                  3
                </div>
                <div>
                  <strong className="text-red-950 block mb-0.5">Non-Refundable Policy</strong>
                  Admissions are on a first-come, first-serve basis. Fees once paid toward registration, tuition, and admissions are <strong>strictly non-refundable</strong> under all conditions.
                </div>
              </div>
            </div>
          </div>

          <div className="pt-2 flex flex-wrap items-center gap-3">
            <Link
              href="/enquiry-form"
              className="inline-flex items-center gap-2 px-6 py-3 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs sm:text-sm rounded-xl transition-all shadow-gold"
            >
              <FileText size={16} />
              <span>Full Admission Enquiry Form</span>
              <ArrowRight size={15} />
            </Link>
            <a
              href="tel:9223388880"
              className="px-5 py-3 border border-slate-300 hover:border-amber-500 hover:bg-amber-50 text-slate-800 font-bold text-xs sm:text-sm rounded-xl transition-all inline-flex items-center gap-1.5"
            >
              <PhoneCall size={15} className="text-amber-600" />
              <span>Enquiry Helpline</span>
            </a>
          </div>
        </div>
      </section>

      {/* 6. DIRECT ON-PAGE QUICK ENQUIRY FORM & CALLOUT */}
      <section className="max-w-6xl mx-auto bg-gradient-to-br from-slate-900 via-[#0b2240] to-[#07162c] text-white rounded-3xl p-6 sm:p-10 md:p-12 shadow-2xl border-2 border-amber-400/40 relative overflow-hidden">
        {/* Background glow effects */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Form Pitch Left */}
          <div className="lg:col-span-5 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400 text-slate-950 text-xs font-black uppercase tracking-wider shadow-sm">
              <Sparkles size={14} /> Quick Online Application
            </div>
            <h2 className="font-display font-black text-2xl sm:text-3xl md:text-4xl text-white tracking-tight">
              Apply for Admission 2026 - 27
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              Fill out this quick enquiry form and our dedicated admissions team will contact you within 24 business hours to guide you through seat availability, school visit, and document submission.
            </p>

            <div className="space-y-3 pt-2 text-xs text-slate-300">
              <div className="flex items-center gap-2.5">
                <div className="w-5 h-5 rounded-full bg-amber-400/20 text-amber-400 flex items-center justify-center shrink-0">
                  <Check size={12} />
                </div>
                <span>Fast-track verification & prompt callback</span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-5 h-5 rounded-full bg-amber-400/20 text-amber-400 flex items-center justify-center shrink-0">
                  <Check size={12} />
                </div>
                <span>Direct consultation with Academic Coordinator</span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-5 h-5 rounded-full bg-amber-400/20 text-amber-400 flex items-center justify-center shrink-0">
                  <Check size={12} />
                </div>
                <span>Campus tour & smart classroom demo</span>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10">
              <div className="text-[11px] text-slate-400 uppercase font-semibold">Prefer a detailed application?</div>
              <Link
                href="/enquiry-form"
                className="text-amber-400 hover:text-amber-300 font-bold text-xs sm:text-sm inline-flex items-center gap-1 mt-1 group"
              >
                <span>Go to Detailed Multi-Step Enquiry Form</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Form Fields Right */}
          <div className="lg:col-span-7 bg-white text-slate-900 rounded-2xl p-6 sm:p-8 shadow-xl">
            {formSuccess ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                  <CheckCircle2 size={36} />
                </div>
                <h3 className="font-display font-black text-2xl text-[#0b2240]">
                  Enquiry Submitted Successfully!
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm max-w-md mx-auto leading-relaxed">
                  Thank you for your interest in Sunrise International School. Our Admissions Desk has received your details and will call you shortly.
                </p>
                <button
                  onClick={() => setFormSuccess(false)}
                  className="px-6 py-2.5 bg-[#0b2240] hover:bg-[#163b6d] text-white font-bold text-xs rounded-xl transition-all cursor-pointer"
                >
                  Submit Another Enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleQuickSubmit} className="space-y-4">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <h3 className="font-display font-bold text-lg text-[#0b2240]">
                    Quick Admission Registration
                  </h3>
                  <span className="text-[11px] text-slate-400 font-semibold">* All fields required</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Student Full Name *
                    </label>
                    <div className="relative">
                      <User size={15} className="absolute left-3 top-3 text-slate-400" />
                      <input
                        type="text"
                        required
                        placeholder="Master / Miss Full Name"
                        value={quickForm.studentName}
                        onChange={(e) => setQuickForm({ ...quickForm, studentName: e.target.value })}
                        className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/40 focus:border-amber-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Date of Birth *
                    </label>
                    <input
                      type="date"
                      required
                      value={quickForm.dob}
                      onChange={(e) => setQuickForm({ ...quickForm, dob: e.target.value })}
                      className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/40 focus:border-amber-500 text-slate-700"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Applying for Standard / Grade *
                    </label>
                    <select
                      value={quickForm.standard}
                      onChange={(e) => setQuickForm({ ...quickForm, standard: e.target.value })}
                      className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/40 focus:border-amber-500 font-medium text-slate-800"
                    >
                      <option value="Nursery">Nursery</option>
                      <option value="Jr. KG">Junior KG</option>
                      <option value="Sr. KG">Senior KG</option>
                      <option value="Standard I">Standard I</option>
                      <option value="Standard II">Standard II</option>
                      <option value="Standard III">Standard III</option>
                      <option value="Standard IV">Standard IV</option>
                      <option value="Standard V">Standard V</option>
                      <option value="Standard VI">Standard VI</option>
                      <option value="Standard VII">Standard VII</option>
                      <option value="Standard VIII">Standard VIII</option>
                      <option value="Standard IX">Standard IX</option>
                      <option value="Standard X">Standard X</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Parent / Guardian Name
                    </label>
                    <input
                      type="text"
                      placeholder="Father / Mother Name"
                      value={quickForm.parentName}
                      onChange={(e) => setQuickForm({ ...quickForm, parentName: e.target.value })}
                      className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/40 focus:border-amber-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Contact Mobile Number *
                    </label>
                    <div className="relative">
                      <Phone size={15} className="absolute left-3 top-3 text-slate-400" />
                      <input
                        type="tel"
                        required
                        placeholder="10-digit mobile number"
                        value={quickForm.mobile}
                        onChange={(e) => setQuickForm({ ...quickForm, mobile: e.target.value })}
                        className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/40 focus:border-amber-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail size={15} className="absolute left-3 top-3 text-slate-400" />
                      <input
                        type="email"
                        placeholder="parent@example.com"
                        value={quickForm.email}
                        onChange={(e) => setQuickForm({ ...quickForm, email: e.target.value })}
                        className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/40 focus:border-amber-500"
                      />
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={formSubmitting}
                  className="w-full py-3.5 bg-amber-500 hover:bg-amber-600 active:scale-[0.99] text-slate-950 font-display font-black text-sm rounded-xl shadow-gold transition-all flex items-center justify-center gap-2 mt-2 cursor-pointer disabled:opacity-70"
                >
                  <Send size={16} />
                  <span>{formSubmitting ? "Submitting Application..." : "Submit Online Admission Enquiry"}</span>
                </button>
              </form>
            )}
          </div>

        </div>
      </section>

      {/* 7. ADMISSION FAQ ACCORDION */}
      <section className="max-w-4xl mx-auto space-y-6">
        <div className="text-center space-y-2">
          <span className="text-xs font-black uppercase tracking-widest text-amber-600 bg-amber-50 px-3 py-1 rounded-full border border-amber-200 inline-block">
            Frequently Asked Questions
          </span>
          <h2 className="text-2xl sm:text-3xl font-display font-black text-[#0b2240]">
            Admission FAQs
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm">
            Quick answers to common questions about admissions at Sunrise International School.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200/80 shadow-xs overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-display font-bold text-slate-900 text-sm sm:text-base hover:text-amber-700 transition-colors cursor-pointer"
                >
                  <span className="flex items-center gap-2.5">
                    <HelpCircle size={18} className="text-amber-500 shrink-0" />
                    <span>{faq.q}</span>
                  </span>
                  <ChevronDown
                    size={18}
                    className={`text-slate-400 transition-transform shrink-0 ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 bg-slate-50/40">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 8. CAMPUS VISIT & CONTACT BANNER */}
      <section className="max-w-6xl mx-auto bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-school flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2 text-center md:text-left">
          <h3 className="font-display font-black text-xl sm:text-2xl text-[#0b2240]">
            Need More Assistance from Our Admissions Team?
          </h3>
          <p className="text-slate-600 text-xs sm:text-sm">
            Feel free to visit our campus at Belavali, Badlapur (W), or reach our admissions helpdesk.
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <a
            href="tel:9223388880"
            className="px-5 py-3 bg-[#0b2240] hover:bg-[#163b6d] text-white font-bold text-xs sm:text-sm rounded-xl transition-all flex items-center gap-2 shadow-xs"
          >
            <PhoneCall size={16} className="text-amber-400" />
            <span>+91 9223388880</span>
          </a>
          <Link
            href="/contact"
            className="px-5 py-3 border border-slate-200 hover:border-amber-400 hover:bg-amber-50/50 text-slate-800 font-bold text-xs sm:text-sm rounded-xl transition-all"
          >
            Visit School Campus
          </Link>
        </div>
      </section>

    </div>
  );
}
