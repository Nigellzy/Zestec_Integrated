"use client";

import { LogsIcon } from 'lucide-react';
import React, { useState, useEffect } from 'react';

const Slideshow = () => {
    const [slideIndex, setSlideIndex] = useState(0);

    const logo = "imgs/zesteclogo2025-transparent.png"

    const slides = [
        "/imgs/MD300.jpg",
        "/imgs/pd_bridge.jpg",
        "/imgs/pd_tree.jpg",
        "/imgs/PD Pole 4.jpg"
    ];

    useEffect(() => {
        const timer = setTimeout(() => {
            setSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
        }, 5000);

        return () => clearTimeout(timer);
    }, [slideIndex, slides.length]);

    return (
        <div className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden bg-gray-900">
            {/* Slides */}
            {slides.map((src, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === slideIndex ? 'opacity-100' : 'opacity-0'
                        }`}
                >
                    <div className="absolute inset-0 bg-black/40 z-10" /> {/* Dark overlay for better text contrast */}
                    <img
                        src={src}
                        className="w-full h-full object-cover"
                        alt={`Slide ${index + 1}`}
                    />
                </div>
            ))}

            {/* Hero Content Overlay */}
            <div className="absolute inset-0 flex flex-col items-center justify-center z-20 px-4">
                <div className="text-center transform transition-all duration-700 ease-out translate-y-0 opacity-100">
                    <div className="bg-white/90 backdrop-blur-sm p-6 md:p-10 rounded-3xl shadow-2xl border border-white/20 max-w-4xl mx-auto">
                        <div className="flex flex-row items-center justify-center gap-8 mb-6">
                            <img
                                src={logo}
                                alt="ZI Logo"
                                className="h-20 md:h-32 w-auto object-contain"
                            />
                            
                        </div>

                        <div className="flex flex-row items-center justify-center gap-8 mb-6">
                            <p className="text-lg md:text-2xl text-gray-700 font-light max-w-2xl mx-auto text-center">
                                Supporting Southeast Asia with advanced testing equipment, industrial tools, and specialized cabling.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Navigation Dots */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-30">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setSlideIndex(index)}
                        className={`h-3 rounded-full transition-all duration-300 shadow-md ${index === slideIndex
                            ? 'bg-[#b87333] w-10'
                            : 'bg-white/70 w-3 hover:bg-white'
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div >
    );
};

export default Slideshow;
