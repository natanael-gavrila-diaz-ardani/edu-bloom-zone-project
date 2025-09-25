import { useState } from 'react'
import { BookOpen, Clock, Trophy, Award, Plus, Play, MessageSquare, Star, CheckCircle, Zap } from "lucide-react"
import DashboardStudent from "../../../components/Student/Card/DashboardStudent"
import ClassroomStudent from "../../../components/Student/Card/ClassroomStudent"
import Button from '../../../components/ui/Button'
import Card from '../../../components/ui/Card'
import TargetIcon from "../../../assets/icons/target.png"
import TrophyIcon from "../../../assets/icons/trophy.png"
import FireIcon from "../../../assets/icons/fire.png"
import WizardIcon from "../../../assets/icons/wizard.png"

const StudentDashboard = () => {
  const [showForm, setShowForm] = useState(false);

  const cards = [
    {
      title: "Joined Classrooms",
      value: "0",
      color: "text-[#1BC75A]",
      gradient: "bg-gradient-to-r from-[#E6F2FF] to-[#F2FBF8]",
      icon: <BookOpen className="h-8 w-8 text-[#1BC75A] mt-4" />,
    },
    {
      title: "Overall Progress",
      value: "NaN%",
      color: "text-[#0080FF]",
      gradient: "bg-gradient-to-r from-[#E6F2FF] to-[#F2FBF8]",
      icon: <Clock className="h-8 w-8 text-[#0080FF] mt-4" />,
    },
    {
      title: "Total Points",
      value: "200",
      color: "text-[#1BC75A]",
      gradient: "bg-gradient-to-r from-[#E6F2FF] to-[#F2FBF8]",
      icon: <Trophy className="h-8 w-8 text-[#1BC75A] mt-4" />,
    },
    {
      title: "Achievements",
      value: "2/4",
      color: "text-[#FAA832]",
      gradient: "bg-gradient-to-r from-[#FFF7EB] to-[#FFFAF4]",
      icon: <Award className="h-8 w-8 text-[#FAA833] mt-4" />,
    },
  ]

  const classroom = [
    // {
    //   title: "Mathematics Grade 10",
    //   teacher: "Teacher: Ms.Johson",
    //   progress: 75,
    //   materialsIsDone: 6,
    //   materialsIsTotal: 8,
    //   quiz: "Algebra Quiz #3",
    // },
    // {
    //   title: "Physics Grade 11",
    //   teacher: "Teacher: Ms.Smith",
    //   progress: 40,
    //   materialsIsDone: 4,
    //   materialsIsTotal: 10,
    //   quiz: "Kinematics Quiz #1",
    // }
  ]

  const achieve = [
    {
      title: "First Steps",
      description: "Completed your first lesson",
      date: "Earned 2 days ago",
      icon: <img src={TargetIcon} alt="Target" className="w-8 h-8" />,
      statusIcon: <CheckCircle className="w-3 h-3"></CheckCircle>,
      completed: true,
    },
    {
      title: "Quiz Master",
      description: "Scored 100% on 3 quizzes",
      date: "Earned 1 week ago",
      icon: <img src={TrophyIcon} alt="Target" className="w-8 h-8" />,
      statusIcon: <CheckCircle className="w-3 h-3"></CheckCircle>,
      completed: true,
    },
    {
      title: "Consistent Learning",
      description: "Study for 7 days in a row",
      date: "Earned 2 days ago",
      icon: <img src={FireIcon} alt="Target" className="w-8 h-8" />,
      statusIcon: "logo",
      completed: false,
    },
    {
      title: "Math Wizard",
      description: "Complete all math materials",
      date: "Earned 2 days ago",
      icon: <img src={WizardIcon} alt="Target" className="w-8 h-8" />,
      statusIcon: "logo",
      completed: false,
    }
  ]

  const activity = [
    {
      title: "First Steps",
      description: "Completed your first lesson",
      icon: "w-2 h-2 bg-green-500 rounded-full"
    },
    {
      title: "Quiz Master",
      description: "Scored 100% on 3 quizzes",
      icon: "w-2 h-2 bg-blue-500 rounded-full"
    },
    {
      title: "Consistent Learning",
      description: "Study for 7 days in a row",
      icon: "w-2 h-2 bg-orange-500 rounded-full"
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="py-6 max-w-8xl mx-auto px-10 lg:px-4">
        <DashboardStudent cards={cards} />

        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 lg:col-span-8">
            <div className="flex justify-between py-6 mt-3">
              <span className="font-medium text-xl px-4 lg:px-0">My Classrooms</span>
              <Button
                size="sm"
                variant="green"
                className="text-xs flex items-center gap-2 text-white transition-colors"
                onClick={() => setShowForm(true)}
              >
                <Plus className="w-4 h-4"></Plus>
                <span>Join Classroom</span>
              </Button>
            </div>

            {showForm && (
              <div className="p-6 bg-white rounded-xl shadow-md border mb-6">
                <div className="mb-4">
                  <h2 className="text-2xl font-semibold">Join a Classroom</h2>
                  <span className='text-xs text-[#687183]'>Enter the classroom code provided by your teacher</span>
                </div>
                <form>
                  <label htmlFor="text" className='text-sm font-semibold'>Classroom Code</label>
                  <input
                    type="text"
                    placeholder="E.G., MTH101"
                    className="w-full px-3 py-2 border rounded-md mb-4 mt-2 placeholder:text-sm placeholder:text-gray-600"
                  />
                  <div className="flex gap-3">
                    <Button variant='green' size='xs'>Join Classroom</Button>
                    <Button size='xs' variant='orangeOutline' onClick={() => setShowForm(false)}>Cancel</Button>
                  </div>
                </form>
              </div>
            )}

            <ClassroomStudent classroom={classroom} />

          </div>

          <div className="col-span-12 lg:col-span-4 space-y-6 mt-9">
            <Card variant="sidebar" icon={<Award className="w-5 h-5" />} title="Achievements">
              {achieve.map((ach, index) => (
                <div key={index} className={`mt-3 w-full rounded-lg p-4 ${ach.completed
                  ? "border border-green-200"
                  : "bg-[#FBFBFC]"
                  }`}>
                  <div className="flex justify-between">
                    <div className={`flex items-center gap-3 ${ach.completed ? "" : "opacity-50"}`}>
                      {ach.icon}
                      <div className="grid grid-cols-1">
                        <span className={`text-xs font-semibold ${ach.completed ? "text-black" : "text-[#7A7C80]"}`}>{ach.title}</span>
                        <span className={`text-xs text-gray-500 ${ach.completed ? "text-black" : "text-[#A7ACB5]"}`}>{ach.description}</span>
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
