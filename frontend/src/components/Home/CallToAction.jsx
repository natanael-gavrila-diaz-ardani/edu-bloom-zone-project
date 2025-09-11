import { useNavigate } from 'react-router-dom'
import Button from '../ui/Button'

const CallToAction = () => {
    const navigate = useNavigate()

    const handleTeacherClick = () => {
      navigate('/login?role=teacher')
    }
  
    const handleStudentClick = () => {
      navigate('/login?role=student')
    }
    
    return (
        <div className="bg-blue-600 py-20 px-16">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Start Your Learning Journey?
                </h2>
                
                <p className="text-xl text-white mb-10 leading-relaxed max-w-2xl mx-auto">
                Join thousands of teachers and students already using EduConnect to enhance their educational experience.
                </p>
                
                <div className="flex gap-6 justify-center">
                <Button 
                    onClick={handleTeacherClick}
                    variant="primary"
                    size="md"
                >
                    Start as Teacher
                </Button>
                
                <Button 
                    onClick={handleStudentClick}
                    variant="primary"
                    size="md"
                >
                    Join as Student
                </Button>
                </div>
            </div>
        </div>
    )
}

export default CallToAction