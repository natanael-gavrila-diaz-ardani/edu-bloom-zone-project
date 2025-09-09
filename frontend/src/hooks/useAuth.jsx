import { useState, useEffect, createContext, useContext } from 'react'
import { useQuery } from 'react-query'
import api from '../services/api'

const AuthContext = createContext()

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [token, setToken] = useState(localStorage.getItem('token'))

  // Fetch user data when token exists
  const { data: userData, isLoading, error } = useQuery(
    ['user', token],
    () => api.get('/auth/me'),
    {
      enabled: !!token,
      retry: false,
      onSuccess: (response) => {
        setUser(response.data.user)
      },
      onError: () => {
        logout()
      }
    }
  )

  const login = (userData, token) => {
    setUser(userData)
    setToken(token)
    localStorage.setItem('token', token)
  }

  const logout = () => {
    setUser(null)
    setToken(null)
    localStorage.removeItem('token')
  }

  const value = {
    user,
    token,
    login,
    logout,
    loading: isLoading
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}
