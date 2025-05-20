"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CheckCircle2, Loader2 } from "lucide-react"
import { submitRegistration } from "@/lib/actions"

export function RegistrationSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    university: "",
    course: "",
    year: "",
    track: "",
    teamName: "",
    teamSize: "",
    projectIdea: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    try {
      await submitRegistration(formState)
      setIsSuccess(true)
      setFormState({
        name: "",
        email: "",
        phone: "",
        university: "",
        course: "",
        year: "",
        track: "",
        teamName: "",
        teamSize: "",
        projectIdea: "",
      })
    } catch (err) {
      setError("Failed to submit registration. Please try again.")
      console.error(err)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="register" className="py-20 relative bg-black/30">
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=100&width=100&text=grid')] bg-repeat opacity-5"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Register Now</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Secure your spot in Byte the AI Hackathon. Registration is free but limited, so sign up today!
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-gray-900/70 backdrop-blur-sm border border-gray-800 rounded-xl p-8">
            {isSuccess ? (
              <div className="text-center py-8">
                <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">Registration Successful!</h3>
                <p className="text-gray-300 mb-6">
                  Thank you for registering for Byte the AI Hackathon. We have sent a confirmation email with further
                  details.
                </p>
                <Button
                  onClick={() => setIsSuccess(false)}
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white border-0"
                >
                  Register Another Team
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      required
                      className="bg-gray-800/50 border-gray-700"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formState.email}
                      onChange={handleChange}
                      placeholder="Enter your email address"
                      required
                      className="bg-gray-800/50 border-gray-700"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formState.phone}
                      onChange={handleChange}
                      placeholder="Enter your phone number"
                      required
                      className="bg-gray-800/50 border-gray-700"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="university">University/College *</Label>
                    <Input
                      id="university"
                      name="university"
                      value={formState.university}
                      onChange={handleChange}
                      placeholder="Enter your university/college"
                      required
                      className="bg-gray-800/50 border-gray-700"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="course">Course/Degree *</Label>
                    <Input
                      id="course"
                      name="course"
                      value={formState.course}
                      onChange={handleChange}
                      placeholder="E.g., B.Tech Computer Science"
                      required
                      className="bg-gray-800/50 border-gray-700"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="year">Year of Study *</Label>
                    <Select
                      value={formState.year}
                      onValueChange={(value: string) => handleSelectChange("year", value)}
                      required
                    >
                      <SelectTrigger className="bg-gray-800/50 border-gray-700">
                      <SelectValue placeholder="Select year" />
                      </SelectTrigger>
                      <SelectContent>
                      <SelectItem value="1">1st Year</SelectItem>
                      <SelectItem value="2">2nd Year</SelectItem>
                      <SelectItem value="3">3rd Year</SelectItem>
                      <SelectItem value="4">4th Year</SelectItem>
                      <SelectItem value="5">5th Year</SelectItem>
                      <SelectItem value="pg">Postgraduate</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="track">Preferred Track *</Label>
                    <Select
                      value={formState.track}
                      onValueChange={(value: string) => handleSelectChange("track", value)}
                      required
                    >
                      <SelectTrigger className="bg-gray-800/50 border-gray-700">
                      <SelectValue placeholder="Select track" />
                      </SelectTrigger>
                      <SelectContent>
                      <SelectItem value="ml">Machine Learning Madness</SelectItem>
                      <SelectItem value="data">Data Science Sprint</SelectItem>
                      <SelectItem value="vision">VisionVerse</SelectItem>
                      <SelectItem value="nlp">NLP Playground</SelectItem>
                      <SelectItem value="good">AI for Good</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="teamName">Team Name *</Label>
                    <Input
                      id="teamName"
                      name="teamName"
                      value={formState.teamName}
                      onChange={handleChange}
                      placeholder="Enter your team name"
                      required
                      className="bg-gray-800/50 border-gray-700"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="teamSize">Team Size *</Label>
                    <Select
                      value={formState.teamSize}
                      onValueChange={(value: string) => handleSelectChange("teamSize", value)}
                      required
                    >
                      <SelectTrigger className="bg-gray-800/50 border-gray-700">
                        <SelectValue placeholder="Select team size" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1 (Individual)</SelectItem>
                        <SelectItem value="2">2 Members</SelectItem>
                        <SelectItem value="3">3 Members</SelectItem>
                        <SelectItem value="4">4 Members</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="projectIdea">Brief Project Idea (Optional)</Label>
                  <Textarea
                    id="projectIdea"
                    name="projectIdea"
                    value={formState.projectIdea}
                    onChange={handleChange}
                    placeholder="Briefly describe your project idea or what you hope to build"
                    className="bg-gray-800/50 border-gray-700 min-h-[100px]"
                  />
                </div>

                {error && <p className="text-red-500 text-sm">{error}</p>}

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white border-0 h-12"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    "Register for Hackathon"
                  )}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
