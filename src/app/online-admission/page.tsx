"use client";

import React from "react";
import Link from "next/link";
import { Home } from "lucide-react";

export default function OnlineAdmissionPage() {
  return (
    <div className="space-y-8">
      {/* HERO BANNER SECTION */}
      <section className="relative h-60 rounded-3xl overflow-hidden shadow-premium-lg">
        <img
          src="https://www.sunriseinternationalschool.co.in/static/images/carousel/banner.jpg"
          alt="Online Admission Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-950/60 flex flex-col justify-end p-8 md:p-12 text-white">
          <h1 className="font-display font-black text-2xl md:text-4xl mb-3 tracking-tight">
            Online Admission
          </h1>
          <ol className="flex items-center gap-2 text-xs font-semibold text-slate-300">
            <li>
              <Link href="/" className="hover:text-amber-500 flex items-center gap-1">
                <Home size={14} />
              </Link>
            </li>
            <li>/</li>
            <li className="text-white">Online Admission</li>
          </ol>
        </div>
      </section>

      {/* SINGLE COLUMN ADMISSION CARD */}
      <section className="max-w-4xl mx-auto">
        <div className="bg-white border border-slate-100 p-6 md:p-10 rounded-3xl shadow-premium space-y-8">
          
          {/* Header titles */}
          <div>
            <h4 className="font-display font-black text-xl md:text-2xl text-slate-900 mb-1">
              Online Admission Form
            </h4>
            <h5 className="text-slate-500 font-semibold text-xs md:text-sm uppercase tracking-wider">
              Academic Year 2023 - 24
            </h5>
          </div>

          <hr className="border-slate-100" />

          {/* Subheading prompt */}
          <div className="space-y-2">
            <h4 className="font-display font-bold text-base md:text-lg text-slate-950">
              Seeking Admission in one of the best schools in India?
            </h4>
            <p className="text-slate-700 text-sm font-medium">
              Here are the must-knowns for a smooth Admission Process
            </p>
          </div>

          {/* Guidelines bullet points */}
          <ul className="list-disc pl-5 space-y-4 text-slate-600 text-sm leading-relaxed">
            <li>Complete the online Enquiry form.</li>
            <li>
              An Email with the confirmation on acceptance of your enquiry
              will be sent to you.
            </li>
            <li>
              Go through the list of documents needed while submitting the
              Application form at School Office.You can also download the
              official School Brochure attached in the email.
            </li>
            <li>
              Sunrise Coordinator will call you where you can ask any
              questions and schedule your visit to the School Office for
              the following Process.
            </li>
            <li className="list-none -ml-5 space-y-3">
              <p className="font-semibold text-slate-800">
                Please ensure that the following documents are ready while
                filling the application form :
              </p>
              <ol className="list-decimal pl-5 space-y-2 text-slate-600">
                <li>
                  Photocopy of the student's birth certificate and Aadhaar
                  Card (if applicable).
                </li>
                <li>
                  School leaving certificate (can be submitted later if
                  not currently available).
                </li>
                <li>
                  UDISE Number (Unified District information System for
                  Education) from current school.
                </li>
                <li>
                  Photocopy of the previous and current class Report Card.
                </li>
                <li>Photocopy of Address proof and Parent's Pan Card.</li>
                <li>Passport size photograph of the student.</li>
              </ol>
            </li>
            <li>
              After submitting the application form, if there are seats
              available in the standard that you have applied in, a
              payment link for the first term fees will be provided to
              you. Parents are requested to make the necessary payment
              either online or via cheque.
            </li>
            <li>
              Please mention the name of your ward, and contact number on
              the rear side of the Cheque. Fees once paid will be strictly
              non-refundable.
            </li>
          </ul>

          {/* Bottom notice paragraph */}
          <p className="text-slate-600 text-sm leading-relaxed pt-2">
            Admissions are on a first come first serve basis and seats are
            limited. Admissions will only be confirmed once the necessary
            documents and the first term fees payment is made. Fees once
            paid will be strictly non-refundable.
          </p>

          <hr className="border-slate-100" />

          {/* Table section */}
          <div className="space-y-4">
            <h4 className="font-display font-bold text-sm md:text-base text-slate-900">
              The age norms for academic year 2023/2024 is as follows
            </h4>
            <div className="overflow-hidden border border-slate-100 rounded-2xl">
              <table className="w-full text-left text-sm border-collapse">
                <tbody className="divide-y divide-slate-100 text-slate-700 bg-white">
                  <tr>
                    <td className="p-4 font-bold text-slate-900 border-r border-slate-100 w-1/3">Nursery</td>
                    <td className="p-4">3 yrs complete by 31st December 2023 [1/10/2019 - 31/12/2020]</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-slate-900 border-r border-slate-100">Junior KG</td>
                    <td className="p-4">4 yrs complete by 31st December 2023 [1/10/2018 - 31/12/2019]</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-slate-900 border-r border-slate-100">Senior KG</td>
                    <td className="p-4">5 yrs complete by 31st December 2023 [1/10/2017 - 31/12/2018]</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-slate-900 border-r border-slate-100">Standard I</td>
                    <td className="p-4">6 yrs complete by 31st December 2023 [1/10/2016 - 31/12/2017]</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <hr className="border-slate-100" />

          {/* Action buttons at the bottom */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              href="/admission-process"
              className="px-6 py-3 bg-slate-900 hover:bg-amber-500 hover:text-slate-950 text-white font-semibold text-xs md:text-sm rounded-xl transition-all shadow-md"
            >
              Admission Process
            </Link>
            <Link
              href="/enquiry-form"
              className="px-6 py-3 border border-slate-200 hover:bg-slate-50 text-slate-700 font-semibold text-xs md:text-sm rounded-xl transition-all"
            >
              Enquiry Form
            </Link>
          </div>

        </div>
      </section>
    </div>
  );
}
