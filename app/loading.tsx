"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[2000] flex items-center justify-center bg-white/90 backdrop-blur-md">
      <div className="flex flex-col items-center gap-6">
        <div className="relative">
          {/* Outer spinning ring */}
          <motion.div
            className="w-24 h-24 border-4 border-[#f0e0bb] border-t-[#b87333] rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
          {/* Inner pulsing dot */}
          <motion.div 
            className="absolute top-1/2 left-1/2 w-4 h-4 bg-[#b87333] rounded-full -translate-x-1/2 -translate-y-1/2"
            animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
        
        <motion.h2
            initial={{ opacity: 0.5 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
            className="text-[#b87333] text-xl font-bold tracking-widest"
        >
            LOADING
        </motion.h2>
      </div>
    </div>
  );
}
