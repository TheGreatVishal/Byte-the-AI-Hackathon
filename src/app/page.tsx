import { HeroSection } from "@/components/hero-section"
import { Navbar } from "@/components/navbar"
import { AboutSection } from "@/components/about-section"
import { TracksSection } from "@/components/tracks-section"
import { ScheduleSection } from "@/components/schedule-section"
import { OrganizingCommittee } from "@/components/organizing-committee"
import { RegistrationSection } from "@/components/registration-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white overflow-hidden">
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=100&width=100&text=grid')] bg-repeat opacity-10 pointer-events-none z-0"></div>

      <Navbar />

      <div className="relative z-10">
        <HeroSection />
        <section id="about">
          <AboutSection />
        </section>
        <section id="tracks">
          <TracksSection />
        </section>
        <section id="schedule">
          <ScheduleSection />
        </section>
        <section id="committee">
          <OrganizingCommittee />
        </section>
        <section id="register">
          <RegistrationSection />
        </section>
        <Footer />
      </div>

    </main>
  )
}
