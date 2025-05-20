export function ScheduleSection() {
  const scheduleItems = [
    {
      day: "Day 1 - September 13",
      events: [
        { time: "09:00 AM", title: "Registration & Check-in", description: "Collect your welcome kit and team badges" },
        {
          time: "10:00 AM",
          title: "Opening Ceremony",
          description: "Welcome address and introduction to the hackathon",
        },
        { time: "11:00 AM", title: "Team Formation", description: "Find teammates or finalize your existing team" },
        { time: "12:00 PM", title: "Lunch Break", description: "Networking lunch provided for all participants" },
        { time: "01:00 PM", title: "Hackathon Begins", description: "Start coding and building your solutions" },
        {
          time: "04:00 PM",
          title: "Workshop: AI Fundamentals",
          description: "Learn essential AI concepts and techniques",
        },
        { time: "07:00 PM", title: "Dinner", description: "Refuel with a delicious dinner" },
        { time: "08:00 PM", title: "Hacking Continues", description: "Continue working on your projects" },
      ],
    },
    {
      day: "Day 2 - September 14",
      events: [
        { time: "08:00 AM", title: "Breakfast", description: "Start your day with a nutritious breakfast" },
        { time: "09:00 AM", title: "Mentor Sessions", description: "Get guidance from industry experts" },
        { time: "12:00 PM", title: "Lunch Break", description: "Take a break and recharge" },
        { time: "02:00 PM", title: "Mid-way Check-in", description: "Share your progress with mentors" },
        {
          time: "04:00 PM",
          title: "Workshop: Deploying AI Models",
          description: "Learn how to deploy your AI solutions",
        },
        { time: "07:00 PM", title: "Dinner", description: "Evening meal and networking" },
        { time: "08:00 PM", title: "Hacking Continues", description: "Keep building and refining your projects" },
      ],
    },
    {
      day: "Day 3 - September 15",
      events: [
        { time: "08:00 AM", title: "Breakfast", description: "Final day breakfast" },
        { time: "10:00 AM", title: "Submission Deadline", description: "All projects must be submitted" },
        { time: "11:00 AM", title: "Presentation Preparation", description: "Prepare your project demonstrations" },
        { time: "12:00 PM", title: "Lunch Break", description: "Last lunch of the hackathon" },
        { time: "01:00 PM", title: "Project Presentations", description: "Present your solutions to the judges" },
        { time: "04:00 PM", title: "Judging & Deliberation", description: "Judges evaluate all submissions" },
        { time: "05:00 PM", title: "Awards Ceremony", description: "Winners announced and prizes distributed" },
        { time: "06:00 PM", title: "Closing Ceremony", description: "Final remarks and networking" },
      ],
    },
  ]

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Event Schedule</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Three days of innovation, learning, and collaboration. Mark your calendar for September 13-15, 2025.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {scheduleItems.map((day, dayIndex) => (
            <div key={dayIndex} className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-6 text-center text-cyan-400">{day.day}</h3>
              <div className="space-y-6">
                {day.events.map((event, eventIndex) => (
                  <div key={eventIndex} className="flex gap-4">
                    <div className="min-w-[80px] text-sm text-gray-400">{event.time}</div>
                    <div>
                      <h4 className="font-medium text-white">{event.title}</h4>
                      <p className="text-sm text-gray-400">{event.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
