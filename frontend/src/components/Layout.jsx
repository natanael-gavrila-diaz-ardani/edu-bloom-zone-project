import { Outlet, Link, useLocation } from 'react-router-dom'
import { useState } from 'react'
import { Menu, X, LogIn, MessageSquare, Settings, Trophy } from 'lucide-react'

const Layout = ({ points }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  // Halaman yang tidak perlu navbar
  const hideNavbarPaths = ['/', '/login', '/register']
  const shouldShowNavbar = !hideNavbarPaths.includes(location.pathname)

  const roleFromUrl = location.pathname.split('/')[1] // Mengambil segmen pertama dari path

  const getDashboardTitle = () => {
    switch (roleFromUrl) {
      case 'teacher':
        return 'Teacher Dashboard'
      case 'student':
        return 'Student Dashboard'
      default:
        return 'Dashboard'
    }
  }

  const navigation = [
    { name: 'Messages', href: '/', current: location.pathname === '/', icon: MessageSquare },
    { name: 'Settings', href: '/', current: location.pathname === '/', icon: Settings },
    { name: 'Logout', href: '/', current: location.pathname === '/', icon: LogIn },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation - Hanya tampil di halaman tertentu */}
      {shouldShowNavbar && (
        <nav className="sticky top-0 z-50 bg-white shadow-sm border-b">
          <div className="max-w-7xl mx-auto md:px-12 lg:px-16">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <Link to="/" className="flex flex-col items-start">
                  <h1 className="text-2xl font-bold text">Edu Bloom Zone</h1>
                  <span className="text-base text-gray-500">{getDashboardTitle()}</span>
                </Link>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-8">
                <div className='flex items-center gap-2'>
                  {roleFromUrl === 'student' && points && (
                    <span className='flex gap-2 items-center rounded-full px-2 py-1 text-white text-xs bg-gradient-to-r from-[#24C660] to-[#47DC7D]'>
                      <Trophy className='w-3 h-3' />
                      {points}
                    </span>
                  )}
                </div>
                {navigation.map((item) => {
                  const IconComponent = item.icon
                  return (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                        item.current
                          ? 'text-primary-600 bg-primary-50'
                          : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
                      }`}
                    >
                      <IconComponent className="h-4 w-4" />
                      <span>{item.name}</span>
                    </Link>
                  )
                })}
              </div>

              {/* Mobile menu button */}
              <div className="md:hidden flex items-center">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="text-gray-700 hover:text-primary-600 p-2"
                >
                  {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
                {navigation.map((item) => {
                  const IconComponent = item.icon
                  return (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={`flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium transition-colors ${
                        item.current
                          ? 'text-primary-600 bg-primary-50'
                          : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <IconComponent className="h-5 w-5" />
                      <span>{item.name}</span>
                    </Link>
                  )
                })}
              </div>
            </div>
          )}
        </nav>
      )}

      {/* Main Content */}
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default Layout
