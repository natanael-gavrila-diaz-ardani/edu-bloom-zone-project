import { BookOpen, MessageSquare, Upload, Users, Plus, BarChart3, Eye } from 'lucide-react'
import Button from '../../../components/ui/Button'
import Card from '../../../components/ui/Card'

const Teacher = () => {

  return (
    <div className="min-h-screen w-ful bg-gray-50">
      <div className="max-w-8xl mx-auto py-6 px-8 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 md:gap-6 mb-6">
          <Card
            variant="kpi"
            title="Total Classrooms"
            value="1"
            valueColor="text-blue-600"
            bgColor="bg-blue-50"
            icon={<BookOpen className="h-8 w-8 text-blue-600 mt-4" />}
          />
          <Card
            variant="kpi"
            title="Total Students"
            value="0"
            valueColor="text-green-600"
            bgColor="bg-green-50"
            icon={<Users className="h-8 w-8 text-green-600 mt-4" />}
          />
          <Card
            variant="kpi"
            title="Materials Uploaded"
            value="1"
            bgColor="bg-orange-50"
            valueColor="text-orange-600"
            icon={<Upload className="h-8 w-8 text-orange-600 mt-4" />}
          />
          <Card
            variant="kpi"
            title="Active Chats"
            value="12"
            valueColor="text-green-600"
            bgColor="bg-green-50"
            icon={<MessageSquare className="h-8 w-8 text-green-600 mt-4" />}
          />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-3 md:gap-6">
          <div className="lg:col-span-3">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-black text-2xl text-left font-bold">My Classrooms</h2>
              <Button
                className="bg-[#1b91f7] flex items-center text-white hover:text-white font-semibold rounded-lg hover:bg-blue-600 transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105 text-lg">
                <Plus className="h-5 w-5" />
                <span className="text-sm font-medium">Create Classroom</span>
              </Button>
            </div>

            <Card
              variant="classroom"
              title="qwertyuio"
              subtitle="qwertyuio"
              code="HPNTOH"
              onCopyCode={() => navigator.clipboard.writeText('HPNTOH')}
              stats={[
                { icon: <Users className="w-4 h-4" />, label: "0 students" },
                { icon: <BookOpen className="w-4 h-4" />, label: "0 materials" }
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
                  onClick: () => console.log("Add Material clicked")
                }
              ]}
            />
          </div>

          <div className="lg:col-span-1 space-y-6">
            <Card variant="sidebar" title="Quick Actions">
              <div className="space-y-3">
                <Button className="w-full flex bg-[#f7f9fa] items-center p-3 text-left hover:bg-orange-400 rounded-lg duration-200">
                  <Upload className="w-4 h-4 mr-4 text-gray-700" />
                  <span className="text-gray-700">Upload Material</span>
                </Button>
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