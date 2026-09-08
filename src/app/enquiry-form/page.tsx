"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Send, RotateCcw, Award, PhoneCall, BookOpen, MapPin, GraduationCap, Home, CheckCircle2, ShieldCheck } from "lucide-react";

export default function EnquiryFormPage() {
  const standards = [
    "Nursery", "Jr. Kg", "Sr. Kg", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"
  ];

  const hobbies = [
    "Drawing", "Craft", "Western Dance", "Classic Dance", "Music Instrument",
    "Singing", "Skating", "Carrom", "Chess", "Badminton", "Cricket", "Football",
    "Table Tennis", "Kabaddi", "Other"
  ];

  const infoSources = [
    { label: "Print Media (Newspaper)", id: "print-media" },
    { label: "Electronic Media (TV / Radio)", id: "electronic-media" },
    { label: "Word Of Mouth (Friends / Relatives)", id: "word-of-mouth" },
    { label: "Banner / Handbill Poster", id: "banner" }
  ];

  const [formData, setFormData] = useState({
    studentName: "",
    dob: "",
    standard: "",
    visitorName: "",
    flatNo: "",
    buildingName: "",
    streetRoad: "",
    villageTown: "",
    city: "",
    state: "",
    pincode: "",
    telephone: "",
    mobile: "",
    email: "",
    interests: [] as string[],
    previousSchool: "",
    infoSource: ""
  });

  const handleInterestChange = (hoby: string) => {
    setFormData(prev => {
      const interests = prev.interests.includes(hoby)
        ? prev.interests.filter(i => i !== hoby)
        : [...prev.interests, hoby];
      return { ...prev, interests };
    });
  };

  const handleReset = (e: React.FormEvent) => {
    e.preventDefault();
    setFormData({
      studentName: "",
      dob: "",
      standard: "",
      visitorName: "",
      flatNo: "",
      buildingName: "",
      streetRoad: "",
      villageTown: "",
      city: "",
      state: "",
      pincode: "",
      telephone: "",
      mobile: "",
      email: "",
      interests: [],
      previousSchool: "",
      infoSource: ""
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.studentName || !formData.dob || !formData.standard || !formData.mobile) {
      alert("Please fill out all mandatory fields: Student Name, Date of Birth, Standard, and Mobile Number.");
      return;
    }

    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });
      const resData = await response.json();
      if (response.ok && resData.success) {
        alert("Thank you! Your Admission Enquiry has been successfully submitted. Our coordinate team will contact you shortly.");
        setFormData({
          studentName: "",
          dob: "",
          standard: "",
          visitorName: "",
          flatNo: "",
          buildingName: "",
          streetRoad: "",
          villageTown: "",
          city: "",
          state: "",
          pincode: "",
          telephone: "",
          mobile: "",
          email: "",
          interests: [],
          previousSchool: "",
          infoSource: ""
        });
      } else {
        alert(resData.error || "Failed to submit enquiry form. Please try again.");
      }
    } catch (err) {
      alert("An error occurred during submission. Please try again.");
    }
  };

  return (
    <div className="space-y-12 md:space-y-16">
      {/* HEADER */}
      <section className="space-y-3">
        <div className="inline-flex items-center gap-1.5 text-amber-600 font-display font-bold text-xs uppercase tracking-widest bg-amber-50 px-3 py-1 rounded-md border border-amber-200">
          <GraduationCap size={14} />
          <span>Admissions 2026 - 27</span>
        </div>
        <h1 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-[#0b2240] tracking-tight">
          Admission Enquiry Form
        </h1>
        <p className="text-slate-600 text-sm sm:text-base max-w-xl">
          Apply online or file your preliminary admission requests directly. Make sure you fill in valid contact points.
        </p>
      </section>

      {/* FORM CARD CONTAINER */}
      <section className="max-w-4xl mx-auto">
        <form onSubmit={handleSubmit} className="bg-white border border-slate-200/80 p-8 sm:p-12 rounded-3xl shadow-school space-y-10">
          
          {/* Section 1: Student info */}
          <div className="space-y-6">
            <h3 className="font-display font-extrabold text-lg text-[#0b2240] flex items-center gap-2.5 pb-3 border-b border-slate-100">
              <span className="w-7 h-7 rounded-lg bg-amber-500/10 text-amber-600 flex items-center justify-center font-bold text-xs">1</span>
              <span>Student Academic Details</span>
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">Full Name of Student *</label>
                <input
                  type="text"
                  required
                  placeholder="Student's name"
                  value={formData.studentName}
                  onChange={e => setFormData({ ...formData, studentName: e.target.value })}
                  className="px-4 py-3 rounded-xl border border-slate-200 outline-none text-slate-800 text-sm focus:border-amber-500 focus:ring-4 focus:ring-amber-500/10 transition-all bg-slate-50/50"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">Date Of Birth *</label>
                <input
                  type="date"
                  required
                  value={formData.dob}
                  onChange={e => setFormData({ ...formData, dob: e.target.value })}
                  className="px-4 py-3 rounded-xl border border-slate-200 outline-none text-slate-800 text-sm focus:border-amber-500 focus:ring-4 focus:ring-amber-500/10 transition-all bg-slate-50/50"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">Standard Applied For *</label>
                <select
                  required
                  value={formData.standard}
                  onChange={e => setFormData({ ...formData, standard: e.target.value })}
                  className="px-4 py-3 rounded-xl border border-slate-200 outline-none text-slate-800 text-sm bg-slate-50/50 focus:border-amber-500 focus:ring-4 focus:ring-amber-500/10 transition-all cursor-pointer"
                >
                  <option value="">Select Standard</option>
                  {standards.map((std, i) => (
                    <option key={i} value={std}>{std}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">Name Of Visitor / Parent</label>
                <input
                  type="text"
                  placeholder="Visitor or guardian name"
                  value={formData.visitorName}
                  onChange={e => setFormData({ ...formData, visitorName: e.target.value })}
                  className="px-4 py-3 rounded-xl border border-slate-200 outline-none text-slate-800 text-sm focus:border-amber-500 focus:ring-4 focus:ring-amber-500/10 transition-all bg-slate-50/50"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">Previous School Details</label>
                <input
                  type="text"
                  placeholder="Previous school attended (if any)"
                  value={formData.previousSchool}
                  onChange={e => setFormData({ ...formData, previousSchool: e.target.value })}
                  className="px-4 py-3 rounded-xl border border-slate-200 outline-none text-slate-800 text-sm focus:border-amber-500 focus:ring-4 focus:ring-amber-500/10 transition-all bg-slate-50/50"
                />
              </div>
            </div>
          </div>

          {/* Section 2: Address info */}
          <div className="space-y-6">
            <h3 className="font-display font-extrabold text-lg text-[#0b2240] flex items-center gap-2.5 pb-3 border-b border-slate-100">
              <span className="w-7 h-7 rounded-lg bg-amber-500/10 text-amber-600 flex items-center justify-center font-bold text-xs">2</span>
              <span>Permanent Residence Address</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">Flat / House No.</label>
                <input
                  type="text"
                  placeholder="Flat or house number"
                  value={formData.flatNo}
                  onChange={e => setFormData({ ...formData, flatNo: e.target.value })}
                  className="px-4 py-3 rounded-xl border border-slate-200 outline-none text-slate-800 text-sm focus:border-amber-500 focus:ring-4 focus:ring-amber-500/10 transition-all bg-slate-50/50"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">Building Name</label>
                <input
                  type="text"
                  placeholder="Building name"
                  value={formData.buildingName}
                  onChange={e => setFormData({ ...formData, buildingName: e.target.value })}
                  className="px-4 py-3 rounded-xl border border-slate-200 outline-none text-slate-800 text-sm focus:border-amber-500 focus:ring-4 focus:ring-amber-500/10 transition-all bg-slate-50/50"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">Street / Road</label>
                <input
                  type="text"
                  placeholder="Street / Area path"
                  value={formData.streetRoad}
                  onChange={e => setFormData({ ...formData, streetRoad: e.target.value })}
                  className="px-4 py-3 rounded-xl border border-slate-200 outline-none text-slate-800 text-sm focus:border-amber-500 focus:ring-4 focus:ring-amber-500/10 transition-all bg-slate-50/50"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              <div className="col-span-2 flex flex-col gap-2">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">Village / Town</label>
                <input
                  type="text"
                  placeholder="Village / Town"
                  value={formData.villageTown}
                  onChange={e => setFormData({ ...formData, villageTown: e.target.value })}
                  className="px-4 py-3 rounded-xl border border-slate-200 outline-none text-slate-800 text-sm focus:border-amber-500 focus:ring-4 focus:ring-amber-500/10 transition-all bg-slate-50/50"
                />
              </div>
              <div className="col-span-1 flex flex-col gap-2">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">City</label>
                <input
                  type="text"
                  placeholder="City"
                  value={formData.city}
                  onChange={e => setFormData({ ...formData, city: e.target.value })}
                  className="px-4 py-3 rounded-xl border border-slate-200 outline-none text-slate-800 text-sm focus:border-amber-500 focus:ring-4 focus:ring-amber-500/10 transition-all bg-slate-50/50"
                />
              </div>
              <div className="col-span-1 flex flex-col gap-2">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">State</label>
                <input
                  type="text"
                  placeholder="State"
                  value={formData.state}
                  onChange={e => setFormData({ ...formData, state: e.target.value })}
                  className="px-4 py-3 rounded-xl border border-slate-200 outline-none text-slate-800 text-sm focus:border-amber-500 focus:ring-4 focus:ring-amber-500/10 transition-all bg-slate-50/50"
                />
              </div>
              <div className="col-span-1 flex flex-col gap-2">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">Pincode</label>
                <input
                  type="text"
                  placeholder="Pincode"
                  value={formData.pincode}
                  onChange={e => setFormData({ ...formData, pincode: e.target.value })}
                  className="px-4 py-3 rounded-xl border border-slate-200 outline-none text-slate-800 text-sm focus:border-amber-500 focus:ring-4 focus:ring-amber-500/10 transition-all bg-slate-50/50"
                />
              </div>
            </div>
          </div>

          {/* Section 3: Contact points */}
          <div className="space-y-6">
            <h3 className="font-display font-extrabold text-lg text-[#0b2240] flex items-center gap-2.5 pb-3 border-b border-slate-100">
              <span className="w-7 h-7 rounded-lg bg-amber-500/10 text-amber-600 flex items-center justify-center font-bold text-xs">3</span>
              <span>Contact Communication Details</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">Resident Tel No.</label>
                <input
                  type="tel"
                  placeholder="Home telephone"
                  value={formData.telephone}
                  onChange={e => setFormData({ ...formData, telephone: e.target.value })}
                  className="px-4 py-3 rounded-xl border border-slate-200 outline-none text-slate-800 text-sm focus:border-amber-500 focus:ring-4 focus:ring-amber-500/10 transition-all bg-slate-50/50"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">Mobile Number *</label>
                <input
                  type="tel"
                  required
                  placeholder="Active mobile phone"
                  value={formData.mobile}
                  onChange={e => setFormData({ ...formData, mobile: e.target.value })}
                  className="px-4 py-3 rounded-xl border border-slate-200 outline-none text-slate-800 text-sm focus:border-amber-500 focus:ring-4 focus:ring-amber-500/10 transition-all bg-slate-50/50"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">Email Address</label>
                <input
                  type="email"
                  placeholder="Gmail, Outlook, etc."
                  value={formData.email}
                  onChange={e => setFormData({ ...formData, email: e.target.value })}
                  className="px-4 py-3 rounded-xl border border-slate-200 outline-none text-slate-800 text-sm focus:border-amber-500 focus:ring-4 focus:ring-amber-500/10 transition-all bg-slate-50/50"
                />
              </div>
            </div>
          </div>

          {/* Section 4: Hobbies interests */}
          <div className="space-y-6">
            <h3 className="font-display font-extrabold text-lg text-[#0b2240] flex items-center gap-2.5 pb-3 border-b border-slate-100">
              <span className="w-7 h-7 rounded-lg bg-amber-500/10 text-amber-600 flex items-center justify-center font-bold text-xs">4</span>
              <span>Student Hobby & Sports Interests</span>
            </h3>
            
            <p className="text-slate-600 text-xs sm:text-sm">
              Please check activities of interest for custom co-curricular schedules:
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 pt-2">
              {hobbies.map((hoby, idx) => (
                <label 
                  key={idx} 
                  className={`flex items-center gap-2.5 px-3.5 py-3 rounded-xl border text-xs font-semibold cursor-pointer transition-all duration-200 ${
                    formData.interests.includes(hoby)
                      ? "bg-amber-500/15 text-amber-800 border-amber-500 shadow-xs"
                      : "bg-slate-50 border-slate-200/80 text-slate-700 hover:bg-slate-100"
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={formData.interests.includes(hoby)}
                    onChange={() => handleInterestChange(hoby)}
                    className="w-4 h-4 accent-amber-600"
                  />
                  <span>{hoby}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Section 5: Source of Information */}
          <div className="space-y-6">
            <h3 className="font-display font-extrabold text-lg text-[#0b2240] flex items-center gap-2.5 pb-3 border-b border-slate-100">
              <span className="w-7 h-7 rounded-lg bg-amber-500/10 text-amber-600 flex items-center justify-center font-bold text-xs">5</span>
              <span>How did you hear about our school?</span>
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {infoSources.map((src, i) => (
                <label 
                  key={i} 
                  className={`flex items-center gap-3 px-4 py-3.5 rounded-xl border text-xs sm:text-sm font-semibold cursor-pointer transition-all ${
                    formData.infoSource === src.id
                      ? "bg-amber-500/15 text-amber-800 border-amber-500 shadow-xs"
                      : "bg-slate-50 border-slate-200/80 text-slate-700 hover:bg-slate-100"
                  }`}
                >
                  <input
                    type="radio"
                    name="infoSource"
                    checked={formData.infoSource === src.id}
                    onChange={() => setFormData({ ...formData, infoSource: src.id })}
                    className="w-4 h-4 accent-amber-600"
                  />
                  <span>{src.label}</span>
                </label>
              ))}
            </div>
          </div>

          {/* SUBMIT BUTTONS */}
          <div className="pt-8 border-t border-slate-100 flex flex-col sm:flex-row justify-end gap-3.5">
            <button
              onClick={handleReset}
              className="px-6 py-3.5 border border-slate-200 hover:bg-slate-100 text-slate-700 font-bold rounded-xl text-sm transition-all duration-200 flex items-center justify-center gap-2"
            >
              <RotateCcw size={16} />
              <span>Reset Form</span>
            </button>
            
            <button
              type="submit"
              className="px-8 py-3.5 bg-gradient-to-r from-amber-500 via-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 hover:text-white font-black rounded-xl text-sm shadow-gold hover:shadow-school-lg transition-all duration-200 flex items-center justify-center gap-2"
            >
              <Send size={16} />
              <span>Submit Admission Enquiry</span>
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}

