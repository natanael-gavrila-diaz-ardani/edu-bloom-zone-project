// eslint-disable-next-line no-unused-vars
import React from 'react';
import { BookOpen, Users, Award, MessageSquare, BarChart3, Upload } from 'lucide-react';
import teacherImg from "../assets/image/hero-education.jpg" 
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()

  const handleTeacherClick = () => {
    navigate('/login?role=teacher')
  }

  const handleStudentClick = () => {
    navigate('/login?role=student')
  }
  return (
    <div className="min-h-screen">
      <div className="min-h-screen flex bg-[#dcecf7]">
        <div className="flex-1 flex flex-col justify-center px-20 py-12">
          <h1 className="font-bold text-gray-800 mb-8 text-left text-6xl leading-tight">
            <span className="block">Transform Learning</span>
            <span className="block">
              with{' '}
              <span className="text-blue-600">EduConnect</span>
            </span>
          </h1>
          
          <p className="text-xl text-gray-700 mb-10 leading-relaxed text-left max-w-2xl">
            The modern e-learning platform that connects teachers 
            and students through interactive materials, real-time
            collaboration, and gamified learning experiences.
          </p>
          {/* cart pertama */}
          <div className="mb-10">
            <h2 className="text-xl font-semibold text-gray-800 mb-6 text-left">
              Choose your role to get started:
            </h2>
            
            <div className="flex gap-8 mb-8">
              <div className="flex-1 bg-white border border-gray-300 rounded-xl shadow-md p-8 hover:border-blue-400 transition-colors cursor-pointer">
                <BookOpen className="w-12 h-12 mx-auto text-gray-600 mb-4" />
                <h3 className="font-bold text-xl mb-3 text-gray-900 text-center">Teacher</h3>
                <p className="text-gray-600 text-base text-center">
                  Create classrooms and manage learning materials.
                </p>
              </div>
              
              <div className="flex-1 bg-white border border-gray-300 rounded-xl shadow-md p-8 hover:border-blue-400 transition-colors cursor-pointer">
                <Users className="w-12 h-12 mx-auto text-gray-600 mb-4" />
                <h3 className="font-bold text-xl mb-3 text-gray-900 text-center">Student</h3>
                <p className="text-gray-600 text-base text-center">
                  Join classrooms and track your learning progress.
                </p>
              </div>
            </div>
          </div>
          
          <button className="bg-gradient-to-r from-blue-400 to-blue-500 hover:from-blue-500 hover:to-blue-600 text-white font-semibold py-4 px-10 rounded-lg transition-colors text-lg">
            Get Started as ...
          </button>
        </div>
        
        <div className="flex-1 flex items-center justify-center relative animate-float">
          <img
            src={teacherImg}
            alt="Teacher"
            className="w-[800px] mr-[114px] h-auto object-contain rounded-[24px]"
          />
        </div>
      </div>

      {/* cart kedua */}
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

      <div className="bg-blue-600 py-20 px-16">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-6">
          Ready to Start Your Learning Journey?
        </h2>
        
        <p className="text-xl text-white mb-10 leading-relaxed max-w-2xl mx-auto">
          Join thousands of teachers and students already using EduConnect to enhance their educational experience.
        </p>
        
        <div className="flex gap-6 justify-center">
          <button 
            onClick={handleTeacherClick}
            className="bg-[#1b91f7] hover:text-blue-600 text-white font-semibold py-4 px-8 rounded-lg hover:bg-gray-100 transition-colors text-lg"
          >
            Start as Teacher
          </button>
          
          <button 
            onClick={handleStudentClick}
            className="bg-[#1b91f7] text-white hover:text-blue-600 font-semibold py-4 px-8 rounded-lg hover:bg-gray-100 transition-colors text-lg"
          >
            Join as Student
          </button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Home