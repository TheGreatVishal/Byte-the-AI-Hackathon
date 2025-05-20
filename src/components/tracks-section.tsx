import { Brain, Database, Eye, Heart, MessageSquare } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function TracksSection() {
  const tracks = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Machine Learning Madness",
      description: "Build ML models in 8 hours and optimize for accuracy in our Model Mayhem challenge.",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Data Science Sprint",
      description: "Clean, analyze, and visualize AI datasets in DataQuest or find insights in complex datasets.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: "VisionVerse",
      description: "Face detection, scene description, or style transfer challenges using computer vision.",
      color: "from-green-500 to-teal-500",
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "NLP Playground",
      description: "Create text summarizers, sentiment analyzers, or AI poets using natural language processing.",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "AI for Good",
      description: "Build AI tools for environmental monitoring, healthcare, or education to make a positive impact.",
      color: "from-red-500 to-pink-500",
    },
  ]

  return (
    <section className="py-20 relative bg-black/30">
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=100&width=100&text=circuit')] bg-repeat opacity-5"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Hackathon Tracks</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Choose from five exciting tracks, each offering unique challenges in different domains of artificial
            intelligence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tracks.map((track, index) => (
            <div key={index}>
              <Card className="bg-gray-900/70 border-gray-800 hover:border-gray-700 transition-all duration-300 overflow-hidden group h-full">
                <div className={`h-2 bg-gradient-to-r ${track.color}`}></div>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-10 h-10 rounded-lg bg-gradient-to-br ${track.color} flex items-center justify-center text-white`}
                    >
                      {track.icon}
                    </div>
                    <CardTitle className="text-white">{track.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-400 text-base">{track.description}</CardDescription>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
