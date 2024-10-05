import { useContext } from 'react'
import { ThemeContext } from '../constexts/ThemeContext'

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme error')
  }
}
