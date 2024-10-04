import { useContext } from 'react'
import { AuthContext } from '../constexts/AuthContext'

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth error')
  }
  return context
}
