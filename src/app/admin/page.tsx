"use client";

import React, { useState, useEffect } from "react";
import { 
  Users, 
  Mail, 
  Trash2, 
  Eye, 
  Search, 
  Filter, 
  Calendar, 
  MapPin, 
  Award, 
  Layers,
  Sparkles,
  MessageSquare
} from "lucide-react";

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState<"enquiries" | "messages">("enquiries");
  const [enquiries, setEnquiries] = useState<any[]>([]);
  const [contacts, setContacts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedStandard, setSelectedStandard] = useState("");
  const [selectedItem, setSelectedItem] = useState<any | null>(null);

  const fetchSubmissions = async () => {
    try {
      setLoading(true);
      const res = await fetch("/api/enquiry");
      if (res.ok) {
        const data = await res.json();
        setEnquiries(data.enquiries || []);
        setContacts(data.contacts || []);
      }
    } catch (err) {
      console.error("Failed to load submissions", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSubmissions();
  }, []);

  const handleDeleteEnquiry = async (id: string) => {
    if (!confirm("Are you sure you want to delete this enquiry?")) return;
    try {
      const res = await fetch(`/api/enquiry?id=${id}`, { method: "DELETE" });
      if (res.ok) {
        setEnquiries(prev => prev.filter(item => item.id !== id));
        if (selectedItem && selectedItem.id === id) setSelectedItem(null);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleDeleteContact = async (id: string) => {
    if (!confirm("Are you sure you want to delete this message?")) return;
    try {
      const res = await fetch(`/api/contact?id=${id}`, { method: "DELETE" });
      if (res.ok) {
        setContacts(prev => prev.filter(item => item.id !== id));
        if (selectedItem && selectedItem.id === id) setSelectedItem(null);
      }
    } catch (err) {
      console.error(err);
    }
  };

  // Filter logic for enquiries
  const filteredEnquiries = enquiries.filter(item => {
    const matchesSearch = item.studentName.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          (item.visitorName || "").toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStandard = selectedStandard === "" || item.standard === selectedStandard;
    return matchesSearch && matchesStandard;
  });

  // Filter logic for contacts
  const filteredContacts = contacts.filter(item => {
    return item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
           (item.subject || "").toLowerCase().includes(searchQuery.toLowerCase()) ||
           item.message.toLowerCase().includes(searchQuery.toLowerCase());
  });

  const standards = [
    "Nursery", "Jr. Kg", "Sr. Kg", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"
  ];

  return (
    <div className="space-y-8">
      {/* HEADER */}
      <section className="space-y-4">
        <div className="flex items-center gap-2">
          <span className="text-amber-500 font-display font-bold text-xs uppercase tracking-widest block">
            School Administration
          </span>
          <span className="text-[10px] bg-slate-900 text-white font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
            Secured panel
          </span>
        </div>
        <h1 className="font-display font-extrabold text-3xl md:text-5xl text-slate-900 tracking-tight">
          Admin Dashboard
        </h1>
        <p className="text-slate-500 text-sm md:text-base max-w-xl">
          Review, filter, and manage incoming student admission applications and contact notifications.
        </p>
      </section>

      {/* METRICS CARDS */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="bg-white border border-slate-100 p-6 rounded-2xl shadow-premium flex items-center justify-between">
          <div className="space-y-1">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">Total Enquiries</span>
            <span className="font-display font-black text-3xl text-slate-900">{enquiries.length}</span>
          </div>
          <div className="p-3 bg-amber-500/10 text-amber-600 rounded-xl">
            <Users size={24} />
          </div>
        </div>

        <div className="bg-white border border-slate-100 p-6 rounded-2xl shadow-premium flex items-center justify-between">
          <div className="space-y-1">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">Total Contact Messages</span>
            <span className="font-display font-black text-3xl text-slate-900">{contacts.length}</span>
          </div>
          <div className="p-3 bg-blue-500/10 text-blue-600 rounded-xl">
            <Mail size={24} />
          </div>
        </div>

        <div className="bg-white border border-slate-100 p-6 rounded-2xl shadow-premium flex items-center justify-between">
          <div className="space-y-1">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">Nursery/KG Ratio</span>
            <span className="font-display font-black text-3xl text-slate-900">
              {enquiries.filter(e => ["Nursery", "Jr. Kg", "Sr. Kg"].includes(e.standard)).length} / {enquiries.length}
            </span>
          </div>
          <div className="p-3 bg-emerald-500/10 text-emerald-600 rounded-xl">
            <Layers size={24} />
          </div>
        </div>
      </section>

      {/* TAB SELECTORS */}
      <section className="flex border-b border-slate-200">
        <button
          onClick={() => { setActiveTab("enquiries"); setSearchQuery(""); }}
          className={`px-6 py-4.5 font-display font-bold text-sm border-b-2 transition-all flex items-center gap-2 ${
            activeTab === "enquiries"
              ? "border-amber-500 text-amber-600"
              : "border-transparent text-slate-500 hover:text-slate-800"
          }`}
        >
          <Users size={16} />
          <span>Admission Enquiries ({filteredEnquiries.length})</span>
        </button>
        <button
          onClick={() => { setActiveTab("messages"); setSearchQuery(""); }}
          className={`px-6 py-4.5 font-display font-bold text-sm border-b-2 transition-all flex items-center gap-2 ${
            activeTab === "messages"
              ? "border-amber-500 text-amber-600"
              : "border-transparent text-slate-500 hover:text-slate-800"
          }`}
        >
          <Mail size={16} />
          <span>Contact Messages ({filteredContacts.length})</span>
        </button>
      </section>

      {/* CONTROLS (SEARCH & FILTERS) */}
      <section className="flex flex-col sm:flex-row gap-4 justify-between items-center bg-white border border-slate-100 p-4 rounded-2xl shadow-premium">
        <div className="relative w-full sm:max-w-xs">
          <Search size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder={activeTab === "enquiries" ? "Search student or visitor..." : "Search subject, name or text..."}
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-xs md:text-sm outline-none focus:border-amber-500 transition-all bg-slate-50/50"
          />
        </div>

        {activeTab === "enquiries" && (
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <Filter size={14} className="text-slate-400" />
            <select
              value={selectedStandard}
              onChange={e => setSelectedStandard(e.target.value)}
              className="px-3 py-2.5 rounded-xl border border-slate-200 text-xs md:text-sm outline-none bg-white focus:border-amber-500 transition-all"
            >
              <option value="">All Standards</option>
              {standards.map((std, i) => (
                <option key={i} value={std}>{std}</option>
              ))}
            </select>
          </div>
        )}
      </section>

      {/* TABLE VIEW */}
      <section className="bg-white border border-slate-100 rounded-3xl overflow-hidden shadow-premium">
        {loading ? (
          <div className="text-center py-20 text-slate-500">
            <p className="text-sm font-semibold animate-pulse">Loading submissions database...</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            {activeTab === "enquiries" ? (
              <table className="w-full text-left border-collapse text-xs md:text-sm">
                <thead>
                  <tr className="bg-slate-900 text-white font-display font-semibold uppercase tracking-wider text-[10px]">
                    <th className="p-4 pl-6">Student Name</th>
                    <th className="p-4">Standard</th>
                    <th className="p-4">Date of Birth</th>
                    <th className="p-4">Mobile</th>
                    <th className="p-4">Visitor/Parent</th>
                    <th className="p-4 text-center">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-600">
                  {filteredEnquiries.map((item) => (
                    <tr key={item.id} className="hover:bg-slate-50/50">
                      <td className="p-4 pl-6 font-semibold text-slate-900">{item.studentName}</td>
                      <td className="p-4">
                        <span className="px-2.5 py-1 bg-amber-500/10 text-amber-600 font-bold rounded-lg text-[10px] md:text-xs">
                          {item.standard}
                        </span>
                      </td>
                      <td className="p-4">{item.dob}</td>
                      <td className="p-4">{item.mobile}</td>
                      <td className="p-4">{item.visitorName || "N/A"}</td>
                      <td className="p-4 flex items-center justify-center gap-2">
                        <button
                          onClick={() => setSelectedItem(item)}
                          className="p-2 text-slate-500 hover:text-slate-900 bg-slate-50 hover:bg-slate-100 rounded-lg transition"
                          title="View Details"
                        >
                          <Eye size={16} />
                        </button>
                        <button
                          onClick={() => handleDeleteEnquiry(item.id)}
                          className="p-2 text-rose-500 hover:text-rose-700 bg-rose-50 hover:bg-rose-100 rounded-lg transition"
                          title="Delete"
                        >
                          <Trash2 size={16} />
                        </button>
                      </td>
                    </tr>
                  ))}
                  {filteredEnquiries.length === 0 && (
                    <tr>
                      <td colSpan={6} className="text-center py-12 text-slate-400 text-xs">No admission enquiries recorded.</td>
                    </tr>
                  )}
                </tbody>
              </table>
            ) : (
              <table className="w-full text-left border-collapse text-xs md:text-sm">
                <thead>
                  <tr className="bg-slate-900 text-white font-display font-semibold uppercase tracking-wider text-[10px]">
                    <th className="p-4 pl-6">Visitor</th>
                    <th className="p-4">Email</th>
                    <th className="p-4">Phone</th>
                    <th className="p-4">Subject</th>
                    <th className="p-4">Date</th>
                    <th className="p-4 text-center">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-600">
                  {filteredContacts.map((item) => (
                    <tr key={item.id} className="hover:bg-slate-50/50">
                      <td className="p-4 pl-6 font-semibold text-slate-900">{item.name}</td>
                      <td className="p-4">{item.email}</td>
                      <td className="p-4">{item.phone || "N/A"}</td>
                      <td className="p-4 text-slate-600">
                        {item.subject?.includes("[Chat Lead]") ? (
                          <div className="flex items-center gap-1.5">
                            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-500/10 text-amber-600 border border-amber-500/20 shrink-0">
                              <MessageSquare size={10} />
                              <span>Chat Lead</span>
                            </span>
                            <span className="italic text-slate-500 text-xs truncate max-w-[150px]" title={item.subject}>
                              {item.subject.replace("[Chat Lead] ", "").replace("[Chat Lead]", "")}
                            </span>
                          </div>
                        ) : (
                          <span className="italic text-slate-500">{item.subject || "No Subject"}</span>
                        )}
                      </td>
                      <td className="p-4 text-xs text-slate-400">{new Date(item.timestamp).toLocaleDateString()}</td>
                      <td className="p-4 flex items-center justify-center gap-2">
                        <button
                          onClick={() => setSelectedItem(item)}
                          className="p-2 text-slate-500 hover:text-slate-900 bg-slate-50 hover:bg-slate-100 rounded-lg transition"
                          title="View Message"
                        >
                          <Eye size={16} />
                        </button>
                        <button
                          onClick={() => handleDeleteContact(item.id)}
                          className="p-2 text-rose-500 hover:text-rose-700 bg-rose-50 hover:bg-rose-100 rounded-lg transition"
                          title="Delete"
                        >
                          <Trash2 size={16} />
                        </button>
                      </td>
                    </tr>
                  ))}
                  {filteredContacts.length === 0 && (
                    <tr>
                      <td colSpan={6} className="text-center py-12 text-slate-400 text-xs">No contact messages recorded.</td>
                    </tr>
                  )}
                </tbody>
              </table>
            )}
          </div>
        )}
      </section>

      {/* DETAIL VIEW OVERLAY MODAL */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-6 md:p-8 max-w-2xl w-full relative shadow-premium-lg border border-slate-100 overflow-y-auto max-h-[90vh]">
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition"
            >
              <Eye size={20} className="transform rotate-180" />
            </button>

            {/* Check if Enquiry or Contact */}
            {selectedItem.id.startsWith("enq_") ? (
              <div className="space-y-6">
                <div className="space-y-1">
                  <span className="text-xs font-bold text-amber-500 uppercase tracking-widest block">Submission Details</span>
                  <h3 className="font-display font-extrabold text-2xl text-slate-900">{selectedItem.studentName}</h3>
                  <span className="text-xs text-slate-400">{new Date(selectedItem.timestamp).toLocaleString()}</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm border-t border-slate-100 pt-4">
                  <div className="space-y-3">
                    <p className="flex justify-between border-b pb-1"><span className="text-slate-400 font-medium">Class Grade:</span> <span className="font-bold text-slate-900">{selectedItem.standard}</span></p>
                    <p className="flex justify-between border-b pb-1"><span className="text-slate-400 font-medium">Date of Birth:</span> <span className="text-slate-900 font-medium">{selectedItem.dob}</span></p>
                    <p className="flex justify-between border-b pb-1"><span className="text-slate-400 font-medium">Visitor Name:</span> <span className="text-slate-900 font-medium">{selectedItem.visitorName || "N/A"}</span></p>
                    <p className="flex justify-between border-b pb-1"><span className="text-slate-400 font-medium">Mobile Phone:</span> <span className="text-slate-900 font-medium">{selectedItem.mobile}</span></p>
                    <p className="flex justify-between border-b pb-1"><span className="text-slate-400 font-medium">Home Tel:</span> <span className="text-slate-900 font-medium">{selectedItem.telephone || "N/A"}</span></p>
                    <p className="flex justify-between border-b pb-1"><span className="text-slate-400 font-medium">Email ID:</span> <span className="text-slate-900 font-medium">{selectedItem.email || "N/A"}</span></p>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <span className="text-slate-400 font-medium text-xs block mb-1">Permanent Residence Address:</span>
                      <p className="bg-slate-50 p-2.5 rounded-xl border text-xs leading-relaxed text-slate-700">
                        {[
                          selectedItem.flatNo,
                          selectedItem.buildingName,
                          selectedItem.streetRoad,
                          selectedItem.villageTown,
                          selectedItem.city,
                          selectedItem.state,
                          selectedItem.pincode
                        ].filter(Boolean).join(", ") || "No address provided"}
                      </p>
                    </div>

                    <p className="flex justify-between border-b pb-1"><span className="text-slate-400 font-medium">Previous School:</span> <span className="text-slate-900 font-medium text-right text-xs truncate max-w-[160px]" title={selectedItem.previousSchool}>{selectedItem.previousSchool || "N/A"}</span></p>
                    <p className="flex justify-between border-b pb-1"><span className="text-slate-400 font-medium">Info Source:</span> <span className="text-slate-900 font-medium uppercase text-xs">{selectedItem.infoSource || "N/A"}</span></p>
                  </div>
                </div>

                <div>
                  <span className="text-slate-400 font-medium text-xs block mb-2">Student Hobbies & Sports Interests:</span>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedItem.interests && selectedItem.interests.length > 0 ? (
                      selectedItem.interests.map((i: string, idx: number) => (
                        <span key={idx} className="px-2.5 py-1 bg-slate-100 text-slate-700 text-xs font-medium rounded-lg">
                          {i}
                        </span>
                      ))
                    ) : (
                      <span className="text-xs text-slate-400">No interest checked.</span>
                    )}
                  </div>
                </div>

                <div className="flex justify-end pt-4 border-t border-slate-100">
                  <button
                    onClick={() => setSelectedItem(null)}
                    className="px-5 py-2.5 bg-slate-950 hover:bg-slate-800 text-white font-bold rounded-xl text-xs transition"
                  >
                    Close Panel
                  </button>
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="space-y-1">
                  {selectedItem.subject?.includes("[Chat Lead]") ? (
                    <span className="text-xs font-bold text-amber-500 uppercase tracking-widest flex items-center gap-1 block">
                      <MessageSquare size={12} />
                      <span>Chat Bot Inquiry Details</span>
                    </span>
                  ) : (
                    <span className="text-xs font-bold text-blue-500 uppercase tracking-widest block">Message Details</span>
                  )}
                  <h3 className="font-display font-extrabold text-2xl text-slate-900">{selectedItem.name}</h3>
                  <span className="text-xs text-slate-400">{new Date(selectedItem.timestamp).toLocaleString()}</span>
                </div>

                <div className="grid grid-cols-2 gap-4 text-xs md:text-sm border-t border-b border-slate-100 py-4">
                  <p><span className="text-slate-400 font-medium">Email:</span> <span className="font-semibold text-slate-900">{selectedItem.email}</span></p>
                  <p><span className="text-slate-400 font-medium">Phone:</span> <span className="font-semibold text-slate-900">{selectedItem.phone || "N/A"}</span></p>
                  <p className="col-span-2">
                    <span className="text-slate-400 font-medium">Subject: </span> 
                    <span className="font-semibold text-slate-900 italic">
                      {selectedItem.subject?.includes("[Chat Lead]") ? (
                        <>
                          <span className="px-2 py-0.5 rounded bg-amber-100 text-amber-800 text-[10px] font-bold mr-1.5 inline-block">CHAT BOT</span>
                          "{selectedItem.subject.replace("[Chat Lead] ", "").replace("[Chat Lead]", "")}"
                        </>
                      ) : (
                        `"${selectedItem.subject || "No Subject"}"`
                      )}
                    </span>
                  </p>
                </div>

                <div className="space-y-2">
                  <span className="text-slate-400 font-medium text-xs block">Visitor Message:</span>
                  <p className="bg-slate-50 p-4 rounded-xl border text-sm leading-relaxed text-slate-700 whitespace-pre-line">
                    {selectedItem.message}
                  </p>
                </div>

                <div className="flex justify-end pt-4 border-t border-slate-100">
                  <button
                    onClick={() => setSelectedItem(null)}
                    className="px-5 py-2.5 bg-slate-950 hover:bg-slate-800 text-white font-bold rounded-xl text-xs transition"
                  >
                    Close Panel
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
