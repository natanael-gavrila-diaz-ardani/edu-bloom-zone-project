import { BookOpen, Users, Award, MessageSquare, BarChart3, Upload } from 'lucide-react';
import Card from '../ui/Card';

const FeatureSection = () => {
    return (
        <div className="bg-gray-50 py-10 md:py-20 px-4 md:px-16 w-full">
            <div className="max-w-full mx-auto">
                <div className="text-center mb-8 md:mb-16">
                    <h2 className="text-xl md:text-4xl font-bold text-gray-800 mb-4 md:mb-6">
                        Everything You Need for Modern Education
                    </h2>
                    <p className="text-sm md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
                        Powerful features designed to enhance the learning experience for both
                        teachers and students.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                    <Card 
                        icon={<BookOpen className="md:w-8 md:h-8 w-6 h-6 text-white" />}
                        title="Interactive Learning Materials"
                        description="Upload and share images, PDFs, and videos for engaging ducation"
                    />
                    <Card
                        icon={<Users className="w-8 h-8 text-white" />}
                        title="Virtual Classrooms"
                        description="Create and join classrooms with unique codes for seamless collaboration"
                    />
                    <Card
                        icon={<Award className="w-8 h-8 text-white" />}
                        title="Gamification System"
                        description="Earn points, badges, and levels to motivate continuous learning"
                    />
                    <Card 
                        icon={<MessageSquare className="w-8 h-8 text-white"/>}
                        title="Real-time Chat"
                        description="Communicate instantly with teachers and fellow students"
                    />
                    <Card
                        icon={<BarChart3 className="w-8 h-8 text-white" />}
                        title="Progress Tracking"
                        description="Monitor learning progress with detailed analytics and insights"
                    />
                    <Card
                        icon={<Upload className="w-8 h-8 text-white" />}
                        title="Quiz System"
                        description="Create and take interactive quizzes to test knowledge"
                    />
                </div>
            </div>
        </div>
    );
}

export default FeatureSection