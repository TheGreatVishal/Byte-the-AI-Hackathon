"use client"

import { Brain, Code, Lightbulb, Users } from "lucide-react"

export function AboutSection() {
  const features = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI Innovation",
      description: "Explore cutting-edge AI technologies and develop innovative solutions to real-world problems.",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Networking",
      description: "Connect with industry experts, mentors, and fellow tech enthusiasts from across the country.",
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Learning",
      description: "Gain hands-on experience with the latest AI tools and frameworks through workshops and sessions.",
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Prizes",
      description:
        "Compete for exciting prizes, recognition, and potential internship opportunities with our sponsors.",
    },
  ]

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About The Hackathon</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Byte the AI Hackathon is an electrifying 8-hour AI-themed Hackathon on the occasion of Engineers’ Day this September 14-15, 2025. This event is your gateway to turn ideas into impact through the power of Artificial Intelligence.           intelligence and machine learning technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center mb-4 text-cyan-400">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
