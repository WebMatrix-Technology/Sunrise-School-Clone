"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight, X, Image as ImageIcon, Folder, Home } from "lucide-react";

interface Album {
  id: string;
  title: string;
  folderName: string;
  coverImage: string;
  imageCount: number;
}

export default function GalleryPage() {
  const albums: Album[] = [
    {
      id: "annual-day",
      title: "Annual Day",
      folderName: "annual-day",
      coverImage: "https://www.sunriseinternationalschool.co.in/static/images/gallery/annual-day/2.jpg",
      imageCount: 7,
    },
    {
      id: "class-photo",
      title: "Class Photo",
      folderName: "class-photos",
      coverImage: "https://www.sunriseinternationalschool.co.in/static/images/gallery/class-photos/1.jpg",
      imageCount: 10,
    },
    {
      id: "dance",
      title: "Dance",
      folderName: "dance",
      coverImage: "https://www.sunriseinternationalschool.co.in/static/images/gallery/dance/1.jpg",
      imageCount: 5,
    },
    {
      id: "e-learning",
      title: "E-Learning",
      folderName: "e-learning",
      coverImage: "https://www.sunriseinternationalschool.co.in/static/images/gallery/e-learning/1.jpg",
      imageCount: 3,
    },
    {
      id: "fancy-dress",
      title: "Fancy Dress",
      folderName: "fancy-dress",
      coverImage: "https://www.sunriseinternationalschool.co.in/static/images/gallery/fancy-dress/1.jpg",
      imageCount: 5,
    },
    {
      id: "green-earth",
      title: "Green Earth",
      folderName: "green-earth",
      coverImage: "https://www.sunriseinternationalschool.co.in/static/images/gallery/green-earth/1.jpg",
      imageCount: 7,
    },
    {
      id: "infrastructure",
      title: "Infrastructure",
      folderName: "infrastructure",
      coverImage: "https://www.sunriseinternationalschool.co.in/static/images/gallery/infrastructure/1.jpg",
      imageCount: 19,
    },
    {
      id: "martial-arts",
      title: "Martial Arts",
      folderName: "martial-arts",
      coverImage: "https://www.sunriseinternationalschool.co.in/static/images/gallery/martial-arts/1.jpg",
      imageCount: 9,
    },
    {
      id: "picnic-tour",
      title: "Picnic Tour",
      folderName: "picnic-tour",
      coverImage: "https://www.sunriseinternationalschool.co.in/static/images/gallery/picnic-tour/1.jpg",
      imageCount: 40,
    },
    {
      id: "quiz-winner",
      title: "Quiz Winner",
      folderName: "quiz-winners",
      coverImage: "https://www.sunriseinternationalschool.co.in/static/images/gallery/quiz-winners/1.jpg",
      imageCount: 2,
    },
    {
      id: "science-tech",
      title: "Science Technology",
      folderName: "science-technology",
      coverImage: "https://www.sunriseinternationalschool.co.in/static/images/gallery/science-technology/1.jpg",
      imageCount: 7,
    },
    {
      id: "sports",
      title: "Sports",
      folderName: "sports",
      coverImage: "https://www.sunriseinternationalschool.co.in/static/images/gallery/sports/1.jpg",
      imageCount: 29,
    },
    {
      id: "sunrise-initiative",
      title: "Sunrise Initiative",
      folderName: "sunrise-initiatives",
      coverImage: "https://www.sunriseinternationalschool.co.in/static/images/gallery/sunrise-initiatives/1.jpg",
      imageCount: 15,
    },
    {
      id: "teacher-training-program",
      title: "Teacher Training Program",
      folderName: "teacher-training-program",
      coverImage: "https://www.sunriseinternationalschool.co.in/static/images/gallery/teacher-training-program/1.jpg",
      imageCount: 5,
    },
    {
      id: "tree-planting",
      title: "Tree Planting",
      folderName: "tree-planting",
      coverImage: "https://www.sunriseinternationalschool.co.in/static/images/gallery/tree-planting/1.jpg",
      imageCount: 6,
    },
    {
      id: "vaccination-program",
      title: "Vaccination Program",
      folderName: "vaccination-program",
      coverImage: "https://www.sunriseinternationalschool.co.in/static/images/gallery/vaccination-program/1.jpg",
      imageCount: 16,
    },
  ];

  const [activeAlbum, setActiveAlbum] = useState<Album | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Generate list of absolute URLs for active album
  const activeAlbumImages = activeAlbum
    ? Array.from({ length: activeAlbum.imageCount }, (_, i) => 
        `https://www.sunriseinternationalschool.co.in/static/images/gallery/${activeAlbum.folderName}/${i + 1}.jpg`
      )
    : [];

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex(prev => (prev !== null && prev > 0 ? prev - 1 : activeAlbumImages.length - 1));
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex(prev => (prev !== null && prev < activeAlbumImages.length - 1 ? prev + 1 : 0));
    }
  };

  return (
    <div className="space-y-12">
      {/* HERO BANNER SECTION */}
      <section className="relative h-60 rounded-3xl overflow-hidden shadow-premium-lg">
        <img
          src="https://www.sunriseinternationalschool.co.in/static/images/carousel/banner.jpg"
          alt="Gallery Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-950/60 flex flex-col justify-end p-8 md:p-12 text-white">
          <h1 className="font-display font-black text-2xl md:text-4xl mb-3 tracking-tight">
            {activeAlbum ? activeAlbum.title : "School Gallery"}
          </h1>
          <ol className="flex items-center gap-2 text-xs font-semibold text-slate-300">
            <li>
              <Link href="/" className="hover:text-amber-500 flex items-center gap-1">
                <Home size={14} />
              </Link>
            </li>
            <li>/</li>
            {activeAlbum ? (
              <>
                <li>
                  <button onClick={() => setActiveAlbum(null)} className="hover:text-amber-500 cursor-pointer">
                    Gallery
                  </button>
                </li>
                <li>/</li>
                <li className="text-white">{activeAlbum.title}</li>
              </>
            ) : (
              <li className="text-white">Gallery</li>
            )}
          </ol>
        </div>
      </section>

      {/* BREADCRUMB OR FOLDER ICON CONTROLS */}
      {activeAlbum && (
        <button 
          onClick={() => setActiveAlbum(null)}
          className="inline-flex items-center gap-2 px-4 py-2 border border-slate-200 bg-white hover:bg-slate-50 text-slate-600 rounded-xl text-xs font-semibold tracking-wide transition-all shadow-sm"
        >
          <ChevronLeft size={16} />
          <span>Back to Gallery Albums</span>
        </button>
      )}

      {/* GALLERY DISPLAY CONTENT */}
      <section>
        {!activeAlbum ? (
          /* ALBUMS GRID VIEW */
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {albums.map((album) => (
              <div 
                key={album.id}
                onClick={() => setActiveAlbum(album)}
                className="group relative bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-premium hover:shadow-premium-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer"
              >
                <div className="h-56 overflow-hidden relative bg-slate-950">
                  <img 
                    src={album.coverImage} 
                    alt={album.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-slate-950/45 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white text-xs font-semibold px-4 py-2 bg-slate-950/60 rounded-xl backdrop-blur-sm flex items-center gap-1.5">
                      <Folder size={14} />
                      Open Album
                    </span>
                  </div>
                </div>
                <div className="p-5 flex items-center justify-between">
                  <div className="space-y-0.5">
                    <h4 className="font-display font-bold text-sm md:text-base text-slate-900 group-hover:text-amber-500 transition-colors">
                      {album.title}
                    </h4>
                    <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest">
                      Sunrise Gallery Collection
                    </p>
                  </div>
                  <span className="text-xs font-bold text-amber-600 bg-amber-50 px-2.5 py-1 rounded-lg">
                    {album.imageCount} {album.imageCount > 1 ? "Photos" : "Photo"}
                  </span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* ALBUM IMAGES GRID VIEW */
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {activeAlbumImages.map((imgUrl, idx) => (
              <div 
                key={idx}
                onClick={() => setLightboxIndex(idx)}
                className="group relative bg-slate-950 aspect-square rounded-2xl overflow-hidden shadow-premium border border-slate-100 cursor-pointer hover:shadow-premium-lg transition"
              >
                <img 
                  src={imgUrl} 
                  alt={`${activeAlbum.title} ${idx + 1}`}
                  className="w-full h-full object-cover transition duration-300 group-hover:scale-103"
                />
                <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition duration-200 flex items-center justify-center">
                  <span className="text-white text-[10px] font-bold uppercase tracking-wider bg-slate-900/60 px-3 py-1.5 rounded-lg backdrop-blur-xs">
                    Zoom Image
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* LIGHTBOX SLIDESHOW MODAL */}
      {lightboxIndex !== null && activeAlbum && (
        <div 
          onClick={() => setLightboxIndex(null)}
          className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-sm flex flex-col justify-center items-center p-4 animate-in fade-in duration-200"
        >
          {/* Close button */}
          <button 
            onClick={() => setLightboxIndex(null)}
            className="absolute top-6 right-6 text-slate-400 hover:text-white p-2.5 bg-slate-800/80 rounded-full transition cursor-pointer"
            title="Close Lightbox"
          >
            <X size={22} />
          </button>

          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white p-3.5 bg-slate-800/60 rounded-full transition cursor-pointer hover:scale-105"
            title="Previous Image"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            className="absolute right-6 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white p-3.5 bg-slate-800/60 rounded-full transition cursor-pointer hover:scale-105"
            title="Next Image"
          >
            <ChevronRight size={24} />
          </button>
          
          <div 
            onClick={e => e.stopPropagation()}
            className="max-w-4xl w-full flex flex-col items-center gap-4 relative animate-in zoom-in-95 duration-200"
          >
            <div className="bg-slate-900/20 border border-white/5 rounded-2xl overflow-hidden shadow-2xl max-h-[75vh]">
              <img 
                src={activeAlbumImages[lightboxIndex]} 
                alt={`${activeAlbum.title} ${lightboxIndex + 1}`}
                className="max-w-full h-auto object-contain max-h-[75vh]"
              />
            </div>
            <div className="text-center space-y-1 text-white">
              <h3 className="font-display font-extrabold text-lg md:text-xl">
                {activeAlbum.title} ({lightboxIndex + 1} / {activeAlbum.imageCount})
              </h3>
              <p className="text-xs text-amber-400 font-semibold tracking-wide uppercase">
                Sunrise Campus Visuals
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
