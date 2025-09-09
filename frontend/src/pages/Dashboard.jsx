import { useAuth } from '../hooks/useAuth'
import { BookOpen, Users, Award, TrendingUp } from 'lucide-react'

const Dashboard = () => {
  const { user } = useAuth()

  const stats = [
    {
      name: 'Kursus Diikuti',
      value: '12',
      icon: BookOpen,
      change: '+2 dari bulan lalu',
      changeType: 'positive'
    },
    {
      name: 'Jam Belajar',
      value: '48',
      icon: TrendingUp,
      change: '+12 dari bulan lalu',
      changeType: 'positive'
    },
    {
      name: 'Sertifikat',
      value: '5',
      icon: Award,
      change: '+1 dari bulan lalu',
      changeType: 'positive'
    },
    {
      name: 'Progress Rata-rata',
      value: '85%',
      icon: Users,
      change: '+5% dari bulan lalu',
      changeType: 'positive'
    }
  ]

  const recentCourses = [
    {
      id: 1,
      title: 'React.js Fundamentals',
      instructor: 'John Doe',
      progress: 75,
      thumbnail: '/api/placeholder/300/200'
    },
    {
      id: 2,
      title: 'Node.js Backend Development',
      instructor: 'Jane Smith',
      progress: 45,
      thumbnail: '/api/placeholder/300/200'
    },
    {
      id: 3,
      title: 'MongoDB Database Design',
      instructor: 'Mike Johnson',
      progress: 90,
      thumbnail: '/api/placeholder/300/200'
    }
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">
          Selamat datang, {user?.firstName}!
        </h1>
        <p className="text-gray-600 mt-2">
          Lanjutkan perjalanan belajar Anda dan capai tujuan yang telah ditetapkan.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => (
          <div key={stat.name} className="card">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="bg-primary-100 p-3 rounded-lg">
                  <stat.icon className="h-6 w-6 text-primary-600" />
                </div>
              </div>
              <div className="ml-4 flex-1">
                <p className="text-sm font-medium text-gray-600">{stat.name}</p>
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                <p className={`text-sm ${
                  stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
                }`}>
                  {stat.change}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Courses */}
        <div className="lg:col-span-2">
          <div className="card">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-900">Kursus Terbaru</h2>
              <a href="/courses" className="text-primary-600 hover:text-primary-700 font-medium">
                Lihat Semua
              </a>
            </div>
            <div className="space-y-4">
              {recentCourses.map((course) => (
                <div key={course.id} className="flex items-center space-x-4 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-12 bg-gray-200 rounded-lg flex items-center justify-center">
                      <BookOpen className="h-6 w-6 text-gray-400" />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-medium text-gray-900 truncate">
                      {course.title}
                    </h3>
                    <p className="text-sm text-gray-500">oleh {course.instructor}</p>
                    <div className="mt-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600">Progress</span>
                        <span className="font-medium text-gray-900">{course.progress}%</span>
                      </div>
                      <div className="mt-1 bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-primary-600 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${course.progress}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Actions & Announcements */}
        <div className="space-y-6">
          {/* Quick Actions */}
          <div className="card">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Aksi Cepat</h2>
            <div className="space-y-3">
              <a
                href="/courses"
                className="w-full btn-primary text-center block"
              >
                Jelajahi Kursus
              </a>
              <a
                href="/profile"
                className="w-full btn-secondary text-center block"
              >
                Edit Profil
              </a>
              <a
                href="/certificates"
                className="w-full btn-secondary text-center block"
              >
                Lihat Sertifikat
              </a>
            </div>
          </div>

          {/* Announcements */}
          <div className="card">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Pengumuman</h2>
            <div className="space-y-4">
              <div className="p-3 bg-blue-50 rounded-lg">
                <h3 className="text-sm font-medium text-blue-900 mb-1">
                  Kursus Baru Tersedia!
                </h3>
                <p className="text-sm text-blue-700">
                  Daftar sekarang untuk kursus "Advanced React Patterns" yang akan dimulai minggu depan.
                </p>
              </div>
              <div className="p-3 bg-green-50 rounded-lg">
                <h3 className="text-sm font-medium text-green-900 mb-1">
                  Sertifikat Siap!
                </h3>
                <p className="text-sm text-green-700">
                  Sertifikat untuk kursus "JavaScript Fundamentals" sudah tersedia untuk diunduh.
                </p>
              </div>
              <div className="p-3 bg-yellow-50 rounded-lg">
                <h3 className="text-sm font-medium text-yellow-900 mb-1">
                  Maintenance
                </h3>
                <p className="text-sm text-yellow-700">
                  Sistem akan mengalami maintenance pada Minggu, 15 Januari 2024 pukul 02:00-04:00 WIB.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
