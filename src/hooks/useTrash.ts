import { useContext } from 'react'
import { TrashContext } from '../constexts/TrashContext'
export const useTrash = () => {
  const context = useContext(TrashContext)
  if (context === undefined) {
    throw new Error('useTrash must be used within a TrashProvider')
  }
  return context
}
