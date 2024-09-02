import { createContext, useState } from 'react'
import { BoardInterface } from '../types'

interface BoardContextType {
  boards: BoardInterface[]
  addBoard: (newBoard: BoardInterface) => void
}

export const BoardContext = createContext<BoardContextType | undefined>(
  undefined,
)

export const BoardProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [boards, setBoards] = useState<BoardInterface[]>([])

  const addBoard = (newBoard: BoardInterface) => {
    setBoards((prevBoards) => [...prevBoards, newBoard])
  }

  return (
    <BoardContext.Provider value={{ boards, addBoard }}>
      {children}
    </BoardContext.Provider>
  )
}
