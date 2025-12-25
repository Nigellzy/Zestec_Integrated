"use client";

import React, { useState } from 'react';

interface Slideshow2Props {
    images: string[];
}

const Slideshow2 = ({ images }: Slideshow2Props) => {
    const [slideIndex, setSlideIndex] = useState(0);

    const plusSlides = (n: number) => {
        let newIndex = slideIndex + n;
        if (newIndex >= images.length) {
            newIndex = 0;
        } else if (newIndex < 0) {
            newIndex = images.length - 1;
        }
        setSlideIndex(newIndex);
    };

    return (
        <div className="relative w-full max-w-lg mx-auto overflow-hidden rounded-xl shadow-lg bg-white">
            <div className="relative h-64 md:h-80 w-full flex items-center justify-center bg-gray-100">
                {images.map((src, index) => (
                    <div 
                        key={index} 
                        className={`absolute inset-0 transition-opacity duration-500 ease-in-out flex items-center justify-center ${index === slideIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                    >
                        <img 
                            src={src} 
                            alt={`Slide ${index + 1}`} 
                            className="max-w-full max-h-full object-contain p-4" 
                        />
                    </div>
                ))}
            </div>

            <button 
                className="absolute top-1/2 left-2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors z-20"
                onClick={() => plusSlides(-1)}
            >
                &#10094;
            </button>
            <button 
                className="absolute top-1/2 right-2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors z-20"
                onClick={() => plusSlides(1)}
            >
                &#10095;
            </button>
        </div>
    );
};

export default Slideshow2;
