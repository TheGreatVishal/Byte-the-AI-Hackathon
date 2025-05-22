"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Cpu, Sparkles } from "lucide-react"

export function HeroSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-28 pb-20 overflow-hidden">
      {/* Glowing Blobs */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[20%] left-[20%] w-96 h-96 bg-purple-500/30 rounded-full filter blur-[100px]"></div>
        <div className="absolute bottom-[25%] right-[20%] w-96 h-96 bg-blue-500/20 rounded-full filter blur-[100px]"></div>
        <div className="absolute top-[50%] right-[30%] w-72 h-72 bg-cyan-500/20 rounded-full filter blur-[100px]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl w-full">
        {/* Badge */}
        <div className="mb-4 flex justify-center">
          <div className="px-4 py-1 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium text-cyan-300 inline-flex items-center">
            <Cpu className="w-15 h-15 mr-2" />
            <span>Engineers Day Special • Sept 14-15, 2025</span>
          </div>
        </div>

        {/* Heading */}
        <h1 className="pt-10 text-4xl md:text-6xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500">
          BYTE{" "}
          <span className="relative inline-block">
            THE AI
            <span className="absolute -top-6 -right-6">
              <Sparkles className="w-6 h-6 text-yellow-400" />
            </span>
          </span>{" "}
          HACKATHON
        </h1>

        {/* Paragraph */}
        <p className="text-base md:text-lg text-gray-300 max-w-3xl mx-auto mb-10 px-4">
          Unleash your creativity and technical prowess at Central University of Rajasthan&rsquo;s premier AI hackathon. Join us for 48 hours of innovation, collaboration, and breakthrough solutions.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Button
            size="lg"
            className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white border-0 rounded-full px-8"
          >
            Register Now
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border border-white/40 text-black rounded-full px-8 hover:bg-white/10 hover:text-white"
          >
            Learn More
          </Button>
        </div>

        {/* Arrow Down */}
        {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-gray-400" />
        </div> */}
      </div>
    </section>
  )
}
