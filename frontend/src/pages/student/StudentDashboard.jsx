import { BookOpen, Clock, Trophy, Award, Plus, Play, MessageSquare, Star, CheckCircle, Zap } from "lucide-react"

const StudentDashboard = () => {
  const cards = [
    {
      title: "Joined Classrooms",
      value: "2",
      color: "#12BF86",
      gradient: "from-[#E6F2FF] to-[#F2FBF8]",
      icon: BookOpen,
    },
    {
      title: "Overall Progress",
      value: "60%",
      color: "#51A2FF",
      gradient: "from-[#E6F2FF] to-[#F2FBF8]",
      icon: Clock,
    },
    {
      title: "Total Points",
      value: "200",
      color: "#12BF86",
      gradient: "from-[#E6F2FF] to-[#F2FBF8]",
      icon: Trophy,
    },
    {
      title: "Achievements",
      value: "2/4",
      color: "#FAA832",
      gradient: "from-[#FFF7EB] to-[#FFFAF4]",
      icon: Award,
    },
  ]

  const classroom = [
    {
      title: "Mathematics Grade 10",
      teacher: "Ms.Johson",
      progress: 75,
      materialsIsDone: 6,
      materialsIsTotal: 8,
      quiz: "Algebra Quiz #3",
    },
    {
      title: "Physics Grade 11",
      teacher: "Ms.Smith",
      progress: 40,
      materialsIsDone: 4,
      materialsIsTotal: 10,
      quiz: "Kinematics Quiz #1",
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="py-6 px-16">
        <div className="flex items-start gap-10">
          {cards.map((card, index) => {
            const Icon = card.icon
            return (
              <div
                key={index}
                className={`flex justify-between border bg-gradient-to-r ${card.gradient} p-7 w-72 rounded-lg shadow-sm`}
              >
                <div className="flex flex-col">
                  <span className="text-xs">{card.title}</span>
                  <span
                    className="font-bold text-lg"
                    style={{ color: card.color }}
                  >
                    {card.value}
                  </span>
                </div>
                <Icon className='w-8 h-8' style={{ color: card.color }}></Icon>
              </div>
            )
          })}
        </div>

        <div className="flex gap-8">
          <div className="flex flex-col w-3/5">
            <div className="flex justify-between py-8">
              <span className="font-bold text-lg">My Classrooms</span>
              <button className="flex items-center gap-2 p-2 text-xs rounded-md text-white bg-[#10B77F] hover:bg-green-500 transition-colors">
                <Plus className="w-3 h-3"></Plus>
                <span>Join Classroom</span>
              </button>
            </div>

            {classroom.map((cls, index) => (
              <div key={index} className="border shadow-lg rounded-lg bg-[#FEFEFE]">
                <div className="px-5 mt-5">
                  <div className="flex justify-between">
                    <span className="text-md font-bold">{cls.title}</span>
                    <div className="border text-[10px] rounded-full bg-[#E3F5F0] px-2 py-1 font-bold">{cls.progress}% Complete</div>
                  </div>
                  <span className="text-xs text-gray-500">Teacher: {cls.teacher}</span>
                  <div className="py-4">
                    <div className="flex justify-between mb-1">
                      <span className="text-xs">Progress</span>
                      <span className="text-xs">{cls.materialsIsDone}/{cls.materialsIsTotal} materials</span>
                    </div>
                    <div className="w-full h-2 flex overflow-hidden">
                      <div className="bg-blue-500 rounded-l-full" style={{ width: `${cls.progress}%` }}></div>
                      <div className="bg-green-500 rounded-r-full" style={{ width: `${100 - cls.progress}%` }}></div>
                    </div>
                    <div className="p-4 mt-4 bg-[#FDF6EA] rounded-lg">
                      <div className="flex justify-between items-center">
                        <span className="flex items-center gap-2 text-xs font-semibold">
                          <Play className="w-3 h-3 text-orange-500"></Play>
                          <span>Next Quiz: {cls.quiz}</span>
                        </span>
                        <button className="text-xs p-2 bg-[#FAA52E] rounded-md shadow-md hover:bg-[#f9b75cff] transition-colors">Start Quiz</button>
                      </div>
                    </div>
                    <div className="flex gap-2 py-3">
                      <button className="flex items-center gap-2 text-[10px] bg-gray-100 p-2 rounded-md border">
                        <BookOpen className="w-3 h-3"></BookOpen>
                        <span>View Materials</span>
                      </button>
                      <button className="flex items-center gap-2 text-[10px] p-2 rounded-md text-white bg-[#10B77F] hover:bg-green-500 transition-colors">
                        <MessageSquare className="w-3 h-3"></MessageSquare>
                        <span>Chat</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}

          </div>

          <div className="flex flex-col w-2/5 mt-8">
            <div className="border shadow-lg rounded-lg bg-[#FEFEFE]">
              <div className="p-5">
                <span className="flex items-center gap-2 text-md font-bold">
                  <Award className="w-4 h-4"></Award>
                  <span>Achievements</span>
                </span>
                <div className="mt-3 border border-green-200 w-full rounded-lg p-4">
                  <div className="flex justify-between">
                    <div className="flex items-center gap-3">
                      <Star className="w-4 h-4"></Star>
                      <div className="flex flex-col">
                        <span className="text-xs font-semibold">First Steps</span>
                        <span className="text-xs text-gray-500">Completed your firstlesson</span>
                        <span className="text-xs text-[#10B77F]">Earned 2 days ago</span>
                      </div>
                    </div>
                    <button className="text-[#10B77F] text-xs">
                      <CheckCircle className="w-3 h-3"></CheckCircle>
                    </button>
                  </div>
                </div>

                <div className="mt-3 border border-green-200 w-full rounded-lg p-4">
                  <div className="flex justify-between ">
                    <div className="flex items-center gap-3">
                      <Trophy className="w-4 h-4"></Trophy>
                      <div className="flex flex-col">
                        <span className="text-xs font-semibold">Quiz Master</span>
                        <span className="text-xs text-gray-500">Scored 100% on 3 quizzes</span>
                        <span className="text-xs text-[#10B77F]">Earned 1 week ago</span>
                      </div>
                    </div>
                    <button className="text-[#10B77F] text-xs">
                      <CheckCircle className="w-3 h-3"></CheckCircle>
                    </button>
                  </div>
                </div>

                <div className="mt-3 bg-gray-100 w-full rounded-lg p-4">
                  <div className="flex justify-between ">
                    <div className="flex items-center gap-3">
                      <BookOpen className="w-4 h-4 text-gray-400"></BookOpen>
                      <div className="flex flex-col">
                        <span className="text-xs font-semibold text-gray-400 ">Consistent Learning</span>
                        <span className="text-xs text-gray-400">Study for 7 daysin a row</span>
                        {/* <span className="text-xs text-[#10B77F]">Earned 2 days ago</span> */}
                      </div>
                    </div>
                    {/* <button className="text-[#10B77F] text-xs">logo</button> */}
                  </div>
                </div>

                <div className="mt-3 bg-gray-100 w-full rounded-lg p-4">
                  <div className="flex justify-between ">
                    <div className="flex items-center gap-3">
                      <Zap className="w-4 h-4 text-gray-400"></Zap>
                      <div className="flex flex-col">
                        <span className="text-xs font-semibold text-gray-400">Math Wizard</span>
                        <span className="text-xs text-gray-400">Complete all math materials</span>
                        {/* <span className="text-xs text-[#10B77F]">Earned 2 days ago</span> */}
                      </div>
                    </div>
                    {/* <button className="text-[#10B77F] text-xs">logo</button> */}
                  </div>
                </div>
              </div>
            </div>

            <div className="border shadow-lg rounded-lg bg-[#FEFEFE] mt-6">
              <div className="p-5">
                <span className="text-md font-bold">Recent Activity</span>
                <div className="flex items-center gap-4 mt-3 bg-gray-50 w-full rounded-lg p-4">
                  <div className="w-2 h-2 bg-green-500"></div>
                  <div className="flex flex-col">
                    <span className="text-xs font-semibold">First Steps</span>
                    <span className="text-xs text-gray-500">Completed your firstlesson</span>
                  </div>
                </div>

                <div className="flex items-center gap-4 mt-3 bg-gray-50 w-full rounded-lg p-4">
                  <div className="w-2 h-2 bg-blue-500"></div>
                  <div className="flex flex-col">
                    <span className="text-xs font-semibold">Quiz Master</span>
                    <span className="text-xs text-gray-500">Scored 100% on 3 quizzes</span>
                  </div>
                </div>

                <div className="flex items-center gap-4 mt-3 bg-gray-50 w-full rounded-lg p-4">
                  <div className="w-2 h-2 bg-orange-500"></div>
                  <div className="flex flex-col">
                    <span className="text-xs font-semibold">Consistent Learning</span>
                    <span className="text-xs text-gray-500">Study for 7 daysin a row</span>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default StudentDashboard
