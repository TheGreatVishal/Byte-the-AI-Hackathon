"use client"

import React, { useState } from "react"
import Image from "next/image"
import { Sparkles, Menu, X } from "lucide-react"

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const links = [
    { label: "About", href: "#about" },
    { label: "Tracks", href: "#tracks" },
    { label: "Schedule", href: "#schedule" },
    { label: "Register", href: "#register" },
  ]

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 py-4 flex justify-between items-center bg-gradient-to-r from-[#0f0c29]/80 via-[#302b63]/80 to-[#24243e]/80 backdrop-blur-lg shadow-xl border-b border-white/10">
      
      {/* Logo and Title */}
      <div className="flex items-center gap-4">
        <div className="w-[60px] h-[60px] rounded-full bg-white p-1 border-2 border-white shadow-md">
          <Image
            src="/logo.png"
            alt="Central University of Rajasthan"
            width={50}
            height={50}
            className="rounded-full object-contain"
          />
        </div>
        <div className="text-white font-extrabold text-lg md:text-2xl tracking-wide flex items-center gap-1">
          <Sparkles className="w-5 h-5 text-yellow-400 animate-pulse" />
          Byte-the-AI Hackathon
        </div>
      </div>

      {/* Desktop Links */}
      <div className="hidden md:flex gap-8">
        {links.map(({ label, href }) => (
          <a
            key={label}
            href={href}
            className="text-white text-sm font-semibold hover:text-yellow-400 hover:scale-105 transition-all duration-200 ease-in-out"
          >
            {label}
          </a>
        ))}
      </div>

      {/* Mobile menu button */}
      <button
        className="md:hidden text-white"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-label="Toggle menu"
      >
        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-[#24243e]/95 backdrop-blur-lg border-t border-white/10 flex flex-col items-center md:hidden z-40">
          {links.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              onClick={() => setMobileMenuOpen(false)} // close on link click
              className="w-full text-center py-4 text-white text-lg font-semibold hover:text-yellow-400 hover:bg-[#302b63]/80 transition-colors"
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
