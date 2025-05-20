"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-black/70 backdrop-blur-md z-50 px-6 py-4 flex justify-between items-center">
      <div className="flex items-center gap-2">
        <Image
          src="/logo.png"
          alt="Central University of Rajasthan"
          width={60}
          height={60}
          className="rounded-full bg-white p-1"
        />
        <span className="text-sm md:text-base font-medium text-white">
          Central University of Rajasthan
        </span>
      </div>
      <div className="hidden md:flex gap-6">
        <Button variant="link" className="text-white">
          About
        </Button>
        <Button variant="link" className="text-white">
          Tracks
        </Button>
        <Button variant="link" className="text-white">
          Schedule
        </Button>
        <Button variant="link" className="text-white">
          Register
        </Button>
      </div>
    </nav>
  )
}