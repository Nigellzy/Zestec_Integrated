import React from 'react';

export default async function Contact() {

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-[#b87333] text-white py-6 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <div className="w-24 h-1 bg-[#f0e0bb] mx-auto rounded-full"></div>
          <p className="mt-4 text-lg text-[#f0e0bb]">Get in touch with our team</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <iframe 
            src="https://forms.gle/HT3T9fKZ2k8TwDse8" 
            width="100%" 
            height="1000" 
            style={{ border: 'none' }}
            title="Contact Form"
            className="w-full"
          >Loading...</iframe>
        </div>
      </div>
    </main>
  );
}
