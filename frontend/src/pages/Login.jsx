import { ArrowLeft, Mail, Lock, Github } from 'lucide-react'
import { useNavigate, useSearchParams } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const role = searchParams.get('role') || 'teacher'

  const handleBackClick = () => {
    navigate('/')
  }

  const handleRegisterClick = () => {
    navigate(`/register?role=${role}`)
  }

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-md mx-auto">
        <div className="mb-8">
          <button 
            onClick={handleBackClick}
            className="flex items-center text-gray-600 hover:bg-gray-200 hover:text-gray-800 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </button>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Welcome Back</h1>
            <p className="text-gray-600">
              Sign in to your {role} account to continue learning
            </p>
          </div>

          <div className="space-y-4 mb-6">
            <button className="w-full flex items-center justify-center py-3 px-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              <Mail className="w-5 h-5 mr-3 text-gray-600" />
              <span className="text-gray-700 font-medium">Continue with Google</span>
            </button>
            
            <button className="w-full flex items-center justify-center py-3 px-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              <Github className="w-5 h-5 mr-3 text-gray-600" />
              <span className="text-gray-700 font-medium">Continue with GitHub</span>
            </button>
          </div>

          <div className="relative mb-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">or</span>
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-bold text-gray-700 mb-2 text-left">Email</label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full pl-10 pr-4 py-3 text-black border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-bold text-gray-700 mb-2 text-left">Password</label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full pl-10 pr-4 py-3 border text-black border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          <button className="w-full bg-blue-600 text-white font-semibold py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors mb-4">
            Sign In
          </button>

          <div className="text-center">
            <span className="text-gray-600">Dont have an account? </span>
            <button className="text-blue-600 hover:text-blue-700 font-medium"
            onClick={handleRegisterClick}>
              Sign up
            </button>
          </div>
        </div>

        <div className="bg-blue-50 rounded-2xl p-6">
          <h3 className="text-lg font-bold text-gray-800 mb-3">
            {role === 'teacher' ? 'Teacher Benefits' : 'Student Benefits'}
          </h3>
          <p className="text-gray-600 leading-relaxed">
            {role === 'teacher' 
              ? 'Create unlimited classrooms, upload materials, track student progress, and engage with your students in real-time.'
              : 'Join classrooms, access learning materials, track your progress, and collaborate with teachers and fellow students.'
            }
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login
