import { ArrowLeft, Mail, User, Lock, Github } from 'lucide-react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import Input from '../components/ui/FromInput/Input'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'

const Register = () => {
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
      fullName: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  })

  const handleBackClick = () => {
    navigate(`/?role=${role}`)
  }

  const handleLogin = () => {
    navigate('/login')
  }

  const onSubmit = (data) => {
    console.log('Form data:', data)
    navigate('/login')
  }

  const fullName = watch('fullName')
  const email = watch('email')
  const password = watch('password')
  const confirmPassword = watch('confirmPassword')

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-md mx-auto">
        <div className="mb-8">
          <Button 
            onClick={handleBackClick}
            className="flex items-center bg-gray-200 text-gray-800 hover:bg-[#FAA533] hover:text-gray-800 transition-colors"
            variant="primary2"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home 
          </Button>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Create Account</h1>
            <p className="text-gray-600">
                Create your teacher account and start your educational journey
            </p>
          </div>

          <div className="space-y-4 mb-6">
            <Button className="w-full flex items-center justify-center py-3 px-4 border border-gray-300 rounded-lg transition-colors"
            variant="secondary"
            >
              <Mail className="w-5 h-5 mr-3 text-gray-600" />
              <span className="text-gray-700 font-medium">Continue with Google</span>
            </Button>
            
            <Button className="w-full flex items-center justify-center py-3 px-4 border border-gray-300 rounded-lg transition-colors"
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
            type="text"
            label="Full Name"
            value={fullName}
            placeholder="Enter your full name"
            icon={<User className="w-5 h-5 text-gray-400" />}
            required
            {...register('fullName', {
              required: 'Full name wajib diisi',
              minLength: {
                value: 2,
                message: 'Full name minimal 2 karakter'
              }
            })}
            error={errors.fullName?.message}
          />

          <Input 
            type="email"
            label="Email"
            value={email}
            placeholder="Enter your email"
            icon={<Mail className="w-5 h-5 text-gray-500" />}
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

          <Input
            type="password"
            label="Confirm Password"
            value={confirmPassword}
            placeholder="Enter your password"
            icon={<Lock className="w-5 h-5 text-gray-400" />}
            required
            {...register('confirmPassword', {
              required: 'Konfirmasi password wajib diisi',
              validate: value => value === password || 'Password tidak cocok'
            })}
            error={errors.confirmPassword?.message}
          />

          <Button className="w-full bg-blue-600 text-white font-semibold py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors mb-4"
            variant="primary3"
          >
            Create Account
          </Button>

          <div className="text-center">
            <span className="text-gray-600">Already have an account? </span>
            <button className="text-blue-600 hover:text-blue-700 font-medium"
            onClick={handleLogin}>
              Sign in
            </button>
          </div>
        </div>

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

export default Register