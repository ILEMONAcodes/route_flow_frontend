"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function RouteFlowLanding() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-[#0B192C] flex flex-col font-sans">
      
      {/* Sticky Responsive Header Navbar */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-white/90 border-b border-slate-100 px-6 sm:px-8 py-4 flex items-center justify-between max-w-7xl mx-auto w-full">
        <div className="flex items-center space-x-2">
          {/* Left spacer / branding anchor */}
        </div>
        
        <div className="absolute left-1/2 -translate-x-1/2 text-center">
          <span className="text-xl sm:text-2xl font-black tracking-tight text-[#0B192C]">RouteFlow Abuja</span>
        </div>

        {/* Desktop Actions */}
        <div className="hidden sm:flex items-center space-x-4">
          <button className="text-sm font-bold text-slate-900 hover:text-blue-600 transition px-4 py-2">
            Login
          </button>
          <button className="bg-[#0B192C] text-white px-5 py-2 rounded-full text-sm font-bold shadow-xs hover:bg-slate-800 transition">
            Register
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="sm:hidden flex items-center">
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-slate-900 cursor-pointer p-2 rounded-lg hover:bg-slate-100 transition focus:outline-none"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? (
              // Close (X) Icon
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              // Hamburger Icon
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
              </svg>
            )}
          </button>
        </div>
      </header>

      {/* Mobile Dropdown Menu Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden fixed top-[73px] left-0 w-full bg-white border-b border-slate-200 shadow-xl px-6 py-6 flex flex-col space-y-4 z-40 animate-in fade-in slide-in-from-top-2 duration-200">
          <button className="w-full text-center text-sm font-bold text-slate-900 py-3 border-b border-slate-100">
            Login
          </button>
          <button className="w-full bg-[#0B192C] text-white py-3 rounded-xl text-sm font-bold shadow-xs">
            Register
          </button>
        </div>
      )}

      {/* Hero Text & Actions Section */}
      <section className="max-w-4xl mx-auto px-6 pt-12 pb-10 text-center flex flex-col items-center w-full">
        <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-[#0B192C] leading-[1.1]">
          Smart urban delivery <br />
          engineered for Abuja.
        </h1>
        
        <p className="text-slate-600 text-base sm:text-lg mt-4 max-w-2xl font-medium leading-relaxed">
          The routing platform built around the real-world traffic and layout of the Federal Capital Territory. Optimize, dispatch, and track seamlessly.
        </p>

        {/* Dual Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4 mt-8 w-full">
          <button className="bg-[#165B33] hover:bg-[#124b29] text-white font-bold px-8 py-3.5 rounded-xl text-sm transition w-full sm:w-auto shadow-sm">
            Get RouteFlow
          </button>
          <button className="bg-slate-100 hover:bg-slate-200 text-slate-900 font-bold px-8 py-3.5 rounded-xl text-sm transition w-full sm:w-auto">
            Driver Portal
          </button>
        </div>
      </section>

      {/* Hero Image Container Section */}
      <section className="max-w-7xl mx-auto px-6 pb-8 w-full">
        <div className="relative rounded-3xl overflow-hidden aspect-[16/10] sm:aspect-[21/9] w-full bg-slate-100 shadow-xl border border-slate-200/60">
          <Image 
            src="/images/hero-city.png" 
            alt="Abuja Urban Logistics and Map View"
            fill
            className="object-cover"
            priority
          />
        </div>
      </section>

      {/* NEXT SECTION: Booking & Delivery Layout */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 py-10 sm:py-14 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        
        {/* Left Interactive Booking Widget */}
        <div className="space-y-6">
          <div className="flex items-center space-x-2 text-sm font-bold text-slate-800"></div>

          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-[#0B192C] leading-tight">
            Book deliveries <br />
            across Abuja instantly
          </h2>

          <div className="space-y-4 pt-2 max-w-md">
            <div className="bg-slate-100 px-4 py-2 rounded-xl text-xs font-bold text-slate-600 w-fit">
              Deliver now
            </div>

            {/* Pickup / Dropoff inputs */}
            <div className="space-y-3">
              <div className="relative flex items-center bg-slate-100 rounded-2xl px-4 py-3.5 border border-slate-200">
                <span className="w-2.5 h-2.5 rounded-full bg-slate-900 mr-3 shrink-0"></span>
                <input 
                  type="text" 
                  placeholder="Enter pickup location (e.g., Wuse 2)" 
                  className="bg-transparent text-sm w-full outline-none text-slate-800 font-medium placeholder-slate-400"
                />
              </div>

              <div className="relative flex items-center bg-slate-100 rounded-2xl px-4 py-3.5 border border-slate-200">
                <span className="w-2.5 h-2.5 bg-blue-600 mr-3 shrink-0"></span>
                <input 
                  type="text" 
                  placeholder="Enter dropoff location (e.g., Maitama)" 
                  className="bg-transparent text-sm w-full outline-none text-slate-800 font-medium placeholder-slate-400"
                />
              </div>
            </div>

            {/* Action controls */}
            <div className="pt-2">
              <button className="w-full sm:w-auto bg-black hover:bg-slate-800 text-white font-bold px-8 py-4 rounded-2xl text-sm shadow-md transition">
                Check delivery rates
              </button>
            </div>
            <div>
              <span className="text-xs font-semibold text-slate-600 underline cursor-pointer">
                Log in to see your recent delivery history
              </span>
            </div>
          </div>
        </div>

        {/* Right Vector Illustration Slot */}
        <div className="relative rounded-3xl overflow-hidden aspect-[4/3] bg-amber-500/10 border border-slate-200/80 flex items-center justify-center">
          <Image 
            src="/images/ride-service.png" 
            alt="Abuja Logistics Package & Delivery Illustration"
            fill
            className="object-cover"
          />
        </div>

      </section>

      {/* Footer */}
      <footer className="bg-[#07111E] text-white mt-auto py-12 px-6 sm:px-8 border-t border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-xs text-slate-400 space-y-4 md:space-y-0">
          <p>© 2026 RouteFlow Abuja Technologies. All rights reserved.</p>
          <div className="flex space-x-6 sm:space-x-8 font-medium">
            <span>Privacy Policy</span>
            <span>Driver Terms</span>
            <span>Abuja Operations</span>
          </div>
        </div>
      </footer>

    </div>
  );
}