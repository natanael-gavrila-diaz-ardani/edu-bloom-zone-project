import { BookOpen, MessageSquare, Upload, Users, Plus, BarChart3, Eye, ArrowDownUp, X } from 'lucide-react'
import Button from '../../../components/ui/Button'
import Card from '../../../components/ui/Card'
import { useForm } from 'react-hook-form'
import { TeacherData } from '../../../Data/Home/TeacherData'
import Modal from '../../../components/Modal/Modal'
import { useState } from 'react'
import Input from '../../../components/ui/FromInput/Input'
import ClassRooms from '../../../Data/Dashboard/Teacher/ClassRooms'

const Teacher = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [showCreateForm, setShowCreateForm] = useState(false)

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm({
    defaultValues: {
      classroom: '',
      classroomName: '',
      classroomDescription: ''
    }
  })

  const classroom = watch('classroom')
  const title = watch('title')
  const classroomName = watch('classroomName')

  const onSubmit = (data) => {
    console.log('Form data:', data)
    if (data.classroomName) {
      console.log('Creating classroom:', data.classroomName)
      setShowCreateForm(false)
    } else {
      console.log('Uploading material:', data)
      setIsOpen(false)
    }
  }

  return (
    <div className="min-h-screen w-ful bg-gray-50">
      <div className="max-w-8xl mx-auto py-6 px-8 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 p-2 lg:grid-cols-4 gap-4 md:gap-6 mb-6">
          {TeacherData.map((teacher) => {
            return (
              <Card
                key={teacher.id}
                variant={teacher.variant}
                title={teacher.title}
                value={teacher.value}
                valueColor={teacher.valueColor}
                bgColor={teacher.bgColor}
                icon={teacher.icon}
              />
            )
          })}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-3 md:gap-6">
          <div className="lg:col-span-3">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-black text-2xl text-left font-bold">My Classrooms</h2>
              <Button
                onClick={() => setShowCreateForm(true)}
                className="bg-[#1b91f7] flex items-center text-white hover:text-white font-semibold rounded-lg hover:bg-blue-600 transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105 text-lg">
                <Plus className="h-5 w-5" />
                <span className="text-sm font-medium">Create Classroom</span>
              </Button>
            </div>

            {showCreateForm && (
              <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-800">Create New Classroom</h3>
                </div>
                
                <p className="text-gray-600 text-sm mb-6">
                  Set up a new learning environment for your students
                </p>
                
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  <Input
                    type="text"
                    label="Classroom Name"
                    value={classroomName}
                    placeholder="e.g., Mathematics Grade 10"
                    required
                    {...register('classroomName', {
                      required: 'Classroom name is required'
                    })}
                    error={errors.classroomName?.message}
                  />

                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2 text-left">
                      Description <span className="text-gray-400">(Optional)</span>
                    </label>
                    <textarea
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                      rows={3}
                      placeholder="Brief description of the classroom"
                      {...register('classroomDescription')}
                    />
                  </div>

                  <div className="flex gap-3 pt-4">
                    <Button
                      type="submit"
                      className="flex-1 bg-blue-600 text-white hover:bg-blue-700"
                    >
                      Create Classroom
                    </Button>
                    <Button
                      type="button"
                      onClick={() => setShowCreateForm(false)}
                      className="px-4 py-2 bg-white border border-gray-300 text-gray-700 hover:bg-[#FAA533] rounded-lg text-sm"
                      variant='cancel'
                    >
                      Cancel
                    </Button>
                  </div>
                </form>
              </div>
            )}
            <div className="grid grid-cols-1 gap-4">
              {ClassRooms.map((classroom) => {
                return (
                  <Card
                    key={classroom.id}
                    variant="classroom"
                    title={classroom.title}
                    subtitle={classroom.subtitle}
                    code={classroom.code}
                    onCopyCode={() => navigator.clipboard.writeText(classroom.code)}
                    stats={[
                      { icon: <Users className="w-4 h-4" />, label: `${classroom.students} students` },
                      { icon: <BookOpen className="w-4 h-4" />, label: `${classroom.materials} materials` }
                    ]}
                    actions={[
                      { 
                        label: "View", 
                        icon: <Eye className="w-4 h-4" />, 
                        variant: "outline",
                        onClick: () => console.log("View clicked")
                      },
                      { 
                        label: "Add Material", 
                        icon: <Upload className="w-4 h-4" />, 
                        variant: "primary",
                        onClick: () => setIsOpen(true)
                      }
                    ]}
                  />
                )
              })}
            </div>
          </div>

          <div className="lg:col-span-1 space-y-6">
            <Card variant="sidebar" title="Quick Actions">
              <div className="space-y-3">
                <Button 
                onClick={() => setIsOpen(true)}
                className="w-full flex bg-[#f7f9fa] items-center p-3 text-left hover:bg-orange-400 rounded-lg duration-200">
                  <Upload className="w-4 h-4 mr-4 text-gray-700" />
                  <span className="text-gray-700">Upload Material</span>
                </Button>
                <Modal
                  isOpen={isOpen}
                  onClose={() => setIsOpen(false)}
                  Icon={<Upload className="w-6 h-6 mr-1 text-gray-700" />}
                  title="Upload Learning Material"
                >
                  <form onSubmit={handleSubmit(onSubmit)} className="space-x-4">
                    <Input
                      type="select"
                      label="Classroom"
                      value={classroom}
                      placeholder="Select a classroom"
                      icon={<ArrowDownUp   className="w-5 h-5 text-gray-400" />}
                      options={[
                        { value: 'math-10', label: 'Mathematics Grade 10' },
                        { value: 'physics-11', label: 'Physics Grade 11' },
                        { value: 'chemistry-12', label: 'Chemistry Grade 12' }
                      ]}
                      required
                      {...register('classroom', {
                        required: 'Classroom is required'
                      })}
                      error={errors.classroom?.message}
                    />

                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2 text-left">
                        File <span className="text-red-500">*</span>
                      </label>
                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-gray-400 transition-colors cursor-pointer">
                        <Upload className="w-5 h-5 text-gray-400 mx-auto mb-4" />
                          <p className="text-gray-600 mb-2">Click to select a file or drag and drop</p>
                          <p className="text-sm text-gray-500">PDF, Word, PowerPoint, Text, or Images (max 10MB)</p>
                          <Input 
                            type="file"
                            className="hidden"
                            accept=".pdf, .doc, .docx, .ppt, .pptx, .txt, .jpg, .jpeg, .png"
                            {...register('file', {
                              required: 'File is required'
                            })}
                          />
                      </div>
                        {errors.file?.message && (
                          <p className="text-red-500 text-sm mt-1">{errors.file.message}</p>
                        )}
                    </div>

                    <Input
                      type="text"
                      label="Title"
                      value={title}
                      placeholder="Enter material title"
                      required
                      {...register('title', {
                        required: 'Title is required',
                        minLength: {
                          value: 3,
                          message: 'Title must be at least 3 characters'
                        }
                      })}
                      error={errors.title?.message}
                    />

                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2 text-left">
                        Description(Optional)
                      </label>
                      <textarea
                        className="w-full py-2 px-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                        rows={3}
                        placeholder="Brief-description of the material"
                        {...register('description')}
                      />
                    </div>

                    <div className="flex gap-3 pt-4">
                      <Button
                        type="submit"
                        className="flex-1 bg-blue-600 text-white hover:bg-blue-700 px-8 py-3 rounded-lg"
                        variant='upload'
                      >
                        Upload Material
                      </Button>
                      <Button
                        type="button"
                        onClick={() => setIsOpen(false)}
                        className="px-4 py-2 bg-white border border-gray-300 text-gray-700 hover:bg-[#FAA533] rounded-lg text-sm"
                        variant='cancel'
                      >
                        Cancel
                      </Button>
                    </div>
                  </form>
                </Modal>

                <Button className="w-full flex items-center bg-[#f7f9fa] p-3 text-left hover:bg-orange-400 rounded-lg transition-colors">
                  <BarChart3 className="w-4 h-4 mr-4 text-gray-700" />
                  <span className="text-gray-700">View Analytics</span>
                </Button>
                <Button className="w-full flex items-center p-3 bg-[#f7f9fa] text-left hover:bg-orange-400 rounded-lg transition-colors">
                  <MessageSquare className="w-5 h-5 mr-4 text-gray-700" />
                  <span className="text-gray-700">Send Message</span>
                </Button>
              </div>
            </Card>

            <Card variant="sidebar" title="Recent Activity">
              <div className="space-y-4">
                <div className="flex items-start bg-[#f7f9fa] rounded-lg p-3">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mt-2 mr-3"></div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">New student joined</p>
                    <p className="text-xs text-gray-500">Mathematics Grade 10 • 2h ago</p>
                  </div>
                </div>
                <div className="flex items-start bg-[#f7f9fa] rounded-lg p-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full mt-2 mr-3"></div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">Quiz completed</p>
                    <p className="text-xs text-gray-500">Physics Fundamentals • 4h ago</p>
                  </div>
                </div>
                <div className="flex items-start bg-[#f7f9fa] rounded-lg p-3">
                  <div className="w-3 h-3 bg-orange-500 rounded-full mt-2 mr-3"></div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">Material uploaded</p>
                    <p className="text-xs text-gray-500">Mathematics Grade 10 • 1d ago</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Teacher