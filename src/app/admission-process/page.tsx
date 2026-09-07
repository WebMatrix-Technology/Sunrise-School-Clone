"use client";

import React from "react";
import Link from "next/link";
import { Home } from "lucide-react";

export default function AdmissionProcessPage() {
  const criteria = [
    { grade: "Nursery", age: "3 Years Complete" },
    { grade: "Junior KG", age: "4 Years Complete" },
    { grade: "Senior KG", age: "5 Years Complete" },
    { grade: "I Standard", age: "6 Years Complete" },
    { grade: "II Standard", age: "7 Years Complete" },
    { grade: "III Standard", age: "8 Years Complete" },
    { grade: "IV Standard", age: "9 Years Complete" },
    { grade: "V Standard", age: "10 Years Complete" },
    { grade: "VI Standard", age: "11 Years Complete" },
    { grade: "VII Standard", age: "12 Years Complete" },
    { grade: "VIII Standard", age: "13 Years Complete" },
    { grade: "IX  Standard", age: "14 Years Complete" },
    { grade: "X  Standard", age: "15 Years Complete" },
  ];

  return (
    <div className="space-y-8">
      {/* HERO BANNER SECTION */}
      <section className="relative h-60 rounded-3xl overflow-hidden shadow-premium-lg">
        <img
          src="https://www.sunriseinternationalschool.co.in/static/images/carousel/banner.jpg"
          alt="Admission Process Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-950/60 flex flex-col justify-end p-8 md:p-12 text-white">
          <h1 className="font-display font-black text-2xl md:text-4xl mb-3 tracking-tight">
            Admission Process
          </h1>
          <ol className="flex items-center gap-2 text-xs font-semibold text-slate-300">
            <li>
              <Link href="/" className="hover:text-amber-500 flex items-center gap-1">
                <Home size={14} />
              </Link>
            </li>
            <li>/</li>
            <li className="text-white">Admission Process</li>
          </ol>
        </div>
      </section>

      {/* SINGLE COLUMN ADMISSION CARD */}
      <section className="max-w-4xl mx-auto">
        <div className="bg-white border border-slate-100 p-6 md:p-10 rounded-3xl shadow-premium space-y-8">
          
          {/* Intro text */}
          <div className="text-slate-700 text-sm md:text-base leading-relaxed space-y-2">
            <p>
              Admissions currently open for Nursery till X Standard. <br />
              SIS shall seek candidates from diverse social and cultural
              backgrounds who demonstrate a desire to continuously learn and
              grow. <br />
              The school's academic session commences in JUNE each year.
            </p>
          </div>

          {/* Terms info */}
          <div className="space-y-1 bg-slate-50 p-4 rounded-2xl border border-slate-100 w-fit">
            <h6 className="font-bold text-xs md:text-sm text-slate-900">
              1st Term - June to October
            </h6>
            <h6 className="font-bold text-xs md:text-sm text-slate-900">
              2nd Term - November to March
            </h6>
          </div>

          <hr className="border-slate-100" />

          {/* Eligibility Criteria table */}
          <div className="space-y-4">
            <h6 className="font-display font-extrabold text-sm md:text-base text-slate-900">
              Eligibility Criteria:
            </h6>
            <p className="text-slate-500 text-xs md:text-sm -mt-2">
              The minimum age of the student, as on 1st of April.
            </p>
            
            <div className="overflow-hidden border border-slate-100 rounded-2xl max-w-md">
              <table className="w-full text-left text-sm border-collapse">
                <tbody className="divide-y divide-slate-100 text-slate-700 bg-white">
                  {criteria.map((c, i) => (
                    <tr key={i} className="hover:bg-slate-50/50">
                      <td className="p-3 font-semibold text-slate-900 border-r border-slate-100 w-1/2">{c.grade}</td>
                      <td className="p-3">{c.age}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <hr className="border-slate-100" />

          {/* Step 1: Registration */}
          <div className="space-y-4">
            <h6 className="text-amber-600 font-display font-bold text-sm md:text-base uppercase tracking-wider">
              Step 1: Registration:
            </h6>
            <p className="text-slate-600 text-sm leading-relaxed">
              The parent have to come to school and fill the enquiry form,
              on which a detailed information will be given.<br />
              After that parents have to take admission form and follow the
              procedure as follows:
            </p>
            
            <ul className="list-disc pl-5 space-y-3.5 text-slate-600 text-sm leading-relaxed">
              <li>Fill the admission form ( IN CAPITAL LETTERS)</li>
              <li>
                Fill the Medical Certificate Section in the admission form,
                through Your Pediatrition / family doctor with stamp &
                signature of the doctor.
              </li>
              <li>
                Attach original Birth Certificate ( in caseof admission in
                Nursery - Junior KG - Senior KG - I standard.)
              </li>
              <li>
                Attach original Leaving Certificate ( in case of of II
                standard to X standad )
              </li>
              <li>Address Proof Xerox.</li>
              <li>6 Passport Size Photographs.</li>
              <li>Fees - through Demand Draft or Cheque.</li>
            </ul>
          </div>

          <hr className="border-slate-100" />

          {/* Step 2: Verification */}
          <div className="space-y-2">
            <h6 className="text-amber-600 font-display font-bold text-sm md:text-base uppercase tracking-wider">
              Step 2: Verification:
            </h6>
            <ul className="list-disc pl-5 text-slate-600 text-sm leading-relaxed">
              <li>
                Verification of Registration Forms will be done by the
                Admission Office.
              </li>
            </ul>
          </div>

          <hr className="border-slate-100" />

          {/* Step 3: Confirmed */}
          <div className="space-y-2">
            <h6 className="text-amber-600 font-display font-bold text-sm md:text-base uppercase tracking-wider">
              Step 3: Registration Confirmed:
            </h6>
            <ul className="list-disc pl-5 text-slate-600 text-sm leading-relaxed">
              <li>
                If the Registration form is found to be correct, a
                confirmation of the registration will be given.
              </li>
            </ul>
          </div>

          <hr className="border-slate-100" />

          {/* Action button */}
          <div className="pt-2">
            <Link
              href="/enquiry-form"
              className="px-6 py-3.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-bold rounded-xl text-xs md:text-sm transition-all shadow-md"
            >
              Enquiry Form
            </Link>
          </div>

        </div>
      </section>
    </div>
  );
}
