import React, { createContext, useState, ReactNode } from 'react'
import { registerUser, loginUser, logoutUser } from '../api/auth'
import { useNavigate } from 'react-router-dom'

interface AuthContextProps {
  username: string
  setUsername: (username: string) => void
  email: string
  setEmail: (email: string) => void
  password: string
  setPassword: (password: string) => void
  confirmPassword: string
  setConfirmPassword: (confirmPassword: string) => void
  handleRegister: () => void
  passwordDiff: boolean
  setPasswordDiff: (passwordDiff: boolean) => void
  handleLogin: () => void
  handleLogout: () => void
  isLoggedIn: boolean
  setIsLoggedIn: (isLoggedIn: boolean) => void
}

export const AuthContext = createContext<AuthContextProps | undefined>(
  undefined,
)

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [username, setUsername] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [confirmPassword, setConfirmPassword] = useState<string>('')
  const [passwordDiff, setPasswordDiff] = useState<boolean>(false)
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)
  const router = useNavigate()
  const generateUserId = () => {
    return `user-${Date.now()}`
  }
  const handleRegister = () => {
    setPasswordDiff(false)
    if (password !== confirmPassword) {
      setPasswordDiff(true)
      return
    }
    const userId = generateUserId()
    registerUser(username, password, email, userId)
    router('/login')
  }

  const handleLogin = () => {
    const loginSuccessful = loginUser(username, password)
    if (loginSuccessful) {
      localStorage.setItem('isLoggedIn', 'true')
      setIsLoggedIn(true)
      router('/todo-list')
    }
  }

  const handleLogout = () => {
    logoutUser(username)
    localStorage.setItem('isLoggedIn', 'false')
    setIsLoggedIn(false)
    router('/todo-list')
  }

  return (
    <AuthContext.Provider
      value={{
        username,
        setUsername,
        email,
        setEmail,
        password,
        setPassword,
        confirmPassword,
        setConfirmPassword,
        handleRegister,
        passwordDiff,
        setPasswordDiff,
        handleLogin,
        isLoggedIn,
        setIsLoggedIn,
        handleLogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
