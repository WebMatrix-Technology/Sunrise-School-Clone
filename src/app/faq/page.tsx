"use client";

import React, { useState } from "react";
import { HelpCircle, ChevronDown, Sparkles } from "lucide-react";

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "1. What is the admission process?",
      a: "Parents need to come to the admission office and submit the application form along with the list of documents sent to the parent ONLINE via Email/SMS. A completed form along with the cheque for 1st term fees is to be returned by the parents to the school office. The student will only be considered a confirmed admission once the first term fees are paid."
    },
    {
      q: "2. Can I Enquire about the school online?",
      a: "YES, parents can submit an online enquiry, after which a personalized email shall be sent with a brief description about the school and the preparatory steps that follow to avail admission."
    },
    {
      q: "3. What are the documents required at the time of admission?",
      a: "The following documents are required: Completed Online Application form; Photocopy of the student's Birth Certificate and Aadhaar Card; School Leaving Certificate; UDISE Number from the previous school (std 1 onwards); Photocopy of report card (std 1 onwards); Address proof and Parent's PAN card (original for verification); and 3 passport size photographs of the student."
    },
    {
      q: "4. What kind of entrance test will be taken at the time of admission?",
      a: "No written test is conducted at Sunrise School. Admissions are on a first-come, first-serve basis and seats are limited. Admissions will only be confirmed once the necessary documents and the first term fees payment are completed. Fees once paid are strictly non-refundable."
    },
    {
      q: "5. What is the Eligibility criteria for admission into Sunrise International School?",
      a: "Nursery: 3 years completed by 31st December. Jr. Kg.: 4 years completed by 31st December. Sr. Kg.: 5 years completed by 31st December. Std I: 6 years completed by 31st December."
    },
    {
      q: "6. What are the modes of transport offered?",
      a: "An extensive multi-route bus facility is offered by the school. Each bus has an attendant and a trained driver. We follow a strict Transport Policy as student safety is our main concern."
    },
    {
      q: "7. Will uniforms and text books be provided by the school?",
      a: "All study materials will be provided by the school. Parents do not have to pay extra for text books, worksheets, etc. For School Uniforms, we refer the parent to a Vendor. The parents are not compelled to purchase uniforms from these vendors."
    },
    {
      q: "8. What kind of remedial classes will be provided for students who are not able to cope?",
      a: "The school will do all it can to make sure your child gets the best education possible. If we find that a child is not coping, extra classes and mentors will be provided at no extra cost to the parent."
    },
    {
      q: "9. How will a child from a vernacular medium state school cope with the culture shift?",
      a: "Students coming from vernacular medium or semi-English schools are eligible for admission. We realize the transition will not be easy; therefore, we provide extra classes and mentor services to ease the transition."
    },
    {
      q: "10. What kind of infrastructure and facilities will be provided by the school?",
      a: "State-of-the-art infrastructure is provided. Each classroom is equipped with projectors and visualizers to make learning interesting. Computer labs, fully-equipped libraries, science labs, a first-aid room, and grounds for sports are available."
    },
    {
      q: "11. What are the extra-curricular activities offered at Sunrise International School?",
      a: "Sports and hobby classes are conducted for 2 hours every week. Hobbies include: Art and Craft, Aerobics, Computer Graphics, Athletics, Cursive Writing, Cricket, Classical/Jazz/Western Dance, Football, Gymnastics, Keyboard, Karate, and Skating."
    },
    {
      q: "12. How would you help students improve on their English communication skills?",
      a: "Various technology aids are introduced in classrooms, students are encouraged to talk only in English in school, and English Experts are part of the Sunrise faculty to improve pronunciation, phonics, and communication."
    },
    {
      q: "13. What do you mean by interactive classrooms?",
      a: "At Sunrise, we place emphasis on technology in education. Every classroom will be equipped with digital projectors and visualizers through which certain lessons are taught."
    },
    {
      q: "14. What do you mean by a Visualizer?",
      a: "This is a powerful digital process presentation and teaching tool that allows teachers to zoom text documents and 3D objects up to 220 times. It helps showcase science experiments, art sessions, or nanotechnology in detail."
    },
    {
      q: "15. Are there Online Classes available due to COVID-19?",
      a: "Yes, when required, Sunrise conducts all academic and extra-curricular sessions online, tracking daily progress to ensure student growth is up to mark."
    }
  ];

  return (
    <div className="space-y-12">
      {/* HEADER */}
      <section className="space-y-4">
        <span className="text-amber-500 font-display font-bold text-xs uppercase tracking-widest block">
          Support Desk
        </span>
        <h1 className="font-display font-extrabold text-3xl md:text-5xl text-slate-900 tracking-tight">
          Frequently Asked Questions
        </h1>
        <p className="text-slate-500 text-sm md:text-base max-w-xl">
          Here are some of the most common questions asked by parents regarding admissions, academic formats, transport, and curriculum.
        </p>
      </section>

      {/* Accordion List */}
      <section className="max-w-3xl mx-auto">
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-premium transition-all duration-200"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between p-5 text-left font-display font-bold text-sm md:text-base text-slate-900 focus:outline-none"
                >
                  <span className="pr-4">{faq.q}</span>
                  <ChevronDown 
                    size={18} 
                    className={`text-amber-500 transition-transform duration-200 shrink-0 ${isOpen ? "transform rotate-180" : ""}`} 
                  />
                </button>

                <div 
                  className={`transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-[300px] border-t border-slate-50 p-5" : "max-h-0 overflow-hidden p-0"
                  }`}
                >
                  <p className="text-slate-600 text-xs md:text-sm leading-relaxed">{faq.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
