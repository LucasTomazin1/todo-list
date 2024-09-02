import { useContext } from 'react'
import { ArchiveContext } from '../constexts/ArchiveContext'

export const useArchive = () => {
  const context = useContext(ArchiveContext)
  if (!context) {
    throw new Error('useArchive error')
  }
  return context
}
