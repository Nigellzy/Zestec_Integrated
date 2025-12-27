"use client";

import React, { useState } from 'react';

export interface SlideData {
    src: string;
    name?: string;
}

interface Slideshow2Props {
    images: (string | SlideData)[];
}

const Slideshow2 = ({ images }: Slideshow2Props) => {
    const [slideIndex, setSlideIndex] = useState(0);

    // Normalize images to SlideData[]
    const slides: SlideData[] = images.map(img => 
        typeof img === 'string' ? { src: img } : img
    );

    const plusSlides = (n: number) => {
        let newIndex = slideIndex + n;
        if (newIndex >= slides.length) {
            newIndex = 0;
        } else if (newIndex < 0) {
            newIndex = slides.length - 1;
        }
        setSlideIndex(newIndex);
    };

    return (
        <div className="relative w-full max-w-lg mx-auto overflow-hidden rounded-xl shadow-lg bg-white group">
            <div className="relative h-64 md:h-80 w-full flex items-center justify-center bg-gray-100">
                {slides.map((slide, index) => (
                    <div 
                        key={index} 
                        className={`absolute inset-0 transition-opacity duration-500 ease-in-out flex flex-col items-center justify-center ${index === slideIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                    >
                        <img 
                            src={slide.src} 
                            alt={slide.name || `Slide ${index + 1}`} 
                            className="max-w-full max-h-full object-contain p-4 pb-12" 
                        />
                        {slide.name && (
                            <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white pt-3 pb-8 px-4 text-center text-sm backdrop-blur-sm">
                                {slide.name}
                            </div>
                        )}
                    </div>
                ))}
            </div>

            <button 
                className="absolute top-1/2 left-2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors z-20 opacity-0 group-hover:opacity-100"
                onClick={() => plusSlides(-1)}
            >
                &#10094;
            </button>
            <button 
                className="absolute top-1/2 right-2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors z-20 opacity-0 group-hover:opacity-100"
                onClick={() => plusSlides(1)}
            >
                &#10095;
            </button>
            
             <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-2 z-30">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        className={`w-2 h-2 rounded-full transition-colors shadow-sm ${index === slideIndex ? 'bg-white' : 'bg-white/40'}`}
                        onClick={() => setSlideIndex(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default Slideshow2;
