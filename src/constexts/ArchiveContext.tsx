import { createContext, ReactNode, useState } from 'react'
import { BoardInterface } from '../types'

interface ArchiveContextType {
  archiveItems: BoardInterface[]
  addArchiveItem: (archiveItem: BoardInterface) => void
  removeArchiveItem: (archiveItem: BoardInterface) => void
}
export const ArchiveContext = createContext<ArchiveContextType | undefined>(
  undefined,
)

export const ArchiveProvider: React.FC<{ children: ReactNode }> = ({
  children,
}: {
  children: ReactNode
}) => {
  const [archiveList, setArchiveList] = useState<BoardInterface[]>([])

  const addArchiveItem = (archiveItem: BoardInterface) => {
    setArchiveList([...archiveList, archiveItem])
  }
  const removeArchiveItem = (archiveItem: BoardInterface) => {
    setArchiveList(archiveList.filter((item) => item.id !== archiveItem.id))
  }
  return (
    <ArchiveContext.Provider
      value={{ archiveItems: archiveList, addArchiveItem, removeArchiveItem }}
    >
      {children}
    </ArchiveContext.Provider>
  )
}
