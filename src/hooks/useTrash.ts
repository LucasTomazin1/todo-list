import { useContext } from 'react'
import { TrashContext } from '../constexts/TrashContext'
export const useTrash = () => {
  const context = useContext(TrashContext)
  if (!context) {
    throw new Error('useTrash error')
  }
  return context
}
