import { BookOpen, Play, MessageSquare } from "lucide-react"
import Card from "../../ui/Card";
import Button from "../../ui/Button";

const ClassroomStudent = ({ classroom }) => {
    return (
        <div className="grid gap-6">
            {classroom.map((cls, index) => (
                <Card
                    key={index}
                    variant="classroom"
                    title={cls.title}
                    subtitle={cls.teacher}
                    progress={cls.progress}
                >
                    <div className="mt-4">
                        <div className="flex justify-between mb-1 mt-6">
                            <span className="text-xs">Progress</span>
                            <span className="text-xs">{cls.materialsIsDone}/{cls.materialsIsTotal} materials</span>
                        </div>
                        <div className="w-full h-2 flex overflow-hidden">
                            <div className="bg-blue-500 rounded-l-full" style={{ width: `${cls.progress}%` }}></div>
                            <div className="bg-green-500 rounded-r-full" style={{ width: `${100 - cls.progress}%` }}></div>
                        </div>
                        <div className="px-4 py-2 mt-4 bg-[#FDF6EA] rounded-lg">
                            <div className="flex justify-between items-center">
                                <span className="flex items-center gap-2 text-xs font-semibold">
                                    <Play className="w-4 h-4 text-orange-500"></Play>
                                    <span>Next Quiz: {cls.quiz}</span>
                                </span>
                                <Button size="xs" variant="orange">Start Quiz</Button>
                            </div>
                        </div>
                        <div className="flex gap-2 mt-4">
                            <Button size="xs" variant="gray" className="flex items-center gap-2">
                                <BookOpen className="w-4 h-4"></BookOpen>
                                <span className="text-xs">View Materials</span>
                            </Button>
                            <Button size="xs" variant="green" className="flex items-center gap-2">
                                <MessageSquare className="w-4 h-4"></MessageSquare>
                                <span className="text-xs">Chat</span>
                            </Button>
                        </div>
                    </div>
                </Card>
            ))}
        </div>
    )
}

export default ClassroomStudent