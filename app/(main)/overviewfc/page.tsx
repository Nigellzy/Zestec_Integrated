import React from 'react';
import { ExternalLink } from 'lucide-react';

export default async function OverviewFC() {
    return (
        <main className="min-h-screen bg-gray-50">
            {/* Header Section */}
            <div className="bg-[#b87333] text-white py-16 px-4">
                <div className="max-w-6xl mx-auto text-center">
                    <h1 className="text-3xl md:text-5xl font-bold mb-4">Flexible Cables</h1>
                    <p className="text-xl text-[#f0e0bb]">For Cranes and Industrial Applications</p>
                    <div className="w-24 h-1 bg-[#f0e0bb] mx-auto rounded-full mt-6"></div>
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-4 py-12 space-y-16">
                {/* Main Content Section */}
                <section className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold text-[#b87333] border-l-4 border-[#b87333] pl-4">
                            Industrial Application Cables
                        </h2>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            Flexible cables designed to withstand bending stress and mechanical
                            impacts are used in mobile machines. These cables come in a variety
                            of specifications depending on how and where they are used.
                        </p>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            Their cross section can be round or flat and are designed specifically for
                            the intended application e.g. bend resistant, torsion resistant,
                            high tensile strength or composite types.
                        </p>

                        <div className="flex flex-col space-y-3 pt-4">
                            <a
                                href="http://www.nfc.sh/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center text-[#b87333] font-semibold hover:underline group"
                            >
                                NANYANG-FUJIKURA (nfc.sh)
                                <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </a>
                            <a
                                href="http://www.taishocable.co.jp/english/company.html"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center text-[#b87333] font-semibold hover:underline group"
                            >
                                TAISHO ELECTRIC CABLE CO., LTD.
                                <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </a>
                        </div>
                    </div>

                    <div className="bg-white p-4 rounded-2xl shadow-xl transform hover:scale-[1.02] transition-transform duration-300">
                        <img
                            src="/imgs/cableapplications.jpg"
                            alt="Cable Applications"
                            className="w-full h-auto rounded-lg"
                        />
                        <p className="text-center text-gray-500 text-sm mt-4 italic">Various industrial cable applications</p>
                    </div>
                </section>

                {/* Additional Images Section */}
                <section>
                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        <div className="group relative overflow-hidden rounded-xl shadow-lg">
                            <img src="/imgs/fc.jpg" alt="Flexible Cable Type 1" className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-500" />
                        </div>
                        <div className="group relative overflow-hidden rounded-xl shadow-lg">
                            <img src="/imgs/fc2.jpg" alt="Flexible Cable Type 2" className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-500" />
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}
