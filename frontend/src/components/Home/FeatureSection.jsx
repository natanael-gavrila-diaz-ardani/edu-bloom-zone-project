import { BookOpen, Users, Award, MessageSquare, BarChart3, Upload } from 'lucide-react';

const FeatureSection = () => {
    return (
        <div className="bg-gray-50 py-20 px-16">
            <div className="max-w-full mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-800 mb-6">
                        Everything You Need for Modern Education
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Powerful features designed to enhance the learning experience for both
                        teachers and students.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-200 cursor-pointer hover:scale-105 active:scale-95 active:-translate-y-1">
                        <div className="w-16 h-16 bg-blue-500 rounded-lg flex items-center justify-center mb-6">
                            <BookOpen className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-4 text-left">
                            Interactive Learning Materials
                        </h3>
                        <p className="text-gray-600 leading-relaxed text-left">
                            Upload and share images, PDFs, and videos for engaging education
                        </p>
                    </div>

                    <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-200 cursor-pointer hover:scale-105 active:scale-95 active:-translate-y-1">
                        <div className="w-16 h-16 bg-blue-500 rounded-lg flex items-center justify-center mb-6">
                            <Users className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-4 text-left">
                            Virtual Classrooms
                        </h3>
                        <p className="text-gray-600 leading-relaxed text-left">
                            Create and join classrooms with unique codes for seamless collaboration
                        </p>
                    </div>

                    <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-200 cursor-pointer hover:scale-105 active:scale-95 active:-translate-y-1">
                        <div className="w-16 h-16 bg-blue-500 rounded-lg flex items-center justify-center mb-6">
                            <Award className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-4 text-left">
                            Gamification System
                        </h3>
                        <p className="text-gray-600 leading-relaxed text-left">
                            Earn points, badges, and levels to motivate continuous learning
                        </p>
                    </div>

                    <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-200 cursor-pointer hover:scale-105 active:scale-95 active:-translate-y-1">
                        <div className="w-16 h-16 bg-blue-500 rounded-lg flex items-center justify-center mb-6">
                            <MessageSquare className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-4 text-left">
                            Real-time Chat
                        </h3>
                        <p className="text-gray-600 leading-relaxed text-left">
                            Communicate instantly with teachers and fellow students
                        </p>
                    </div>

                    <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-200 cursor-pointer hover:scale-105 active:scale-95 active:-translate-y-1">
                        <div className="w-16 h-16 bg-blue-500 rounded-lg flex items-center justify-center mb-6">
                            <BarChart3 className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-4 text-left">
                            Progress Tracking
                        </h3>
                        <p className="text-gray-600 leading-relaxed text-left">
                            Monitor learning progress with detailed analytics and insights
                        </p>
                    </div>

                    <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-200 cursor-pointer hover:scale-105 active:scale-95 active:-translate-y-1">
                        <div className="w-16 h-16 bg-blue-500 rounded-lg flex items-center justify-center mb-6">
                            <Upload className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-4 text-left">
                            Quiz System
                        </h3>
                        <p className="text-gray-600 leading-relaxed text-left">
                            Create and take interactive quizzes to test knowledge
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FeatureSection