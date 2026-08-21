"use client";

import React, { useState } from "react";
import { Image as ImageIcon, Sparkles, Filter } from "lucide-react";

export default function GalleryPage() {
  const categories = [
    "All", "Events", "Academics", "Campus & Sports"
  ];

  const galleryItems = [
    {
      title: "Annual Day Dance",
      category: "Events",
      image: "https://www.sunriseinternationalschool.co.in/static/images/gallery/annual-day/2.jpg"
    },
    {
      title: "Class Group Photos",
      category: "Academics",
      image: "https://www.sunriseinternationalschool.co.in/static/images/gallery/class-photos/1.jpg"
    },
    {
      title: "Dance Hobby Sessions",
      category: "Events",
      image: "https://www.sunriseinternationalschool.co.in/static/images/gallery/dance/1.jpg"
    },
    {
      title: "Digital E-Learning Mode",
      category: "Academics",
      image: "https://www.sunriseinternationalschool.co.in/static/images/gallery/e-learning/1.jpg"
    },
    {
      title: "Fancy Dress Competition",
      category: "Events",
      image: "https://www.sunriseinternationalschool.co.in/static/images/gallery/fancy-dress/1.jpg"
    },
    {
      title: "Hilltop Campus Infrastructure",
      category: "Campus & Sports",
      image: "https://www.sunriseinternationalschool.co.in/static/images/carousel/3.jpg"
    },
    {
      title: "Classroom Technology",
      category: "Academics",
      image: "https://www.sunriseinternationalschool.co.in/static/images/wcu/technology.jpg"
    },
    {
      title: "Sports and Fitness Field",
      category: "Campus & Sports",
      image: "https://www.sunriseinternationalschool.co.in/static/images/wcu/sports.jpg"
    },
    {
      title: "Teacher Training Programs",
      category: "Academics",
      image: "https://www.sunriseinternationalschool.co.in/static/images/wcu/edutech.jpg"
    },
    {
      title: "Campus Physical Recreation",
      category: "Campus & Sports",
      image: "https://www.sunriseinternationalschool.co.in/static/images/wcu/hosilities.jpg"
    }
  ];

  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredItems = selectedCategory === "All"
    ? galleryItems
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <div className="space-y-12">
      {/* HEADER */}
      <section className="space-y-4">
        <span className="text-amber-500 font-display font-bold text-xs uppercase tracking-widest block">
          Visual Memories
        </span>
        <h1 className="font-display font-extrabold text-3xl md:text-5xl text-slate-900 tracking-tight">
          School Gallery
        </h1>
        <p className="text-slate-500 text-sm md:text-base max-w-xl">
          Glimpses of active classes, sports days, cultural activities, and high-tech science workshops inside our hilltop school premises.
        </p>
      </section>

      {/* FILTER CONTROLS */}
      <section className="flex flex-col sm:flex-row items-center gap-4 border-b border-slate-100 pb-6">
        <span className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5 shrink-0">
          <Filter size={14} className="text-amber-500" />
          <span>Filter Photos:</span>
        </span>
        <div className="flex flex-wrap gap-2 w-full">
          {categories.map((cat, idx) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={idx}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all ${
                  isSelected 
                    ? "bg-amber-500 text-slate-950 shadow-sm"
                    : "bg-white border border-slate-100 hover:bg-slate-50 text-slate-600"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </section>

      {/* GRID DISPLAY */}
      <section>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredItems.map((item, idx) => (
            <div 
              key={idx} 
              className="group relative bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-premium hover:shadow-premium-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="h-56 overflow-hidden relative">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4" />
              </div>
              <div className="p-4 space-y-1">
                <h4 className="font-display font-bold text-sm text-slate-900 truncate">{item.title}</h4>
                <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest block">{item.category}</span>
              </div>
            </div>
          ))}
        </div>
        
        {filteredItems.length === 0 && (
          <div className="text-center py-12 bg-white border rounded-2xl p-6 text-slate-500 space-y-2">
            <ImageIcon size={40} className="mx-auto text-slate-300" />
            <p className="text-sm font-semibold">No pictures found in this category.</p>
          </div>
        )}
      </section>
    </div>
  );
}
