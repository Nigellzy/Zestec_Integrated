import React from 'react';
import { ExternalLink } from 'lucide-react';

export default async function OverviewGA() {

    return (
        <main className="min-h-screen bg-gray-50">
            {/* Header Section */}
            <div className="bg-[#b87333] text-white py-16 px-4">
                <div className="max-w-6xl mx-auto text-center">
                    <h1 className="text-3xl md:text-5xl font-bold mb-4">Guardair and Allpax</h1>
                    <div className="w-24 h-1 bg-[#f0e0bb] mx-auto rounded-full"></div>
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-4 py-12 space-y-20">
                {/* Introduction Section */}
                <section className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold text-[#b87333] border-l-4 border-[#b87333] pl-4">
                            Pneumatic Guns, Vacuums & Gasket Cutters
                        </h2>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            We are an authorised reseller for <span className="font-semibold text-[#b87333]">Guardair</span> pneumatic
                            guns and vacuum systems and <span className="font-semibold text-[#b87333]">Allpax</span> gasket cutting
                            systems. These high-quality tools are designed for industrial efficiency and durability.
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-2xl shadow-lg border border-[#b87333]/10">
                        <h3 className="text-center text-xl font-bold text-gray-800 mb-4">Links</h3>
                        <div className="flex flex-col space-y-4">
                            <a
                                href="https://guardair.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-[#f0e0bb]/30 transition-colors group"
                            >
                                <span className="text-[#b87333] font-semibold">Visit Guardair Website</span>
                                <ExternalLink className="w-5 h-5 text-[#b87333] group-hover:translate-x-1 transition-transform" />
                            </a>
                            <a
                                href="https://allpaxcorp.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-[#f0e0bb]/30 transition-colors group"
                            >
                                <span className="text-[#b87333] font-semibold">Visit Allpax Website</span>
                                <ExternalLink className="w-5 h-5 text-[#b87333] group-hover:translate-x-1 transition-transform" />
                            </a>
                        </div>
                    </div>
                </section>

                {/* Allpax Section */}
                <section className="bg-white rounded-2xl shadow-xl overflow-hidden">
                    <div className="bg-[#b87333] text-white p-6">
                        <h2 className="text-center text-2xl font-bold">Allpax Gasket Cutting Systems</h2>
                        <p className="text-center text-[#f0e0bb] mt-1">Precision tools for gasket fabrication</p>
                    </div>
                    <div className="p-8">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            <div className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
                                <img src="/imgs/gasketcutter.webp" alt="Gasket Cutter" className="w-full h-56 object-cover transform group-hover:scale-105 transition-transform duration-500" />
                                <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-3 text-sm text-center translate-y-full group-hover:translate-y-0 transition-transform duration-300">AX6020 Heavy Duty Gasket Cutter w/ Board - 0 to 25&quot; (OD)</div>
                            </div>
                            <div className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
                                <img src="/imgs/AX7001_GC.webp" alt="Rotary Cutter" className="w-full h-56 object-cover transform group-hover:scale-105 transition-transform duration-500" />
                                <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-3 text-sm text-center translate-y-full group-hover:translate-y-0 transition-transform duration-300">AX7001 SM4 Gasket Cutter</div>
                            </div>
                            <div className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
                                <img src="/imgs/M3_standard_GC.png" alt="Rotary Cutter" className="w-full h-56 object-cover transform group-hover:scale-105 transition-transform duration-500" />
                                <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-3 text-sm text-center translate-y-full group-hover:translate-y-0 transition-transform duration-300">AX7000 M3 Rotary-Style Standard Gasket Cutter</div>
                            </div>
                            <div className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
                                <img src="/imgs/m3_cutter_disc_set.png" alt="Cutter Disc Set" className="w-full h-56 object-cover transform group-hover:scale-105 transition-transform duration-500" />
                                <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-3 text-sm text-center translate-y-full group-hover:translate-y-0 transition-transform duration-300">Cutter Disc Set</div>
                            </div>
                            <div className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
                                <img src="/imgs/cutting_blades.png" alt="Cutting Blades" className="w-full h-56 object-cover transform group-hover:scale-105 transition-transform duration-500" />
                                <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-3 text-sm text-center translate-y-full group-hover:translate-y-0 transition-transform duration-300">Cutting Blades (6 pcs)</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Guardair Section */}
                <section className="bg-white rounded-2xl shadow-xl overflow-hidden">
                    <div className="bg-[#b87333] text-white p-6">
                        <h2 className="text-center text-2xl font-bold">Guardair Pneumatic Systems</h2>
                        <p className="text-center text-[#f0e0bb] mt-1">Industrial safety air guns and vacuums</p>
                    </div>
                    <div className="p-8">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
                            <div className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
                                <img src="/imgs/safetyairgun.jpg" alt="Safety Air Gun" className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-500" />
                                <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-3 text-sm text-center translate-y-full group-hover:translate-y-0 transition-transform duration-300">Safety Air Gun</div>
                            </div>
                            <div className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
                                <img src="/imgs/vaccum kit.jpg" alt="Vacuum Kit" className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-500" />
                                <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-3 text-sm text-center translate-y-full group-hover:translate-y-0 transition-transform duration-300">Vacuum Kit</div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}
