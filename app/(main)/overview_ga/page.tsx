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
                        <div className="flex flex-wrap justify-center gap-6">
                            <div className="w-72 group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 bg-white border border-gray-100">
                                <div className="p-4 bg-white">
                                    <img src="/imgs/gasketcutter.webp" alt="Gasket Cutter" className="w-full h-40 object-contain transform group-hover:scale-105 transition-transform duration-500" />
                                </div>
                                <div className="absolute bottom-0 left-0 right-0 bg-black/80 text-white p-2 text-xs text-center translate-y-full group-hover:translate-y-0 transition-transform duration-300">AX6020 Heavy Duty Gasket Cutter w/ Board - 0 to 25&quot; (OD)</div>
                            </div>
                            <div className="w-72 group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 bg-white border border-gray-100">
                                <div className="p-4 bg-white">
                                    <img src="/imgs/AX7001_GC.webp" alt="Rotary Cutter" className="w-full h-40 object-contain transform group-hover:scale-105 transition-transform duration-500" />
                                </div>
                                <div className="absolute bottom-0 left-0 right-0 bg-black/80 text-white p-2 text-xs text-center translate-y-full group-hover:translate-y-0 transition-transform duration-300">AX7001 SM4 Gasket Cutter</div>
                            </div>
                            <div className="w-72 group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 bg-white border border-gray-100">
                                <div className="p-4 bg-white">
                                    <img src="/imgs/M3_standard_GC.png" alt="Rotary Cutter" className="w-full h-40 object-contain transform group-hover:scale-105 transition-transform duration-500" />
                                </div>
                                <div className="absolute bottom-0 left-0 right-0 bg-black/80 text-white p-2 text-xs text-center translate-y-full group-hover:translate-y-0 transition-transform duration-300">AX7000 M3 Rotary-Style Standard Gasket Cutter</div>
                            </div>
                            <div className="w-72 group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 bg-white border border-gray-100">
                                <div className="p-4 bg-white">
                                    <img src="/imgs/m3_cutter_disc_set.png" alt="Cutter Disc Set" className="w-full h-40 object-contain transform group-hover:scale-105 transition-transform duration-500" />
                                </div>
                                <div className="absolute bottom-0 left-0 right-0 bg-black/80 text-white p-2 text-xs text-center translate-y-full group-hover:translate-y-0 transition-transform duration-300">Cutter Disc Set</div>
                            </div>
                            <div className="w-72 group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 bg-white border border-gray-100">
                                <div className="p-4 bg-white">
                                    <img src="/imgs/cutting_blades.png" alt="Cutting Blades" className="w-full h-40 object-contain transform group-hover:scale-105 transition-transform duration-500" />
                                </div>
                                <div className="absolute bottom-0 left-0 right-0 bg-black/80 text-white p-2 text-xs text-center translate-y-full group-hover:translate-y-0 transition-transform duration-300">Cutting Blades (6 pcs)</div>
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
                    <div className="p-8 space-y-12">
                        {/* Subsection: Safety Air Guns */}
                        <div>
                            <h3 className="text-2xl font-bold text-[#b87333] mb-6 border-b-2 border-[#b87333]/20 pb-2">Safety Air Guns</h3>
                            <div className="flex flex-wrap justify-center gap-6">
                                <div className="w-72 group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 bg-white border border-gray-100">
                                    <div className="p-4 bg-white">
                                        <img src="/imgs/safetyairgun.jpg" alt="Safety Air Gun" className="w-full h-40 object-contain transform group-hover:scale-105 transition-transform duration-500" />
                                    </div>
                                    <div className="absolute bottom-0 left-0 right-0 bg-black/80 text-white p-2 text-xs text-center translate-y-full group-hover:translate-y-0 transition-transform duration-300">Safety Air Gun</div>
                                </div>
                                <div className="w-72 group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 bg-white border border-gray-100">
                                    <div className="p-4 bg-white">
                                        <img src="/imgs/lj_safety.webp" alt="Long John" className="w-full h-40 object-contain transform group-hover:scale-105 transition-transform duration-500" />
                                    </div>
                                    <div className="absolute bottom-0 left-0 right-0 bg-black/80 text-white p-2 text-xs text-center translate-y-full group-hover:translate-y-0 transition-transform duration-300">Long John 75LJ Safety Air Gun - 6&quot;</div>
                                </div>
                                <div className="w-72 group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 bg-white border border-gray-100">
                                    <div className="p-4 bg-white">
                                        <img src="/imgs/ultra_safety.webp" alt="Safety Air Gun" className="w-full h-40 object-contain transform group-hover:scale-105 transition-transform duration-500" />
                                    </div>
                                    <div className="absolute bottom-0 left-0 right-0 bg-black/80 text-white p-2 text-xs text-center translate-y-full group-hover:translate-y-0 transition-transform duration-300">Ultra U75LJ Safety Air Gun - 6&quot; w/Short Trigger</div>
                                </div>
                                <div className="w-72 group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 bg-white border border-gray-100">
                                    <div className="p-4 bg-white">
                                        <img src="/imgs/palmjet_safety.webp" alt="Safety Air Gun" className="w-full h-40 object-contain transform group-hover:scale-105 transition-transform duration-500" />
                                    </div>
                                    <div className="absolute bottom-0 left-0 right-0 bg-black/80 text-white p-2 text-xs text-center translate-y-full group-hover:translate-y-0 transition-transform duration-300">PalmJet GA44 Safety Air Gun - 4&quot; Straight</div>
                                </div>
                                <div className="w-72 group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 bg-white border border-gray-100">
                                    <div className="p-4 bg-white">
                                        <img src="/imgs/force_safety.webp" alt="Safety Air Gun" className="w-full h-40 object-contain transform group-hover:scale-105 transition-transform duration-500" />
                                    </div>
                                    <div className="absolute bottom-0 left-0 right-0 bg-black/80 text-white p-2 text-xs text-center translate-y-full group-hover:translate-y-0 transition-transform duration-300">Force 5 Safety Air Gun - 24&quot;</div>
                                </div>
                                <div className="w-72 group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 bg-white border border-gray-100">
                                    <div className="p-4 bg-white">
                                        <img src="/imgs/inforcer_safety.webp" alt="Safety Air Gun" className="w-full h-40 object-contain transform group-hover:scale-105 transition-transform duration-500" />
                                    </div>
                                    <div className="absolute bottom-0 left-0 right-0 bg-black/80 text-white p-2 text-xs text-center translate-y-full group-hover:translate-y-0 transition-transform duration-300">Inforcer Safety Air Gun - 24&quot;</div>
                                </div>
                                <div className="w-72 group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 bg-white border border-gray-100">
                                    <div className="p-4 bg-white">
                                        <img src="/imgs/syphon_spray.webp" alt="Safety Air Gun" className="w-full h-40 object-contain transform group-hover:scale-105 transition-transform duration-500" />
                                    </div>
                                    <div className="absolute bottom-0 left-0 right-0 bg-black/80 text-white p-2 text-xs text-center translate-y-full group-hover:translate-y-0 transition-transform duration-300">Syphon Spray Gun 79SG - 6&quot;</div>
                                </div>
                                <div className="w-72 group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 bg-white border border-gray-100">
                                    <div className="p-4 bg-white">
                                        <img src="/imgs/gunvac.webp" alt="Safety Air Gun" className="w-full h-40 object-contain transform group-hover:scale-105 transition-transform duration-500" />
                                    </div>
                                    <div className="absolute bottom-0 left-0 right-0 bg-black/80 text-white p-2 text-xs text-center translate-y-full group-hover:translate-y-0 transition-transform duration-300">GunVac Handheld Vacuum - Kit</div>
                                </div>
                            </div>
                        </div>

                        {/* Subsection: Vacuums */}
                        <div>
                            <h3 className="text-2xl font-bold text-[#b87333] mb-6 border-b-2 border-[#b87333]/20 pb-2">Industrial Vacuums</h3>
                            <div className="flex flex-wrap justify-center gap-6">
                                <div className="w-72 group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 bg-white border border-gray-100">
                                    <div className="p-4 bg-white">
                                        <img src="/imgs/vaccum kit.jpg" alt="Vacuum Kit" className="w-full h-40 object-contain transform group-hover:scale-105 transition-transform duration-500" />
                                    </div>
                                    <div className="absolute bottom-0 left-0 right-0 bg-black/80 text-white p-2 text-xs text-center translate-y-full group-hover:translate-y-0 transition-transform duration-300">Vacuum Kit</div>
                                </div>
                                <div className="w-72 group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 bg-white border border-gray-100">
                                    <div className="p-4 bg-white">
                                        <img src="/imgs/55gallon.webp" alt="Vacuum Kit" className="w-full h-40 object-contain transform group-hover:scale-105 transition-transform duration-500" />
                                    </div>
                                    <div className="absolute bottom-0 left-0 right-0 bg-black/80 text-white p-2 text-xs text-center translate-y-full group-hover:translate-y-0 transition-transform duration-300">PowerQUAD 55 Gallon Vacuum kit w/ 2&quot; Inlet</div>
                                </div>
                                <div className="w-72 group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 bg-white border border-gray-100">
                                    <div className="p-4 bg-white">
                                        <img src="/imgs/55gallon_NED.webp" alt="Vacuum Kit" className="w-full h-40 object-contain transform group-hover:scale-105 transition-transform duration-500" />
                                    </div>
                                    <div className="absolute bottom-0 left-0 right-0 bg-black/80 text-white p-2 text-xs text-center translate-y-full group-hover:translate-y-0 transition-transform duration-300">PowerQUAD 55 Gallon NED Vacuum Kit w/ 2&quot; Inlet</div>
                                </div>
                                <div className="w-72 group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 bg-white border border-gray-100">
                                    <div className="p-4 bg-white">
                                        <img src="/imgs/55gallon_ATEX.webp" alt="Vacuum Kit" className="w-full h-40 object-contain transform group-hover:scale-105 transition-transform duration-500" />
                                    </div>
                                    <div className="absolute bottom-0 left-0 right-0 bg-black/80 text-white p-2 text-xs text-center translate-y-full group-hover:translate-y-0 transition-transform duration-300">PowerQUAD 55 Gallon ATEX Vacuum Kit w/ 1.5&quot; Inlet Inlet</div>
                                </div>
                                <div className="w-72 group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 bg-white border border-gray-100">
                                    <div className="p-4 bg-white">
                                        <img src="/imgs/pcs.webp" alt="Vacuum Kit" className="w-full h-40 object-contain transform group-hover:scale-105 transition-transform duration-500" />
                                    </div>
                                    <div className="absolute bottom-0 left-0 right-0 bg-black/80 text-white p-2 text-xs text-center translate-y-full group-hover:translate-y-0 transition-transform duration-300">Personnel Cleaning Station 5.5 Gallon Vacuum</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}
