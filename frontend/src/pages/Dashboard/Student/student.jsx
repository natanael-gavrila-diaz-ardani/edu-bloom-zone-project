import { BookOpen, Clock, Trophy, Award, Plus, Play, MessageSquare, Star, CheckCircle, Zap } from "lucide-react"
import Button from '../../../components/ui/Button'
import Card from '../../../components/ui/Card'

const StudentDashboard = () => {
  const cards = [
    {
      title: "Joined Classrooms",
      value: "2",
      color: "#12BF86",
      gradient: "bg-gradient-to-r from-[#E6F2FF] to-[#F2FBF8]",
      icon: <BookOpen className="h-8 w-8 text-blue-600 mt-4" />,
    },
    {
      title: "Overall Progress",
      value: "60%",
      color: "#51A2FF",
      gradient: "bg-gradient-to-r from-[#E6F2FF] to-[#F2FBF8]",
      icon: <Clock className="h-8 w-8 text-green-600 mt-4" />,
    },
    {
      title: "Total Points",
      value: "200",
      color: "#12BF86",
      gradient: "bg-gradient-to-r from-[#E6F2FF] to-[#F2FBF8]",
      icon: <Trophy className="h-8 w-8 text-green-600 mt-4" />,
    },
    {
      title: "Achievements",
      value: "2/4",
      color: "#FAA832",
      gradient: "bg-gradient-to-r from-[#FFF7EB] to-[#FFFAF4]",
      icon: <Award className="h-8 w-8 text-orange-600 mt-4" />,
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

  const achieve = [
    {
      title: "First Steps",
      description: "Completed your first lesson",
      date: "Earned 2 days ago",
      icon: <Star className="w-4 h-4"></Star>,
      statusIcon: <CheckCircle className="w-3 h-3"></CheckCircle>,
      completed: true,
    },
    {
      title: "Quiz Master",
      description: "Scored 100% on 3 quizzes",
      date: "Earned 1 week ago",
      icon: <Trophy className="w-4 h-4"></Trophy>,
      statusIcon: <CheckCircle className="w-3 h-3"></CheckCircle>,
      completed: true,
    },
    {
      title: "Consistent Learning",
      description: "Study for 7 days in a row",
      date: "Earned 2 days ago",
      icon: <BookOpen className="w-4 h-4 text-gray-400"></BookOpen>,
      statusIcon: "logo",
      completed: false,
    },
    {
      title: "Math Wizard",
      description: "Complete all math materials",
      date: "Earned 2 days ago",
      icon: <Zap className="w-4 h-4 text-gray-400"></Zap>,
      statusIcon: "logo",
      completed: false,
    }
  ]

  const activity = [
    {
      title: "First Steps",
      description: "Completed your first lesson",
      icon: "w-2 h-2 bg-green-500"
    },
    {
      title: "Quiz Master",
      description: "Scored 100% on 3 quizzes",
      icon: "w-2 h-2 bg-blue-500"
    },
    {
      title: "Consistent Learning",
      description: "Study for 7 days in a row",
      icon: "w-2 h-2 bg-orange-500"
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="py-6 px-4 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => {
            return (
              <Card
                key={index}
                variant="kpi"
                title={card.title}
                value={card.value}
                valueColor={card.color}
                bgColor={card.gradient}
                icon={card.icon}
              />
            )
          })}
        </div>

        <div className="flex gap-8">
          <div className="w-3/5">
            <div className="flex justify-between py-8">
              <span className="font-bold text-2xl">My Classrooms</span>
              <Button size="sm" variant="green" className="text-xs flex items-center gap-2 text-white transition-colors">
                <Plus className="w-3 h-3"></Plus>
                <span>Join Classroom</span>
              </Button>
            </div>

            <div className="grid gap-6">
              {classroom.map((cls, index) => (
                <Card
                  key={index}
                  variant="classroom"
                  title={cls.title}
                  subtitle={cls.teacher}
                  progress={cls.progress}
                >
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
                        <Button size="sm" variant="orange">Start Quiz</Button>
                      </div>
                    </div>
                    <div className="flex gap-2 py-3">
                      <Button size="sm" variant="outline" className="flex items-center gap-2">
                        <BookOpen className="w-3 h-3"></BookOpen>
                        <span className="text-xs">View Materials</span>
                      </Button>
                      <Button size="sm" variant="green" className="flex items-center gap-2">
                        <MessageSquare className="w-3 h-3"></MessageSquare>
                        <span className="text-xs">Chat</span>
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

          </div>

          <div className="grid gap-6 w-2/5 mt-8">
            <Card variant="sidebar" title="Achievements">
              {achieve.map((ach, index) => (
                <div key={index} className={`mt-3 w-full rounded-lg p-4 ${ach.completed
                  ? "border border-green-200"
                  : "bg-gray-100"
                  }`}>
                  <div className="flex justify-between">
                    <div className="flex items-center gap-3">
                      {ach.icon}
                      <div className="grid grid-cols-1">
                        <span className="text-xs font-semibold">{ach.title}</span>
                        <span className="text-xs text-gray-500">{ach.description}</span>
                        <span className="text-xs text-[#10B77F]">{ach.completed ? ach.date : ""}</span>
                      </div>
                    </div>
                    <button className="text-[#10B77F] text-xs">
                      {ach.completed ? ach.statusIcon : <span className=""></span>}
                    </button>
                  </div>
                </div>
              ))}
            </Card>

            <Card variant="sidebar" title="Recent Activity">
              {activity.map((act, index) => (
                <div key={index} className="flex items-center gap-4 mt-3 bg-gray-50 w-full rounded-lg p-4">
                  <div className={act.icon}></div>
                  <div className="grid grid-cols-1">
                    <span className="text-xs font-semibold">{act.title}</span>
                    <span className="text-xs text-gray-500">{act.description}</span>
                  </div>
                </div>
              ))}
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StudentDashboard
