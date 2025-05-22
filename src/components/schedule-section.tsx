export function ScheduleSection() {
  const scheduleItems = [
    {
      day: "Day 1 - September 13",
      events: [
        { time: "08:30 AM", title: "Registration & Check-in", description: "Collect your welcome kit and team badges" },
        {
          time: "9:00 AM",
          title: "Opening Ceremony",
          description: "Welcome address and introduction to the hackathon",
        },
        { time: "09:30 AM", title: "Hackathon Begins", description: "Start coding and building your solutions" },
        { time: "05:30 PM", title: "Hackathon Ends", description: "Submit the developed solution" },
        { time: "06:00 PM", title: "Evaluation of solutions", description: "Judges evaluate all submissions" },
      ],
    },
    {
      day: "Day 2 - September 15",
      events: [
        {time: "10:00 AM", title: "Celebration of Engineers' Day begins", description: "Various events" }, 
        { time: "11:30 AM", title: "Awards Ceremony", description: "Winners announced and prizes distributed" },
        { time: "12:00 Noon", title: "Closing Ceremony", description: "Final remarks and networking" },
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
