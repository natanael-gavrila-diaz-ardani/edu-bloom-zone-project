import { Outlet, Link, useLocation } from 'react-router-dom'
import { useState } from 'react'
import { Menu, X, BookOpen, Trophy, MessageCircle, Settings, LogOut } from 'lucide-react'

const Layout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  // Halaman yang tidak perlu navbar
  const hideNavbarPaths = ['/', '/login', '/register']
  const shouldShowNavbar = !hideNavbarPaths.includes(location.pathname)

  const navigation = [
    { name: 'Messages', href: '/', current: location.pathname === '/', icon: MessageCircle },
    { name: 'Settings', href: '/about', current: location.pathname === '/about', icon: Settings },
    // { name: 'Kontak', href: '/contact', current: location.pathname === '/contact' },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation - Hanya tampil di halaman tertentu */}
      {shouldShowNavbar && (
        <nav className="sticky top-0 z-50 bg-white shadow-sm border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-20">
              <div className="flex flex-col items-start py-4">
                <Link to="/" className="flex items-center space-x-2">
                  <span className="text-xl font-bold bg-gradient-to-r from-[#12BF86] to-[#45DFAC] bg-clip-text text-transparent">
                    EduConnect
                  </span>
                </Link>
                <span className='text-sm text-gray-500'>Student Dashboard</span>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-8">
                <div className='flex items-center gap-2 px-2 py-1 rounded-full text-white text-xs bg-gradient-to-r from-green-500 to-green-400'>
                  <Trophy className="w-3 h-3"></Trophy>
                  <span>200 pts</span>
                </div>

                {navigation.map((item) => {
                  const Icon = item.icon
                  return (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${item.current
                          ? 'text-primary-600 bg-primary-50'
                          : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
                        }`}
                    >
                      <Icon className="w-4 h-4" />
                      {item.name}
                    </Link>
                  )
                })}
                <button className='flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-primary-600 bg-gray-50 hover:bg-gray-100 transition-colors'>
                  <LogOut className="w-4 h-4"></LogOut>
                  <span>Logout</span>
                </button>
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
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${item.current
                      ? 'text-primary-600 bg-primary-50'
                      : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
                      }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
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
