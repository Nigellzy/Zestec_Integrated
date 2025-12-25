import React from 'react';
import Slideshow2 from '../../../components/Slideshow2';
import { ExternalLink } from 'lucide-react';

export default async function OverviewIML() {

    const slideshow1Images = [
        "/imgs/pd_bridge.jpg",
        "/imgs/MD300.jpg",
        "/imgs/PD Root.jpg",
        "/imgs/pd_tree.jpg",
        "/imgs/pd1.jpg",
        "/imgs/pd2.jpg"
    ];

    const slideshow2Images = [
        "/imgs/screenprotector.png",
        "/imgs/telescope.png",
        "/imgs/needle.png",
        "/imgs/adaptor1.png",
        "/imgs/adaptor2.png",
        "/imgs/adaptor3.png"
    ];

    return (
        <main className="min-h-screen bg-gray-50">
            {/* Header Section */}
            <div className="bg-[#b87333] text-white py-16 px-4">
                <div className="max-w-6xl mx-auto text-center">
                    <h1 className="text-3xl md:text-5xl font-bold mb-4">IML Instrumenta Mechanik Labor Electronic</h1>
                    <div className="w-24 h-1 bg-[#f0e0bb] mx-auto rounded-full"></div>
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-4 py-12 space-y-20">
                {/* Section 1: IML-RESI Microdrills */}
                <section className="grid md:grid-cols-2 gap-12 items-start">
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold text-[#b87333] border-l-4 border-[#b87333] pl-4">
                            IML-RESI Microdrills
                        </h2>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            The IML-RESI PD can quickly and accurately measure defect in trees, wooden utility poles and wooden
                            structures. The IML-RESI PD comes with full electronic data capture, analysis software and is
                            user-independent. Being battery operated, the IML-RESI PD can be used to test branches and roots.
                        </p>
                        <a 
                            href="https://www.iml-service.com/about-us/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-[#b87333] font-semibold hover:underline group"
                        >
                            About Us - IML (iml-service.com)
                            <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </a>

                        {/* Additional Images Grid for Section 1 */}
                        <div className="grid grid-cols-2 gap-4 mt-8">
                            <img src="/imgs/pd3.jpg" alt="IML PD Usage" className="rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 w-full h-48 object-cover" />
                            <img src="/imgs/pd4.jpg" alt="IML PD Usage" className="rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 w-full h-48 object-cover" />
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-2xl shadow-xl">
                        <Slideshow2 images={slideshow1Images} />
                        <p className="text-center text-gray-500 text-sm mt-4 italic">IML-RESI PD in action</p>
                    </div>
                </section>

                {/* Section 2: Sonic and Electrical Reactance Tomographs */}
                <section className="grid md:grid-cols-2 gap-12 items-start">
                    <div className="order-2 md:order-1 grid grid-cols-2 gap-4">
                        <img src="/imgs/OO5z0Or7.jpg" alt="Tomograph" className="rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 w-full h-40 object-cover" />
                        <img src="/imgs/picus1.jpg" alt="Picus 1" className="rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 w-full h-40 object-cover" />
                        <img src="/imgs/picus2.jpg" alt="Picus 2" className="rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 w-full h-40 object-cover" />
                        <img src="/imgs/picus3.jpg" alt="Picus 3" className="rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 w-full h-40 object-cover" />
                    </div>

                    <div className="order-1 md:order-2 space-y-6">
                        <h2 className="text-3xl font-bold text-[#b87333] border-l-4 border-[#b87333] pl-4">
                            Sonic and Electrical Reactance Tomographs
                        </h2>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            The PiCUS Sonic Tomograph (SoT) and Treetronic Electrical Reactance
                            Tomograph (ERT) respectively measures the biomechanical and chemical properties of the tree. Allowing up to
                            100 measuring points,
                            the SoT and ERT are well suited for testing bigger trees. By testing at
                            different levels, the Pro software allows 3D tomograms to be generated for
                            easier and more detail analysis.
                        </p>
                        <a 
                            href="https://www.iml-electronic.com/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-[#b87333] font-semibold hover:underline group"
                        >
                            IML Electronic - With passion and precision
                            <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </a>
                    </div>
                </section>

                {/* Section 3: Accessories */}
                <section className="bg-white rounded-2xl shadow-xl p-8 md:p-4 border border-[#b87333]/10">
                    <div className="text-center mb-4">
                        <h2 className="text-3xl font-bold text-[#b87333] mb-2">Accessories</h2>
                        <p className="text-gray-600">Essential add-ons for your equipment</p>
                    </div>
                    
                    <div className="max-w-2xl mx-auto">
                        <Slideshow2 images={slideshow2Images} />
                    </div>
                </section>
            </div>
        </main>
    );
}
