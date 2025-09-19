import { Outlet, Link, useLocation } from 'react-router-dom'
import { useState } from 'react'
import { Menu, X, LogIn, MessageSquare, Settings, Bell, User, Lock, Mail } from 'lucide-react'
import Modal from './Modal/Modal'
import Input from './ui/FromInput/Input'
import Tab from './ui/tab'
import { useForm } from 'react-hook-form'

const Layout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSettingsOpen, setIsSettingsOpen] = useState(false)
  const [activeTab, setActiveTab] = useState('profile')
  const [notificationSettings, setNotificationSettings] = useState({
    emailNotifications: true,
    pushNotifications: true,
    assignmentReminders: true,
    studentMessages: true
  })
  const location = useLocation()

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm() 

  const fullName = watch('fullName')
  const email = watch('email')
  const bio = watch('bio')
  const currentPassword = watch('currentPassword')
  const newPassword = watch('newPassword')
  const confirmNewPassword = watch('confirmNewPassword')

  const hideNavbarPaths = ['/', '/login', '/register']
  const shouldShowNavbar = !hideNavbarPaths.includes(location.pathname)

  const navigation = [
    { name: 'Messages', href: '/', current: location.pathname === '/', icon: MessageSquare },
    { name: 'Settings', href: '#', current: location.pathname === '/', icon: Settings, onClick: () => setIsSettingsOpen(true) },
    { name: 'Logout', href: '/', current: location.pathname === '/', icon: LogIn },
  ]

  const handleNotificationToggle = (setting) => {
    setNotificationSettings(prev => ({
      ...prev,
      [setting]: !prev[setting]
    }))
  }

  const renderProfileTab = () => (
    <div className="space-y-6">
      <div className="flex items-center space-x-2">
        <User className="w-5 h-5 text-gray-600" />
        <h3 className="text-lg font-semibold text-gray-900">Profile Information</h3>
      </div>

      {/* Avatar Section */}
      <div className="flex items-center space-x-4">
        <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center">
          <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        <button className="flex items-center bg-gray-50 space-x-2 px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
          </svg>
          <span>Change Avatar</span>
        </button>
      </div>

      {/* Form Fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
          <Input
            type="text" 
            value={fullName}
            icon={<User className="w-5 h-5 text-gray-400" />}
            placeholder="Enter your full name"
            className="w-full px-3 py-2 border bg-gray-50 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            {...register('fullName', { required: 'Full name must be filled in' })}
          />
        </div>
        
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
          <Input 
            type="email" 
            value={email}
            icon={<Mail className="w-5 h-5 text-gray-400" />}
            placeholder="Enter your email"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            {...register('email', { required: 'Email must be filled in' })}
          />
        </div>
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Bio</label>
        <textarea 
          rows={4}
          value={bio}
          placeholder="Tell students about yourself"
          className="w-full px-3 bg-gray-50 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
          {...register('bio', { required: 'Bio wajib diisi' })}
        />
      </div>

      {/* Save Button */}
      <div className="flex justify-end">
        <button
          onClick={() => {
            console.log("Profile saved")
            setIsSettingsOpen(false)
          }}
          className="px-6 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Save Profile
        </button>
      </div>
    </div>
  )

  const renderNotificationsTab = () => (
    <div className="space-y-6">
      <div className="flex items-center space-x-2">
        <Bell className="w-5 h-5 text-gray-600" />
        <h3 className="text-lg font-semibold text-gray-900">Notification Preferences</h3>
      </div>

      <div className="space-y-4">
        {/* Email Notifications */}
        <div className="flex items-center justify-between p-4 bg-white border border-gray-200 rounded-lg">
          <div className="flex-1">
            <h4 className="text-sm font-medium text-gray-900">Email Notifications</h4>
            <p className="text-sm text-gray-500">Receive updates via email</p>
          </div>
          <button
            onClick={() => handleNotificationToggle('emailNotifications')}
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
              notificationSettings.emailNotifications ? 'bg-blue-600' : 'bg-gray-200'
            }`}
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                notificationSettings.emailNotifications ? 'translate-x-6' : 'translate-x-1'
              }`}
            />
          </button>
        </div>

        {/* Push Notifications */}
        <div className="flex items-center justify-between p-4 bg-white border border-gray-200 rounded-lg">
          <div className="flex-1">
            <h4 className="text-sm font-medium text-gray-900">Push Notifications</h4>
            <p className="text-sm text-gray-500">Receive browser notifications</p>
          </div>
          <button
            onClick={() => handleNotificationToggle('pushNotifications')}
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
              notificationSettings.pushNotifications ? 'bg-blue-600' : 'bg-gray-200'
            }`}
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                notificationSettings.pushNotifications ? 'translate-x-6' : 'translate-x-1'
              }`}
            />
          </button>
        </div>

        {/* Assignment Reminders */}
        <div className="flex items-center justify-between p-4 bg-white border border-gray-200 rounded-lg">
          <div className="flex-1">
            <h4 className="text-sm font-medium text-gray-900">Assignment Reminders</h4>
            <p className="text-sm text-gray-500">Get notified about upcoming assignments</p>
          </div>
          <button
            onClick={() => handleNotificationToggle('assignmentReminders')}
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
              notificationSettings.assignmentReminders ? 'bg-blue-600' : 'bg-gray-200'
            }`}
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                notificationSettings.assignmentReminders ? 'translate-x-6' : 'translate-x-1'
              }`}
            />
          </button>
        </div>

        {/* Student Messages */}
        <div className="flex items-center justify-between p-4 bg-white border border-gray-200 rounded-lg">
          <div className="flex-1">
            <h4 className="text-sm font-medium text-gray-900">Student Messages</h4>
            <p className="text-sm text-gray-500">Notify when students send messages</p>
          </div>
          <button
            onClick={() => handleNotificationToggle('studentMessages')}
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
              notificationSettings.studentMessages ? 'bg-blue-600' : 'bg-gray-200'
            }`}
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                notificationSettings.studentMessages ? 'translate-x-6' : 'translate-x-1'
              }`}
            />
          </button>
        </div>
      </div>

      {/* Save Button */}
      <div className="flex justify-end">
        <button
          onClick={() => {
            console.log("Notification settings saved", notificationSettings)
            setIsSettingsOpen(false)
          }}
          className="w-full px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Save Notification Settings
        </button>
      </div>
    </div>
  )

  const renderSecurityTab = () => (
    <div className="space-y-6">
      <div className="flex items-center space-x-2">
      <Lock className="w-5 h-5 text-gray-600" />
        <h3 className="text-lg font-semibold text-gray-900">Security Settings</h3>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Current Password</label>
          <Input
            type="password" 
            value={currentPassword}
            icon={<Lock className="w-5 h-5 text-gray-400" />}
            placeholder="Enter current password"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            {...register('currentPassword', { required: 'Current password must be filled in' })}
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">New Password</label>
          <Input
            type="password" 
            value={newPassword}
            icon={<Lock className="w-5 h-5 text-gray-400" />}
            placeholder="Enter new password"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            {...register('newPassword', { required: 'A new password must be entered.' })}
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Confirm New Password</label>
          <Input
            type="password" 
            value={confirmNewPassword}
            icon={<Lock className="w-5 h-5 text-gray-400" />}
            placeholder="Confirm new password"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            {...register('confirmNewPassword', { required: 'Confirm new password must be filled in' })}
          />
        </div>
      </div>

      <div className="flex justify-end">
        <button
          onClick={() => {
            console.log("Security settings saved")
            setIsSettingsOpen(false)
          }}
          className="px-6 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Update Password
        </button>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-gray-50">
      {shouldShowNavbar && (
        <nav className="sticky top-0 z-50 bg-white shadow-sm border-b">
          <div className="max-w-8xl mx-auto px-8 md:px-12 lg:px-16">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <Link to="/" className="flex flex-col items-start">
                  <h1 className="text-2xl font-bold text-[#0f87ff]">Edu Bloom Zone</h1>
                  <span className="text-base text-gray-500">Teacher Dashboard</span>
                </Link>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-8">
                {navigation.map((item) => {
                  const IconComponent = item.icon
                  return (
                    <Link
                      key={item.name}
                      to={item.href}
                      onClick={item.onClick}
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

      <Modal
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
        title="Teacher Settings"
        Icon={<Settings className="w-6 h-6 mr-1 text-gray-700" />}
      >
        <div className="space-y-6">
          <div className="border-b border-gray-200 pb-6">
            <nav className="-mb-px flex space-x-2">
              <Tab 
                isActive={activeTab === 'profile'}
                onClick={() => setActiveTab('profile')}
                variant="Button"
              >
                Profile
              </Tab>
              <Tab 
                isActive={activeTab === 'notifications'}
                onClick={() => setActiveTab('notifications')}
                variant="Button"
              >
                Notifications
              </Tab>
              <Tab 
                isActive={activeTab === 'security'}
                onClick={() => setActiveTab('security')}
                variant="Button"
              >
                Security
              </Tab>
            </nav>
          </div>
          
          {activeTab === 'profile' && renderProfileTab()}
          {activeTab === 'notifications' && renderNotificationsTab()}
          {activeTab === 'security' && renderSecurityTab()}
        </div>
      </Modal>
    </div>
  )
}

export default Layout
