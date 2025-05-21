import { Users } from "lucide-react"

export function OrganizingCommittee() {
  const committeeMembers = [
    {
      role: "Patron",
      name: "Prof. Anand Bhalerao",
      position: "Hon'ble Vice Chancellor, CURAJ",
    },
    {
      role: "Convener",
      name: "Dr. Prakash Chaudhary",
      position: "Dean of School of Engineering & Technology",
    },
    {
      role: "Convener",
      name: "Dr. Basant Agarwal",
      position: "Head, Department of CSE",
    },
    {
      role: "Faculty Coordinator",
      name: "Dr. Tarun Kumar",
      position: "",
    },
    {
      role: "Student Leads",
      name: "Vishal",
      position: "",
    },
  ]

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Organizing Committee</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-3xl mx-auto">Meet the dedicated team behind Byte the AI Hackathon.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {committeeMembers.map((member, index) => (
            <div
              key={index}
              className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center mb-4 text-cyan-400">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
              <p className="text-cyan-400 font-medium mb-1">{member.role}</p>
              {member.position && <p className="text-gray-400 text-sm">{member.position}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
