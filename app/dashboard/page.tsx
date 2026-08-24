"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

export default function DashboardPage() {
  const router = useRouter();
  const [pickup, setPickup] = useState("");
  const [dropoff, setDropoff] = useState("");

  const handleSeePrices = (e: React.FormEvent) => {
    e.preventDefault();
    if (!pickup || !dropoff) {
      alert("Please enter both pickup and dropoff locations across Abuja.");
      return;
    }
    router.push(`/dashboard/rides?pickup=${encodeURIComponent(pickup)}&dropoff=${encodeURIComponent(dropoff)}`);
  };

  return (
    <div className="min-h-screen bg-white text-black font-sans flex flex-col justify-between selection:bg-zinc-200">
      
      {/* Top Navbar */}
      <header className="px-8 lg:px-16 py-6 flex items-center justify-between border-b border-zinc-100 bg-white/90 backdrop-blur-md sticky top-0 z-50">
        <div className="flex items-center space-x-10">
          <Link href="/dashboard" className="text-xl font-black tracking-tighter text-black">
            RouteFlow Abuja
          </Link>
          <nav className="hidden md:flex items-center space-x-8 text-sm font-bold text-zinc-600">
            <Link href="/dashboard" className="text-black border-b-2 border-black pb-1">Dispatch & Freight</Link>
            <Link href="/dashboard/fleet" className="hover:text-black transition">Fleet Tracking</Link>
            <Link href="/activity" className="hover:text-black transition">Activity Logs</Link>
          </nav>
        </div>

        <div className="flex items-center space-x-6">
         
          <div className="flex items-center space-x-2 bg-zinc-100 border border-zinc-200 px-4 py-2 rounded-full cursor-pointer hover:border-zinc-300 transition">
            <span className="text-xs font-black text-black">Ilemona</span>
            <div className="w-6 h-6 rounded-full bg-black text-white flex items-center justify-center text-[10px] font-black">
              ILE
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-1 flex flex-col items-center justify-start px-4 pt-12 pb-6 max-w-6xl mx-auto w-full text-center space-y-8">
        
        <div className="space-y-3 max-w-2xl">
          <span className="text-xs font-black uppercase tracking-widest text-zinc-400">FCT Smart Urban Logistics</span>
          <h1 className="text-4xl lg:text-6xl font-black tracking-tight text-black leading-tight">
            Fast, reliable freight & dispatch across Abuja.
          </h1>
          <p className="text-zinc-500 text-sm lg:text-base font-medium">
            Powering real-time package delivery, dispatch routing, and heavy transit across Wuse, Maitama, Garki, and beyond.
          </p>
        </div>

        {/* Input Bar Form (Outer Wrapper Removed) */}
        <form 
          onSubmit={handleSeePrices}
          className="w-full max-w-4xl flex flex-col lg:flex-row items-center gap-3 z-10"
        >
          {/* Pickup Input */}
          <div className="relative flex-1 w-full flex items-center bg-white border border-zinc-200 rounded-2xl px-5 py-4 shadow-sm focus-within:ring-2 focus-within:ring-black">
            <input
              type="text"
              required
              value={pickup}
              onChange={(e) => setPickup(e.target.value)}
              placeholder="Pickup location (e.g. Utako Market)"
              className="w-full bg-transparent text-sm font-semibold text-black placeholder-zinc-400 focus:outline-none"
            />
          </div>

          {/* Dropoff Input */}
          <div className="relative flex-1 w-full flex items-center bg-white border border-zinc-200 rounded-2xl px-5 py-4 shadow-sm focus-within:ring-2 focus-within:ring-black">
            <input
              type="text"
              required
              value={dropoff}
              onChange={(e) => setDropoff(e.target.value)}
              placeholder="Dropoff destination (e.g. Jabi Lake Mall)"
              className="w-full bg-transparent text-sm font-semibold text-black placeholder-zinc-400 focus:outline-none"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full lg:w-auto px-8 py-4 bg-black text-white font-black text-sm tracking-wide rounded-2xl hover:bg-zinc-800 transition shadow-md whitespace-nowrap"
          >
            Calculate Pricing
          </button>
        </form>

        {/* Full-Screen Vector Background Showcase Container */}
        <div className="w-full h-80 sm:h-[420px] relative bg-zinc-100 border border-zinc-200 rounded-3xl overflow-hidden flex items-center justify-center shadow-lg">
          <Image
            src="/images/puzzle-creative-H1sqs8pr140-unsplash.png" 
            alt="Abuja Logistics Full Screen Vector Map"
            fill
            className="object-cover opacity-90 hover:scale-105 transition duration-500"
            priority
          />
        </div>

      </main>

      {/* Footer */}
      <footer className="px-8 lg:px-16 py-6 border-t border-zinc-100 text-xs font-semibold text-zinc-500 flex items-center justify-between bg-white">
        <span>© 2026 RouteFlow Abuja Technologies. All rights reserved.</span>
        <div className="space-x-6">
          <span className="cursor-pointer hover:text-black transition">Privacy Policy</span>
          <span className="cursor-pointer hover:text-black transition">FCT Logistics Terms</span>
        </div>
      </footer>

    </div>
  );
}