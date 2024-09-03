import { createContext, ReactNode, useState } from 'react'
import { BoardInterface } from '../types'

interface TrashContextType {
  trashItems: BoardInterface[]
  addTrashItem: (trashItem: BoardInterface) => void
  removeTrashItem: (trashItem: BoardInterface) => void
  emptyTrash: () => void
}
export const TrashContext = createContext<TrashContextType | undefined>(
  undefined,
)

export const TrashProvider: React.FC<{ children: ReactNode }> = ({
  children,
}: {
  children: ReactNode
}) => {
  const [trashList, setTrashList] = useState<BoardInterface[]>([])

  const addTrashItem = (trashItem: BoardInterface) => {
    setTrashList([...trashList, trashItem])
  }
  const removeTrashItem = (trashItem: BoardInterface) => {
    setTrashList(trashList.filter((item) => item.id !== trashItem.id))
  }
  const emptyTrash = () => {
    setTrashList([])
  }

  return (
    <TrashContext.Provider
      value={{
        trashItems: trashList,
        addTrashItem,
        removeTrashItem,
        emptyTrash,
      }}
    >
      {children}
    </TrashContext.Provider>
  )
}
