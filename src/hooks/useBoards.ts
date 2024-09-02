import { useContext } from 'react'
import { BoardContext } from '../constexts/BoardContext'

export const useBoards = () => {
  const context = useContext(BoardContext)
  if (!context) {
    throw new Error('useBoards error')
  }
  return context
}
