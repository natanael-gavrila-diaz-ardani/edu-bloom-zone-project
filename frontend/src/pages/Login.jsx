import { ArrowLeft, Mail, Github, Lock } from 'lucide-react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import Card from '../components/ui/Card'
import Button from '../components/ui/Button'
import Input from '../components/ui/FromInput/Input'

const Login = () => {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const role = searchParams.get('role') || 'teacher'

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm({
    defaultValues: {
      email: '',
      password: ''
    }
  })

  const email = watch('email')
  const password = watch('password')

  const handleBackClick = () => {
    navigate(`/?role=${role}`)
  }

  const handleRegisterClick = () => {
    navigate(`/register?role=${role}`)
  }

  const handleLogin = () => {
    navigate('/teacher')
  }

  const onSubmit = (data) => {
    console.log('Form data:',data)
    navigate('/teacher')
  }

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-md mx-auto">
        <div className="mb-8">
          <Button 
            onClick={handleBackClick}
            className="flex items-center bg-gray-200 hover:bg-[#FAA533] hover:text-gray-800 transition-colors"
            variant="primary2"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </Button>
        </div>

        <Card 
          className="mb-8 p-8 !cursor-default hover:!scale-100 hover:!shadow-sm active:!scale-100 active:!translate-y-0 [&_h3]:text-center [&_h3]:text-4xl [&_h3]:font-extrabold [&_h3]:text-gray-600 [&_h3]:mb-6 [&_p]:text-center [&_p]:mb-8"
          title="Welcome Back"
          description={`Sign in to your ${role} account to continue learning`}
        >
          <div className="space-y-4 mb-6 mt-4">
            <Button className="w-full flex items-center justify-center py-2 px-10 border border-gray-300 rounded-lg hover:bg-[#FAA533] transition-colors"
              variant="secondary"
            > 
              <Mail className="w-5 h-5 mr-3 text-gray-600" />
              <span className="text-gray-700 font-medium">Continue with Google</span>
            </Button>
            
            <Button className="w-full flex items-center justify-center py-2 px-4 border border-gray-300 rounded-lg hover:bg-[#FAA533] transition-colors"
              variant="secondary"
            >
              <Github className="w-5 h-5 mr-3 text-gray-600" />
              <span className="text-gray-700 font-medium">Continue with GitHub</span>
            </Button>
          </div>

          <div className="relative mb-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">or</span>
            </div>
          </div>

          <Input
              type="email"
              label="email"
              value={email}
              placeholder="Enter your email"
              icon={<Mail className="w-5 h-5 text-gray-400" />}
              required
              {...register('email', {
                required: 'Email wajib diisi',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Format email tidak valid'
                }
              })}
              error={errors.email?.message}
            />

          <Input
            type="password"
            label="password"
            value={password}
            placeholder="Enter your password"
            icon={<Lock className="w-5 h-5 text-gray-400" />}
            required
            {...register('password', {
              required: 'Password wajib diisi',
              minLength: {
                value: 6,
                message: 'Password minimal 6 karakter'
              }
            })}
            error={errors.password?.message}
          />

          <Button className="w-full bg-blue-600 text-white font-semibold py-3 px-4 rounded-lg hover:text-gray-800 hover:bg-blue-700 transition-colors mb-4"
            variant="primary3"
          onClick={handleLogin}
          >
            Sign In
          </Button>

          <div className="text-center">
            <span className="text-gray-600">Dont have an account? </span>
            <button className="text-blue-600 hover:text-blue-700 font-medium"
            onClick={handleRegisterClick}>
              Sign up
            </button>
          </div>
        </Card>

        <Card 
          className="p-6 bg-[#f2faf9] text-center !cursor-default hover:!scale-100 hover:!shadow-sm active:!scale-100 active:!translate-y-0 [&_h3]:text-center [&_h3]:text-2xl [&_h3]:font-bold [&_h3]:text-gray-800"
          title={role === 'teacher' ? 'Teacher Benefits' : 'Student Benefits'}
          description={role === 'teacher' 
            ? 'Create unlimited classrooms, upload materials, track student progress, and engage with your students in real-time.'
            : 'Join classrooms, access learning materials, track your progress, and collaborate with teachers and fellow students.'
          }
        />
      </div>
    </div>
  )
}

export default Login
