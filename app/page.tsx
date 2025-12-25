import React from 'react';
import Link from 'next/link';
import { Trees, Wrench, Cable, Headset } from 'lucide-react';
import Slideshow from '../components/Slideshow';

export default async function Home() {
  // Simulate loading delay to show transition
  // await new Promise((resolve) => setTimeout(resolve, 800));

  const productLinks = [
    { text: "Testing & measuring equipment for trees and wooden structures", href: "/overview_iml" },
    { text: "Pneumatic guns, vacuums and gasket cutters for industrial applications", href: "/overview_ga" },
    { text: "Flexible crane cables and various types of industrial cables", href: "/overviewfc" },
    { text: "Industrial sealants, adhesives and waterproofing compounds", href: "/contact" }
  ];

  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section with Slideshow */}
      <section className="w-full bg-white shadow-lg">
        <Slideshow />
      </section>
      
      {/* Introduction Section */}
      <section className="py-16 px-4 md:px-8 max-w-6xl mx-auto">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 md:p-12 border border-[#b87333]/20">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-[#b87333] mb-6">
              Who is Zestec Integrated?
            </h2>
            <div className="w-24 h-1 bg-[#b87333] mx-auto rounded-full"></div>
          </div>

          <div className="space-y-8 text-lg md:text-xl text-gray-800 leading-relaxed">
            <p>
              Established in 2008, <span className="font-semibold text-[#b87333]">Zestec Integrated Pte Ltd</span>’s primary business focus is to support and
              fulfil the needs of various speciality and niche segments in the Southeast Asian region.
            </p>

            <p>
              We distribute a wide range of products and equipment supplied by our established global partners and
              principals. Our portfolio includes:
            </p>

            <div className="grid md:grid-cols-2 gap-6 mt-8">
              {productLinks.map((item, index) => (
                <div 
                  key={index} 
                  className="flex items-start space-x-3 bg-[#f0e0bb]/30 p-4 rounded-lg hover:bg-[#f0e0bb]/50 transition-colors duration-300"
                >
                  <div className="mt-1.5 w-2 h-2 rounded-full bg-[#b87333] flex-shrink-0" />
                  <span className="text-gray-800">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Product Navigation Section */}
      <section className="py-16 px-4 md:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#b87333] mb-4">
              Explore Our Solutions
            </h2>
            <p className="text-gray-600 text-lg">Select a category to learn more about our specialized equipment</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/overview_iml" className="group bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-transparent hover:border-[#b87333]/30 flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-[#f0e0bb]/30 rounded-full flex items-center justify-center mb-4 group-hover:bg-[#b87333] transition-colors duration-300">
                <Trees className="w-10 h-10 text-[#b87333] group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-[#b87333]">Tree Inspection</h3>
              <p className="text-gray-600 text-sm mb-4">Tree and Wood Inspection equipment</p>
              <span className="mt-auto text-[#b87333] font-semibold group-hover:translate-x-1 transition-transform inline-flex items-center">
                View Products <span className="ml-2">→</span>
              </span>
            </Link>

            <Link href="/overview_ga" className="group bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-transparent hover:border-[#b87333]/30 flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-[#f0e0bb]/30 rounded-full flex items-center justify-center mb-4 group-hover:bg-[#b87333] transition-colors duration-300">
                <Wrench className="w-10 h-10 text-[#b87333] group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-[#b87333]">Pneumatic Tools</h3>
              <p className="text-gray-600 text-sm mb-4">Guns, vacuums and gasket cutters</p>
              <span className="mt-auto text-[#b87333] font-semibold group-hover:translate-x-1 transition-transform inline-flex items-center">
                View Products <span className="ml-2">→</span>
              </span>
            </Link>

            <Link href="/overviewfc" className="group bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-transparent hover:border-[#b87333]/30 flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-[#f0e0bb]/30 rounded-full flex items-center justify-center mb-4 group-hover:bg-[#b87333] transition-colors duration-300">
                <Cable className="w-10 h-10 text-[#b87333] group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-[#b87333]">Industrial Cables</h3>
              <p className="text-gray-600 text-sm mb-4">Flexible Crane & Industrial Cables</p>
              <span className="mt-auto text-[#b87333] font-semibold group-hover:translate-x-1 transition-transform inline-flex items-center">
                View Products <span className="ml-2">→</span>
              </span>
            </Link>

            <Link href="/contact" className="group bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-transparent hover:border-[#b87333]/30 flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-[#f0e0bb]/30 rounded-full flex items-center justify-center mb-4 group-hover:bg-[#b87333] transition-colors duration-300">
                <Headset className="w-10 h-10 text-[#b87333] group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-[#b87333]">Contact Us</h3>
              <p className="text-gray-600 text-sm mb-4">Get in touch with our team</p>
              <span className="mt-auto text-[#b87333] font-semibold group-hover:translate-x-1 transition-transform inline-flex items-center">
                Contact Now <span className="ml-2">→</span>
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-16 px-4 md:px-8 bg-[#b87333] text-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold border-l-4 border-[#f0e0bb] pl-4">
              Our Commitment
            </h3>
            <p className="text-lg leading-relaxed text-[#f0e0bb]">
              Leveraging technologically advanced equipment, systems and
              methodologies to build capacity and enhance capabilities, our commitment to quality and dedication
              to innovation has been and will always remain an integral part of our business conduct.
            </p>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-3xl font-bold border-l-4 border-[#f0e0bb] pl-4">
              Trusted Partners
            </h3>
            <p className="text-lg leading-relaxed text-[#f0e0bb]">
              As testimony to our reliability, we have long-standing relationships
              with government agencies and blue-chip customers in various ASEAN countries.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
