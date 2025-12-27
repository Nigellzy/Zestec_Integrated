"use client";

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Helper to check if link is active (handles sub-paths and case-insensitivity)
    const isActive = (path: string) => {
        if (!pathname) return false;
        const current = pathname.toLowerCase();
        const target = path.toLowerCase();
        return current === target || current.startsWith(`${target}/`);
    };
    const [isVisible, setIsVisible] = useState(true);
    const [isAtTop, setIsAtTop] = useState(true);
    const lastScrollY = useRef(0);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            const atTop = currentScrollY < 50;

            // Determine visibility (hide on scroll down, show on scroll up)
            if (currentScrollY > lastScrollY.current && !atTop) {
                setIsVisible(false);
                setIsMenuOpen(false); // Close mobile menu when scrolling down
            } else {
                setIsVisible(true);
            }

            setIsAtTop(atTop);
            lastScrollY.current = currentScrollY;
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { href: "/overview_iml", label: "Tree Inspection" },
        { href: "/overview_ga", label: "Tools/Gasket Cutters" },
        { href: "/overviewfc", label: "Cables and Accessories" },
        { href: "/contact", label: "Contact" },
    ];

    return (
        <nav 
            className={`bg-[#b87333] text-white p-4 shadow-md w-full z-[1000] fixed top-0 left-0 right-0 transition-transform duration-300 ${
                isVisible ? 'translate-y-0' : '-translate-y-full'
            }`}
        >
            

            <div className={`container mx-auto flex items-center transition-all duration-300 ${isAtTop ? 'justify-between' : 'justify-center'}`}>
                {/* Logo */}
                <div className="flex-shrink-0 transition-all duration-300">
                    <Link href="/" className="flex items-center gap-2">
                        <img src="/imgs/zesteclogo2025.png" alt="logo" className="h-12 w-auto object-contain rounded" />
                        
                    </Link>
                </div>

                {/* Desktop Menu */}
                <div className={`hidden md:flex items-center transition-all duration-300 ease-in-out ${isAtTop ? 'opacity-100 space-x-8' : 'opacity-0 w-0 overflow-hidden space-x-0'}`}>
                    {navLinks.map((link) => (
                        <Link 
                            key={link.href} 
                            href={link.href} 
                            style={isActive(link.href) ? { backgroundColor: 'white', color: '#b87333', borderColor: 'white', fontWeight: 'bold' } : {}}
                            className={`hover:scale-105 transition-all font-medium text-lg whitespace-nowrap px-4 py-2 rounded-md border-2 ${
                                isActive(link.href)
                                    ? 'shadow-md' 
                                    : 'border-transparent !text-white hover:!text-[#f0e0bb]'
                            }`}
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <button 
                    className={`md:hidden focus:outline-none text-white transition-all duration-300 ease-in-out ${isAtTop ? 'opacity-100 p-2' : 'opacity-0 w-0 overflow-hidden p-0'}`}
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
                </button>
            </div>

            {/* Mobile Menu Dropdown */}
            <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen && isAtTop ? 'max-h-64 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
                <ul className="flex flex-col space-y-4 pb-4 text-center">
                    {navLinks.map((link) => (
                        <Link 
                            key={link.href} 
                            href={link.href} 
                            style={isActive(link.href) ? { backgroundColor: 'white', color: '#b87333', borderColor: 'white', fontWeight: 'bold' } : {}}
                            className={`block py-2 rounded transition-colors border-2 ${
                                isActive(link.href)
                                    ? '' 
                                    : 'border-transparent !text-white hover:!text-[#f0e0bb] hover:bg-[#a0632b]'
                            }`}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {link.label}
                        </Link>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
