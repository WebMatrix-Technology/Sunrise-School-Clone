"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Check, ClipboardList, Clock, AlertTriangle, FileCheck, Calculator } from "lucide-react";

export default function OnlineAdmissionPage() {
  const steps = [
    {
      num: "01",
      title: "Online Enquiry Form",
      desc: "Complete the online Admission Enquiry form with correct details."
    },
    {
      num: "02",
      title: "Email Confirmation",
      desc: "An Email with the confirmation on acceptance of your enquiry will be sent to you."
    },
    {
      num: "03",
      title: "Brochure & Checklist",
      desc: "Review the checklist of documents required at the time of submission and download the official School Brochure."
    },
    {
      num: "04",
      title: "Coordinator Call & Visit",
      desc: "A Sunrise Coordinator will contact you to address any questions and schedule a campus visit."
    },
    {
      num: "05",
      title: "Application Form & Fee Link",
      desc: "If seats are available, an application form is issued. After validation, a first term fee payment link is shared."
    },
    {
      num: "06",
      title: "Confirmation of Seat",
      desc: "Seat confirmation is finalized after first-term fees are cleared (online/cheque). Fees are strictly non-refundable."
    }
  ];

  const requiredDocuments = [
    "Photocopy of the student's Birth Certificate and Aadhaar Card.",
    "School Leaving Certificate (can be submitted later if not currently available).",
    "UDISE Number (Unified District Information System for Education) from the previous school.",
    "Photocopy of the previous and current class Report Card.",
    "Photocopy of Address proof (electricity bill, passport, etc.) and Parent's PAN Card.",
    "3 recent Passport size photographs of the student."
  ];

  const ageNorms = [
    { grade: "Nursery", criteria: "3 years completed by 31st December 2026", range: "[01/10/2022 - 31/12/2023]" },
    { grade: "Junior KG", criteria: "4 years completed by 31st December 2026", range: "[01/10/2021 - 31/12/2022]" },
    { grade: "Senior KG", criteria: "5 years completed by 31st December 2026", range: "[01/10/2020 - 31/12/2021]" },
    { grade: "Standard I", criteria: "6 years completed by 31st December 2026", range: "[01/10/2019 - 31/12/2020]" }
  ];

  return (
    <div className="space-y-16">
      {/* HEADER */}
      <section className="space-y-4">
        <span className="text-amber-500 font-display font-bold text-xs uppercase tracking-widest block">
          Admission Process
        </span>
        <h1 className="font-display font-extrabold text-3xl md:text-5xl text-slate-900 tracking-tight">
          Online Admission guidelines
        </h1>
        <p className="text-slate-500 text-sm md:text-base max-w-xl">
          Everything you need to know about criteria, documents, and processing steps for a smooth admission cycle (2026 - 27).
        </p>
      </section>

      {/* 1. WARNING BAR */}
      <div className="bg-amber-500/10 border border-amber-200 text-slate-900 p-5 rounded-2xl flex items-start gap-4 shadow-sm">
        <AlertTriangle className="text-amber-600 shrink-0 mt-0.5" size={20} />
        <div className="text-xs md:text-sm space-y-1">
          <p className="font-bold text-slate-950">Important Admission Notice:</p>
          <p className="text-slate-700 leading-relaxed">
            Admissions are open on a first-come, first-serve basis and seats are strictly limited. Admissions are only confirmed once all necessary documents are validated and first term fee payment is completed. Fees once paid are non-refundable.
          </p>
        </div>
      </div>

      {/* 2. TIMELINE STEPS */}
      <section className="space-y-8">
        <h2 className="font-display font-bold text-2xl text-slate-900 flex items-center gap-2">
          <ClipboardList size={22} className="text-amber-500" />
          <span>Admission Step-By-Step Process</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((st, i) => (
            <div key={i} className="bg-white border border-slate-100 p-6 rounded-2xl shadow-premium relative">
              <span className="font-display font-black text-slate-100 text-5xl absolute top-4 right-4 select-none">
                {st.num}
              </span>
              <div className="relative z-10 space-y-2">
                <h3 className="font-display font-bold text-base text-slate-900">{st.title}</h3>
                <p className="text-slate-600 text-xs md:text-sm leading-relaxed">{st.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. DOCUMENTS CHECKLIST */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-7 bg-white border border-slate-100 p-6 md:p-8 rounded-3xl shadow-premium space-y-6">
          <h2 className="font-display font-bold text-xl text-slate-900 flex items-center gap-2">
            <FileCheck size={20} className="text-amber-500" />
            <span>Document Checklist (Required)</span>
          </h2>
          <p className="text-slate-500 text-xs md:text-sm">
            Please ensure you have photocopies and originals of the following documents ready when submitting your application:
          </p>
          <ul className="space-y-3.5">
            {requiredDocuments.map((doc, idx) => (
              <li key={idx} className="flex items-start gap-3 text-slate-600 text-sm leading-relaxed">
                <div className="p-0.5 rounded-full bg-emerald-500/10 text-emerald-600 mt-1 shrink-0">
                  <Check size={14} />
                </div>
                <span>{doc}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* 4. AGE NORMS TABLE */}
        <div className="lg:col-span-5 bg-white border border-slate-100 p-6 md:p-8 rounded-3xl shadow-premium space-y-6 flex flex-col justify-between">
          <div className="space-y-4">
            <h2 className="font-display font-bold text-xl text-slate-900 flex items-center gap-2">
              <Clock size={20} className="text-amber-500" />
              <span>Age Criteria (2026 - 27)</span>
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm border-collapse">
                <thead>
                  <tr className="border-b border-slate-100 text-slate-400 font-medium text-xs uppercase tracking-wider">
                    <th className="py-2.5">Class</th>
                    <th className="py-2.5">Age / Birth Range</th>
                  </tr>
                </thead>
                <tbody className="text-slate-600 divide-y divide-slate-100">
                  {ageNorms.map((n, i) => (
                    <tr key={i} className="hover:bg-slate-50/50">
                      <td className="py-3 font-semibold text-slate-900">{n.grade}</td>
                      <td className="py-3 text-xs leading-normal">
                        <p>{n.criteria}</p>
                        <p className="text-slate-400 mt-0.5">{n.range}</p>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          
          <div className="pt-6 border-t border-slate-100 mt-6 flex justify-center">
            <Link 
              href="/enquiry-form" 
              className="px-6 py-3.5 bg-slate-900 text-white hover:bg-amber-500 hover:text-slate-950 font-bold rounded-xl text-sm transition-all duration-200 text-center w-full shadow-md"
            >
              Fill Enquiry Form Online
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
