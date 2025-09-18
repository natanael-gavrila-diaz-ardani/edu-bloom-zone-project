import { BookOpen, MessageSquare, Upload, Users, Plus, BarChart3  } from 'lucide-react'

const Teacher = () => {

  return (
    <div className="min-h-screen w-ful">
      <div className="max-w-7xl mx-auto py-6 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-blue-50 rounded-xl p-6 shadow-sm">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-gray-600 text-sm font-medium mb-2">Total Classrooms</p>
                <p className="text-3xl font-bold text-blue-600">2</p>
              </div>
              <BookOpen className="h-8 w-8 text-blue-600" />
            </div>
          </div>

          <div className="bg-green-50 rounded-xl p-6 shadow-sm">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-gray-600 text-sm font-medium mb-2">Total Students</p>
                <p className="text-3xl font-bold text-green-600">42</p>
              </div>
              <Users className="h-8 w-8 text-green-600" />
            </div>
          </div>

          <div className="bg-orange-50 rounded-xl p-6 shadow-sm">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-gray-600 text-sm font-medium mb-2">Materials Uploaded</p>
                <p className="text-3xl font-bold text-orange-600">20</p>
              </div>
              <Upload className="h-8 w-8 text-orange-600" />
            </div>
          </div>

          <div className="bg-green-50 rounded-xl p-6 shadow-sm">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-gray-600 text-sm font-medium mb-2">Active Chats</p>
                <p className="text-3xl font-bold text-green-600">12</p>
              </div>
              <MessageSquare className="h-8 w-8 text-green-600" />
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center mb-6">
            <h2 className="text-black text-2xl text-left font-bold">My Classrooms</h2>
            <button 
              className="bg-[#1b91f7] flex items-center text-white hover:text-white font-semibold py-3 px-4 rounded-lg hover:bg-blue-600 transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105 text-lg">
              <Plus className="h-5 w-5" />
              <span className="text-sm font-medium">Create Classroom</span>
            </button>
        </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3">
          <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 duration-300 hover:shadow-lg hover:scale-105 ">
          <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg font-bold text-gray-900">qwertyuio</h3>
                  <p className="text-sm text-gray-600">qwertyuio</p>
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <span>Code: HPNTOH</span>
                  <button className="ml-2 text-blue-600 hover:text-blue-800">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex space-x-4 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-1" />
                    <span>0 students</span>
                  </div>
                  <div className="flex items-center">
                    <BookOpen className="w-4 h-4 mr-1" />
                    <span>0 materials</span>
                  </div>
                </div>
                
                <div className="flex space-x-2">
                  <button className="px-3 py-1 text-sm border border-gray-300 rounded-lg hover:bg-gray-50 flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    View
                  </button>
                  <button className="px-3 py-1 text-sm bg-green-600 text-white rounded-lg hover:bg-green-700 flex items-center">
                    <Upload className="w-4 h-4 mr-1" />
                    Add Material
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900">Quick Actions</h3>
              <div className="space-y-3">
                <button className="w-full flex items-center p-3 text-left hover:bg-orange-400 rounded-lg duration-200">
                  <Upload className="w-4 h-4 mr-1" />
                  <span className="text-gray-700">Upload Material</span>
                </button>
                <button className="w-full flex items-center p-3 text-left hover:bg-orange-400 rounded-lg transition-colors">
                  <BarChart3 className="w-4 h-4 mr-1" />
                  <span className="text-gray-700">View Analytics</span>
                </button>
                <button className="w-full flex items-center p-3 text-left hover:bg-orange-400 rounded-lg transition-colors">
                  <MessageSquare className="w-5 h-5 mr-3" />
                  <span className="text-gray-700">Send Message</span>
                </button>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Recent Activity</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mt-2 mr-3"></div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">New student joined</p>
                    <p className="text-xs text-gray-500">Mathematics Grade 10 • 2h ago</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-3 h-3 bg-green-500 rounded-full mt-2 mr-3"></div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">Quiz completed</p>
                    <p className="text-xs text-gray-500">Physics Fundamentals • 4h ago</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-3 h-3 bg-orange-500 rounded-full mt-2 mr-3"></div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">Material uploaded</p>
                    <p className="text-xs text-gray-500">Mathematics Grade 10 • 1d ago</p>
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

export default Teacher