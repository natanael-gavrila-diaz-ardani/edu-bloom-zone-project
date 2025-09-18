import { BookOpen, MessageSquare, Upload, Users } from 'lucide-react'

export const TeacherData = [
    {
        id: 1,
        variant: "kpi",
        title: "Total Classrooms",
        value: "1",
        valueColor: "text-blue-600",
        bgColor: "bg-blue-50",
        icon: <BookOpen className="h-8 w-8 text-blue-600 mt-4" />
    },
    {
        id: 2,
        variant: "kpi",
        title: "Total Students",
        value: "0",
        valueColor: "text-green-600",
        bgColor: "bg-green-50",
        icon: <Users className="h-8 w-8 text-green-600 mt-4" />
    },
    {
        id: 3,
        variant: "kpi",
        title: "Materials Uploaded",
        value: "1",
        valueColor: "text-orange-600",
        bgColor: "bg-orange-50",
        icon: <Upload className="h-8 w-8 text-orange-600 mt-4" />
    },
    {
        id: 4,
        variant: "kpi",
        title: "Active Chats",
        value: "12",
        valueColor: "text-green-600",
        bgColor: "bg-green-50",
        icon: <MessageSquare className="h-8 w-8 text-green-600 mt-4" />
    }
]